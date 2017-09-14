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
            <label for="{{ ::$id }}" ng-if="::$ctrl.isSlotFilled('label')">
                <div ng-transclude="label"></div>
            </label>

            <input class="form-control"
                id="{{ ::$id }}"
                type="{{ ::$ctrl.type }}"
                ng-class="::$ctrl.inputSizeStyle"
                aria-describedby="{{ ::$id }}-help"
                placeholder="{{ ::$ctrl.placeholder }}"
                ng-model="$ctrl.ngModel.$viewValue"
                ng-change="$ctrl.ngModel.$commitViewValue()">

            <small id="{{ ::$id }}-help" class="form-text text-muted"
                ng-if="::$ctrl.isSlotFilled('description')">
                <div ng-transclude="description"></div>
            </small>
        </div>
    `,
    bindings: {
        placeholder: '@',
        size: '@',
        type: '@',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?label',
        description: '?description',
    },
};
