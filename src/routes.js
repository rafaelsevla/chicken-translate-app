import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './views/main';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/chicken-translate-app" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
