import angular from 'angular';

/**
 * Creates a directive that will replace it's parent.
 *
 * This is useful for situations where we provide this interface:
 * <bs-some-component>
 *    <bs-some-label> Label </bs-some-label>
 *    <bs-some-content>
 *      <bs-some-inner-component>
 *              <!-- ...etc -->
 *      </bs-some-inner-component>
 *    </bs-some-content>
 * </bs-some-component>
 *
 * And really want to end up with (likely using transclude):
 * <bs-some-component>
 *    <a ...> Label </a>
 *    <ul ...>
 *      <bs-some-inner-component></bs-some-inner-component>
 *    </ul>
 *
 * @param {*} name
 * @param {*} wrapWith
 * @param {*} copyAttributes
 */
export function createReplaceDirective(name, wrapWith, copyAttributes = false) {

    function template(tElement, tAttr) {
        let elem = angular.element(wrapWith);
        elem.append(tElement.html());
        if (copyAttributes) {
            elem.attr(tAttr.$attrs);
        }
        return elem[0].outerHTML;
    }

    // This is needed if we don't wrap the element since
    // replace
    function compile(tElement, tAttr) {
        return ($scope, $element) => {
            if ($element.children().length) {
                $element.replaceWith($element.children());
            } else {
                $element.replaceWith($element.html());
            }
        };
    }

    let implementation;
    if (wrapWith) {
        implementation = { template };
    } else {
        implementation = { compile };
    }

    // Merge the implementation and additional props to
    // get our directive configuration.
    // Name the function so that we can use it with our
    // standard .directive(fn.name, fn) pattern
    let directive =
        Object.assign({
            restrict: 'E',
            replace: true,
        }, implementation);
    let directiveFn = () => directive;
    Object.defineProperty(directiveFn, "name", {value: name});

    return directiveFn;
}
