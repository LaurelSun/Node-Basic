/**
 * Created by Laurel Sun on 25/09/2015.
 */
var async=require('async');
/*
 * ���ζ������е�Ԫ�ؽ����첽����
 * map ����ִ�� ÿһ��Ԫ�ؽ����첽���� ��δ�����쳣�����������ִ�е��첽����᷵�ظ�callback��result �����쳣ʱ�쳣���ռ��λ
 * mapSeries ����ִ�� ÿһ��Ԫ�ؽ����첽���� ��δ�����쳣�����������ִ�е��첽����᷵�ظ�callback��result �����쳣ʱ�쳣ֹͣ����
 *           ֱ�ӷ���callback

*/

var arr=['field1','field2','field3','field4','field5','field6'];

async.map(arr,function(item,callback){
    console.log(item);
    if(item=="field3"){
        callback("error in "+item );
    }
    else {
        callback(null, item);
    }
},function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});

async.mapSeries(arr,function(item,callback){
    console.log(item);
    if(item=="field3"){
        callback("error in "+item );
    }
    else {
        callback(null, item);
    }
},function(err,result){
    if(err){
        console.log(err);
    }
    console.log(result);
});