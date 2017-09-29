import angular from 'angular';
import Prism from 'prismjs';

import 'prismjs/themes/prism-solarizedlight.css';
import './code-example.directive.css';

let codeSnippets = new WeakMap();


function codeExample() {
    return {
        link($scope, $element) {
            let codeElem = $element.find('code');
            let snippet = codeSnippets.get($element);
            let highlighted = Prism.highlight(snippet, Prism.languages.html);
            codeElem.html(highlighted);
        },
        template($element) {
            let rawContents = $element.html();
            codeSnippets.set($element, processContents(rawContents));
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
