var fs=require('fs');
var util=require('util');
var event=new require('events').EventEmitter; //ͨ���¼��󶨶�������¼���Ӧ����
function SpyDir(path){
    this.path=path;
    this.directories=[];
    util.log("this is log");   //����ʱ�����log
    util.log(util.format("%j",{"a":2})); //��ʽ���ַ���



}

util.inherits(SpyDir,event.EventEmitter);  //ͨ��SpyDir�̳�event.EventEmitter

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
    this.emit("add",path);    //����add����

};


module.exports=SpyDir;