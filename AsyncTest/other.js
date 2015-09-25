/**
 * Created by Laurel Sun on 25/09/2015.
 */

/*
* nextTick 事件完成后立即执行的函数 早于setTimeout() 与setImmediate()
*
* */
var async=require('async');


//async.nextTick(function(){
//    console.log('NEXT TICK');
//})
//setTimeout(function(){
//    console.log('TIME OUT')
//},0)
//setImmediate(function(){
//    console.log('IMMEDIATE')
//})
//console.log('LOG');


/*
*  Reduce 给定一个初始值， 与集合中的每一个元素做运算，最后得到一个值。 从左至右执行
*  当存在异常时会立即中断 直接将error传递给callback 忽略运算结果
* */

//var arr=["field2","field1",'field3']
//async.reduce(arr,'a',function(memo,item,callback){
//    console.log('cur:'+item)
//    if(item=='field1'){
//        callback('field1 error');
//    }
//    else {
//        callback(null, item + memo + '  ')
//    }
//},function(err,result){
//    if(err){
//        console.log(err);
//    }
//    console.log(result);
//});


/*
* apply 通过该函数可以绑定一个函数并传递参数生成一个新的可执行函数
* apply(applyMethod,5)等价于
* function(callback){
*   applyMethod(num,callback)
* }
*
* */
function applyMethod(num,callback){
    callback(null,num);
}
async.series([async.apply(applyMethod,5)],function(err,result){
    if(err){
        console.log(err)
    }
    console.log(result)
});
