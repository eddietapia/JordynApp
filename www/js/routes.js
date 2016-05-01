angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.ingredients', {
    url: '/ingredients',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingredients.html',
        controller: 'ingredientsCtrl'
      }
    }
  })

  .state('menu.statusOfIngredients', {
    url: '/status',
    views: {
      'side-menu21': {
        templateUrl: 'templates/statusOfIngredients.html',
        controller: 'statusOfIngredientsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu21': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.signOut', {
    url: '/signout',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signOut.html',
        controller: 'signOutCtrl'
      }
    }
  })

  .state('menu.gettingStarted', {
    url: '/gettingstarted',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gettingStarted.html',
        controller: 'gettingStartedCtrl'
      }
    }
  })

  .state('menu.addingIngredient', {
    url: '/addingingredient',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addingIngredient.html',
        controller: 'addingIngredientCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});