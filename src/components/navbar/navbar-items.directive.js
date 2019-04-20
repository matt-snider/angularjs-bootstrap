let LEFT_PLACEMENT = 'left';
let RIGHT_PLACEMENT = 'right';
let CLASSES = {
    [LEFT_PLACEMENT]: 'mr-auto',
    [RIGHT_PLACEMENT]: 'ml-auto',
};


function bsNavbarItems() {
    return {
        restrict: 'E',
        require: '^?bsNavbar',
        link(scope, element, attr, bsNavbar) {
            if (!bsNavbar) return;
            bsNavbar._hasPlacement = bsNavbar._hasPlacement
                ? bsNavbar._hasPlacement
                : {};

            // Get the placement or fallback to a value
            // 'left' - default if not already set
            // 'right' - if we've already set left
            let placement = attr.placement;
            if (!placement) {
                placement = !bsNavbar._hasPlacement[LEFT_PLACEMENT]
                    ? LEFT_PLACEMENT
                    : RIGHT_PLACEMENT;
            }
            if (placement !== LEFT_PLACEMENT && placement !== RIGHT_PLACEMENT) {
                throw Error(`bsNavbar: invalid placement '${placement}'`);
            }

            // Mark the bsNavbar as having this placement
            bsNavbar._hasPlacement[placement] = true;

            // Modify class to work like a ul
            element.addClass(`navbar-nav ${CLASSES[placement]}`);
        },
    };
}

export default ['bsNavbarItems', bsNavbarItems];
