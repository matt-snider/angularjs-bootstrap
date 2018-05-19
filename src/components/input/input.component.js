/**
    * TODO:
    * - ngBlur/ngFocus
    * - ngCut/ngCopy/ngPaste
    * - ngDisabled
    * - ngList
    * - ngReadonly
    */
export default ['bsInput', {
    controller: class {
        constructor() {
            this.inputSizeStyle = '';
        }

        $onInit() {
            // Set input size class (i.e. lg or sm)
            if (this.size && (this.size === 'sm' || this.size === 'lg')) {
                this.inputSizeStyle = `form-control-${this.size}`;
            }

            // Default values
            this.validation = this.validation !== undefined ? this.validation : true;
        }
    },
    bindings: {
        size: '@',
        addon: '@',
        validation: '<',

        /* Standard input props */
        type: '@',
        placeholder: '@',
        ngReadonly: '<',
        plaintext: '<',
        ngDisabled: '<',

        /* Validation */
        min: '<ngMin',
        max: '<ngMax',
        minlength: '<ngMinlength',
        maxlength: '<ngMaxlength',
        pattern: '@ngPattern',
    },
    require: {
        ngModel: 'ngModel',
    },
    transclude: {
        label: '?bsLabel',
        description: '?bsDescription',
        errors: '?bsErrors',
    },
}];
