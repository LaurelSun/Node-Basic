/**
 * Created by Laurel Sun on 25/09/2015.
 */
var async=require('async');
/*
* waterfall(瀑布) 依次执行数组中的函数
* 回调函数格式为 callback(err,result)
* 每个函数执行的结果可以作为下一个函数的参数传入
* 当传入参数为Error时 会结束函数数组的队列直接执行callback 处理的函数将不会被保留
* 函数数组不支持json格式 以json传入将不会执行
*
* */

async.waterfall([function(callback){
    console.log('method1');

    callback(null,1);
},function(data,callback){

    console.log('last method is '+data);
    callback( new Error('method 1 error'));
}],function(err,data){
    if(err){
        console.log(err);
    }
    console.log('results:'+data);

});

