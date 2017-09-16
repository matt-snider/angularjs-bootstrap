/**
 * fwdNgModel
 *
 * Useful for passing an NgModelController instance through to
 * a component (e.g. an input). This allows us to use all the usual
 * directives that ngModel uses.
 *
 * General:
 * - ngChange
 * - ngModelOptions
 *
 * Validations:
 * - ngMaxlength/ngMinlength
 * - ngPattern
 * - ngRequired
 */
const data = {
    scope: {
        fwdNgModel: '&',
    },
    link: {
        pre(scope, element, attrs) {
            let ngModelCtrl = scope.fwdNgModel();
            if (!ngModelCtrl) {
                let msg = `fwdNgModel: expected ngModel instance, got ${attrs.fwdNgModel}`;
                throw Exception(msg);
            }
            element.data('$ngModelController', ngModelCtrl);
        },
    },
};

export default
    function fwdNgModel() {
        return data;
    };


