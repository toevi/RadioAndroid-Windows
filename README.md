# RadioAndroid for Windows

Internet radio for Windows 11 — a desktop port of **RadioAndroid** for Android. One engine
(libvlc), your own station list, a 10-band equalizer, ICY metadata with cover art, skins and a VU
meter, a sleep timer, a tray icon and media keys.

> ### This is a port of the Android app
> The original is **RadioAndroid** for Android: <https://toevi.github.io/RadioAndroidPro/>
> (Google Play, screenshots, full description). The Windows version keeps the same engine, the same
> look and the same file formats — playlists, equalizer presets and skins move between the phone and
> the PC in both directions. What it does **not** carry over are the parts that only make sense on a
> phone: Android Auto and Bluetooth remote control. If you are new here, start with the Android page;
> it explains what the radio is and who it is for.

> **This repository holds the download and the documents only — there is no source code here.**
> Nothing to look for in the Code tab.

---

## Download

Grab the package from **[Releases](../../releases)**. There is always **exactly one release** there:
each new version replaces the previous one, and installing it over an older copy updates that copy in
place. The release has:

| File | What it is |
|---|---|
| `RadioAndroid-for-Windows-Setup.zip` | **the download** — the installer inside a zip |
| `RadioAndroid-for-Windows-Setup.zip.sha256` | one line: the SHA-256 of the zip |
| `SHA256SUMS.txt` | the SHA-256 of every file the installer puts on your disk |

The hash of the zip is also written in the release notes, so it stays in this repository's history.

**Requirements:** Windows 11, 64-bit. About 250 MB on disk. Windows 10 is not supported: the installer
says so and stops before installing anything.
On the **"N" editions** of Windows (sold without media features), AAC stations need Microsoft's free
*Media Feature Pack*; MP3 and the rest play without it.

## The installer is not code-signed — on purpose

A code-signing certificate from a recognised authority costs money every year, and this app is free
and earns nothing. So the installer is **not signed**, and Windows will treat it as a file from an
unknown publisher. That is a statement about **who paid for a certificate**, not about what is in the
file. What protects you instead is the **SHA-256 hash**: it proves that the file you downloaded is,
byte for byte, the one published here (see *Verifying* below). Releases in this repository are
immutable — once published, a file cannot be swapped for another, not even by me.

## Installing

1. **Download** the zip from Releases. If your browser says the file "isn't commonly downloaded",
   choose **Keep** (in Edge: **… → Keep → Show more → Keep anyway**).
2. **Unblock the zip before extracting it:** right-click it → **Properties** → tick **Unblock** at the
   bottom → **OK**. Then extract. This removes the "downloaded from the internet" mark, and the
   installer starts without the blue warning screen.
3. If you skipped step 2, Windows shows a blue **"Windows protected your PC"** screen. It is not a virus
   warning: the file is new and unsigned, so Microsoft has no reputation for it yet. Click
   **More info → Run anyway**.
4. Windows asks whether to let an app from an **unknown publisher** make changes — **Yes**. The
   installer needs administrator rights once, because it installs into
   `C:\Program Files\RadioAndroid for Windows`. The app itself then runs with no special privileges.
5. Read and **accept the licence** in the installer, then **Install**. The installer never runs
   silently: nothing is installed without the licence page.

Installing again over an existing copy updates it in place; the installer closes a running copy first,
even when the radio is sitting in the tray. Every new version is a new file, so steps 1–4 come back
with each update.

### Windows 11: Smart App Control

On some Windows 11 PCs — usually freshly installed ones — **Smart App Control** is switched on. It
blocks unsigned programs outright: there is **no "Run anyway"** and no exception for one app. If the
installer is blocked with a Smart App Control message:

1. Open **Windows Security → App & browser control → Smart App Control settings** and select **Off**.
2. Install the app.

Since the April 2026 update for Windows 11 25H2, Smart App Control can be switched back on later
without reinstalling Windows; on older builds, once switched off it stays off. Only do this for a file
whose hash you have checked.

## Verifying what you downloaded

Recommended — it takes ten seconds. In PowerShell:

```powershell
Get-FileHash "$HOME\Downloads\RadioAndroid-for-Windows-Setup.zip" -Algorithm SHA256
```

Compare the result with the hash in the release notes, character by character. A single changed byte
gives a completely different hash. If it does not match, **do not run the file** — download it again
from this page and tell me.

The hash proves the file is the one published here; this page, served by GitHub over HTTPS, is what
proves where it came from. The installer carries **no digital signature**, so **Properties → Digital
Signatures** has nothing to show — that is expected.

## What it does

- Plays MP3/ICY, AAC and HLS streams through **libvlc**, with a reconnect loop and a watchdog that
  notices a stream that went silent without reporting an error.
- **10-band equalizer** with your own presets, and skins.
- A **VU meter that measures the sound** the app plays — five bands, left and right separately, following
  the volume like the meters of an amplifier; five styles to choose from.
- Two **player styles**: Modern, and **Vintage** — the whole app as one piece of hi-fi equipment, with a
  dot-matrix display, brushed-metal keys in silver or black, and two needle VU meters.
- **ICY metadata** with cover art looked up online for the track that is playing.
- **Sleep timer**, **tray icon** with play/stop and station switching, **media keys** and keyboard
  shortcuts (`Ctrl+P`, `Ctrl+←/→`, `Ctrl+1/2/3`, `F1`; the full list is in the app's Help).
- Import and export of **PLS playlists**; playlists, equalizer presets and skins are file-compatible
  with the Android version, in both directions.
- Closing the window with **X** only hides it — the radio keeps playing and is controlled from the
  tray. **Exit** in the tray menu really quits. This is deliberate, the same as on the phone.

**Stations are yours to add.** On first start the list holds six examples — five SomaFM channels
(a listener-supported broadcaster that invites apps to use its streams) and France Musique (Radio
France, an HLS stream) — so there is something to play straight away. Delete them freely. The app
hosts no streams of its own.

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
  Icons (Apache-2.0), the Doto font (SIL OFL-1.1). Sources for libvlc: <https://www.videolan.org/vlc/> and
  <https://download.videolan.org/pub/videolan/vlc/>.
- **[PRIVACY.md](PRIVACY.md)** — the privacy policy.

The app is free. If you like it, there are two links inside it for buying me a coffee — entirely
optional, and nothing in the app depends on it.

## Reporting a problem

Open an **[issue](../../issues/new/choose)** — the form asks for the app version, your Windows version
and what happened; a screenshot helps. This page is public, so anything private goes by e-mail instead:
tomek.maselko@gmail.com.

If the fault needs proof, the app can write a diagnostic log on request: create an empty file named
`DIAG` in `Documents\RadioAndroid` and restart the app (details in [PRIVACY.md](PRIVACY.md), section 5).
The log lists the stations you played, so look through it before attaching it anywhere.
