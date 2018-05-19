import angular from 'angular';
import fwdNgModel from './fwd-ng-model.directive';

import backdrop from './backdrop.factory';
import cssInjector from './css-injector.provider';
import contextualTypes from './contextual-types.service';

export default angular
    .module('bootstrap.core', [])
    .directive(fwdNgModel.name, fwdNgModel)
    .factory(backdrop.name, backdrop)
    .provider(cssInjector.name, cssInjector)
    .service(contextualTypes.name, contextualTypes)
    .name;
