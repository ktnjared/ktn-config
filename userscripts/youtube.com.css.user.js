// ==UserScript==
// @name        [CSS] youtube.com
// @description UserStyles for youtube.com
// @author      ktnjared
// @version     1.0.1
// @run-at      document-start
// @grant       GM_addStyle
// @icon        https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @homepageURL https://ktn.one/jared/userscripts/
// @downloadURL https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @updateURL   https://ktn.one/jared/userscripts/raw/youtube.com.css.user.js
// @match       *://youtube.com/*
// @match       *://*.youtube.com/*
// @match       *://youtu.be/*
// @match       *://*.youtube/*
// ==/UserScript==

// Sidebar Element: Hide Shorts
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title~="Shorts"]) {
        display: none;
    }
`);

// Sidebar Element: Hide YouTube Music
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href*="music.youtube"]) {
        display: none;
    }
`);

// Sidebar Element: Hide History
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/history"]) {
        display:none;
    }
`);

// Sidebar Element: Hide Your movies & TV
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your movies & TV"]) {
        display:none;
    }
`);

// Sidebar Element: Hide Downloads
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/downloads"]) {
        display:none;
    }
`);

// Sidebar Element: Hide Your Clips
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/feed/clips"]) {
        display:none;
    }
`);

// Sidebar Element: Hide Liked Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[href="/playlist?list=LL"]) {
        display:none;
    }
`);

// Sidebar Element: Hide Your Videos
GM_addStyle(`
    ytd-guide-entry-renderer:has(a[title="Your videos"]) {
        display:none;
    }
`);




//  ! Hide dynamic header buttons

//  youtube.com###scroll-container:upward(#header)

//   ! Hide related searches and related results from search results

//  youtube.com##ytd-search ytd-item-section-renderer ytd-shelf-renderer

//  youtube.com##ytd-search ytd-item-section-renderer ytd-horizontal-card-list-renderer

//   ! --- CHANNEL AND VIDEO PAGES ---

//  ! Hide Clip button

//  youtube.com##[aria-label="Clip"]

//  ! Hide Download button

//  youtube.com##[aria-label="Download"]

//  ! Hide Join button

//  youtube.com##[aria-label="Join this channel"]

//  ! Hide "More actions"/elipsis button

//  youtube.com##[aria-label="More actions"]

//  ! Hide Super Thanks button

//  youtube.com##[aria-label="Thanks"]

//  ! Hide Comment count

//  www.youtube.com##.ytd-comments-header-renderer.style-scope.count-text



//   ! --- SIDEBAR ---

//  www.youtube.com##.ytd-comments-header-renderer.style-scope.count-text

//   ! --- SIDEBAR ---



//   ! --- Subscriptions ---

//  ! Hide Channels with new videos (eg. blue dot). Only display Live channels

//  youtube.com##ytd-guide-entry-renderer[line-end-style="dot"]

//  ! Hide "All channels"

//  youtube.com##a[href="/feed/channels"]:upward(ytd-guide-entry-renderer)

//  ! Hide "Show more"

//  youtube.com##a[title="Show more"]:upward(ytd-guide-entry-renderer)

//   ! Hide "Explore" section

//  youtube.com##ytd-guide-section-renderer>h3>yt-formatted-string:has-text(/Explore/):upward(ytd-guide-section-renderer)

//  ! Hide "More from YouTube" section

//  youtube.com##ytd-guide-section-renderer>h3>yt-formatted-string:has-text(/More from YouTube/):upward(ytd-guide-section-
    //    er)

    //  ! Hide bottom section

//  youtube.com##a[title="Send feedback"]:upward(ytd-guide-section-renderer)

//  ! Hide "Footer" section

//  youtube.com###copyright:upward(#footer)
