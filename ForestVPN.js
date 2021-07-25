  
/*
圈X:
#Forest解锁vip

[rewrite_local]
^https:\/\/api.forestvpn.com\/v2\/billing\/features(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/ForestVPN.js
[mitm]
hostname = api.forestvpn.com,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj[0].expiry_date = "2099-01-01T00:00:00.000000Z";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
