// ==UserScript==
// @name        [CSS] Pi-hole
// @description UserStyles for Pi-hole
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=pi-hole.net
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/pihole.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/pihole.css.user.js
// @match       *://pihole/*
// @match       *://pihole.dab-komodo.ts.net/*
// ==/UserScript==

// Increase width
GM_addStyle(`
    @-moz-document domain('pihole') {
    .layout-boxed .wrapper {
        max-width: 97%;
    }
`)
