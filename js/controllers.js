'use strict';

angular.module('acs')

.controller('NavigationCtrl', ['$location', 'User', function($location, User) {

    this.user = User;

    this.active = function(path) {
        return path === $location.path();
    };

    this.logout = function() {
        this.user = {};
        $location.path('home');
    };

}])

.controller('LoginCtrl', ['$location', '$http', 'User', function($location, $http, User) {
    var self = this;

    this.input = {};

    this.login = function() {
        $http.post('api/account/login', {
            email: self.input.email,
            password: self.input.password
        }).success(function(data) {
            if (data.status) {
                self.user = User;
                self.user.email = data.email;
                self.user.token = data.token;
                $location.path('home');
            } else {
            }
        });
    };

}])

.controller('RegisterCtrl', ['$location', '$http', function($location, $http) {
    var self = this;

    this.input = {};

    this.register = function() {
        $http.post('api/account/register', {
            email: self.input.email,
            password: self.input.password
        }).success(function(data) {
            if (data.status) {
                $location.path('login');
            } else {
            }
        });
    };

}])

.controller('HomeCtrl', ['$location', '$http', 'User', function($location, $http, User) {
    var self = this;

    this.user = User;

    this.information = function() {
        $http.post('api/account/information', {
            token: self.user.token
        }).success(function(data) {
            if (data.status) {
                alert(data.message);
            } else {
            }
        });
    };

}])


.controller('AboutCtrl', function() {

    this.content = 'This is some content';

});