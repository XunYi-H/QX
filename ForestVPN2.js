  
/*
圈X:
#Forest解锁vip
[rewrite_local]
^https:\/\/api.forestvpn.com\/v2\/devices(.+) url script-response-body https://raw.githubusercontent.com/TinyRainy0921/ruler/main/ForestVPN2.js
[mitm]
hostname = api.forestvpn.com,
*/
/*
let obj = JSON.parse($response.body);//获取相应消息体（json格式）,并转换成对象处理
obj.last_active_at = "2099-01-01T00:00:00.000000Z";
$done({body: JSON.stringify(obj)});//重新打包回json格式并结束修改
*/
let obj = JSON.parse($response.body);
obj = {
	"ips": [
		"10.192.1.160/32",
		"fd19:0:0:a001::1a0/128"
	],
	"id": "79b58866-bd4c-4258-b9c3-c184d218e0c7",
	"dns": [
		"8.8.8.8",
		"8.8.4.4",
		"2001:4860:4860::8888",
		"2001:4860:4860::8844"
	],
	"stats": {
		"transmitted_bytes": 30446448,
		"connections": 1,
		"received_bytes": 3643952
	},
	"external_key": "f1e42cbf-49ba-4a1a-9f3a-1268e85845a4",
	"locations": [
		{
			"id": "7fc5b17c-eddf-413f-8b37-9d36eb5e33ec",
			"country": {
				"id": "FI",
				"emoji": "🇫🇮",
				"name": "Finland",
				"alternative_names": null
			},
			"latitude": 60.192059,
			"name": "Helsinki",
			"longitude": 24.945831,
			"alternative_names": null
		}
	],
	"ports": null,
	"last_active_at": "2021-07-12T19:23:03.785980Z",
	"name": "iPhone",
	"wireguard": {
		"pub_key": "PqcrtC61lq+qxPnIFa/V2CFdG/OEsDXU2ZrijQcl9UU=",
		"peers": [
			{
				"ps_key": "FgREyLV5EL7zqAhRDxNErFiBEdCwUJ6pSpzhyOXScic=",
				"endpoint": "e2a8a2f.79b58866-bd4c-4258-b9c3-c184d218e0c7.e.forestdns.net:51920",
				"ips": [
					"::0/0",
					"1.0.0.0/8",
					"2.0.0.0/8",
					"3.0.0.0/8",
					"4.0.0.0/6",
					"8.0.0.0/7",
					"11.0.0.0/8",
					"12.0.0.0/6",
					"16.0.0.0/4",
					"32.0.0.0/3",
					"64.0.0.0/2",
					"128.0.0.0/3",
					"160.0.0.0/5",
					"168.0.0.0/6",
					"172.0.0.0/12",
					"172.32.0.0/11",
					"172.64.0.0/10",
					"172.128.0.0/9",
					"173.0.0.0/8",
					"174.0.0.0/7",
					"176.0.0.0/4",
					"192.0.0.0/9",
					"192.128.0.0/11",
					"192.160.0.0/13",
					"192.169.0.0/16",
					"192.170.0.0/15",
					"192.172.0.0/14",
					"192.176.0.0/12",
					"192.192.0.0/10",
					"193.0.0.0/8",
					"194.0.0.0/7",
					"196.0.0.0/6",
					"200.0.0.0/5",
					"208.0.0.0/4",
					"10.192.0.0/20",
					"10.8.255.0/24"
				],
				"pub_key": "oIAmwjBqhwwB+i0azZpwGAGU33cdZMKqQ9WsAKWtmwA="
			}
		],
		"priv_key": "XLtS4UjFgqsEZ5065bnbtpwjaL97dvLXQmk8mQFQZwM="
	}
}
;
$done({body: JSON.stringify(obj)});
