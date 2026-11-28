var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)alicdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)qwen\.ai$/.test(host)) return "+proxy";
        if (/(?:^|\.)exness\.help$/.test(host)) return "+proxy";
        if (/(?:^|\.)exness\.com$/.test(host)) return "+proxy";
        if (/^xvideos\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)xvideos\.com$/.test(host)) return "+proxy";
        if (/^pornhub\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pornhub\.com$/.test(host)) return "+proxy";
        if (/^ifconfig\.me$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 192.168.123.21:10111";
    }
});
