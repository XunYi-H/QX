/*
圈X:
#全球说解锁vip

[rewrite_local]
^https:\/\/api.talkmate.com\/umvi\/user\/info url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/globalspeak1.js
[mitm]
hostname = api.talkmate.com,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.info.member_info.end_time = 4070880000;
obj.info.member_info.member_type = 1;
obj.info.member_info.money = 5000000;
obj.info.member_info.month_num = 12000;
obj.info.member_info.start_time = 1609430400;
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改