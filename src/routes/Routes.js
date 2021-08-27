import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout, PublicRoute, PrivateRoute } from './components';
import { Minimal as MinimalLayout, Main as MainLayout } from '../layouts';
import { Offer } from '../components/Offer/Offer';

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Offer}
        exact
        layout={MinimalLayout}
        path="/"
      />

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
