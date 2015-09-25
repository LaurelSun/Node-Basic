/**
 * Created by Laurel Sun on 23/09/2015.
 *
 */
var fs=require('fs');
var domain=require('domain');

exports.readFile=function(path){
    fs.readFile(path,'utf8',function(err,data){
        console.log(data);
    })
}

exports.readFileSync=function(path){
    var data= fs.readFileSync(path,'utf8');
    console.log(data);
}

exports.move=function(oldpath,newpath,callback){

   var readStream= fs.createReadStream()

}


exports.testDomain=function(){
    var d1=domain.createDomain();
    d1.on("error",function(err){
        console.log("domain catch err:"+err);
    });

    d1.run(throw_err2);
    d1.run(throw_err);
}

function throw_err(){
    setTimeout(function(){throw new Error('Err')},1000);
}

function throw_err2(){
    setTimeout(function(){throw new Error('Err2')},2000);
}