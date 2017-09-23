import angular from 'angular';

import './carousel.component.css';

const DEFAULT_INTERVAL = 5000;

/**
 * The carouselItems should register themselves by requiring this ctrl
 * and then calling register() with a jQlite object.
 */
class controller {
    constructor($animate, $element, $interval, $timeout, $scope) {
        this.$animate = $animate;
        this.$element = $element;
        this.$interval = $interval;
        this.$timeout = $timeout;
        this.$scope = $scope;
        this.running = false;
        this.reverse = false;
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
        if (this.running) {
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
        this.select(nextIndex, isCycle);
    }

    prev() {
        let prevIndex =
            this.activeIndex !== 0
                ? this.activeIndex - 1
                : this.slides.length - 1;

        // prev() is never part of the normal cycle
        this.select(prevIndex, false);
    }

    select(index, isCycle = false) {
        // If this isn't part of the periodic cycle task, reset()
        if(!isCycle) {
            this.reset();
        }

        // Run animations and then update index
        // If we are going in reverse, set reverse and undo afterwards
        let prev = this.slides[this.activeIndex];
        let next = this.slides[index];
        this.reverse = this._isReverse(index, this.activeIndex);
        this.$animate.leave(prev);
        this.$animate
            .enter(next, this.slideContainer)
            .then(() => this.reverse = false);
        this.activeIndex = index;
    }

    _isReverse(newIndex, oldIndex) {
        let lastIndex = this.slides.length - 1;
        let wrappingFwd = (newIndex === 0 && oldIndex === lastIndex);
        let wrappingBwd = (newIndex === lastIndex && oldIndex === 0);
        return (newIndex < oldIndex && !wrappingFwd) || wrappingBwd;
    }
}


export default {
    name: 'bsCarousel',
    controller,
    template: `
        <div class="carousel slide">
            <ol class="carousel-indicators" ng-if="$ctrl.indicators">
                <li ng-repeat="slide in $ctrl.slides track by $index"
                    ng-class="{active: $index === $ctrl.activeIndex}"
                    ng-click="$ctrl.select($index)">
                </li>
            </ol>
            <div class="carousel-inner" ng-class="$ctrl.reverse ? 'reverse' : 'forwards'" ng-transclude>
            </div>

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
};
