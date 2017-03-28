angular.module('Brastlewark')
.config(['$stateProvider', '$urlRouterProvider', statesManager])

function statesManager ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {templateUrl: '/app/mainPage.html'},
        'filters@home': {
          templateUrl: '/app/components/filters/filters.html',
          controller: 'FiltersController',
          controllerAs: 'vm'
        },
        'details@home': {
          templateUrl: '/app/components/gnomeDetails/details.html',
          controller: 'DetailsController',
          controllerAs: 'vm'
        }
      }
    })
}
