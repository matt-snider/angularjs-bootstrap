import angular from 'angular';

import core from './core';
import components from './components';

export default angular
    .module('bootstrap', [
        core,
        components,
    ]);
