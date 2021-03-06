export class AlertController {

    /* @ngInject */
    constructor($element, bsContextualTypes) {
        this.$element = $element;
        this.bsContextualTypes = bsContextualTypes;
    }

    $onInit() {
        this.dismissible = this.dismissible || false;
    }

    $onChanges() {
        this.type = this.type || this.bsContextualTypes.values()[0];
        this.bsContextualTypes.validateOrThrow(this.type, 'bsAlert');
        this.alertTypeStyle = `alert-${this.type}`;
    }

    dismiss() {
        this.$element.remove();
    }
}


export default ['bsAlert', {
    controller: AlertController,
    template: `
        <div class="alert" ng-class="$ctrl.alertTypeStyle" role="alert">
            <button type="button" class="close" aria-label="Close"
                ng-if="$ctrl.dismissible" ng-click="$ctrl.dismiss()">
                <span aria-hidden="true">&times;</span>
            </button>
            <span ng-transclude></span>
        </div>
    `,
    bindings: {
        type: '@',
        dismissible: '<',
    },
    transclude: true,
}];
