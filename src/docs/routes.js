export default function configRoutes($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<getting-started></getting-started>',
        })
        .when('/dropdown', {
            template: '<dropdown-demo></dropdown-demo>',
        })
        .when('/icon', {
            template: '<icon-demo></icon-demo>',
        })
        .when('/input', {
            template: '<input-demo></input-demo>',
        })
        .when('/navbar', {
            template: '<navbar-demo></navbar-demo>',
        });
}
