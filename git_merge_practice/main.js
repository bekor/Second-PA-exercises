
// Handle things on the top
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(),event: 'gtm.js'});
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-WX8JZQ');

// Do some stuff fith a lot of arguments
! function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1739404316281442');
fbq('track', "PageView");

// Define some object;
_stq = window._stq || [];
_stq.push(['view', {
    v: 'ext',
    j: '1:4.3.2',
    blog: '118685793',
    post: '5',
    tz: '0',
    srv: 'codecool.hu'
}]);
_stq.push(['clickTrackerInit', '118685793', '5']);

// handle href and some element
function loadCSS(href, before, media) {
    "use strict";
    var ss = window.document.createElement("link");
    var ref = before || window.document.getElementsByTagName("script")[0];
    var sheets = window.document.styleSheets;
    ss.rel = "stylesheet";
    ss.href = href;
    ss.media = "only x ";
    ref.parentNode.insertBefore(ss,ref);
    function toggleMedia(){
        var defined;
        for(var i = 0; i < sheets.length; i++) {
            if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
                defined = true;
            }
        }
        if (defined) {
            ss.media = media || "all";
        } else {
            setTimeout(toggleMedia);
            }
        }
    toggleMedia();
    return ss;
}

// Callback function for loading scripts
function loadScript(src, callback) {
    var s, r, t;
    r = false;
    s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
        if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true;
            callback();
        }
    };
    t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}

window.NREUM || (NREUM = {});
NREUM.info = {
    "beacon": "bam.nr-data.net",
    "licenseKey": "cdabc0659c",
    "applicationID": "9521541",
    "transactionName": "Y1wEMkZWXxJYWkFaW1oWJwVAXl4PFklUVFEZUAgCUU8=",
    "queueTime": 0,
    "applicationTime": 2135,
    "atts": "TxsHRA5MTBw=",
    "errorBeacon": "bam.nr-data.net",
    "agent": ""
}
