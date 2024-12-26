/*************************************

[rewrite_local]
https://m.aihoge.com/api/memberhy/h5/js/signature url script-request-header https://raw.githubusercontent.com/XunYi-H/QX/refs/heads/main/dachaotoken.js

[mitm]
hostname = m.aihoge.com

*************************************/

let headers = $request.headers;
let member = headers['member'];

console.log(member)
$notify("token值", "", member);

$done();
