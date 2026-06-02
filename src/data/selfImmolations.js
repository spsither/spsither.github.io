// Record of Tibetan self-immolation protests.
//
// Aggregate figures are drawn from the International Campaign for Tibet (ICT)
// fact sheet at https://savetibet.org/tibetan-self-immolations/ (last updated
// 6 April 2022). The named cases below are a *partial* memorial of widely
// documented individuals — the complete, continually-updated record is
// maintained by ICT. Verify and update against their source before publishing.

export const stats = {
  total: 159,
  exile: 10,
  men: 131,
  women: 28,
  died: 127,
  minors: 26,
  kirti: 25,
  since: 2009,
  source: 'https://savetibet.org/tibetan-self-immolations/',
  sourceLabel: 'International Campaign for Tibet',
}

// What the self-immolators called for, again and again.
export const demands = [
  'The return of the Dalai Lama to Tibet',
  'Freedom and independence for Tibet',
  'Release of the Panchen Lama and political prisoners',
  'Religious freedom and protection of Tibetan culture',
  'An end to the occupation',
]

// A partial memorial of documented cases. `outcome`: 'died' | 'survived' |
// 'unknown' (fate unconfirmed after detention).
export const cases = [
  {
    name: 'Tapey',
    date: '27 Feb 2009',
    age: 20,
    role: 'Monk, Kirti Monastery',
    place: 'Ngaba, Amdo',
    outcome: 'survived',
    note: 'The first self-immolation inside Tibet. Shot by police as he burned; he survived with severe injuries.',
  },
  {
    name: 'Phuntsog',
    date: '16 Mar 2011',
    age: 20,
    role: 'Monk, Kirti Monastery',
    place: 'Ngaba, Amdo',
    outcome: 'died',
    note: 'His death on the third anniversary of the 2008 protests sparked the wave of self-immolations that followed.',
  },
  {
    name: 'Tsewang Norbu',
    date: '15 Aug 2011',
    age: 29,
    role: 'Monk, Nyitso Monastery',
    place: 'Tawu, Kham',
    outcome: 'died',
    note: 'Drank and poured petrol over himself, shouting for Tibetan freedom and the long life of the Dalai Lama.',
  },
  {
    name: 'Tenzin Wangmo',
    date: '17 Oct 2011',
    age: 20,
    role: 'Nun, Dechen Chökorling Nunnery',
    place: 'Ngaba, Amdo',
    outcome: 'died',
    note: 'The first woman to self-immolate in the protests.',
  },
  {
    name: 'Tenzin Phuntsog',
    date: '1 Dec 2011',
    age: 46,
    role: 'Former monk, Karma Monastery',
    place: 'Chamdo, Kham',
    outcome: 'died',
  },
  {
    name: 'Sonam Wangyal (Lama Sobha)',
    date: '8 Jan 2012',
    age: 42,
    role: 'Respected lama',
    place: 'Darlag, Golog',
    outcome: 'died',
    note: 'Left a recorded testament calling on Tibetans to keep their unity and culture alive.',
  },
  {
    name: 'Nangdrol',
    date: '19 Feb 2012',
    age: 18,
    role: 'Layman',
    place: 'Ngaba, Amdo',
    outcome: 'died',
  },
  {
    name: 'Jamphel Yeshi',
    date: '26 Mar 2012',
    age: 27,
    role: 'Tibetan in exile',
    place: 'New Delhi, India',
    outcome: 'died',
    note: 'Ran in flames through a protest ahead of a state visit by China’s president — an image seen around the world.',
  },
  {
    name: 'Tamding Thar',
    date: '15 Jun 2012',
    age: 64,
    role: 'Nomad',
    place: 'Tsoe, Amdo',
    outcome: 'died',
  },
  {
    name: 'Sangay Gyatso',
    date: '7 Oct 2012',
    age: 27,
    role: 'Father of two',
    place: 'Tsoe, Amdo',
    outcome: 'died',
  },
  {
    name: 'Kunchok Wangmo',
    date: '13 Mar 2013',
    age: 30,
    role: 'Nomad',
    place: 'Dzoege, Amdo',
    outcome: 'died',
  },
  {
    name: 'Tamding Tso',
    date: '24 Nov 2013',
    age: 23,
    role: 'Mother',
    place: 'Tsoe, Amdo',
    outcome: 'died',
  },
]
