import angular from 'angular';

import components from '../../components';

import AlertDemo from './alert-demo.component';
import BadgeDemo from './badge-demo.component';
import CardDemo from './card-demo.component';
import CarouselDemo from './carousel-demo.component';
import DropdownDemo from './dropdown-demo.component';
import IconDemo from './icon-demo.component';
import InputDemo from './input-demo.component';
import ModalDemo from './modal-demo.component';
import NavbarDemo from './navbar-demo.component';

// prettier-ignore
export default angular
    .module('bootstrap-docs.demos', [components])
    .component(AlertDemo.name, AlertDemo)
    .component(BadgeDemo.name, BadgeDemo)
    .component(...CardDemo)
    .component(CarouselDemo.name, CarouselDemo)
    .component(DropdownDemo.name, DropdownDemo)
    .component(IconDemo.name, IconDemo)
    .component(InputDemo.name, InputDemo)
    .component(ModalDemo.name, ModalDemo)
    .component(NavbarDemo.name, NavbarDemo)
    .name;
