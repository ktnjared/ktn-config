// 
// ╔═══════════════════════════════════════════════════════════════════════╗
// ║                                                                       ║
// ║                                                                       ║
// ║  ███████████  ███                        ██████                       ║
// ║ ░░███░░░░░░█ ░░░                        ███░░███                      ║
// ║  ░███   █ ░  ████  ████████   ██████   ░███ ░░░   ██████  █████ █████ ║
// ║  ░███████   ░░███ ░░███░░███ ███░░███ ███████    ███░░███░░███ ░░███  ║
// ║  ░███░░░█    ░███  ░███ ░░░ ░███████ ░░░███░    ░███ ░███ ░░░█████░   ║
// ║  ░███  ░     ░███  ░███     ░███░░░    ░███     ░███ ░███  ███░░░███  ║
// ║  █████       █████ █████    ░░██████   █████    ░░██████  █████ █████ ║
// ║ ░░░░░       ░░░░░ ░░░░░      ░░░░░░   ░░░░░      ░░░░░░  ░░░░░ ░░░░░  ║
// ║                                                                       ║
// ║                                user.js                                ║
// ║                                                                       ║
// ╚═══════════════════════════════════════════════════════════════════════╝
// 
// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ app.                                                                  ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Show fewer update prompts
user_pref("app.update.suppressPrompts", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ breakpad.                                                             ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Crash Reporting
user_pref("breakpad.reportURL", "https://crash-stats.mozilla.org/report/index/");

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ browser.                                                              ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Alt-Click / Option-Click to Save
user_pref("browser.altClickSave", true);

// Display warning when opening about:config
user_pref("browser.aboutConfig.showWarning", false);

// Restore default bookmarks
user_pref("browser.bookmarks.restore_default_bookmarks", false);

// Show mobile bookmarks
user_pref("browser.bookmarks.showMobileBookmarks", false);

// Backspace key behavior
user_pref("browser.backspace_action", 0);

// Blink tag or text-decoration: blink
user_pref("browser.blink_allowed", true);

// Content Blocking
user_pref("browser.contentblocking.category", custom);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);

// Crash Reporting
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", true);
user_pref("browser.crashReports.unsubmittedCheck.enabled", true);

// Download Panel
user_pref("browser.download.panel.shown", true);

// ML
user_pref("browser.ml.chat.hideLocalhost", true);
user_pref("browser.ml.chat.sidebar", false);

