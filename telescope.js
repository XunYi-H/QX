/*
圈X:
#telescope vip

[rewrite_local]
^https:\/\/api-1\.quickg\.cc\/api\/v2\/user url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/telescope.js
[mitm]
hostname = api-1.quickg.cc,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理

obj.data.paidUser = true;
obj.data.totalTransfer = 999999999999;
obj.data.expiredDate = 2099-01-01;
obj.data.timeRemaining = 99999999;
obj.data.flowTotal = "30000000.0GB";
obj.data.flowRemaining = "30000000.0GB";
obj.data.status = 0;
obj.data.vip = 1;
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
