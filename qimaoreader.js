/*
圈X:

[rewrite_local]

#七猫小说解锁终身会员+去广告
^https:\/\/xiaoshuo.wtzw.com/api/v2/user/my-center(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/qimaoreader.js

[mitm]
hostname = xiaoshuo.wtzw.com,
*/
let obj = JSON.parse($response.body);
obj = {
    data.is_vip: "1"
  };
$done({body: JSON.stringify(obj)});
