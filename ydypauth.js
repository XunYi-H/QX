/*************************************

[rewrite_local]
https://user-njs.yun.139.com/user/auth/refreshToken url script-request-header https://raw.githubusercontent.com/XunYi-H/QX/refs/heads/main/ydypauth.js

[mitm]
hostname = user-njs.yun.139.com

*************************************/

let headers = $request.headers;
let Authorization = headers['Authorization'];

console.log(Authorization)
$notify("auth值", "", Authorization);

$done();
