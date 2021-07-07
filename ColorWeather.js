var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['is_vip'] = true;
obj['result']['svip_expired_at'] = 1765512732;
obj['result']['vip_type'] = "s";
obj['result']['xy_vip_expire'] = 0;
obj['result']['wt']['ranking_above'] = 100;
obj['result']['wt']['vip']['is_auto_renewal'] = false;
obj['result']['wt']['vip']['enabled'] = true,
obj['result']['wt']['vip']['svip_expired_at'] = 1765512732;
obj['result']['wt']['svip_given'] = 365;
obj['result']['wt']['is_login'] = true;
obj['result']['wt']['last_acted_at'] = 1725500509;
obj['result']['wt']['created_at'] = 1594707500;
body = JSON['stringify'](obj);
$done({
    body
})
