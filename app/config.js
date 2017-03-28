angular.module('Brastlewark')
.config(['$stateProvider', '$urlRouterProvider', statesManager])

function statesManager ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {templateUrl: '/app/mainPage.html'},
        'details@home': {
          templateUrl: '/app/components/gnomeDetails/details.html',
          controller: 'DetailsController',
          controllerAs: 'vm'
        }
      }
    })
}
