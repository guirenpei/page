angular.module('page.controllers',[])
    .controller('MainController',function ($scope,WeatherAPI,DataSolve,WeatherPic) {
        init();
	    function init(){
            iontData();
            getLocalAddress();
            $scope.weatherPic = WeatherPic.getPic();
        }
        function iontData(){
            $scope.pos = [];
            $scope.cityPos = [];
            $scope.cityName = '';
            $scope.weatherMessage = [];
            $scope.today = [];
            $scope.life = [];
            $scope.weather = [];
            $scope.pm25 = [];
            $scope.weatherPic = new Array(54);
            $scope.date = null;
            $scope.isForeign = null;
        }
        $scope.searchWeather = function(cityName){
            $scope.cityName = cityName;
            WeatherAPI.weather2($scope.cityName).then(function(result){
                console.log(result.result.data);
                $scope.weatherMessage = DataSolve.weatherSolve(result);
                $scope.today = $scope.weatherMessage.data.realtime;
                $scope.life = $scope.weatherMessage.data.life;
                $scope.weather = $scope.weatherMessage.data.life;
                $scope.pm25 = $scope.weatherMessage.data.pm25;
                $scope.date = $scope.weatherMessage.data.date;
                $scope.isForeign = $scope.weatherMessage.isForeign;
                console.log('message');
                console.log($scope.weatherMessage);
            });
        }

        function getTodayWeather(local){
            console.log('local');
            console.log(local);
            WeatherAPI.weather2(local).then(function(result){
                $scope.weatherMessage = DataSolve.weatherSolve(result);
                $scope.today = $scope.weatherMessage.data.realtime;
                $scope.life = $scope.weatherMessage.data.life;
                $scope.weather = $scope.weatherMessage.data.life;
                $scope.pm25 = $scope.weatherMessage.data.pm25;
                $scope.date = $scope.weatherMessage.data.date;
                $scope.isForeign = $scope.weatherMessage.isForeign;
                console.log('local-message');
                console.log($scope.weatherMessage);
            });
        }

        function getLocalAddress(){
            navigator.geolocation.getCurrentPosition(
                function(position){
                    $scope.pos = position.coords;
                    WeatherAPI.localPosition($scope.pos).then(function(address){
                        $scope.cityPos = address.row.result.addressComponent;
                        getTodayWeather($scope.cityPos.city);
                    });
                },
                function(error){
                    var errorTypes={1:"位置服务被拒绝", 2:"获取不到位置信息", 3:"获取位置信息超时"};
                    console.log( errorTypes[error.code] +":,不能确定当前地理位置");
                }
            );
        }
})
    .controller('WeatherTopController',function($scope,WeatherAPI,DataSolve){
        //$scope.cityName = '';
        //$scope.weatherMessage = [];
        //$scope.today = [];
        //$scope.life = [];
        //$scope.weather = [];
        //$scope.pm25 = [];
        //$scope.date = null;
        //$scope.isForeign = null;
        //$scope.searchWeather = function(cityName){
        //    $scope.cityName = cityName;
        //    WeatherAPI.weather2($scope.cityName).then(function(result){
        //        console.log(result.result.data);
        //        $scope.weatherMessage = DataSolve.weatherSolve(result);
        //        $scope.today = $scope.weatherMessage.data.realtime;
        //        $scope.life = $scope.weatherMessage.data.life;
        //        $scope.weather = $scope.weatherMessage.data.life;
        //        $scope.pm25 = $scope.weatherMessage.data.pm25;
        //        $scope.date = $scope.weatherMessage.data.date;
        //        $scope.isForeign = $scope.weatherMessage.isForeign;
        //        console.log('message');
        //        console.log($scope.weatherMessage);
        //    });
        //}
    })
    .controller('WeatherLeftController',function($scope){

    })
    .controller('WeatherContentController',function($scope){

    })

