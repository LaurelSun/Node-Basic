var async=require('async');
/*
* series  依次执行队列中的每一个函数
* callback格式为(err,result)
* 执行完所有的函数后 callback中的result为函数结果数组
* 当发生异常时 会立即中断函数的执行 直接跳转至callback中
* 并将已执行的结果装载至result数组中
*
* */
async.series([function(callback){
    console.log("method1"+1);
    callback(null,'method 1 result');
},function(callback){
    console.log('method 2');
    callback(new Error('method 2'))

}],function(err,result){
    if(err){
        console.log(err)
    }

    console.log(result)
});