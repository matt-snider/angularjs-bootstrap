import './navbar-demo.component.css';


export default {
    name: 'navbarDemo',
    template: `
        <h1 class="display-4"> Navbar </h1>
        <p class="lead">
            The navbar provides a useful way to organize navigation.
        </p>

        <h2 class="mt-5"> How it works </h2>
        <p>
            Here's what you need to know to use the navbar:
        </p>
        <ul>
            <li>
                Use the <code>&lt;bs-navbar&gt;</code> tag to wrap your navbar.
                The theme can be set with the <code>theme</code> attribute.
            </li>
            <li>
                Use the <code>&lt;bs-navbar-brand&gt;</code> tag to provide a company name,
                or logo.
            </li>
            <li>
                Navbar items are grouped with the <code>&lt;bs-navbar-items&gt;</code> tag. Specify
                the <code>placement</code> attribute ("left" or "right") if needed.
            </li>
            <li>
                If both left and right items are to be used, just use two <code>&lt;bs-navbar-items&gt;</code>
                tags, and the items will be displayed as expected.
            </li>
            <li>
                Items can be any sort of content you might want to put in a navbar and are wrapped
                in <code>&lt;bs-navbar-item&gt;</code> tags.
            </li>
            <li>
                Simply put text as the content, and set the <code>href</code> attribute to get a typical navbar link.
            </li>
        </ul>

        <code-example>
            <bs-navbar theme="light">
                <bs-brand> Navbar </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item>
                        <bs-dropdown>
                            <bs-label>Dropdown</bs-label>
                            <bs-dropdown-items>
                                <bs-dropdown-item>Action</bs-dropdown-item>
                                <bs-dropdown-item>Another action</bs-dropdown-item>
                                <bs-dropdown-divider></bs-dropdown-divider>
                                <bs-dropdown-item>Something else here</bs-dropdown-item>
                            </bs-dropdown-items>
                        </bs-dropdown>
                    </bs-navbar-item>
                </bs-navbar-items>
        </code-example>


        <h2 class="mt-5"> Brand </h2>
        <p>
            Place an image and/or text in the <code>&lt;bs-brand&gt;</code> tag for easy-to-use branding.
        </p>
        <code-example>
            <!-- Just an image -->
            <bs-navbar theme="light">
                <bs-brand>
                    <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
                </bs-brand>
            </bs-navbar>
        </code-example>

        <code-example>
            <!-- Image and text -->
            <bs-navbar theme="light">
                <bs-brand>
                    <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
                    Bootstrap
                </bs-brand>
            </bs-navbar>
        </code-example>

        <p>
            The <code>href</code> attribute can be set on the <code>&lt;bs-brand&gt;</code> tag to
            make the branding link to something.
        </p>
        <code-example>
            <!-- Image and text -->
            <bs-navbar theme="light">
                <bs-brand href="#">
                    <img src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="">
                    Bootstrap
                </bs-brand>
            </bs-navbar>
        </code-example>


        <h2 class="mt-5"> Color Themes </h2>
        <p>
            Set the background with the <code>bg</code> property. The value may be any of
            <a href="https://getbootstrap.com/docs/4.0/utilities/colors/#background-color" alt="Bootstrap background color">
                Bootstrap's usual background colors</a>
            (e.g. dark, primary, warning, etc).
        </p>
        <p>
            Set the <code>theme</code> proeprty to <i>dark</i> for dark background colors and
            <i>light</i> for light colors.
        </p>
        <code-example class="navbar-example">
            <bs-navbar theme="dark" bg="dark">
                <bs-brand>
                    Bootstrap
                </bs-brand>
            </bs-navbar>

            <bs-navbar theme="dark" bg="primary">
                <bs-brand>
                    Bootstrap
                </bs-brand>
            </bs-navbar>

            <bs-navbar theme="light" bg="warning">
                <bs-brand>
                    Bootstrap
                </bs-brand>
            </bs-navbar>
        </code-example>


        <h2 class="mt-5"> Positioning </h2>
        <p>
            Set the <code>position</code> property to control the navbars placement.
        </p>
        <ul>
            <li> <code>top</code>: fixed to top of viewport from edge to edge </li>
            <li> <code>bottom</code>: fixed to bottom of viewport from edge to edge  </li>
            <li> <code>sticky</code>: top of the viewport, from edge to edge, but only after you scroll past it j/li>
        </ul>
        <p>
            Uses <a href="https://getbootstrap.com/docs/4.0/utilities/position/">Bootstrap's positioning classes</a>
            to position the navbar.
        </p>


        <h2 class="mt-5"> Responsiveness </h2>
        <p>
            Control the viewport width at which the navbar expands or collapses by specifying
            <code>expand</code> (<i>xs</i>, <i>sm</i>, <i>md</i>, <i>lg</i>, or <i>xl</i>).
        </p>
        <p>
            Use <code>toggler-position</code> (<i>left</i> or <i>right</i>) to specify on which
            side the toggler button should appear. The default value is <i>right</i>.
        </p>
        <p>
            Resize the window and watch how the example navbars below behave.
        </p>
        <p>
            See: <a href="https://getbootstrap.com/docs/4.0/components/navbar/#responsive-behaviors"></a>
        </p>

        <code-example class="navbar-example">
            <bs-navbar expand="xl" toggler-position="left">
                <bs-brand>
                    Bootstrap
                </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item href="#">Other Link</bs-navbar-item>
                    <bs-navbar-item href="#">About</bs-navbar-item>
                </bs-navbar-items>
            </bs-navbar>

            <bs-navbar expand="lg" toggler-position="left">
                <bs-brand>
                    Bootstrap
                </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item href="#">Other Link</bs-navbar-item>
                    <bs-navbar-item href="#">About</bs-navbar-item>
                </bs-navbar-items>
            </bs-navbar>

            <bs-navbar expand="md" toggler-position="left">
                <bs-brand>
                    Bootstrap
                </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item href="#">Other Link</bs-navbar-item>
                    <bs-navbar-item href="#">About</bs-navbar-item>
                </bs-navbar-items>
            </bs-navbar>

            <bs-navbar theme="light" expand="sm">
                <bs-brand>
                    Bootstrap
                </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item href="#">Other Link</bs-navbar-item>
                    <bs-navbar-item href="#">About</bs-navbar-item>
                </bs-navbar-items>
            </bs-navbar>

            <bs-navbar theme="light" expand="xs">
                <bs-brand>
                    Bootstrap
                </bs-brand>

                <bs-navbar-items>
                    <bs-navbar-item href="#">Home</bs-navbar-item>
                    <bs-navbar-item href="#">Link</bs-navbar-item>
                    <bs-navbar-item href="#">Other Link</bs-navbar-item>
                    <bs-navbar-item href="#">About</bs-navbar-item>
                </bs-navbar-items>
            </bs-navbar>
        </code-example>
    `,
};
