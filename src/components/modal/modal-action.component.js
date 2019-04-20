class controller {

    /* @ngInject */
    constructor(bsContextualTypes) {
        this.bsContextualTypes = bsContextualTypes;
    }

    $onChanges() {
        this.type = this.type || 'primary';
        this.bsContextualTypes.validateOrThrow(this.type, 'bsModalAction');
        this.btnTypeStyle = `btn-${this.type}`;
    }
}

export default ['bsModalAction', {
    controller,
    template: `
        <button type="button" class="btn" ng-class="$ctrl.btnTypeStyle"
            ng-transclude>
        </button>
    `,
    transclude: true,
    bindings: {
        type: '@',
    },
}];
