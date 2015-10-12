/**
 * Created by Laurel Sun on 12/10/2015.
 */
var moment=require('moment');
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var validator=function(val){
    return moment(val).isValid();
};

var testSchema=new Schema({
    name:{type:String,required:true},   //增加验证器
    price:{type:Number,min:1},
    order:[],
    newPrice:{type:Number,max:100},
    createDate:{type:String,required:true,validate:[validator,'not a real date']}
},{versionKey:false});
//versionKey 是否启用版本锁 默认启用__v字段
//验证器 reqired必填 min最小 max最大 enum枚举范围 match 根据正则进行匹配 validate 自定义验证 default 默认值

//为Schema添加自定义方法 作用于entity
testSchema.methods.getDetail=function(){
    console.log(this);
};
//为Schema添加静态方法 作用于Model
testSchema.statics.getUser=function(name,callback){
    this.find({name:name},function(err,data){
        if(typeof (callback)=="function"){
            callback(err,data);
        }
    })
};

//虚拟属性 不会保存至数据库
testSchema.virtual("createTime").get(function(){
    return moment(this.createDate).format('HH:mm:ss');
});


var db=mongoose.createConnection("mongodb://127.0.0.1:27017/test");

//根据schema绑定model
var testModel=db.model('test',testSchema);

var doc={name:"preSave",price:20,createDate:"2015-10-12 17:00"};

//创建entity
var testObj=new testModel(doc);

//保存entity使用save model使用create
//console.log(testObj.validateSync().toString()) //对验证器进行验证结果 当校验通过时 validateSync返回undefined

//对存在验证器的entity进行save时 如果校验未通过 错误信息在error对象中
//testObj.save(function(err){
//    console.log(err)
//});



//实例方法
//testObj.getDetail();

//静态方法  作用于model上
//testModel.getUser("mongooseUser",function(err,data){
//    console.log('static method');
//    console.log(data.length)
//});

//model提供与数据库交互
//testModel.find({name:{$regex:"^u"}},function(err,data){
//   console.log(data[0].createTime);  //SCHEMA定义的虚拟属性
//});

//update 不返回结果
//testModel.update({__v:0},{$set:{name:"setUser"}},{multi:true},function(err,data){
//    console.log(err);
//    console.log(data);
//})

//更新返回修改前的对象
//testModel.findOneAndUpdate({name:"setUser"},{price:30},function(err,data){
//    console.log('findOneAdnUpdate '+data);
//})


//查询 直接查询(具有callback)
//testModel.find()
//链式查询 不带callback时返回quey对象 最后通过exec(callback)执行 条件通过api进行限制
// console.log(testModel.find('name','setUser').select( {name:1,price:1,_id:0}).limit(3).exec(function(err,data){
//     console.log(data)
// }));
//

/*
中间件 查询中间件与文档中间件
类似于aop在操作前后进行一些处理(pre之前 post之后)

文档中间件 支持init validate save（不适用于update findOneUpdate） remove
查询中间件 支持count find findOne update findOneAndUpdate
pre操作之前执行支持串行与并行两种方式对中间件的调用
串行:中间件通过next()依次调用执行 如果不调用next将无法进行后续的处理
     当在next方法中传递err时 err会指向hock回到事件的err;
并行：
post操作之后执行 不进行流程控制 没有next方法 使用事件监听触发

this在中间件中的作用范围
  在文档中间件中this表示要更新的文档
  在查询中间件中this表示查询对象而不是要更新的对象
*/

//save 之前第一个中间件
//testSchema.pre('save',function(next){
//    console.log(arguments);
//    console.log("this"+this);
//    next();
//});
//save前第二个中间件
//testSchema.pre('save',function(next){
//    console.log('second middleware');
//    next();
//
//});
//save后执行中间件 this指向save的对象
//testSchema.post('save',function(doc){
//    console.log(this===doc);//true
//    console.log('done');
//});

var preObj=new testModel({name:"secondMiddleware",price:20,createDate:'2015-10-12 17:03'})

//preObj.save(function(err){
//    console.log(err)
//});


testSchema.pre('find', function() {
    console.log(this instanceof mongoose.Query); // true
    this.start = Date.now();
});

testSchema.post('find',function(doc){
    console.log(this===doc);
});

testModel.find({name:"preSave"},function(){
    console.log('done')
})