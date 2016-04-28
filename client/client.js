var app=angular.module('heroApp', []);

app.controller("HeroController", ['$scope', '$http', function($scope, $http){
  var vm=this;
  vm.hero={};
  vm.heroes=[];
  vm.options=['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Regeneration', 'Power Blast', 'Animal Friends'];
  //call all database entries and append to DOM//

  var getHeroes=function(){
    return $http.get('/heroes').then(function(response){
      if(response.status !==200){
        throw new Error('Failed to get heroes');
      }
      vm.hero={};
      vm.heroes=response.data;
      return response.data;
    });
  };
  vm.add=function(){
    return $http.post('/heroes', vm.hero).then(getHeroes());

  };
  getHeroes();
}]);
