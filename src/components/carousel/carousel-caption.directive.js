function bsCarouselCaption() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        template: `
            <div class="carousel-caption d-none d-md-block"
                ng-transclude>
            </div>
        `,
    };
}

export default bsCarouselCaption;
