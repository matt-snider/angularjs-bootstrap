function componentProperty() {
    return {
        restrict: 'E',
        template(tElement, tAttrs) {
            return `
                <tr>
                    <td>${tAttrs.name}</td>
                    <td>${tAttrs.type}</td>
                    <td>${tAttrs.default}</td>
                    <td ng-transclude></td>
                </tr>
            `;
        },
        binding: {
            name: '@',
            type: '@',
            default: '@',
        },
        transclude: true,
        replace: true,
    };
}

export default ['componentProperty', componentProperty];
