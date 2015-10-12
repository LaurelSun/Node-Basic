/**
 * Created by Laurel Sun on 12/10/2015.
 */

var mongodb=require('mongodb');
var objectId=mongodb.ObjectID;
var mongoClient=mongodb.MongoClient;
var url='mongodb://127.0.0.1:27017/test';
var connectDb=null;
var server=mongodb.Server;
var Db=mongodb.Db;


//ues MongoClient Connect mongodb
mongoClient.connect(url,function(err,db){
    connectDb=db;
    insert();

});



function insert(callback){
    var collection=connectDb.collection('test');
    console.log(111)
    collection.insertOne({name:"user13",price:5,newPrice:15,
        createDate:'2015-10-12 10:35'},{safe:true},function(err,result){
        console.log(222)
            console.log(err);

            console.log(result);
    })


}

function update()
{
    var collection=connectDb.collection('test');
    collection.updateOne({_id:new objectId('5618d2848c02f4f0cad4fef4')},{'$set':{name:"updateuser"}},
        {safe:true},function(err,result){
        console.log(err);
        console.log(result);

    })

}

