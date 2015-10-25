app.controller("BikeController", function($scope){
    $scope.frameImg = "Mountain-Bike-Riding-Lion.jpg";
    $scope.wheelImg = "Mountain-Bike-Riding-Lion.jpg";
    
    $scope.frameOrange = function(){
        $scope.frameImg = "frameOrange.png"
    };
    
    $scope.frameGreen = function(){
        $scope.frameImg = "frameGreen.png"
    };
    
    $scope.frameYellow = function(){
        $scope.frameImg = "frameYellow.png"
    };
    
    
    $scope.wheelOrange = function(){
        $scope.wheelImg = "wheelOrange.png"
    };
    
    $scope.wheelGreen = function(){
        $scope.wheelImg = "wheelGreen.png"
    };
    
    $scope.wheelYellow = function(){
        $scope.wheelImg = "wheelYellow.png"
    };
});