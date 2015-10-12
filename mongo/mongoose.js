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
    name:{type:String,required:true},   //������֤��
    price:{type:Number,min:1},
    order:[],
    newPrice:{type:Number,max:100},
    createDate:{type:String,required:true,validate:[validator,'not a real date']}
},{versionKey:false});
//versionKey �Ƿ����ð汾�� Ĭ������__v�ֶ�
//��֤�� reqired���� min��С max��� enumö�ٷ�Χ match �����������ƥ�� validate �Զ�����֤ default Ĭ��ֵ

//ΪSchema����Զ��巽�� ������entity
testSchema.methods.getDetail=function(){
    console.log(this);
};
//ΪSchema��Ӿ�̬���� ������Model
testSchema.statics.getUser=function(name,callback){
    this.find({name:name},function(err,data){
        if(typeof (callback)=="function"){
            callback(err,data);
        }
    })
};

//�������� ���ᱣ�������ݿ�
testSchema.virtual("createTime").get(function(){
    return moment(this.createDate).format('HH:mm:ss');
});


var db=mongoose.createConnection("mongodb://127.0.0.1:27017/test");

//����schema��model
var testModel=db.model('test',testSchema);

var doc={name:"preSave",price:20,createDate:"2015-10-12 17:00"};

//����entity
var testObj=new testModel(doc);

//����entityʹ��save modelʹ��create
//console.log(testObj.validateSync().toString()) //����֤��������֤��� ��У��ͨ��ʱ validateSync����undefined

//�Դ�����֤����entity����saveʱ ���У��δͨ�� ������Ϣ��error������
//testObj.save(function(err){
//    console.log(err)
//});



//ʵ������
//testObj.getDetail();

//��̬����  ������model��
//testModel.getUser("mongooseUser",function(err,data){
//    console.log('static method');
//    console.log(data.length)
//});

//model�ṩ�����ݿ⽻��
//testModel.find({name:{$regex:"^u"}},function(err,data){
//   console.log(data[0].createTime);  //SCHEMA�������������
//});

//update �����ؽ��
//testModel.update({__v:0},{$set:{name:"setUser"}},{multi:true},function(err,data){
//    console.log(err);
//    console.log(data);
//})

//���·����޸�ǰ�Ķ���
//testModel.findOneAndUpdate({name:"setUser"},{price:30},function(err,data){
//    console.log('findOneAdnUpdate '+data);
//})


//��ѯ ֱ�Ӳ�ѯ(����callback)
//testModel.find()
//��ʽ��ѯ ����callbackʱ����quey���� ���ͨ��exec(callback)ִ�� ����ͨ��api��������
// console.log(testModel.find('name','setUser').select( {name:1,price:1,_id:0}).limit(3).exec(function(err,data){
//     console.log(data)
// }));
//

/*
�м�� ��ѯ�м�����ĵ��м��
������aop�ڲ���ǰ�����һЩ����(pre֮ǰ post֮��)

�ĵ��м�� ֧��init validate save����������update findOneUpdate�� remove
��ѯ�м�� ֧��count find findOne update findOneAndUpdate
pre����֮ǰִ��֧�ִ����벢�����ַ�ʽ���м���ĵ���
����:�м��ͨ��next()���ε���ִ�� ���������next���޷����к����Ĵ���
     ����next�����д���errʱ err��ָ��hock�ص��¼���err;
���У�
post����֮��ִ�� ���������̿��� û��next���� ʹ���¼���������

this���м���е����÷�Χ
  ���ĵ��м����this��ʾҪ���µ��ĵ�
  �ڲ�ѯ�м����this��ʾ��ѯ���������Ҫ���µĶ���
*/

//save ֮ǰ��һ���м��
//testSchema.pre('save',function(next){
//    console.log(arguments);
//    console.log("this"+this);
//    next();
//});
//saveǰ�ڶ����м��
//testSchema.pre('save',function(next){
//    console.log('second middleware');
//    next();
//
//});
//save��ִ���м�� thisָ��save�Ķ���
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