app.controller("BikeController", function($scope){
    $scope.framesImgs = ["Mountain-Bike-Riding-Lion.jpg", "frameOrange.png", "frameGreen.png", "frameYellow.png"];
    $scope.wheelImgs = ["Mountain-Bike-Riding-Lion.jpg", "wheelOrange.png", "wheelGreen.png", "wheelYellow.png"];
    $scope.frameImg = $scope.framesImgs[0];
    $scope.wheelImg = $scope.wheelImgs[0];
    
    $scope.frameOrange = function(){
        $scope.frameImg = $scope.framesImgs[1];
    };
    
    $scope.frameGreen = function(){
        $scope.frameImg = $scope.framesImgs[2];
    };
    
    $scope.frameYellow = function(){
        $scope.frameImg = $scope.framesImgs[3];
    };
    
    
    $scope.wheelOrange = function(){
        $scope.wheelImg = $scope.wheelImgs[1];
    };
    
    $scope.wheelGreen = function(){
        $scope.wheelImg = $scope.wheelImgs[2];
    };
    
    $scope.wheelYellow = function(){
        $scope.wheelImg = $scope.wheelImgs[3];
    };
});