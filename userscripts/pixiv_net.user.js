// ==UserScript==
// @name        [ktn] pixiv.net
// @description Customizations for pixiv.net
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pixiv.net
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/pixiv_net.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/pixiv_net.user.js
// @match       *://pixiv.net/*
// @match       *://*.pixiv.net/*
// ==/UserScript==

// Hide Premium Trial banner on Search pages
GM_addStyle(`
    section:has(a[aria-label="pixiv Premium Free Trial"]) {
        display: none;
    }
`);
