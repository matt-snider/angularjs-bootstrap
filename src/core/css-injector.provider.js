import angular from 'angular';


class bsCssInjector {
    constructor() {
        this.head = angular.element(document.head);
    }

    inject(css) {
        // If value is unset, replace with ''
        css = css ? css : '';

        let node = angular.element(`<style>${css}</style>`);
        this.head.append(node);
        return node;
    }

    update(node, css) {
        node.empty().append(css);
    }

    $get() {
        return this;
    }
}

export default bsCssInjector;
