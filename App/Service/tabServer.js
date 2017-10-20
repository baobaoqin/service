/**
 * Created by lenovo on 2017/10/19.
 */
app.factory("tabServer",["ajaxServer",function(ajaxServer){
    var factory={
        gettab:function(){
            var url="./Data/data.json";
            return ajaxServer.ajax("get",url);
        }
    };
    return factory;
}]);