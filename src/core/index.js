import angular from 'angular';
import {createReplaceDirective} from './utils';

import fwdNgModel from './fwd-ng-model.directive';

import cssInjector from './css-injector.provider';


// Generated
let label = createReplaceDirective("bsLabel");

export default
    angular.module('bootstrap.core', [])
        .directive(fwdNgModel.name, fwdNgModel)
        .directive(label.name, label)
        .provider(cssInjector.name, cssInjector)
        .name;
