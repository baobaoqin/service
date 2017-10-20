/**
 * Created by lenovo on 2017/10/19.
 */
app.directive("tabs",function(){
    return {
        restrict:"EACM",
        templateUrl:"./App/View/temp/tab.html",
        controller:"tabController",
        link:function(){
            $(".tab a").on("click",function(){
                $(this).addClass("on").siblings().removeClass("on");
            });

        }
    }
});