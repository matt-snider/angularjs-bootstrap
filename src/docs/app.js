import angular from 'angular';
import ngMessages from 'angular-messages';
import ngRoute from 'angular-route';

import components from '../components';
import demos from './demos';
import template from './app.html';

import configRoutes from './routes.js';

import 'bootstrap/dist/css/bootstrap.css';


export default
    angular.module('bootstrap-docs', [
            ngMessages,
            ngRoute,
            components,
            demos,
        ])
        .component('app', { template })
        .config(configRoutes)
        .name;
