const CLOSE_DELAY_MS = 500;
const BUTTON_ID = "bsDropdownButton{{::$id}}"

class controller {

    /* @ngInject */
    constructor($timeout) {
        this.$timeout = $timeout;
        this.isOpen = false;
        this.__closePromise = null;
    }

    $onInit() {
        // Indicate whether we are in a bsNavbar
        this.isInNavbar = !!this.bsNavbar;

        // Defaults
        this.closeOnMouseleave = this.closeOnMouseleave || true;
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    close() {
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
    }

    clicked() {
        this.close();
    }

    /**
     * Close the dropdown if closeOnMouseleave is not disabled.
     *
     * We use a delay here, and the operation will be cancelled if
     * the user re-enters the menu before the delay is done.
     */
    mouseleave() {
        if (this.closeOnMouseleave && !this.__cancelClose) {
            this.__closePromise = this.$timeout(() => this.mouseleaveTimeout(), CLOSE_DELAY_MS);
            this.__closePromise
                .catch(() => {})
                .finally(() => this.__closePromise = null);
        }
    }

    // If we're inside a navbar that isn't expanded, do not close after mouseleave timeout.
    mouseleaveTimeout() {
        if (this.isInNavbar && !this.bsNavbar.expanded) {
            return;
        }
        this.close();
    }

    mouseenter() {
        if (this.__closePromise) {
            this.$timeout.cancel(this.__closePromise);
        }
    }
}

export default {
    name: 'bsDropdown',
    controller,
    require: {
        bsNavbar: '^?',
    },
    template: `
        <div class="dropdown">
            <a id="${BUTTON_ID}"
                class="dropdown-toggle"
                ng-class="$ctrl.isInNavbar ? 'nav-link' : 'btn btn-secondary'"
                aria-haspopup="true" aria-expanded="false"
                ng-click="$ctrl.toggle()"
                ng-transclude="label">
            </a>

            <div class="dropdown-menu"
                aria-labelledby="${BUTTON_ID}"
                ng-class="{show: $ctrl.isOpen}"
                ng-mouseleave="$ctrl.mouseleave()"
                ng-mouseenter="$ctrl.mouseenter()"
                ng-click="$ctrl.clicked()"
                ng-transclude="items">
            </div>
        </div>
    `,
    bindings: {
        closeOnMouseleave: '<',
    },
    transclude: {
        label: '?bsLabel',
        items: '?bsDropdownItems',
    }
}
