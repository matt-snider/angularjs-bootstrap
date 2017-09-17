import angular from 'angular';

import Navbar from './navbar.component';
import Items from './items.directive';
import Item from './item.directive';

export default
    angular.module('bootstrap.navbar', [])
        .component(Navbar.name, Navbar)
        .directive(Items.name, Items)
        .directive(Item.name, Item)
        .name;
