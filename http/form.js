/**
 * Created by Laurel Sun on 09/10/2015.
 */

var fs=require('fs');
var http=require('http');
var path=require('path');
var url=require('url');

http.createServer(function(req,res,next){

    res.send=function(statusCode,body){
        var args=arguments;
        var chunk='';
        var contentType="";
        if(args.length==2){
            if(typeof args[0]==="number"&& typeof args[1]!="number"){
                statusCode=args[0];
                body=args[1];

            }else if(typeof args[0]!=="number" && typeof args[1]==="number"){

                body=args[0];
                statusCode=args[1];
            }
        }
        else{
            if(typeof args[0]==="number"){
                statusCode=args[0];
            }
            else{
                body=args[args.length-1];
                statusCode=200;
            }

        }

        contentType="text/html";
        switch (typeof  body){
            case "string":
            case"boolean":
            case "number":
                chunk=body;
                break;
            case "object":
                if(Buffer.isBuffer(body) ){
                    chunk=body;
                }else {
                    chunk = JSON.stringify(body);
                }
        }

        //set header

      // res.setHeader("Content-Type",contentType);
        res.statusCode=statusCode;
        res.setHeader("Content-Length",chunk.length);
        res.end(chunk);
    };

    var staticPath=__dirname+'/static';

    this.static=function(reqpath){
    //        path.dirname(reqpath)

        var staticFile= path.normalize( staticPath+'/'+ url.parse(reqpath).pathname);

        fs.stat(staticFile,function(err,stat){
            if(!err) {
                fs.readFile(staticFile, 'utf8', function (err, data) {
                    if (err) {
                        console.log(err)
                    }
                    res.end(data);
                })
            }
            else{
               res.send(404,'can not find '+req.url)
            }



        })





    };

    this.static(req.url);

    //res.send(new Buffer('hello'));

    return false;

    var pathstr=__dirname+'/static'+req.url;
    console.log('req.url:'+req.url);
    console.log(path.parse(req.url));

    console.log('unormalize:'+pathstr+'\\..');
    console.log('normalize:'+path.normalize(pathstr+'\\..'));

    fs.stat(pathstr,function(err,stats){
        if(!err) {
            fs.readFile(pathstr, 'utf8', function (err, data) {
                if (err) {
                    console.log(err)
                }
                res.end(data);
            })
        }
        else{
            console.log('req.url:'+req.url);
        }
    });


}).listen(8016);



