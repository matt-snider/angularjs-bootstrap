import angular from 'angular';

import fwdNgModelDirective from './fwd-ng-model.directive';

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModelDirective.name, fwdNgModelDirective)
        .name;
