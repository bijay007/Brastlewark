(function () {
  angular
    .module('Brastlewark')
    .factory('GnomeFactory', GnomeFactory)

  function GnomeFactory ($http) {
    let allGnomes = { getAllGnomes }

    function getAllGnomes () {
      const url = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
      return $http.get(url)
        .then(response => response.data.Brastlewark)
          // $rootScope.$broadcast('gnomesFound', allData)
    }
    return allGnomes
  }
})()
