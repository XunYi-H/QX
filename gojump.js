/*
圈X:
#狗急加速
[rewrite_local]
^https\:\/\/ac.gojapp.com\/api\/account\/me\/udid(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/gojump.js
[mitm]
hostname = ac.gojapp.com,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.vip.level = 1;
obj.vip.expire = "2099-01-01T00:00:00";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
