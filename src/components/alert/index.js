import angular from 'angular';

import {createDirectiveFn, createReplaceDirective} from '../../core/utils';

import core from '../../core';
import {default as Alert, AlertController, TYPES} from './alert.component';

let alertModule =
    angular.module('bootstrap.alert', [core])
        .component(Alert.name, Alert);


// Aliases for alerts
// Override alert with new name and update controller.
// End up with <bs-alert-success>, <bs-alert-warning>, ... etc
function makeAlert(type) {
    class SingleTypeAlert extends AlertController {
        constructor($element) {
            super($element);
            this.alertTypeStyle = `alert-${type}`;
        }
        $onChanges() { }
    }

    let name = `bsAlert${type.charAt(0).toUpperCase() + type.slice(1)}`;
    let component = Object.assign({}, Alert, { name }, { controller: SingleTypeAlert});
    return component;
}

for (let type of TYPES) {
    let alert = makeAlert(type);
    alertModule.component(alert.name, alert);
}

export default alertModule.name;
