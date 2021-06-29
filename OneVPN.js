/*
圈X:
#OneVPN
#解锁vip会员
[rewrite_local]
^https:\/\/one.sshub.top\/1.1\/classes/UserData(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/OneVPN.js

[mitm]
hostname = one.sshub.top,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.results.payTime.iso = "2099-06-30T01:01:01.999Z";
obj.results.isPay = true;
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
