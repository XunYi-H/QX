
let obj = JSON.parse($response.body);
obj = {
  "status": 1,
  "payMember": {
    "id": 88888,
    "userId": 9999999,
    "failureTime": 9999914216000,
    "createTime": 1584135815000,
    "payTime": 1584135816000,
    "vip": 1
  }
};
$done({body: JSON.stringify(obj)});
