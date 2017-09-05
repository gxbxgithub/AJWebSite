/**
* 处理http的get、post请求等
*/
var rest = require('restler');

//get获取远程URL数据
exports.get = function(url, data, callback){
    console.log("&&&&&&&& url:"+url);
    //console.log("&&&&&&&&url_data:%j", data);
    rest.get(url,{timeout: 5000, query:data}).on('complete', function(data, response) {
        //console.log("result_data%j",data);
         callback(null,data);
    }).on('err',function(err){
       console.log("err:%j",err);
        callback("err",null);
    }).on('timeout', function(){
      console.log("timeout:%j",url);
       callback("timeout",null);
    });
}
//get获取远程URL数据
exports.getNew = function(url, data, headers, callback){
    console.log("&&&&&&&& url:"+url);
    //console.log("&&&&&&&&url_data:%j", data);
    rest.get(url,{timeout: 5000, query:data, headers:headers }).on('complete', function(data, response) {
        //console.log("result_data%j",data);
         callback(null,data);
    }).on('err',function(err){
       console.log("err:%j",err);
        callback("err",null);
    }).on('timeout', function(){
      console.log("timeout:%j",url);
       callback("timeout",null);
    });
}
//post获取远程URL数据
exports.post = function(url, data, callback){
    console.log("&&&&&&&& url:"+url);
    //console.log("&&&&&&&&url_data:%j", data);
    rest.post(url,{timeout: 5000, data:data}).on('complete', function(data, response) {
        //console.log("result_data%j",data);
        callback(null,data);
    }).on('err',function(err){
       console.log("err:%j",err);
        callback("err",null);
    }).on('timeout', function(){
      console.log("timeout:%j",url);
       callback("timeout",null);
    });
}