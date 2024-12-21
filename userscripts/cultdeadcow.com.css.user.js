// ==UserScript==
// @name        [CSS] cultdeadcow.com
// @description UserStyles for cultdeadcow.com
// @author      ktnjared
// @version     1.0.0
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=cultdeadcow.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/cultdeadcow.com.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/cultdeadcow.com.css.user.js
// @match       *://cultdeadcow.com/*
// ==/UserScript==

// Set body to black color, weight 600, HTML 2.0 gray
GM_addStyle(`
    body {
        background-color: #c0c0c0; //silver
        color: #000000; //black
        font-weight: 600;
    }
`);

// Set hyperlinks to HTML 2.0 values
GM_addStyle(`
    a:link {
        color: #0000ff; //blue
    }

    a:visited {
        color: #800080; //purple
    }

    a:active {
        color: #ff0000; //red
    }
`);
