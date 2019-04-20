import angular from 'angular';

import ComponentReference from './component-reference.component';
import GettingStarted from './getting-started.component';

import codeExample from './code-example.directive';
import componentProperty from './component-property.directive';


export default angular
    .module('bootstrap-docs.components', [])
    .component(...ComponentReference)
    .component(...GettingStarted)
    .directive(...codeExample)
    .directive(...componentProperty)
    .name;
