import angular from 'angular';

import core from '../../core';
import Card from './card.component.ng';
import CardTitle from './card-title.directive';
import CardText from './card-text.directive';

// prettier-ignore
export default angular
    .module('bootstrap.card', [core])
    .component(...Card)
    .directive(...CardText)
    .directive(...CardTitle)
    .name;
