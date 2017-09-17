import angular from 'angular';

import core from '../../core';
import Dropdown from './dropdown.component';

import dropdownItem from './dropdown-item.directive';

export default
    angular.module('bootstrap.dropdown', [core])
        .component(Dropdown.name, Dropdown)
        .directive(dropdownItem.name, dropdownItem)
        .name;
