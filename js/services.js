'use strict';

angular.module('acs')

.factory('auth', function() {
    var user = {};
    return {
        user: function() {
            return user;
        }
    };
});
