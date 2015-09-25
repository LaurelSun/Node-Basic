/**
 * Created by Laurel Sun on 25/09/2015.
 */

var async=require('async');

/*
* ���д���ÿһ�������еĺ��� ���β�����Ӱ��
* δ�����쳣ʱ ÿ�������ķ���ֵ��װΪ�����result
* ��ִ�е�ĳ�����������쳣������ת��callback������ִ�к����Ľ������result
*
* */

async.parallel([function(callback){
    console.log("method1"+1);
    callback(null,'method 1 result');
},function(callback){
    console.log('method 2');
    callback(new Error('method 2'))

},function(callback){
    console.log('method 3');
    callback(null,'method 3')

}],function(err,result){
    if(err){
        console.log(err)
    }

    console.log(result)
});