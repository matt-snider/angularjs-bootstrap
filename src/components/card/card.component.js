export default ['bsCard', {
    bindings: {},
    transclude: true,
    template: `
        <div class="card">
            <div class="card-body" ng-transclude>
            </div>
        </div>
    `,
}];