// New Tab
user_pref("browser.newtabpage.activity-stream.discoverystream.ctaButtonSponsors", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.editorsPicksHeader.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.locale-weather-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.endpoint", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.newSponsoredLabel.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.readTime.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.region-weather-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.thumbsUpDown.searchTopsitesCompact", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.topicSelection.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.wallpaperfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.weatherfeed", false);
user_pref("browser.newtabpage.activity-stream.hideTopSitesTitle", true);
user_pref("browser.newtabpage.activity-stream.impressionId", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.system.showWeather", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0);
user_pref("browser.newtabpage.activity-stream.weather.display", "");
user_pref("browser.newtabpage.activity-stream.weather.locationSearchEnabled", false);
user_pref("browser.newtabpage.activity-stream.weather.query", "");
user_pref("browser.newtabpage.activity-stream.weather.temperatureUnits", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.pinned", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-bff-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-block", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc-positions", "");

// Startup
user_pref("browser.startup.homepage", "chrome://browser/content/blanktab.html");
user_pref("browser.startup.homepage.abouthome_cache.enabled", false);


// Telemetry
user_pref("browser.ping-centre.log", false);

// Tabs
user_pref("browser.tabs.crashReporting.sendReport", true);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);

// Theme
user_pref("browser.theme.macos.native-theme", true);

// URL Bar
user_pref("browser.urlbar.quicksuggest.impressionCaps.nonSponsoredEnabled", false);
user_pref("browser.urlbar.quicksuggest.impressionCaps.sponsoredEnabled", false);
user_pref("browser.urlbar.quicksuggest.nonSponsoredIndex", "-1");
user_pref("browser.urlbar.quicksuggest.sponsoredIndex", "-1");
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.urlbar.showSearchTerms.featureGate", false);
user_pref("browser.urlbar.sponsoredTopSites", false);
user_pref("browser.urlbar.suggest.pocket", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false); //true
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.yelp", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.trimURLs", true);
user_pref("browser.urlbar.weather.ignoreVPN", false);
user_pref("browser.urlbar.yelp.featureGate", false);

// VPN
user_pref("browser.vpn_promo.enabled", false);

// Press and hold Q to quit the browser
user_pref("browser.warnOnQuitShortcut", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ cookiebanners.                                                        ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("cookiebanners.ui.desktop.enabled", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ dom.                                                                  ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref('dom.webgpu.enabled', true);
user_pref("dom.vibrator.enabled", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ extensions.                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Autofill addresses
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.addresses.supportedCountries", "");

// Autofill credit cards
user_pref("extensions.formautofill.creditCards.enabled", false);

// Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.bffApi", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.showHome", false);

// Recommended Add-ons in about:addons
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Translations disabled
user_pref("extensions.translations.disabled", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ font.                                                                 ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Default font
user_pref("font.default.x-western", "san-serif");

// Minimum font size
user_pref("font.minimum-size.x-western", 11);

// monospace font
user_pref("font.name.monospace.x-western", "Comic Code Ligatures");

// san-serif font
user_pref("font.name.sans-serif.x-western", "SF Pro");

// serif font
user_pref("font.name.serif.x-western", "New York");

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ geo.                                                                  ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Geolocation enabled
user_pref("geo.enabled", false);

// Geolocation provider to use
user_pref("geo.wifi.uri", "");

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ getpocket.                                                            ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("getpocket.com", "");

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ image.                                                                ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// JPEG-XL support
user_pref("image.jxl.enabled", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ layout.                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Always underline links
user_pref("layout.css.always_underline_links", true);

// Masonry grid layout support
user_pref('layout.css.grid-template-masonry-value.enabled', true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ media.                                                                ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("media.peerconnection.enabled", false);
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.webrtc.tls_tunnel_for_all_proxy", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ middlemouse.                                                          ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Paste with middlemouse click
user_pref("middlemouse.paste", true);

// Scroll with middlemouse
user_pref("middlemouse.scrollbarPosition", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ network.                                                              ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Disable DNS pre-fetching
user_pref("network.dns.disablePrefetch", true);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ notification.                                                         ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Allow notifications
user_pref("notification.feature.enabled", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ pdfjs.                                                                ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("pdfjs.enableHighlightFloatingButton", true);
user_pref("pdfjs.enableHWA", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ permissions.                                                          ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);
user_pref("permissions.postPrompt.animate", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ privacy.                                                              ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);
user_pref("privacy.purge_trackers.date_in_cookie_database", 0);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.trackingprotection.emailtracking.enabled", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ reader.                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("reader.color_scheme", "light");
user_pref("reader.colors_menu.enabled", true);
user_pref("reader.font_size", 8);
user_pref("reader.improved_text_menu.enabled", true);
user_pref("reader.line_height", 3);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ services.                                                             ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Sync to Mozilla Account
user_pref("services.sync.prefs.sync-seen.browser.newtabpage.activity-stream.section.highlights", true);
user_pref("services.sync.prefs.sync.browser.startup.homepage", true);
user_pref("services.sync.prefs.sync-seen.app.shield.optoutstudies.enabled", true);
user_pref("services.sync.prefs.sync-seen.browser.crashReports.unsubmittedCheck.autoSubmit2", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ sidebar.                                                              ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("sidebar.main.tools", "syncedtabs,history");
user_pref("sidebar.verticalTabs", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ toolkit.                                                              ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.telemetry.user_characteristics_ping.opt-out", true);
user_pref("toolkit.telemetry.user_characteristics_ping.send-once", "");

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ uc.                                                                   ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("uc.tweak.disable-drag-space", false);
user_pref("uc.tweak.hide-tabs-bar", false);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ ui.                                                                   ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("ui.systemUsesDarkTheme", 0);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ widget.                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("widget.macos.titlebar-blend-mode.behind-window", true);

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ xpinstall.                                                            ║
// ╚═══════════════════════════════════════════════════════════════════════╝
user_pref("xpinstall.signatures.required", false);


// ╔═══════════════════════════════════════════════════════════════════════╗
// ║                       __                  _____                       ║
// ║         _____ _______|  | __ ____   _____/ ____\_______  ___          ║
// ║         \__  \\_  __ \  |/ // __ \ /    \   __\/  _ \  \/  /          ║
// ║          / __ \|  | \/    <\  ___/|   |  \  | (  <_> >    <           ║
// ║         (____  /__|  |__|_ \\___  >___|  /__|  \____/__/\_ \          ║
// ║              \/           \/    \/     \/                 \/          ║
// ╚═══════════════════════════════════════════════════════════════════════╝
// 
// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ Curated selection from arkenfox                                       ║
// ╚═══════════════════════════════════════════════════════════════════════╝

/******
*    name: arkenfox user.js
*    date: 7 June 2024
* version: 126
*    urls: https://github.com/arkenfox/user.js [repo]
*        : https://arkenfox.github.io/gui/ [interactive]
* license: MIT: https://github.com/arkenfox/user.js/blob/master/LICENSE.txt

/* 0000: disable about:config warning ***/
user_pref("browser.aboutConfig.showWarning", false);

/*** [SECTION 0100]: STARTUP ***/
/* 0102: set startup page ***/
user_pref("browser.startup.page", 3);
/* 0105: disable sponsored content on Firefox Home (Activity Stream) ***/
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
/* 0106: clear default topsites ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");

/*** [SECTION 0200]: GEOLOCATION ***/
/* 0201: use Mozilla geolocation service instead of Google if permission is granted ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.logging.enabled", true);
/* 0202: disable using the OS's geolocation service ***/
user_pref("geo.provider.use_gpsd", false);            // [LINUX]
user_pref("geo.provider.use_geoclue", false);         // [LINUX]
user_pref("geo.provider.use_corelocation", false);    // [MAC]
user_pref("geo.provider.ms-windows-location", false);

/*** [SECTION 0300]: QUIETER FOX ***/
/* 0320: disable recommendation pane in about:addons (uses Google Analytics) ***/
user_pref("extensions.getAddons.showPane", false);
/* 0321: disable recommendations in about:addons' Extensions and Themes panes ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
/* 0322: disable personalized Extension Recommendations in about:addons and AMO ***/
user_pref("browser.discovery.enabled", false);
/* 0323: disable shopping experience ***/
user_pref("browser.shopping.experience2023.enabled", false);

/** TELEMETRY ***/
/* 0330: disable new data submission ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
/* 0331: disable Health Reports ***/
user_pref("datareporting.healthreport.uploadEnabled", false);
/* 0332: disable telemetry ***/
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", enabled);
user_pref("toolkit.telemetry.server", "https://incoming.telemetry.mozilla.org");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", true);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
/* 0333: disable Telemetry Coverage ***/
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
/* 0335: disable Firefox Home (Activity Stream) telemetry ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** STUDIES ***/
/* 0340: disable Studies ***/
user_pref("app.shield.optoutstudies.enabled", false);
/* 0341: disable Normandy/Shield ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** OTHER ***/
/* 0360: disable Captive Portal detection ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
/* 0361: disable Network Connectivity checks ***/
user_pref("network.connectivity-service.enabled", false);

/*** [SECTION 0600]: BLOCK IMPLICIT OUTBOUND [not explicitly asked for - e.g. clicked on] ***/
/* 0601: disable link prefetching ***/
user_pref("network.prefetch-next", false);
/* 0602: disable DNS prefetching ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
/* 0603: disable predictor / prefetching ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
/* 0604: disable link-mouseover opening connection to linked server ***/
user_pref("network.http.speculative-parallel-limit", 0);
/* 0605: disable mousedown speculative connections on bookmarks and history ***/
user_pref("browser.places.speculativeConnect.enabled", false);
/* 0610: enforce no "Hyperlink Auditing" (click tracking) ***/
user_pref("browser.send_pings", false);

/*** [SECTION 0700]: DNS / DoH / PROXY / SOCKS ***/
/* 0702: set the proxy server to do any DNS lookups when using SOCKS ***/
user_pref("network.proxy.socks_remote_dns", true);
/* 0710: enable DNS-over-HTTPS (DoH) ***/
user_pref("network.trr.mode", 5);
/* 0712: set DoH provider ***/
user_pref("network.trr.uri", "");

/*** [SECTION 0800]: LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS ***/
/* 0801: disable location bar making speculative connections ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
/* 0802: disable location bar contextual suggestions ***/
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
/* 0803: disable live search suggestions ***/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
/* 0805: disable urlbar trending search suggestions ***/
user_pref("browser.urlbar.trending.featureGate", false);
/* 0806: disable urlbar suggestions ***/
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
/* 0807: disable urlbar clipboard suggestions ***/
user_pref("browser.urlbar.clipboard.featureGate", false);
/* 0810: disable search and form history ***/
user_pref("browser.formfill.enable", false);

/*** [SECTION 0900]: PASSWORDS ***/
/* 0903: disable auto-filling username & password form fields ***/
user_pref("signon.autofillForms", false);
/* 0904: disable formless login capture for Password Manager ***/
user_pref("signon.formlessCapture.enabled", false);

/*** [SECTION 1000]: DISK AVOIDANCE ***/
/* 1001: disable disk cache ***/
user_pref("browser.cache.disk.enable", false);
/* 1002: disable media cache from writing to disk in Private Browsing ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("media.memory_cache_max_size", 65536);

/*** [SECTION 1200]: HTTPS (SSL/TLS / OCSP / CERTS / HPKP) ***/
/* 1201: require safe negotiation ***/
user_pref("security.ssl.require_safe_negotiation", true);
/* 1206: disable TLS1.3 0-RTT (round-trip time) ***/
user_pref("security.tls.enable_0rtt_data", false);

/*** [SECTION 1700]: CONTAINERS ***/
/* 1701: enable Container Tabs and its UI setting ***/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/*** [SECTION 2000]: PLUGINS / MEDIA / WEBRTC ***/
/* 2002: force WebRTC inside the proxy ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
/* 2003: force a single network interface for ICE candidates generation ***/
user_pref("media.peerconnection.ice.default_address_only", true);

/*** [SECTION 2600]: MISCELLANEOUS ***/
/* 2603: remove temp files opened from non-PB windows with an external application ***/
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
/* 2606: disable UITour backend so there is no chance that a remote page can use it ***/
user_pref("browser.uitour.enabled", false);
/* 2616: remove special permissions for certain mozilla domains ***/
user_pref("permissions.manager.defaultsUrl", "");
/* 2617: remove webchannel whitelist ***/
user_pref("webchannel.allowObject.urlWhitelist", "");
/* 2620: enforce PDFJS, disable PDFJS scripting ***/
user_pref("pdfjs.disabled", false);
user_pref("pdfjs.enableScripting", false);
/* 2624: disable middle click on new tab button opening URLs or searches using clipboard ***/
user_pref("browser.tabs.searchclipboardfor.middleclick", false);

/** DOWNLOADS ***/
/* 2652: disable downloads panel opening on every download ***/
user_pref("browser.download.alwaysOpenPanel", false);
/* 2653: disable adding downloads to the system's "recent documents" list ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/*** [SECTION 4500]: RFP (resistFingerprinting) ***/
/* 4501: enable RFP ***/
user_pref("privacy.resistFingerprinting", true);
/* 4510: disable using system colors ***/
user_pref("browser.display.use_system_colors", false);
/* 4511: enforce non-native widget theme ***/
user_pref("widget.non-native-theme.enabled", true);

/*** [SECTION 5000]: OPTIONAL OPSEC ***/
/* 5003: disable saving passwords ***/
user_pref("signon.rememberSignons", false);
/* 5010: disable location bar suggestion types ***/
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false);
/* 5017: disable Form Autofill ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

/*** [SECTION 6000]: DON'T TOUCH ***/
/* 6010: enforce no TLS 1.0/1.1 downgrades ***/
user_pref("security.tls.version.enable-deprecated", false);
/* 6012: enforce Quarantined Domains ***/
user_pref("extensions.quarantinedDomains.enabled", true);

/*** [SECTION 9000]: NON-PROJECT RELATED ***/
/* 9002: disable General>Browsing>Recommend extensions/features as you browse ***/
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
