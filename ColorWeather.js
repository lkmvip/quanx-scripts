var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['is_vip'] = true;
obj['result']['svip_expired_at'] = 1765512732;
obj['result']['vip_type'] = "s";
obj['result']['free_trial'] = 1;
body = JSON['stringify'](obj);
$done({
    body
})
