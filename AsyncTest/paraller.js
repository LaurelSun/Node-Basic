/**
 * Created by Laurel Sun on 25/09/2015.
 */

var async=require('async');

/*
* 并行处理每一个数组中的函数 依次不会有影响
* 未发生异常时 每个函数的返回值封装为数组的result
* 当执行到某个函数发生异常立即跳转至callback并将已执行函数的结果返回result
*
* */

async.parallel([function(callback){
    console.log("method1"+1);
    callback(null,'method 1 result');
},function(callback){
    console.log('method 2');
    callback(new Error('method 2'))

},function(callback){
    console.log('method 3');
    callback(null,'method 3')

}],function(err,result){
    if(err){
        console.log(err)
    }

    console.log(result)
});