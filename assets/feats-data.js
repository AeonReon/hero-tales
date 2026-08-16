// feats-data.js — THE GREAT WORKS.
//
// Tales of things built. Not battles: undertakings. Somebody looked at a
// mountain, a swamp, an ocean or a river and said it could be done, and then
// spent a life doing it. Most of these are barely told any more — the canal
// gets used, the bridge gets driven over, and nobody remembers what it cost.
//
// House rules for this shelf (see CLAUDE.md):
//  - Written for the app, not lifted from a public-domain book. Say so plainly.
//  - Numbers are the commonly cited figures; where historians disagree, hedge.
//  - Give the cost honestly in `cost`. A feat with the price cut out is a lie.
//  - `reckoning` is one line. State what it is worth. Do not sermonise.
//
// shelf: 'feat' — pure making. See stands-data.js and ledger-data.js.

window.CHRONICLES = (window.CHRONICLES || []).concat([

{
  id: 'panama-canal',
  shelf: 'feat',
  title: 'The Panama Canal',
  kicker: 'They cut a continent in half',
  where: 'Panama',
  when: '1881–1914',
  who: 'Ferdinand de Lesseps · John Stevens · William Gorgas · George Goethals',
  icon: 'canal',
  color: '#1F8F5E', colorDeep: '#14603F',
  teaser: 'The French tried first and buried twenty-two thousand men. The second attempt won by beating a mosquito.',
  body: [
    'Ferdinand de Lesseps had already done the impossible once. He had driven the Suez Canal through the Egyptian desert and become the most celebrated man in France for it. In 1881 he turned to Panama and made one enormous assumption: that what worked in flat, dry sand would work in a mountainous jungle with a river running through it. He planned a sea-level cut, no locks, straight through. It was the wrong plan, held to for far too long, and it destroyed him.',
    'The jungle killed the men faster than they could be shipped in. Yellow fever and malaria went through the camps in waves; nobody yet knew what carried them, so the hospitals stood the legs of the beds in bowls of water to keep the ants off, and bred mosquitoes in the wards. The commonly cited death toll for the French years is around twenty-two thousand. In 1889 the company collapsed in the largest financial scandal France had ever seen, taking the savings of some eight hundred thousand small investors with it.',
    'The Americans took it up in 1904 and did three things differently. John Stevens, a railwayman, arrived, looked at the mud, and refused to dig anything at all for months — first he rebuilt the railway, because the real problem was not excavation but where to put ninety million cubic metres of spoil. He also fought Washington until they abandoned the sea-level dream for a lock canal fed by a dammed river. And Colonel William Gorgas, armed with Carlos Finlay\'s and Walter Reed\'s finding that mosquitoes carried the fevers, waged a two-year war on standing water: fumigation, oil on every pool, screens on every window, drainage of whole districts. Yellow fever was gone from the isthmus by 1906.',
    'George Goethals finished it. The Culebra Cut — nine miles of mountain removed by steam shovel and dynamite, the slides sliding back in almost as fast as they were dug out — swallowed years. Gatun Dam made the largest artificial lake in the world at the time. The first ship went through on 15 August 1914, and Europe, which had gone to war two weeks earlier, barely noticed.'
  ],
  cost: 'About 22,000 dead in the French years; about 5,600 recorded deaths under the American administration, most of them West Indian labourers, who did the heaviest work for the lowest pay under a segregated wage system.',
  reckoning: 'The lesson is not "try harder". De Lesseps tried hardest of all. The canal was won by a man who stopped digging to fix the railway, and a doctor who understood the enemy was an insect.'
},

{
  id: 'brooklyn-bridge',
  shelf: 'feat',
  title: 'The Brooklyn Bridge',
  kicker: 'It cost the family everything and they finished it anyway',
  where: 'New York',
  when: '1869–1883',
  who: 'John A. Roebling · Washington Roebling · Emily Warren Roebling',
  icon: 'bridge',
  color: '#3F72B8', colorDeep: '#294E85',
  teaser: 'The designer died before the first stone. His son was crippled by it. His son\'s wife ran the largest engineering project in America for eleven years.',
  body: [
    'John Augustus Roebling had spent his life proving that a bridge could be hung from wire. He proposed a span across the East River longer than anything then standing, with towers of granite and cables of steel — a material barely trusted for the purpose. In June 1869, surveying the site, his foot was crushed between an incoming ferry and the pilings. He had the toes amputated, refused conventional treatment in favour of his own water cure, and died of tetanus three weeks later, before a stone was laid.',
    'His son Washington took over at thirty-two. The towers had to stand on bedrock, which meant sinking caissons — huge upturned wooden boxes, pumped full of compressed air to keep the river out, with men digging in the dark inside them. Nobody understood decompression. Men came up from the pressure and folded over with what they called "the bends", or caisson disease. Several died. In 1872 Washington came up one time too many and was left partially paralysed, in constant pain, and unable to bear light or noise. He never returned to the site.',
    'Emily Warren Roebling took the bridge. She had no formal training when she started; she acquired it — cable specifications, catenary curves, stress analysis, materials — and for the next eleven years she was the project. She carried her husband\'s instructions to the site, then stopped merely carrying them: she dealt directly with the assistant engineers, the contractors and the trustees, answered the technical questions herself, and when a rival tried to have Washington removed on grounds of incapacity, she argued the case before the American Society of Civil Engineers and won it.',
    'It opened on 24 May 1883. Emily Roebling was the first person to cross. Six days later a rumour ran through a crowd on the walkway that the bridge was collapsing; twelve people were crushed to death in the panic. To settle it, P. T. Barnum walked twenty-one elephants across the following year, Jumbo at the head of them. It has carried traffic ever since.'
  ],
  cost: 'At least twenty and probably more than thirty men died in the fourteen years of construction — crushed, drowned, or killed by caisson disease. Washington Roebling lived another forty years an invalid.',
  reckoning: 'Three Roeblings built it and only one of them was a bridge engineer by trade when the work began. Competence is something a person can go and get.'
},

{
  id: 'bazalgette-sewers',
  shelf: 'feat',
  title: 'The Sewers That Saved London',
  kicker: 'He doubled the size of every pipe, and it saved the city twice',
  where: 'London',
  when: '1859–1875',
  who: 'Sir Joseph Bazalgette',
  icon: 'arch',
  color: '#4F6D7A', colorDeep: '#2F4550',
  teaser: 'Cholera was killing thousands and everyone blamed bad air. One engineer\'s guess about future population is the reason the system still works.',
  body: [
    'By the 1850s London poured its sewage straight into the Thames, and drew its drinking water from the same river. Cholera came in waves — some fourteen thousand dead in 1849, over ten thousand in 1853–54 — and the medical establishment insisted the cause was miasma, foul air. John Snow had already traced an outbreak to a single water pump in Broad Street, but his conclusion was not generally accepted. Nothing was done, because nothing that costs that much money gets done on the strength of an argument.',
    'Then came the summer of 1858. The heat cooked the river, and the stench rose into the Palace of Westminster so violently that the curtains were soaked in chloride of lime and Parliament seriously discussed relocating to Oxford. This was the Great Stink. A bill enabling the works passed in eighteen days.',
    'Joseph Bazalgette, chief engineer to the Metropolitan Board of Works, built eighty-two miles of main intercepting sewers and some eleven hundred miles of street sewers, running along the north and south banks to carry everything far downstream of the city before release. He embanked the Thames itself to do it — the Victoria, Albert and Chelsea Embankments are Bazalgette\'s sewers with a road, a promenade and, later, an underground railway laid on top. He used the new Portland cement, and tested every batch obsessively, because nobody yet knew how it aged.',
    'He calculated the diameter of pipe London would need, then doubled it. His stated reasoning was that this would only be done once, so he had better allow for a city he could not imagine. That single decision is why a system designed for two and a half million people was still serving eight million more than a century later. Cholera never returned to London after the works came into use.'
  ],
  cost: 'About £4.2 million — enormous for the day — and years of political obstruction before the smell finally beat the argument.',
  reckoning: 'The most valuable thing he did was assume he was wrong about the future, and build for the error.'
},

{
  id: 'atlantic-cable',
  shelf: 'feat',
  title: 'The Cable Across the Atlantic',
  kicker: 'Four failures in eight years, and he went back every time',
  where: 'Valentia, Ireland to Newfoundland',
  when: '1857–1866',
  who: 'Cyrus West Field · William Thomson (Lord Kelvin)',
  icon: 'cable',
  color: '#0EA5A4', colorDeep: '#0F766E',
  teaser: 'Before it, a message to America took ten days by ship. After it, a few minutes. Almost nobody now remembers the man who ruined himself doing it.',
  body: [
    'In 1856 a message from London to New York travelled at the speed of a ship: ten days if the weather held. Cyrus Field, a New York paper merchant who had already made a fortune and retired at thirty-three, decided a wire could be laid on the floor of the Atlantic. He had no relevant technical knowledge. He raised the money, hired the men who did, and made himself the one thing the project could not do without — the person who refused to let it stop.',
    'The 1857 attempt snapped the cable in deep water after some three hundred miles. The 1858 attempt snapped twice more; on the third try that year it reached both shores, and Queen Victoria and President Buchanan exchanged messages to firework displays in both countries. Then the signal weakened, faded and died in under a month. An engineer had pushed high voltage down the line to force the signal through and destroyed the insulation. Field, whose reputation had just gone from prophet to fraud, spent the next years raising money in a market that had watched him fail three times, through a civil war that made American capital impossible to find.',
    'What saved it was physics. William Thomson had argued from the start that these enormous voltages were wrong, that a long submarine cable behaved quite unlike a land line, and that the answer was a fantastically sensitive receiver rather than a fantastically strong signal. His mirror galvanometer read a current so faint it moved only a spot of light on a scale. He also specified a far better cable.',
    'In 1865 the Great Eastern — the only ship afloat big enough to carry the whole coil, Brunel\'s commercial disaster finally finding its purpose — paid out two thirds of the way across before the line parted and was lost. They came back in 1866, laid a new cable successfully, then went back out over the deep water, grappled up the broken 1865 line from more than two miles down, spliced it, and finished that one too. Two working cables where there had been none.'
  ],
  cost: 'Nine years, four failed expeditions, several fortunes including much of Field\'s own. He died relatively poor.',
  reckoning: 'Field supplied no theory and no engineering. He supplied refusal. Some projects need one person whose entire function is to still be there after the fourth failure.'
},

{
  id: 'bell-rock',
  shelf: 'feat',
  title: 'The Lighthouse on the Drowned Rock',
  kicker: 'A tower on a reef that vanishes under the sea twice a day',
  where: 'Off Arbroath, Scotland',
  when: '1807–1810',
  who: 'Robert Stevenson · John Rennie',
  icon: 'tower',
  color: '#2E84BD', colorDeep: '#1F5E8A',
  teaser: 'Two hours\' work a tide, on a rock eleven miles out to sea that spends most of its life underwater. It has stood for over two hundred years.',
  body: [
    'The Bell Rock lies eleven miles off the Angus coast, and for most of every day it is not there — the tide covers it entirely, and only at low water does a slab of red sandstone break the surface. It sat directly in the path of ships making for the Firth of Forth and the Tay, and it took them by the dozen. In the great storm of 1799 some seventy vessels were lost on that coast. Everyone agreed a light was needed there. Everyone also agreed it could not be built.',
    'Robert Stevenson disagreed, and spent years pushing the scheme through a reluctant board. The working method was brutally simple and utterly dependent on the sea\'s timetable. The men were rowed out from a moored vessel, worked the two hours or so the rock stood clear, and were taken off as the water came back over their feet. In the first season they cut the foundation pit. They also built a beacon house on legs, so that in later seasons they could live directly above the rock instead of losing hours to the boats.',
    'Every stone was cut and numbered ashore at Arbroath, dovetailed to lock into its neighbours on all sides — the technique John Smeaton had pioneered at the Eddystone — so that the tower would behave as one piece of rock rather than a stack of blocks. They were floated out and set with a movable crane, tide by tide, season by season. On one occasion the attending boat drifted off and the whole working party was left on a shrinking rock with nowhere to go; Stevenson, by his own account, could not speak from a dry mouth, and was saved by a pilot boat arriving on other business.',
    'The light was first lit on 1 February 1811. It is the oldest sea-washed lighthouse still standing anywhere in the world, and in more than two centuries the tower itself has needed no significant structural repair. Robert Stevenson\'s grandson Robert Louis Stevenson, who broke the family trade to write, called the engineers of his line the ones who did the real work.'
  ],
  cost: 'Around £61,000, four building seasons, and a working method that put men on a rock the sea reclaimed every few hours. Deaths were remarkably few, which was itself an achievement of Stevenson\'s discipline.',
  reckoning: 'The tower is interlocked so that the sea, pushing on any one stone, has to move all of them. That is a design principle and it is also a description of a good crew.'
},

{
  id: 'transcontinental-railroad',
  shelf: 'feat',
  title: 'Over the Sierra Nevada',
  kicker: 'They tunnelled through granite by hand, in winter, under the snow',
  where: 'California to Utah',
  when: '1863–1869',
  who: 'Theodore Judah · Charles Crocker · James Strobridge · the Central Pacific crews',
  icon: 'rail',
  color: '#B4560F', colorDeep: '#7A360A',
  teaser: 'The hard half of the transcontinental railroad was 1,700 feet of tunnel through solid granite, and it moved about eight inches a day.',
  body: [
    'The Union Pacific, building west across the plains, could lay several miles of track a day. The Central Pacific, building east from Sacramento, had to get over the Sierra Nevada first — and the mountains gave them fifteen tunnels, of which the Summit Tunnel at Donner Pass was 1,659 feet of granite so hard it blunted the drills.',
    'The labour problem was solved by accident and then on purpose. White labour was scarce and drifted off to the silver mines; Charles Crocker suggested hiring Chinese workers and was told they were too slight for the work. He pointed out that they had built the Great Wall. Within two years the Central Pacific workforce was some eighty per cent Chinese, eventually numbering well over ten thousand men, and it was they who did the tunnelling and the cliff work — including, by the persistent account, being lowered over the face of Cape Horn in baskets to set charges in the rock.',
    'Progress in the Summit Tunnel ran at roughly seven or eight inches a day per face. They sank a shaft down to the middle so they could work outward from four faces at once instead of two, hauling the spoil up with an engine dragged over the mountains by oxen. They tried the new nitroglycerine, mixed on site because it was too unstable to transport; it was faster and it killed men. Through the winters of 1866 and 1867 — among the worst on record, with drifts of forty feet — the crews lived and worked in tunnels dug through the snow itself, and avalanches took whole camps.',
    'They broke through in November 1867. Freed onto the flat, the same crews then laid ten miles and fifty-six feet of track in a single day in April 1869 to settle a wager, a record never beaten by hand. The rails met at Promontory Summit on 10 May 1869. A journey that had taken months by wagon now took about a week.'
  ],
  cost: 'Chinese workers were paid roughly two-thirds of a white labourer\'s wage and had to buy their own food. Estimates of the Chinese dead range from several hundred to well over a thousand; the companies kept no proper count, which is its own comment. Their 1867 strike for equal pay was broken by cutting off their food supply.',
  reckoning: 'The men who did the hardest work on the greatest American project of the century were left out of the photograph at Promontory. Tell the tale with them in it.'
},

{
  id: 'hagia-sophia',
  shelf: 'feat',
  title: 'The Dome That Should Not Stand',
  kicker: 'Built in five years by two mathematicians who had never built a building',
  where: 'Constantinople',
  when: '532–537',
  who: 'Justinian · Anthemius of Tralles · Isidore of Miletus',
  icon: 'dome',
  color: '#C6811A', colorDeep: '#8A5A0F',
  teaser: 'It held the largest interior space in the world for eight hundred years, and it was put up in five years and ten months.',
  body: [
    'In January 532 the Nika riots nearly ended Justinian\'s reign and burned the church of Hagia Sophia to the ground. He put the revolt down in the Hippodrome with terrible severity, and then — with the ashes still in the street — commissioned a replacement on a scale nobody had attempted.',
    'He did not hire an architect in the ordinary sense. Anthemius of Tralles was a geometer who wrote on conic sections and burning mirrors; Isidore of Miletus was a mathematician who had taught mechanics and edited Archimedes. Neither had a great building to his name. What Justinian wanted was not a bigger basilica but a solved problem: a dome, which is a circle, set on a square hall. The answer they used — pendentives, curved triangular sections of masonry that gather the ring of the dome down onto four piers — had existed in small applications, but never at anything like this scale.',
    'The result is a dome about thirty-two metres across, floating over forty windows cut around its base so that the light appears to sever it from the building. Procopius, writing at the time, said it seemed not to rest on solid masonry but to be suspended by a golden chain from heaven. The interior was the largest enclosed space on earth and remained so for something like eight centuries.',
    'It was also over-reached. The first dome was too shallow and its outward thrust deformed the supporting arches; after earthquakes in 553 and 557 it collapsed in 558. Isidore the Younger, nephew of the first, rebuilt it steeper and heavier — the profile you see now — and that one has stood, with repairs, through fifteen hundred years of earthquakes in one of the most seismically active cities on earth.'
  ],
  cost: 'Ruinous. Justinian taxed the empire hard for it, along with his wars and his law code, and the treasury he inherited full was empty by the end.',
  reckoning: 'The first dome fell. The second stood for fifteen centuries. Failing at the frontier and correcting is not the same as failing.'
},

{
  id: 'via-appia',
  shelf: 'feat',
  title: 'The Blind Censor\'s Road',
  kicker: 'He built the road and the aqueduct, and went blind, and kept going',
  where: 'Rome',
  when: 'from 312 BC',
  who: 'Appius Claudius Caecus',
  icon: 'road',
  color: '#8C2F39', colorDeep: '#5E1F26',
  teaser: 'Rome\'s first great road and first aqueduct came from one censor in one term of office, and both are still there.',
  body: [
    'In 312 BC Appius Claudius held the censorship, an office of eighteen months, and used it to change the physical shape of the Roman world. He began the Via Appia, running south-east from Rome toward Capua and eventually to Brundisium on the heel of Italy, and the Aqua Appia, the city\'s first aqueduct, brought in mostly underground over some sixteen kilometres.',
    'The road is the thing to look at. It was not a track improved: it was engineered — cut straight across country regardless of what lay in the way, drained on both sides, cambered, laid in courses of rubble and gravel and then paved with close-fitting basalt blocks set so tightly that a knife would not go between them. Where the Pontine Marshes lay across the line, it was carried on a causeway. Roman armies could now move at a pace no enemy could match, and where the road went, Roman law, Roman trade and Roman settlement followed. The Romans called it the regina viarum, the queen of roads. Stretches of the original surface are still walkable today.',
    'He held office beyond his term, which was resented; his reforms admitted the sons of freedmen to the Senate and redistributed the landless across the voting tribes, which was resented more. He also broke a professional monopoly by having the legal calendar and the forms of legal action published, so ordinary citizens could see when and how to sue, information previously held by the priestly college.',
    'He went blind in later life — hence Caecus. Old, sightless and long retired, he had himself carried into the Senate house in 280 BC to stop the peace with Pyrrhus of Epirus, whose elephants had beaten Roman armies twice. The speech he made there was still being read three hundred years later; Cicero knew it. Rome refused terms. Pyrrhus, having won his battles at a cost he could not repeat, eventually left Italy.'
  ],
  cost: 'Fought his whole career by men who thought a censor should not remake the constitution. His aqueduct and his road were financed by a state treasury he did not ask permission to spend.',
  reckoning: 'Roads, water, law published so ordinary men could use it — and one speech at the end that mattered more than all his sight. Infrastructure is a form of nerve.'
},

{
  id: 'forth-bridge',
  shelf: 'feat',
  title: 'The Forth Bridge',
  kicker: 'Built to be visibly, brutally over-strong, because the last one fell',
  where: 'Firth of Forth, Scotland',
  when: '1882–1890',
  who: 'John Fowler · Benjamin Baker · William Arrol',
  icon: 'bridge',
  color: '#8B3A1E', colorDeep: '#5C2413',
  teaser: 'The Tay Bridge collapsed with a train on it. The next bridge across a Scottish firth was designed to look unarguable.',
  body: [
    'On the night of 28 December 1879 the Tay Bridge went down in a gale with a train crossing it. Everyone aboard died — some seventy-five people. The designer, Thomas Bouch, had already been commissioned to bridge the Forth as well. That commission was cancelled immediately, and British bridge engineering entered a period of public terror.',
    'John Fowler and Benjamin Baker responded with a design that was not merely strong but conspicuously so: three enormous steel cantilever towers, each balanced on its own foundation, reaching out to meet short suspended spans between them. Baker took the wind loading that had destroyed the Tay Bridge and designed for a pressure far beyond anything expected, then explained the principle to the public with a famous demonstration — two men sitting on chairs, arms extended, holding a third man suspended between them on a plank, their arms in tension and the sticks under their hands in compression. It was the first major structure in Britain built of steel rather than wrought iron.',
    'William Arrol built it. At the peak some 4,600 men were on the works, driving 6.5 million rivets, handling caissons sunk into the bed of the firth under compressed air. The result uses about 54,000 tonnes of steel and carries the railway 46 metres above high water.',
    'It opened in March 1890 and has never been in doubt since. Its scale of over-provision was mocked by some at the time as inelegant. That was the point: it was built by men who had just watched a lighter, more elegant answer kill seventy-five people.'
  ],
  cost: 'The official memorial records 73 men killed in construction; later research by local historians raised the identified total above 70 and argued the real figure is higher. Hundreds more were injured or maimed.',
  reckoning: 'After a catastrophe caused by cutting things fine, the correct response is to stop cutting things fine — even if it looks heavy-handed.'
},

{
  id: 'thames-tunnel',
  shelf: 'feat',
  title: 'The First Tunnel Under a River',
  kicker: 'A worm gave him the idea; the river nearly killed his son twice',
  where: 'London',
  when: '1825–1843',
  who: 'Marc Isambard Brunel · Isambard Kingdom Brunel',
  icon: 'arch',
  color: '#4C63B6', colorDeep: '#33468C',
  teaser: 'Everyone had failed to tunnel under a navigable river. Marc Brunel solved it by copying a shipworm.',
  body: [
    'Soft ground under water had defeated every attempt to tunnel beneath a river. The problem is that the face collapses. Marc Brunel, a French émigré engineer, found his answer studying Teredo navalis, the shipworm, which bores through submerged timber behind a hard shell while lining the tunnel behind it with its own secretion. He patented the tunnelling shield: a rigid iron frame pressed against the face, divided into cells, with a man in each cell removing one board at a time, digging a few inches, and replacing the board. The whole frame is then screwed forward, and bricklayers line the tunnel immediately behind it. Every modern tunnel boring machine is a descendant.',
    'Work began under the Thames at Rotherhithe in 1825. The river broke in five times. In the flood of 1828, six men drowned and Isambard Kingdom Brunel — then twenty-two and acting resident engineer — was swept along the tunnel by the water and badly injured; he was sent to Bristol to recover, where he entered a competition for a bridge over the Avon Gorge and began his own career. Money ran out. The tunnel stood abandoned and bricked up for seven years before a government loan restarted it.',
    'The other enemy was the water itself. The Thames of the 1820s was an open sewer, and the ground the men dug through was saturated with it. They worked in methane and hydrogen sulphide, taking fire from the gas, going temporarily blind, falling sick in numbers. The company doctor recorded the effects. Men died of the tunnel without the river ever touching them.',
    'It opened in March 1843 and drew a million visitors in the first fifteen weeks. It never got the vehicle ramps it was designed for, so as an enterprise it failed. But it worked as a hole through the ground under a river, which no one had ever managed, and it is still in use today — trains of the London Overground run through Marc Brunel\'s tunnel every few minutes.'
  ],
  cost: 'Eighteen years, at least ten deaths, repeated floods, financial collapse, and the health of many of the men who dug it.',
  reckoning: 'The idea was taken from a worm in a ship\'s timber. Look at what already solves the problem in nature before deciding the problem is unsolved.'
},

{
  id: 'hoover-dam',
  shelf: 'feat',
  title: 'Hoover Dam',
  kicker: 'They moved a river, then poured a mountain of concrete into the gap',
  where: 'Black Canyon, Colorado River',
  when: '1931–1936',
  who: 'Frank Crowe · the Six Companies · the high scalers',
  icon: 'dam',
  color: '#6B7280', colorDeep: '#3F4650',
  teaser: 'Poured in interlocking blocks with cooling pipes inside, because a solid pour of that size would have taken a century to set.',
  body: [
    'The Colorado ran wild — flooding the farms of the Imperial Valley one year, running low the next. To control it, the plan was an arch-gravity dam in Black Canyon, 221 metres high, in desert where summer temperatures reached over 50°C and where, at the start, there was no town, no road and no power line.',
    'First the river had to be removed. Four diversion tunnels, each 17 metres across, were driven through the canyon walls — nearly five kilometres of tunnel in total — and in November 1932 the Colorado was pushed into them and the canyon floor left dry. To prepare the walls, men called high scalers went over the rim on ropes with jackhammers and dynamite, hanging hundreds of feet above the river, stripping off loose rock. They made their own hard hats by dipping cloth caps in tar.',
    'Then the concrete. A single monolithic pour of 2.6 million cubic metres would have generated so much heat of hydration that engineers calculated it would still be cooling — and cracking — more than a century later. So the dam was poured as a set of interlocking vertical columns, and threaded through the wet concrete were 930 kilometres of one-inch steel pipe carrying chilled water from a refrigeration plant built on site. Once each block was cooled and shrunk, the gaps between the columns were injected with grout to weld the whole into one mass.',
    'Frank Crowe, the superintendent, had a rare obsession with never letting material stop moving, and finished more than two years ahead of the contract. The dam still holds Lake Mead, still generates power, and has controlled the Colorado for ninety years.'
  ],
  cost: 'Official records list 96 deaths from industrial causes at the site, with many more if carbon monoxide poisoning in the diversion tunnels — disputed and litigated at the time, since the company classified it as pneumonia — is counted. Workers who struck over conditions in 1931 were driven out of the site at gunpoint. Black workers were hired only in small numbers and housed separately.',
  reckoning: 'The clever part was not the size. It was realising that a big enough pour is a different problem from a small one, and inventing the cooling to match.'
},

{
  id: 'erie-canal',
  shelf: 'feat',
  title: 'Clinton\'s Ditch',
  kicker: 'Amateurs dug 363 miles across a state and made New York the capital of America',
  where: 'New York State',
  when: '1817–1825',
  who: 'DeWitt Clinton · Benjamin Wright · Canvass White · Nathan Roberts',
  icon: 'canal',
  color: '#2F9E77', colorDeep: '#1F6B52',
  teaser: 'Thomas Jefferson called it "little short of madness". It was finished in eight years by men who learned engineering on the job.',
  body: [
    'In 1816 the United States had almost no canal experience and, by most accounts, not a single trained civil engineer. The proposal was a canal 363 miles long from the Hudson River to Lake Erie, rising and falling some 675 feet through 83 locks, across ridges, swamps and a river gorge. Jefferson, asked to support it, called it a fine project — for a century hence — and just short of madness now. The federal government refused to fund it. New York State did it alone, on the vote of Governor DeWitt Clinton, and the press named it Clinton\'s Ditch.',
    'The men who built it were judges, surveyors and lawyers who taught themselves the trade as they went. Benjamin Wright, a land surveyor, is now called the father of American civil engineering because of it. Canvass White walked over two thousand miles of British canals studying locks, came home, and found a natural cement in Madison County that would set underwater — which the whole project depended on and which nobody in America had. Nathan Roberts designed the five double locks at Lockport that climb the Niagara escarpment in a staircase.',
    'They invented as they went: a stump-puller worked by a giant wheel and screw that let seven men clear forty stumps a day, a plough-and-scraper method for cutting the prism, an endless-screw device for felling trees. Much of the digging was done by local farmers on contract and by Irish immigrant labour, in swamp country where malaria killed men by the hundred in the Montezuma marshes.',
    'It opened on 26 October 1825. Freight from Buffalo to New York City had cost around $100 a ton and taken weeks; the canal cut it to a figure often given as under $10 and a few days. The interior of the continent now had an outlet to the Atlantic, and it ran through New York — which is why New York, and not Philadelphia or Baltimore or New Orleans, became the great American city. The state paid off the entire construction debt from tolls within about a decade.'
  ],
  cost: 'Roughly $7 million, an immense state gamble, and an unrecorded number of labourers dead of swamp fever in the Cayuga and Montezuma sections.',
  reckoning: 'No experts were available, so they made some. The obstacle was never expertise; it was the decision to start.'
},

{
  id: 'delta-works',
  shelf: 'feat',
  title: 'Holding Back the North Sea',
  kicker: 'A nation that decided the sea would not do that to it twice',
  where: 'The Netherlands',
  when: '1953–1997 (and eight centuries before)',
  who: 'The Dutch',
  icon: 'wave',
  color: '#3F8FCB', colorDeep: '#27618E',
  teaser: 'After the flood of 1953 killed 1,836 people, the Dutch built the largest flood defence on earth — and made one barrier that opens.',
  body: [
    'About a quarter of the Netherlands lies below sea level, and much of that is land the Dutch made. For eight centuries they had been draining lakes and diking off arms of the sea, first with windmills, later with steam and diesel pumps. Whole provinces — Flevoland most recently — are former seabed, drained, drying, planted, then built on.',
    'On the night of 31 January 1953 a spring tide met a severe north-westerly storm surge. The dikes of Zeeland and South Holland were overtopped and gave way in the dark. In the Netherlands 1,836 people drowned; over three hundred died in England, and hundreds more at sea. The country responded not with repairs but with a decision: this would be engineered out of possibility.',
    'The Delta Works closed off the estuaries of the south-west with dams, sluices, locks and storm surge barriers, shortening the coastline that had to be defended by some seven hundred kilometres. Safety standards were set in terms of flood probabilities — the most heavily populated areas were to be protected against the storm expected once in ten thousand years, a standard no other country had contemplated.',
    'The hardest and most revealing part was the Oosterschelde. The original plan was to dam the estuary solid. Fishermen and environmentalists fought it, because sealing it would kill the tidal salt marsh and the shellfish beds. The government changed the design at enormous extra cost to a barrier of sixty-two steel gates, standing open to the tide in ordinary weather and closing only when a surge is forecast. It is nine kilometres long and cost roughly two and a half times the solid dam. The Maeslant barrier protecting Rotterdam, finished in 1997, is a pair of steel arms each about the weight of the Eiffel Tower, floating shut on a ball joint.'
  ],
  cost: 'Decades of national expenditure, some entire villages and the old tidal ecology of the closed estuaries. The 1953 dead are the reason the work exists.',
  reckoning: 'They were most impressive not when they sealed the sea out, but when they spent extra to build something that could let it back in.'
},

{
  id: 'apollo',
  shelf: 'feat',
  title: 'The Moon in Eight Years',
  kicker: 'Announced before anyone knew how, and delivered on time',
  where: 'Earth to the Moon',
  when: '1961–1969',
  who: 'Some 400,000 people',
  icon: 'star',
  color: '#7C5CC4', colorDeep: '#4B2F86',
  teaser: 'When Kennedy promised the Moon, America had put one man in space, for fifteen minutes, in a ballistic arc.',
  body: [
    'On 25 May 1961 Kennedy told Congress the United States would land a man on the Moon and return him safely before the decade was out. Three weeks earlier Alan Shepard had flown America\'s entire manned spaceflight programme to date: a fifteen-minute hop that did not even reach orbit. Nobody knew how to navigate to the Moon, how to keep men alive there, or how to build a rocket of the required size.',
    'The decisive choice was not technological but architectural. The obvious plans were to fly straight there and back, or to assemble a ship in Earth orbit. John Houbolt, a mid-ranking engineer at Langley, kept insisting on a third: lunar orbit rendezvous — leave the mother ship in orbit around the Moon, drop a small, flimsy, single-purpose lander, and rendezvous again on the way back. It was widely rejected, and he went over his superiors\' heads to argue it. He was right; it cut the mass so drastically that the mission became possible with one Saturn V.',
    'The cost came early. In January 1967 Gus Grissom, Ed White and Roger Chaffee burned to death in seconds in the Apollo 1 command module during a ground test — pure oxygen at high pressure, flammable material in the cabin, and a hatch that opened inward and could not be got open in time. The programme stopped and rebuilt the spacecraft. Gene Kranz assembled his flight controllers and told them the fault was theirs, that they had been so eager to keep the schedule that they had ignored what they knew was wrong, and that from now on they would be "tough and competent". The words were written on the blackboards and left there.',
    'Apollo 8 went round the Moon at Christmas 1968 on what was, by any calm reckoning, a very bold decision. Apollo 11 landed on 20 July 1969 with about twenty-five seconds of fuel margin, Armstrong flying it manually past a boulder field while a computer he had overloaded threw alarms. The guidance software, largely written under Margaret Hamilton, was designed to shed low-priority tasks under overload rather than crash — which is the only reason the landing continued.'
  ],
  cost: 'Around $25 billion at the time — a substantial share of the federal budget at its peak — the three men of Apollo 1, and the lives of test pilots and technicians before them.',
  reckoning: 'A deadline nobody knew how to meet, publicly declared. That is what made four hundred thousand people converge on one problem.'
},

{
  id: 'crystal-palace',
  shelf: 'feat',
  title: 'The Crystal Palace',
  kicker: 'A gardener beat every architect in Britain with a sketch on blotting paper',
  where: 'Hyde Park, London',
  when: '1850–1851',
  who: 'Joseph Paxton · Charles Fox',
  icon: 'temple',
  color: '#0EA5A4', colorDeep: '#0F766E',
  teaser: 'Two hundred and forty-five designs were submitted and all were rejected. The winning one arrived late, from a man who built greenhouses.',
  body: [
    'The Great Exhibition of 1851 needed a building large enough to hold the industrial produce of the world, on a site in Hyde Park, ready in under a year, and removable afterwards. The Building Committee held an open competition, received 245 entries, rejected the lot, and produced its own design: a vast brick thing with a dome, requiring an estimated nineteen million bricks. It could not have been built in the time, and the public loathed the idea of it permanently occupying the park.',
    'Joseph Paxton was head gardener at Chatsworth. He had spent years building glasshouses, including one for the giant Amazonian waterlily Victoria amazonica, whose leaf — huge, flat, and stiffened by a radiating web of ribs — he had studied as a structural system. He sketched his idea on a sheet of blotting paper during a railway meeting, published it in the Illustrated London News to force the committee\'s hand, and got the commission.',
    'What he actually invented was prefabrication at scale. Everything was standardised on a module of 24 feet: cast-iron columns that doubled as drainpipes, laminated timber and iron trusses, and 293,655 panes of glass, all made off site to the same dimensions and simply assembled. Glaziers worked from wheeled trolleys running in the gutters, and a good pair could fit over a hundred panes a day. Existing elm trees were left standing and the roof was raised in a barrel vault over them.',
    'It covered about 92,000 square metres — roughly four times the footprint of St Peter\'s — and it went up in about thirty-nine weeks. Six million visitors came. Afterwards it was dismantled, moved to Sydenham, and re-erected, exactly as designed. It burned down in 1936.'
  ],
  cost: 'Around £150,000, and the pride of every architect in Britain. Paxton was knighted for it.',
  reckoning: 'Every professional produced a monument. The gardener produced a kit of parts. When the constraint is time, standardise.'
},

{
  id: 'trans-siberian',
  shelf: 'feat',
  title: 'The Trans-Siberian Railway',
  kicker: 'Nine thousand kilometres across permafrost, taiga and nothing',
  where: 'Moscow to Vladivostok',
  when: '1891–1916',
  who: 'Sergei Witte · Tsarevich Nicholas · convict and soldier labour',
  icon: 'rail',
  color: '#4F6D7A', colorDeep: '#2F4550',
  teaser: 'The longest railway on earth, laid across a continent where the ground thaws in summer and swallows the track.',
  body: [
    'Russia in 1890 controlled a landmass reaching to the Pacific and had no way to move anything across it. Crossing Siberia meant months on the post road. Sergei Witte, the finance minister and a former railway administrator, drove the project through as the instrument that would hold the empire together and open the east — some 9,289 kilometres of track from Moscow to Vladivostok.',
    'They built from both ends and from the middle at once, in a country that supplied nothing on site. Rails came in over enormous distances. Bridges — including the great crossings of the Ob, the Yenisei and the Amur — had to be built for rivers that freeze solid and then break up with ice floes capable of taking out a pier. Much of the route lies over permafrost, which is stable while frozen and turns to bog when the surface thaws each summer, buckling embankments laid the previous winter. There was cholera and anthrax in the work camps. The workforce was made up of peasants, soldiers, and thousands of convicts and exiles offered sentence reductions for labour.',
    'Lake Baikal defeated them for years. Rather than cut a line around the cliffs at its southern end, they ran an icebreaking train ferry across the lake, and in the deepest winter simply laid rails on the ice. The Circum-Baikal line that finally went round it needed some thirty-three tunnels in eighty kilometres and became the most expensive stretch on the whole route.',
    'The through line was effectively complete by 1904 and the all-Russian route, over the Amur and not through Manchuria, in 1916. It shifted the centre of gravity of a continent: migration, grain, industry and armies now moved east on rails. In 1941, that railway carried entire relocated factories out of the path of the German advance.'
  ],
  cost: 'Enormous. Convict and conscript labour, unrecorded deaths from disease and cold, and a rush to complete a Manchurian shortcut that helped bring on the disastrous war with Japan in 1904.',
  reckoning: 'A railway is not transport. It is the decision about which places will exist in fifty years.'
}

]);
