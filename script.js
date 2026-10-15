const decks = {
  unit1: [
    { question: 'veniamoci incontro', answer: 'let\'s meet in the middle' },
    { question: 'facciamo in nero', answer: 'let\'s do it off the books' },
    { question: 'magagna', answer: 'flaw; ailment' },
    { question: 'il chierichetto', answer: 'altar boy' },
    { question: 'sgamato', answer: 'sussed out' },
    { question: 'sgamare', answer: 'to suss out; to figure out' },
    { question: 'calarsi', answer: 'to get high; to climb down' },
    { question: 'ci calavamo le pasticche', answer: 'We were dropping pills' },
    { question: 'sequestrare', answer: 'seize; abduct; impound' },
    { question: 'la manodopera', answer: 'manpower' },
    { question: 'morbo di Basedow', answer: 'Graves disease' },
    { question: 'la tiroide', answer: 'thyroid' },
    { question: 'l\'articolazione', answer: 'joint (phys)' },
    { question: 'la ghiaia', answer: 'gravel' },
    { question: 'la ghiandola', answer: 'gland' },
    { question: 'il budello', answer: 'intestines; guts; backstreet' },
    { question: 'l\'orzaiolo', answer: 'stye' },
    { question: 'scialbo', answer: 'wan; faint; colourless' },
    { question: 'scrosciante', answer: 'pounding' },
    { question: 'scimmiottare', answer: 'to mimic; to mock' },
    { question: 'la biglia', answer: 'marble; billiard ball' },
    { question: 'palesemente', answer: 'obviously; visibly' },
    { question: 'staripare', answer: 'to overflow' },
    { question: 'non mi si addice', answer: 'it doesn\'t suit me' },
    { question: 'lagna', answer: 'whinging; moaning; whiner' },
    { question: 'l\'ecografia', answer: 'ultrasound' },
    { question: 'il biancospino', answer: 'hawthorn' },
    { question: 'l\'agrofoglio', answer: 'tree' },
    { question: 'la bacca', answer: 'berry' },
    { question: 'assecondare', answer: 'cat' },
    { question: 'la toccasana', answer: 'cure-all; panacea' },
    { question: 'risaia', answer: 'paddy; rice field' },
    { question: 'dinnanzi', answer: 'in front; before' },
    { question: 'la disdetta', answer: 'cancellation; misfortune' },
    { question: 'il clavicembalo', answer: 'harpsichord' },
    { question: 'il lutto', answer: 'grief; sorrow; mourning' },
    { question: 'arrendevole', answer: 'flexible; yielding' },
    { question: 'l\'aneto', answer: 'dill' },
    { question: 'dente del giudizio', answer: 'wisdom tooth' },
    { question: 'l\'ingessatura', answer: 'cast (med.)' },
    { question: 'l\'imbottitura', answer: 'padding; filling' },
    { question: 'la farcitura', answer: 'stuffing; filling' },
    { question: 'il padiglione', answer: 'pavilion' },
    { question: 'il volantino', answer: 'pamphlet' },  
    { question: 'l\'anestetizzante', answer: 'numbing agent' },
    { question: 'latitanza', answer: 'being in hiding; being on the run' },
    { question: 'la fede (nuziale)', answer: 'wedding ring' },
    { question: 'la feccia', answer: 'dregs; sediment' },
  ],
  unit2: [
    { question: 'la lince', answer: 'lynx' },
    { question: 'il ravanello', answer: 'radish' },
    { question: 'incasinato', answer: 'messy; overwhelmed; swamped' },
    { question: 'atteggiamento', answer: 'demeanor; attitude' },
    { question: 'bacino idrico', answer: 'reservoir (town)' },
    { question: 'cisterna', answer: 'reservoir; tank' },
    { question: 'il patrigno', answer: 'stepfather' },
    { question: 'la matrigna', answer: 'stepmother' },
    { question: 'il fratellastro', answer: 'stepbrother; half-brother' },
    { question: 'la sorellastra', answer: 'stepsister; half-sister' },
    { question: 'il suocero', answer: 'father-in-law' },
    { question: 'la suocera', answer: 'mother-in-law' },
    { question: 'il cognato', answer: 'brother-in-law' },
    { question: 'la cognata', answer: 'sister-in-law' },
    { question: 'la nonna acquisita', answer: 'stepgrandmother' },
    { question: 'il nonno acquisito', answer: 'stepgrandfather' },
    { question: 'russare', answer: 'to snore' },
    { question: 'starnutire', answer: 'to sneeze' },
    { question: 'ruttare', answer: 'to burp' },
    { question: 'scorreggiare', answer: 'to fart' },
    { question: 'il cannochiale', answer: 'telescope' },
    { question: 'sfogare', answer: 'to pour out; to vent' },
    { question: 'dileguarsi', answer: 'to vanish' },
    { question: 'tetro', answer: 'dark; gloomy' },
    { question: 'ringhiare', answer: 'to growl' },
    { question: 'straripare', answer: 'to overflow' },
    { question: 'seno', answer: 'sinus; breast' },
    { question: 'sinusale', answer: 'sinus (adj.)' },
    { question: 'babordo', answer: 'port (side)' },
    { question: 'il gru', answer: 'crane (bird & machine)' },
    { question: 'vizioso', answer: 'depraved; nefarious' },
    { question: 'l\'ovovia', answer: 'gondola lift' },
    { question: 'l\'ortica', answer: 'nettle' },
    { question: 'il vanto', answer: 'pride; merit' },
    { question: 'fermaglio', answer: 'barrette; hair clip; paper clip' },
    { question: 'bozzolo', answer: 'cocoon; lump' },
    { question: 'il vigneto', answer: 'vineyard' },
    { question: 'fiocco', answer: 'bow; flake' },
    { question: 'il chicco', answer: 'grain; grape; bead' },
    { question: 'chicchi di caffè', answer: 'coffee bean' },
    { question: 'lo spiffero', answer: 'draught (uk); draft' },
    { question: 'abusivo', answer: 'unauthorized; illegal (person); abusive' },
    { question: 'bonario', answer: 'good-natured' },
    { question: 'crepa', answer: 'crack; fissure; conflict' },
  ],
    unit3: [
    { question: 'ridere a crepapelle', answer: 'burst with laughter' },
    { question: 'a crepapelle', answer: 'uncontrollably; to the point of bursting' },
    { question: 'arrancare', answer: 'to limp; to hobble; to plod' },
    { question: 'zoppicare', answer: 'to limp' },
    { question: 'il cantiere', answer: 'construction site' },
    { question: 'il capocantiere', answer: 'site manager; foreman' },
    { question: 'l\'acconciatura', answer: 'hairstyle; hairdo' },
    { question: 'l\'hairstyling', answer: 'hair styling' },
    { question: 'il parrucchiere', answer: 'hairstylist' },
    { question: 'la parrucchiera', answer: 'hairstylist' },
    { question: 'il barbiere', answer: 'barber' },
    { question: 'edile', answer: 'construction (adj)' },
    { question: 'l\'edile', answer: 'construction worker' },
    { question: 'in sostanza', answer: 'basically; in essence' },
    { question: 'recarsi', answer: 'to go (fml.)' },
    { question: 'a rilento', answer: 'slowly' },
    { question: 'supporre', answer: 'to presume; to assume' },
    { question: 'la tuta', answer: 'tracksuit' },
    { question: 'capi da tennis', answer: 'tennis clothes' },
    { question: 'completo da calcio', answer: 'soccer kit' },
    { question: 'colare', answer: 'to trickle; to drizzle; to pour slowly' },
    { question: 'il tonfo', answer: 'thud; plop' },
    { question: 'effetto collaterale', answer: 'side effect' },
    { question: 'dispersivo', answer: 'dispersive; disorganized' },
    { question: 'interreligioso', answer: 'interfaith' },
    { question: 'colata di fango', answer: 'mudslide' },
    { question: 'la valanga', answer: 'avalanche' },
    { question: 'il nubifragio', answer: 'downpour' },
    { question: 'lo smoking', answer: 'tuxedo; dinner jacket' },
    { question: 'la quaresima', answer: 'lent' },
    { question: 'la guarigione', answer: 'recovery' },
    { question: 'la guarnizione', answer: 'seal; gasket; garnish' },
    { question: 'il neo', answer: 'mole; beauty mark' },
    { question: 'la nube', answer: 'cloud' },
    { question: 'sterzare', answer: 'to steer; to turn; to swerve' },
    { question: 'percorribile', answer: 'accessible; walkable' },
    { question: 'tanto', answer: 'at any rate; just' },
    { question: 'cospicuo', answer: 'conspicuous; important' },
    { question: 'il groviglio', answer: 'tangle; knot' },
    { question: 'il riscatto', answer: 'ransom; release' },
    { question: 'la reggia ', answer: 'palace; royal residence' },
    { question: 'ingranare', answer: 'to engage (mecc); to take off (success)' },
    { question: 'schizzinoso', answer: 'fussy; picky' },
    { question: 'canalizzare', answer: 'to channel; to divert' },
    { question: 'la concorrenza', answer: 'competition; competitor' },
    { question: 'premuroso', answer: 'thoughtful; caring' },
    { question: 'placca', answer: 'badge; plaque (dent.); plate' },
    { question: 'la briga', answer: 'hassle; trouble' },
    { question: 'la toeletta', answer: 'dressing table' },
    { question: 'grintoso', answer: 'scrappy; gutsy' },
    { question: 'infranto', answer: 'broken; shattered' },
  ],
      unit4: [
    { question: 'la platea', answer: 'orchestra (seat.); stalls' },
    { question: 'desumere', answer: 'to presume; to conclude' },
    { question: 'biascicare', answer: 'to mumble; to nibble' },
    { question: 'sovrastare', answer: 'to dominate; to overlook (sth.); loom over' },
    { question: 'stritolare', answer: 'to grind; to crush' },
    { question: 'sghignazzare', answer: 'to sneer' },
    { question: 'l\'orma', answer: 'footprint; footstep' },
    { question: 'prima maniera', answer: 'early (art)' },
    { question: 'spietato', answer: 'cruel; ruthless' },
    { question: 'la diga', answer: 'dam' },
    { question: 'la ruspa', answer: 'bulldozer' },
    { question: 'fanale', answer: 'light (auto.)' },
    { question: 'per un pelo', answer: 'nearly' },
    { question: 'ribadire', answer: 'reiterate' },
    { question: 'celare', answer: 'to conceal; to hide' },
    { question: 'pur', answer: 'just to; in order to; even if' },
    { question: 'fremere', answer: 'to tremble' },
    { question: 'il premio', answer: 'premium (pymt); award' },
    { question: 'il sussidio', answer: 'subsidy' },
    { question: 'la cronaca', answer: 'report; account; news section' },
    { question: 'giacere', answer: 'to lie; to recline' },
    { question: 'livido', answer: 'livid; black and blue' },
    { question: 'il livido', answer: 'bruise' },
    { question: 'il fascicolo', answer: 'file; booklet' },
    { question: 'il bossolo', answer: 'case; casing' },
    { question: 'depistare', answer: 'mislead' },
    { question: 'la scheggia', answer: 'splinter; sliver' },
    { question: 'ci sta', answer: 'ottima idea' },
    { question: 'lo sbatti', answer: 'bother' },
    { question: 'scocciatura', answer: 'bother; nuisance' },
    { question: 'zero sbatta', answer: 'zero voglia' },
    { question: 'non ho sbatta', answer: 'non ho voglia' },
    { question: 'tanta roba', answer: 'excellent' },
    { question: 'un botto', answer: 'un sacco' },
    { question: 'balla', answer: 'that works' },
    { question: 'ne azzecco una', answer: 'I\'m killing it' },
    { question: 'non ne azzecco una', answer: 'I can\'t catch a break' },
    { question: 'spiccare il volo', answer: 'take flight' },
    { question: 'dirtene quattro', answer: 'give you the business' },
    { question: 'toelletatura', answer: 'grooming' },
    { question: 'mi sa che...', answer: 'I guess...' },
    { question: '...che fa per te', answer: '... that suits you' },
    { question: 'scocciare', answer: 'to pester; to bother' },
    { question: 'ti scoccia', answer: 'it/he/she bothers you' },
    { question: 'a dirla tutta', answer: 'as a matter of fact' },
    { question: 'non mi quadra', answer: 'it doesn\'t add up to me' },
    { question: 'rimetterci le penne', answer: 'die; end up badly hurt' },
    { question: 'beccare', answer: 'to peck; to catch; to get scolded' },
    { question: 'beccarsi una protesta', answer: 'to get a complaint' },
    { question: 'incaponirsi', answer: 'to persist; dig one\'s heels in' },
  ],
        unit5: [
    { question: 'ne faccio a meno', answer: 'I\'ll pass; I\'ll do without' },
    { question: 'pippare', answer: 'to snort' },
    { question: 'cocainomane', answer: 'coke head' },
    { question: 'il consiglio', answer: 'board; council; advice' },
    { question: 'la commissione', answer: 'board; committee; order' },
    { question: 'su commissione', answer: 'on order' },
    { question: 'il righello', answer: 'ruler (meas.)' },
    { question: 'andare in palla', answer: 'to freeze; to blank' },
    { question: 'andare in tilt', answer: 'to go haywire' },
    { question: 'il discorso', answer: 'speech; subject; conversation ' },
    { question: 'l\'intervento', answer: 'operation (med.); intervention; speech' },
    { question: 'la chirurgia', answer: 'surgery (ward; branch)' },
    { question: 'chirurgico', answer: 'surgical' },
    { question: 'il chirurgo', answer: 'surgeon' },
    { question: 'il pronto soccorso', answer: 'emergency room; first aid' },
    { question: 'lindo', answer: 'clean; tidy' },
    { question: 'errore ortografico', answer: 'theater' },
    { question: 'l\'accordo', answer: 'accord; agreement; pact' },
    { question: 'la concordanza', answer: 'agreement; treaty' },
    { question: 'il burattino', answer: 'puppet' },
    { question: 'pupazzo', answer: 'doll; stuffed toy; puppet' },
    { question: 'fare un taglio', answer: 'to get a (hair)cut' },
    { question: 'faccio styling con lo scrunch', answer: 'I style by scrunching' },
    { question: 'il diffusatore', answer: 'diffuser' },
    { question: 'ovvero', answer: 'after' },
    { question: 'va a mille all\'ora', answer: 'goes 1000 (mi/km) an hour' },
    { question: 'me la lego al dito', answer: 'I\'ll remember it' },
    { question: 'la miriade', answer: 'myriad' },
    { question: 'appunto', answer: 'precisely' },
    { question: 'intraprendente', answer: 'can you help me?' },
    { question: 'lo schienale', answer: 'seatback' },
    { question: 'il sedile', answer: 'seat (transport)' },
    { question: 'l\'accappatoio', answer: 'bathrobe' },
    { question: 'sopraffatto', answer: 'overwhelmed; overpowered' },
    { question: 'il palo', answer: 'pole; post; column' },
    { question: 'botto', answer: 'ton/shit ton; bang; thud' },
    { question: 'l\'inquadratura', answer: 'framing; shot' },
    { question: 'la tappa', answer: 'phase; leg; stop-over' },
    { question: 'il tappo', answer: 'top; cap; cork' },
    { question: 'l\'ideazione', answer: 'design; conception' },
    { question: 'la sfumatura', answer: 'shade; nuance; hue' },
    { question: 'l\'allestimento', answer: 'preparation; staging; trimmings' },
    { question: 'il vernissage', answer: 'art show preview/inauguration' },
    { question: 'il finissage', answer: 'closing day/event' },
    { question: 'il mecenate', answer: 'patron of the arts' },
    { question: 'la matericità', answer: 'materiality; texture' },
    { question: 'il tratto', answer: 'line; stroke; passage; move (chess)' },
    { question: 'la tiratura', answer: 'circulation; edition' },
    { question: 'l\'asta', answer: 'auction' },
    { question: 'battitore d\'asta', answer: 'auctioneer' },
    { question: 'il battitore', answer: 'batter' },
    { question: 'la pinacoteca', answer: 'art gallery (painting)' },
    { question: 'la gipsoteca', answer: 'plaster cast gallery' },
  ],
          unit6: [
    { question: 'il tema', answer: 'topic; essay; theme' },
    { question: 'il giorno', answer: 'day (calendar)' },
    { question: 'la giornata', answer: 'day (morning to evening)' },
    { question: 'la mattina', answer: 'morning' },
    { question: 'il pomeriggio', answer: 'afternoon' },
    { question: 'la sera', answer: 'evening' },
    { question: 'la notte', answer: 'night' },
    { question: 'la settimana', answer: 'week' },
    { question: 'il weekend', answer: 'weekend' },
    { question: 'il fine settimana', answer: 'weekend' },
    { question: 'il cameriere', answer: 'server (m.)' },
    { question: 'la cameriera', answer: 'server (f.)' },
    { question: 'il commesso', answer: 'clerk (m.)' },
    { question: 'la commessa', answer: 'clerk (f.)' },
    { question: 'il medico', answer: 'doctor' },
    { question: 'il/la farmacista', answer: 'pharmacist' },
    { question: 'il turno', answer: 'shift; turn' },
    { question: 'la proiezione', answer: 'showing; projection' },
    { question: 'l\'ora', answer: 'hour; time' },
    { question: 'ora', answer: 'now' },
    { question: 'oggi', answer: 'today' },
    { question: 'spesso', answer: 'often' },
    { question: 'domani', answer: 'tomorrow' },
    { question: 'dopodomani', answer: 'the day after tomorrow' },
    { question: 'ieri', answer: 'yesterday' },
    { question: 'l\'altro ieri', answer: 'the day before yesterday' },
    { question: 'serale', answer: '[of the] evening (adj.)' },
    { question: 'diurno', answer: '[of the] day (adj.)' },
    { question: 'notturno', answer: '[of the] night (adj.)' },
    { question: 'chiuso', answer: 'closed' },
    { question: 'aperto', answer: 'open' },
    { question: 'orario di apertura', answer: 'opening time(s)' },
    { question: 'orario di chiusura', answer: 'closing time(s)' },
    { question: 'verso', answer: 'around; towards' },
    { question: 'così', answer: 'like this; so; thus' },
    { question: 'non fa niente', answer: 'it\'s fine; it doesn\'t matter' },
    { question: 'in orario', answer: 'on time' },
    { question: 'fino a', answer: 'until' },
    { question: 'ogni tanto', answer: 'every once in awhile' },
    { question: 'a/alla settimana', answer: 'per week' },
    { question: 'a quanto pare', answer: 'it appears that; apparently' },
    { question: 'Andrò a fare la spesa.', answer: 'I will go to do the shopping.' },
    { question: 'Comprerai delle pere', answer: 'You will buy some pears.' },
    { question: 'Maria mangerà con noi.', answer: 'Maria will eat with us.' },
    { question: 'potranno', answer: 'they will be able to' },
    { question: 'farete', answer: 'you(pl.) will do/make' },
    { question: 'saremo', answer: 'we will be' },
  ],
            unit7: [
    { question: 'lo sport', answer: 'sport; exercise' },
    { question: 'calcio', answer: 'soccer; football (UK)' },
    { question: 'pallacanestro', answer: 'basketball' },
    { question: 'la ginnastica', answer: 'gymnastics; fitness; P.E.' },
    { question: 'la danza', answer: 'dance' },
    { question: 'lo yoga', answer: 'yoga' },
    { question: 'l\'allenamento', answer: 'exercise; training' },
    { question: 'l\'escursione', answer: 'hiking; hike; excursion' },
    { question: 'il passatempo', answer: 'pastime; hobby' },
    { question: 'l\'hobby', answer: 'hobby' },
    { question: 'lo strumento', answer: 'instrument' },
    { question: 'la metropolitana', answer: 'subway' },
    { question: 'la spiaggia', answer: 'beach' },
    { question: 'la palestra', answer: 'gym' },
    { question: 'il ragazzo', answer: 'kid; guy; boyfriend' },
    { question: 'la ragazza', answer: 'kid; girl; girlfriend' },
    { question: 'il fidanzato', answer: 'fiancé; long-term boyfriend' },
    { question: 'la fidanzata', answer: 'fiancée; long-term girlfriend' },
    { question: 'rottura', answer: 'drag; bummer' },
    { question: 'il piano', answer: 'plan; floor (of a building)' },
    { question: 'la pioggia', answer: 'rain (n.)' },
    { question: 'la nuvola', answer: 'cloud' },
    { question: 'il sole', answer: 'sun' },
    { question: 'libero', answer: 'available; free' },
    { question: 'assai', answer: 'very much; a lot' },
    { question: 'pure', answer: 'also' },
    { question: 'preferito', answer: 'favourite; preferred' },
    { question: 'solito', answer: 'usual; customary' },
    { question: 'impressionante', answer: 'amazing; impressive' },
    { question: 'dunque', answer: 'well; so; therefore' },
    { question: 'grande! (inf.)', answer: 'awesome!' },
    { question: 'di solito', answer: 'usually' },
    { question: 'a piedi', answer: 'by foot; walking' },
    { question: 'prossimo', answer: 'next' },
    { question: 'giocare a calcio', answer: 'to play soccer' },
    { question: 'giocare a scacchi', answer: 'to play chess' },
    { question: 'come va?', answer: 'how\'s it going?' },
    { question: 'non vedo l\'ora...', answer: 'I can\'t wait...' },
    { question: 'chiedere scusa', answer: 'to apologize' },
    { question: 'Stiamo per mangiare.', answer: 'We are about to eat.' },
    { question: 'il dispositivo', answer: 'device' },
    { question: 'la canzone', answer: 'song' },
    { question: 'Non c\'è niente da mangiare', answer: 'There is nothing to eat' },
    { question: 'così tanto', answer: 'so much' },
  ],
              unit8: [
    { question: 'l\'aeroporto', answer: 'airport' },
    { question: 'l\'aereo', answer: 'airplane' },
    { question: 'il volo', answer: 'flight' },
    { question: 'partenze', answer: 'departures' },
    { question: 'arrivi', answer: 'arrivals' },
    { question: 'il biglietto', answer: 'ticket' },
    { question: 'la postazione automatica', answer: 'self-service kiosk' },
    { question: 'la biglietteria', answer: 'ticket booth; ticketing' },
    { question: 'la carta d\'imbarco', answer: 'boarding pass' },
    { question: 'l\'autonoleggio', answer: 'car rental' },
    { question: 'la valigia', answer: 'suitcase' },
    { question: 'il bagaglio', answer: 'luggage' },
    { question: 'il ritiro bagagli', answer: 'baggage claim' },
    { question: 'l\'agenzia di viaggi', answer: 'travel agency' },
    { question: 'la stazione', answer: 'station' },
    { question: 'il treno', answer: 'train' },
    { question: 'il tassì/il taxi', answer: 'taxi' },
    { question: 'il viaggio', answer: 'trip; voyage' },
    { question: 'il/la turista', answer: 'tourist' },
    { question: 'la guida', answer: 'guide' },
    { question: 'il giro', answer: 'tour' },
    { question: 'l\'albergo', answer: 'hotel' },
    { question: 'la pensione', answer: 'boarding house; pension' },
    { question: 'lo scalo', answer: 'stopover' },
    { question: 'gratis', answer: 'free (of charge)' },
    { question: 'andata e ritorno', answer: 'round trip' },
    { question: '(di) sola andata', answer: 'one-way (trip)' },
    { question: 'diretto', answer: 'direct' },
    { question: 'un\'oretta', answer: 'about an hour' },
    { question: 'A me servono i soldi.', answer: 'I need money' },
    { question: 'A me serve una vacanza.', answer: 'I need a vacation/holiday.' },
    { question: 'Vado a piedi', answer: 'I walk/I go by foot' },
    { question: 'Vado in macchina', answer: 'I go by car.' },
    { question: 'Scendo dalla macchina.', answer: 'I get out of the car.' },
    { question: 'Vado in città', answer: 'I\'m going to town.' },
    { question: 'Andrei in città', answer: 'I would go to town.' },
    { question: 'Vorrei un caffè', answer: 'I would like a coffee.' },
    { question: 'Potresti aiutarmi?', answer: 'Could you help me? [inf.]' },
    { question: 'Dovremmo dormire', answer: 'We should sleep.' },
    { question: 'Ce li ho', answer: 'I have them' },
    { question: 'Ce l\'hai con me?', answer: 'Are you mad at me?' },
    { question: 'Sto dormendo', answer: 'I am sleeping' },
    { question: 'Stai dormendo', answer: 'You are sleeping' },
    { question: 'State dormendo', answer: 'You (pl.) are sleeping' },
    { question: 'Mi sto divertendo', answer: 'I am having fun.' },
  ],
               unit9: [
    { question: 'la testa', answer: 'head' },
    { question: 'la gola', answer: 'throat' },
    { question: 'lo stomaco', answer: 'stomach' },
    { question: 'la schiena', answer: 'back (anat.)' },
    { question: 'il mal di testa', answer: 'headache' },
    { question: 'la compressa', answer: 'pill; tablet' },
    { question: 'il raffreddore', answer: 'common cold' },
    { question: 'l\'influenza', answer: 'flu' },
    { question: 'il dottore', answer: 'doctor (m.)' },
    { question: 'la dottoressa', answer: 'doctor (f.)' },
    { question: 'il pronto soccorso', answer: 'emergency room' },
    { question: 'la medicina', answer: 'medicine' },
    { question: 'le vitamine', answer: 'vitamins' },
    { question: 'gli appunti', answer: 'notes' },
    { question: 'compagno/a di classe', answer: 'classmate' },
    { question: 'sicuramente', answer: 'definitely; surely' },
    { question: 'rimanere indietro', answer: 'to fall behind' },
    { question: 'andare in giro', answer: 'to go around; to go for a stroll' },
    { question: 'prendere in giro', answer: 'to tease; to make fun of' },
    { question: 'cos\'hai?', answer: 'what\'s wrong (with you)?' },
    { question: 'Qui si mangia bene.', answer: 'One eats well here. (The food is good.)' },
    { question: 'il gin', answer: 'knee' },
    { question: 'le ginocchia', answer: 'knees' },
    { question: 'il braccio', answer: 'arm' },
    { question: 'le braccia', answer: 'arms' },
    { question: 'la mano', answer: 'hand' },
    { question: 'le mani', answer: 'hands' },
    { question: 'l\'orecchio', answer: 'ear' },
    { question: 'le orecchie', answer: 'ears' },
    { question: 'il labbro', answer: 'lip' },
    { question: 'le labbra', answer: 'lips' },
    { question: 'il ciglio', answer: 'eyelash' },
    { question: 'le ciglia', answer: 'eyelashes' },
    { question: 'le sopracciglia', answer: 'eyebrows.' },
    { question: 'il sopracciglio', answer: 'eyebrow' },
    { question: 'il dito', answer: 'finger' },
    { question: 'le dita', answer: 'fingers' },
    { question: 'la febbre', answer: 'fever' },
    { question: 'la mente', answer: 'mind; intellect; brains' },
    { question: 'il mento', answer: 'chin' },
    { question: 'la faccia', answer: 'face' },
    { question: 'il naso', answer: 'nose' },
    { question: 'la distorsione', answer: 'sprain' },
    { question: 'Spegni la luce', answer: 'Turn off the light.' },
    { question: 'Non fumare', answer: 'Don\'t smoke' },
    { question: 'Svegliati', answer: 'Wake up.' },
    { question: 'il più caro libro', answer: 'the most expensive book' },
    { question: 'la più lunga strada', answer: 'the longest road' }
  ],
  
               unit10: [
    { question: 'l\'appartamento', answer: 'apartment' },
    { question: 'i servizi', answer: 'bathrooms (real estate)' },
    { question: 'il bagno', answer: 'bathroom' },
    { question: 'l\'esigenza', answer: 'need; requirement' },
    { question: 'il soggiorno', answer: 'living room' },
    { question: 'la sala da pranzo', answer: 'dining room' },
    { question: 'il salotto', answer: 'the living room' },
    { question: 'la cucina', answer: 'kitchen' },
    { question: 'la camera da letto', answer: 'bedroom' },
    { question: 'il palazzo', answer: 'apartment building; palace' },
    { question: 'il condominio', answer: 'condo; apartment building' },
    { question: 'il cortile', answer: 'courtyard' },
    { question: 'il piano', answer: 'floor (of a building)' },
    { question: 'l\'agenzia immobiliare', answer: 'real estate agency' },
    { question: 'l\'agente immobiliare', answer: 'real estate agent' },
    { question: 'l\'annuncio', answer: 'listing; announcement; ad' },
    { question: 'la comodità', answer: 'comfort; convenience' },
    { question: 'in affitto', answer: 'rented; for rent' },
    { question: 'prendere in affitto', answer: 'to rent' },
    { question: 'Ci penso io.', answer: 'I\'ll handle it' },
    { question: 'prendere una decisione', answer: 'to make a decision' },
    { question: 'farò del tutto...', answer: 'I\'ll do everything I can...' },
    { question: 'dispone di tutto', answer: 'it has/offers everything' },
    { question: 'spazioso', answer: 'spatious' },
    { question: 'l\'ascensore', answer: 'elevator' },
    { question: 'il proprietario', answer: 'owner; landlord' },
    { question: 'la disponibilità', answer: 'availability' },
    { question: 'Non ce la faccio più', answer: 'I can\'t take it anymore.' },
    { question: 'Cosa ne pensi?', answer: 'What do you think (of it/them)?' },
    { question: 'Ne vale la pena', answer: 'It\'s worth it' },
    { question: 'cioè', answer: 'meaning...; in other words...' },
    { question: 'Entri pure', answer: 'Please (go ahead and) come in (fml.)' },
    { question: 'Stia tranquillo/a', answer: 'don\'t worry (fml.)' },
    { question: 'Stia calmo/a', answer: 'calm dowm (fml.)' },
    { question: 'Penso che Gino sia bella.', answer: 'I think she/it is beautiful.' },
  ],
                 unit11: [
    { question: 'il gusto', answer: 'taste; flavour' },
    { question: 'il sapore', answer: 'flavour' },
    { question: 'l\'odore', answer: 'odor; scent' },
    { question: 'il senso', answer: 'sense; feeling' },
    { question: 'la sensazione', answer: 'sensation; feeling' },
    { question: 'l\'udito', answer: 'hearing' },
    { question: 'la vista', answer: 'sight; view' },
    { question: 'i sentimenti', answer: 'feelings; emotions' },
    { question: 'la felicità', answer: 'happiness' },
    { question: 'la tristezza', answer: 'sadness' },
    { question: 'lo stress', answer: 'stress' },
    { question: 'l\'ansia', answer: 'anxiety' },
    { question: 'la noia', answer: 'boredom' },
    { question: 'la rabbia', answer: 'rage; anger' },
    { question: 'l\'entusiasmo', answer: 'enthusiasm; excitement' },
    { question: 'la stanchezza', answer: 'tiredness' },
    { question: 'la paura', answer: 'fear' },
    { question: 'la delusione', answer: 'disappointment' },
    { question: 'la menta', answer: 'mint' },
    { question: 'l\'esito', answer: 'outcome' },
    { question: 'il voto', answer: 'vote; grade' },
    { question: 'stressante', answer: 'stressful' },
    { question: 'pure', answer: 'also; of course; go ahead' },
    { question: 'agitato', answer: 'upset; shaken' },
    { question: 'dai!', answer: 'come on!' },
    { question: 'che emozione!', answer: 'how exciting!' },
    { question: 'essere in ansia', answer: 'to be anxious/ worried' },
    { question: 'essere in crisi', answer: 'to be struggling/ in crisis' },
    { question: 'sa di menta', answer: 'it tastes like mint' },
    { question: 'ci sentiamo dopo', answer: 'we\'ll talk later' },
    { question: 'chiudere un\'occhio ', answer: 'to turn a blind eye' },
    { question: 'entusiasta', answer: 'enthusiastic; eager' },
    { question: 'cosicché', answer: 'therefore' },
  ],
};

