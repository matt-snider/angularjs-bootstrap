function item($compile) {
    return {
        name: 'item',
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

            // Add ng-click so that when we click an item
            // the dropdown closes if it's open
            // element.attr('ng-click', '$')
            element.on('click', () => {
                bsNavbarCtrl.itemClicked()
                scope.$apply();
            });
        }
    };
}

export default item;