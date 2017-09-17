import angular from 'angular';

import fwdNgModel from './fwd-ng-model.directive';
import cssInjector from './css-injector.provider';

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModel.name, fwdNgModel)
        .provider(cssInjector.name, cssInjector)
        .name;
