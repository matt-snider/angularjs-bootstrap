import angular from 'angular';

import './carousel.component.css';

// Default time to wait between slides
const DEFAULT_INTERVAL = 5000;

/**
 * The carouselItems should register themselves by requiring this ctrl
 * and then calling register() with a jQlite object.
 */
class controller {

    /* @ngInject */
    constructor($animate, $element, $interval, $q) {
        this.$animate = $animate;
        this.$element = $element;
        this.$interval = $interval;
        this.$q = $q;
        this.slides = [];
        this.activeIndex = 0;

        // State
        this.animating = false;
        this.running = false;
        this.reverse = false;

        // Slide container should be the second div
        this.slideContainer = $element.find('div').eq(1);
    }

    $onInit() {
        this.interval = this.interval || DEFAULT_INTERVAL;
    }

    $onChanges(changes) {
        // Reset so that interval is updated
        if (changes.interval && !changes.interval.isFirstChange()) {
            this.reset();
        }
    }

    $onDestroy() {
        this.stop();
    }

    register(carouselItem) {
        if (!angular.isElement(carouselItem)) {
            throw Error(`bsCarousel: register should be called with jQlite objects, not ${carouselItem}`);
        }
        this.slides.push(carouselItem);

        // Detach the element unless it is the first
        if (this.slides.length > 1) {
            carouselItem.detach();
        }

        // Start the carousel
        this.start();
    }

    start() {
        if (this.running || this.interval === false) {
            return;
        }
        this.running = true;
        this.__interval = this.$interval(() => this.next(true), this.interval);
    }

    stop() {
        if (!this.running) {
            return;
        }
        this.$interval.cancel(this.__interval);
        this.running = false;
    }

    reset() {
        this.stop();
        this.start();
    }

    next(isCycle = false) {
        let nextIndex = (this.activeIndex + 1) % this.slides.length;
        this._select(nextIndex, isCycle);
    }

    prev() {
        let prevIndex =
            this.activeIndex !== 0
                ? this.activeIndex - 1
                : this.slides.length - 1;
        this._select(prevIndex, false, true);
    }

    goToIndex(index) {
        let isReverse = (index < this.activeIndex);
        this._select(index, false, isReverse);
    }

    _select(index, isCycle = true, isReverse = false) {
        if (this.animating) {
            return;
        }

        // If there is only one item, index === activeIndex
        if (index === this.activeIndex) {
            return;
        }

        // If this isn't part of the periodic cycle task, reset()
        if(!isCycle) {
            this.reset();
        }

        // Update state and run animations.
        let prev = this.slides[this.activeIndex];
        let next = this.slides[index];
        this.animating = true;
        this.activeIndex = index;
        this.reverse = isReverse;
        this.$q
            .all([
                this.$animate.leave(prev),
                this.$animate.enter(next, this.slideContainer),
            ])
            .finally(() => {
                this.animating = false;
                this.reverse = false;
            });
    }
}


export default ['bsCarousel' ,{
    controller,
    template: `
        <div class="carousel slide">
            <!-- Indicators -->
            <ol class="carousel-indicators" ng-if="$ctrl.indicators">
                <li ng-repeat="slide in $ctrl.slides track by $index"
                    ng-class="{active: $index === $ctrl.activeIndex}"
                    ng-click="$ctrl.goToIndex($index)">
                </li>
            </ol>

            <!-- Slides -->
            <div class="carousel-inner" ng-class="$ctrl.reverse ? 'reverse' : 'forwards'" ng-transclude>
            </div>

            <!-- Controls -->
            <a class="carousel-control-prev" role="button" ng-click="$ctrl.prev()"
                ng-if="$ctrl.controls">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" role="button" ng-click="$ctrl.next()"
                ng-if="$ctrl.controls">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `,
    bindings: {
        interval: '<',
        controls: '<',
        indicators: '<',
    },
    transclude: true,
}];
