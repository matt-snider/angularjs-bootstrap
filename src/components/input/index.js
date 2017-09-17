import angular from 'angular';

import core from '../../core';
import Input from './input.component';
import Errors from './errors.directive';


export default
    angular.module('bootstrap.input', [core])
        .component(Input.name, Input)
        .directive(Errors.name, Errors)
        .name;
