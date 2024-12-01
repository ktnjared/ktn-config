#!/bin/sh

case "$OS" in
"mac")
    FX_PROF_PATH="$HOME"/Library/Application\ Support/Firefox/Profiles
    FX_PWA_PROF_PATH="$HOME"/Library/Application\ Support/firefoxpwa/profiles
    ;;
"linux")
    FX_PROF_PATH="$HOME/.mozilla/firefox"
    ;;
esac

FX_PROFILES=$(find "$FX_PROF_PATH" -mindepth 1 -maxdepth 1 -d -name "jared*" -exec basename {} \;)

foreach profile in "$FX_PROFILES"; do
    cp Firefox/user.js "$FX_PROF_PATH"/"$profile"/user.js
done
