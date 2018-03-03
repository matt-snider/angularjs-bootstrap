import angular from 'angular';
import {stripIndent} from 'common-tags';


const EXPAND_THRESHOLDS = {
    'xs': 0,
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200,
};

const NAVBAR_ITEMS_ID = 'bs-navbar-{{ ::$id }}-items';

const TOGGLER = stripIndent`
    <button ng-click="$ctrl.toggleCollapse()"
        type="button"
        class="navbar-toggler"
        data-target="#${NAVBAR_ITEMS_ID}"
        aria-controls="${NAVBAR_ITEMS_ID}"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
`;

let BRAND = '<span ng-transclude="brand"></span>';


class controller {

    /* @ngInject */
    constructor($window) {
        this.$window = $window;
        this.styles = [];
        this.expanded = false;
        this.collapsed = true;
    }

    $onInit() {
        // Expand -- default to 'md'
        this.expand = this.expand || 'md';
        this.styles.push(`navbar-expand-${this.expand}`);

        // Themes
        // If no BG given, default to theme bg
        this.theme = this.theme || 'light';
        if (this.theme && (this.theme === 'dark' || this.theme === 'light')) {
            this.styles.push(`navbar-${this.theme}`);
            if (!this.bg) {
                this.bg = this.theme;
            }
        }
        if (this.bg) {
            this.styles.push(`bg-${this.bg}`);
        }

        // Position
        if (this.position) {
            if (this.position === 'top' || this.position === 'bottom') {
                this.styles.push(`fixed-${this.position}`);
            } else if (this.position === 'sticky') {
                this.styles.push('sticky-top');
            } else {
                throw new Error(`bsNavbar: invalid value for 'position' property: ${this.position}`);
            }
        }

        // Watch window resize to set collapse state.
        this.expanded = this.recalculateExpandedness()
        angular.element(this.$window)
            .on('resize', () => {
                this.expanded = this.recalculateExpandedness();
            });
    }

    $onDestroy() {
        angular.element(this.$window).off('resize');
    }

    recalculateExpandedness() {
        return this.$window.innerWidth >= EXPAND_THRESHOLDS[this.expand];
    }

    toggleCollapse() {
        this.collapsed = !this.collapsed;
    }

    itemClicked() {
        this.collapsed = true;
    }
}

export default {
    name: 'bsNavbar',
    controller,
    template($element, $attrs) {
        'ngInject';

        let togglerAndBrand;
        if (!$attrs.togglerPosition || $attrs.togglerPosition === 'right') {
            togglerAndBrand = BRAND + TOGGLER;
        } else if ($attrs.togglerPosition === 'left') {
            togglerAndBrand = TOGGLER + BRAND;
        } else {
            throw Error(`bsNavbar: invalid togglerPosition '${$attrs.togglerPosition}'`);
        }

        return `
            <nav class="navbar" ng-class="::$ctrl.styles">
                ${togglerAndBrand}
                <div ng-transclude="items" id="${NAVBAR_ITEMS_ID}"
                    class="navbar-collapse"
                    ng-class="{collapse: $ctrl.collapsed}">
                </div>
            </nav>
        `;
    },
    bindings: {
        expand: '@',
        theme: '@',
        bg: '@',
        togglerPosition: '@',
        position: '@',
    },
    transclude: {
        brand: '?bsBrand',
        items: '?bsNavbarItems',
    },
};
