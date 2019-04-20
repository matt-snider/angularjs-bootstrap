import angular from 'angular';
import { createReplaceDirective } from '../../core/utils';

import core from '../../core';
import Dropdown from './dropdown.component';

// Generated
let dropdownItem = createReplaceDirective(
    'bsDropdownItem',
    '<a class="dropdown-item"></a>',
    true
);

let dropdownDivider = createReplaceDirective(
    'bsDropdownDivider',
    '<div class="dropdown-divider"></div>'
);

let dropdownItems = createReplaceDirective('bsDropdownItems');

export default angular
    .module('bootstrap.dropdown', [core])
    .component(...Dropdown)
    .directive(...dropdownItem)
    .directive(...dropdownDivider)
    .directive(...dropdownItems)
    .name;
