'use strict'

angular.module('testAppApp')
.config(function($stateProvider, $angularTemplatesSettings) {
    $angularTemplatesSettings.error = false;

  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
});
