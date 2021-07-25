  
/*
圈X:
#Forest解锁vip
[rewrite_local]
^https:\/\/api.forestvpn.com\/v2\/devices(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/ForestVPN2.js
[mitm]
hostname = api.forestvpn.com,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.last_active_at = "2099-01-01T00:00:00.000000Z";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
