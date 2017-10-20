/**
 * Created by lenovo on 2017/10/19.
 */
var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("tab",{
            url:"/tab",
            templateUrl:"./App/View/_tab.html"
        })
        .state("jin",{
            url:"/jin",
            templateUrl:"./App/View/_jin.html"
        });
    $urlRouterProvider.otherwise("/tab");

});
