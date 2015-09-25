/**
 * Created by Laurel Sun on 25/09/2015.
 */
var async=require('async');
/*
* waterfall(�ٲ�) ����ִ�������еĺ���
* �ص�������ʽΪ callback(err,result)
* ÿ������ִ�еĽ��������Ϊ��һ�������Ĳ�������
* ���������ΪErrorʱ �������������Ķ���ֱ��ִ��callback ����ĺ��������ᱻ����
* �������鲻֧��json��ʽ ��json���뽫����ִ��
*
* */

async.waterfall([function(callback){
    console.log('method1');

    callback(null,1);
},function(data,callback){

    console.log('last method is '+data);
    callback( new Error('method 1 error'));
}],function(err,data){
    if(err){
        console.log(err);
    }
    console.log('results:'+data);

});

