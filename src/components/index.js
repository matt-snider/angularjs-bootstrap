import angular from 'angular';

import coreModule from '../core';

import alertModule from './alert';
import badgeModule from './badge';
import cardModule from './card';
import carouselModule from './carousel';
import dropdownModule from './dropdown';
import iconModule from './icon';
import inputModule from './input';
import modalModule from './modal';
import navbarModule from './navbar';

// prettier-ignore
export default
    angular.module('bootstrap.components', [
            coreModule,

            // Component modules
            alertModule,
            badgeModule,
            cardModule,
            carouselModule,
            dropdownModule,
            iconModule,
            inputModule,
            modalModule,
            navbarModule,
        ])
        .name;
