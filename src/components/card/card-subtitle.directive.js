const DEFAULT_HEADING = 'h6';
const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

export default [
    'bsCardSubtitle',
    () => ({
        restrict: 'EA',
        require: '^bsCard',
        link(scope, element, attrs) {
            // Check if directive used as an attribute
            // and if the element type is a header
            // Otherwise default to h5
            const tagName = element.prop('tagName').toLowerCase();
            if (HEADINGS.has(tagName)) {
                attrs.$addClass(tagName);
            } else {
                attrs.$addClass(DEFAULT_HEADING);
            }
            attrs.$addClass('card-subtitle mb-2 text-muted d-block');
        },
    }),
];
