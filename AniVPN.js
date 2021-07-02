  
/*
AniVPN unlock vip
QX:
[rewrite local]
^https?:https:\/\/mamftei71za0evcs\.space\/api_account.php(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/AniVPN.js
[mitm]
hostname = mamftei71za0evcs.space
*/
var body = $response.body;
var obj = JSON.parse(body);

obj.message.end_time = 4070880000;

body = JSON.stringify(obj);
$done({body});
