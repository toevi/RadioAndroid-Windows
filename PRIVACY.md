# Privacy Policy – RadioAndroid for Windows

**Last updated:** [DATE OF PUBLICATION] — DRAFT 29 October 2026 for the Microsoft Store edition, not yet approved

This policy covers **RadioAndroid for Windows**, distributed through the Microsoft Store, and lives on the
app's page: <https://toevi.github.io/RadioAndroid-Windows/>.
The Android app has its own policy: <https://toevi.github.io/Android-Radio-privacy-policy/>.

RadioAndroid for Windows is the desktop version of RadioAndroid, an internet radio player for
Windows 11. This policy explains what it does with your data. The short version is the same as
on the phone: **the app does not collect, store or share any personal data, and it has no user
accounts, no advertising and no analytics.**

## 1. Data the app collects

**None.** RadioAndroid for Windows does not collect or transmit any personal data. There are no user
accounts, no registration and no login. The app contains no advertising, analytics or crash-reporting
component.

Windows itself may send crash reports to Microsoft (Windows Error Reporting) according to your Windows
privacy settings. The app does not control or receive them.

## 2. Data stored on your computer

Everything the app saves stays on your computer and is never uploaded anywhere:

| What | Where |
|---|---|
| Your station list (name and stream address of each station) and your settings: equalizer, skins, VU meter mode, favourites, theme, window and list preferences | the app's own folder that Windows creates for it: `%LOCALAPPDATA%\Packages\<app package>\LocalState` |
| Cached cover art and station logos, and a list of logo addresses already looked up | `%LOCALAPPDATA%\Packages\<app package>\LocalCache` |
| A diagnostic log, **only if you switch it on** (see section 5) | `%LOCALAPPDATA%\Packages\<app package>\LocalCache\logs` |
| Playlists, equalizer presets and skins you save or export, so you can copy or share them yourself | `Documents\RadioAndroid\PLS`, `EQ`, `Skins` |

**Uninstalling** removes the program **together with your station list, settings, cache and log** —
Windows deletes the app's own folder. Playlists, equalizer presets and skins in `Documents\RadioAndroid`
stay. To keep your stations, save them as a playlist (PLS) before uninstalling and load it again later.
You can delete the `Documents\RadioAndroid` folder yourself at any time.

## 3. Internet connections the app makes

The app connects to the internet in order to play radio and to show cover art and station logos. No
personal data is sent in any of these requests.

| Destination | When | What is sent |
|---|---|---|
| The radio station's own server (the stream address of the station) | While a station is playing | A standard media stream request. A second, short request to the same address reads the "now playing" title the station broadcasts. |
| Apple iTunes Search API (`itunes.apple.com`) | When the station reports the currently playing track | The artist and title of that track, to look up the album cover. |
| Deezer API (`api.deezer.com`) | Fallback, when iTunes has no match for the track | The artist and title of that track. |
| radio-browser.info | When a station on your list has no logo yet | The station name, to look up its logo. |
| AudioAddict / RadioTunes API (`api.audioaddict.com`) | When looking up a station logo; the list is downloaded once and kept in the cache | Nothing but the request for the public channel list. |
| The server that holds a logo or cover image (for example the station's website, Wikimedia, Apple's or Deezer's image servers, `cdn-images.audioaddict.com`) | When a logo or cover found above is downloaded for the first time | A request for that image. It is then kept in the cache (section 2). |

These requests contain no identifiers, no account information and nothing about you — only the name of
a song or a station. As with every internet connection, each server can see your computer's IP address;
their own privacy policies apply to what they do with the requests they receive.

Some services require every client to name itself, so the requests carry a fixed description of the
app: `RadioAndroid/6 (tomek.maselko@gmail.com)` for logo and station-title lookups,
`RadioAndroid/<version> (Windows; +https://toevi.github.io/RadioAndroid-Windows/)` for cover lookups and
`RadioAndroid/1.0 (Windows)` for image downloads. The e-mail address is the developer's contact address
from section 9. This description is the same for everyone and carries nothing that identifies you.

The app opens web pages in your own browser **only when you click a link**: the project page
(`toevi.github.io/RadioAndroid-Windows`), the two donation pages on the coffee page (`buycoffee.to`,
`buymeacoffee.com` — voluntary, they unlock nothing in the app), the station directory `fmstream.org`, Google Play (the Android
version), and the source-code pages of the open-source components named in the app's licence information. What happens there is covered by
those sites' own policies.

## 4. Windows integration

- **Media controls.** The station name, track title and cover are passed to the Windows media controls,
  so that media keys, the volume flyout and the lock screen can show and control playback. This stays
  on your computer and its connected devices; nothing is sent to the developer.
- **Notification area.** The tray icon's tooltip shows the station and the track.
- **VU meter.** To show the real level of the music, the app asks Windows for a copy of the sound
  **it plays itself** - only its own audio, never other programs and never the microphone - and
  measures it in memory, a fraction of a second at a time. Nothing is recorded, saved or sent anywhere.
- **No special permissions.** The Microsoft Store installs the app for your Windows user, without
  administrator rights. It runs as a desktop app with full access to your user account (Windows calls
  this "full trust"), which it needs to run its audio engine, show the tray icon and read and write
  your playlists in `Documents\RadioAndroid`; it installs no service. It does not start with Windows
  unless you turn on **Start with Windows** in Settings: then Windows enables the app's startup entry
  (shown in Task Manager under Startup apps), and turning the switch off or uninstalling the app
  removes it.
- **Microsoft Store.** Microsoft gives the developer anonymous, aggregated statistics through its
  Partner Center — for example the number of installs and crash reports collected by Windows — under
  Microsoft's own privacy statement. The app itself adds nothing to them. It does not access your location, contacts, camera, microphone, or files
  outside the folders listed in section 2 and the files you open yourself.

## 5. Diagnostic log

The app writes **no log file** unless you ask for one. To help find a fault, create an empty file named
`DIAG` in `Documents\RadioAndroid` and restart the app; from then on it writes
`radio.log` in the log folder named in section 2. Deleting `DIAG` switches logging off again at the next
start.

When it is on, the log holds technical events (connection state, reconnects, errors), the names and
stream addresses of the stations you play and the titles of the tracks they broadcast — that is
listening history, which is exactly why it is off by default. The log is limited to about 5 MB; when it
is full it is renamed to `radio.1.log` and a new one is started, so at most two files exist. It is
**never uploaded**: you decide whether to send it to anyone. You can delete it at any time.

## 6. Children

The app is not directed at children and collects no data from anyone, including children.

## 7. Content responsibility

The developer does not host, control or curate any stream and is not responsible for the content the
stations broadcast. On first start the app adds a few example stations (SomaFM channels and France
Musique), whose broadcasters make these streams publicly available; you may delete them. All other
stations you add yourself. Please respect the copyright laws in your country.

## 8. Changes to this policy

If the app's features change, this Privacy Policy will be updated accordingly. The date at the top
shows its latest version.

## 9. Contact

If you have any questions about this Privacy Policy, you can contact the developer:

- Developer: Tomasz Masłowski
- Email: tomek.maselko@gmail.com
