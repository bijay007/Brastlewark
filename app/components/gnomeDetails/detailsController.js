(function () {
  angular
    .module('Brastlewark')
    .controller('DetailsController', DetailsController)

  function DetailsController (GnomeFactory) {
    let vm = this
    vm.limit = 50
    GnomeFactory.getAllGnomes()
      .then((data) => { vm.gnomeList = data })

        // data = data.map(gnome => {
        //   if (gnome.friends === []) gnome.friends = ['No friends -_-']
        //   return gnome
        // })
        // we do this to filter fields we are intersted in. To get all fields just do, vm.gnomeList = data
        // vm.gnomeList = [data.name, data.image, data.age, data.professions, data.friends, data.hair_color]
  }
})()
