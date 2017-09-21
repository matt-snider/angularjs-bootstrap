import angular from 'angular';
import {createReplaceDirective} from '../../core/utils';

import core from '../../core';
import Dropdown from './dropdown.component';

// Generated
let DropdownItem = createReplaceDirective(
    "bsDropdownItem",
    '<a href="#" class="dropdown-item"></a>',
    true,
);
let DropdownItems = createReplaceDirective("bsDropdownItems");


export default
    angular.module('bootstrap.dropdown', [core])
        .component(Dropdown.name, Dropdown)
        .directive(DropdownItem.name, DropdownItem)
        .directive(DropdownItems.name, DropdownItems)
        .name;
