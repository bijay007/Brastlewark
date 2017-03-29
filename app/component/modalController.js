angular
    .module('Brastlewark')
    .controller('ModalController', ModalController)

function ModalController ($scope, $uibModalInstance, $log, gnomeData, index) {
  $scope.gnomeInfo = gnomeData.map(gnome => {
    // just so that user knows about it (instead of leaving blank space)
    if (gnome.friends.length === 0) gnome.friends = ['No Friends 😞']
    return gnome
  })
  $scope.index = index
  $scope.ok = function () {
  // when ok, sends data (nothing in this case) back to controller that triggered the modal instance to open
    $uibModalInstance.close($scope)
  }
  $scope.cancel = () => { $uibModalInstance.dismiss('cancel') }
}
