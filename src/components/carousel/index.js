import angular from 'angular';
import ngAnimate from 'angular-animate';


import core from '../../core';
import Carousel from './carousel.component';
import carouselItem from './carousel-item.directive';
import carouselCaption from './carousel-caption.directive';

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
        .directive(carouselItem.name, carouselItem)
        .directive(carouselCaption.name, carouselCaption)
        .name;
