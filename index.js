var app=angular.module("myApp",[]);
    app.controller("myCont",function($scope){
        $scope.CTC
        $scope.takehome = 0
        $scope.ret=false
        $scope.add1="Type of Deduction"    
        $scope.add2="Type of Deduction"
        $scope.pfemp=0    
        $scope.pfempr=0  
        $scope.pftax=0
        $scope.insu=0
        $scope.additionalValue1=0
        $scope.additionalValue2=0
        $scope.reset= function(){
            $scope.ret=false;
            $scope.add1="Type of Deduction"    
            $scope.add2="Type of Deduction"
            $scope.pfemp=0    
            $scope.pfempr=0  
            $scope.pftax=0
            $scope.insu=0
            $scope.additionalValue1=0
            $scope.additionalValue2=0
            $scope.CTC = undefined
        }
        $scope.submit= function(){
            var integer = $scope.pfemp + $scope.pfempr + $scope.pftax + $scope.insu + $scope.additionalValue1 + $scope.additionalValue2
            $scope.takehome = $scope.CTC -integer
            $scope.ret= true
        }
        $scope.ctcchange = function(){
            $scope.ret= false
        }

    })
