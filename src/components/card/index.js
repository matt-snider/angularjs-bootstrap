import angular from 'angular';

import core from '../../core';
import Card from './card.component.ng';
import CardLink from './card-link.directive';
import CardSubtitle from './card-subtitle.directive';
import CardTitle from './card-title.directive';
import CardText from './card-text.directive';

// prettier-ignore
export default angular
    .module('bootstrap.card', [core])
    .component(...Card)
    .directive(...CardLink)
    .directive(...CardText)
    .directive(...CardTitle)
    .directive(...CardSubtitle)
    .name;
