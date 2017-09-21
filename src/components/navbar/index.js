import angular from 'angular';
import {createReplaceDirective} from '../../core/utils';

import Navbar from './navbar.component';
import NavbarItems from './navbar-items.directive';
import NavbarItem from './navbar-item.directive';


// Generated
let Brand = createReplaceDirective(
    'bsBrand',
    '<a href="#" class="navbar-brand"></a>',
    true,
)

export default
    angular.module('bootstrap.navbar', [])
        .component(Navbar.name, Navbar)
        .directive(Brand.name, Brand)
        .directive(NavbarItems.name, NavbarItems)
        .directive(NavbarItem.name, NavbarItem)
        .name;
