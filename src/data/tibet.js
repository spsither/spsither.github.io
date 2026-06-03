// Content for the Free Tibet home page: marquee slogans, key facts about the
// occupation, and a short timeline of the freedom struggle. Figures are kept
// to widely-cited, conservative numbers — update as the record demands.
import lushtibet from "../assets/lushtibet.png"
import kids from "../assets/kids.jpg"
import happymonks from "../assets/happymonks.jpg"
import showlepord from "../assets/showlepord.jpeg"
import horse from "../assets/horse.png"
import amney from "../assets/amney.jpeg"

import uprising08 from "../assets/uprising08.jpg"
import lhasa59 from "../assets/lhasa59.jpg"
import invasion from "../assets/invasion.png"
import protest from "../assets/protest.png"


export const slogans = [
  'Free Tibet',
  'བོད་རང་བཙན',
  'Truth is our only country',
  'Rangzen',
  'The struggle continues',
]

// Headline facts about the occupation and the cause.
export const facts = [
  {
    stat: '1950',
    label: 'Year the People’s Liberation Army marched into Tibet, beginning the occupation.',
  },
  {
    stat: '1959',
    label: 'The Lhasa Uprising. The 14th Dalai Lama fled into exile in India that March.',
  },
  {
    stat: '6M',
    label: 'Tibetans living under occupation, their language, faith, and land under pressure.',
  },
  {
    stat: '150+',
    label: 'Tibetans who have self-immolated since 2009 in protest against the occupation.',
  },
]

// A spare, defiant timeline of the freedom struggle.
export const timeline = [
  {
    id: 1,
    year: '1912–1950',
    title: 'A de facto independent Tibet',
    text: 'After the fall of the Qing, the 13th Dalai Lama reasserts Tibet’s independence. For nearly four decades Tibet runs its own government, currency, army, postal system, and foreign relations from Lhasa.',
  },
  {
    id: 2,
    year: '1949–50',
    title: 'The invasion',
    text: 'The newly founded People’s Republic of China sends the People’s Liberation Army into eastern Tibet. In October 1950 some 40,000 troops overwhelm Tibet’s small army at Chamdo.',
    image: {
      src: invasion,
      alt: 'PLA enters Tibet, 1950',
      caption: "People's Liberation Army enters Tibet, October 1950",
    },
  },
  {
    id: 3,
    year: '1951',
    title: 'The 17-Point Agreement',
    text: 'A Tibetan delegation is pressured into signing the “Seventeen Point Agreement” in Beijing under duress, formalising Chinese control. Tibetans have long rejected it as signed without authority and under coercion.',
    image: null,
  },
  {
    id: 4,
    year: '1959',
    title: 'The Lhasa Uprising',
    text: 'Fearing the Dalai Lama would be seized, tens of thousands of Tibetans surround the Norbulingka palace. The uprising is crushed; the 14th Dalai Lama escapes across the Himalayas to India. Tens of thousands of Tibetans are killed in the months that follow.',
    image: {
      src: lhasa59,
      alt: 'Lhasa uprising, 1959',
      caption: 'The Lhasa Uprising — March 10, 1959',
    },
  },
  {
    id: 5,
    year: '1959–60',
    title: 'A government in exile',
    text: 'The Dalai Lama re-establishes the Tibetan government in Dharamsala, India — today the Central Tibetan Administration — and tens of thousands of refugees follow him into exile, building schools and monasteries to keep the culture alive.',
    image: null,
  },
  {
    id: 6,
    year: '1966–76',
    title: 'The Cultural Revolution',
    text: 'Religion is outlawed and the vast majority of Tibet’s 6,000+ monasteries are destroyed. Monks and nuns are forcibly disrobed; sacred texts and art are burned. Famine and political campaigns claim countless Tibetan lives.',
    image: null,
  },
  {
    id: 7,
    year: '1987–89',
    title: 'Protests and martial law',
    text: 'Mass independence protests erupt in Lhasa. The crackdown culminates in martial law in March 1989. That December, the Dalai Lama is awarded the Nobel Peace Prize for his nonviolent struggle.',
    image: { 
      src: protest, 
      alt: 'Protests, Lhasa 1987', 
      caption: 'Protests erupt in Lhasa, September 1987' 
    },
  },
  {
    id: 8,
    year: '1995',
    title: 'The disappeared Panchen Lama',
    text: 'The Dalai Lama recognises six-year-old Gedhun Choekyi Nyima as the 11th Panchen Lama. Days later Chinese authorities seize the boy and install their own candidate. He has never been seen publicly since — among the world’s longest-held political prisoners.',
    image: null,
  },
  {
    id: 9,
    year: '2008',
    title: 'The plateau rises',
    text: 'Months before the Beijing Olympics, protests sweep across the entire Tibetan plateau — the largest unrest in decades. The response is a sweeping, often deadly, security clampdown.',
    image: { 
      src: uprising08, 
      alt: 'Uprising, 2008', 
      caption: 'Nationwide uprising, March 2008' 
    },
  },
  {
    id: 10,
    year: '2009–present',
    title: 'The self-immolations',
    text: 'Beginning with the monk Tapey in Ngaba, more than 150 Tibetans set themselves on fire in protest, most calling for freedom and the Dalai Lama’s return — the starkest measure of a people’s desperation.',
    image: null,
  },
  {
    id: 11,
    year: 'Today',
    title: 'The struggle continues',
    text: 'Under intensifying surveillance, forced assimilation, and colonial boarding schools that separate a million Tibetan children from their language, the freedom struggle endures — in exile and inside Tibet.',
    image: null,
  },
]

export const gridImages = [
  { image: lushtibet, alt: 'Lush Tibetan plateau', caption: 'Lush green grass as far as the eye can see - the reason for the annual migration' },
  { image: kids, alt: 'Two Tibetan boys', caption: 'Two boys crossing a ditch. Tibet, 2003.' },
  { image: happymonks, alt: 'Young Buddhist monks playing', caption: 'Young Buddhist novice monks play at a Tibetan nomadic summer grazing area in Yushu County' },
  { image: showlepord, alt: 'Snow Leopard', caption: 'Snow Leopard' },
  { image: horse, alt: 'Tibetan nomad skills', caption: 'An ethnic Tibetan nomad performs skills during a riding competition at a local festival on July 26, 2015.' },
  { image: amney, alt: 'Amnye Machen Holy Mountain', caption: 'Amnye Machen Holy Mountain' },
]