const deckLabelMap = {
  unit1: 'Unità 1',
  unit2: 'Unità 2',
  unit3: 'Unità 3',
  unit4: 'Unità 4',
  unit5: 'Unità 5',
  unit6: 'Unità 6',
  unit7: 'Unità 7',
  unit8: 'Unità 8',
  unit9: 'Unità 9',
  unit10: 'Unità 10',
  unit11: 'Unità 11',
};

const cardBtn = document.getElementById('cardBtn');
const progressLabel = document.getElementById('progressLabel');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const deckCount = document.getElementById('deckCount');
const deckTitle = document.getElementById('deckTitle');
const deckSelect = document.getElementById('deckSelect');
const modeButtons = document.querySelectorAll('.mode-chip');
const hero = document.getElementById('hero');
const toggleHeaderBtn = document.getElementById('toggleHeaderBtn');
const instructionsPanel = document.querySelector('.info-panel');
const toggleInstructionsBtn = document.getElementById('toggleInstructionsBtn');
const quizPanel = document.getElementById('quizPanel');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const wrongSound = new Audio('audio/failure.wav')
const correctSound = new Audio('audio/positive-blip.wav');
const muteBtn = document.getElementById('muteBtn'); // Grab the HTML button
const endScreen = document.getElementById('deckEndContainer');
const restartBtn = document.getElementById('restartBtn');
const starBtn = document.getElementById('starBtn');
const markedOption = document.getElementById('markedOption');
const synth = window.speechSynthesis;

