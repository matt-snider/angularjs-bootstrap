/**
 * bsFwdNgModel
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
function bsFwdNgModel() {
    return {
        restrict: 'A',
        scope: {
            bsFwdNgModel: '&',
        },
        link: {
            pre(scope, element, attrs) {
                let ngModelCtrl = scope.bsFwdNgModel();
                if (!ngModelCtrl) {
                    let msg = `bsFwdNgModel: expected ngModel instance, got ${attrs.bsFwdNgModel}`;
                    throw Exception(msg);
                }
                element.data('$ngModelController', ngModelCtrl);
            },
        },
    };
}

export default bsFwdNgModel;
