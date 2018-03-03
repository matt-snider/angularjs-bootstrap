export default function configRoutes($routeProvider) {
    'ngInject';

    $routeProvider
        .when('/', {
            template: '<getting-started></getting-started>',
        })
        .when('/alert', {
            template: '<alert-demo></alert-demo>',
        })
        .when('/badge', {
            template: '<badge-demo></badge-demo>',
        })
        .when('/carousel', {
            template: '<carousel-demo></carousel-demo>',
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
        .when('/modal', {
            template: '<modal-demo></modal-demo>',
        })
        .when('/navbar', {
            template: '<navbar-demo></navbar-demo>',
        });
}
