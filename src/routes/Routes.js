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
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/YATCHS"
        component={() => <div>YATCHS</div>}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/OFFERS"
        component={() => <div>OFFERS</div>}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/DESTINATIONS"
        component={() => <div>DESTINATIONS</div>}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/BESPOKEEXPERIENCES"
        component={() => <div>BESPOKEEXPERIENCES</div>}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/NEWSBLOGS"
        component={() => <div>NEWSBLOGS</div>}
      ></RouteWithLayout>
      <RouteWithLayout
        exact
        layout={MinimalLayout}
        path="/MORE"
        component={() => <div>MORE</div>}
      ></RouteWithLayout>

      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
