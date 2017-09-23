import angular from 'angular';

import components from '../../components';

import DropdownDemo from './dropdown-demo.component';
import IconDemo from './icon-demo.component';
import InputDemo from './input-demo.component';
import GettingStarted from './getting-started.component';
import NavbarDemo from './navbar-demo.component';


export default
    angular.module('bootstrap-docs.demos', [components])
        .component(DropdownDemo.name, DropdownDemo)
        .component(IconDemo.name, IconDemo)
        .component(InputDemo.name, InputDemo)
        .component(GettingStarted.name, GettingStarted)
        .component(NavbarDemo.name, NavbarDemo)
        .name;
