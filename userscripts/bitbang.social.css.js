// ==UserScript==
// @name        CSS modifications for bitbang.social
// @namespace   CSS modifications for bitbang.social
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/bitbang.social.css.js
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/bitbang.social.css.js
// @author      ktnjared
// @version     1.0.0
// @match       *://bitbang.social/*
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

// Remove header image to fix TangerineUI
GM_addStyle ("div.tabs-bar__wrapper::before {display: none;};");