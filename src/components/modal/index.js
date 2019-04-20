import angular from 'angular';

import Modal from './modal.component.js';
import ModalAction from './modal-action.component';
import ModalService from './modal.service';

export default angular
    .module('bootstrap.modal', [])
    .component(...Modal)
    .component(...ModalAction)
    .service(...ModalService)
    .name;
