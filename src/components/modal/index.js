import angular from 'angular';

import core from '../../core';
import Modal from './modal.component';
import ModalAction from './modal-action.component';
import ModalService from './modal.service';


export default
    angular.module('bootstrap.modal', [])
        .component(Modal.name, Modal)
        .component(ModalAction.name, ModalAction)
        .service(ModalService.name, ModalService)
        .name;
