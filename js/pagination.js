app.controller('listdata',function($scope, $http){
						//declare an empty array
    $http.get("../json/pagination.json").then(function(response){ 
        $scope.users = response.data;  //ajax request to fetch data into $scope.data
        console.log($scope.users);
    });
    
    $scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
});