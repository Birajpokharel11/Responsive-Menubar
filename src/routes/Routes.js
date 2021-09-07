import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout, PublicRoute, PrivateRoute } from './components';
import { Minimal as MinimalLayout, Main as MainLayout } from '../layouts';
import Components from '../components/Offer/AllComponents/Components';
const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={Components}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/YATCHS"
        component={() => <div>YATCHS</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/OFFERS"
        component={() => <div>OFFERS</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/DESTINATIONS"
        component={() => <div>DESTINATIONS</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/BESPOKEEXPERIENCES"
        component={() => <div>BESPOKEEXPERIENCES</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/NEWSBLOGS"
        component={() => <div>NEWSBLOGS</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/MORE"
        component={() => <div>MORE</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/ABOUTYOU"
        component={() => <div>ABOUTYOU</div>}
      />
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/DINNING"
        component={() => <div>DINING</div>}
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
