  
/*
AniVPN unlock vip
QX:
[rewrite local]
^https?:https:\/\/mamftei71za0evcs\.space\/api_all_init.php url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/AniVPN.js
[mitm]
hostname = mamftei71za0evcs.space
*/
var body = $response.body;
var obj = JSON.parse(body);

obj.message.user.tried_48hours = 0;

body = JSON.stringify(obj);
$done({body});
