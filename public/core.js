var myTodo = angular.module('myTodo', []);
myTodo.controller('mainController',function($scope, $http){
	
		    $scope.formData = {};
		    $http({ method: 'get', url: '/api/todos' })
				.then(
				 function successCallback(response) { 
					$scope.todos = response.data;
				 },
				 function errorCallback(response) { 
				 console.log('Error: ' + response);
				 }
			);

			$scope.createTodo = function() {

				$http.post('/api/todos', $scope.formData)
				  .then(
					    function successCallback(response) { 
						$scope.formData = {};
							$scope.todos = response.data;
							console.log(response.data);
					    },
						function errorCallback(response) { 
						 	console.log('Error: ' + response);
						}
				   );
			   };


			$scope.deleteTodo = function(id) {
				$http.delete('/api/todos/' + id)
				.then(
					function successCallback(response) { 
						$scope.todos = response.data;
				    },
					function errorCallback(response) { 
					 	console.log('Error: ' + response);
					}
				);
			};
});