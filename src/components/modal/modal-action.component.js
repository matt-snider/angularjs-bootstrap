class controller {
    constructor(bsContextualTypes) {
        this.bsContextualTypes = bsContextualTypes;
    }

    $onChanges(changes) {
        this.type = this.type || 'primary';
        this.bsContextualTypes.validateOrThrow(this.type, 'bsModalAction');
        this.btnTypeStyle = `btn-${this.type}`;
    }
}

export default {
    name: 'bsModalAction',
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
};
