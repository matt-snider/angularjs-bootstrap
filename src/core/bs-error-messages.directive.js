/**
 * bsErrorMessages
 *
 * Transforms a set of transcluded errors into ng-messages.
 * e.g.
 *  <div bs-error-messages="myForm.$errors">
 *      <errors>
 *          <maxlength>Value is too long!</maxlength>
 *      </errors>
 *  </div>
 *
 * Will become
 *  <div bs-error-messages>
 *      <div ng-messages="myForm.$errors">
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
        link(scope, elem, attrs) {
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
            root.replaceWith($compile(contents)(scope));
        },
    };
};

export default bsErrorMessages;
