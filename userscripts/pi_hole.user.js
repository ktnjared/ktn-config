// ==UserScript==
// @name        [ktn] Pi-hole
// @description Customizations for Pi-hole
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pi-hole.net
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/pi_hole.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/pi_hole.user.js
// @match       *://pihole.*/*
// @match       *://pihole/*
// ==/UserScript==

// Increase width
GM_addStyle(`
    @-moz-document domain('pihole') {
    .layout-boxed .wrapper {
        max-width: 97%;
    }
`)
