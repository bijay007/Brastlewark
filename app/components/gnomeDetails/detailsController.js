(function () {
  angular
    .module('Brastlewark')
    .controller('DetailsController', DetailsController)
    .filter('startFrom', () => (data, start) => data.slice(parseInt(start)))

  function DetailsController (GnomeFactory, $log) {
    let vm = this
    vm.query = ''
    vm.currentPage = 1
    vm.maxBtnVal = 7
    vm.limit = 15

    GnomeFactory.getAllGnomes()
        .then((data) => {
          data = data.map(gnome => {
            // just so that user knows about it (instead of leaving blank space)
            if (gnome.friends === []) gnome.friends = ['0 Friends']
            return gnome
          })
          vm.gnomeList = data
          vm.totalItems = vm.gnomeList.length
          vm.numPages = Math.round(vm.totalItems / vm.limit)
          return vm.gnomeList
        })
  }
})()
