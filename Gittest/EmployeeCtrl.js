angular.module('myapp').controller('enpmloyeeCtrl', ['$scope','$http',function($scope,$http){
		
		var addurl="http://localhost:8080/Webservice_test/Rest/courseService/Addcourses"; 
		var updateurl="http://localhost:8080/Webservice_test/Rest/courseService/Updatecourses"; 
		var deleteurl="http://localhost:8080/Webservice_test/Rest/courseService/delete/"; 

		 $scope.course = {};
		 $scope.editBtn=false;

		    $http.get('http://localhost:8080/Webservice_test/Rest/courseService/courses').
		        then(function(response) {
		            $scope.courses = response.data;
		            });

		        $scope.ajouter = function() 
				  {

						  $http({
						      method: 'POST',
						      url: addurl,
						      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						      transformRequest: function(obj) {
						        var str = [];
						        for(var p in obj)
						        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						        return str.join("&");
						    },
						    data: $scope.course
						    }).success(function (data) 
						      {
						    	$scope.status=data;
						    	 var url="http://localhost:8080/Webservice_test/Rest/courseService/courses"; 
								   $http.get(url).success( function(response) { 
								                           $scope.courses = response; 
								                        }); 
							   
			 })};

			 $scope.editCourse = function(course){

				$scope.course.name=course.name;
				$scope.course.duration=course.duration;
				$scope.course.fee=course.fee;
				$scope.course.id=course.id;
				showBtn();

			};

			$scope.saveEdit = function() 
				  {

						  $http({
						      method: 'PUT',
						      url: updateurl,
						      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
						      transformRequest: function(obj) {
						        var str = [];
						        for(var p in obj)
						        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
						        return str.join("&");
						    },
						    data: {id: $scope.course.id, name: $scope.course.name, duration: $scope.course.duration, fee: $scope.course.fee}
						    }).success(function (data) 
						      {
						    	$scope.status=data;
						    	 var url="http://localhost:8080/Webservice_test/Rest/courseService/courses"; 
								   $http.get(url).success( function(response) { 
								                           $scope.courses = response; 
								                        }); 
						reset();
						hideBtn();

							   
			 })};

			$scope.removeCourse = function(course) 
				  {

						  $http({
						      method: 'DELETE',
						      url: deleteurl+course.id,
						      headers: {'Content-Type': 'application/json'},
						      
						      data: null
						    }).success(function (data) 
						      {
						    	$scope.status=data;
						    	 var url="http://localhost:8080/Webservice_test/Rest/courseService/courses"; 
								   $http.get(url).success( function(response) { 
								                           $scope.courses = response; 
								                       }); 
						

							   
			 })};

			function showBtn(){
				$scope.editBtn=true;
			};

			function hideBtn(){
				$scope.editBtn=false;
			};
        
        	function reset(){
        		$scope.course.name="";
        		$scope.course.duration="";
        		$scope.course.fee="";
        		$scope.course.id="";
        	}
	}]);
