import angular from 'angular';
import ngAnimate from 'angular-animate';


import core from '../../core';
import Carousel from './carousel.component';
import CarouselItem from './carousel-item.component';

// Main css styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';


export default
    angular.module('bootstrap.carousel', [
            ngAnimate,
            core,
        ])
        .component(Carousel.name, Carousel)
        .directive(CarouselItem.name, CarouselItem)
        .name;
