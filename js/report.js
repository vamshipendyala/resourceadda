app.controller("report",function($scope){

   $scope.labels = ["UI", "JAVA", "IDM"];
   $scope.data = [300, 200, 100];
   $scope.backgroundColor= ["#0080ff","#ffd24d","#b3b3b3"];

  $scope.Barlabels = ['UI', 'JAVA', 'IDM', '.NET'];
   $scope.Bar = [
      [3, 2, 5, 1]
   ];
   $scope.colors = ["#ff8000","#0040ff","#808080"];
   // $scope.backgroundColor= [];
   $scope.Baroptions = {
      scales: {
         yAxes: [{
            ticks: {
               beginAtZero: true,
                colors :"#fff"
            }
         }]
      }
  }
});
    



