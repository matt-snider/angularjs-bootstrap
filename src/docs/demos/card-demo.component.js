export default ['cardDemo', {
    template: `
        <h1 class="display-4"> Card </h1>
        <p class="lead">
            Documentation and examples for card, foobarbazz
        </p>

        <h2 class="mt-5"> Examples </h2>
        <p>
            abcdefghijk...
        </p>
        <code-example>
            <bs-card>
                <bs-card-title>Hello world</bs-card-title>
                <bs-card-subtitle>A card is created</bs-card-subtitle>
                <bs-card-text>
                    Here is some card content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    sit amet tincidunt enim, eu consequat dolor. Integer porta volutpat felis sit
                    amet euismod.
                </bs-card-text>
                <bs-card-link> Card link </bs-card-link>
                <bs-card-link> Another link </bs-card-link>
            </bs-card>
        </code-example>


        <h2 class="mt-5"> Component Reference </h2>
        <component-reference name="bs-card">
        </component-reference>
    `,
}];