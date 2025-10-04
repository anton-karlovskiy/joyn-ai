
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from 'parts/Layout';
import theme from 'styles/theme';
import { PAGES } from 'utils/constants/links';
import LazyLoadingErrorBoundary from 'utils/hocs/LazyLoadingErrorBoundary';

const ManageNetworks = React.lazy(() =>
  import(/* webpackChunkName: 'manage-networks' */ 'pages/ManageNetworks')
);

const MonthlyClose = React.lazy(() =>
  import(/* webpackChunkName: 'monthly-close' */ 'pages/MonthlyClose')
);

const AllocationConfig = React.lazy(() =>
  import(/* webpackChunkName: 'allocation-config' */ 'pages/AllocationConfig')
);

const Scheduler = React.lazy(() =>
  import(/* webpackChunkName: 'scheduler' */ 'pages/Scheduler')
);

const Assets = React.lazy(() =>
  import(/* webpackChunkName: 'assets' */ 'pages/Assets')
);

const ReadingViews = React.lazy(() =>
  import(/* webpackChunkName: 'reading-views' */ 'pages/ReadingViews')
);

const Picklists = React.lazy(() =>
  import(/* webpackChunkName: 'picklists' */ 'pages/Picklists')
);

const AddOrEditPicklist = React.lazy(() =>
  import(/* webpackChunkName: 'add-or-edit-picklist' */ 'pages/Picklists/generics/AddOrEditPicklist')
);

const ViewPicklist = React.lazy(() =>
  import(/* webpackChunkName: 'view-picklist' */ 'pages/Picklists/generics/ViewPicklist')
);

const AddOrEditPicklistOption = React.lazy(() =>
  import(/* webpackChunkName: 'add-or-edit-picklist-option' */ 'pages/Picklists/generics/AddOrEditPicklistOption')
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <React.Suspense fallback='Loading...'>
          <LazyLoadingErrorBoundary>
            <Switch>
              <Redirect
                exact
                from={PAGES.HOME}
                to={PAGES.MANGE_NETWORKS} />
              <Route
                path={PAGES.MANGE_NETWORKS}
                component={ManageNetworks} />
              <Route
                path={PAGES.MONTHLY_CLOSE}
                component={MonthlyClose} />
              <Route
                path={PAGES.ALLOCATION_CONFIG}
                component={AllocationConfig} />
              <Route
                path={PAGES.SCHEDULER}
                component={Scheduler} />
              <Route
                path={PAGES.ASSETS}
                component={Assets} />
              <Route
                path={PAGES.READING_VIEWS}
                component={ReadingViews} />

              {/* Picklists */}
              <Route
                path={PAGES.PICKLISTS_GENERICS_ADD}
                component={AddOrEditPicklist} />
              <Route
                path={PAGES.PICKLISTS_GENERICS_EDIT}
                component={AddOrEditPicklist} />
              <Route
                path={PAGES.PICKLISTS_GENERICS_VIEW}
                component={ViewPicklist} />
              <Route
                path={PAGES.PICKLISTS_GENERICS_ADD_OPTION}
                component={AddOrEditPicklistOption} />
              <Route
                path={PAGES.PICKLISTS_GENERICS_EDIT_OPTION}
                component={AddOrEditPicklistOption} />
              <Route
                path={PAGES.PICKLISTS}
                component={Picklists} />
            </Switch>
          </LazyLoadingErrorBoundary>
        </React.Suspense>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
