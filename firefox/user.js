// ╔══════════════════════════════════════════════════════════════════════╗
// ║ Firefox user.js                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ browser.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Display warning when opening about:config
// DEFAULT: true
user_pref('browser.aboutConfig.showWarning', false);

// Restore default bookmarks
// DEFAULT: true
user_pref('browser.bookmarks.restore_default_bookmarks', false);

// Show mobile bookmarks
// DEFAULT: true
user_pref('browser.bookmarks.showMobileBookmarks', false);

// Backspace key behavior
user_pref('browser.backspace_action', 0);

// Blink tag or text-decoration: blink
// DEFAULT: false
user_pref('browser.blink_allowed', true);

// Press and hold Q to quit the browser
// DEFAULT: true
user_pref('browser.warnOnQuitShortcut', false);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ extensions.                                                          ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Autofill addresses
// DEFAULT: true
user_pref('extensions.formautofill.addresses.enabled', false);

// Autofill credit cards
// DEFAULT: true
user_pref('extensions.formautofill.creditCards.enabled', false);

// Pocket enabled
// DEFAULT: true
user_pref('extensions.pocket.enabled', false);

// Recommended Add-ons in about:addons
// DEFAULT: true
user_pref('extensions.htmlaboutaddons.recommendations.enabled', false);

// Translations disabled
// DEFAULT: true
user_pref('extensions.translations.disabled', false);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ font.                                                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Default font
// DEFAULT: serif
user_pref('font.default.x-western', 'san-serif');

// Minimum font size
// DEFAULT: 9
user_pref('font.minimum-size.x-western', 11);

// monospace font
// DEFAULT: Courier New
user_pref('font.name.monospace.x-western', 'Comic Code Ligatures');

// san-serif font
// DEFAULT: Arial
user_pref('font.name.sans-serif.x-western', 'SF Pro');

// serif font
// DEFAULT: Georgia
user_pref('font.name.serif.x-western', 'New York');

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ geo.                                                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Geolocation enabled
// DEFAULT: true
user_pref('geo.enabled', false);

// Geolocation provider to use
// DEFAULT:
user_pref('geo.wifi.uri', '');

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ image.                                                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

// JPEG-XL support
// DEFAULT: false
user_pref('image.jxl.enabled', true);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ middlemouse.                                                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Paste with middlemouse click
// DEFAULT:
user_pref('middlemouse.paste', true);

// Scroll with middlemouse
// DEFAULT:
user_pref('middlemouse.scrollbarPosition', true);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ network.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Disable DNS pre-fetching
// DEFAULT: false
user_pref('network.dns.disablePrefetch', true);

// DEFAULT: true
user_pref('network.predictor.enabled', false);

// DEFAULT: true
user_pref('network.prefetch-next', false);

// DEFAULT: null
user_pref('network.trr.custom_uri', 'https://dns10.quad9.net/dns-query');

// DEFAULT: null
user_pref('network.trr.excluded-domains', 'ktn.one, nie.moe, dab-komodo.ts.net');

// DEFAULT: 
user_pref('network.trr.mode', 3);

// DEFAULT: https://mozilla.cloudflare-dns.com/dns-query
user_pref('network.trr.uri', 'https://dns10.quad9.net/dns-query');

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ notification.                                                        ║
// ╚══════════════════════════════════════════════════════════════════════╝

// Allow notifications
// DEFAULT: true
user_pref('notification.feature.enabled', false);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ permissions.                                                         ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT:
user_pref('permissions.default.desktop-notification', 2);

// DEFAULT:
user_pref('permissions.default.microphone', 2);

// DEFAULT:
user_pref('permissions.default.xr', 2);

// DEFAULT: true
user_pref('permissions.postPrompt.animate', false);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ privacy.                                                             ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT: false
user_pref('privacy.donottrackheader.enabled', true);

// DEFAULT: false
user_pref('privacy.fingerprintingProtection', true);

// DEFAULT: false
user_pref('privacy.globalprivacycontrol.enabled', true);

// DEFAULT: false
user_pref('privacy.globalprivacycontrol.was_ever_enabled', true);

// DEFAULT:
user_pref('privacy.purge_trackers.date_in_cookie_database', 0);

// DEFAULT: false
user_pref('privacy.sanitize.sanitizeOnShutdown', true);

// DEFAULT: false
user_pref('privacy.trackingprotection.emailtracking.enabled', true);

// DEFAULT: false
user_pref('privacy.trackingprotection.enabled', true);

// DEFAULT: false
user_pref('privacy.trackingprotection.socialtracking.enabled', true);

// DEFAULT: false
user_pref('privacy.userContext.enabled', true);

// DEFAULT: false
user_pref('privacy.userContext.ui.enabled', true);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ reader.                                                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT:
user_pref('reader.color_scheme', 'light');

// DEFAULT:
user_pref('reader.font_size', 8);

// DEFAULT:
user_pref('reader.line_height', 3);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ uc.                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT: true
user_pref('uc.tweak.disable-drag-space', false);

// DEFAULT: true
user_pref('uc.tweak.hide-tabs-bar', false);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ ui.                                                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT:
user_pref('ui.systemUsesDarkTheme', 0);

// ╔══════════════════════════════════════════════════════════════════════╗
// ║ xpinstall.                                                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

// DEFAULT: true
user_pref('xpinstall.signatures.required', false);
