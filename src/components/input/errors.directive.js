import angular from 'angular';
import {stripIndent} from 'common-tags';


/* @ngInject */
function bsErrors($compile) {

    return {
        restrict: 'E',
        require: '^?bsInput',
        link(scope, element, attr, bsInput) {
            if (!bsInput) return;

            let errors = element.children();
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
            // Create a *probably* unique identifier and add
            // it to the <errors> scope
            let $errors = `bsInputErrors${scope.$id}`;
            scope[$errors] = bsInput.ngModel.$error;

            let newNode = $compile(`
                <div ng-messages="${$errors}">
                    ${ngMessages.join('\n')}
                </div>
            `)(scope);
            element.replaceWith(newNode);
        },
    }
}

export default bsErrors;
