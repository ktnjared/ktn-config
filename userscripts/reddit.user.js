// ==UserScript==
// @name        [ktn] reddit.com
// @description Customizations for reddit.com
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/reddit.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/reddit.user.js
// @match       *://reddit.com/*
// ==/UserScript==

// Display full-szied images
(function() {
    const style = document.createElement('style');
    style.textContent = 'figure > div, figure > div > img, figure > a > div, figure > a > div > img {height: 100%;}';
    document.head.appendChild(style);
})();
