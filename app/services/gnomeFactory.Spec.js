// testing the factory service
describe('gnomeFactory', () => {
  let GnomeFactory, scope
  beforeEach(angular.mock.module('Brastlewark'))

  beforeEach(inject(function (_$rootScope_, _GnomeFactory_) {
    scope = _$rootScope_.$new()
    GnomeFactory = _GnomeFactory_
  }))
  it('should exist', function () {
    expect(GnomeFactory).toBeDefined() // gnomeFactory is undefined in test, was unable to workaround it
  })
  describe('.getAllGnomes()', function () {
    it('should exist', function () {
      expect(GnomeFactory.getAllGnomes()).toBeDefined()
    })
  })

// testing the DetailsController (checking that it receives the json correctly)

  describe('Testing my Controller', function () {
    let vm, ctrl, httpBackend, rootScope

    beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
      rootScope = $rootScope
      vm = $rootScope.$new()
      ctrl = $controller('DetailsController', {$scope: vm})
      httpBackend = $httpBackend
    }))

    afterEach(function () {
      httpBackend.verifyNoOutstandingExpectation()
      httpBackend.verifyNoOutstandingRequest()
    })

    it('should initialize the title in the scope', function () {
      expect(vm.title).toBeDefined()
      expect(vm.title).toBe('Testing my Controller')
    })

    it('should contain string typed by the user', function () {
      expect(vm.query).toBeUndefined()
      expect(vm.query.length).toBe(0)

      vm.query = 'Bijay'

      expect(vm.query.length).toBe(5)
    })

    it('should have an array of objects in gnomelist', function () {
      vm.gnomeList = [
        {
          name: 'Haha',
          age: 23
        },
        {
          name: 'Wawa',
          weight: 58.5
        }
      ]

      expect(vm.gnomelist.length).toBe(2)
      expect(vm.gnomelist instanceof Array).toBeTruthy()
      expect(vm.gnomelist[0]).toEqual(jasmine.any(Object))
      expect(Object.keys(vm.gnomelist[0])).toContain('id')
    })
  })

// checking the custom filter service I made for pagination in angular-ui-bootstrap

  describe('Testing AngularJS Filter', function () {
    it('should return only 15 elements', inject(function ($filter) {
      let gnomes = $filter('startFrom')
      let sliced = gnomes()

      expect(sliced.length).toBe(15)
      expect(sliced[0] instanceof Array).toBeTruthy()
    }))
  })
})