let isMuted = false;
let currentDeck = 'unit1';
let mode = 'flip';
let currentIndex = 0;
let isFlipped = false;
let touchStartX = 0;
let touchStartY = 0;
let markedCards = []; 
let studyMarkedOnly = false;


function speakItalian(text) {
  if (!text || isMuted) return; // Ignores if muted or empty

  // Cancel any speech currently playing so audio doesn't overlap
  if (synth.speaking) {
    synth.cancel();
  }

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT'; // Standard Italian accent
    utterance.rate = 0.85;    // Clear learning speed

    // Explicitly target Italian voice (fixes silent playback on iOS Safari)
    const voices = synth.getVoices();
    const italianVoice = voices.find((v) => v.lang.startsWith('it'));
    if (italianVoice) {
      utterance.voice = italianVoice;
    }

    synth.speak(utterance);
  };

  // Handle Chrome's asynchronous voice loading
  if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = () => {
      speak();
      synth.onvoiceschanged = null; // Clean up listener
    };
  } else {
    speak();
  }
}
const speakerBtn = document.getElementById('speakIcon'); 

if (speakerBtn) {
  speakerBtn.addEventListener('click', (event) => {
    // Stops click from flipping the flashcard
    event.stopPropagation(); 

    // Get current card data directly to ensure clean text
    const deck = getCurrentDeck();
    const currentCard = deck[currentIndex];

    if (currentCard && currentCard.question) {
      speakItalian(currentCard.question);
    } else {
      const fallbackText = cardFront.textContent.trim();
      speakItalian(fallbackText);
    }
  });
}

