import angular from 'angular';

const DEFAULT_INTERVAL = 5000;

/**
 * The carouselItems should register themselves by requiring this ctrl
 * and then calling register() with a jQlite object.
 */
class controller {
    constructor($interval) {
        this.$interval = $interval;
        this.items = [];
    }

    $onInit() {
        this.interval = this.interval || DEFAULT_INTERVAL;
        console.log('init carousel, length: ', this.items.length)
    }

    $destroy() {
        if (this.__interval) {
            this.$interval.cancel(this.__interval);
        }
    }

    begin() {
        this.rotate();
        this.__interval = this.$interval(
            () => this.rotate(),
            this.interval,
        );
    }

    register(carouselItem) {
        console.log('register', carouselItem);
        if (!angular.isElement(carouselItem)) {
            throw Error(`bsCarousel: register should be called with jQlite objects, not ${carouselItem}`);
        }
        this.items.push(carouselItem);

        if (!this.__interval) {
            this.begin();
        }
    }

    rotate() {
        let next = this.items.shift();
        let prev = this.items[this.items.length - 1];
        console.log('rotating', prev, next)

        next.addClass('active');
        if (prev) {
            prev.removeClass('active');
        }
        this.items.push(next)
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
