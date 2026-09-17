# RadioAndroid for Windows

Internet radio for Windows 10 and 11 — a desktop port of **RadioAndroid PRO** for Android. One engine
(libvlc), your own station list, a 10-band equalizer, ICY metadata with cover art, skins and a VU
meter, a sleep timer, a tray icon and media keys.

> ### This is a port of the Android app
> The original is **RadioAndroid PRO** for Android: <https://toevi.github.io/RadioAndroidPro/>
> (Google Play, screenshots, full description). The Windows version keeps the same engine, the same
> look and the same file formats — playlists, equalizer presets and skins move between the phone and
> the PC in both directions. What it does **not** carry over are the parts that only make sense on a
> phone: Android Auto and Bluetooth remote control. If you are new here, start with the Android page;
> it explains what the radio is and who it is for.

> **This repository holds the download and the documents only — there is no source code here.**
> Nothing to look for in the Code tab.

---

## Download

Grab the newest package from **[Releases](../../releases)**. Each release has:

| File | What it is |
|---|---|
| `RadioAndroid-for-Windows-Setup.exe` | the installer, signed with the certificate `CN=tmfgroup` |
| `RadioAndroid-for-Windows-Setup.zip` | the same installer in a zip, for browsers that refuse to download an `.exe` |
| `RadioAndroid-for-Windows-Setup.exe.sha256` | one line: the SHA-256 of the installer |
| `SHA256SUMS.txt` | the SHA-256 of every file in the package (381 of them) |

The hash of each release is also written in its release notes, so it stays in this repository's
history.

**Requirements:** Windows 10 version 2004 (build 19041) or Windows 11, 64-bit. About 250 MB on disk.

## Installing

1. If you took the zip: right-click it, **Properties → Unblock**, then extract. That keeps Windows
   from flagging the installer and it starts without a warning.
2. Windows may show a blue **"Windows protected your PC"** screen. It is not a virus warning — the app
   is signed with my own certificate, which Microsoft does not know, and a new file has no reputation
   yet. Click **More info → Run anyway**.
3. The installer asks for **administrator rights once**, because it installs into
   `C:\Program Files\RadioAndroid for Windows`. The app itself then runs with no special privileges.

Installing again over an existing copy updates it in place; the installer closes a running copy first,
even when the radio is sitting in the tray.

## Verifying what you downloaded

Optional, and only if you care to:

```powershell
Get-FileHash "$HOME\Downloads\RadioAndroid-for-Windows-Setup.exe" -Algorithm SHA256
```

Compare the result with the hash in the release notes. A single changed byte gives a completely
different hash, and it also breaks the signature — which you can check in **Properties → Digital
Signatures**. The signature says the file came from me and was not modified afterwards; because the
certificate is self-signed, Windows will call the root untrusted, and that is expected.

## What it does

- Plays MP3/ICY, AAC and HLS streams through **libvlc**, with a reconnect loop and a watchdog that
  notices a stream that went silent without reporting an error.
- **10-band equalizer** with your own presets, a **VU meter** and skins.
- **ICY metadata** with cover art looked up online for the track that is playing.
- **Sleep timer**, **tray icon** with play/stop and station switching, **media keys** and keyboard
  shortcuts (`Ctrl+P`, `Ctrl+←/→`, `Ctrl+1/2/3`, `F1`; the full list is in the app's Help).
- Import and export of **PLS playlists**; playlists, equalizer presets and skins are file-compatible
  with the Android version, in both directions.
- Closing the window with **X** only hides it — the radio keeps playing and is controlled from the
  tray. **Exit** in the tray menu really quits. This is deliberate, the same as on the phone.

**Stations are yours to add** — nothing is preloaded, and the app hosts nothing.

## What it does not do

No autostart, no background service, no telemetry, no analytics, no accounts, no advertising. It
writes **no log file** unless you ask for one. Nothing is uploaded anywhere: the only connections it
makes are to the stations you add and to the public catalogues it uses to find cover art. There is no
Android Auto and no Bluetooth remote control — those parts of the phone app were deliberately left out.

## Your files

| What | Where | On uninstall |
|---|---|---|
| Playlists, equalizer presets, skins | `Documents\RadioAndroid\PLS`, `EQ`, `Skins` | **kept** |
| Station list and settings | `%LOCALAPPDATA%` | **kept** |
| The program itself | `C:\Program Files\RadioAndroid for Windows` | removed in full |

## Licence and third-party software

- **[EULA.txt](EULA.txt)** — the licence agreement for the binary. The installer shows it and will not
  install anything until it is accepted. Free to use, private use, not for sale or resale.
- **[THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt)** — the components the app ships with and their
  licences: **libvlc** (LGPL-2.1), LibVLCSharp, .NET MAUI and the Community Toolkit (MIT), Material
  Icons (Apache-2.0). Sources for libvlc: <https://www.videolan.org/vlc/> and
  <https://download.videolan.org/pub/videolan/vlc/>.
- **[PRIVACY.md](PRIVACY.md)** — the privacy policy.

The app is free. If you like it, there are two links inside it for buying me a coffee — entirely
optional, and nothing in the app depends on it.

## Reporting a problem

Say what you did and what happened; a screenshot helps. If the fault needs proof, the app can write a
diagnostic log on request — ask me and I will send the one-liner that turns it on.
