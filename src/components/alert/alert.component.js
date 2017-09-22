export const
    TYPES = new Set([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]);

export class AlertController {
    constructor($element) {
        this.$element = $element;
    }

    $onInit() {
        this.dismissible = this.dismissible || false
    }

    $onChanges(changes) {
        if (!TYPES.has(this.type)) {
            throw Error(
                `bsAlert: invalid type provided '${this.type}'. `
                `Valid types are: ${TYPES}`
            );
        }
        this.alertTypeStyle = `alert-${this.type}`;
    }

    dismiss() {
        this.$element.remove();
    }
}


export default {
    name: 'bsAlert',
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
};
