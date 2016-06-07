angular.module('page',['page.controllers','page.services','page.directive','page.filters','ui.router'])

.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
})
//.config(function($httpProvider){
//    $httpProvider.defaults.headers.common['X-Auth'] = 'Access-Control-Allow-Origin';
//})
.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
    // route to show our basic form (/form)
        .state('main', {
            url: '/main',
            views:{
                '':{
                    templateUrl: 'views/tpl/main.html',
                    controller: 'MainController'
                },
                'weather-top@main':{
                    templateUrl:'views/tpl/weather-top.html',
                    controller: 'WeatherTopController'
                },
                'weather-left@main':{
                    templateUrl:'views/tpl/weather-left.html',
                    controller:'WeatherLeftController'
                },
                'weather-content@main':{
                    templateUrl:'views/tpl/weather-content.html',
                    controller:'WeatherContentController'
                }
            }
        });
  $urlRouterProvider.otherwise('/main');
})