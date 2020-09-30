
import React from 'react';
import { useHistory } from 'react-router-dom';

import ThreeDotMenu from 'components/ThreeDotMenu';
import { JoynMenuItem } from 'components/UI/JoynMenu';
import { ReactComponent as EditIcon } from 'assets/icons/svgs/edit.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import { PAGES } from 'utils/constants/links';
import { GENERICS } from 'utils/constants//common';
import PAYLOAD_KEYS from 'utils/constants/payload-keys';

const ActionsRenderer = props => {
  const history = useHistory();

  return (
    <ThreeDotMenu id={props.value}>
      <JoynMenuItem
        onClick={
          () => history.push(
            PAGES.PICKLISTS_GENERICS_EDIT.replace(`:${GENERICS.ID}`, props.node.data[PAYLOAD_KEYS.ID])
          )
        }
        icon={<EditIcon />}
        text='Edit' />
      <JoynMenuItem
        onClick={
          () => history.push(
            PAGES.PICKLISTS_GENERICS_ADD_OPTION.replace(`:${GENERICS.ID}`, props.node.data[PAYLOAD_KEYS.ID])
          )
        }
        icon={<PlusIcon />}
        text='Add Picklist Option' />
    </ThreeDotMenu>
  );
};

export default ActionsRenderer;
