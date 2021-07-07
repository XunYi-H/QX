/*
圈X:
#telescope vip

[rewrite_local]
^https:\/\/api-1\.quickg\.cc\/api\/v2\/user url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/telescope.js
[mitm]
hostname = api-1.quickg.cc,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.data.expiredIn = 4070880000;
obj.data.user.cardActive = false;
obj.data.user.paidUser = true;
obj.data.user.totalTransfer = 9999999999;
obj.data.usere.xpiredDate = 2099-01-01;
obj.data.user.timeRemaining = 99999999;
obj.data.user.flowTotal = "3000000GB";
obj.data.user.flowRemaining = "3000000GB";
obj.data.user.status = 0;
obj.data.user.vip = "1";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
