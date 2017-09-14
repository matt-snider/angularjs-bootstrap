class controller {
    constructor($transclude) {
        this.isSlotFilled = $transclude.isSlotFilled;
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
                aria-describedby="{{ ::$id }}-help"
                placeholder="{{ ::$ctrl.placeholder }}"
                type="{{ ::$ctrl.type }}"
                ng-model="$ctrl.ngModel.$viewValue">

            <small id="{{ ::$id }}-help" class="form-text text-muted"
                ng-if="::$ctrl.isSlotFilled('description')">
                <div ng-transclude="description"></div>
            </small>
        </div>
    `,
    bindings: {
        placeholder: '@',
        type: '@',
    },
    requires: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?label',
        description: '?description',
    },
};
