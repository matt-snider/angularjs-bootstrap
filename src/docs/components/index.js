import angular from 'angular';

import ComponentProperty from './component-property.directive';
import ComponentReference from './component-reference.component';
import GettingStarted from './getting-started.component';


export default
    angular.module('bootstrap-docs.components', [])
        .component(ComponentReference.name, ComponentReference)
        .directive(ComponentProperty.name, ComponentProperty)
        .component(GettingStarted.name, GettingStarted)
        .name;
