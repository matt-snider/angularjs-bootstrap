/**
 * bsErrorMessages
 *
 * Transforms a set of transcluded errors into ng-messages.
 * e.g.
 *  <div bs-error-messages>
 *      <errors>
 *          <maxlength>Value is too long!</maxlength>
 *      </errors>
 *  </div>
 *
 * Will become
 *  <div bs-error-messages>
 *      <div ng-messages="maxlength">
 *          <div ng-message="maxlength">Value is too long!</div>
 *      </div>
 *  </div>
 *
 */
import angular from 'angular';

import {stripIndent} from 'common-tags';


function bsErrorMessages($compile) {
    return {
        restrict: 'A',
        // compile(tElem, tAttrs) {
        //     console.log(tElem, tAttrs)
        //     console.log('errors', tElem.find('errors'));
        //     return () => {};
        // },
        link(scope, elem, attrs) {
            // var html ='<div ng-repeat="item in items">I should not be red</div>';
            // var e = $compile(html)($scope);
            // $element.replaceWith(e);

            // Get the errors and build ng-message nodes
            let root = elem.find('errors');
            let errors = root.children();
            let ngMessages = [];
            for(let i = 0; i < errors.length; i++) {
                let node = errors[i];
                ngMessages.push(
                    stripIndent`
                    <div ng-message="${node.tagName.toLowerCase()}">
                        ${node.innerHTML}
                    </div>`
                );
            }

            // Create a new node and replace <errors>
            let errorExpr = attrs.bsErrorMessages;
            let contents = stripIndent`
                <div ng-messages="${errorExpr}">
                    ${ngMessages.join('\n')}
                </div>`;
            errors.replaceWith($compile(contents)(scope));
        },
    };
};

export default bsErrorMessages;
