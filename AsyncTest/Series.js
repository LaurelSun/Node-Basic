var async=require('async');
/*
* series  ����ִ�ж����е�ÿһ������
* callback��ʽΪ(err,result)
* ִ�������еĺ����� callback�е�resultΪ�����������
* �������쳣ʱ �������жϺ�����ִ�� ֱ����ת��callback��
* ������ִ�еĽ��װ����result������
*
* */
async.series([function(callback){
    console.log("method1"+1);
    callback(null,'method 1 result');
},function(callback){
    console.log('method 2');
    callback(new Error('method 2'))

}],function(err,result){
    if(err){
        console.log(err)
    }

    console.log(result)
});