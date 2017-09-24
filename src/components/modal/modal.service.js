let dialogs = new WeakMap();


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
            .body(body);
    }

    confirm() {

    }

    prompt(title, message) {

    }

    show(builder) {
        // Create the scope and element
        // okFn() & cancelFn should accept and hide respectively
        let scope = this.$rootScope.$new(true);
        let elem = this.$compile(builder._build())(scope);
        let deferred = this.$q.defer();
        scope.okFn = () => this.hide(deferred.promise, true);
        scope.cancelFn = () => this.cancel(deferred.promise);

        // Save a reference to our context via promise
        dialogs.set(deferred.promise, {scope, elem, deferred});

        // Also call cancel if dialog element is destroyed
        let bsModal = elem.find('bs-modal').eq(0);
        bsModal.one('$destroy', () => this.cancel(deferred.promise));

        // Append and show the element
        let body = this.$document.find('body');
        body.append(elem);
        body.addClass('modal-open');
        elem.attr('aria-hidden', false);
        elem.addClass('show d-block');
        return deferred.promise;
    }

    // Close a dialog and resolve with given response
    hide(promise, response) {
        if (!dialogs.has(promise)) {
            throw new UnknownPromise();
        }
        let ctx = dialogs.get(promise);
        this._remove(ctx);
        ctx.deferred.resolve(response);
    }

    // Close a dialog and reject
    cancel(promise) {
        if (!dialogs.has(promise)) {
            throw new UnknownPromise();
        }
        let ctx = dialogs.get(promise);
        this._remove(ctx);
        ctx.deferred.reject();
    }

    _remove(ctx) {
        ctx.elem.remove();
        ctx.scope.$destroy();
    }
}

class UnknownPromise extends Error {
    constructor() {
        super('bsDialogService: unknown object passed to cancel()/hide()');
    }
}

class Builder {
    constructor(service) {
        this.service = service;
        this._title;
        this._body;
        this._ok = 'Ok';
        this._cancel = 'Cancel';
        this._dismissible = false;
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
                <bs-modal dismissible="${this._dismissible}">
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
    constructor(service) {
        super(service);
        this._dismissible = true;
    }

    _buildActions() {
        return `
            <bs-modal-action ng-click="okFn()" type="primary">
                ${this._ok}
            </bs-modal-action>
        `;
    }
}


export default bsModalService;
