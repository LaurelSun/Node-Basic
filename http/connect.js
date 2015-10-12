/**
 * Created by Laurel Sun on 09/10/2015.
 */
var path=require('path');
var http=require('http');
var fs=require('fs');

module.export=Connect;
function Connect(){
    this.server=null;
}
Connect.prototype.static=function(path){
    fs.stat(path,function(err,data){

    })
};
Connect.prototype.listen=function(port){
    this.server=http.createServer(this);
    this.server.listen(port);
};
