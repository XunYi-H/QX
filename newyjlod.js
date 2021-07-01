  
 /*
圈X:
#新一键连
[rewrite_local]
^https:\/\/ac\.centaur\.cloud\/api\/accounts\/me(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/newyjl.js
[mitm]
hostname = ac.centaur.cloud,
*/
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj[0].pay_at = "2021-07-01T21:16:00.000000";
obj[0].repaid = 1;
obj[0].status = PAID;
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
