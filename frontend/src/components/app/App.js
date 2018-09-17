import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFoundComponent from '../notfound/NotFound.component';
import HomeComponent from '../home/Home.component';

export default () => (
  <Switch>
    <Route exact path='/' component={HomeComponent} />
    <Route path='/home' component={HomeComponent} />
    <Route path="*" component={NotFoundComponent} />
  </Switch>
);