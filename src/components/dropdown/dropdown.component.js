const CLOSE_DELAY_MS = 500;
const BUTTON_ID = "bsDropdownButton{{::$id}}"

class controller {
    constructor($timeout) {
        this.$timeout = $timeout;
        this.isOpen = false;
        this.__closePromise = null;
    }

    $onInit() {
        // Defaults
        this.closeOnMouseleave = this.closeOnMouseleave || true;

        // Indicate whether we are in a bsNavbar
        this.isInNavbar = !!this.bsNavbar;
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

    /**
     * Close the dropdown if closeOnMouseleave is not disabled.
     *
     * We use a delay here, and the operation will be cancelled if
     * the user re-enters the menu before the delay is done.
     */
    mouseleave() {
        if (this.closeOnMouseleave && !this.__cancelClose) {
            this.__closePromise = this.$timeout(() =>  this.close(), CLOSE_DELAY_MS);
            this.__closePromise
                .catch(() => {})
                .finally(() => this.__closePromise = null);
        }
    }

    mouseenter() {
        if (this.__closePromise) {
            this.$timeout.cancel(this.__closePromise);
        }
    }
}

// TODO: why can't we use bsTranscludeAndReplace for items?
// doing this causes the dropdownItem directive to not receive
// the bsNavbar controller
export default {
    name: 'bsDropdown',
    controller,
    require: {
        bsNavbar: '^',
    },
    template: `
        <div class="dropdown">
            <a id="${BUTTON_ID}"
                class="dropdown-toggle"
                ng-class="$ctrl.isInNavbar ? 'nav-link' : 'btn btn-secondary'"
                aria-haspopup="true" aria-expanded="false"
                ng-click="$ctrl.toggle()"
                bs-transclude-and-replace="label">
            </a>

            <div class="dropdown-menu"
                aria-labelledby="${BUTTON_ID}"
                ng-class="{show: $ctrl.isOpen}"
                ng-mouseleave="$ctrl.mouseleave()"
                ng-mouseenter="$ctrl.mouseenter()"
                ng-transclude="dropdownItems">
            </div>
        </div>
    `,
    bindings: {
        closeOnMouseleave: '<',
    },
    transclude: {
        label: '?label',
        dropdownItems: '?dropdownItems',
    }
}