function getCurrentDeck() {
  if (currentDeck === 'marked') {
    // Combine all decks and filter down to only the ones the user starred
    const allCards = [...decks.unit1, ...decks.unit2, ...decks.unit3, ...decks.unit4,...decks.unit5,...decks.unit6,...decks.unit7,...decks.unit8,...decks.unit9,...decks.unit10, ...decks.unit11];
    return allCards.filter(card => markedCards.includes(card.question));
  }
  return decks[currentDeck] || decks.unit1;
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
  function buildQuizOptions(deck, correctAnswer) {
  // 1. Collect potential wrong answers from the active deck
  let distractors = deck
    .map((item) => item.answer)
    .filter((answer) => answer && answer !== correctAnswer);

  // --- THE SAFETY CHECK ---
//If the active deck doesn't have at least 3 UNIQUE wrong answers,
  // pool distractor choices from ALL available decks as a fallback
  const uniqueDistractors = new Set(distractors);
  if (uniqueDistractors.size < 3) {
    const allCards = Object.values(decks).flat();
    const backupDistractors = allCards
      .map((item) => item.answer)
      .filter((answer) => answer && answer !== correctAnswer);

    distractors = [...distractors, ...backupDistractors];
  }

const options = new Set([correctAnswer]);
  let maxAttempts = 100; // Safeguard against infinite loops

  while (options.size < 4 && distractors.length > 0 && maxAttempts > 0) {
    maxAttempts--;
    const randomAnswer = distractors[Math.floor(Math.random() * distractors.length)];
    if (randomAnswer) {
      options.add(randomAnswer);
    }
  }

  return shuffle([...options]);
}

function renderCard() {
  if (endScreen) endScreen.classList.remove('end-screen-revealed'); // 👈 ADD THIS LINE
  if (endScreen) endScreen.classList.add('end-screen-shrouded');
  const deck = getCurrentDeck();
  const card = deck[currentIndex] || deck[0];

  currentIndex = Math.min(currentIndex, deck.length - 1);
  cardFront.textContent = card.question;
  cardBack.textContent = card.answer;
  // --- STAR BUTTON VISUAL UPDATE ---
  if (starBtn) {
    if (markedCards.includes(card.question)) {
      starBtn.textContent = '★ Salvata';
      starBtn.style.color = '#ffcc00'; // Turn it gold
    } else {
      starBtn.textContent = '☆ Ripasso';
      starBtn.style.color = ''; // Reset color
    }
  }
  // ---------------------------------
  progressLabel.textContent = `${currentIndex + 1} / ${deck.length}`;
  deckCount.textContent = `${deck.length} carte`;
  cardBtn.classList.remove('flipped');
  isFlipped = false;
  quizFeedback.textContent = '';

if (mode === 'quiz') {
    cardBtn.classList.add('hidden');
    quizPanel.classList.remove('hidden');
    quizOptions.innerHTML = '';

    // The quiz loop belongs INSIDE the mode check block
    buildQuizOptions(deck, card.answer).forEach((answer) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'quiz-option';
      button.textContent = answer;
      button.addEventListener('click', () => {
        const isCorrect = answer === card.answer;
        
        if (isCorrect) {
          // --- UPDATED: ADD CORRECT STYLING & FEEDBACK ---
          button.classList.add('correct');
          quizFeedback.textContent = 'Corretto! Bravo.';

          if (!isMuted) {
            try {
              correctSound.currentTime = 0;
              correctSound.play().catch((error) => {
                console.warn("Playback prevented by browser:", error);
              });
            } catch (audioError) {
              console.error("Audio error:", audioError);
            }
          }

          // --- NEW: AUTO-ADVANCE BEHAVIOR WITH 1s DELAY ---
          setTimeout(() => {
            if (currentIndex < getCurrentDeck().length - 1) {
              nextCard(); 
            } else {
              quizFeedback.textContent = 'Ottimo lavoro! Hai completato questo set!';
            }
          }, 1000);

        } else {
          // --- UPDATED: ADD WRONG STYLING & FEEDBACK ---
          button.classList.add('wrong');
          quizFeedback.textContent = `Non proprio. Prova di nuovo!`;

          // --- WAV AUDIO PLAYBACK WITH MUTE CHECK ---
          if (!isMuted) {
            try {
              wrongSound.currentTime = 0;
              wrongSound.play().catch((error) => {
                console.warn("Playback prevented by browser:", error);
              });
            } catch (audioError) {
              console.error("Audio error:", audioError);
            }
          }
          // -----------------------------------------------------
        }
      });
      quizOptions.appendChild(button);
    });
  } else {
    // If we are NOT in quiz mode, make sure the regular flashcard stays visible
    cardBtn.classList.remove('hidden');
    quizPanel.classList.add('hidden');
  }
  
}

