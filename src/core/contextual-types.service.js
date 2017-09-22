export const TYPES = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];

const AS_SET = new Set(TYPES);


class bsContextualTypes {
    values() {
        return TYPES;
    }

    validate(value) {
        return AS_SET.has(value);
    }

    validateOrThrow(value, sourceComponent) {
        if(this.validate(value)) {
            return;
        }
        sourceComponent = sourceComponent || 'bsAngular';
        throw Error(
            `${sourceComponent}: invalid type provided '${value}'. `
            `Valid types are: ${TYPES}`
        );
    }
}

export default bsContextualTypes;
