class controller {

    /* @ngInject */
    constructor(bsModalService) {
        this.bsModalService = bsModalService;
    }

    alert() {
        this.bsModalService
            .alert('Alert Example', 'You are being alerted of something important')
            .show();
    }

    confirm() {
        this.bsModalService
            .confirm('Confirm Example', 'Do you confirm?')
            .show()
            .then(x => alert('you responded: ' + x));
    }

    prompt() {
        this.bsModalService
            .prompt('Prompt Example', 'How do you like your eggs?')
            .promptValue('over easy')
            .show()
            .then(x => alert('you responded: ' + x));
    }
}

export default ['modalDemo', {
    controller,
    template: `
        <h1 class="display-4">Modal</h1>
        <p class="lead">
            Use Bootstrap-styled modals to add dialogs to your site for lightboxes,
            user notifications, or other custom content.
        </p>

        <h2 class="mt-5"> Inline </h2>
        <p>
            Most often you will want to display a modal dialog above all other content
            and not inline. If the need should nevertheless arise, a modal is just a few
            lines of markup.
        </p>

        <code-example>
            <bs-modal dismissible="false">
                <bs-modal-title> Modal Title </bs-modal-title>
                <bs-modal-body> Modal body text </bs-modal-body>
                <bs-modal-actions>
                    <bs-modal-action type="secondary"> Close </bs-modal-action>
                    <bs-modal-action type="primary"> Save changes </bs-modal-action>
                </bs-modal-actions>
            </bs-modal>
        </code-example>


        <h2 class="mt-5"> Modal Service </h2>
        <p>
            The easiest way to create modal dialogs is using the <code>bsModalService</code>.
        </p>
        <p>
            The modal service provides <code>alert()</code>, <code>confirm()</code> and <code>prompt()</code>,
            each of which can be configured, and then shown with <code>show()</code>, which returns a promise.
        </p>


        <h3 class="mt-5"> Alert </h3>
        <p>
            Alerts can only be confirmed or rejected via the <span aria-hidden="true">&times;</span> button.
            Rejecting them results in the promise being rejected and can be handle by the <code>catch()</code> method
            of the returned promise.
        </p>
        <pre><code>
bsModalService
    .alert('Hello world', 'You are being alerted of something important')
    .show();
        </code></pre>
        <button type="button" class="btn" ng-click="$ctrl.alert()">
            Show alert
        </button>


        <h3 class="mt-5"> Confirm </h3>
        <p>
            A confirmation dialog allows the user to accept or decline (resulting in true/false).
        </p>
        <pre><code>
bsModalService
    .confirm('Confirm Example', 'Do you confirm?')
    .show()
    .then(x => alert('you responded: ' + x));
        </code></pre>
        <button type="button" class="btn" ng-click="$ctrl.confirm()">
            Show confirm
        </button>


        <h3 class="mt-5"> Prompt </h3>
        <p>
            A prompt allows you to request a response from the user. This will be passed
            to the <code>then()</code> callback.
        </p>
        <pre><code>
bsModalService
    .prompt('Prompt Example', 'How do you like your eggs?')
    .promptValue('over easy')
    .show()
    .then(x => alert('you responded: ' + x));
        </code></pre>
        <button type="button" class="btn" ng-click="$ctrl.prompt()">
            Show prompt
        </button>
    `,
}];
