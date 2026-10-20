/* ------------------------------------------------------------------
 * MUHAMMAD BILAL & FATIMA WAHEED — wedding details
 * Saari details SIRF isi file me hain. Kuch badalna ho to yahin
 * badlein, save karein, dobara build/deploy karein — bas.
 * ------------------------------------------------------------------ */

export interface TimelineEvent {
  day: string;
  time: string;
  title: string;
  urdu: string;
  note: string;
}

export interface Venue {
  tag: string;
  tagUrdu: string;
  name: string;
  nameUrdu: string;
  address: string;
  addressUrdu: string;
  mapQuery: string;
  mapUrl: string;
}

export interface RsvpContact {
  name: string;
  phone: string;
}

export const wedding = {
  groom: "Muhammad Bilal",
  groomUrdu: "محمد بلال",
  groomFamily: "",
  groomFamilyUrdu: "",
  bride: "Fatima Waheed",
  brideUrdu: "فاطمہ وحید",
  brideFamily: "",
  brideFamilyUrdu: "",

  heroIntro: "Together with their families\nrequest the honour of your presence",
  heroIntroUrdu: "اپنے اہل خانہ کے ساتھ\nآپ کی تشریف آوری کے خواستگار ہیں",

  welcome:
    "Two souls, one beautiful journey.\nJoin us as we begin our forever —\nwith your love, laughter and precious duas.",
  welcomeUrdu:
    "دو دل، ایک خوبصورت سفر۔\nہماری نئی زندگی کے آغاز میں\nاپنی محبتوں اور دعاؤں کے ساتھ شریک ہوں۔",

  // Scratch-to-reveal heart
  dateText: "16 – 17 January 2027",
  day: "Saturday & Sunday",
  time: "7:00 PM onwards",

  // Countdown + Save-the-date target (pehli taqreeb — Mehndi)
  date: "2027-01-16T19:00:00+05:00",
  venue: "Canel Home Hall",
  address: "Mehndi Venue",

  timeline: [
    {
      day: "Saturday, 16 January 2027",
      time: "7:00 PM",
      title: "Mehndi",
      urdu: "مہندی",
      note: "An evening of music, dance and vibrant celebrations at Canel Home Hall.",
    },
    {
      day: "Sunday, 17 January 2027",
      time: "7:00 PM",
      title: "Barat",
      urdu: "بارات",
      note: "The wedding ceremony and rukhsati at Lubaba Marquee.",
    },
  ] as TimelineEvent[],

  venues: [
    {
      // NOTE: "Canel" ki spelling client se confirm kar lein (kahin "Canal" to nahi)
      tag: "Mehndi",
      tagUrdu: "مہندی",
      name: "Canel Home Hall",
      nameUrdu: "کینل ہوم ہال",
      address: "Saturday, 16 January 2027 · 7:00 PM onwards",
      addressUrdu: "ہفتہ، 16 جنوری 2027 · شام 7 بجے سے",
      mapQuery: "Canel Home Hall",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Canel+Home+Hall",
    },
    {
      tag: "Barat",
      tagUrdu: "بارات",
      name: "Lubaba Marquee",
      nameUrdu: "لبابہ مارکی",
      address: "Sunday, 17 January 2027 · 7:00 PM onwards",
      addressUrdu: "اتوار، 17 جنوری 2027 · شام 7 بجے سے",
      mapQuery: "Lubaba Marquee",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lubaba+Marquee",
    },
  ] as Venue[],

  preEvents: [] as TimelineEvent[],

  transportation:
    "Ample parking is available at both venues. Guests travelling from out of town, please contact us and we will help arrange transport.",
  accommodation:
    "Out-of-town guests, please let us know in your RSVP and we will arrange comfortable accommodation near the venues.",
  gifts:
    "Your presence is the greatest gift. Should you wish to honour us with a gift, a contribution towards our new beginning would be warmly appreciated.",

  // RSVP rabta numbers — ASLI numbers yahan likhein
  rsvpContacts: [
    { name: "Bilal's Family", phone: "+92 300 0000000" },
    { name: "Fatima's Family", phone: "+92 300 0000000" },
  ] as RsvpContact[],

  lookingForward: "Muhammad Bilal & Fatima Waheed",
  lookingForwardUrdu: "محمد بلال اور فاطمہ وحید",
};