function toggleCard() {
  isFlipped = !isFlipped;
  cardBtn.classList.toggle('flipped', isFlipped);
}

function nextCard() {
  const deck = getCurrentDeck();
  
  // Check if we just finished the last card
  if (currentIndex === deck.length - 1) {
    showEndScreen(true);
    return;
  }
  
  currentIndex++;
  renderCard();
}

function prevCard() {
  if (currentIndex === 0) return; // Prevent going past the first card

  // FIX: Check for 'end-screen-revealed' to see if the end screen is active
  if (endScreen && endScreen.classList.contains('end-screen-revealed')) {
    showEndScreen(false);
    return;
  }

  currentIndex--;
  renderCard();
}

function showEndScreen(shouldShow) {
  if (shouldShow) {
    // Hide standard layout panels cleanly
    cardBtn?.classList.add('hidden');
    quizPanel?.classList.add('hidden');
    if (speakerBtn) speakerBtn.style.display = 'none';
    // Set the announcement text
   cardFront.innerHTML = `<div class="completion-wrap"><span class="completion-text">Hai completato il mazzo!</span></div>`;
    cardBack.innerHTML = `<div class="completion-wrap"><span class="completion-text">Hai completato il mazzo!</span></div>`;
    
    // Keep frame rendering visible
    cardBtn?.classList.remove('hidden', 'flipped');
    isFlipped = false;
    
    // SWAP CLASSES: Hide original frame rule and display the container
    endScreen?.classList.remove('end-screen-shrouded');
    endScreen?.classList.add('end-screen-revealed');
    
    progressLabel.textContent = "Completato!";
  } else {
    // RE-ENABLE SPEAKER BUTTON when restarting or returning to deck
    if (speakerBtn) speakerBtn.style.display = 'inline-flex';
    // SWAP CLASSES BACK: Hide the container immediately
    endScreen?.classList.remove('end-screen-revealed');
    endScreen?.classList.add('end-screen-shrouded');
    
    renderCard();
  }
}

