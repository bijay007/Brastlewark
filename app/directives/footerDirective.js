(() => {
    angular
        .module('Brastlewark')
        .directive('myFooter', footerFunc)

    function footerFunc() {
        return {
            restrict: 'AE',
            templateUrl: 'app/templates/footer.html',
            scope: {}
        }
    }
})()