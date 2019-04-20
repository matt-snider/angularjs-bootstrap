let dialogs = new WeakMap();


class bsModalService {

    /* @ngInject */
    constructor($compile, $document, $rootScope, $q, bsBackdrop) {
        this.$compile = $compile;
        this.$document = $document;
        this.$rootScope = $rootScope;
        this.$q = $q;
        this.bsBackdrop = bsBackdrop;
    }

    alert(title, body) {
        return new AlertBuilder(this)
            .title(title)
            .body(body);
    }

    confirm(title, body) {
        return new ConfirmBuilder(this)
            .title(title)
            .body(body);
    }

    prompt(title, body) {
        return new PromptBuilder(this)
            .title(title)
            .body(body);
    }

    show(builder) {
        // Create the scope and element
        // okFn() & cancelFn should accept and hide respectively
        let scope = this.$rootScope.$new(true);
        let elem = this.$compile(builder._build())(scope);
        let deferred = this.$q.defer();
        scope.okFn = () => this.dismiss(deferred.promise, true);
        scope.cancelFn = () => this.dismiss(deferred.promise, false);
        scope.vars = { value: builder._promptValue };

        // Save a reference to our context via promise
        dialogs.set(deferred.promise, { scope, elem, deferred });

        // Also call cancel if dialog element is destroyed
        let bsModal = elem.find('bs-modal').eq(0);
        bsModal.one('$destroy', () => this.reject(deferred.promise));

        // Append and show the element
        let body = this.$document.find('body');
        body.append(elem);
        body.addClass('modal-open');
        elem.attr('aria-hidden', false);
        elem.addClass('show d-block');

        // Show the backdrop
        this.bsBackdrop.show();
        return deferred.promise;
    }

    // Close a dialog and resolve with given result (or prompt value)
    dismiss(promise, result = null) {
        if (!dialogs.has(promise)) {
            throw new UnknownPromise();
        }

        // Try to get value from prompt otherwise use default
        let ctx = dialogs.get(promise);
        if (result && ctx.scope.vars.value) {
            result = ctx.scope.vars.value;
        }

        ctx.deferred.resolve(result);
        this._remove(ctx);
    }

    // Close a dialog and reject
    reject(promise) {
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

        let body = this.$document.find('body');
        body.removeClass('modal-open');
        this.bsBackdrop.hide();
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
        this._title = '';
        this._body = '';
        this._ok = 'Ok';
        this._cancel = 'Cancel';
        this._dismissible = false;
        this._isPrompt = false;
        this._promptValue = '';
    }

    title(value) {
        this._title = value;
        return this;
    }

    body(value) {
        this._body = value;
        return this;
    }

    dismissible(value) {
        this._dismissible = value;
        return this;
    }

    prompt(value) {
        this._isPrompt = value;
        return this;
    }

    promptValue(value) {
        this.prompt(true);
        this._promptValue = value;
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

    _buildBody() {
        return this._body;
    }

    // Extending class must implement this
    _buildActions() {
        return null;
    }

    _build() {
        let actionsHtml = '';
        let actions = this._buildActions();
        if (actions !== null) {
            actionsHtml = `
                <bs-modal-actions>
                    ${actions}
                </bs-modal-actions>
            `;
        }

        return `
            <div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                <bs-modal dismissible="${this._dismissible}">
                    <bs-modal-title> ${this._title} </bs-modal-title>
                    <bs-modal-body>
                        ${this._buildBody()}
                    </bs-modal-body>
                    ${actionsHtml}
                </bs-modal>
            </div>
        `;
    }
}

class AlertBuilder extends Builder {
    constructor(service) {
        super(service);
        this.dismissible(true);
    }

    _buildActions() {
        return `
            <bs-modal-action ng-click="okFn()" type="primary">
                ${this._ok}
            </bs-modal-action>
        `;
    }
}

class ConfirmBuilder extends Builder {
    _buildActions() {
        return `
            <bs-modal-action ng-click="cancelFn()" type="secondary">
                ${this._cancel}
            </bs-modal-action>
            <bs-modal-action ng-click="okFn()" type="primary">
                ${this._ok}
            </bs-modal-action>
        `;
    }
}

class PromptBuilder extends ConfirmBuilder {
    constructor(service) {
        super(service);
        this.prompt(true);
    }

    _buildBody() {
        return `
            ${super._buildBody()}
            <bs-input type="text" ng-model="vars.value">
            </bs-input>
        `;
    }
}


export default ['bsModalService', bsModalService];
