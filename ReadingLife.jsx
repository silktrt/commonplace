// LCMS One-Year Lectionary data
// Keyed by liturgical season and week

export const LITURGICAL_COLORS = {
  advent: "#4A3E8C",       // violet
  christmas: "#F5F0E8",    // white (gold border)
  epiphany: "#1D6B4F",     // green
  lent: "#4A3E8C",         // violet
  holyweek: "#8B1A1A",     // red/scarlet
  easter: "#F5F0E8",       // white
  pentecost: "#8B1A1A",    // red
  trinity: "#1D6B4F",      // green
};

export const TODAY = {
  season: "trinity",
  week: 2,
  weekday: "Wednesday",
  liturgicalName: "The Second Wednesday after Trinity",
  seasonName: "Season after Pentecost · Ordinary Time",
  propers: "LSB One-Year · Green · Week of Trinity 2",
  color: "#1D6B4F",

  morningPrayer: {
    text: "I thank You, my heavenly Father, through Jesus Christ, Your dear Son, that You have kept me this night from all harm and danger; and I pray that You would keep me this day also from sin and every evil, that all my doings and life may please You.",
    source: "Luther's Morning Prayer · Small Catechism",
  },

  collect: {
    text: "O God, You have prepared for those who love You good things that surpass all understanding. Pour into our hearts such love toward You that we, loving You in all things and above all things, may obtain Your promises, which exceed all that we can desire;",
    conclusion: "through Jesus Christ, Your Son, our Lord, who lives and reigns with You and the Holy Spirit, one God, now and forever. Amen.",
    source: "Collect for Trinity 2 · Lutheran Service Book",
  },

  psalm: {
    number: 34,
    title: "Psalm 34",
    subtitle: "I will bless the Lord at all times",
    verses: [
      { num: "1", text: ["I will bless the ", "LORD", " at all times; his praise shall continually be in my mouth."] },
      { num: "2", text: ["My soul makes its boast in the ", "LORD", "; let the humble hear and be glad."] },
      { num: "3", text: ["Oh, magnify the ", "LORD", " with me, and let us exalt his name together!"] },
      { num: "4", text: ["I sought the ", "LORD", ", and he answered me and delivered me from all my fears."] },
      { num: "8", text: ["Oh, taste and see that the ", "LORD", " is good! Blessed is the man who takes refuge in him!"] },
    ],
    gloria: true,
    source: "English Standard Version",
  },

  scripture: {
    reference: "Luke 14:16–24",
    heading: "The Parable of the Great Banquet",
    text: "A man once gave a great banquet and invited many. And at the time for the banquet he sent his servant to say to those who had been invited, \"Come, for everything is now ready.\" But they all alike began to make excuses.",
    version: "ESV · Gospel for Trinity 2",
  },

  epistle: {
    reference: "1 John 3:13–18",
    heading: "Love in Deed and Truth",
    text: "Do not be surprised, brothers, that the world hates you. We know that we have passed out of death into life, because we love the brothers. Whoever does not love abides in death.",
    version: "ESV · Epistle for Trinity 2",
  },

  commemoration: {
    calendarNote: "LCMS Calendar · June 10",
    name: "St. Ephrem of Syria, Deacon (c. 306–373)",
    glyph: "✦",
    description: "Theologian, poet, and hymnwriter of the ancient Syrian church. He composed hymns in verse to carry truth where argument could not reach, believing beauty and song were vessels for doctrine. Called the Harp of the Holy Spirit.",
  },

  poem: {
    title: "The Annunciation",
    author: "Malcolm Guite",
    collection: "Sounding the Seasons (2012)",
    note: "Guite's corona of sonnets on the liturgical year — fitting daily alongside the office.",
    lines: `We see so little, stayed on surfaces,
We calculate the cost and weight of things
But do not feel the gravity of grace,
The feather-touch that opens out our wings.

Be it unto me according to thy word.
Attended, though unseen, by all the host,
She heard what no-one else could overhear,
The music of a note beyond all note.`,
  },

  tolkienPassage: {
    label: "Sub-creation",
    text: "In the beginning Ilúvatar made the Ainur of his thought; and they made a great Music before him. In this Music the World was begun…",
    source: "The Ainulindalë · The Silmarillion",
  },

  quotation: {
    text: "The only just literary critic is Christ, who admires more than does any man the unity and variety of his creation.",
    source: "J.R.R. Tolkien · letter to C.S. Lewis",
  },

  intentions: [
    "Morning and evening prayer from the office",
    "Read twenty pages of The Silmarillion",
    "Memorize the next stanza of Guite's Annunciation sonnet",
    "Family supper — no phones at the table",
  ],
};
