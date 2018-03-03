import './input.component.css';


class controller {

    /* @ngInject */
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

                <input id="{{ ::$id }}"
                    type="{{ ::$ctrl.type }}"
                    ng-min="$ctrl.min"
                    ng-max="$ctrl.max"
                    ng-step="$ctrl.step"
                    ng-minlength="$ctrl.minlength"
                    ng-maxlength="$ctrl.maxlength"
                    ng-pattern="{{$ctrl.pattern}}"
                    aria-describedby="{{ ::$id }}-help"
                    placeholder="{{ ::$ctrl.placeholder }}"
                    bs-fwd-ng-model="$ctrl.ngModel"
                    ng-class="[$ctrl.inputSizeStyle, {
                        'is-valid': !$ctrl.ngModel.$pristine && $ctrl.validation && $ctrl.ngModel.$valid,
                        'is-invalid': !$ctrl.ngModel.$pristine && $ctrl.validation && $ctrl.ngModel.$invalid,
                        'form-control': !$ctrl.plaintext,
                        'form-control-plaintext': $ctrl.plaintext,
                        }]"
                    ng-readonly="$ctrl.ngReadonly"
                    ng-disabled="$ctrl.ngDisabled">

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
        ngReadonly: '<',
        plaintext: '<',
        ngDisabled: '<',

        /* Validation */
        min: '<ngMin',
        max: '<ngMax',
        minlength: '<ngMinlength',
        maxlength: '<ngMaxlength',
        pattern: '@ngPattern',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?bsLabel',
        description: '?bsDescription',
        errors: '?bsErrors',
    },
};
