/**
 * Created by Laurel Sun on 23/09/2015.
 */


var SpyDir=require('./EventEmitter/SpyDir');

var spy=new SpyDir('C:\\shard');


spy.on("add",function(path){ //ͨ��on����add������������Ӧ  ��Ӧһ��Ҫ���ڴ���ǰ
    console.log("from on")

});


spy.addListener("add",function(path){

    console.log('from listener')
});

//spy.on('error',function(err){
//    console.log(err);
//});



spy.add('C:\\work\\demo');



