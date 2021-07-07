var body = $response['body'];
var obj = JSON['parse'](body);
obj['result']['is_vip'] = true;
obj['result']['is_vip'] = true;
obj['result']['svip_expired_at'] = 1765512732;
obj['result']['xy_vip_expire'] = 0;
obj['wt']['ranking_above'] = 100
obj['wt']['vip']['is_auto_renewal'] = false
obj['wt']['vip']['enabled'] = true,
obj['wt']['vip']['svip_expired_at'] = 1665123505
obj['wt']['svip_given'] = 365
obj['wt']['is_login'] = true
obj['wt']['last_acted_at'] = 1725500509
obj['wt']['created_at'] = 1594707500
body = JSON['stringify'](obj);
$done({
    body
})
