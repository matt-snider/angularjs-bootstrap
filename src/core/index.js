import angular from 'angular';

import fwdNgModelDirective from './fwd-ng-model.directive';
import bsErrorMessages from './bs-error-messages.directive';

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModelDirective.name, fwdNgModelDirective)
        .directive(bsErrorMessages.name, bsErrorMessages)
        .name;
