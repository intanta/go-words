//import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import App from './containers/app/App';
import HomePageContainer from './containers/homePage/HomePageContainer';
import AddNewWordFormContainer from './containers/addNewWordForm/AddNewWordFormContainer';
import TestFormContainer from './containers/testForm/TestFormContainer';
import ResultPageContainer from './containers/resultPage/ResultPageContainer';
import OopsContainer from './containers/oops/OopsContainer';

import './style/index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomePageContainer}/>
        <Route path="/add" component={AddNewWordFormContainer}/>
        <Route path="/test" component={TestFormContainer}/>
        <Route path="/result" component={ResultPageContainer}/>
        <Route path="/oops" component={OopsContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
