app.controller("customerloginCtrl",['$scope','$location',function($scope,$location){
		$scope.customerLogin = function(){
			if($scope.username == "" || $scope.username == null){
				alert("Enter your username..!!");
			}
			else if($scope.username !== "customer@resourceadda.in"){
				alert("Enter your valid mail id..!!");
			}
			else if($scope.password == "" || $scope.password == null){
				alert("Enter your password..!!");
			}
			else if($scope.password !== "123456"){
				alert("Enter Valid password.!!")
			}
			else{
				$location.path('/customer');
			}
		}
}]);