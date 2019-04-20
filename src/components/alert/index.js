import angular from 'angular';

import core from '../../core';
import {TYPES} from '../../core/contextual-types.service';
import {default as Alert, AlertController} from './alert.component';

let alertModule =
    angular.module('bootstrap.alert', [core])
        .component(...Alert);


// Aliases for alerts
// Override alert with new name and update controller.
// End up with <bs-alert-success>, <bs-alert-warning>, ... etc
function makeAlert(type) {
    class controller extends AlertController {
        constructor($element, bsContextualTypes) {
            super($element, bsContextualTypes);
        }
    }
    controller.prototype.type = type;

    let name = `bsAlert${type.charAt(0).toUpperCase() + type.slice(1)}`;
    let bindings = Object.assign({}, Alert[1].bindings);
    let component = Object.assign({}, Alert[1], { name, bindings, controller });
    delete bindings.type;
    return component;
}

for (let type of TYPES) {
    let alert = makeAlert(type);
    alertModule.component(alert.name, alert);
}

export default alertModule.name;
