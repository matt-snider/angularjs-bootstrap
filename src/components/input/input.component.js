import './input.component.css';


class controller {
    constructor() {
        this.inputSizeStyle = '';
    }

    $onInit() {
        // Set input size class (i.e. lg or sm)
        if (this.size && (this.size === 'sm' || this.size === 'lg')) {
            this.inputSizeStyle = `form-control-${this.size}`;
        }

        // Default values
        this.validation = this.validation !== undefined ? this.validation : true;
    }
}


/**
 * TODO:
 * - ngBlur/ngFocus
 * - ngCut/ngCopy/ngPaste
 * - ngDisabled
 * - ngList
 * - ngReadonly
 */
export default {
    name: 'bsInput',
    controller,
    template: `
        <div class="form-group">
            <span class="form-control-label" for="{{ ::$id }}"
                ng-transclude="label">
            </span>

            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon" ng-if="::$ctrl.addon">
                    {{ ::$ctrl.addon }}
                </div>
                <input class="form-control"
                    id="{{ ::$id }}"
                    type="{{ ::$ctrl.type }}"
                    min="{{ $ctrl.min }}"
                    max="{{ $ctrl.max }}"
                    step="{{ $ctrl.step }}"
                    aria-describedby="{{ ::$id }}-help"
                    placeholder="{{ ::$ctrl.placeholder }}"
                    bs-fwd-ng-model="$ctrl.ngModel"
                    ng-class="[$ctrl.inputSizeStyle, {
                        'is-valid': $ctrl.validation && $ctrl.ngModel.$valid,
                        'is-invalid': $ctrl.validation && $ctrl.ngModel.$invalid}]"
                    ng-readonly="$ctrl.isReadonly"
                    ng-disabled="$ctrl.isDisabled">

                <div class="invalid-feedback"
                    ng-transclude="errors"
                    ng-messages="$ctrl.ngModel.$error">
                </div>
            </div>

            <small id="{{ ::$id }}-help" class="form-text text-muted"
                ng-transclude="description">
            </small>
        </div>
    `,
    bindings: {
        size: '@',
        addon: '@',
        validation: '<',

        /* Standard input props */
        type: '@',
        placeholder: '@',
        isReadonly: '<',
        isDisabled: '<',

        /* Range type */
        min: '<',
        max: '<',
        step: '<',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?bsLabel',
        description: '?description',
        errors: '?errors',
    },
};
