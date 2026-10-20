# Muhammad Bilal & Fatima Waheed — Dark Rose-Gold Wedding Invitation

The original **royal-prestige** wedding invitation template, customized for
Muhammad Bilal & Fatima Waheed. Same design, same code — only the details,
photos and music changed.

Royal blush & gold theme: video envelope opening ("Tap to open"),
animated couple names entrance, bilingual English/Urdu toggle, golden
heart scratch-to-reveal date (petals & confetti burst), Google/Apple
save-the-date, fading gallery + lightbox, live countdown, program
timeline, venues with embedded maps, dress code, transportation,
accommodation, gifts, RSVP form and floral closing. Background music
plays on loop after tapping "Tap to open", with a mute/unmute toggle.
Fonts are local (`public/fonts`), no paid APIs needed.

## Events

- **Mehndi** — Saturday, 16 January 2027, 7:00 PM onwards — Canel Home Hall
- **Barat** — Sunday, 17 January 2027, 7:00 PM onwards — Lubaba Marquee

## Start locally

```sh
npm install
npm run dev -- --port 3005
```

Open http://localhost:3005.

## Production build

```sh
npm run build
npm start
```

## Deploy on Vercel (free)

**Naya repository banayein** (purane wale me mix na karein):

1. GitHub par naya repository banayein (masalan `bilal-fatima-dark`).
2. Is zip ko unzip karein, **`bilal-fatima-dark` folder KHOL kar** andar ki
   **saari files/folders** (Ctrl+A) GitHub web upload se upload karein —
   folder ko bahar se drag **mat** karein.
3. https://vercel.com → **Add New → Project** → naya repository
   **Import** karein. Root Directory `./` (default) rehne dein.
4. **Deploy** — 2-3 minute me live URL mil jayega.

## Apni details badalna

Saari details **ek hi file** mein hain: `src/lib/wedding.ts`
(naam, dates, venues, timeline, RSVP contacts, Urdu text).
File save karein, GitHub par upload karein — Vercel khud redeploy kar dega.

- **Photos:** `public/images/` — `couple.png`, `slide-2/3/4.jpg`,
  `envelope.jpg` (poster).
- **Opening video:** `public/media/royal-opening.mp4` — envelope image se
  bana hua 6-second slow-zoom clip. Apni video ho to isi naam se replace
  kar dein.
- **Background song:** `public/media/wedding-song.mp3` — original
  music-box loop (koi copyright issue nahi).
- **RSVP phone numbers:** `src/lib/wedding.ts` mein `rsvpContacts` mein
  abhi placeholder numbers (`+92 300 0000000`) hain — asli numbers likhein.
- **Venue spelling:** "Canel Home Hall" ki spelling client se confirm kar
  lein (kahin "Canal" to nahi).

## RSVP note

RSVP jawab `/api/rsvp` par validate ho kar server ki `.data/rsvps.ndjson`
file mein save hote hain. Vercel ke serverless function par ye file
**permanent nahi rehti**. Permanent RSVPs ke liye database (Vercel KV /
Postgres) ya Google Sheet connect kar lein.
