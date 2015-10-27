# startupGNV

This was the Minimum Viable Product that I created over the course of Startup Gainesville 2015. The goal was to produce a minimalist, user friendly, custom bike store space. The code is quick and dirty but if you'd like to look at the site it might be [here](startupgnv-rthawk990.c9.io) if I haven't taken it down for some reason.

### Sample Code

```
$scope.photoArray = ["banner.jpg", "download.jpg", "family-biking.jpg", "Mountain-Bike-Riding-Lion.jpg", "tandum-water.jpg"];
$scope.imageLeft = "";
$scope.picker = Math.floor(Math.random()*5);
$scope.imageLeft = $scope.photoArray[$scope.picker];
```

This little bit of code just provides a random photo output for the home page. It was a fun little solution to test out some different display possibilities and keep the home page dynamic but simple.
