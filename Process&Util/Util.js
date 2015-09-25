/**
 * Created by Laurel Sun on 24/09/2015.
 */
var util=require('util')
function Shape(){
    this.lineCnt=0;
    this.Name='';
}

Shape.prototype.getInfo=function(){
    var str=util.format('shape %s has %d lines',this.Name,this.lineCnt);
    util.log(str);
}

function Cricle(){}
util.inherits(Cricle,Shape);

var cricle=new Cricle();
cricle.lineCnt=1;
cricle.Name="circle";
cricle.getInfo();

//console.log(util.inspect.colors);//颜色对应区间
//console.log(util.inspect.styles);//采取关键字着色
//console.log(util.inspect(util, { showHidden: true,colors:true,depth:null }));
function deprecateMethod(){
    console.log('deprecateMethod');
}
util.deprecate(deprecateMethod,"this method is deprecate");


deprecateMethod();