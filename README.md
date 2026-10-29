# RadioAndroid for Windows

Internet radio for Windows 11 — the desktop edition of **RadioAndroid** for Android. Your own station
list, a 10-band equalizer, the song that is playing with its album cover, skins, a VU meter that measures
the real sound, and a classic hi-fi look called **Vintage**. Free, no account, no ads.

## Get it

| Platform | Where |
|---|---|
| **Windows 11** (x64) | [![Microsoft Store — coming soon](https://img.shields.io/badge/Microsoft_Store-coming_soon-0078D4?style=for-the-badge&logo=microsoft&logoColor=white)](#get-it) |
| **Android** (phone, tablet, Android Auto) | [![Get it on Google Play](https://img.shields.io/badge/Google_Play-get_it-34A853?style=for-the-badge&logo=googleplay&logoColor=white)](https://play.google.com/store/apps/details?id=com.tmfgroup.radioandroid) |

RadioAndroid for Windows is distributed **only through the Microsoft Store**. A copy from anywhere else
may have been altered. Website: <https://toevi.github.io/RadioAndroid-Windows/>

## What it is for

Listening to internet radio on a PC the way you listen on the phone: you add the stations you like by
their stream address, the app plays them, keeps the connection alive and shows what is on air. Close the
window and the radio keeps playing from the notification area.

- Plays Shoutcast / Icecast and HLS streams, reconnects by itself when the stream or the network drops.
- 10-band equalizer with your own presets; skins; Modern and **Vintage** player styles.
- Song title and album cover; sleep timer; media keys, Windows media controls and keyboard shortcuts.
- Playlists (PLS), equalizer presets and skins are file-compatible with the Android app, both ways.

**Stations are yours to add.** On first start the list holds a few examples (SomaFM and France Musique)
so there is something to play straight away. The app hosts no streams of its own.

Everything technical — how the engine, the reconnect and the equalizer work — is described on the
Android app's page: <https://toevi.github.io/RadioAndroidPro/>. The Windows edition uses the same engine
(libvlc) and the same file formats; it leaves out what only makes sense on a phone (Android Auto,
Bluetooth remote control).

> **This repository is the app's home page and its documents — there is no source code here.**

## Licence and privacy

- **[PRIVACY.md](PRIVACY.md)** — privacy policy: the app collects no personal data, has no accounts,
  advertising or analytics.
- **Licence terms** are shown in the Microsoft Store before you install. The app is free for private
  use; it is not for sale or resale.
- **[THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt)** — the open-source components the app uses and
  their licences: **libvlc** (LGPL-2.1), LibVLCSharp, .NET MAUI and the Community Toolkit (MIT), Material
  Icons (Apache-2.0), the Doto font (SIL OFL-1.1).

## Author

Tomasz Masłowski (**toevi**) — a private, one-person project. If you would like to support it, the app's
coffee page and the website show how; it is entirely optional and unlocks nothing.

## Reporting a problem

Open an **[issue](../../issues/new/choose)** — say which app version and Windows version you have and
what happened; a screenshot helps. This page is public, so anything private goes by e-mail instead:
tomek.maselko@gmail.com.
