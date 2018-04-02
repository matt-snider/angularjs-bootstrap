export default [
    'bsCardLink',
    () => ({
        restrict: 'EA',
        require: '^bsCard',
        template: '<a ng-transclude></a>',
        transclude: true,
        replace: true,
        link(scope, element, attrs) {
            if (!attrs.ngHref && !attrs.href) {
                attrs.$set('href', '#');
            }
            attrs.$addClass('card-link d-inline');
        },
    }),
];
