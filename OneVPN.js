/*
圈X:
#OneVPN
#解锁vip会员
[rewrite_local]
^https?:\/\/one\.sshub\.top\/1\.1\/classes\/UserData(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/OneVPN.js

[mitm]
hostname = one.sshub.top,
*/
var body = $response.body;
//var obj = JSON.parse(body);
//obj.results[0].iso = "2099-06-30T07:39:36.993Z";



var a = str.replace("\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2021-06-30T07:39:36.993Z\"", "\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2099-06-30T07:39:36.993Z\"");
//var b = str.replace("true","true");
$done({body: JSON.stringify(a)});//重新打包回json格式并结束修改
