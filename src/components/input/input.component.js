import './input.component.css';


class controller {
    constructor($transclude) {
        this.isSlotFilled = $transclude.isSlotFilled;
        this.inputSizeStyle = '';
    }

    $onInit() {
        // Set input size class (i.e. lg or sm)
        if (this.size && (this.size === 'sm' || this.size === 'lg')) {
            this.inputSizeStyle = `form-control-${this.size}`;
        }
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
                ng-if="::$ctrl.isSlotFilled('label')"
                ng-transclude="label">
            </span>

            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon" ng-if="::$ctrl.addon">
                    {{ ::$ctrl.addon }}
                </div>
                <input class="form-control"
                    id="{{ ::$id }}"
                    type="{{ ::$ctrl.type }}"
                    aria-describedby="{{ ::$id }}-help"
                    placeholder="{{ ::$ctrl.placeholder }}"
                    fwd-ng-model="$ctrl.ngModel"
                    ng-class="[$ctrl.inputSizeStyle, {
                               'is-valid': $ctrl.ngModel.$valid,
                               'is-invalid': $ctrl.ngModel.$invalid}]"
                    ng-readonly="$ctrl.isReadonly"
                    ng-disabled="$ctrl.isDisabled">

                <div class="invalid-feedback"
                    ng-messages="$ctrl.ngModel.$error"
                    ng-transclude="errors"
                    ng-if="::$ctrl.isSlotFilled('errors')">
                </div>
            </div>

            <small id="{{ ::$id }}-help" class="form-text text-muted"
                ng-if="::$ctrl.isSlotFilled('description')"
                ng-transclude="description">
            </small>
        </div>
    `,
    bindings: {
        placeholder: '@',
        size: '@',
        type: '@',
        addon: '@',
        isReadonly: '<',
        isDisabled: '<',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?label',
        description: '?description',
        errors: '?errors',
    },
};
