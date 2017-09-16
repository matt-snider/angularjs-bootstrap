/**
 * bsNavbarItems
 *
 * Transforms navbar items to proper format
 * e.g.
 *  <div bs-navbar-items>
 *      <items>
 *          <item>Link 1</item>
 *          <item>Link 2</item>
 *      </items>
 *  </div>
 *
 * Will become:
 *  <div bs-navbar-items>
 *      <ul class="navbar-nav mr-auto">
 *          <li class="nav-item">
 *              Link 1
 *          </li>
 *          <li class="nav-item">
 *              Link 2
 *          </li>
 *      </ul>
 *  </div>
 *
 * The <items> container also supports the `placement` option which
 * may be either 'left' or 'right'. It defaults to left, and including
 * two <items> elements will result in the first being 'left' and the
 * second as right.
 */
import angular from 'angular';

import {stripIndent} from 'common-tags';

let LEFT_PLACEMENT = 'left';
let RIGHT_PLACEMENT = 'right';

function toLi(node) {
    return stripIndent`
    <li class="nav-item">
        ${node.innerHTML}
    </li>`;
}

function bsNavbarItems($compile) {
    return {
        restrict: 'A',
        link(scope, elem, attrs) {
            // Get <items> nodes and all children.
            // If 'placement' is specified, use it,
            // otherwise default to left
            let items = {
                left: [],
                right: [],
            };
            let containers = elem.find('items');
            for (let i = 0; i < containers.length; i++) {
                let container = angular.element(containers[i]);
                let placement = container.attr('placement');

                // Get the default placement
                // 'left' - default if not already set
                // 'right' - if we've already set left
                if (!placement) {
                    placement = items.left.length === 0
                        ? LEFT_PLACEMENT
                        : RIGHT_PLACEMENT;
                }

                if (placement !== LEFT_PLACEMENT && placement !== RIGHT_PLACEMENT) {
                    throw Error(`bsNavbar: invalid placement '${placement}'`);
                }
                items[placement] = [...container.children()].map(toLi);
            }

            // Create a new node and replace <items>
            let contents = stripIndent`
                <ul class="navbar-nav mr-auto">
                    ${items.left.join('\n')}
                </ul>
                <ul class="navbar-nav ml-auto">
                    ${items.right.join('\n')}
                </ul>`;
            containers.replaceWith($compile(contents)(scope));
        },
    };
};

export default bsNavbarItems;
