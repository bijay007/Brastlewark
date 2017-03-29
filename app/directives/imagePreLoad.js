(function () {
  angular
    .module('Brastlewark')
    // directive that loads small heart-icon when image is preoading
    .directive('glyphiconLoad', [function glyphiconLoad () {
      return {
        restrict: 'A',
        link: function glyphiconLoadLink ($scope, elem, attrs) {
          $scope.$watch('ngSrc', function watchNgSrc () {
            elem.hide()
            elem.after('<i class="glyphicon glyphicon-heart"></i>')  // add pre-icon
          })
          elem.on('load', function onLoad () {
            elem.show()
            elem.next('i.glyphicon-heart').remove() // removes icon
          })
        }
      }
    }])
})()
