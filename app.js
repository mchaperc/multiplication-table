var myApp = angular.module('myApp', []);

myApp.controller('MultiplicationController', function($attrs) {
	var self = this;

	self.numberLimit = $attrs.initialNumberLimit || 10;

        self.numbers = function() {
            var numbers = [];
            for(var i=0; i<self.numberLimit; i++) {
                numbers[i] = i + 1;
            };
            return numbers;
        };

    self.compute = function(a,b) {
        return a * b;
    };
})