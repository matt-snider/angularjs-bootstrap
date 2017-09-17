import {stripIndent} from 'common-tags';

const LIGHT = 'light';
const DARK = 'dark';
const CONFIG = {};

function setLightColor(color) {
    CONFIG[LIGHT] = color;
}

function setDarkColor(color) {
    CONFIG[DARK] = color;
}

function css(type) {
    if (!CONFIG[type]) {
        return '';
    }
    let opposite = type === LIGHT ? DARK : LIGHT;
    return stripIndent`
        .bg-${opposite} bs-icon svg {
            fill: ${CONFIG[type]};
            fill-opacity: 0.5;
        }
    `;
}

/**
 * bsIconConfigProvider
 *
 * Allows setting colors in config phase.
 */
const provider = {
    name: 'bsIconConfig',

    // Provider methods
    setDarkColor,
    setLightColor,

    // Return service
    // Inject with no style to get initial node
    $get(bsCssInjector) {
        let styleNode = bsCssInjector.inject();
        let service = new BsIconService(styleNode, bsCssInjector);
        if (LIGHT in CONFIG || DARK in CONFIG) {
            service.__reload();
        }
        return service;
    },
}


/**
 * Service implementation
 *
 * Allows updating global icon configuration at runtime.
 */
class BsIconService {
    constructor(styleNode, bsCssInjector) {
        this.styleNode = styleNode;
        this.cssInjector = bsCssInjector;
    }

    setLightColor(color) {
        CONFIG[DARK] = color;
        this.__reload();
    }

    setDarkColor(color) {
        CONFIG[DARK] = color;
        this.__reload();
    }

    __reload() {
        this.cssInjector.update(
            this.styleNode,
            `${css(LIGHT)}\n\n${css(DARK)}`,
        );
    }
}

export default provider;
