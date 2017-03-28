(function () {
  angular
    .module('Brastlewark')
    .controller('DetailsController', DetailsController)

  function DetailsController (GnomeFactory) {
    let vm = this
    vm.limit = 20
    vm.query = ''
    GnomeFactory.getAllGnomes()
      .then((data) => {
        data = data.map(gnome => {
          // just so that user knows about it (instead of leaving blank space)
          if (gnome.friends === []) gnome.friends = ['0 Friends']
          return gnome
        })
        vm.gnomeList = data
        return vm.gnomeList
      })
  }
})()
