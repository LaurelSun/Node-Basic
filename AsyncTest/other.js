/**
 * Created by Laurel Sun on 25/09/2015.
 */

/*
* nextTick �¼���ɺ�����ִ�еĺ��� ����setTimeout() ��setImmediate()
*
* */
var async=require('async');


//async.nextTick(function(){
//    console.log('NEXT TICK');
//})
//setTimeout(function(){
//    console.log('TIME OUT')
//},0)
//setImmediate(function(){
//    console.log('IMMEDIATE')
//})
//console.log('LOG');


/*
*  Reduce ����һ����ʼֵ�� �뼯���е�ÿһ��Ԫ�������㣬���õ�һ��ֵ�� ��������ִ��
*  �������쳣ʱ�������ж� ֱ�ӽ�error���ݸ�callback ����������
* */

//var arr=["field2","field1",'field3']
//async.reduce(arr,'a',function(memo,item,callback){
//    console.log('cur:'+item)
//    if(item=='field1'){
//        callback('field1 error');
//    }
//    else {
//        callback(null, item + memo + '  ')
//    }
//},function(err,result){
//    if(err){
//        console.log(err);
//    }
//    console.log(result);
//});


/*
* apply ͨ���ú������԰�һ�����������ݲ�������һ���µĿ�ִ�к���
* apply(applyMethod,5)�ȼ���
* function(callback){
*   applyMethod(num,callback)
* }
*
* */
function applyMethod(num,callback){
    callback(null,num);
}
async.series([async.apply(applyMethod,5)],function(err,result){
    if(err){
        console.log(err)
    }
    console.log(result)
});
