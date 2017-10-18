import './carousel-demo.component.css';

const DEFAULT_INTERVAL = 5000;

class controller {
    constructor() {
        this.controls = true;
        this.indicators = true;
        this.interval = DEFAULT_INTERVAL;
        this.disableInterval = false;
    }

    disableIntervalChanged() {
        this.interval = this.disableInterval
            ? false
            : DEFAULT_INTERVAL;
    }
}

export default {
    name: 'carouselDemo',
    controller,
    template: `
        <h1 class="display-4"> Carousel </h1>
        <p class="lead">
            A slideshow component for cycling through elements—images
            or slides of text—like a carousel.
        </p>


        <h2 class="mt-5"> Examples </h2>
        <p>
            Carousels are built using the <code>&lt;bs-carousel&gt;</code> tag in combination
            with the <code>&lt;bs-carousel-item&gt;</code> child element.
        </p>
        <p>
            Carousels don’t automatically normalize slide dimensions. As such, you may need
            to use additional utilities or custom styles to appropriately size content.
        </p>
        <p>
            Carousels can be configured to use previous/next controls, indicators, and captions.
        </p>


        <h3 class="mt-5"> Slides only </h3>
        <p>
            This example simply creates a carousel that iterates to the next slide every
            5000ms (the default interval).
        </p>
        <p>
            The <code>&lt;bs-carousel-item&gt;</code> may contain an <code>&lt;img&gt;</code>
            or any other markup. This example uses some simple styling to center and size the text.
        </p>
        <code-example>
            <bs-carousel>
                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-primary text-white">
                        <div class="display-4 carousel-demo-slide">
                            First slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-secondary text-white">
                        <div class="display-4 carousel-demo-slide">
                            Second slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-success text-white">
                        <div class="display-4 carousel-demo-slide">
                            Third slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-danger text-white">
                        <div class="display-4 carousel-demo-slide">
                            Fourth slide
                        </div>
                    </div>
                </bs-carousel-item>
            </bs-carousel>
        </code-example>


        <h3 class="mt-5"> Controls, Indicators and Interval</h3>
        <p>
            Use the <code>controls</code>, <code>indicators</code>, and <code>interval</code> properties
            to customize the carousel's behaviour.
        </p>
        <p>
            Note that setting interval to <code>false</code> will result in automatic
            rotation being disabled.
        </p>
        <code-example>
            <bs-carousel controls="$ctrl.controls" indicators="$ctrl.indicators" interval="$ctrl.interval">
                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-primary text-white">
                        <div class="display-4 carousel-demo-slide">
                            First slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-secondary text-white">
                        <div class="display-4 carousel-demo-slide">
                            Second slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-success text-white">
                        <div class="display-4 carousel-demo-slide">
                            Third slide
                        </div>
                    </div>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-danger text-white">
                        <div class="display-4 carousel-demo-slide">
                            Fourth slide
                        </div>
                    </div>
                </bs-carousel-item>
            </bs-carousel>

            <!-- Configure example -->
            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                        ng-model="$ctrl.controls">
                    Controls
                </label>
            </div>

            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                        ng-model="$ctrl.indicators">
                    Indicators
                </label>
            </div>

            <bs-input type="range"
                min="500"
                max="10000"
                step="500"
                ng-model="$ctrl.interval"
                is-disabled="$ctrl.disableInterval">
                <bs-label>
                    Interval
                    <span ng-show="!$ctrl.disableInterval">
                        ({{ $ctrl.interval }} ms)
                    </span>
                    <span ng-show="$ctrl.disableInterval">
                        (disabled)
                    </span>
                </bs-label>
            </bs-input>

            <div class="form-check">
                <label class="form-check-label">
                    <input class="form-check-input" type="checkbox"
                        ng-model="$ctrl.disableInterval"
                        ng-change="$ctrl.disableIntervalChanged()">
                    Disable Interval {{$ctrl.disableInterval}}
                </label>
            </div>
        </code-example>


        <h3 class="mt-5"> Captions </h3>
        <p>
            Use the <code>&lt;bs-carousel-caption&gt;</code> element to provide a
            label <code>&lt;h3&gt;</code> and a caption <code>&lt;p&gt;</code>.
        </p>
        <code-example>
            <bs-carousel controls="true" indicators="true">
                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-primary text-white">
                        <div class="display-4 carousel-demo-slide">
                            First slide
                        </div>
                    </div>

                    <bs-carousel-caption>
                        <h3> First slide label</h3>
                        <p> Praesent sollicitudin lorem nisl, sit amet convallis nulla. </p>
                    </bs-carousel-caption>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-secondary text-white">
                        <div class="display-4 carousel-demo-slide">
                            Second slide
                        </div>
                    </div>

                    <bs-carousel-caption>
                        <h3> Second slide label </h3>
                        <p> Maecenas sagittis ex mi, id euismod arcu volutpat id. </p>
                    </bs-carousel-caption>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-success text-white">
                        <div class="display-4 carousel-demo-slide">
                            Third slide
                        </div>
                    </div>

                    <bs-carousel-caption>
                        <h3> Third slide label </h3>
                        <p> Sed eu quam dictum, dictum nibh quis, luctus enim. </p>
                    </bs-carousel-caption>
                </bs-carousel-item>

                <bs-carousel-item>
                    <div class="carousel-demo-slide-container bg-danger text-white">
                        <div class="display-4 carousel-demo-slide">
                            Fourth slide
                        </div>
                    </div>

                    <bs-carousel-caption>
                        <h3> Fourth slide label </h3>
                        <p> Vivamus efficitur, lectus non mattis laoreet, felis diam efficitur enim at laoreet. </p>
                    </bs-carousel-caption>
                </bs-carousel-item>
            </bs-carousel>
        </code-example>
    `,
};
