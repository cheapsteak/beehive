// Framework
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

// Libraries
import 'bootstrap/dist/css/bootstrap.css';

// Client Imports
import AppLayout from '../../ui/layouts/AppLayout';
import configureStore from '../../ui/configureStore';

// Initial Actions
import initAppRequest from '../../ui/actionCreators/generic/init';

const history = createHistory();

// Make redux initial store
const store = configureStore({}, history);

// Actual Rendering Function
const renderApp = () =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppLayout />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('render-target')
  );

// Start App
Meteor.startup(() => {
  //load bees initially
  store.dispatch(initAppRequest());

  renderApp();
});
