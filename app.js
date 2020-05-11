(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject=['$scope'];
	function LunchCheckController ($scope){
		$scope.name="";
		$scope.message="";
		$scope.ispisi=function(){
			
			var razdvoji=$scope.name.split(",");
			for(var item=0; item<razdvoji.length; item++){
				if (razdvoji[item]=="" || razdvoji[item]==" "){
					razdvoji.length--;
				};
			};
			if(razdvoji.length<=3 && razdvoji.length>=1 && razdvoji!=""){
				document.getElementById("poruka").innerHTML="<style>#poruka{color:green;} #lunch-menu{border: 1px solid green;}</style>";
				$scope.message="Enjoy!";
				document.getElementById("poruka").innerHTML+=$scope.message;
			}
				else if(razdvoji.length>3){
					document.getElementById("poruka").innerHTML="<style>#poruka{color:green;} #lunch-menu{border: 1px solid green;}</style>";
					$scope.message="Too much.";
					document.getElementById("poruka").innerHTML+=$scope.message;
				}
			else if (razdvoji==""){
					document.getElementById("poruka").innerHTML="<style>#poruka{color:red;} #lunch-menu{border: 1px solid red;}</style>"
					$scope.message="Please enter data first";
					document.getElementById("poruka").innerHTML+=$scope.message;
				};
			
		};

	};

})();