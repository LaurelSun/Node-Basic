var fs=require('fs');
var util=require('util');
var event=new require('events').EventEmitter; //通过事件绑定对象添加事件响应函数
function SpyDir(path){
    this.path=path;
    this.directories=[];
    util.log("this is log");   //带有时间戳的log
    util.log(util.format("%j",{"a":2})); //格式化字符串



}

util.inherits(SpyDir,event.EventEmitter);  //通过SpyDir继承event.EventEmitter

SpyDir.prototype.watch=function(path){
    var spy=this;
     path=path?path:spy.path;

    console.log("target:"+path);

    fs.readdir(path,function(err,files){
        if(err)throw err;
        for(var i in files){
            console.log(files[i]);
            spy.directories.push(files[i]);
        }
    });
};

SpyDir.prototype.add=function(path){

    this.emit('error',new Error('123'))
    this.emit("add",path);    //增加add方法

};


module.exports=SpyDir;