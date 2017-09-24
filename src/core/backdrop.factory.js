import angular from 'angular';


const BACKDROP = '<div class="modal-backdrop fade show"></div>';

function bsBackdrop($document) {
    let active = false;
    let backdrop = angular.element(BACKDROP);
    let body = $document.find('body');
    let events = [];

    return {
        show() {
            if (active) {
                return;
            }
            active = true;
            body.append(backdrop);
        },

        hide() {
            active = false;
            backdrop.detach();
            for (let event of events) {
                backdrop.off(event);
            }
        },

        on(event, fn) {
            events.push(event);
            backdrop.on(event, fn);
        },
    };
}


export default bsBackdrop
