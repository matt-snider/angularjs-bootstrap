/**
 * bsIcon
 *
 * Displays Octicons (https://github.com/primer/octicons) with configuration.
 *
 * Specify the icon with the 'symbol' property:
 *   <bs-icon symbol="mark-github"></bs-icon>
 *
 *
 *
 * Additionally supports the following properties:
 * - size (for equal width and height)
 * - width, height separately
 * - aria-label
 * - class
 *
 * Setting class="light" will invert the color
 */
import angular from 'angular';
import octicons from 'octicons';

import './icon.component.css';

const PROPS = [
    'width',
    'height',
    'class',
    'aria-label',
];

export default {
    name: 'bsIcon',
    template($attrs) {
        if (!octicons.hasOwnProperty($attrs.symbol)) {
            throw Exception(`bsIcon: no icon with symbol '${this.symbol}'`);
        }

        // Properties
        let config = {};
        for (let p of PROPS) {
            if (!$attrs.hasOwnProperty(p)) {
                continue;
            }
            config[p] = $attrs[p];
        }
        if ($attrs.hasOwnProperty('size')) {
            config['width'] = $attrs.size;
            config['height'] = $attrs.size;
        }
        return octicons[$attrs.symbol].toSVG(config);
    },
};
