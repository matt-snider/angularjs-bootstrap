export default [
    'bsCardText',
    () => ({
        restrict: 'EA',
        require: '^bsCard',
        link(scope, element, attrs) {
            attrs.$addClass('card-text');
            attrs.$addClass('d-block');
        },
    }),
];
