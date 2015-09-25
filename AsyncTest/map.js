/**
 * Created by Laurel Sun on 25/09/2015.
 */
var async=require('async');
/*
 * 依次对数组中的元素进行异步操作
 * map 并行执行 每一个元素进行异步操作 在未发生异常请情况下所有执行的异步结果会返回给callback的result 存在异常时异常结果占空位
 * mapSeries 串行执行 每一个元素进行异步操作 在未发生异常请情况下所有执行的异步结果会返回给callback的result 存在异常时异常停止后续
 *           直接返回callback

*/

var arr=['field1','field2','field3','field4','field5','field6'];

async.map(arr,function(item,callback){
    console.log(item);
    if(item=="field3"){
        callback("error in "+item );
    }
    else {
        callback(null, item);
    }
},function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});

async.mapSeries(arr,function(item,callback){
    console.log(item);
    if(item=="field3"){
        callback("error in "+item );
    }
    else {
        callback(null, item);
    }
},function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});