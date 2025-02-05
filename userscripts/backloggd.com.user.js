// ==UserScript==
// @name        CSS modifications for backloggd.com
// @namespace   CSS modifications for backloggd.com
// @description CSS modifications for backloggd.com
// @icon        https://www.google.com/s2/favicons?sz=64&domain=backloggd.com
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/backloggd.com.css.user.js
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/backloggd.com.css.user.js
// @author      ktnjared
// @version     1.0.0
// @match       *://*.backloggd.com/*
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

// invert colors to generate "light mode"
GM_addStyle ("html {filter: invert(100%);}");

// un-invert images to ensure they show normal colors
GM_addStyle ("img,svg,video {filter: invert(100%);}");

// increase comment text size
GM_addStyle (".comment .comment-body, .review-card .card-text {font-size: 1.2em;}");
