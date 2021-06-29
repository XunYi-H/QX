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
var str = JSON.stringify(body);
var a = str.replace("\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2021-06-30T07:39:36.993Z\"", "\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2099-06-30T07:39:36.993Z\"");
var b = a.replace("false","true");
$done({body: JSON.stringify(b)});//重新打包回json格式并结束修改