function restartDeck() {
  currentIndex = 0;
  showEndScreen(false);
}

function shuffleCards() {
  const deck = getCurrentDeck();
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  currentIndex = 0;
  renderCard();
}

function switchDeck(newDeck) {
  currentDeck = newDeck;
  currentIndex = 0;
  if (deckSelect) deckSelect.value = newDeck;
  renderCard();
}

function switchMode(newMode) {
  mode = newMode;
  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === newMode);
  });
  renderCard();
}

function setHeaderVisible(visible) {
  hero?.classList.toggle('hero-collapsed', !visible);
  if (toggleHeaderBtn) {
    toggleHeaderBtn.textContent = visible ? 'Nascondi intestazione' : 'Mostra intestazione';
  }
}

function toggleHeader() {
  if (!hero) return;
  const shouldShow = hero.classList.contains('hero-collapsed');
  setHeaderVisible(shouldShow);
}

function setInstructionsVisible(visible) {
  instructionsPanel?.classList.toggle('collapsed', !visible);
  if (toggleInstructionsBtn) {
    toggleInstructionsBtn.textContent = visible ? 'Nascondi istruzioni' : 'Mostra istruzioni';
  }
}

function toggleInstructions() {
  if (!instructionsPanel) return;
  const shouldShow = instructionsPanel.classList.contains('collapsed');
  setInstructionsVisible(shouldShow);
}

