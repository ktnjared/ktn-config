// ==UserScript==
// @name        [ktn] backloggd.com
// @namespace   [ktn] backloggd.com
// @description [ktn] backloggd.com
// @icon        https://www.google.com/s2/favicons?sz=64&domain=backloggd.com
// @homepageURL https://github.com/ktnjared/ktn-config/tree/main/userscripts
// @downloadURL https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/backloggd.com.css.user.js
// @updateURL   https://raw.githubusercontent.com/ktnjared/ktn-config/main/userscripts/backloggd.com.css.user.js
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @match       *://*.backloggd.com/*
// ==/UserScript==

// invert colors to generate "light mode"
GM_addStyle(`
    "html {filter: invert(100%);}"
`);

// un-invert images to ensure they show normal colors
GM_addStyle(`
    "img,svg,video {filter: invert(100%);}"
`);

// increase comment text size
GM_addStyle(`
    ".comment .comment-body, .review-card .card-text {font-size: 1.2em;}"
`);
