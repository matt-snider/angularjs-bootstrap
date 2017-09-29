const ALERT_TEXT = 'Create a new dismissible alert';


class controller {
    constructor($compile, $element, $scope, bsContextualTypes) {
        this.$compile = $compile;
        this.$scope = $scope;

        // Dynamic Type demo
        this.types = bsContextualTypes.values();
        this.selectedType = this.types[0];

        // Dismissible alerts demo
        this.alertsContainer = $element.find('alerts-container');
        this.alertText = ALERT_TEXT;
    }

    alertTextDone() {
        let alert = this.$compile(
            `<bs-alert-info dismissible="true">
                ${this.alertText}
            </bs-alert-info>`
        )(this.$scope);
        this.alertsContainer.append(alert);

        // Reset
        this.alertText = ALERT_TEXT;
    }
}


export default {
    name: 'alertDemo',
    controller,
    template: `
        <h1 class="display-4"> Alerts </h1>
        <p class="lead">
            Provide contextual feedback messages for typical user actions
            with the handful of available and flexible alert messages.
        </p>

        <h2 class="mt-5"> Examples </h2>
        <p>
            Alerts are available in a variety colors, as well as being
            optionally <code>dismissible</code>.
        </p>
        <p>
            The simplest way to use this component is the
            <code>&lt;bs-alert-*&gt;</code> tags with
            the contextual style directly in the tag name.
        </p>
        <code-example>
            <bs-alert-primary> Primary Alert </bs-alert-primary>
            <bs-alert-secondary> Secondary Alert </bs-alert-secondary>
            <bs-alert-success> Success Alert </bs-alert-success>
            <bs-alert-danger> Danger Alert </bs-alert-danger>
            <bs-alert-warning> Warning Alert </bs-alert-warning>
            <bs-alert-info> Info Alert </bs-alert-info>
            <bs-alert-light> Light Alert </bs-alert-light>
            <bs-alert-dark> Dark Alert </bs-alert-dark>
        </code-example>


        <h2 class="mt-5"> Dynamic Contextual Type </h2>
        <p>
            It is also possible to use the <code>&lt;bs-alert&gt;</code> tag
            with the <code>type</code> property
            (e.g. if the type needs to be dynamic for some reason).
        </p>

        <code-example>
            <bs-alert type="{{$ctrl.selectedType}}"> Hi - this is an alert! </bs-alert>
            <select ng-model="$ctrl.selectedType" ng-options="type for type in $ctrl.types"></select>
        </code-example>



        <h2 class="mt-5"> Dismissing </h2>
        <p>
            Alerts can be made <code>dismissible</code>. Note that dismissing
            an alert will result in the DOM Element being destroyed.
        </p>
        <code-example>
            <alerts-container>
                <bs-alert-info dismissible="true">
                    ${ALERT_TEXT}
                </bs-alert-info>
            </alerts-container>

            <bs-input ng-model="$ctrl.alertText">
                <bs-label>Alert text </bs-label>
            </bs-input>
            <button class="btn" ng-click="$ctrl.alertTextDone()">Send</button>
        </code-example>


        <h2> Additional Content </h2>
        <code-example>
            <bs-alert-success>
                <h4 class="alert-heading">Well done!</h4>
                <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                <hr>
                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
            </bs-alert-success>
        </code-example>

        <h2 class="mt-5"> Component Reference </h2>
        <!-- bsAlert aliases Reference -->
        <component-reference name="bs-alert-*">
            <component-property name="dismissible" type="Boolean" default="false">
                Whether the alert may be dismissed.
            </component-property>
        </component-reference>

        <!-- bsAlert Reference -->
        <component-reference name="bs-alert">
            <component-property name="type" type="String" default="primary">
                The bootstrap contextual type which determines color.
            </component-property>
            <component-property name="dismissible" type="Boolean" default="false">
                Whether the alert may be dismissed.
            </component-property>
        </component-reference>
    `
}
