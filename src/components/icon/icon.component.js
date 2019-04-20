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
import octicons from 'octicons';

import './icon.component.css';

const PROPS = [
    'width',
    'height',
    'fill',
    'class',
    'aria-label',
];

export default ['bsIcon', {
    template($attrs) {
        'ngInject';

        if (!octicons.hasOwnProperty($attrs.symbol)) {
            throw Error(`bsIcon: no icon with symbol '${this.symbol}'`);
        }

        // Properties -- default width and height to 18
        let config = { width: 20, height: 20 };
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
}];
