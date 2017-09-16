import angular from 'angular';

import core from '../core';
import Input from './input/input.component';
import Icon from './icon/icon.component';



export default
    angular.module('bootstrap.components', [core])
        .component(Input.name, Input)
        .component(Icon.name, Icon)
        .name;
