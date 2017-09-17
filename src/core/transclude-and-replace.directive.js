/**
 * bsTranscludeAndReplace
 *
 * Similar to ngTransclude except that it does not retain the
 * root node.
 *
 * This directive will transfer and merge certain properties
 * from the transcluded content's root to the target of the
 * transclusion:
 *  - href
 *  - class
 */
import angular from 'angular';

const TRANSFERRED_PROPS = [
    'href',
];

const MERGED_PROPS = [
    'class',
];

function bsTranscludeAndReplace($compile) {
    return {
        restrict: 'A',
        priority: 0,
        link($scope, $element, $attrs, $controller, $transclude) {
            let slot = $attrs.bsTranscludeAndReplace;

            $transclude((clone, scope) => {
                // If this is a text only element, we need wrap & recompile
                let elem = clone.children();
                if (!clone.children().length && clone.html().length) {
                    elem = $compile(`<span>${clone.html()}</span>`)(scope);
                }

                // Transfer properties from clone -> elem
                for(let prop of TRANSFERRED_PROPS) {
                    if (clone.attr(prop)) {
                        $element.attr(prop, clone.attr(prop));
                    }
                }
                for(let prop of MERGED_PROPS) {
                    if (clone.attr(prop)) {
                        let currValue = $element.attr(prop) || '';
                        $element.attr(prop, `${currValue} ${clone.attr(prop)}`);
                    }
                }

                $element.append(elem);
            }, null, slot);
        },
    }
}

export default bsTranscludeAndReplace;
