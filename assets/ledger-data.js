// ledger-data.js — GREAT AMBITIONS.
//
// The shelf for the most colossal, audacious undertakings in history — cities
// raised out of marsh, seas moved, canals and countries made. What sets them
// apart from the clean triumphs on the Great Works shelf is that their legacy
// is genuinely mixed: enormous achievement on one side, an enormous cost on
// the other, and the two do not cancel — they both stand.
//
// House rules for this shelf:
//  1. State the achievement AND the benefit plainly — the scale, the thing
//     built, who it served and for how long. Shrinking it is a lie.
//  2. State the cost just as plainly, with numbers. No softening either way.
//  3. Where the legacy is contested, give the competing perspectives — who
//     gained, who lost, and what came after — rather than one verdict. The
//     same events read as triumph or tragedy depending on where you stand.
//  4. Where historians genuinely differ on figures, give the range.
//  5. A fair, concrete test runs through the shelf: did life actually get
//     better for the people who lived it — safer, richer, more settled, a
//     place people tried to get into rather than flee? Prefer that observable
//     test to any narrative. `reckoning` weighs both sides; it is not a
//     sentence passed. The reader decides.
//
// shelf: 'ledger'  (kept as the internal key; displayed as "Great Ambitions")

window.CHRONICLES = (window.CHRONICLES || []).concat([

{
  id: 'belomorkanal',
  shelf: 'ledger',
  title: 'The White Sea Canal',
  kicker: 'Two hundred and twenty-seven kilometres in twenty months — and too shallow to use',
  where: 'Karelia, USSR',
  when: '1931–1933',
  who: 'Stalin · Genrikh Yagoda · Naftaly Frenkel · 126,000 prisoners',
  icon: 'canal',
  color: '#3F4650', colorDeep: '#22262C',
  teaser: 'The first great showpiece of the Gulag. Built almost entirely by hand, in record time, by prisoners — and then it turned out ships could not go down it.',
  body: [
    'Stalin wanted a canal from the White Sea to the Baltic, and he wanted it in twenty months. It was built: 227 kilometres, nineteen locks, dams and spillways, across granite and bog in the Karelian sub-Arctic, finished ahead of schedule in August 1933. On the face of it, a construction feat of the first order.',
    'It was dug by prisoners of the OGPU labour camps — roughly 126,000 of them passing through the works, in a system whose economics were designed by Naftaly Frenkel, himself a former prisoner, on the principle that a convict\'s ration should be tied to his output. Weak men were fed less, so they got weaker, so they were fed less again. The tools were wheelbarrows, picks, and wooden cranes; there was almost no machinery, because machinery cost hard currency and prisoners did not.',
    'The official recorded death toll for the construction period is around 12,000, and honest historians treat that as a floor, not a figure — it excludes those transferred out sick to die elsewhere and the winter of 1933 that followed. Estimates run considerably higher.',
    'To celebrate it, 120 Soviet writers were taken on a guided tour and produced a collective volume, edited by Maxim Gorky, praising the canal as the reforging of criminals into new Soviet men. It is one of the most disgraceful books ever published by serious writers. A brand of cheap cigarettes, Belomorkanal, carried a map of the route on the packet, and was still on sale sixty years later.',
    'And the canal did not work. To hit the deadline it was dug shallow — around 3.65 metres — which is too little for most seagoing vessels. It has never carried significant traffic. Solzhenitsyn, who devoted a chapter of The Gulag Archipelago to it, asked the only question that matters about it: was it needed?'
  ],
  cost: 'At least 12,000 recorded dead and probably many more; 126,000 prisoners consumed by a project that was, in engineering terms, useless.',
  reckoning: 'Speed was the whole point, and speed is why it is worthless. When the deadline is set by a man who does not pay the cost of meeting it, expect a monument with nothing inside.'
},

{
  id: 'mittelbau-dora',
  shelf: 'ledger',
  title: 'The Rocket and the Tunnel',
  kicker: 'More people died building the V-2 than were killed by it',
  where: 'Nordhausen, Germany',
  when: '1943–1945',
  who: 'Wernher von Braun · Hans Kammler · some 60,000 prisoners',
  icon: 'rocket',
  color: '#5E1F26', colorDeep: '#3A1216',
  teaser: 'The first machine to reach space was assembled underground by slave labour. Its designer later ran the programme that landed men on the Moon.',
  body: [
    'The A-4, known as the V-2, was a genuine technical revolution: the first liquid-fuelled guided ballistic missile, and the first man-made object to cross into space, on a test flight in June 1944. Nothing like it existed. Every space programme on earth descends from it.',
    'After the RAF bombed the development site at Peenemünde in 1943, production was moved underground into tunnels in the Kohnstein hill near Nordhausen, and the labour was supplied from the concentration camp system. At Mittelbau-Dora, prisoners initially lived inside the tunnels themselves — no daylight, no ventilation, rock dust, and dysentery — digging the galleries in which they would then assemble rockets. Around 60,000 prisoners passed through the camp and its sub-camps. Some 20,000 of them died: of exhaustion, disease, beatings, and public hangings of suspected saboteurs carried out on a gantry crane inside the tunnel, with the assembly line made to watch.',
    'The V-2 killed somewhere around 5,000 to 9,000 people in London, Antwerp and elsewhere. So the weapon killed roughly a third as many as its construction did. As a military instrument it was close to worthless: it consumed resources comparable to a major aircraft programme, carried a one-tonne warhead, and could not be aimed accurately enough to hit anything but a city.',
    'Wernher von Braun was the technical director. He was an SS officer, held the rank of Sturmbannführer, and visited Mittelbau-Dora. After the war he was brought to the United States under Operation Paperclip, along with hundreds of other German specialists, and his record was written down to make that politically possible. He became a public celebrity, made films with Disney explaining spaceflight to American children, and directed the development of the Saturn V that carried Apollo 11 to the Moon.'
  ],
  cost: 'About 20,000 dead building it; some 5,000–9,000 dead under it; and a postwar settlement in which the men responsible were given laboratories, honours and television programmes because their skills were wanted.',
  reckoning: 'The engineering was real and so were the tunnels. Brilliance is not a character reference, and a state that will trade the one for the other has told you what it thinks people are for.'
},

{
  id: 'st-petersburg',
  shelf: 'ledger',
  title: 'The City Built on Bones',
  kicker: 'He willed a European capital out of a swamp, and buried tens of thousands in it',
  where: 'Neva delta, Russia',
  when: 'from 1703',
  who: 'Peter the Great',
  icon: 'temple',
  color: '#2F4550', colorDeep: '#1A272C',
  teaser: 'One of the most beautiful cities in Europe stands on ground that had to be raised out of a marsh by conscripts who dug it with their hands.',
  body: [
    'Peter I wanted Russia to be a European power with a European capital and a warm-water fleet. He chose a site he had just taken from Sweden — a flood-prone delta of marsh and islands at the eastern end of the Baltic, with no stone, no timber of the right kind nearby, and a subsoil that would not carry a building. It was, by every practical measure, the wrong place. He built there anyway, because it faced west.',
    'The method was compulsion. Tens of thousands of conscripted labourers — serfs, prisoners, Swedish prisoners of war, and men levied from provinces across Russia on annual quotas — were marched in each season. They drove piles into the mud and carried earth, in many accounts, in the skirts of their own coats for want of barrows. Peter banned masonry construction in the rest of Russia so that every stonemason in the country would have to come to his city, and required every cart and boat arriving to bring a quota of stone.',
    'Contemporary claims of a hundred thousand dead are now generally regarded as too high; serious modern estimates run to tens of thousands over the first decades, from malaria, dysentery, exposure and exhaustion. The phrase "the city built on bones" is Russian, not foreign, and it is old.',
    'What he got was extraordinary: within a century, one of the great planned cities of Europe, with the Winter Palace, the Nevsky Prospekt, the Academy of Sciences, and Russian literature and music largely made in it. It dragged an inward-facing empire into the European system in a single lifetime, along with his other coercions — the beard tax, forced Western dress, the Table of Ranks, a navy from nothing.',
    'Two centuries later the same city endured the siege of Leningrad, 872 days, during which something like a million civilians starved to death defending what Peter\'s conscripts had raised out of the mud.'
  ],
  cost: 'Tens of thousands of forced labourers dead in the founding decades. Peter also had his own son Alexei arrested, interrogated under torture and killed. The serfdom he tightened to fund the transformation lasted another 150 years.',
  reckoning: 'The city is genuinely magnificent and its foundations are genuinely graves. The question this shelf exists to keep open is whether the first fact is allowed to settle the second.'
},

{
  id: 'great-leap',
  shelf: 'ledger',
  title: 'The Great Leap Forward',
  kicker: 'The largest famine in human history, produced on purpose by policy',
  where: 'China',
  when: '1958–1962',
  who: 'Mao Zedong',
  icon: 'furnace',
  color: '#7A360A', colorDeep: '#4A1F05',
  teaser: 'Six hundred million people were mobilised at once — and between fifteen and forty-five million of them starved.',
  body: [
    'The mobilisation itself was without precedent. In under two years, essentially the entire rural population of China — some 600 million people — was reorganised into around 26,000 people\'s communes. Tens of millions were put to work on irrigation, dams and reservoirs. Six hundred thousand backyard furnaces were built to make steel in the villages. As an exercise in reaching and moving a population, no state had ever done anything on that scale.',
    'Almost all of it destroyed value. The backyard steel was cast from melted-down farm tools, pots and door hinges, and came out as pig iron too brittle to use — so the countryside lost its implements and gained slag. The irrigation works were built without survey or engineering and many silted, collapsed or salted the land; the Banqiao dam, built in this period, failed catastrophically in 1975 and killed tens of thousands more. Fields were sown according to Lysenkoist theory: seed at many times the correct density, on the doctrine that plants of the same class do not compete. The Four Pests campaign had the population kill sparrows in their hundreds of millions, and the insects the sparrows had eaten came in the following year.',
    'The famine was made by reporting. Local officials, under quota pressure and terrified of being called rightists, declared harvests that did not exist. The state then requisitioned grain as a share of the declared figure — and in some provinces took the actual harvest and more. China went on exporting grain through the worst of it. Peasants who fled were stopped by the household registration system. Peng Dehuai, the defence minister, wrote privately to Mao describing what he had seen in his home province; he was denounced, removed and later died in detention.',
    'Estimates of the dead range from around 15 million to 45 million, with most serious scholarship clustering between 20 and 36 million. There is documented cannibalism in the provincial archives. It ended when the policy was quietly abandoned; Mao lost operational control for several years, and took it back with the Cultural Revolution.'
  ],
  cost: 'Between 15 and 45 million dead in four years, the largest famine ever recorded, in peacetime, in a country that was exporting food.',
  reckoning: 'Nobody starved for want of an achievable target. They starved because everyone in the chain was punished for reporting the truth. A system that cannot hear bad news will eventually be told nothing but lies, and then it will act on them.'
},

{
  id: 'congo-free-state',
  shelf: 'ledger',
  title: 'The King\'s Private Country',
  kicker: 'One man owned a territory the size of western Europe, personally',
  where: 'Congo',
  when: '1885–1908',
  who: 'Leopold II of Belgium · E. D. Morel · Roger Casement',
  icon: 'chain',
  color: '#4A1F05', colorDeep: '#2A1103',
  teaser: 'He never went there. He ran it by post, extracted a colossal fortune, and built Brussels with it.',
  body: [
    'At the Berlin Conference of 1884–85 the European powers recognised the Congo Free State — not as a Belgian colony, but as the personal property of King Leopold II, who had lobbied for it with a humanitarian and anti-slavery prospectus. He never set foot in it. It was some seventy-six times the size of Belgium.',
    'The organising fact was rubber. When the pneumatic tyre created world demand in the 1890s, Leopold\'s administration imposed rubber quotas on villages, enforced by the Force Publique. Soldiers were required to account for expended ammunition, so severed hands were collected and presented as proof that cartridges had been used on people rather than game — and once hands became the currency of accounting, hands were taken from the living to cover shortfalls. Hostage-taking of women and children to compel the men to tap rubber was standing procedure.',
    'The population loss over the period is genuinely disputed — the frequently cited figure of ten million comes from Adam Hochschild working from an estimate of a halving of the population, and other historians argue for a lower or much less certain number, complicated by smallpox and sleeping sickness epidemics. What is not disputed is that the mortality was catastrophic and that it was driven by a forced-labour regime.',
    'It was ended by an investigation, not a war. E. D. Morel, a Liverpool shipping clerk, noticed that ships went out to the Congo full of guns and chains and came back full of rubber and ivory, with no trade goods going in — which meant the rubber was not being bought but taken. He gave up his career and campaigned. Roger Casement, the British consul, travelled the interior and produced a report that could not be dismissed. The Congo Reform Association became one of the first mass human-rights movements. In 1908 the Belgian parliament forced Leopold to hand the territory over to the state.',
    'Leopold\'s profits built the Royal Museum for Central Africa, the arcades at Tervuren, the Cinquantenaire arch and much of monumental Brussels. Before the transfer he had the Free State archives burned — reportedly for eight days — saying that the Congo was his and no one had the right to know what he had done in it.'
  ],
  cost: 'Mass death on a scale historians still argue over, a system of mutilation as bookkeeping, and a set of civic monuments in Europe paid for out of it.',
  reckoning: 'It was stopped by a clerk who read shipping manifests properly. Atrocity at scale requires accounts, and accounts can be read by anyone who decides to look.'
},

{
  id: 'cecil-rhodes',
  shelf: 'ledger',
  title: 'Cecil Rhodes',
  kicker: 'He controlled the world\'s diamonds by thirty-seven and had two countries by forty',
  where: 'Southern Africa',
  when: '1870–1902',
  who: 'Cecil John Rhodes · Lobengula · Leander Starr Jameson',
  icon: 'crown',
  color: '#5E1F26', colorDeep: '#381014',
  teaser: 'A sickly boy sent to Africa for his lungs controlled the world diamond supply by thirty-seven and two countries by forty. Almost nothing about him is simple.',
  body: [
    'Rhodes arrived in Natal at seventeen, in poor health, and went to the Kimberley diamond fields. Over the next twenty years he consolidated hundreds of competing claims into De Beers Consolidated Mines, which by 1891 controlled something like ninety per cent of the world\'s rough diamond production — one of the most complete corporate monopolies ever assembled, and the ancestor of the industry that still exists. He did this while intermittently going back to Oxford to finish his degree, which took him eight years.',
    'His ambition was territorial and explicitly imperial: a British corridor from the Cape to Cairo, and, as he wrote in his own confession of faith at twenty-three, the extension of British rule as far as possible on the grounds that the English were the finest race in the world. He obtained a royal charter for the British South Africa Company and used it to occupy the land north of the Limpopo, which was then named Rhodesia after him. He was Prime Minister of the Cape Colony from 1890 to 1896.',
    'The methods were hard and are fully documented. The Rudd Concession of 1888, on which the whole occupation rested, was obtained from King Lobengula of the Ndebele by misrepresentation; when Lobengula grasped what he had signed he repudiated it and sent envoys to London, and was ignored. The Company then took the country by force in two wars, using the Maxim gun against spearmen. As Cape premier Rhodes passed the Glen Grey Act, a labour-tax and land measure he himself called a Bill for Africa and which is generally read as a foundation stone of later segregation policy. In 1895 he sponsored the Jameson Raid, a private armed attempt to overthrow the government of a neighbouring republic; it failed farcically, destroyed his premiership, and helped bring on the Second Boer War.',
    'The country he founded then had a long and prosperous chapter, and this is the part usually left out. By the mid-twentieth century Rhodesia was one of the more developed economies in the region — a large commercial-farming exporter often called the breadbasket of southern-central Africa, with working cities, industry, railways and a standard of living high for the continent, though under white-minority rule. After that rule ended, the same territory as Zimbabwe went through the land seizures of the 2000s, the collapse of commercial agriculture, and one of the worst hyperinflations ever recorded; millions of Zimbabweans left to find work elsewhere. By the plainest test — whether people were trying to get in or to get out — the country was doing better in its prosperous decades than in the ruin that followed. Which chapter a person leads with tends to decide what they think of the man who started it.',
    'He died at forty-eight. His will left the bulk of his fortune to found the Rhodes Scholarships, which have educated thousands of people from across the world — including many who spent their careers dismantling exactly what he built. Zimbabwe took its name in 1980. His statue was removed from the University of Cape Town in 2015 after a campaign that gave its name to a global argument about which of these facts should stand in bronze.'
  ],
  cost: 'Two conquests, a territory taken on a document obtained by deception, a war provoked by private adventure, and legislation that shaped a century of racial land policy in southern Africa.',
  reckoning: 'The two halves of him do not cancel — the diamond monopoly, the scholarships and the country that prospered for generations under the flag he planted on one side; the deception, the conquests and the racial laws on the other. Both are real. Where you stand decides which one you see first.'
},

{
  id: 'grand-canal-sui',
  shelf: 'ledger',
  title: 'The Grand Canal',
  kicker: 'It united China for fourteen centuries and destroyed the dynasty that dug it',
  where: 'China',
  when: '605–609 (and long before and after)',
  who: 'Emperor Yang of Sui',
  icon: 'canal',
  color: '#2F4550', colorDeep: '#1A272C',
  teaser: 'The longest artificial waterway in the world, dug by millions of conscripts in six years. It is still in use. He lost the empire over it.',
  body: [
    'China\'s great rivers run west to east, so the north and south of the country had never been properly joined. Emperor Yang of Sui set out to connect them: a canal system linking the Yellow River, the Huai and the Yangtze, running eventually some 1,700 kilometres from Hangzhou to the region of Beijing. Parts of it existed already, going back to the fifth century BC. Yang joined, widened and extended them into one system in about six years.',
    'It worked, and it kept working. Grain from the fertile south could now feed the armies and capitals of the north. Historians of China generally regard the canal as one of the decisive facts of the country\'s political unity — the physical reason a single state could hold together across such distances for so long. It is the longest and oldest artificial waterway on earth and sections of it still carry freight today.',
    'The labour was conscripted on a scale that is hard to hold in the mind. Contemporary and later histories describe levies running into the millions, with commoners\' wives and daughters drafted when the men ran out, worked under overseers on a fixed schedule. Deaths are recorded in the hundreds of thousands and by some accounts far more. Yang also rebuilt the eastern capital at Luoyang with a comparable levy, repaired the Great Wall, and then threw the exhausted country into three catastrophic invasions of Goguryeo.',
    'The result was rebellion everywhere. Yang withdrew south to Jiangdu on his imperial barges and was strangled in 618 by his own guard officers. The Sui dynasty lasted thirty-seven years in total and is remembered in Chinese historiography as the classic example of a regime that achieved enormous things and collapsed from the pace of them. The Tang, who took over, inherited the canal and ruled for nearly three centuries on it.'
  ],
  cost: 'Conscript levies in the millions and deaths in the hundreds of thousands within a few years; a dynasty destroyed and a period of civil war before the Tang restored order.',
  reckoning: 'The canal was right and the schedule was murderous, and both judgements are permanent. A ruler who can compel anything must supply his own limit, because nothing else will.'
},

{
  id: 'aral-sea',
  shelf: 'ledger',
  title: 'The Sea They Spent',
  kicker: 'The fourth largest lake on earth was drained on purpose, for cotton',
  where: 'Soviet Central Asia',
  when: '1960s–present',
  who: 'The Soviet Ministry of Water Resources',
  icon: 'wave',
  color: '#7A6A4A', colorDeep: '#4A3F2A',
  teaser: 'The engineers knew it would happen. It was in the plan. They had calculated that the cotton was worth more than the sea.',
  body: [
    'The Aral Sea covered about 68,000 square kilometres and was the fourth largest lake in the world. Two rivers fed it, the Amu Darya and the Syr Darya. From the 1960s the Soviet Union diverted both into an enormous irrigation network to grow cotton in the deserts of Uzbekistan and Turkmenistan — the Karakum Canal alone runs some 1,400 kilometres, and much of the system was unlined, so a large share of the water simply soaked away or evaporated before reaching a field.',
    'The most instructive detail is that this was not an accident or an oversight. Soviet planners understood the sea would shrink. Documents and the recollections of officials indicate the loss was accepted as a rational trade: cotton was a hard-currency export, and the Aral\'s fishery was not. One official is quoted as saying the sea must die beautifully.',
    'By 2007 it was at about a tenth of its original area and had broken into separate remnants. The exposed seabed — some 60,000 square kilometres of it — is salt and pesticide-laden dust, lifted by the wind and dropped on the surrounding region, where rates of respiratory disease, anaemia and infant mortality rose sharply. The fishing fleet of Moynaq sits on sand, thirty kilometres from any water, and is now a tourist photograph. The local climate itself changed: without the moderating body of water, summers grew hotter and winters colder. Vozrozhdeniya Island, once a Soviet biological weapons test site surrounded by water, ceased to be an island.',
    'One part has been partially recovered. The Kok-Aral dam, completed in 2005 with World Bank support, sealed off the northern lobe, and the North Aral Sea has risen substantially; the fish came back and the fishery at Aralsk restarted. The southern sea is essentially gone.'
  ],
  cost: 'An inland sea, a regional fishery employing tens of thousands, the health of a population, and the climate of a region — all traded for a cotton monoculture that also exhausted the soil it was grown on.',
  reckoning: 'This was not a mistake; it was an accounting. Every catastrophe of this kind was once a column of figures in which the thing destroyed had no line of its own.'
},

{
  id: 'berlin-wall',
  shelf: 'ledger',
  title: 'The Wall Built Inwards',
  kicker: 'A hundred and fifty-five kilometres of engineering aimed at its own citizens',
  where: 'Berlin',
  when: '1961–1989',
  who: 'Walter Ulbricht · the SED',
  icon: 'wall',
  color: '#3F4650', colorDeep: '#22262C',
  teaser: 'Nobody has ever built a fortification of that quality to keep people in. That is the only thing you need to know about the state that built it.',
  body: [
    'Between 1949 and 1961 something like 2.7 million people left East Germany for the West, and they were disproportionately the young, the trained and the educated. The state was bleeding the people it most needed. On the night of 12–13 August 1961 the border through Berlin was closed with barbed wire, laid in hours by police and workers\' militia; the concrete followed.',
    'Over twenty-eight years it was rebuilt four times into a serious military installation: an inner wall, a signal fence, a graded strip raked to show footprints, anti-vehicle trenches, dog runs, 302 watchtowers, floodlights, and finally a smooth concrete outer wall 3.6 metres high topped with a pipe too wide to grip. Around 155 kilometres of it, engineered with real competence. Two days after it went up, Conrad Schumann, a nineteen-year-old border guard, jumped the wire and the photograph went round the world.',
    'At least 140 people were killed at the Berlin Wall, and estimates for the whole inner-German border run considerably higher. Peter Fechter, eighteen, was shot in 1962 and left to bleed to death in the death strip in view of both sides for about an hour. Around 5,000 people got across anyway — in tunnels, in modified cars, in a homemade hot air balloon, on a zip line fired from a rooftop.',
    'The Wall fell on 9 November 1989, essentially by mistake: an East German spokesman, Günter Schabowski, was handed a note about a new travel regulation shortly before a press conference, had not read it properly, and when asked when it took effect said, as far as he knew, immediately. It was broadcast. Tens of thousands of Berliners walked to the crossings, and the guards, with no orders that fitted the situation, opened them.'
  ],
  cost: 'At least 140 dead at the Berlin Wall and many more along the inner-German border; a divided city and a population held for twenty-eight years by force.',
  reckoning: 'When a government has to build works of that quality to stop its own people leaving, the argument about that government is finished. Watch which way the guns point.'
},

{
  id: 'suez-canal',
  shelf: 'ledger',
  title: 'The Suez Canal',
  kicker: 'A hundred and sixty kilometres cut through the desert to join two seas the earth had kept apart',
  where: 'Isthmus of Suez, Egypt',
  when: '1859–1869',
  who: 'Ferdinand de Lesseps · Sa\'id and Isma\'il of Egypt',
  icon: 'canal',
  color: '#1F7A8C', colorDeep: '#12525E',
  teaser: 'A French diplomat with no engineering training talked an empire into letting him cut a sea-level channel across the desert — and changed the map of world trade for good.',
  body: [
    'For four thousand years anything moving between the Mediterranean and the Indian Ocean had to sail all the way round Africa. Ferdinand de Lesseps, a former French consul with charm, patience and no formal engineering, was convinced a sea-level canal could be cut straight across the Isthmus of Suez. In 1854 he obtained a concession from his friend Sa\'id, the ruler of Egypt, to form a company and dig it. Almost every authority in Britain, the great maritime power, called it impossible or a swindle, and London opposed it for a decade — rightly sensing what it would do to the route to India.',
    'The work ran from 1859 to 1869 across a hundred and sixty-odd kilometres of desert, salt marsh and shallow lake, with so little fresh water on site that a supply canal had to be dug from the Nile just to keep the workforce alive. The early years were done by corvée, the traditional Egyptian labour draft: something like 400,000 peasants were rotated through the works over its course, tens of thousands at a time, digging by hand. When international pressure forced the corvée to be scaled back, de Lesseps brought in the machines that finished it — custom dredgers and excavators that shifted the bulk of some seventy million cubic metres of spoil.',
    'The human cost of those early years was heavy: deaths from cholera, exhaustion and thirst ran into the tens of thousands, though the popular figure of 120,000 dead is now regarded as far too high and rests on no good record. The canal opened in November 1869 with an imperial festival attended by half the royalty of Europe, and it worked at once and completely — the sea journey from London to Bombay fell by around 40 per cent, and within a few years most of the world\'s steam shipping was passing through it.',
    'The money is where the story turns. Egypt had taken on ruinous debt, partly for the canal and the modernisation around it, and by 1875 the ruler Isma\'il was bankrupt. He sold Egypt\'s 44 per cent shareholding to the British government, which Disraeli bought overnight on a loan from the Rothschilds — and Britain went from the canal\'s chief opponent to its largest shareholder. Debt then handed the European powers control of Egypt\'s finances; unrest followed; and in 1882 Britain invaded and occupied the country, an occupation that lasted in one form or another into the 1950s.',
    'The canal itself never stopped mattering. Nasser nationalised it in 1956 and set off an international crisis; war closed it for eight years after 1967; a single grounded container ship blocked it for six days in 2021 and threw world trade into disorder. It remains one of the few places on earth where a few kilometres of water set the price of nearly everything.'
  ],
  cost: 'Tens of thousands of forced labourers dead in the early digging, and a mountain of Egyptian debt that cost the country first its financial independence and then its sovereignty, under British occupation from 1882.',
  reckoning: 'The canal is one of the most useful things ever built, and it helped hand Egypt to its creditors — both are true, and the engineering no more caused the debt than the debt dug the canal. A magnificent achievement and a national catastrophe ran through the very same ground.'
},

{
  id: 'manhattan-project',
  shelf: 'ledger',
  title: 'The Manhattan Project',
  kicker: 'In three years, from a standing start, a country built a new kind of fire',
  where: 'United States',
  when: '1942–1945',
  who: 'Leslie Groves · J. Robert Oppenheimer · some 130,000 workers',
  icon: 'flame',
  color: '#8C3A1E', colorDeep: '#57230F',
  teaser: 'To build the first atomic bomb the United States raised three secret cities, spent two billion wartime dollars, and told almost none of the 130,000 people involved what they were making.',
  body: [
    'When physicists established in 1938–39 that a uranium nucleus could be split and might sustain a chain reaction, the fear among American and émigré scientists was simple: Germany could get there first. A small research effort became, under the US Army and General Leslie Groves, one of the largest industrial undertakings ever attempted in the time available — and it had to invent most of its own methods as it went.',
    'The scale is hard to credit. Three secret cities were built from nothing: Oak Ridge in Tennessee, where vast plants enriched uranium and the population went from a few thousand to seventy-five thousand; Hanford in Washington, which made plutonium in the first industrial-scale reactors; and Los Alamos in New Mexico, where the weapon itself was designed under the physicist J. Robert Oppenheimer. At its height the project employed around 130,000 people and cost roughly two billion dollars in 1945 money. Compartmentalisation was total; almost none of the workers knew what they were building.',
    'It worked. The first device was tested at Trinity in the New Mexico desert on 16 July 1945; watching it, Oppenheimer reached for a line from the Bhagavad Gita, "now I am become Death, the destroyer of worlds." Germany had already surrendered. The two bombs were used on Japan, at Hiroshima and Nagasaki that August, killing well over a hundred thousand people, most of them civilians, and Japan surrendered within days.',
    'Whether that ended the war and spared the far greater casualties an invasion of Japan was expected to cost, or whether it was an atrocity a nearly beaten enemy did not require, is one of the genuinely unsettled arguments of the century, and honest people hold both views. What is not in doubt is that the project compressed decades of physics and industry into three years and opened the nuclear age — the bomb, but also the reactor, the ships that run on it, and a great-power peace held in place for seventy years by fear of the thing.',
    'Most of its scientists spent the rest of their lives arguing about what they had done. Oppenheimer pressed for international control of the weapon and had his security clearance stripped in 1954 for his trouble. The knowledge, once it existed, could not be handed back.'
  ],
  cost: 'Well over a hundred thousand killed by the two bombs, most of them civilians; a weapon that has hung over every generation since; and a scientific establishment that never made peace with its own success.',
  reckoning: 'The same discovery is a weapon that can end civilisations and an engine that lights cities, and nothing in the physics tells you which to build. It is the clearest case on the shelf of an achievement whose meaning is settled entirely by what people decide to do with it.'
},

{
  id: 'great-wall',
  shelf: 'ledger',
  title: 'The Great Wall of China',
  kicker: 'A wall long enough to cross a continent, built to keep the steppe out — until a general opened the gate',
  where: 'Northern China',
  when: 'Ming dynasty, 1368–1644 (and long before)',
  who: 'The Ming emperors · conscripts, soldiers and convicts',
  icon: 'wall',
  color: '#8A5A2B', colorDeep: '#573818',
  teaser: 'The wall everyone pictures is mostly the work of one dynasty that spent two centuries, and a fortune in lives, fortifying its northern frontier in brick and stone.',
  body: [
    'There was never one wall. Chinese states had built frontier walls of rammed earth since before the first emperor unified the country in 221 BC. What visitors walk today — dressed stone, brick, watchtowers strung along the ridgelines north of Beijing — is overwhelmingly the work of the Ming, who after 1368 spent much of two centuries rebuilding the northern defences against the Mongols on a scale no earlier dynasty had attempted. The best-preserved Ming line runs some 8,850 kilometres; counting every wall of every period, the total passes 21,000.',
    'It was a system, not a fence: a rampart wide enough to move men and horses along the top, studded with signal towers that could pass warning of a raid hundreds of kilometres in a few hours by smoke and fire, backed by garrisons and granaries. Building it across desert, mountain and gorge, and feeding the works in country that grew nothing, was an organisational feat as much as an engineering one.',
    'It was raised by conscript labour — soldiers in work battalions, convicts serving sentences, peasants levied under the corvée — in hard country and worse weather, on short rations. The death toll is genuinely unknown: the figures often quoted, up to 400,000 or even a million, are guesses resting on no reliable record, and the old story that the dead were built into the wall is a legend, since corpses would only have weakened it. That the human cost over two centuries was enormous is not in doubt; the number is.',
    'And the hard fact hangs over all of it: in 1644 the wall did not save the dynasty that built it. A Ming general, Wu Sangui, holding the great fortified pass at Shanhaiguan where the wall meets the sea, chose to open the gate to the Manchus rather than submit to a rebel who had just taken Beijing. The Qing came through and ruled China for the next 268 years. The wall was only ever as strong as the loyalty of the man holding the gate.',
    'None of which stopped it becoming, in the centuries since, the enduring emblem of the country — the one human structure almost everyone can name, and visible proof of what a civilisation will spend to hold a line.'
  ],
  cost: 'An unknown but vast number of labourers dead over two centuries, a colossal share of the Ming state\'s resources — and a frontier breached in the end not by storming the wall but by a general opening a gate.',
  reckoning: 'It is at once one of the great works of the human hand and a monument to the limits of walls: the strongest fortification on earth failed at the single point where a man decided not to hold it. Whether it bought the security it was built for, or only ever looked as though it might, is still argued.'
},

{
  id: 'aswan-high-dam',
  shelf: 'ledger',
  title: 'The Aswan High Dam',
  kicker: 'He tamed the Nile\'s flood for the first time in history — and stopped the silt that had fed Egypt for five thousand years',
  where: 'Aswan, Egypt',
  when: '1960–1970',
  who: 'Gamal Abdel Nasser · Soviet engineers',
  icon: 'dam',
  color: '#2F7A6B', colorDeep: '#1B4C43',
  teaser: 'To free Egypt from the Nile\'s yearly flood and drought, Nasser dammed the river with Soviet money — and drowned a homeland and its temples behind it.',
  body: [
    'For all of recorded history Egypt had lived and died by the Nile\'s annual flood: a good inundation fed the country, a poor one meant famine, and no one could choose which came. Gamal Abdel Nasser made mastering it the centrepiece of an independent Egypt. When the United States and Britain withdrew their offer to fund a high dam at Aswan in 1956, he nationalised the Suez Canal to pay for it — touching off the Suez Crisis — and then took the money and the engineers from the Soviet Union instead.',
    'Built between 1960 and 1970, the dam is a colossus: an embankment over three and a half kilometres long holding back Lake Nasser, one of the largest reservoirs on earth, five hundred kilometres long. For the first time the flood could be stored in the high years and released in the low ones. It ended the ancient cycle of flood and famine, carried Egypt through the severe droughts of the 1980s that wrecked much of the region, opened a great deal of new farmland, and for a time its power station supplied around half the country\'s electricity.',
    'The costs came in three kinds. Around a hundred thousand people — Egyptian and Sudanese Nubians — were moved off land their families had held for millennia and resettled far away, a whole culture displaced by the rising lake. The monuments of ancient Nubia would have drowned with them, and an eight-year UNESCO campaign cut the temples of Abu Simbel from the cliff and lifted them, block by block, sixty metres higher — one of the first great acts of international heritage rescue, born directly of the dam.',
    'And the river itself changed. The flood had always carried rich silt that renewed the fields and the Delta; the dam now traps it behind the wall. Egyptian farming became dependent on artificial fertiliser, the Mediterranean began eating into the undefended Delta coast, and the year-round still water in the canals gave the snails that carry bilharzia a permanent home — though how far the disease actually rose is debated. Egypt swapped a wild river it could not control for a tame one whose gifts it now has to buy.',
    'By the plainest measure it was a success: the famines stopped, the lights came on, and the population it feeds has more than tripled since. What it cost was a lost homeland, a changed river, and a country that can never again simply wait for the water to come.'
  ],
  cost: 'Around a hundred thousand Nubians displaced and a homeland drowned; the end of the silt that fertilised Egypt for five thousand years; a coastline and a river permanently altered.',
  reckoning: 'It did exactly what it was built to do, and the bill for doing it will be paid forever, in fertiliser and lost coast. Whether five thousand years of the river\'s own renewal was worth trading for a switch that turns the flood on and off is the kind of question this shelf exists to leave open.'
},

{
  id: 'channel-tunnel',
  shelf: 'ledger',
  title: 'The Channel Tunnel',
  kicker: 'An idea dreamed of since Napoleon, feared for two centuries, and finally dug — at nearly double the price',
  where: 'Dover Strait, England–France',
  when: '1988–1994',
  who: 'Eurotunnel · some 13,000 workers',
  icon: 'rail',
  color: '#4F6D7A', colorDeep: '#32464F',
  teaser: 'Britain and France finally joined their coasts with a fifty-kilometre tunnel under the sea — a triumph of engineering that ruined almost everyone who paid for it.',
  body: [
    'A tunnel under the Channel was first seriously put to Napoleon in 1802, and again and again through the nineteenth century; the sticking point was never really the digging but the fear, mostly British, of handing an invader a dry road into England. Trial workings were begun and abandoned in the 1880s on exactly those grounds. It took until 1988 for the two governments to commit, and the decisive condition was that no public money would build it — it would be financed entirely by private investors, through a company called Eurotunnel.',
    'The engineering was a genuine triumph. Eleven boring machines dug three parallel tunnels — two for trains, a service tunnel between them — over fifty kilometres, thirty-eight of them under the seabed, the longest undersea stretch of tunnel in the world. The teams driving from the English and French sides met beneath the Channel in 1990 within a couple of centimetres of true. Around 13,000 workers built it in six years; ten of them were killed during construction. Queen Elizabeth II and President Mitterrand opened it in May 1994.',
    'The money was a rout. The build came in around 80 per cent over budget — some £4.65 billion against the original estimate, and higher still by later accountings — and the traffic and revenue fell far short of the forecasts that had drawn people in. Eurotunnel spent its early years crushed under billions in debt; its share price collapsed; and the ordinary investors urged to buy in, many of them small British and French savers, lost most of their money in a string of restructurings.',
    'And yet the thing is simply there, and it works. You can board a train in London and be in Paris in a little over two hours; freight crosses on a shuttle; the Strait, an obstacle for all of recorded history, is now a thirty-five-minute ride. The tunnel that bankrupted its backers became a piece of ordinary European infrastructure it is now impossible to imagine living without.'
  ],
  cost: 'Ten workers killed in construction, and billions lost by the banks and the small shareholders who financed it, wiped out in successive debt restructurings.',
  reckoning: 'The engineers delivered everything they promised and the finances delivered a wreck — which raises the uncomfortable possibility that some works worth building could never be built if the people paying knew the true price in advance. The passengers got the tunnel; the investors got the bill.'
},

{
  id: 'darien-scheme',
  shelf: 'ledger',
  title: 'The Darien Scheme',
  kicker: 'A small nation bet a quarter of its wealth on a colony in the jungle, and lost the bet and its independence',
  where: 'Isthmus of Panama',
  when: '1698–1700',
  who: 'The Company of Scotland · William Paterson',
  icon: 'anchor',
  color: '#3A5E8C', colorDeep: '#243E60',
  teaser: 'Scotland tried to make itself a trading power in a single stroke by planting a colony on the isthmus of Panama. It failed so completely that it helped end Scotland as an independent country.',
  body: [
    'In the 1690s Scotland was poor, shut out of England\'s trade monopolies, and desperate for a way into the wealth the age was making. William Paterson — a Scot who had helped found the Bank of England — had a dazzling idea: plant a colony at Darien, on the isthmus of Panama, and it would become the emporium of the world, the place where goods crossed between the Atlantic and the Pacific by land instead of sailing round Cape Horn. On a map, it was brilliant.',
    'The nation believed him. The Company of Scotland raised the money by public subscription, and the response was both extraordinary and ruinous: something like a quarter of all the liquid capital in Scotland was poured in — by nobles, merchants, burghs and ordinary people — until much of the country had a personal stake in it. In 1698 five ships carried around 1,200 colonists out to found "Caledonia."',
    'Almost everything that could go wrong did. The site was fever country, and the settlers sickened and died in numbers. The goods they had brought to trade — wigs, combs, heavy woollen cloth — were useless in the tropics. England, not wanting to provoke Spain, which claimed the coast, forbade its own colonies to send any help. The Spanish moved against them. The first colony was abandoned; a second fleet arrived to find the huts empty, dug in, was besieged, and surrendered. Of the roughly 2,000 who sailed, only a few hundred ever came home.',
    'The financial blow to a small country was catastrophic, and it fell at the exact moment England was pressing for a union of the two kingdoms. The 1707 Act of Union included an "Equivalent" — a sum of English money that, among other things, compensated the ruined shareholders of the Company of Scotland. To Scots ever since it has been the argument that will not settle: whether the nation was bought, or rescued, out of a hole it had dug for itself.',
    'The colony left almost nothing on the ground — a few earthworks lost in the Panamanian jungle. What it left in history was a country that had staked everything on one audacious idea and, in losing, ceased to be a state of its own.'
  ],
  cost: 'Around 2,000 colonists dead, a quarter of Scotland\'s liquid wealth lost, and an independent kingdom so weakened that within seven years it was gone.',
  reckoning: 'The idea was not stupid — two centuries later others cut the Panama Canal a few miles away and grew rich on exactly Paterson\'s insight. It was early, under-resourced and unlucky, and it is the shelf\'s sharpest reminder that the line between a visionary and a fool is often only whether the thing worked.'
}

]);
