// ==UserScript==
// @name        [ktn] <all_urls>
// @description Customizations for <all_urls>
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=all_urls
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/all_urls.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/all_urls.user.js
// @match       <all_urls>
// ==/UserScript==

// Hide Google Ads
GM_addStyle(`
    ._ap_apex_ad {
        display: none !important;
    }
`);
