import angular from 'angular';
import core from '../../core';

import Icon from './icon.component';
import IconConfigProvider from './icon-config.provider';

const DEFAULT_DARK_COLOR = 'black';
const DEFAULT_LIGHT_COLOR = 'white';

/* @ngInject */
function configStyles(bsIconConfigProvider) {
    bsIconConfigProvider.setDarkColor(DEFAULT_DARK_COLOR);
    bsIconConfigProvider.setLightColor(DEFAULT_LIGHT_COLOR);
}


/* @ngInject */
function injectStyles(bsIconConfig) {
}


export default
    angular.module('bootstrap.icon', [ core ])
        .component(Icon.name, Icon)
        .provider(IconConfigProvider.name, IconConfigProvider)
        .config(configStyles)
        .run(injectStyles)
        .name;
