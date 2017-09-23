import angular from 'angular';

import './carousel.component.css';

const DEFAULT_INTERVAL = 5000;

/**
 * The carouselItems should register themselves by requiring this ctrl
 * and then calling register() with a jQlite object.
 */
class controller {
    constructor($animate, $element, $interval) {
        this.$animate = $animate;
        this.$element = $element;
        this.$interval = $interval;
        this.slides = [];
        this.activeIndex = 0;

        // Slide container should be the second div
        this.slideContainer = $element.find('div')[1];
    }

    $onInit() {
        this.interval = this.interval || DEFAULT_INTERVAL;
    }

    $destroy() {
        this.stop();
    }

    register(carouselItem) {
        if (!angular.isElement(carouselItem)) {
            throw Error(`bsCarousel: register should be called with jQlite objects, not ${carouselItem}`);
        }
        this.slides.push(carouselItem);

        // If this is the first registration, start slide task
        // Otherwise, simply remove it from the DOM.
        if (this.slides.length === 1) {
            this.start();
        } else {
            carouselItem.detach();
        }
    }

    start() {
        if (this.__interval) {
            return;
        }
        this.__interval = this.$interval(() => this.next(), this.interval);
    }

    stop() {
        if (this.__interval) {
            this.$interval.cancel(this.__interval);
        }
    }

    next() {
        this.select((this.activeIndex + 1) % this.slides.length);
    }

    prev() {
        this.select((this.activeIndex - 1) % this.slides.length);
    }

    select(index) {
        let prev = this.slides[this.activeIndex];
        let next = this.slides[index];

        // Run animations and then update index
        this.$animate.leave(prev);
        this.$animate.enter(next, this.slideContainer);
        this.activeIndex = index;
    }
}


export default {
    name: 'bsCarousel',
    controller,
    template: `
        <div class="carousel slide">
            <div class="carousel-inner" ng-transclude>
            </div>
        </div>
    `,
    bindings: {
        interval: '<',
    },
    transclude: true,
};
