/**
 * Created by Laurel Sun on 09/10/2015.
 */
var path=require('path');

var url=require('url');


var joinpath=path.join('c:\\work','\\mongo','c:\\logs')
//console.log(joinpath)

//console.log(path.parse('c:\\work\\mongo\\logs\\1.log'))
console.log(path.parse('http://127.0.0.1:10005/test/index.html?id:5'))
//console.log(path.basename('localhost/index.aspx?id=5'))
//console.log(path.basename('localhost/index/5'))
//console.log(path.dirname('c:\\work\\mongo\\logs\\1.log'))


console.log(url.parse('http://127.0.0.1:10005/test/index.html?id:5'))
console.log(path.relative('c:\\nodejs\\d','c:\\work'));