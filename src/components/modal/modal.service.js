class bsModalService {
    constructor($compile, $document, $rootScope, $q) {
        this.$compile = $compile;
        this.$document = $document;
        this.$rootScope = $rootScope;
        this.$q = $q;
    }

    alert(title, body) {
        return new AlertBuilder(this)
            .title(title)
            .body(body)
            .ok('Ok');
    }

    confirm() {

    }

    prompt(title, message) {

    }

    show(builder) {
        // Create the scope and element
        // okFn() & cancelFn will dismiss with different return values
        let scope = this.$rootScope.$new(true);
        let elem = this.$compile(builder._build())(scope);
        let deferred = this.$q.defer();
        scope.okFn = () => {
            elem.remove();
            scope.$destroy();
            deferred.resolve(true);
        };

        // Append and show the element
        let body = this.$document.find('body');
        body.append(elem);
        body.addClass('modal-open');
        elem.attr('aria-hidden', false);
        elem.addClass('show d-block');
        return deferred.promise;
    }

    hide() {

    }

    // Cancel a show promise
    cancel() {

    }

    // Close a dialog with a specific response (e.g. true/false)
    close() {

    }
}

class Builder {
    constructor(service) {
        this.service = service;
        this._title;
        this._body;
        this._ok = 'Ok';
        this._cancel = 'Cancel';
    }

    title(value) {
        this._title = value;
        return this;
    }

    body(value) {
        this._body = value;
        return this;
    }

    ok(value) {
        this._ok = value;
        return this;
    }

    cancel(value) {
        this._cancel = value;
        return this;
    }

    show() {
        return this.service.show(this);
    }

    // Extending class must implement this
    _buildActions() {
        throw new Error('Not implemented');
    }

    _build() {
        return `
            <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <bs-modal>
                    <bs-modal-title> ${this._title} </bs-modal-title>
                    <bs-modal-body> ${this._body} </bs-modal-body>
                    <bs-modal-actions>
                        ${this._buildActions()}
                    </bs-modal-actions>
                </bs-modal>
            </div>
        `;
    }
}

class AlertBuilder extends Builder {
    _buildActions() {
        return `
            <bs-modal-action ng-click="okFn()" type="primary">
                ${this._ok}
            </bs-modal-action>
        `;
    }
}


export default bsModalService;
