function bsCarouselItem() {
    return {
        require: '^bsCarousel',
        template: `<div class="carousel-item" ng-transclude></div>`,
        link(scope, element, attrs, bsCarousel) {
            bsCarousel.register(element);
        },
        transclude: true,
        replace: true,
    };
}

export default bsCarouselItem;
