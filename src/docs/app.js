import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';

import components from '../components';
import docComponents from './components';
import demos from './demos';
import template from './app.html';

import configRoutes from './routes.js';

angular
    .module('bootstrap-docs', [
        uiRouter,
        ngMessages,

        components,
        docComponents,
        demos,
    ])
    .component('app', { template })
    .config(configRoutes);
