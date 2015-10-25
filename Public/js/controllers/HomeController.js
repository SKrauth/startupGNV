app.controller("HomeController", function($scope){
    $scope.photoArray = ["banner.jpg", "download.jpg", "family-biking.jpg", "Mountain-Bike-Riding-Lion.jpg", "tandum-water.jpg"];
    $scope.imageRight = "";
    $scope.imageLeft = "";
    $scope.logo = "";
    
    $scope.picker = (Math.random()*5).floor();
    console.log($scope.picker);
    $scope.imageLeft = $scope.photoArray[$scope.picker];
    
    $scope.imageRight = function(){
        $scope.picker = (Math.random()*5).floor();
        return $scope.photoArray[$scope.picker];
        
        console.log($scope.photoArray[$scope.picker]);
    };
    
    $scope.logo = "logoGreen.png";
    
    console.log($scope.logo);
}); 