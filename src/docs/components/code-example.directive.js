import angular from 'angular';

import './code-example.directive.css';

let codeSnippets = new WeakMap();


function codeExample() {
    return {
        link($scope, $element) {
            let code = $element.find('code');
            code.text(codeSnippets.get(this));
        },
        template($element) {
            let rawContents = $element.html();
            codeSnippets.set(this, processContents(rawContents));
            return `
                <div class="example">
                    ${$element.html()}
                </div>
                <div class="example-code">
                    <pre>
                        <code></code>
                    </pre>
                </div>
            `;
        },
    };
}

function processContents(html) {
    return html
        .split('\n')
        .map(x => x.trim())
        .join('\n');

}

export default codeExample;
