var app = angular.module("myApp", []);
	app.controller("myCtrl", function($scope) {
		$scope.orders = [];
		$scope.cart = [];
		$scope.enableSend = false;
		$scope.isOrderSubmitted = false;
		var count = 0;

		$scope.phonePattern = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;

		$scope.addItems = function() {

			var orderItem = $scope.orderItem;
			isOrderItemDup = false;
			count++;
			
			if($scope.isOrderSubmitted)
			{
				$scope.success = false;
				$scope.orders = [];
			}

			angular.forEach($scope.orders, function(order) {
				if (order.orderItem == orderItem)
					isOrderItemDup = true;
			})

			if (!isOrderItemDup) {
				$scope.orders.push({
					id : count,
					orderItem : orderItem,
					orderQuantity : 1,
					remove : false
				});
			$scope.enableSend = true;
			}
		}

		$scope.updateQuantity = function() {

			var orderQuantity = $scope.orderQuantity;
			var orderItem = $scope.orderItem;

			var oldOrders = $scope.orders;
			$scope.orders = [];

			angular.forEach(oldOrders, function(order) {
				order.orderQuantity = orderQuantity;
				$scope.orders.push(order);

			});
		}

		$scope.removeItems = function(id) {

			var oldOrders = $scope.orders;
			$scope.orders = [];

			angular.forEach(oldOrders, function(order) {
				if (order.id!=id)
					$scope.orders.push(order);

			});

			if ($scope.orders.length == 0)
				$scope.enableSend = false;
		}

		$scope.submitOrder = function() {
			$scope.success = true;
			$scope.enableSend = false;
			$scope.isOrderSubmitted = true;
		}

		$scope.cancelOrder = function() {
			$scope.success = false;
			$scope.orders = [];
		}
	});