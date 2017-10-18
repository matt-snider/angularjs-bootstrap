class controller {
    constructor() {
        this.emailValue = "matt.snider@example.com";
        this.urlValue = "https://github.com/matt-snider/angularjs-bootstrap";
        this.numberValue = 1;
        this.errorsNumberExample = 42;
        this.errorsUrlExample = "https://canada.ca";
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
                    <minlength>That's too low to be a lucky number</minlength>
                    <maxlength>That's too high to be a lucky number</maxlength>
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
    `,
};
