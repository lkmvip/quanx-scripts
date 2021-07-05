var body = $response['body'];
var obj = JSON['parse'](body);
//obj['result']['xy_vip_expire'] = 4096483190;
//obj['result']['is_vip'] = true;
//obj['result']['vip_expired_at'] = 4096483190;
//obj['result']['is_xy_vip'] = true;
//obj['result']['vip_type'] = "v";
obj['result']['free_trial'] = 0;
obj['result']['vip_type'] = '';
obj['result']['svip_expired_at'] = 0;
obj['result']['is_vip'] = false;
body = JSON['stringify'](obj);
$done({
    body
})
