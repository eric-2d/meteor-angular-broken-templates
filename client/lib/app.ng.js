angular.module('testAppApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap'
]);

onReady = function() {
  angular.bootstrap(document, ['testAppApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}