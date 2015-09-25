/**
 * Created by Laurel Sun on 24/09/2015.
 */


function throw_Err() {
    throw new Error('new error');
}

function getArgv(){
    var args=process.argv;
    console.log('args....')
    args.forEach(function(item){
        console.log(item);
    })
}

function changeDir(){
    process.chdir('../');
}

process.on('uncaughtException',function(err){
    console.log("uncaugthException:"+err);
    process.exit();
});


