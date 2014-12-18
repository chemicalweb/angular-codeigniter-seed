'use strict';

angular.module('acs', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    $routeProvider
        .when('/home', {
            controller: 'HomeCtrl',
            controlelrAs: 'home',
            templateUrl: 'partials/home.html'
        })
        .when('/about', {
            controller: 'AboutCtrl',
            controllerAs: 'about',
            templateUrl: 'partials/about.html'
        })
        .when('/login', {
            controller: 'LoginCtrl',
            controllerAs: 'login',
            templateUrl: 'partials/login.html'
        })
        .when('/register', {
            controller: 'RegisterCtrl',
            controllerAs: 'register',
            templateUrl: 'partials/register.html'
        })
        .otherwise({
            redirectTo: '/home'
        });

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // transform the json data in to urlencoded
    var param = function(obj) {
        var query = '',
            name, value, fullSubName, subName, subValue, innerObj, i;

        for (name in obj) {
            value = obj[name];

            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + '[' + subName + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + '&';
                }
            } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
        }

        return query.length ? query.substr(0, query.length - 1) : query;
    };

    $httpProvider.defaults.transformRequest = [function(data) {
        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
    }];

}]);
