export default function configRoutes($stateProvider, $urlRouterProvider) {
    'ngInject';

    const gettingStarted = {
        name: 'gettingStarted',
        url: '/',
        component: 'gettingStarted',
    };

    const alertDemo = {
        name: 'alertDemo',
        url: '/alert',
        component: 'alertDemo',
    };

    const badgeDemo = {
        name: 'badgeDemo',
        url: '/badge',
        component: 'badgeDemo',
    };

    const cardDemo = {
        name: 'cardDemo',
        url: '/card',
        component: 'cardDemo',
    };

    const carouselDemo = {
        name: 'carouselDemo',
        url: '/carousel',
        component: 'carouselDemo',
    };

    const dropdownDemo = {
        name: 'dropdownDemo',
        url: '/dropdown',
        component: 'dropdownDemo',
    };

    const iconDemo = {
        name: 'iconDemo',
        url: '/icon',
        component: 'iconDemo',
    };

    const inputDemo = {
        name: 'inputDemo',
        url: '/input',
        component: 'inputDemo',
    };

    const modalDemo = {
        name: 'modalDemo',
        url: '/modal',
        component: 'modalDemo',
    };

    const navbarDemo = {
        name: 'navbarDemo',
        url: '/navbar',
        component: 'navbarDemo',
    };

    $stateProvider.state(gettingStarted);
    $stateProvider.state(alertDemo);
    $stateProvider.state(badgeDemo);
    $stateProvider.state(cardDemo);
    $stateProvider.state(carouselDemo);
    $stateProvider.state(dropdownDemo);
    $stateProvider.state(iconDemo);
    $stateProvider.state(inputDemo);
    $stateProvider.state(modalDemo);
    $stateProvider.state(navbarDemo);
    $urlRouterProvider.otherwise('/');
}
