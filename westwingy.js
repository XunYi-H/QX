/*
圈X:
#westwingy

[rewrite_local]
^https:\/\/xbsj9855.xyz\/user\/account\/get-info url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/westwingy.js

[mitm]
hostname = xbsj9855.xyz,
*/

let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.data.flow_cycle_left_text = "无限制";
obj.data.vip_level_node = "YEAR";
obj.data.is_guest = 1;
obj.data.vip_time_text = "无限制";
obj.data.email_verified = 1;
obj.data.iap_subscribe_type = "YEAR";
obj.data.vip_time = "3153600000";
obj.data.flow_cycle_total = "5368709121000";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
