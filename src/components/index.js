import angular from 'angular';

import coreModule from '../core';
import dropdownModule from './dropdown';
import iconModule from './icon';
import inputModule from './input';
import navbarModule from './navbar';


export default
    angular.module('bootstrap.components', [
            coreModule,
            dropdownModule,
            iconModule,
            inputModule,
            navbarModule,
        ])
        .name;
