export class BadgeController {

    /* @ngInject */
    constructor(bsContextualTypes) {
        this.bsContextualTypes = bsContextualTypes;
    }

    $onChanges() {
        this.bsContextualTypes.validateOrThrow(this.type, 'bsBadge');
        this.badgeTypeStyle = `badge-${this.type} ${this.pill ? 'badge-pill': ''}`;
    }
}


export default ['bsBadge', {
    controller: BadgeController,
    template: `
        <span ng-if="!$ctrl.href"
            class="badge"
            ng-class="$ctrl.badgeTypeStyle"
            ng-transclude>
        </span>
        <a ng-if="$ctrl.href"
            class="badge"
            href="{{$ctrl.href}}"
            ng-class="$ctrl.badgeTypeStyle"
            ng-transclude>
        </a>
    `,
    transclude: true,
    bindings: {
        type: '@',
        pill: '<',
        href: '@',
    }
}];
