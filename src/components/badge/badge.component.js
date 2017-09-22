export class BadgeController {
    constructor(bsContextualTypes) {
        this.bsContextualTypes = bsContextualTypes;
    }

    $onChanges() {
        this.bsContextualTypes.validateOrThrow(this.type, 'bsBadge');
        this.badgeTypeStyle = `badge-${this.type} ${this.pill ? 'badge-pill': ''}`;
    }
}


export default {
    name: 'bsBadge',
    controller: BadgeController,
    template: `
        <span class="badge" ng-class="$ctrl.badgeTypeStyle"
            ng-transclude>
        </span>
    `,
    transclude: true,
    bindings: {
        type: '@',
        pill: '<',
    }
};
