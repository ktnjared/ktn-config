// ==UserScript==
// @name        [CSS] bitbang.social
// @description UserStyles for bitbang.social
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=bitbang.social
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/bitbang.social.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/bitbang.social.css.user.js
// @match       *://bitbang.social/*
// ==/UserScript==

// Remove header image to fix TangerineUI
GM_addStyle(`
    div.tabs-bar__wrapper::before {
        display: none;
    }
`);
