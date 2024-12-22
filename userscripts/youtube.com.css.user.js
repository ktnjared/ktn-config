// ==UserScript==
// @name        [CSS] youtube.com
// @description UserStyles for youtube.com
// @author      ktnjared
// @version     1.0.2
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @match       *://*.youtube.com/*
// @match       *://*.youtube/*
// @match       *://youtu.be/*
// @match       *://youtube.com/*
// ==/UserScript==

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ Sidebar                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// ═══ TOP ═════════════════════════════════════════════════════════════════
// Hide Shorts
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title~="Shorts"]) {
        display:none;
    }
`);

// Hide YouTube Music
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href*="music.youtube"]) {
        display:none;
    }
`);

// ═══ YOU ═════════════════════════════════════════════════════════════════
// Hide History
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/history"]) {
        display:none;
    }
`);

// Hide Your movies & TV
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your movies & TV"]) {
        display:none;
    }
`);

// Hide Downloads
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/downloads"]) {
        display:none;
    }
`);

// Hide Your Clips
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/clips"]) {
        display:none;
    }
`);

// Hide Liked Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/playlist?list=LL"]) {
        display:none;
    }
`);

// Hide Your Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your videos"]) {
        display:none;
    }
`);

// ═══ SUBSCRIPTIONS ═══════════════════════════════════════════════════════
// Hide Channels with new videos (eg. blue dot). Only display Live channels
GM_addStyle(`
    ytd-guide-entry-renderer[line-end-style="dot"] {
        display:none;
    }
`);

// Hide "All channels"
GM_addStyle(`
    ytd-guide-entry-renderer:has(youtube.com##a[href="/feed/channels"]) {
        display:none;
    }
`);

// Hide "Show more"
GM_addStyle(`
    ytd-guide-entry-renderer:has(youtube.com##a[title="Show more"]) {
        display:none;
    }
`);

// ═══ EXPLORE ═════════════════════════════════════════════════════════════
// This hides the entire section
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(3) {
        display:none;
    }
`);

// ═══ MORE FROM YOUTUBE ═══════════════════════════════════════════════════
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(4) {
        display:none;
    }
`);

// ═══ BOTTOM ══════════════════════════════════════════════════════════════
GM_addStyle(`
    #sections > ytd-guide-section-renderer:nth-child(5) {
        display:none;
    }
`);

// ═══ FOOTER ══════════════════════════════════════════════════════════════
GM_addStyle(`
    *[id*="footer"]:has(*[id="copyright"]) {
        display:none;
    }
`);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ CHANNEL & VIDEO PAGES                                                 ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Hide Clip button
GM_addStyle(`
    button[aria-label="Clip"] {
        display:none;
    }
`);

// Hide Download button
GM_addStyle(`
    button[aria-label="Download"] {
        display:none;
    }
`);

// Hide Join button
GM_addStyle(`
    button[aria-label="Join this channel"] {
        display:none;
    }
`);

// Hide "More actions"/elipsis button
GM_addStyle(`
    button[aria-label="More actions"] {
        display:none;
    }
`);

// Hide Super Thanks button
GM_addStyle(`
    button[aria-label="Thanks"] {
        display:none;
    }
`);

// Hide dislike button
GM_addStyle(`
    .style-scope.ytd-menu-renderer.force-icon-button.style-text {
        display: none;
    }
`);
