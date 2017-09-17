function dropdownItem($compile) {
    return {
        restrict: 'E',
        require: '^?bsDropdown',
        link(scope, element, attr, bsDropdown) {
            if (!bsDropdown) return;

            if (attr.href && !element.find('a').length) {
                element.attr('href', null);
                let link = $compile(`
                    <a href="${attr.href}" class="dropdown-item">
                        ${element.html()}
                    </a>
                `)(scope);
                element.empty().append(link);
            }
            element.addClass('dropdown-item');
        },
    };
}

export default dropdownItem;
