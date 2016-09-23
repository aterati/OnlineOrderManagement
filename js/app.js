var app= angular.module("myApp",[]);

angular.controller("myController",function($scope){
	$scope.add = function(){
		$scope.order=$scope.order-item;
	};
	
});
