/*************************************

[rewrite_local]
https://aas.caiyun.feixin.10086.cn:443/tellin/authTokenRefresh.do url script-request-header https://raw.githubusercontent.com/XunYi-H/QX/refs/heads/main/ydypauth.js

[mitm]
hostname = aas.caiyun.feixin.10086.cn:443

*************************************/

let headers = $request.headers;
let Authorization = headers['Authorization'];

console.log(Authorization)
$notify("auth值", "", Authorization);

$done();
