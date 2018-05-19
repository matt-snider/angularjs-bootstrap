export default ['bsModal', {
    controller: class {
        constructor($element) {
            'ngInject';

            this.$element = $element;
        }

        $onInit() {
            this.dismissible = this.dismissible !== undefined
                ? this.dismissible
                : true;
        }

        cancel() {
            this.$element.remove();
        }
    },
    bindings: {
        dismissible: '<',
    },
    transclude: {
        actions: '?bsModalActions',
        body: '?bsModalBody',
        title: '?bsModalTitle',
    },
    template: `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" ng-transclude="title">
                </h5>
                <button type="button" class="close" aria-label="Close"
                        ng-if="$ctrl.dismissible"
                        ng-click="$ctrl.cancel()">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body" ng-transclude="body">
            </div>
            <div class="modal-footer" ng-transclude="actions">
            </div>
        </div>
    </div>
    `,
}];