/*
圈X:
[rewrite_local]
#探花解锁VIP会员
^https:\/\/1008610010\.laikanshu\.top\/Member\/getUserInfo url script-response-body tanhua.js
[mitm]
hostname = 1008610010.laikanshu.top
探花下载地址
https://tanhua.app
*/
let obj = JSON.parse($response.body);
obj = {
  "status": "200",
  "msg": "返回成功",
  "data": {
    "member_name": "永久VIP",
    "mobile": "18888888888",
    "head_pic": "http://999.junc.vip/uploads/admin/202010/5f9b91e0a6fe0.jpg",
    "parent_id": 206,
    "user_viptime": "2099-09-09",
    "status": 1,
    "is_vip": 1
  }
}
;
$done({body: JSON.stringify(obj)});
