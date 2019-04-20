function directive() {
    return {
        restrict: 'E',
        require: '^bsCarousel',
        replace: true,
        transclude: true,
        template: '<div class="carousel-item active" ng-transclude></div>',
        link(scope, element, attrs, bsCarousel) {
            bsCarousel.register(element);
        },
    };
}

export default ['bsCarouselItem', directive];
