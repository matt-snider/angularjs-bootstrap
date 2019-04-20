import angular from 'angular';

import core from '../../core';
import {TYPES} from '../../core/contextual-types.service';
import {default as Badge, BadgeController} from './badge.component';


let badgeModule =
    angular.module('bootstrap.badge', [core])
        .component(...Badge);


// Aliases for badges
// Override alert with new name and update controller.
// End up with <bs-badge-success>, <bs-badge-warning>, ... etc

function makeBadge(type) {
    class controller extends BadgeController {
        constructor(bsContextualTypes) {
            super(bsContextualTypes);
        }
    }
    controller.prototype.type = type;

    let name = `bsBadge${type.charAt(0).toUpperCase() + type.slice(1)}`;
    let bindings = Object.assign({}, Badge[1].bindings);
    let component = Object.assign({}, Badge[1], { name, bindings, controller });
    delete bindings.type;
    return component;
}

for (let type of TYPES) {
    let badge = makeBadge(type);
    badgeModule.component(badge.name, badge);
}

export default badgeModule.name;
