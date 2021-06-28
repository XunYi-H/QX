  
/*
圈X:
#七猫小说解锁终身会员+去广告
#去除阅读中的底部中间广告
[rewrite_local]
^https:\/\/api-ks.wtzw.com\/api\/v2\/reader-adv\/index(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/qimaoreader4.js
[mitm]
hostname = xiaoshuo.wtzw.com,
*/
//let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
/*
obj = {
  "data": {
    "vip_list": [
      "点击屏幕中央可以呼出菜单",
      "提醒：要求事先打钱汇款的是诈骗",
      "七猫看书永久免费",
      "阅读设置里可以开启自动翻页",
      "提醒：花呗套现刷额度的是诈骗",
      "有问题可在我的-帮助与反馈里进行反馈",
      "阅读设置里可以调整字体大小",
      "七猫看书永久免费",
      "提醒：网上汇款转账需警惕",
      "更多阅读设置里可以隐藏右上角金币"
    ]
  }
};
*/
var body = $response.body;
body = body.replace(.+,'{"data": {"vip_list": ["点击屏幕中央可以呼出菜单"]}}');
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
