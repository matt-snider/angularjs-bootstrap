export default {
    name: 'dropdownDemo',
    template: `
        <h1 class="display-4"> Dropdowns </h1>
        <p class="lead">
            Display lists in an overlay component for menus, links and more.
        </p>

        <h2 class="mt-5"> Examples </h2>
        <p>
            Use the parent tag <code>&lt;bs-dropdown&gt;</code> with the label provided in
            the <code>&lt;bs-label&gt;</code> and the items in <code>&lt;bs-dropwdown-items&gt;</code>.
        </p>
        <code-example>
            <bs-dropdown>
                <bs-label> Items </bs-label>
                <bs-dropdown-items>
                    <bs-dropdown-item href="#">Item1</bs-dropdown-item>
                    <bs-dropdown-item href="#">Item2</bs-dropdown-item>
                    <bs-dropdown-item href="#">Item3</bs-dropdown-item>
                </bs-dropdown-items>
            </bs-dropdown>
        </code-example>

        <h2 class="mt-5"> Component Reference </h2>
        <component-reference name="bs-dropdown">
            <component-property name="closeOnMouseleave" type="Boolean" default="true">
                Whether to automatically close the dropdown when the mouse exits (500 ms delay)
            </component-property>
        </component-reference>
    `,
};
