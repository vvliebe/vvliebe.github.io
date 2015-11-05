/**
 * Created by vvliebe on 15/10/29.
 */

// library
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, PropTypes, IndexRoute, Redirect } from 'react-router';

// stylesheet
import './style/reset.scss';
import './style/common.scss';

// page
import IndexPage from './pages/Index/index.js';
import NotFoundPage from './pages/NotFound/index.js';
import ModalDemoPage from './pages/demos/modal/index.js';


ReactDOM.render(
    <Router>
        <Route path="/">
            <IndexRoute component={IndexPage} />
            <Redirect from="index" to="/" />
            <Route path="v-rodal" component={ModalDemoPage} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
    , document.getElementById('app')
);
