// ==UserScript==
// @name        [ktn] icy-veins.com
// @namespace   [ktn] icy-veins.com
// @description [ktn] icy-veins.com
// @icon        https://www.google.com/s2/favicons?sz=64&domain=icy-veins.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/icy-veins.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/icy-veins.user.js
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @match       *://*.icy-veins.com/*
// ==/UserScript==

// invert colors to generate "light mode"
GM_addStyle(`
    "html {filter: invert(100%) !important;}"
`);

// un-invert images to ensure they show normal colors
GM_addStyle(`
    "img,svg,video {filter: invert(100%) !important;}"
`);
