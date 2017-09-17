import angular from 'angular';

import bsFwdNgModel from './bs-fwd-ng-model.directive';
import bsErrorMessages from './bs-error-messages.directive';
import bsCssInjector from './css-injector.provider';

export default
    angular.module('bootstrap.core', [])
        .directive(bsFwdNgModel.name, bsFwdNgModel)
        .directive(bsErrorMessages.name, bsErrorMessages)
        .provider(bsCssInjector.name, bsCssInjector)
        .name;
