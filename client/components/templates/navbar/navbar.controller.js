'use strict';

angular.module('tdpharmaClientApp')
  .controller('NavbarCtrl', NavbarCtrl);

NavbarCtrl.$inject = ['$scope', '$location', '$translate', 'amMoment', 'pharmacare', 'Auth'];

function NavbarCtrl($scope, $location, $translate, amMoment, pharmacare, Auth) {

  var ctrl = this;
  ctrl.menu = [{
    title: 'HOME',
    link: ['/']
  }, {
    title: 'INVENTORY',
    link: ['/inventory']
  }, {
    title: 'ORDERS',
    link: ['/purchases', '/sales', '/adjustments']
  }, {
    title: 'CHECKOUT',
    link: ['/checkoutv2']
  }];
  ctrl.isCollapsed = true;
  ctrl.locale = pharmacare.getLocale();
  ctrl.isLoggedIn = Auth.isLoggedIn;
  ctrl.isActive = isActive;
  ctrl.isAdmin = Auth.isAdmin;
  ctrl.getCurrentUser = Auth.getCurrentUser;
  ctrl.logout = logout;
  ctrl.pharmacare = pharmacare;
  
  init();

  function init() {
    $scope.$watch('locale', pharmacare.updateLocale);
  }

  function logout() {
    Auth.logout();
    $location.path('/login');
  }

  function isActive(link) {
    return _.contains(link, $location.path());    
  }

  // function isActive(route) {
  //   return route === $location.path();
  // }
}