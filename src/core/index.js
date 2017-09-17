import angular from 'angular';

import fwdNgModel from './fwd-ng-model.directive';
import bsErrorMessages from './error-messages.directive';
import cssInjector from './css-injector.provider';

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModel.name, fwdNgModel)
        .directive(errorMessages.name, errorMessages)
        .provider(cssInjector.name, cssInjector)
        .name;
