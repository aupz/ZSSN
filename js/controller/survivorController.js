
suvivorApp.controller('survivorController', function SurvivorController($scope,$http) {
    $scope.message = "hi! i'm a survivor";
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWxOE4xuL0E0_6_vzQuAiNOjc_rCqIDJU";
	$scope.qntAgua = 0;
	$scope.qntMed = 0;
	$scope.qntFood = 0;
	$scope.qntAmmo = 0;
	$scope.nome;
	$scope.idade;
	$scope.sexo;
	$scope.latlng = [-16.71775457647648,-49.26544189453125];
  $scope.getpos = function(event){
     $scope.latlng = [event.latLng.lat(), event.latLng.lng()];
  };

	

$scope.Add = function Add(item) {
	if(item == 'water'){
	
	$scope.qntAgua +=1;

	}else if (item == 'food') {
$scope.qntFood+=1
	}else if (item == 'ammo') {
$scope.qntAmmo += 1;
	}else if (item == 'med') {
$scope.qntMed+=1
	};

}

$scope.Remove = function Remove(item) {
	if(item == 'water' && $scope.qntAgua > 0){
	
	$scope.qntAgua -=1;
	}else if (item == 'food' && $scope.qntFood > 0) {
$scope.qntFood-=1
	}else if (item == 'ammo' && $scope.qntAmmo > 0) {
$scope.qntAmmo -= 1;
	}else if (item == 'med' && $scope.qntMed > 0) {
$scope.qntMed-=1
	};

}

$scope.Teste = function Teste(nome,idade,sexo) {

console.log($scope.latlng[0]);
var first = false;
var itens = '';
if($scope.qntAgua>0){
itens+='Water:'+$scope.qntAgua;
first = true;
}

if($scope.qntFood>0){

	if(first){
itens+=';Food:'+$scope.qntFood;
	}else{
		itens+='Food:'+$scope.qntFood;
		first=true;
	}

}

if($scope.qntMed>0){

	if(first){
itens+=';Medication:'+$scope.qntMed;
	}else{
		itens+='Medication:'+$scope.qntMed;
		first=true;
	}

}

if($scope.qntAmmo>0){

	if(first){
itens+=';Ammunition:'+$scope.qntAmmo;
	}else{
		itens+='Ammunition:'+$scope.qntAmmo;
		first=true;
	}

}

 var data = $.param({
                'person[name]': nome,
                'person[age]': idade,
                'person[gender]':sexo,
                'person[lonlat]':'point('+$scope.latlng[0]+','+$scope.latlng[0]+')',
                'items':itens
            
               
            });
 

 
        console.log(data);
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('http://zssn-backend-example.herokuapp.com/api/people.json', data, config).then(function(response) {
        $scope.myData = response.data.records;
        $scope.modalShown = false;
 
        alert("SOBREVIVENTE GRAVE SEU ID COM CUIDADO : "+response.data.id);
        console.log(response.data.id);
    }).catch(function(fallback) {
   alert(fallback.status+" " +fallback.data.name[0]);

  });
          

$scope.Nome = '';
$scope.Idade = '';
$scope.qntAgua = 0;
	$scope.qntMed = 0;
	$scope.qntFood = 0;
	$scope.qntAmmo = 0;
	$scope.Sexo = null;



}

    
});