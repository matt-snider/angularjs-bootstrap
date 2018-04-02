export default [
    'bsCardText',
    () => ({
        restrict: 'EA',
        require: '^bsCard',
        transclude: true,
        replace: true,
        template: '<p ng-transclude></p>',
        link(scope, element, attrs) {
            attrs.$addClass('card-text');
        },
    }),
];
