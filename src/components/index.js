import angular from 'angular';

import coreModule from '../core';
import navbarModule from './navbar';

import Input from './input/input.component';
import Icon from './icon/icon.component';


export default
    angular.module('bootstrap.components', [
            coreModule,
            navbarModule,
        ])
        .component(Input.name, Input)
        .component(Icon.name, Icon)
        .name;
