import angular from 'angular';

import cssInjector from './css-injector.provider';
import fwdNgModel from './fwd-ng-model.directive';
import transcludeAndReplace from './transclude-and-replace.directive';

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModel.name, fwdNgModel)
        .directive(transcludeAndReplace.name, transcludeAndReplace)
        .provider(cssInjector.name, cssInjector)
        .name;
