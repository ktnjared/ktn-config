// ╔══════════════════════════════════════════════════════════════════════╗
// ║ Firefox Nightly user.js                                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ Nightly Experiments                                                   ║
// ╚═══════════════════════════════════════════════════════════════════════╝

user_pref('dom.webgpu.enabled', true); //true
user_pref('layout.css.grid-template-masonry-value.enabled', true); //true

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ app.                                                                  ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Show fewer update prompts
user_pref('app.update.suppressPrompts', true);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ browser.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Alt-Click / Option-Click to Save
user_pref('browser.altClickSave', true); // false

// Display warning when opening about:config
user_pref('browser.aboutConfig.showWarning', false); // true

// Restore default bookmarks
user_pref('browser.bookmarks.restore_default_bookmarks', false); // true

// Show mobile bookmarks
user_pref('browser.bookmarks.showMobileBookmarks', false); // true

// Backspace key behavior
user_pref('browser.backspace_action', 0); // ¯\_(ツ)_/¯

// Blink tag or text-decoration: blink
user_pref('browser.blink_allowed', true); // false

// Content Blocking
user_pref('browser.contentblocking.report.hide_vpn_banner', true); // false

// New Tab
user_pref('browser.newtabpage.activity-stream.discoverystream.ctaButtonSponsors', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.editorsPicksHeader.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.newSponsoredLabel.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.personalization.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.readTime.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.region-weather-config', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.discoverystream.saveToPocketCard.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.spocs.personalized', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.spocTopsitesPlacement.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.discoverystream.sponsored-collections.enabled', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.aboutpreferences', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.discoverystreamfeed', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.favicon', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.newtabinit', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.places', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.prefs', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.recommendationprovider', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.section.highlights', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.section.topstories.options', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.feeds.sections', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.system.topsites', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.systemtick', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.telemetry', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.wallpaperfeed', false); // true
user_pref('browser.newtabpage.activity-stream.feeds.weatherfeed', false); // true
user_pref('browser.newtabpage.activity-stream.hideTopSitesTitle', true); // false
user_pref('browser.newtabpage.activity-stream.impressionId', null); // ¯\_(ツ)_/¯ UUID
user_pref('browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.section.highlights.rows', 0); // 1
user_pref('browser.newtabpage.activity-stream.section.topstories.rows', 0); // 1
user_pref('browser.newtabpage.activity-stream.sectionOrder', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.showSearch', false); // true
user_pref('browser.newtabpage.activity-stream.showWeather', false); // true
user_pref('browser.newtabpage.activity-stream.system.showSponsored', false); // true
user_pref('browser.newtabpage.activity-stream.system.showWeather', false); // true
user_pref('browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.telemetry.ut.events', false); // true
user_pref('browser.newtabpage.activity-stream.telemetry', false); // true
user_pref('browser.newtabpage.activity-stream.topSitesRows', 0); // 1
user_pref('browser.newtabpage.activity-stream.weather.display', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.weather.locationSearchEnabled', false); // true
user_pref('browser.newtabpage.activity-stream.weather.query', null); // ¯\_(ツ)_/¯
user_pref('browser.newtabpage.activity-stream.weather.temperatureUnits', null); // f
user_pref('browser.newtabpage.pinned', null); // ¯\_(ツ)_/¯

// Tabs
user_pref('browser.tabs.hoverPreview.enabled', false); // true
user_pref('browser.tabs.hoverPreview.showThumbnails', false); // true

// URL Bar
user_pref('browser.urlbar.quicksuggest.impressionCaps.nonSponsoredEnabled', false); // true
user_pref('browser.urlbar.quicksuggest.impressionCaps.sponsoredEnabled', false); // true
user_pref('browser.urlbar.quicksuggest.nonSponsoredIndex', '-1'); // -1
user_pref('browser.urlbar.quicksuggest.sponsoredIndex', '-1'); // -1
user_pref('browser.urlbar.sponsoredTopSites', false); // true
user_pref('browser.urlbar.suggest.pocket', false); // true
user_pref('browser.urlbar.suggest.quicksuggest.nonsponsored', false); // true
user_pref('browser.urlbar.suggest.quicksuggest.sponsored', false); // true
user_pref('browser.urlbar.suggest.topsites', false); // true
user_pref('browser.urlbar.suggest.trending', false); //true
user_pref('browser.urlbar.suggest.weather', false); // true
user_pref('browser.urlbar.suggest.yelp', false); // true
user_pref('browser.urlbar.trimHttps', true); // true
user_pref('browser.urlbar.trimURLs', true); // true
user_pref('browser.urlbar.weather.featureGate', false); // true
user_pref('browser.urlbar.weather.ignoreVPN', false); // true

// VPN
user_pref('browser.vpn_promo.enabled', false); // true

// Press and hold Q to quit the browser
user_pref('browser.warnOnQuitShortcut', false); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ extensions.                                                          ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Autofill addresses
user_pref('extensions.formautofill.addresses.enabled', false); // true

// Autofill credit cards
user_pref('extensions.formautofill.creditCards.enabled', false); // true

// Pocket enabled
user_pref('extensions.pocket.enabled', false); // true

// Recommended Add-ons in about:addons
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false); // true

// Translations disabled
user_pref('extensions.translations.disabled', false); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ font.                                                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Default font
user_pref('font.default.x-western', 'san-serif'); // serif

// Minimum font size
user_pref('font.minimum-size.x-western', 11); // 9

// monospace font
user_pref('font.name.monospace.x-western', 'Comic Code Ligatures'); // Courier New

// san-serif font
user_pref('font.name.sans-serif.x-western', 'SF Pro'); // Arial

// serif font
user_pref('font.name.serif.x-western', 'New York'); // Georgia

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ geo.                                                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Geolocation enabled
user_pref('geo.enabled', false); // true

// Geolocation provider to use
user_pref('geo.wifi.uri', ''); // ¯\_(ツ)_/¯

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ image.                                                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

// JPEG-XL support
user_pref('image.jxl.enabled', true); // false

// ╔═══════════════════════════════════════════════════════════════════════╗
// ║ layout.                                                               ║
// ╚═══════════════════════════════════════════════════════════════════════╝

// Always underline links
user_pref('layout.css.always_underline_links', true); // false

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ middlemouse.                                                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Paste with middlemouse click
user_pref('middlemouse.paste', true); // false

// Scroll with middlemouse
user_pref('middlemouse.scrollbarPosition', true); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ network.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Disable DNS pre-fetching
user_pref('network.dns.disablePrefetch', true); // false
user_pref('network.predictor.enabled', false); // true
user_pref('network.prefetch-next', false); // true

// DNS over HTTPS
user_pref('network.trr.custom_uri', 'https://dns10.quad9.net/dns-query'); // null
user_pref('network.trr.default_provider_uri', 'https://dns10.quad9.net/dns-query'); // https://mozilla.cloudflare-dns.com/dns-query
user_pref('network.trr.excluded-domains', 'ktn.one, nie.moe, dab-komodo.ts.net'); // null
user_pref('network.trr.mode', 3); // ¯\_(ツ)_/¯
user_pref('network.trr.uri', 'https://dns10.quad9.net/dns-query'); // https://mozilla.cloudflare-dns.com/dns-query

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ notification.                                                        ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Allow notifications
user_pref('notification.feature.enabled', false); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ permissions.                                                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('permissions.default.desktop-notification', 2); // ¯\_(ツ)_/¯
user_pref('permissions.default.microphone', 2); // ¯\_(ツ)_/¯
user_pref('permissions.default.xr', 2); // ¯\_(ツ)_/¯
user_pref('permissions.postPrompt.animate', false); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ privacy.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('privacy.donottrackheader.enabled', true); // false
user_pref('privacy.fingerprintingProtection', true); // false
user_pref('privacy.globalprivacycontrol.enabled', true); // false
user_pref('privacy.globalprivacycontrol.was_ever_enabled', true); // false
user_pref('privacy.purge_trackers.date_in_cookie_database', 0);
user_pref('privacy.sanitize.sanitizeOnShutdown', true); // false
user_pref('privacy.trackingprotection.emailtracking.enabled', true); // false
user_pref('privacy.trackingprotection.enabled', true); // false
user_pref('privacy.trackingprotection.socialtracking.enabled', true); // false
user_pref('privacy.userContext.enabled', true); // false
user_pref('privacy.userContext.ui.enabled', true); // false

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ reader.                                                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('reader.color_scheme', 'light'); // ¯\_(ツ)_/¯
user_pref('reader.font_size', 8); // ¯\_(ツ)_/¯
user_pref('reader.line_height', 3); // ¯\_(ツ)_/¯

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ uc.                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('uc.tweak.disable-drag-space', false); // true
user_pref('uc.tweak.hide-tabs-bar', false); // true

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ ui.                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('ui.systemUsesDarkTheme', 0); // ¯\_(ツ)_/¯

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ xpinstall.                                                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

user_pref('xpinstall.signatures.required', false); // true
