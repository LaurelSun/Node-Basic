/**
 * Created by Laurel Sun on 23/09/2015.
 */


var SpyDir=require('./EventEmitter/SpyDir');

var spy=new SpyDir('C:\\shard');


spy.on("add",function(path){ //通过on监听add方法并发出响应  响应一定要绑定在触发前
    console.log("from on")

});


spy.addListener("add",function(path){

    console.log('from listener')
});

//spy.on('error',function(err){
//    console.log(err);
//});



spy.add('C:\\work\\demo');



