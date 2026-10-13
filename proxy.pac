var PROXY_SERVER = "PROXY 192.168.123.21:10003; DIRECT";

function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    // Danh sách domain đi qua proxy (bao gồm domain gốc và subdomain)
    var targetDomains = [
        "exness.com",
        "xvideos.com",
        "pornhub.com",
        "ifconfig.me",
        "speedtest.net"
    ];

    for (var i = 0; i < targetDomains.length; i++) {
        var domain = targetDomains[i];
        if (host === domain || dnsDomainIs(host, "." + domain)) {
            return PROXY_SERVER;
        }
    }

    // Các trang web còn lại đi trực tiếp
    return "DIRECT";
}
