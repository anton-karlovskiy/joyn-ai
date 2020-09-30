#!/usr/bin/env bash

# set to current dir
cd "$(dirname "$0")"
if [ "$#" -eq 0 ] ; then
    echo "Missing env param [devai / stageai / prodai] ... Exiting"
    exit 1
elif [ "$#" -eq 1 ] ; then
    envParam="$1"
else
    echo "Invalid param ... Exiting"
    exit 1
fi

if [ $envParam != "devai" ] && [ $envParam != "stageai" ] && [ $envParam != "prodai" ]; then
    echo "Invalid env param - $envParam. Valid values are [devai / stageai / prodai] ... Exiting"
    exit 1
fi
echo "envParam=$envParam"

buildTimestamp=$(date +%s)
echo "buildTimestamp=$buildTimestamp"

S3BucketName="joyn-allocations-web-$envParam"
echo "S3BucketName=$S3BucketName"

function load_env {

    cp .env-${envParam} .env
    status=$?

    if [ ${status} -ne 0 ]; then
        echo "env file for : ${envParam} does not exists..."
        exit 1
    fi

     export $(cat .env | xargs)
}

function deploy_ui {

    # lambda bucket
    aws s3api head-bucket --bucket ${S3BucketName} 2>/dev/null;
    status=$?

    if [ ${status} -ne 0 ]; then
        echo "Lambda bucket : ${S3BucketName} does not exists..."
        exit 1
    fi

    # cleanup
    rm -rf package-lock.json node_modules

    # build
    yarn --silent --ignore-optional
    CI=false yarn build

    status=$?
    if [ ${status} -eq 0 ]; then
        echo "UI build successful ..."
    else
        echo "UI build failed ... Exiting"
        exit 1
    fi

    # upload to s3
    aws s3 cp build/ s3://${S3BucketName} --recursive
    status=$?
    if [ ${status} -eq 0 ]; then
        echo "Upload to s3: ${S3BucketName} successful ..."
    else
        echo "Upload to s3: ${S3BucketName} failed ..."
        exit 1
    fi

    aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DIST_ID} --paths "/*"
    status=$?
    if [ ${status} -eq 0 ]; then
        echo "Cloudfront invalidation request: ${CLOUDFRONT_DIST_ID} successful ..."
    else
        echo "Cloudfront invalidation request: ${CLOUDFRONT_DIST_ID} failed ..."
        exit 1
    fi

}

function cleanup {

    rm -f .env
    echo "Cleanup complete ..."
}

load_env
deploy_ui
cleanup
