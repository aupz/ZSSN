
suvivorApp.controller('survivorController', function PhoneListController($scope,$http) {
    $scope.message = "hi! i'm a survivor";

    $http.get('http://zssn-backend-example.herokuapp.com/api/people.json').
    then(function(response) {
        $scope.survivors = response.data;
    }, function(err) {
        console.log(err);
    });
});