import {stripIndent} from 'common-tags';


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

let BRAND = stripIndent`
    <a href="#" class="navbar-brand"
        bs-transclude-and-replace="brand">
    </a>
`;


class controller {
    constructor() {
        this.styles = [];
        this.collapsed = true;
    }

    $onInit() {
        // Expand -- default to 'md'
        if (this.expand && (['sm', 'md', 'lg', 'xl'].includes(this.expand))) {
            this.styles.push(`navbar-expand-${this.expand}`);
        } else {
            this.styles.push('navbar-expand-md');
        }

        // Themes
        // If no BG given, default to theme bg
        if (this.theme && (this.theme === 'dark' || this.theme === 'light')) {
            this.styles.push(`navbar-${this.theme}`);
            if (!this.bg) {
                this.bg = this.theme;
            }
        }
        if (this.bg && (this.bg === 'dark' || this.bg === 'light')) {
            this.styles.push(`bg-${this.bg}`);
        }
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
    },
    transclude: {
        brand: '?brand',
        items: '?items',
    },
};
