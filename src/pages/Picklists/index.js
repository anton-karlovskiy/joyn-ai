
import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import SectionToolbar from 'parts/SectionToolbar';
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

const TankStrapping = React.lazy(() =>
  import(/* webpackChunkName: 'tank-strapping' */ 'containers/TankStrapping')
);

const DynamicLookup = React.lazy(() =>
  import(/* webpackChunkName: 'dynamic-lookup' */ 'containers/DynamicLookup')
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
    label: 'Tank Strapping',
    link: PAGES.PICKLISTS_TANK_STRAPPING
  },
  {
    label: 'Dynamic Lookup',
    link: PAGES.PICKLISTS_DYNAMIC_LOOKUP
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
      <SectionToolbar
        leftPart={(
          <Typography variant='h6'>
            Generic Picklists
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
            <Redirect
              exact
              from={PAGES.PICKLISTS}
              to={PAGES.PICKLISTS_GENERICS} />
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
              path={PAGES.PICKLISTS_TANK_STRAPPING}
              component={TankStrapping} />
            <Route
              path={PAGES.PICKLISTS_DYNAMIC_LOOKUP}
              component={DynamicLookup} />
          </Switch>
        </LazyLoadingErrorBoundary>
      </React.Suspense>
    </>
  );
};

export default Picklists;
