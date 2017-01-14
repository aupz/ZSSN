    // configure our routes
    suvivorApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // rota para o main
            .when('/',{
                templateUrl : 'view/main.html',
                controller : 'mainController'
            })

            .when('/survivor', {
                templateUrl : 'view/survivor.html',
                controller  : 'survivorController'
            });

      
        $locationProvider.html5Mode(true);

        //$locationProvider.html5Mode({
        //      enabled: true,
        //      requireBase: false
        //    });
    });