// ==UserScript==
// @name        [ktn] bitbang.social
// @description Customizations for bitbang.social
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bitbang.social
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/bitbang_social.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/bitbang_social.user.js
// @match       *://bitbang.social/*
// ==/UserScript==

// Remove header image to fix TangerineUI
GM_addStyle(`
    div.tabs-bar__wrapper::before {
        display: none;
    }
`);
