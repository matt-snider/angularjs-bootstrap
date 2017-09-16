import angular from 'angular';

import core from '../core';
import Input from './input/input.component';
import Navbar from './navbar/navbar.component';
import Icon from './icon/icon.component';

import bsNavbarItems from './navbar/navbar-items.directive';


export default
    angular.module('bootstrap.components', [core])
        .component(Input.name, Input)
        .component(Navbar.name, Navbar)
        .component(Icon.name, Icon)
        .directive(bsNavbarItems.name, bsNavbarItems)
        .name;
