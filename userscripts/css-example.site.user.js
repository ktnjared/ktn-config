// ==UserScript==
// @name        CSS modifications for example.site
// @namespace   CSS modifications for example.site
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/css-example.site.user.js
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/css-example.site.user.js
// @author      ktnjared
// @version     1.0.0
// @match       *://example.site/*
// @grant       GM_addStyle
// @run-at      document-start
// ==/UserScript==

function GM_addStyle(css) {
    const style = document.getElementById("GM_addStyleBy8626") || (function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = "GM_addStyleBy8626";
        document.head.appendChild(style);
        return style;
    })();
    const sheet = style.sheet;
    sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

GM_addStyle (" ADD { CSS: HERE }; ");
