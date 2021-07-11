/*
圈X:
#PrimeVPN解锁VIP
[rewrite_local]
^https:\/\/api.supreme-vpn.com\/software_api\/v1\/apple\/apple-init url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/PrimeVPN.js
[mitm]
hostname = api.supreme-vpn.com,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.data.isActive = true;
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
