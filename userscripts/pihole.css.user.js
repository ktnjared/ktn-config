// ==UserScript==
// @name        CSS modifications for pihole
// @namespace   CSS modifications for pihole
// @description CSS modifications for pihole
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pi-hole.net
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/pihole.css.user.js
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/pihole.css.user.js
// @author      ktnjared
// @version     1.0.0
// @match       *://pihole/*
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

GM_addStyle (" .layout-boxed .wrapper {max-width: 97%;} ");
