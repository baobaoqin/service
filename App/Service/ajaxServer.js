/**
 * Created by lenovo on 2017/10/19.
 */
app.factory("ajaxServer",function($http,$q){
    var factory={
        ajax:function(type,url,data){
            var defer=$q.defer();
            $http({
                url:url,
                method:type,
                data:data||null
            }).then(function(res){
                return defer.resolve(res);
            },function(err){
                return defer.reject(err);
            });
            return defer.promise;
        }
    };
    return factory;
});