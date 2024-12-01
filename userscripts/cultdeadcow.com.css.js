// ==UserScript==
// @name        CSS modifications for cultdeadcow.com
// @namespace   CSS modifications for cultdeadcow.com
// @icon        https://www.google.com/s2/favicons?sz=64&domain=cultdeadcow.com
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/cultdeadcow.com.css.js
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/cultdeadcow.com.css.js
// @author      ktnjared
// @version     1.0.0
// @match       *://cultdeadcow.com/*
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

// Set background to HTTP1.1 gray
GM_addStyle (" body { background-color: #c0c0c0; } ");

// Set text to black color, and weight 600
GM_addStyle (" body {color: #000000; font-weight: 600; } ");

// Set hyperlinks to blue
GM_addStyle (" a:link, a:visited { color: #0000ff; } ");
