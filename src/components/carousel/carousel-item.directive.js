function bsCarouselItem() {
    return {
        restrict: 'E',
        require: '^bsCarousel',
        replace: true,
        transclude: true,
        template: '<div class="carousel-item active" ng-transclude></div>',
        link(scope, element, attrs, bsCarousel) {
            'ngInject';

            bsCarousel.register(element);
        },
    };
}

export default bsCarouselItem;
