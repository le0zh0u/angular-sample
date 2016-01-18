

var phoneCatControllers = angular.module('phoneCatControllers',[]);

phoneCatControllers.controller('PhoneListCtrl',['$scope','$http',function($scope,$http){
	$http.get('phones/phones.json').success(function(data){
		$scope.phones = data;
	});

	$scope.orderProp = 'age';
}]);

phoneCatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams',function($scope,$routeParams){
	$scope.phoneId = $routeParams.phoneId;
}])