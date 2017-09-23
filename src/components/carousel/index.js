import angular from 'angular';

import core from '../../core';
import Carousel from './carousel.component';
import CarouselItem from './carousel-item.component';


export default
    angular.module('bootstrap.carousel', [core])
        .component(Carousel.name, Carousel)
        .directive(CarouselItem.name, CarouselItem)
        .name;
