# Privacy Policy – RadioAndroid for Windows

> **Draft, pending approval.** This is the wording prepared for the Windows version; it mirrors the
> policy of the Android app, so the two read as one product. It will be marked as in force once it is
> published at the address the licence agreement points to.

**Last updated:** [date of publication]

RadioAndroid for Windows is an internet radio player for Windows 10 and 11. This policy explains
what the app does with your data. The short version: the app does not collect, store or share any
personal data, and it has no user accounts, no advertising and no analytics.

## 1. Data the app collects

None. RadioAndroid for Windows does not collect or transmit any personal data. There are no user
accounts, no registration and no login. The app contains no advertising, analytics or
crash-reporting component.

Windows itself may send crash reports to Microsoft (Windows Error Reporting) according to your
Windows privacy settings. The app does not control or receive them.

## 2. Data stored on your computer

Everything the app saves stays on your computer and is never uploaded anywhere:

| What | Where |
|---|---|
| Your station list (name and stream address of each station), settings: equalizer, skins, VU meter mode, favourites, theme, window and list preferences | `%LOCALAPPDATA%\tmfgroup\com.tmfgroup.radioandroid.windows\Data` |
| Cached cover art and station logos, and a list of logo addresses already looked up | `%LOCALAPPDATA%\tmfgroup\com.tmfgroup.radioandroid.windows\Cache` |
| A technical log (see section 5) | `%LOCALAPPDATA%\RadioAndroid\logs\radio.log` |
| Playlists, equalizer presets and skins you save or export, so you can copy or share them yourself | `Documents\RadioAndroid\PLS`, `EQ`, `Skins` |

**Uninstalling** removes the program and nothing else. Your station list, settings, equalizer presets,
skins and playlists all stay where they are: the uninstaller never offers to delete them and never
touches `Documents\RadioAndroid` (owner's decision, 2026-09-17). You can delete those folders yourself
at any time.

## 3. Internet connections the app makes

The app connects to the internet in order to play radio and to show cover art and station logos.
No personal data is sent in any of these requests. Every server you connect to sees your computer's
IP address, as with any browser or radio app.

| Destination | When | What is sent |
|---|---|---|
| The radio station's own server (the stream address you added) | While a station is playing | A standard media stream request. A second, short request to the same address reads the "now playing" title the station broadcasts. |
| Apple iTunes Search API (itunes.apple.com) | When the stream reports the currently playing track | The artist and title of that track, to look up the album cover. |
| Deezer API (api.deezer.com) | Fallback, when iTunes has no match | The artist and title of that track. |
| radio-browser.info | When a station has no logo yet | The station name, to look up its logo. |
| Wikimedia | When the logo found is hosted there | A request for the logo image. |
| AudioAddict (api.audioaddict.com, cdn-images.audioaddict.com) | For RadioTunes / AudioAddict stations | A request for the public channel list and channel images. |

Requests to these services carry an identifier of the app and of its developer, e.g.
`RadioAndroid/6 (tomek.maselko@gmail.com)` or `RadioAndroid/0.1 (Windows; +https://toevi.github.io/RadioAndroidPro/)`,
which some services require from every client. The e-mail address is the developer's contact address from
section 9. The identifier is the same for everyone and carries nothing that identifies you.

The app opens web pages in your browser **only when you click a link**: the project page
(toevi.github.io/RadioAndroidPro), fmstream.org (station directory) and Google Play (the Android
version). What happens there is covered by those sites' own policies.

## 4. Windows integration

- **Media controls.** The station name, track title and cover are passed to Windows media controls,
  so that the media keys, the volume flyout and the lock screen can show and control playback.
  This stays on your computer and its connected devices; nothing is sent to the developer.
- **Notification area.** The tray icon's tooltip shows the station and track.
- **No special permissions.** The app runs as your normal Windows user, needs no administrator
  rights, installs no service and does not start with Windows. It does not access your location,
  contacts, camera, microphone, or files outside the folders listed in section 2 and the files you
  open yourself.

## 5. Diagnostic log

The app writes **no log file** unless you ask for one (owner's decision, 2026-09-17). To help find a
fault, create an empty file named `DIAG` in `Documents\RadioAndroid` and restart the app; from then on
it writes `%LOCALAPPDATA%\RadioAndroid\logs\radio.log`. Deleting `DIAG` switches logging off again
at the next start.

When it is on, the log holds technical events (connection state, reconnects, errors), the names and
stream addresses of the stations you play and the titles of the tracks they broadcast - that is
listening history, which is exactly why it is off by default. It is limited to about 5 MB, older
entries are rotated out, and it is **never uploaded**: you decide whether to send it. You can delete
it at any time.

## 6. Children

The app is not directed at children and collects no data from anyone, including children.

## 7. Content responsibility

You add the radio stations yourself. The developer does not host, control or curate any stream and
is not responsible for the content the stations broadcast. Please respect the copyright laws in
your country.

## 8. Changes to this policy

If the app's features change, this Privacy Policy will be updated accordingly. The date at the top
shows the latest version.

## 9. Contact

If you have any questions about this Privacy Policy, you can contact the developer:

- Developer: Tomasz Masłowski
- Email: tomek.maselko@gmail.com
