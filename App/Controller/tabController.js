/**
 * Created by lenovo on 2017/10/19.
 */
app.controller("tabController",["$scope","tabServer",function($scope,tabServer){
    tabServer.gettab().then(function(res){
       $scope.num=4;
        $scope.datas=res.data.slice(0,$scope.num);
        $scope.change=function(){
            $scope.num+=4;
            $scope.datas=res.data.slice(0,$scope.num);
        }

    })
}]);