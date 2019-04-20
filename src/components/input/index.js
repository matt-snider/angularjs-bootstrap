import angular from 'angular';
import ngMessages from 'angular-messages';

import core from '../../core';
import Input from './input.component';
import Errors from './errors.directive';


export default angular
    .module('bootstrap.input', [
        ngMessages,
        core,
    ])
    .component(...Input)
    .directive(...Errors)
    .name;
