let headers = $request.headers;
let member = headers['member'];

console.log(member)
$notify("token值", "", member);

$done();
