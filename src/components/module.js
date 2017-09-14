import angular from 'angular';

import Input from './input/input.component';


export default
    angular.module('bootstrap.components', [])
        .component(Input.name, Input)
        .name;
