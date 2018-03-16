import angular from 'angular';

import core from '../../core';
import Card from './card.component.ng';

// prettier-ignore
export default angular
    .module('bootstrap.card', [core])
    .component(...Card)
    .name;
