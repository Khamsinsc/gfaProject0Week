import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './RootApp';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import WithStates from './components/WithStates';
import WithRedux from './components/WithRedux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <RootApp>
        <Route exact path='/' component={Homepage} />
        <Route path='/simple/states' component={WithStates} />
        <Route path='/simple/redux' component={WithRedux} />
      </RootApp>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);