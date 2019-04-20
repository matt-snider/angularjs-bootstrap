export default ['iconDemo', {
    template: `
        <h1 class="display-4"> Icons </h1>
        <p class="lead">
            Use the excellent <a href="https://octicons.github.com/">Octicons</a> collection
            to provide visual cues in your app.
        </p>

        <h2 class="mt-5"> Examples </h2>
        <p>
            To create an icon, simply use the <code>&lt;bs-icon&gt;</code> tag with the icon
            name as its contents to create an icon.
        </p>
        <code-example>
            <bs-icon symbol="alert"></bs-icon>
            <bs-icon symbol="arrow-down"></bs-icon>
            <bs-icon symbol="arrow-left"></bs-icon>
            <bs-icon symbol="arrow-right"></bs-icon>
            <bs-icon symbol="arrow-up"></bs-icon>
            <bs-icon symbol="beaker"></bs-icon>
            <bs-icon symbol="bell"></bs-icon>
            <bs-icon symbol="bold"></bs-icon>
            <bs-icon symbol="book"></bs-icon>
        </code-example>

        <h2 class="mt-5"> Sizing </h2>
        <p>
            The icons size in pixels can be set via the <code>size</code> property
            (the default is 20);
        </p>
        <code-example>
            <bs-icon symbol="alert" size="100"></bs-icon>
            <bs-icon symbol="arrow-down" size="90"></bs-icon>
            <bs-icon symbol="arrow-left" size="80"></bs-icon>
            <bs-icon symbol="arrow-right" size="70"></bs-icon>
            <bs-icon symbol="arrow-up" size="60"></bs-icon>
            <bs-icon symbol="beaker" size="50"></bs-icon>
            <bs-icon symbol="bell" size="40"></bs-icon>
            <bs-icon symbol="bold" size="30"></bs-icon>
            <bs-icon symbol="book" size="20"></bs-icon>
        </code-example>

        <h2 class="mt-5"> Color </h2>
        <p>
            Setting the <code>color</code> attribute will result
        </p>
        <code-example>
            <bs-icon symbol="alert" fill="#007bff"></bs-icon>
            <bs-icon symbol="arrow-down" fill="#868e96"></bs-icon>
            <bs-icon symbol="arrow-left" fill="#28a745"></bs-icon>
            <bs-icon symbol="arrow-right" fill="#dc3545"></bs-icon>
            <bs-icon symbol="arrow-up" fill="#ffc107"></bs-icon>
            <bs-icon symbol="beaker" fill="#17a2b8"></bs-icon>
            <bs-icon symbol="bell" fill="green"></bs-icon>
            <bs-icon symbol="bold" fill="#343a40"></bs-icon>
            <bs-icon symbol="book" fill="red"></bs-icon>
        </code-example>


        <h2 class="mt-5"> Component Reference </h2>
        <component-reference name="bs-icon">
            <component-property name="size" type="Number" default="20">
                The size in pixels of the icon.
            </component-property>
            <component-property name="fill" type="String" default="">
                The color of the icon (hex color or color name).
            </component-property>
        </component-reference>
    `,
}];
