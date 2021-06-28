  
/*
圈X:
#七猫小说解锁终身会员+去广告
#去除阅读中的底部中间广告
[rewrite_local]
^https:\/\/api-ks.wtzw.com\/api\/v2\/reader-adv\/index(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/qimaoreader4.js
[mitm]
hostname = api-ks.wtzw.com,
*/
//let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
*/
var body = $response.body;//声明一个body变量并以响应体赋值（json格式）
var body = (body.replace(/.+/g,'123'));
body = JSON.stringify(body);
$done(body); 
//$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
