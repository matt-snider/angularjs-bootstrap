import angular from 'angular';

import Navbar from './navbar.component';
import Items from './items.directive';
import Item from './item.directive';


// Generated
let NavbarBrand = createReplaceDirective(
    'bsNavbarBrand',
    '<a href="#" class="navbar-brand"></a>',
    true,
)

export default
    angular.module('bootstrap.navbar', [])
        .component(Navbar.name, Navbar)
        .directive(NavbarBrand.name, NavbarBrand)
        .directive(Items.name, Items)
        .directive(Item.name, Item)
        .name;
