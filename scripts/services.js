angular.module('page.services',[])
	.constant('KEY','d1b7e41bf7da95fa0a01dd9db8aaf089')
	.constant('KEY_WEATHER','db6532bdb5d807e06b9e03c0ef089d41')
    //.constant('LOCAL_POSITION','')
.factory('WeatherAPI', ['$http','$q','KEY','KEY_WEATHER', function($http,$q,KEY,KEY_WEATHER){
	var weatherUrl = 'http://v.juhe.cn/weather/index';
	var weatherUrl2 = 'http://op.juhe.cn/onebox/weather/query';
    var localPosition = 'http://lbs.juhe.cn/api/getaddressbylngb';
	return {
        /*
            通过API获取全国天气预报
         */
		weather1 : function(cityName){
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : weatherUrl,
				params : {
					cityname : cityName,
					key : KEY
				},
				timeout: 8000,
				cache: true
			}).success(function(data){
				console.log(data);
				deferred.resolve(data);
			}).error(function(reason){
				console.log(reason);
				deferred.reject(reason);
			});
			return deferred.promise;
		},
        /*
            通过API获取天气预报
         */
		weather2 : function(cityName){
			var deferred = $q.defer();
			$http({
				method : "GET",
				url : weatherUrl2,
				params : {
					cityname : cityName,
					key : KEY_WEATHER
				},
				timeout: 8000,
				cache: true
			}).success(function(data){
				console.log(data);
				deferred.resolve(data);
			}).error(function(reason){
				console.log(reason);
				deferred.reject(reason);
			});
			return deferred.promise;
		},
        /*
            通过API，用经纬度获取本地位置
         */
        localPosition : function(pos){
            var lat = pos.latitude;
            var long = pos.longitude;
            var deferred = $q.defer();
            $http({
                method : "GET",
                url : localPosition,
                params : {
                    lngx:long,
                    lngy:lat
                },
                timeout: 8000,
                cache: true
            }).success(function(data){
                console.log(data);
                deferred.resolve(data);
            }).error(function(reason){
                console.log(reason);
                deferred.reject(reason);
            });
            return deferred.promise;
        }
	};
}])
.factory('DataSolve',['$http',function($http){
	return {
		weatherSolve : function(object){
			var weatherMessage = {
				"data":{
					"realtime":{
                        "wind":{
                            "windspeed":"",
                            "direct":"",
                            "power":"",
                            "offset":null
                        },
                        "time":"",
                        "weather":{
                            "humidity":"",
                            "img":"",
                            "info":"",
                            "temperature":""
                        },
                        "dataUptime":null,
                        "date":"",
                        "city_code":"",
                        "city_name":"",
                        "week":null,
                        "moon":""
                    },
					"life":{
                        "date":"",
                        "info":{
                            "kongtiao":[
                                "",
                                ""
                            ],
                            "yundong":[
                                "",
                                ""
                            ],
                            "ziwaixian":[
                                "",
                                ""
                            ],
                            "ganmao":[
                                "",
                                ""
                            ],
                            "xiche":[
                                "",
                                ""
                            ],
                            "wuran":[
                                "",
                                ""
                            ],
                            "chuanyi":[
                                "",
                                ""
                            ]
                        }
                    },
					"weather":[
                        {
                            "date":"",
                            "info":{
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "dawn":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "dawn":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "dawn":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "dawn":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        },
                        {
                            "date":"",
                            "info":{
                                "night":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ],
                                "day":[
                                    "",
                                    "",
                                    "",
                                    "",
                                    "",
                                    ""
                                ]
                            },
                            "week":"",
                            "nongli":""
                        }
                    ],
					"pm25":{
                        "key":"",
                        "show_desc":null,
                        "pm25":{
                            "curPm":"",
                            "pm25":"",
                            "pm10":"",
                            "level":null,
                            "quality":"",
                            "des":""
                        },
                        "dateTime":"",
                        "cityName":""
                    },
					"date":null,
					"isForeign":0
				}
			};
            weatherMessage = object.result;
            return weatherMessage;
		}
	}
}])
.factory('WeatherPic',function(){
    return {
        getPic : function(){
            var weatherPic = new Array(54);
            for (var i = 0;i < 53 ;i ++){
                if(i < 10){
                    weatherPic[i] = 'img/d0'+i+'.gif';
                }
                weatherPic[i] = 'img/d'+i+'.gif';
            }
            return weatherPic;
        }
    }
})