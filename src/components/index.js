import angular from 'angular';

import coreModule from '../core';

import alertModule from './alert';
import badgeModule from './badge';
import carouselModule from './carousel';
import dropdownModule from './dropdown';
import iconModule from './icon';
import inputModule from './input';
import navbarModule from './navbar';


export default
    angular.module('bootstrap.components', [
            coreModule,

            // Component modules
            alertModule,
            badgeModule,
            carouselModule,
            dropdownModule,
            iconModule,
            inputModule,
            navbarModule,
        ])
        .name;
