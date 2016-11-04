var routerApp = angular.module("routerApp", ["ngAnimate", "ui.router" ]);

routerApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");

    // HOME STATES AND NESTED VIEWS==============
  $stateProvider
    .state("home", {
      url: "/home",
      templateUrl: "partial-home.html"
    })
    .state("about",{

    });
}])
