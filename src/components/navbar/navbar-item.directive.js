import angular from 'angular';


function bsNavbarItem($compile) {
    return {
        require: '^?bsNavbar',
        link(scope, element, attr, bsNavbarCtrl) {
            if (!bsNavbarCtrl) return;

            if (attr.href && !element.find('a').length) {
                element.attr('href', null);
                let link = $compile(`
                    <a href="${attr.href}" class="nav-link">
                        ${element.html()}
                    </a>
                `)(scope);
                element.empty().append(link);
            }
            element.addClass('nav-item');

            // Check if this contains a dropdown
            let containsDropdown = element.find('bs-dropdown').length;
            if (containsDropdown) {
                element.addClass('dropdown')
            }

            // Upon clicking a navbar item, notify the navbar controller.
            // If this item contains a dropdown, only fire this event
            // when a dropdown item is clicked, *not* when we are simply
            // toggling the open/close state of the dropdown.
            element.on('click', (event) => {
                let clicked = angular.element(event.target);
                if (containsDropdown && !clicked.hasClass('dropdown-item')) {
                    return;
                }
                bsNavbarCtrl.itemClicked()
                scope.$apply();
            });
        }
    };
}

export default bsNavbarItem;
