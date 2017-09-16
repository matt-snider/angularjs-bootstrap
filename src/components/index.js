import angular from 'angular';

import core from '../core';
import Input from './input/input.component';


export default
    angular.module('bootstrap.components', [core])
        .component(Input.name, Input)
        .name;
