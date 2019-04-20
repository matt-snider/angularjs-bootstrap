import angular from 'angular';
import fwdNgModel from './fwd-ng-model.directive';

import backdrop from './backdrop.factory';
import cssInjector from './css-injector.provider';
import contextualTypes from './contextual-types.service';

export default angular
    .module('bootstrap.core', [])
    .directive('bsFwdNgModel', fwdNgModel)
    .factory('bsBackdrop', backdrop)
    .provider('bsCssInjector', cssInjector)
    .service('bsContextualTypes', contextualTypes)
    // .service(contextualTypes.name, contextualTypes)
    .name;
