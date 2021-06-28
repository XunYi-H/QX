  
/*
圈X:
#七猫小说解锁终身会员+去广告
#去除阅读中的底部中间广告
[rewrite_local]
^https:\/\/api-ks.wtzw.com\/api\/v2\/reader-adv\/index(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/qimaoreader4.js
[mitm]
hostname = api-ks.wtzw.com,
*/
var body = $response.body;//获取响应消息体JSON
var str = JSON.stringify(body);//将JSON转化成字符串
var a = str.replace(/.+/g, "test");
body = JSON.stringify(a);
$done(body);
