angular
    .module('Brastlewark')
    .controller('ModalController', ModalController)

function ModalController ($scope, $uibModalInstance, $log, gnomeData) {
  $scope.gnomeInfo = gnomeData.map(gnome => {
    // just so that user knows about it (instead of leaving blank space)
    if (gnome.friends === []) gnome.friends = ['0 Friends']
    return gnome
  })
  console.log($scope.gnomeInfo)
  $scope.ok = function () {
  // when ok, sends data (nothing in this case) back to controller that triggered the modal instance to open
    $uibModalInstance.close($scope)
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}
