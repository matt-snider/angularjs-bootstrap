import angular from 'angular';


function bsDropdownItem($compile) {
    return {
        restrict: 'E',
        replace: true,
        template(tElement, tAttr) {
            let elem = angular.element(
                '<a href="#" class="dropdown-item"></a>'
            );
            elem.append(tElement.html());
            elem.attr(tAttr.$attrs);
            console.log('bsdropdownitme', elem[0].outerHTML);
            return elem[0].outerHTML;
        },
    }
}

export default bsDropdownItem;
