// ==UserScript==
// @name        [CSS] youtube.com
// @description UserStyles for youtube.com
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @match       *://youtube.com/*
// ==/UserScript==

// DOCUMENT YOUR STUFF
GM_addStyle(`
    a.ytd-guide-entry-renderer:has(+ a[title="Your movies & TV"]) {
        display: none;
    }
`);
