export default {
    name: 'componentReference',
    template: `
        <h3> &lt;{{ ::$ctrl.name }}&gt; </h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody ng-transclude>
            </tbody>
        </table>
    `,
    bindings: {
        name: '@',
    },
    transclude: true,
};
