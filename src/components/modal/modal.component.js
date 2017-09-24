export default {
    name: 'bsModal',
    template: `
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" ng-transclude="title">
                    </h5>
                    <button type="button" class="close" aria-label="Close">
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
    transclude: {
        actions: '?bsModalActions',
        body: '?bsModalBody',
        title: '?bsModalTitle',
    }
};
