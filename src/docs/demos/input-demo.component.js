class controller {
    constructor() {
        // Basic examples
        this.emailValue = "matt.snider@example.com";
        this.urlValue = "https://github.com/matt-snider/angularjs-bootstrap";
        this.numberValue = 1;

        // Errors examples
        this.errorsNumberExample = 42;
        this.errorsUrlExample = "https://canada.ca";

        // Readonly/disabled examples
        this.readonlyExample = "Readonly value";
        this.readonlyPlaintextExample = "Readonly plaintext value";
        this.disabledExample = "Disabled value";
    }
}


export default {
    name: 'inputDemo',
    controller,
    template: `
        <h1 class="display-4"> Input </h1>
        <p class="lead">
            An input component for all types of user input.
        </p>


        <h2 class="mt-5"> Basic Examples </h2>
        <p>
            Be sure to use an appropriate <code>type</code> attribute on all inputs
            (e.g., email, number, url) to take advantage of validation and styling.
        </p>

        <code-example>
            <bs-input type="email" ng-model="$ctrl.emailValue" required>
                <bs-label>Email</bs-label>
            </bs-input>

            <bs-input type="url" ng-model="$ctrl.urlValue" required>
                <bs-label>URL</bs-label>
            </bs-input>

            <bs-input type="number" ng-model="$ctrl.numberValue" required>
                <bs-label>Number</bs-label>
            </bs-input>
        </code-example>

        <h2 class="mt-5"> Errors </h2>
        <p>
            Specify custom error codes using the <code>&lt;bs-errors&gt;</code> element,
            which expects custom lower case tags matching the error code that contain
            the appropriate error message.
        </p>
        <p>
            This will just work with angularjs's built-in validators.
            Below is a list of the error keys corresponding to specific angular directives:
        </p>
        <ul>
            <li>
                <i>required</i>: <code>required</code>, <code>ngRequired</code>
            </li>
            <li>
                <i>min</i>: <code>ngMin</code>
            </li>
            <li>
                <i>max</i>: <code>ngMax</code>
            </li>
            <li>
                <i>minlength</i>: <code>ngMinlength</code>
            </li>
            <li>
                <i>maxlength</i>: <code>ngMaxlength</code>
            </li>
            <li>
                <i>pattern</i>: <code>ngPattern</code>
            </li>
        </ul>
        <code-example>
            <bs-input type="number" ng-min="42" ng-max="42" required
                ng-model="$ctrl.errorsNumberExample">
                <bs-label>Lucky Number</bs-label>
                <bs-errors>
                    <required>Everyone needs a lucky number!</required>
                    <min>That's too low to be a lucky number</min>
                    <max>That's too high to be a lucky number</max>
                </bs-errors>
            </bs-input>

            <bs-input type="url" ng-pattern="/^.*\\.ca$/" required
                ng-model="$ctrl.errorsUrlExample">
                <bs-label>Website</bs-label>
                <bs-errors>
                    <required>This field is required</required>
                    <pattern>Must be a URL in Canada</pattern>
                </bs-errors>
            </bs-input>
        </code-example>


        <h2 class="mt-5"> Sizing </h2>
        <p>
            Set the forms size using the <code>size</code> attribute: <i>sm</i>, <i>md (default)</i>, <i>lg</i>.
        </p>
        <code-example>
            <bs-input type="text" size="lg" placeholder="Large input (lg)"
                ng-model="$ctrl.sizingExample1">
            </bs-input>

            <bs-input type="text" placeholder="Default input (md)"
                ng-model="$ctrl.sizingExample2">
            </bs-input>

            <bs-input type="text" size="sm" placeholder="Small input (sm)"
                ng-model="$ctrl.sizingExample3">
            </bs-input>
        </code-example>


        <h2 class="mt-5"> Help/Descriptions </h2>
        <p>
            Provide descriptions for inputs by using the <code>&lt;bs-description&gt;</code> tag.
        </p>
        <code-example>
            <bs-input type="password" ng-model="$ctrl.helpExample">
                <bs-label>Password</bs-label>
                <bs-description>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </bs-description>
            </bs-input>
        </code-example>


        <h2 class="mt-5"> Disabled & Readonly </h2>
        <p>
            Use <code>ngReadonly</code> and <code>ngDisabled</code> to set these
            states on the input. Specifying <code>plaintext</code> in addition to
            <code>ngReadonly</code> will remove the default form field styling and
            preserve the correct margin and padding.
        </p>
        <code-example>
            <bs-input type="text" ng-model="$ctrl.readonlyExample" ng-readonly="true">
            </bs-input>
            <bs-input type="text" ng-readonly="true" plaintext="true"
                ng-model="$ctrl.readonlyPlaintextExample">
            </bs-input>
            <bs-input type="text" ng-model="$ctrl.disabledExample" ng-disabled="true">
            </bs-input>
        </code-example>
    `,
};