cardBtn.addEventListener('click', () => {
  toggleCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});

cardBtn.addEventListener('touchstart', (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

cardBtn.addEventListener('touchend', (event) => {
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;

  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
    event.preventDefault();
    if (deltaX < 0) nextCard();
    else prevCard();
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
    return;
  }

  if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) {
    event.preventDefault();
    toggleCard();
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
  }
}, { passive: false });

prevBtn.addEventListener('click', () => {
  prevCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
nextBtn.addEventListener('click', () => {
  nextCard();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
shuffleBtn.addEventListener('click', () => {
  shuffleCards();
  if (hero && !hero.classList.contains('hero-collapsed')) {
    setHeaderVisible(false);
  }
});
if (deckSelect) {
  deckSelect.addEventListener('change', (event) => {
    switchDeck(event.target.value);
    if (hero && !hero.classList.contains('hero-collapsed')) {
      setHeaderVisible(false);
    }
  });
}
if (toggleHeaderBtn) {
  toggleHeaderBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleHeader();
  });
}

if (toggleInstructionsBtn) {
  toggleInstructionsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleInstructions();
  });
}
if (muteBtn) {
  muteBtn.addEventListener('click', () => {
    isMuted = !isMuted; // Toggle the true/false switch
    
    // Update the button appearance/text dynamically
    if (isMuted) {
      muteBtn.textContent = '🔇 Audio Disattivato';
      muteBtn.classList.add('muted'); // Optional: for custom CSS styling later
    } else {
      muteBtn.textContent = '🔊 Audio Attivo';
      muteBtn.classList.remove('muted');
    }
  });
}
if (restartBtn) {
  restartBtn.addEventListener('click', restartDeck);
}
if (starBtn) {
  starBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the flashcard from flipping when tapping the star
    
    const deck = getCurrentDeck();
    if (deck.length === 0) return;
    const card = deck[currentIndex];

    const index = markedCards.indexOf(card.question);
    if (index === -1) {
      // Add to list
      markedCards.push(card.question);
    } else {
      // Remove from list
      markedCards.splice(index, 1);
    }

    // Update the button with the new count
    if (markedOption) {
      markedOption.textContent = `⭐Ripasso(${markedCards.length})`;
      markedOption.disabled = markedCards.length === 0; // Unlock option if count > 0
    }

    // If we are currently studying marked cards and just removed the last one, boot back to Unit 1
    if (currentDeck === 'marked' && !markedCards.includes(card.question)) {
      const remaining = getCurrentDeck();
      if (remaining.length === 0) {
        switchDeck('unit1');
        return;
      }
    }

    renderCard();
  });
}

function syncMobileInstructionVisibility() {
  const isMobile = window.matchMedia('(max-width: 980px)').matches;
  setInstructionsVisible(!isMobile);
}

// Run once on page load to set the initial state based on device size
syncMobileInstructionVisibility();

modeButtons.forEach((button) => {
  button.addEventListener('click', () => switchMode(button.dataset.mode));
});

syncMobileInstructionVisibility();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').catch((error) => {
      console.error('Service worker registration failed:', error);
    });
  });
}

renderCard();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => {
        // Check for updates automatically in the background
        reg.update();
        console.log('Service Worker registered!');
      });
  });
} 
