function brand($compile) {
    return {
        restrict: 'E',
        require: '^?bsNavbar',
        link(scope, element, attr, bsNavbar) {
            if (!bsNavbar) return;
            let href = attr.href || '#';
            let html = `
                <a href="${href}" class="navbar-brand">
                    ${element.html()}
                </a>
            `;
            element.replaceWith($compile(html)(scope));
        },
    }
}

export default brand;
