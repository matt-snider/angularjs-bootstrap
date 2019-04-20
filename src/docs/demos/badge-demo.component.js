class controller {

    /* @ngInject */
    constructor(bsContextualTypes) {
        this.types = bsContextualTypes.values();
        this.selectedType = this.types[0];
    }
}


export default ['badgeDemo', {
    controller,
    template: `
        <h1 class="display-4"> Badge </h1>
        <p class="lead">
            Documentation and examples for badges, our small count
            and labeling component.
        </p>

        <h2 class="mt-5"> Examples </h2>
        <p>
            Badges scale to match the size of the immediate parent element
            by using relative font sizing and em units.
        </p>
        <code-example>
            <h1>Example heading <bs-badge-secondary>New</bs-badge-secondary></h1>
            <h2>Example heading <bs-badge-secondary>New</bs-badge-secondary></h2>
            <h4>Example heading <bs-badge-secondary>New</bs-badge-secondary></h4>
            <h5>Example heading <bs-badge-secondary>New</bs-badge-secondary></h5>
        </code-example>

        <h2 class="mt-5"> Contextual variations </h2>
        <p>
            Badges can be created with any of
            <a href="https://getbootstrap.com/docs/4.0/utilities/colors/">
                Bootstrap's standard contextual colors
            </a>
        </p>
        <code-example>
            <bs-badge-primary>Primary</bs-badge-primary>
            <bs-badge-secondary>Secondary</bs-badge-secondary>
            <bs-badge-success>Success</bs-badge-success>
            <bs-badge-danger>Danger</bs-badge-danger>
            <bs-badge-warning>Warning</bs-badge-warning>
            <bs-badge-info>Info</bs-badge-info>
            <bs-badge-light>Light</bs-badge-light>
            <bs-badge-dark>Dark</bs-badge-dark>
        </code-example>


        <h2 class="mt-5"> Dynamic Color </h2>
        <p>
            The contextual type/color may be set via the <code>type</code>
            property.
        </p>
        <code-example>
            <bs-badge type="{{$ctrl.selectedType}}"> {{ $ctrl. selectedType }} </bs-badge>
            <select ng-model="$ctrl.selectedType" ng-options="type for type in $ctrl.types"></select>
        </code-example>


        <h2 class="mt-5"> Pill badges </h2>
        <p>
            The <code>pill</code> property can be used to create a rounded
            (pill-shaped) badge.
        </p>
        <code-example>
            <bs-badge-primary pill="true">Primary</bs-badge-primary>
            <bs-badge-secondary pill="true">Secondary</bs-badge-secondary>
            <bs-badge-success pill="true">Success</bs-badge-success>
            <bs-badge-danger pill="true">Danger</bs-badge-danger>
            <bs-badge-warning pill="true">Warning</bs-badge-warning>
            <bs-badge-info pill="true">Info</bs-badge-info>
            <bs-badge-light pill="true">Light</bs-badge-light>
            <bs-badge-dark pill="true">Dark</bs-badge-dark>
        </code-example>


        <h2 class="mt-5"> Links </h2>
        <p>
            Providing the <code>href</code> property creates an <em>actionable</em>
            badge with hover and focus states.
        </p>
        <code-example>
            <bs-badge-primary href="#!/badge">Primary</bs-badge-primary>
            <bs-badge-secondary href="#!/badge">Secondary</bs-badge-secondary>
            <bs-badge-success href="#!/badge">Success</bs-badge-success>
            <bs-badge-danger href="#!/badge">Danger</bs-badge-danger>
            <bs-badge-warning href="#!/badge">Warning</bs-badge-warning>
            <bs-badge-info href="#!/badge">Info</bs-badge-info>
            <bs-badge-light href="#!/badge">Light</bs-badge-light>
            <bs-badge-dark href="#!/badge">Dark</bs-badge-dark>
        </code-example>


        <h2 class="mt-5"> Component Reference </h2>
        <!-- bsBadge aliases Reference -->
        <component-reference name="bs-badge-*">
            <component-property name="pill" type="Boolean" default="false">
                Whether this badge should be styled as a <em>pill</em>
            </component-property>
            <component-property name="href" type="String" default="None">
                Makes this badge a link to the given url (and adds hover and focus states).
            </component-property>
        </component-reference>

        <!-- bsBadge Reference -->
        <component-reference name="bs-badge">
            <component-property name="type" type="String" default="primary">
                The
                <a href="https://getbootstrap.com/docs/4.0/utilities/colors/">
                    contextual color
                </a>
            </component-property>
            <component-property name="pill" type="Boolean" default="false">
                Whether this badge should be styled as a <em>pill</em>
            </component-property>
            <component-property name="href" type="String" default="None">
                Makes this badge a link to the given url (and adds hover and focus states).
            </component-property>
        </component-reference>
    `,
}];
