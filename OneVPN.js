/*
圈X:
#OneVPN解锁会员
[rewrite_local]
^https\:\/\/one\.sshub.top\/1\.1\/classes\/UserData(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/OneVPN.js

[mitm]
hostname = one.sshub.top,
*/
var body = $response.body;
var obj = JSON.parse(body);
obj.results[0].payTime.iso = "2099-01-01T00:00:000.000Z";
obj.results[0].isPay = true;
body = JSON.stringify(obj);
$done(body);
//var a = body.replace("\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2021-06-30T07:39:36.993Z\"", "\"payTime\":\{\"__type\":\"Date\",\"iso\":\"2099-06-30T07:39:36.993Z\"");
//var b = str.replace("false","true");
//$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
/*{
  "results": [
    {
      "email": "6nkfhxjwj6@privaterelay.appleid.com",
      "updatedAt": "2021-06-29T07:39:37.007Z",
      "payTime": {
        "__type": "Date",
        "iso": "2099-06-30T07:39:36.993Z"
      },
      "name": "xxx",
      "objectId": "60dace39174cbb36fe5ff3d5",
      "createdAt": "2021-06-29T07:39:37.007Z",
      "author": {
        "__type": "Pointer",
        "className": "_User",
        "objectId": "60dace38174cbb36fe5ff3d4"
      },
      "isPay": true,
      "device": "25A33CD6FF5B4029AD14A437187BFD82",
      "logninTime": {
        "__type": "Date",
        "iso": "2021-06-29T07:39:37.007Z"
      }
    }
  ]
}*/
