import angular from 'angular';
import ngMessages from 'angular-messages';
import ngRoute from 'angular-route';

import components from '../components';
import docComponents from './components';
import demos from './demos';
import template from './app.html';

import configRoutes from './routes.js';


angular.module('bootstrap-docs', [
        ngMessages,
        ngRoute,

        components,
        docComponents,
        demos,
    ])
    .component('app', { template })
    .config(configRoutes)
    .name;
