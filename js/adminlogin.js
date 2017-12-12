app.controller("adminloginCtrl",['$scope','$location',function($scope,$location){
		$scope.customerLogin = function(){
			if($scope.username1 == "" || $scope.username1 == null){
				alert("Enter your username..!!");
			}
			else if($scope.username1 !== "admin@resourceadda.in"){
				alert("Enter your valid mail id..!!");
			}
			else if($scope.password1 == "" || $scope.password1 == null){
				alert("Enter your password..!!");
			}
			else if($scope.password1 !== "123456"){
				alert("Enter valid password.!!")
			}
			else{
				$location.path('/admin_dashboard');
			}
		}
}]);