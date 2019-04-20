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
    .component(...AlertDemo)
    .component(...BadgeDemo)
    .component(...CardDemo)
    .component(...CarouselDemo)
    .component(...DropdownDemo)
    .component(...IconDemo)
    .component(...InputDemo)
    .component(...ModalDemo)
    .component(...NavbarDemo)
    .name;
