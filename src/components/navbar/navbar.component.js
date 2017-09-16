class controller {
    constructor($transclude) {
        this.isSlotFilled = $transclude.isSlotFilled;
        this.styles = [];
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
}

const NAVBAR_ITEMS_ID = 'bs-navbar-{{ ::$id }}-items';


export default {
    name: 'bsNavbar',
    controller,
    template: `
        <nav class="navbar" ng-class="::$ctrl.styles">
            <a href="#" class="navbar-brand"
                ng-transclude="brand"
                ng-if="::$ctrl.isSlotFilled('brand')">
            </a>

            <button class="navbar-toggler" type="button"
                data-toggle="collapse"
                data-target="#${NAVBAR_ITEMS_ID}"
                aria-controls="${NAVBAR_ITEMS_ID}"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="${NAVBAR_ITEMS_ID}"
                ng-if="::$ctrl.isSlotFilled('items')"
                ng-transclude="items" bs-navbar-items>
            </div>
        </nav>
    `,
    bindings: {
        expand: '@',
        theme: '@',
        bg: '@',
    },
    transclude: {
        brand: '?brand',
        items: '?items',
    },
};
