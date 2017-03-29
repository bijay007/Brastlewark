(function () {
  angular
    .module('Brastlewark')
    .controller('DetailsController', DetailsController)
    .filter('startFrom', () => (list, start) => {
      if (!list) list = []
      return list.slice(+start)
    })

  function DetailsController (GnomeFactory, $log, $uibModal) {
    let vm = this
    vm.query = ''
    vm.currentPage = 1
    vm.maxBtnVal = 7
    vm.limit = 15

    GnomeFactory.getAllGnomes()
        .then((data) => {
          vm.gnomeList = data.data.Brastlewark
          vm.totalItems = vm.gnomeList.length
          vm.numPages = Math.round(vm.totalItems / vm.limit)
          return vm.gnomeList
        })

    // opening modal window to trigger model instance controller to act
    vm.showModal = (index) => {
      $log.log(`Button with index ${index} was clicked !!`)
      let configModal = {
        animation: true,
        templateUrl: 'myModal.html',
        size: 'sm',
        controller: 'ModalController',
        resolve: {
          index: index,
          gnomeData: () => vm.gnomeList
        }
      }
      let modalInstance = $uibModal.open(configModal)
      modalInstance.result.then(console.log, console.log) // when data received, execute these
    }
  }
})()
