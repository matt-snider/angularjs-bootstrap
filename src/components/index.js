import angular from 'angular';

import coreModule from '../core';
import iconModule from './icon';
import navbarModule from './navbar';

import Input from './input/input.component';


export default
    angular.module('bootstrap.components', [
            coreModule,
            iconModule,
            navbarModule,
        ])
        .component(Input.name, Input)
        .name;
