import angular from 'angular';

import coreModule from '../core';
import iconModule from './icon';
import inputModule from './input';
import navbarModule from './navbar';


export default
    angular.module('bootstrap.components', [
            coreModule,
            iconModule,
            inputModule,
            navbarModule,
        ])
        .name;
