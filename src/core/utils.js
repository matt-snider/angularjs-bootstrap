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
 * @param {*} name the name the directive should have (simply sets name property)
 * @param {*} wrapWith a string to use as a wrapper around whatever content is transcluded
 *            OR a template function that should return a wrapper when passed tElement & tAttrs.
 * @param {*} copyAttributes
 */
export function createReplaceDirective(name, wrapWith, copyAttributes = false) {

    // If wrapWith is not passed, we have a simple compile directive that
    // replaces the $element with it's children or html contents.
    // Otherwise, we need to dynamically create a template based on wrapWith,
    // insert the $elements html contents, and then copy the attributes.
    let implementation;
    if (!wrapWith) {
        implementation = {
            compile(tElement, tAttr) {
                return ($scope, $element) => {
                    if ($element.children().length) {
                        $element.replaceWith($element.children());
                    } else {
                        $element.replaceWith($element.html());
                    }
                };
            },
        };
    } else {
        implementation = {
            template(tElement, tAttrs) {
                let wrapper = wrapWith;
                if (typeof wrapWith === 'function') {
                    wrapper = wrapWith(tElement, tAttrs);
                }
                let elem = angular.element(wrapper);
                elem.append(tElement.html());
                if (copyAttributes) {
                    for (let prop of Object.keys(tAttrs.$attr)) {
                        elem.attr(prop, tAttrs[prop]);
                    }
                }
                return elem[0].outerHTML;
            },
        };
    }

    // Merge the implementation and additional props to
    // get our directive configuration.
    let directive =
        Object.assign({
            restrict: 'E',
            replace: true,
        }, implementation);
    return createDirectiveFn(name, directive);
}


// Name the function so that we can use it with our
// standard .directive(fn.name, fn) pattern
export function createDirectiveFn(name, config) {
    let directiveFn = () => config;
    Object.defineProperty(directiveFn, "name", {value: name});
    return directiveFn;
}
