class controller {
    constructor($transclude) {
        this.isSlotFilled = $transclude.isSlotFilled;
        this.inputSizeStyle = '';
    }

    $onInit() {
        // Set input size (i.e. lg or sm)
        if (this.size && (this.size === 'sm' || this.size === 'lg')) {
            this.inputSizeStyle += `form-control-${this.size}`;
        }
    }
}


export default {
    name: 'bsInput',
    controller,
    template: `
        <div class="form-group">
            <span class="form-control-label" for="{{ ::$id }}"
                ng-if="::$ctrl.isSlotFilled('label')"
                ng-transclude="label">
            </span>

            <input class="form-control"
                id="{{ ::$id }}"
                type="{{ ::$ctrl.type }}"
                ng-class="::$ctrl.inputSizeStyle"
                aria-describedby="{{ ::$id }}-help"
                placeholder="{{ ::$ctrl.placeholder }}"
                ng-model="$ctrl.ngModel.$viewValue"
                ng-change="$ctrl.ngModel.$commitViewValue()"
                ng-readonly="$ctrl.isReadonly"
                ng-disabled="$ctrl.isDisabled">

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
        isReadonly: '<',
        isDisabled: '<',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?label',
        description: '?description',
    },
};
