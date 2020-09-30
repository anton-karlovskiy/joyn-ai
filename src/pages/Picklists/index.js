
import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import TopToolbar from 'parts/TopToolbar';
import JoynTabs, { JoynTab } from 'components/JoynTabs';
import ButtonLink from 'components/UI/ButtonLink';
import LazyLoadingErrorBoundary from 'utils/hocs/LazyLoadingErrorBoundary';
import { PAGES } from 'utils/constants/links';

const GenericPicklists = React.lazy(() =>
  import(/* webpackChunkName: 'generic-picklists' */ 'containers/GenericPicklists')
);

const Transporters = React.lazy(() =>
  import(/* webpackChunkName: 'transporters' */ 'containers/Transporters')
);

const Purchasers = React.lazy(() =>
  import(/* webpackChunkName: 'purchasers' */ 'containers/Purchasers')
);

const TankStrappings = React.lazy(() =>
  import(/* webpackChunkName: 'tank-strappings' */ 'containers/TankStrappings')
);

const DynamicLookups = React.lazy(() =>
  import(/* webpackChunkName: 'dynamic-lookups' */ 'containers/DynamicLookups')
);

const options = [
  {
    label: 'Generic Picklists',
    link: PAGES.PICKLISTS_GENERICS
  },
  {
    label: 'Transporters',
    link: PAGES.PICKLISTS_TRANSPORTERS
  },
  {
    label: 'Purchasers',
    link: PAGES.PICKLISTS_PURCHASERS
  },
  {
    label: 'Tank Strappings',
    link: PAGES.PICKLISTS_TANK_STRAPPINGS
  },
  {
    label: 'Dynamic Lookups',
    link: PAGES.PICKLISTS_DYNAMIC_LOOKUPS
  }
];

const Picklists = () => {
  const [selectedTabIndex, setSelectedTabIndex] = React.useState(0);
  const { pathname } = useLocation();
  React.useEffect(() => {
    for (let index = 0; index < options.length; index++) {
      const link = options[index].link;
      if (pathname.includes(link)) {
        if (index !== selectedTabIndex) {
          setSelectedTabIndex(index);
        }
        break;
      }
    }
  }, [pathname, selectedTabIndex, setSelectedTabIndex]);

  return (
    <>
      <TopToolbar
        leftPart={(
          <Typography variant='h6'>
            {options[selectedTabIndex].label}
          </Typography>
        )}
        rightPart={(
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'flex-end'
            }}>
            <JoynTabs value={selectedTabIndex}>
              {options.map((option, index) => (
                <JoynTab
                  to={option.link}
                  component={ButtonLink}
                  key={option.label}
                  id={`joyn-tab-picklist-${index}`}
                  aria-controls={`joyn-tabpanel-${index}`}
                  label={option.label} />
              ))}
            </JoynTabs>
          </div>
        )} />
      <React.Suspense fallback='Loading...'>
        <LazyLoadingErrorBoundary>
          <Switch>
            <Route
              path={PAGES.PICKLISTS_GENERICS}
              component={GenericPicklists} />
            <Route
              path={PAGES.PICKLISTS_TRANSPORTERS}
              component={Transporters} />
            <Route
              path={PAGES.PICKLISTS_PURCHASERS}
              component={Purchasers} />
            <Route
              path={PAGES.PICKLISTS_TANK_STRAPPINGS}
              component={TankStrappings} />
            <Route
              path={PAGES.PICKLISTS_DYNAMIC_LOOKUPS}
              component={DynamicLookups} />
            <Redirect
              exact
              from={PAGES.PICKLISTS}
              to={PAGES.PICKLISTS_GENERICS} />
          </Switch>
        </LazyLoadingErrorBoundary>
      </React.Suspense>
    </>
  );
};

export default Picklists;
