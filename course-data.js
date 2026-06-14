/* COURSE DATA — exhaustive, every item from the class notes */
const COURSE = [
{
  unit:1, emoji:"👋", title:"Greetings & First Words",
  intro:"Your very first French: greetings, politeness, introducing yourself, talking about languages and where you live, and saying goodbye.",
  lessons:[
    {title:"How are you? — Saying hello", blocks:[
      {type:"explain", text:"The most common opener is <strong>Comment ça va ?</strong> — literally \"How does it go?\". <strong>Comment</strong> = \"how\"."},
      {type:"vocab", items:[["Comment ça va ?","How are you?"],["Comment ?","How?"],["Bonjour","Hello / Good day"],["Bonsoir","Good evening"],["Bon après-midi","Good afternoon"]]},
      {type:"tip", text:"<strong>Tu</strong> = \"you\" for friends/family (Hindi <em>tum</em>). <strong>Vous</strong> = polite/formal \"you\" or \"you all\" (Hindi <em>aap</em>). <strong>Je</strong> = I."},
    ]},
    {title:"Magic polite words — la règle de politesse", blocks:[
      {type:"vocab", items:[["Merci !","Thank you"],["De rien","You're welcome (reply to merci)"],["Pardon !","Pardon"],["Excusez-moi !","Excuse me"],["Désolé(e)","Sorry"],["S'il vous plaît","Please (formal)"],["S'il te plaît","Please (informal)"],["Bienvenue","Welcome (to my home, to the group…)"]]},
      {type:"tip", text:"The <strong>(e)</strong> in <em>désolé(e)</em>: a woman writes <em>désolée</em> (extra -e), a man writes <em>désolé</em>. Extra -e for feminine is a pattern you'll see everywhere."},
    ]},
    {title:"Introduce yourself", blocks:[
      {type:"explain", text:"Say your name with <strong>Je m'appelle…</strong> (\"I call myself…\")."},
      {type:"examples", items:[
        {fr:"Je m'appelle Darsh. Et toi ?", en:"My name is Darsh. And you?"},
        {fr:"Comment tu t'appelles ?", en:"What's your name?"},
        {fr:"Je suis indien. / Je suis indienne.", en:"I am Indian. (male / female)"},
        {fr:"Je suis professeure. Et toi ?", en:"I am a teacher. And you?"},
        {fr:"Tu es étudiant(e) ? — Oui, je suis étudiant.", en:"Are you a student? — Yes, I'm a student."},
      ]},
      {type:"vocab", items:[["le prénom","first name (e.g. Simran)"],["le nom","last name / surname (e.g. Lalwani)"],["Je suis…","I am…"],["Tu es…","You are…"]]},
    ]},
    {title:"Talking about languages", blocks:[
      {type:"explain", text:"<strong>Je parle</strong> = I speak. <strong>et</strong> = and."},
      {type:"examples", items:[
        {fr:"Je parle trois langues : anglais, hindi et français.", en:"I speak three languages: English, Hindi and French."},
        {fr:"Je parle anglais, hindi et un peu de français.", en:"I speak English, Hindi and a little French."},
        {fr:"Tu parles combien de langues ?", en:"How many languages do you speak?"},
      ]},
      {type:"vocab", items:[["une langue","a language"],["un peu de","a little bit of"],["Combien de ?","How many?"]]},
    ]},
    {title:"Where do you live?", blocks:[
      {type:"vocab", items:[["Tu habites où ?","Where do you live?"],["Où ?","Where?"],["J'habite à Indore.","I live in Indore."]]},
    ]},
    {title:"Moments of the day & goodbyes", blocks:[
      {type:"vocab", items:[["le matin","morning"],["le midi","noon (12 o'clock)"],["l'après-midi","afternoon"],["le soir","evening"]]},
      {type:"explain", text:"<strong>Prendre congé</strong> = taking your leave:"},
      {type:"vocab", items:[["Enchanté(e)","Nice to meet you"],["Au revoir","Goodbye (formal + informal)"],["À bientôt","See you soon"],["À tout à l'heure","See you later today"],["À tout de suite","See you in a moment"],["À plus tard / À plus !","See you later (informal)"],["À demain","See you tomorrow (demain = tomorrow)"]]},
    ]},
  ],
  quiz:[
    {q:"Your friend asks your name. Correct reply?", context:"informal", opts:["Je m'appelle Darsh","Comment ça va"], answer:"Je m'appelle Darsh", why:"Je m'appelle = 'My name is'."},
    {q:"Which 'please' for your boss?", context:"formal", opts:["S'il te plaît","S'il vous plaît"], answer:"S'il vous plaît", why:"Vous = formal."},
    {q:"'A little bit of French' =", context:"", opts:["un peu de français","beaucoup de français"], answer:"un peu de français", why:"un peu de = a little bit of."},
    {q:"'See you tomorrow' =", context:"", opts:["À bientôt","À demain","Au revoir"], answer:"À demain", why:"demain = tomorrow."},
  ]
},
{
  unit:2, emoji:"🧱", title:"The Foundations",
  intro:"The building blocks: subject pronouns, être & avoir, the alphabet, numbers, days, articles, and naming objects around you.",
  lessons:[
    {title:"Subject pronouns — the people", blocks:[
      {type:"vocab", items:[["je","I"],["tu","you (informal)"],["il","he"],["elle","she"],["nous","we"],["vous","you (formal / you all)"],["ils","they (masculine / mixed)"],["elles","they (all feminine)"],["ça","informal 'it'"]]},
      {type:"tip", text:"<strong>ils</strong> vs <strong>elles</strong>: all women → <em>elles</em>; any man in the group → <em>ils</em>. Objects follow gender too: les villes (fem) → elles; les stylos (masc) → ils."},
    ]},
    {title:"Être — to be ⭐", blocks:[
      {type:"explain", text:"<strong>Être</strong> = \"to be\". Irregular — memorise it. Used for identity, nationality, profession, descriptions."},
      {type:"conj", label:"être — to be", rows:[["je","suis"],["tu","es"],["il/elle","est"],["nous","sommes"],["vous","êtes"],["ils/elles","sont"]]},
      {type:"explain", text:"<strong>L'expression « Il y a »</strong> = \"there is / there are\" — shows the presence of something."},
      {type:"examples", items:[
        {fr:"Je suis professeure.", en:"I am a teacher."},
        {fr:"Il y a 7 jours dans une semaine.", en:"There are 7 days in a week."},
      ]},
    ]},
    {title:"Avoir — to have ⭐", blocks:[
      {type:"explain", text:"<strong>Avoir</strong> = \"to have\". Used for possessions AND age."},
      {type:"conj", label:"avoir — to have", rows:[["j'","ai"],["tu","as"],["il/elle","a"],["nous","avons"],["vous","avez"],["ils/elles","ont"]]},
      {type:"tip", text:"<strong>Age uses avoir, not être!</strong> Say <em>J'ai 25 ans</em> — NEVER <em>Je suis 25 ans</em>. The #1 beginner mistake."},
      {type:"examples", items:[
        {fr:"J'ai deux enfants. Ils ont 6 ans et 2 ans.", en:"I have two children. They are 6 and 2."},
        {fr:"Tu as quel âge ? — J'ai 30 ans.", en:"How old are you? — I'm 30."},
      ]},
    ]},
    {title:"The alphabet — comment ça s'écrit ?", blocks:[
      {type:"explain", text:"<strong>Comment ça s'écrit ?</strong> = How is it written/spelled? Rough French pronunciation of the letters:"},
      {type:"vocab", items:[
        ["A B C D","ah · bay · say · day"],
        ["E F G H","euh · eff · jay · ahsh"],
        ["I J K L","ee · jee · kah · ell"],
        ["M N O P","emm · enn · oh · pay"],
        ["Q R S T","kü · air · ess · tay"],
        ["U V W","ü · vay · doob-luh-vay"],
        ["X Y Z","eeks · ee-grek · zed"],
      ]},
    ]},
    {title:"Numbers 0–20", blocks:[
      {type:"vocab", items:[["0–5","zéro · un · deux · trois · quatre · cinq"],["6–10","six · sept · huit · neuf · dix"],["11–15","onze · douze · treize · quatorze · quinze"],["16–20","seize · dix-sept · dix-huit · dix-neuf · vingt"]]},
      {type:"tip", text:"17–19 just add: dix-sept (10+7), dix-huit, dix-neuf."},
    ]},
    {title:"Numbers 20–1000 (the tricky ones)", blocks:[
      {type:"vocab", items:[
        ["20 · 30 · 40 · 50 · 60","vingt · trente · quarante · cinquante · soixante"],
        ["21 · 31 · 41","vingt-et-un · trente-et-un · quarante-et-un"],
        ["70","soixante-dix (60+10)"],
        ["71 · 72","soixante-onze · soixante-douze"],
        ["80 · 81","quatre-vingts (4×20) · quatre-vingt-un"],
        ["90 · 91","quatre-vingt-dix (4×20+10) · quatre-vingt-onze"],
        ["100 · 150 · 200","cent · cent cinquante · deux cents"],
        ["1000","mille"],
      ]},
      {type:"tip", text:"French maths! 70 = \"sixty-ten\", 80 = \"four-twenties\", 90 = \"four-twenties-ten\". Numbers ending in 1 add <strong>et un</strong>: vingt-et-un."},
    ]},
    {title:"Days of the week", blocks:[
      {type:"explain", text:"<strong>Il y a 7 jours dans une semaine.</strong> (un jour = a day, une semaine = a week)"},
      {type:"vocab", items:[["lundi","Monday"],["mardi","Tuesday"],["mercredi","Wednesday"],["jeudi","Thursday"],["vendredi","Friday"],["samedi","Saturday"],["dimanche","Sunday"]]},
    ]},
    {title:"Classroom objects + a/an/some", blocks:[
      {type:"explain", text:"<strong>Indefinite articles:</strong> <strong>un</strong> (masc.), <strong>une</strong> (fem.), <strong>des</strong> (plural, imprecise quantity)."},
      {type:"vocab", items:[["un stylo","a pen"],["un crayon","a pencil"],["un livre","a book"],["un cahier","a notebook"],["un tableau","a board"],["un ordinateur","a computer"],["un portable","a mobile phone"],["un taille-crayon","a sharpener"],["une table","a table"],["une chaise","a chair"],["une gomme","an eraser"],["une règle","a ruler"],["une casque","a headphone"]]},
      {type:"explain", text:"<strong>Qu'est-ce que c'est ?</strong> = What is this? Answer with <strong>C'est…</strong> (this is) / <strong>Ce sont…</strong> (these are)."},
      {type:"examples", items:[
        {fr:"C'est un stylo. / C'est une règle.", en:"It's a pen. / It's a ruler."},
        {fr:"Ce sont des stylos.", en:"These are pens."},
      ]},
      {type:"rule", text:"Every noun has a gender. There's no logic (table = feminine, livre = masculine), so always learn the noun WITH its article."},
    ]},
    {title:"The — definite articles", blocks:[
      {type:"vocab", items:[["le","the (masc. singular)"],["la","the (fem. singular)"],["l'","the (before a vowel)"],["les","the (plural)"]]},
    ]},
    {title:"Communication words", blocks:[
      {type:"vocab", items:[["une chanson","a song"],["un dialogue","a dialogue"],["une interview","an interview"],["une lettre","a letter"],["un e-mail / un mèl","an email"],["l'adresse électronique","email address"],["une carte postale","a postcard"],["un chat instantané","an instant chat"],["le réseau social","social networking site"],["les réseaux sociaux","social networks (plural)"]]},
    ]},
  ],
  quiz:[
    {q:"'I am 25 years old' =", context:"", opts:["Je suis 25 ans","J'ai 25 ans"], answer:"J'ai 25 ans", why:"Age uses avoir."},
    {q:"'Nous ___ étudiants' (we are)", context:"être", opts:["sommes","avons","êtes"], answer:"sommes", why:"nous sommes."},
    {q:"What is 90 in French?", context:"", opts:["quatre-vingt-dix","soixante-dix","nonante"], answer:"quatre-vingt-dix", why:"90 = 4×20+10."},
    {q:"'These are pens' =", context:"", opts:["C'est des stylos","Ce sont des stylos"], answer:"Ce sont des stylos", why:"Plural → Ce sont."},
  ]
},
{
  unit:3, emoji:"👨‍👩‍👧", title:"People, Family & Describing",
  intro:"Talk about people: family, nationality, jobs, looks, personality, colours and clothes. Plus possessives, demonstratives and marital status.",
  lessons:[
    {title:"People vocabulary", blocks:[
      {type:"vocab", items:[["un garçon / une fille","a boy / a girl"],["un homme","a man"],["une femme / une dame","a woman / a lady (Madame = formal)"],["un jeune homme","a young man"],["une jeune femme","a young lady"],["un étudiant / une étudiante","a student (m/f)"],["la famille","family"],["un(e) ami(e)","a friend"]]},
    ]},
    {title:"Family members — la famille", blocks:[
      {type:"vocab", items:[["le grand-père / la grand-mère","grandfather / grandmother"],["le père / la mère","father / mother"],["le frère / la sœur","brother / sister"],["l'oncle / la tante","uncle / aunt"],["le cousin / la cousine","cousin (m/f)"],["le fils / la fille","son / daughter"],["le beau-frère / la belle-sœur","brother-in-law / sister-in-law"],["le neveu / la nièce","nephew / niece"],["le bébé / l'enfant","baby / child"],["le/la meilleur(e) ami(e)","best friend"],["la belle-famille","in-laws"]]},
      {type:"examples", items:[
        {fr:"Il y a 5 membres dans ma famille.", en:"There are 5 members in my family."},
        {fr:"Mon père s'appelle Ashok, ma mère s'appelle Daya.", en:"My father is Ashok, my mother is Daya."},
      ]},
    ]},
    {title:"S'appeler — to be called", blocks:[
      {type:"conj", label:"s'appeler — to call oneself", rows:[["je","m'appelle"],["tu","t'appelles"],["il/elle","s'appelle"],["nous","nous appelons"],["vous","vous appelez"],["ils/elles","s'appellent"]]},
      {type:"examples", items:[
        {fr:"Mon frère, il s'appelle Ram.", en:"My brother is called Ram."},
        {fr:"Mes amis s'appellent Darsh et Ash.", en:"My friends are called Darsh and Ash."},
      ]},
    ]},
    {title:"Possessive adjectives — my, your, his/her", blocks:[
      {type:"explain", text:"The word changes with the gender of the <strong>thing owned</strong>, not the owner. So \"his mother\" and \"her mother\" are both <em>sa mère</em>."},
      {type:"vocab", items:[["mon / ma / mes","my (m / f / plural)"],["ton / ta / tes","your (informal)"],["son / sa / ses","his / her"],["notre / nos","our"],["votre / vos","your (formal/plural)"],["leur / leurs","their"]]},
      {type:"tip", text:"<strong>Vowel rule:</strong> before a vowel, ma/ta/sa become mon/ton/son. \"My friend (f)\" = <em>mon amie</em>."},
      {type:"examples", items:[{fr:"Mon actrice préférée est Alia Bhatt.", en:"My favourite actress is Alia Bhatt."}]},
    ]},
    {title:"Nationalities — full table", blocks:[
      {type:"explain", text:"With countries, always use a definite article: <strong>le</strong> Canada, <strong>la</strong> France, <strong>l'</strong>Inde, <strong>les</strong> États-Unis."},
      {type:"vocab", items:[
        ["l'Inde","indien / indienne"],
        ["l'Australie","australien / australienne"],
        ["le Canada","canadien / canadienne"],
        ["le Brésil","brésilien / brésilienne"],
        ["l'Italie","italien / italienne"],
        ["la Nigérie","nigérien / nigérienne"],
        ["la France","français / française"],
        ["la Chine","chinois / chinoise"],
        ["l'Angleterre","anglais / anglaise"],
        ["l'Allemagne","allemand / allemande"],
        ["les États-Unis","américain / américaine"],
        ["la Russie","russe / russe"],
        ["la Suisse","suisse / suisse"],
      ]},
      {type:"rule", text:"Three patterns: <strong>-ien → -ienne</strong> · <strong>add -e</strong> (français→française) · <strong>no change</strong> (russe, suisse). Plural countries: les États-Unis, les Philippines, les Pays-Bas (Netherlands), les Antilles (West Indies)."},
    ]},
    {title:"Professions — full table", blocks:[
      {type:"vocab", items:[
        ["acteur / actrice","actor / actress"],
        ["facteur / factrice","postman"],
        ["traducteur / traductrice","translator"],
        ["directeur / directrice","director"],
        ["réalisateur / réalisatrice","film director"],
        ["chanteur / chanteuse","singer"],
        ["coiffeur / coiffeuse","hairdresser"],
        ["danseur / danseuse","dancer"],
        ["serveur / serveuse","waiter / waitress"],
        ["vendeur / vendeuse","salesperson"],
        ["boucher / bouchère","butcher"],
        ["infirmier / infirmière","nurse"],
        ["boulanger / boulangère","baker"],
        ["électricien / électricienne","electrician"],
        ["musicien / musicienne","musician"],
        ["informaticien / informaticienne","computer operator"],
        ["professeur / professeure","teacher"],
        ["médecin / médecin","doctor (same form)"],
        ["juge / juge","judge"],
        ["pilote / pilote","pilot"],
        ["journaliste / journaliste","journalist"],
        ["écrivain / écrivaine","writer"],
        ["avocat / avocate","lawyer"],
        ["ingénieur","engineer"],
        ["homme / femme politique","politician"],
        ["homme / femme d'affaires","businessperson"],
      ]},
      {type:"rule", text:"Patterns: <strong>-teur → -trice</strong> · <strong>-eur → -euse</strong> · <strong>-er → -ère</strong> · <strong>-ien → -ienne</strong>. To state a job, no \"a\" needed: <em>Il est acteur.</em>"},
    ]},
    {title:"Marital status — le statut familial", blocks:[
      {type:"vocab", items:[["célibataire","single"],["marié(e)","married"],["divorcé(e)","divorced"]]},
    ]},
    {title:"Describing adjectives — full list", blocks:[
      {type:"vocab", items:[
        ["grand / grande","tall / big"],["petit / petite","small / short"],["mince","thin (same m/f)"],
        ["intelligent / intelligente","intelligent"],["élégant / élégante","elegant"],["intéressant / intéressante","interesting"],
        ["courageux / courageuse","courageous"],["timide","shy (same m/f)"],["content / contente","happy"],
        ["heureux / heureuse","happy"],["ambitieux / ambitieuse","ambitious"],["sérieux / sérieuse","serious"],
        ["triste","sad (same m/f)"],["gentil / gentille","kind"],["bon / bonne","good"],["mauvais / mauvaise","bad"],
        ["sympa","nice (same m/f)"],["drôle","funny (same m/f)"],["bête","stupid (same m/f)"],
        ["fort / forte","strong"],["faible","weak (same m/f)"],["joli / jolie","pretty"],["sportif / sportive","sporty"],
      ]},
      {type:"rule", text:"<strong>3 irregular adjectives:</strong> beau / belle (handsome/beautiful) · nouveau / nouvelle (new) · vieux / vieille (old)."},
    ]},
    {title:"Where adjectives go", blocks:[
      {type:"rule", text:"<strong>Before the noun:</strong> short common descriptive adjectives (beau, gros, mince, nouveau, grand, petit). <strong>After the noun:</strong> colour, nationality, shape, and long adjectives."},
      {type:"examples", items:[
        {fr:"Je regarde un bon film.", en:"I'm watching a good film. (before)"},
        {fr:"une robe rouge / une chemise noire", en:"a red dress / a black shirt (after)"},
        {fr:"un homme indien / une table ronde", en:"an Indian man / a round table (after)"},
      ]},
    ]},
    {title:"This / these — demonstratives", blocks:[
      {type:"vocab", items:[["ce","this (masc.)"],["cette","this (fem.)"],["cet","this (masc. + vowel)"],["ces","these (plural)"]]},
      {type:"examples", items:[
        {fr:"Cet acteur anglais joue bien.", en:"This English actor acts well."},
        {fr:"Cette actrice gagne le prix.", en:"This actress wins the award."},
      ]},
    ]},
    {title:"Describing looks — hair & eyes", blocks:[
      {type:"explain", text:"Use <strong>avoir</strong> for features, <strong>être</strong> for overall qualities."},
      {type:"vocab", items:[
        ["les cheveux","hair"],["courts / longs","short / long"],["bouclés / raides","curly / straight"],
        ["frisés / denses","frizzy / thick"],["chauve","bald"],["les yeux","eyes"],
        ["grands / petits yeux","big / small eyes"],["yeux bruns / noirs","brown / black eyes"],
        ["en forme","fit"],["musclé","muscular"],
      ]},
      {type:"examples", items:[
        {fr:"Il a les cheveux courts et noirs.", en:"He has short black hair."},
        {fr:"Il est beau, grand, intelligent et sportif.", en:"He's handsome, tall, smart and sporty."},
      ]},
    ]},
    {title:"Colours — les couleurs", blocks:[
      {type:"vocab", items:[
        ["rouge","red"],["noir / noire","black"],["bleu / bleue","blue"],["jaune","yellow"],
        ["vert / verte","green"],["blanc / blanche","white"],["rose","pink"],["brun / brune","brown"],
        ["gris / grise","grey"],["orange","orange (no change)"],["marron","maroon (no change)"],["violet / violette","purple"],
      ]},
      {type:"examples", items:[
        {fr:"Je porte une robe blanche.", en:"I'm wearing a white dress."},
        {fr:"J'achète un sac bleu.", en:"I'm buying a blue bag."},
      ]},
    ]},
    {title:"Clothes & accessories — les vêtements", blocks:[
      {type:"vocab", items:[
        ["un pantalon / un jean","trousers / jeans"],["une chemise / un chemisier","shirt / blouse"],
        ["un tee-shirt / un top","t-shirt / top"],["un manteau / une veste","coat / jacket"],
        ["un pull","pullover / sweater"],["une casquette / un chapeau","cap / hat"],
        ["une robe / une jupe","dress / skirt"],["une cravate / une écharpe","tie / scarf"],
        ["des chaussettes / des chaussures","socks / shoes"],["des bottes / des sandales","boots / sandals"],
        ["des baskets","trainers / sport shoes"],["une ceinture / une montre","belt / wristwatch"],
        ["des boucles d'oreille","earrings"],["un bracelet","a bracelet"],
        ["un bracelet de cheville","anklet"],["un sac / un sac à dos","bag / backpack"],
        ["un sac à main / un cartable","handbag / school bag"],["des lunettes / des lunettes de soleil","glasses / sunglasses"],
      ]},
      {type:"explain", text:"To say what something is made of: <strong>en + material</strong>."},
      {type:"vocab", items:[["en coton","cotton"],["en soie","silk"],["en jute","jute"],["en cuir","leather"],["en bois","wood"],["en marbre","marble"]]},
      {type:"examples", items:[{fr:"une veste en cuir / une table en bois", en:"a leather jacket / a wooden table"}]},
    ]},
  ],
  quiz:[
    {q:"'My friend (female)' —", context:"amie starts with a vowel", opts:["ma amie","mon amie"], answer:"mon amie", why:"Before a vowel, ma → mon."},
    {q:"Where does 'rouge' go? — 'une robe ___'", context:"", opts:["une rouge robe","une robe rouge"], answer:"une robe rouge", why:"Colours go after the noun."},
    {q:"Feminine of 'acteur'?", context:"", opts:["acteuse","actrice"], answer:"actrice", why:"-teur → -trice."},
    {q:"Feminine of 'boulanger' (baker)?", context:"", opts:["boulangère","boulangeuse"], answer:"boulangère", why:"-er → -ère."},
    {q:"'This actress' = ___ actrice", context:"actrice is fem.", opts:["ce","cette","cet"], answer:"cette", why:"Feminine → cette."},
  ]
},
{
  unit:4, emoji:"⚙️", title:"Verbs & Sentence Building",
  intro:"The engine of French: regular -ER verbs (and their spelling tweaks), making sentences negative, the connector 'mais', and three ways to ask questions.",
  lessons:[
    {title:"-ER verbs — the big pattern", blocks:[
      {type:"explain", text:"Most verbs end in <strong>-er</strong> and follow ONE pattern. Remove <strong>-er</strong> for the stem (parler → parl), then add: <strong>-e, -es, -e, -ons, -ez, -ent</strong>."},
      {type:"conj", label:"parler — to speak", rows:[["je","parle"],["tu","parles"],["il/elle","parle"],["nous","parlons"],["vous","parlez"],["ils/elles","parlent"]]},
      {type:"tip", text:"<strong>je → j'</strong> before a vowel: j'aime, j'adore, j'écoute. The <strong>-ent</strong> ending (ils/elles) is silent."},
    ]},
    {title:"Common -ER verbs to know", blocks:[
      {type:"vocab", items:[
        ["habiter","to live"],["aimer","to like / love"],["adorer","to adore"],["détester","to dislike"],
        ["écouter","to listen"],["regarder","to watch"],["marcher","to walk"],["chanter","to sing"],
        ["danser","to dance"],["aider","to help"],["améliorer","to improve"],["préférer","to prefer"],
        ["monter","to climb"],["jouer","to play"],["discuter","to discuss"],["utiliser","to use"],
        ["organiser","to organise"],["porter","to wear / carry"],["acheter","to buy"],["montrer","to show"],
      ]},
    ]},
    {title:"One conjugation = present + continuous", blocks:[
      {type:"explain", text:"No separate \"-ing\" form. <strong>Je parle</strong> = both \"I speak\" AND \"I am speaking\"."},
      {type:"examples", items:[
        {fr:"J'écoute la radio. / J'écoute les chansons.", en:"I listen to the radio / to songs."},
        {fr:"J'aime le livre. / Je déteste le portable.", en:"I like the book. / I hate the phone."},
      ]},
    ]},
    {title:"Saying you like to DO something", blocks:[
      {type:"explain", text:"<strong>aimer + infinitive</strong> = to like doing something."},
      {type:"examples", items:[
        {fr:"J'aime chanter.", en:"I like to sing."},
        {fr:"Tu aimes danser ? — Oui, je danse.", en:"Do you like to dance? — Yes, I dance."},
      ]},
    ]},
    {title:"Spelling-change -ER verbs", blocks:[
      {type:"rule", text:"<strong>-ger verbs</strong> (manger, nager, ranger, partager): nous → <strong>-eons</strong> → <em>nous mangeons</em>. <br><strong>-cer verbs</strong> (commencer, placer): nous → <strong>-çons</strong> → <em>nous commençons</em>. This keeps the soft sound."},
      {type:"conj", label:"manger — to eat", rows:[["je","mange"],["tu","manges"],["il/elle","mange"],["nous","mangeons"],["vous","mangez"],["ils/elles","mangent"]]},
    ]},
    {title:"Negation — saying NO", blocks:[
      {type:"explain", text:"Wrap the verb: <strong>Subject + ne + verb + pas</strong>. (ne → n' before a vowel.)"},
      {type:"examples", items:[
        {fr:"Je n'aime pas le café.", en:"I don't like coffee."},
        {fr:"Simran n'est pas anglaise.", en:"Simran is not English."},
        {fr:"Non, je ne suis pas végétarien.", en:"No, I'm not vegetarian."},
      ]},
      {type:"tip", text:"Tip from your notes: words ending in <strong>-tion</strong> are always feminine (la natation)."},
    ]},
    {title:"The connector « mais » — but", blocks:[
      {type:"explain", text:"<strong>mais</strong> introduces a contrast."},
      {type:"examples", items:[
        {fr:"J'aime le chocolat mais je déteste le burger.", en:"I like chocolate but I hate burgers."},
        {fr:"Ram est intelligent mais il est rude.", en:"Ram is smart but rude."},
      ]},
    ]},
    {title:"Asking questions — 3 ways", blocks:[
      {type:"explain", text:"Turn a statement into a yes/no question three ways, casual → formal:"},
      {type:"examples", items:[
        {fr:"Tu parles anglais ?", en:"1. Add '?' + raise your voice (intonation, casual)"},
        {fr:"Est-ce que tu parles anglais ?", en:"2. Add 'Est-ce que' in front (neutral)"},
        {fr:"Parles-tu anglais ?", en:"3. Inversion: flip verb+subject with a hyphen (formal)"},
      ]},
    ]},
    {title:"Question words", blocks:[
      {type:"vocab", items:[["Comment ?","How?"],["Qu'est-ce que ? / Que ? / Quoi ?","What?"],["Qui ?","Who?"],["Où ?","Where?"],["Quand ?","When?"],["Pourquoi ?","Why?"],["Combien de ?","How many?"]]},
    ]},
    {title:"Which? — quel / quelle", blocks:[
      {type:"explain", text:"<strong>Quel</strong> = \"which/what\", agreeing with the noun:"},
      {type:"vocab", items:[["quel","masc. sing."],["quelle","fem. sing."],["quels","masc. plural"],["quelles","fem. plural"]]},
      {type:"examples", items:[
        {fr:"Quel est ton acteur préféré ?", en:"Who's your favourite actor?"},
        {fr:"Quelle est ta couleur préférée ?", en:"What's your favourite colour?"},
        {fr:"Quels sont vos plats préférés ?", en:"What are your favourite dishes?"},
      ]},
    ]},
  ],
  quiz:[
    {q:"'Nous ___' (to eat — manger)", context:"spelling rule", opts:["mangons","mangeons"], answer:"mangeons", why:"-ger verbs add -eons for nous."},
    {q:"Make negative: 'Je parle' →", context:"", opts:["Je ne parle pas","Je pas parle"], answer:"Je ne parle pas", why:"ne + verb + pas."},
    {q:"'I like to sing' =", context:"", opts:["J'aime chante","J'aime chanter"], answer:"J'aime chanter", why:"aimer + infinitive (chanter)."},
    {q:"'___ est ta couleur préférée ?'", context:"couleur is fem.", opts:["Quel","Quelle"], answer:"Quelle", why:"Feminine → quelle."},
  ]
},
{
  unit:5, emoji:"🏃", title:"Daily Life & Activities",
  intro:"What you DO: sports, hobbies, weather, going places, transport, and describing your city. Powered by faire, aller and jouer.",
  lessons:[
    {title:"Faire — to do / make ⭐", blocks:[
      {type:"conj", label:"faire — to do/make", rows:[["je","fais"],["tu","fais"],["il/elle","fait"],["nous","faisons"],["vous","faites"],["ils/elles","font"]]},
    ]},
    {title:"Faire + activities", blocks:[
      {type:"explain", text:"For sports/activities: <strong>faire + de + article</strong> (du / de la / de l' / des)."},
      {type:"vocab", items:[
        ["faire de la natation","swimming"],["faire du zumba","zumba"],["faire de l'aérobic","aerobics"],
        ["faire de l'équitation","horse riding"],["faire de la randonnée","hiking"],["faire de la boxe","boxing"],
        ["faire de la gym","gym"],["faire de la musculation","weight lifting"],["faire une promenade","a walk"],
        ["faire de la course à pied","running"],
      ]},
      {type:"explain", text:"<strong>Other faire chores:</strong>"},
      {type:"vocab", items:[
        ["faire le devoir","homework"],["faire la lessive","laundry"],["faire la vaisselle","the dishes"],
        ["faire un gâteau","make a cake"],["faire du shopping","shopping"],["faire de la cuisine","cooking"],
        ["faire les courses","buy daily needs"],["faire le lit","make the bed"],
      ]},
    ]},
    {title:"Faire + weather", blocks:[
      {type:"vocab", items:[["Il fait chaud","It's hot"],["Il fait froid","It's cold"],["Il fait du soleil","It's sunny"],["Il fait du vent","It's windy"],["Il pleut","It's raining"],["Il neige","It's snowing"]]},
    ]},
    {title:"Jouer — to play", blocks:[
      {type:"conj", label:"jouer — to play", rows:[["je","joue"],["tu","joues"],["il/elle","joue"],["nous","jouons"],["vous","jouez"],["ils/elles","jouent"]]},
      {type:"explain", text:"Sports use <strong>jouer à</strong> (au / à la / aux); instruments use <strong>jouer de</strong> (du / de la)."},
      {type:"vocab", items:[
        ["jouer au tennis / cricket / badminton","play tennis / cricket / badminton"],
        ["jouer au volley / basket / baseball","play volleyball / basketball / baseball"],
        ["jouer au rugby / hockey","play rugby / hockey"],
        ["jouer aux échecs / aux cartes","play chess / cards"],
        ["jouer au ping-pong","play table tennis"],
        ["jouer du piano / du violon","play piano / violin"],
        ["jouer de la trompette / de la flûte","play trumpet / flute"],
        ["jouer de la batterie","play drums"],
      ]},
    ]},
    {title:"Likes & responses in a survey", blocks:[
      {type:"explain", text:"<strong>Une enquête</strong> = a survey. Useful reactions:"},
      {type:"vocab", items:[["Oui, j'aime beaucoup / bien.","Yes, I like it a lot / well."],["Moi aussi !","Me too!"],["Moi, je n'aime pas !","Me, I don't like it!"],["Moi, non plus !","Me neither!"]]},
    ]},
    {title:"bon vs bien — good vs well", blocks:[
      {type:"rule", text:"<strong>bon</strong> = adjective (describes a noun). <strong>bien</strong> = adverb (describes a verb)."},
      {type:"examples", items:[
        {fr:"C'est un bon livre.", en:"It's a good book. (bon → describes livre)"},
        {fr:"Il explique bien les concepts.", en:"He explains the concepts well. (bien → describes explains)"},
      ]},
    ]},
    {title:"Aller — to go ⭐", blocks:[
      {type:"conj", label:"aller — to go", rows:[["je","vais"],["tu","vas"],["il/elle","va"],["nous","allons"],["vous","allez"],["ils/elles","vont"]]},
      {type:"tip", text:"Memory hook: the four key irregulars line up — <em>ils ont / sont / font / vont</em> and <em>il a / est / fait / va</em>. Learn avoir, être, faire, aller together."},
    ]},
    {title:"Contracted articles (à + the)", blocks:[
      {type:"vocab", items:[["au","à + le (masc.)"],["à la","à + la (fem.)"],["à l'","à + vowel"],["aux","à + les (plural)"]]},
      {type:"examples", items:[
        {fr:"Je vais au marché.", en:"I go to the market."},
        {fr:"Je vais à la piscine.", en:"I go to the swimming pool."},
        {fr:"Je parle aux étudiants.", en:"I speak to the students."},
        {fr:"Je dis « Bonjour » à Pragya.", en:"I say hello to Pragya."},
      ]},
      {type:"tip", text:"Use à directly with a person's name: <em>Je parle à Sukhneet.</em> (no article)"},
    ]},
    {title:"Places — les lieux", blocks:[
      {type:"vocab", items:[
        ["le monument / le musée","monument / museum"],["le cinéma / le théâtre","cinema / theatre"],
        ["les magasins","shops"],["le centre commercial","mall (pl. les centres commerciaux)"],
        ["le parc / le palais","park / palace"],["le château / le lac","castle / lake"],
        ["la rivière / la plage","river / beach"],["la montagne","mountain"],
        ["la bibliothèque","library"],["l'église / le temple / la mosquée","church / temple / mosque"],
      ]},
    ]},
    {title:"Transport — en or à?", blocks:[
      {type:"rule", text:"<strong>en</strong> = inside a closed vehicle. <strong>à</strong> = open / on top. <strong>par</strong> = by."},
      {type:"vocab", items:[
        ["l'avion / le train","plane / train"],["le métro / le bus","metro / bus"],
        ["la voiture / la moto","car / motorbike"],["le scooter / le vélo","scooter / cycle"],
        ["le bateau / le camion","boat / truck"],["le tramway","tram"],
        ["en voiture / en bus / en avion","by car / bus / plane (closed)"],["à pied / à vélo / à moto","on foot / by bike / by motorbike (open)"],
      ]},
      {type:"examples", items:[
        {fr:"Pragya va au bureau en bus.", en:"Pragya goes to the office by bus."},
        {fr:"Darsh va au parc à pied.", en:"Darsh goes to the park on foot."},
      ]},
    ]},
    {title:"Prepositions with countries & cities", blocks:[
      {type:"rule", text:"<strong>au</strong> + masc. country · <strong>en</strong> + fem. country · <strong>aux</strong> + plural · <strong>à</strong> + city."},
      {type:"examples", items:[
        {fr:"Pragya travaille au Canada.", en:"Pragya works in Canada."},
        {fr:"Mon mari habite au Mexique.", en:"My husband lives in Mexico."},
        {fr:"Mes parents habitent aux États-Unis.", en:"My parents live in the USA."},
        {fr:"Sukhneet travaille à Indore en Inde.", en:"Sukhneet works in Indore, in India."},
      ]},
    ]},
    {title:"Prepositions of place", blocks:[
      {type:"vocab", items:[
        ["sur / sous","on / under"],["devant / derrière","in front of / behind"],
        ["à droite / à gauche","to the right / left"],["à côté de","beside"],
        ["près de / loin de","near / far from"],["au centre de","in the centre of"],
        ["au bout de","at the end of"],["dans / dehors","inside / outside"],
        ["entre","between"],["au coin de","in the corner of"],["au milieu de","in the middle of"],
        ["avec / sans","with / without"],["parmi","among"],["depuis","since"],["pour","for"],
        ["au-dessus de / au-dessous de","above / below"],
      ]},
    ]},
    {title:"Describing your city", blocks:[
      {type:"explain", text:"A good city description covers: 1) location (Elle se trouve…), 2) places to visit, 3) food/famous dishes, 4) weather, 5) lifestyle/quality of life, 6) festivals/culture, 7) atmosphere, 8) the people (les habitants), 9) what you don't like."},
      {type:"examples", items:[
        {fr:"J'habite à Indore. Elle se trouve dans l'État de Madhya Pradesh.", en:"I live in Indore. It's in Madhya Pradesh."},
        {fr:"Les habitants sont gentils et accueillants.", en:"The people are kind and welcoming."},
        {fr:"J'aime l'ambiance mais je n'aime pas la circulation.", en:"I love the atmosphere but not the traffic."},
      ]},
    ]},
  ],
  quiz:[
    {q:"'I go swimming' = Je fais ___ natation", context:"natation is fem.", opts:["du","de la"], answer:"de la", why:"faire de la (fem.)."},
    {q:"'I play piano' =", context:"instrument", opts:["Je joue au piano","Je joue du piano"], answer:"Je joue du piano", why:"Instruments → jouer de → du piano."},
    {q:"'I go to the market' = Je vais ___ marché", context:"marché is masc.", opts:["à la","au"], answer:"au", why:"à + le = au."},
    {q:"'It's a good book' =", context:"adjective", opts:["C'est un bien livre","C'est un bon livre"], answer:"C'est un bon livre", why:"bon = adjective; bien = adverb."},
    {q:"'I live in France' = J'habite ___ France", context:"fem. country", opts:["au","en"], answer:"en", why:"Feminine country → en."},
  ]
},
{
  unit:6, emoji:"🕐", title:"Time, Meals & Going Out",
  intro:"Tell the time (12h and 24h), name your meals, plan outings, and use three more verbs: sortir, voir and venir.",
  lessons:[
    {title:"Telling the time — 12-hour", blocks:[
      {type:"explain", text:"Ask: <strong>Quelle heure est-il ?</strong> Answer: <strong>Il est… heures.</strong>"},
      {type:"examples", items:[
        {fr:"Il est trois heures.", en:"It's 3 o'clock."},
        {fr:"Il est huit heures dix.", en:"It's 8:10."},
        {fr:"Il est huit heures et quart.", en:"8:15 (quarter past)."},
        {fr:"Il est huit heures et demie.", en:"8:30 (half past)."},
        {fr:"Il est neuf heures moins le quart.", en:"8:45 (quarter to nine)."},
        {fr:"Il est midi / minuit.", en:"It's noon / midnight."},
      ]},
      {type:"tip", text:"No AM/PM! Add <strong>du matin</strong> (morning), <strong>de l'après-midi</strong> (afternoon), <strong>du soir</strong> (evening)."},
    ]},
    {title:"Telling the time — 24-hour (formal)", blocks:[
      {type:"examples", items:[
        {fr:"Il est treize heures.", en:"13:00 (1 PM)."},
        {fr:"Il est quatorze heures trente.", en:"14:30 (2:30 PM)."},
      ]},
    ]},
    {title:"Meals — les repas", blocks:[
      {type:"vocab", items:[["le petit-déjeuner","breakfast"],["le déjeuner","lunch"],["le goûter","afternoon snack"],["le dîner","dinner"]]},
    ]},
    {title:"Sortir — to go out", blocks:[
      {type:"conj", label:"sortir — to go out", rows:[["je","sors"],["tu","sors"],["il/elle","sort"],["nous","sortons"],["vous","sortez"],["ils/elles","sortent"]]},
      {type:"tip", text:"<strong>partir</strong> (to leave) and <strong>mentir</strong> (to lie) follow the same pattern: je pars, je mens."},
    ]},
    {title:"Voir — to see", blocks:[
      {type:"conj", label:"voir — to see", rows:[["je","vois"],["tu","vois"],["il/elle","voit"],["nous","voyons"],["vous","voyez"],["ils/elles","voient"]]},
      {type:"tip", text:"The -ent in ils voient is silent."},
    ]},
    {title:"Venir — to come", blocks:[
      {type:"conj", label:"venir — to come", rows:[["je","viens"],["tu","viens"],["il/elle","vient"],["nous","venons"],["vous","venez"],["ils/elles","viennent"]]},
      {type:"explain", text:"<strong>Venir de + place</strong> = where you're from."},
      {type:"examples", items:[
        {fr:"Je viens de Kolkata.", en:"I come from Kolkata."},
        {fr:"Je viens d'Inde.", en:"I come from India."},
      ]},
    ]},
    {title:"Types of outings — les sorties", blocks:[
      {type:"explain", text:"<strong>Une sortie</strong> = an outing. <strong>organiser</strong> = to organise."},
      {type:"vocab", items:[
        ["la sortie culturelle","museum, exhibitions, theatre, cinema, music/food festival"],
        ["la sortie sportive","marathon, watching matches, sports events, competitions"],
        ["la sortie gratuite","free outing (gratuit = free of cost)"],
      ]},
      {type:"vocab", items:[["une exposition","an exhibition"],["un concours / une compétition","a competition"],["un événement sportif","a sports event"]]},
    ]},
  ],
  quiz:[
    {q:"'It's 8:30' = Il est huit heures et ___", context:"", opts:["quart","demie"], answer:"demie", why:"et demie = half past."},
    {q:"'I come from India' =", context:"", opts:["Je viens de Inde","Je viens d'Inde"], answer:"Je viens d'Inde", why:"de → d' before a vowel."},
    {q:"'Nous ___' (to see)", context:"voir", opts:["voyons","voions"], answer:"voyons", why:"nous voyons."},
    {q:"A free outing =", context:"", opts:["une sortie gratuite","une sortie sportive"], answer:"une sortie gratuite", why:"gratuit = free."},
  ]
},
{
  unit:7, emoji:"💪", title:"Wishes, Abilities & Commands",
  intro:"Express what you can, want and must do (the modal verbs), give commands (the imperative), explain why, and use 'tout' and opinion phrases.",
  lessons:[
    {title:"Pouvoir — can / to be able to", blocks:[
      {type:"conj", label:"pouvoir — can", rows:[["je","peux"],["tu","peux"],["il/elle","peut"],["nous","pouvons"],["vous","pouvez"],["ils/elles","peuvent"]]},
      {type:"explain", text:"Always followed by an <strong>infinitive</strong>."},
      {type:"examples", items:[
        {fr:"Je peux nager. / Je peux conduire.", en:"I can swim. / I can drive."},
        {fr:"Sharon peut lire les romans.", en:"Sharon can read novels."},
      ]},
    ]},
    {title:"Vouloir — to want", blocks:[
      {type:"conj", label:"vouloir — to want", rows:[["je","veux"],["tu","veux"],["il/elle","veut"],["nous","voulons"],["vous","voulez"],["ils/elles","veulent"]]},
      {type:"examples", items:[
        {fr:"Je veux aller en France.", en:"I want to go to France."},
        {fr:"Il veut devenir prof de français.", en:"He wants to become a French teacher."},
        {fr:"Je veux faire le tour du monde.", en:"I want to travel the world."},
      ]},
    ]},
    {title:"Devoir — must / have to", blocks:[
      {type:"conj", label:"devoir — must", rows:[["je","dois"],["tu","dois"],["il/elle","doit"],["nous","devons"],["vous","devez"],["ils/elles","doivent"]]},
      {type:"examples", items:[
        {fr:"Je dois communiquer en français.", en:"I must communicate in French."},
        {fr:"Je dois manger des fruits tous les jours.", en:"I must eat fruit every day."},
      ]},
      {type:"rule", text:"All three modals — <strong>pouvoir, vouloir, devoir</strong> — are always followed by a verb in the infinitive."},
    ]},
    {title:"Il faut — it is necessary (falloir)", blocks:[
      {type:"explain", text:"<strong>Falloir</strong> only exists as \"il faut\" (impersonal) + infinitive."},
      {type:"examples", items:[
        {fr:"Il faut étudier.", en:"One must study."},
        {fr:"Il ne faut pas gaspiller du temps.", en:"One must not waste time. (gaspiller = to waste)"},
        {fr:"Il est nécessaire de manger des fruits.", en:"It's necessary to eat fruit."},
      ]},
    ]},
    {title:"Why? — pourquoi / parce que / pour", blocks:[
      {type:"vocab", items:[["Pourquoi ?","Why?"],["parce que + full sentence","because…"],["pour + infinitive/object","in order to / for…"]]},
      {type:"examples", items:[
        {fr:"Pourquoi tu vas au restaurant ? — Parce que je veux manger.", en:"Why go to the restaurant? — Because I want to eat."},
        {fr:"Pour manger.", en:"(In order) to eat."},
        {fr:"Pour progresser, pour être plus productif.", en:"To progress, to be more productive."},
      ]},
    ]},
    {title:"The imperative — giving orders", blocks:[
      {type:"explain", text:"For commands/requests. Take the present tense, <strong>drop the subject pronoun</strong>, add \"!\". For -er verbs, drop the -s in the tu form. Works with tu, nous, vous."},
      {type:"examples", items:[
        {fr:"Tu parles → Parle français !", en:"Speak French!"},
        {fr:"Nous allons → Allons au parc !", en:"Let's go to the park!"},
        {fr:"Vous faites → Faites vos devoirs !", en:"Do your homework!"},
      ]},
      {type:"rule", text:"<strong>3 irregulars:</strong> être → Sois ! Soyons ! Soyez ! · avoir → Aie ! Ayons ! Ayez ! · aller → Va ! Allons ! Allez !"},
    ]},
    {title:"The adjective « tout » — all/whole", blocks:[
      {type:"vocab", items:[["tout","masc. sing."],["toute","fem. sing."],["tous","masc. plural"],["toutes","fem. plural"]]},
      {type:"examples", items:[
        {fr:"Tout le monde", en:"Everyone"},
        {fr:"Toute la journée", en:"The whole day"},
        {fr:"Tous les jours", en:"Every day"},
        {fr:"Toutes les femmes sont intelligentes.", en:"All women are intelligent."},
      ]},
    ]},
    {title:"Giving your opinion", blocks:[
      {type:"vocab", items:[["Je pense que…","I think that…"],["Je ne pense pas…","I don't think…"],["D'après moi / Selon moi","According to me"],["Il semble que…","It seems that…"]]},
      {type:"examples", items:[{fr:"Il semble qu'il est occupé.", en:"It seems he is busy."}]},
    ]},
  ],
  quiz:[
    {q:"'I can swim' =", context:"", opts:["Je peux nage","Je peux nager"], answer:"Je peux nager", why:"Modal + infinitive."},
    {q:"Command 'Speak French!' (tu) =", context:"-er verb, drop -s", opts:["Parles français!","Parle français!"], answer:"Parle français!", why:"tu form drops -s in the imperative."},
    {q:"'It is necessary to study' =", context:"", opts:["Il faut étudier","Il faut étudie"], answer:"Il faut étudier", why:"il faut + infinitive."},
    {q:"'Every day' =", context:"jours masc. plural", opts:["toute les jours","tous les jours"], answer:"tous les jours", why:"masc. plural → tous."},
  ]
},
{
  unit:8, emoji:"✉️", title:"Writing — Letters & Invitations",
  intro:"Put it together in writing: the French letter format, plus invitation, acceptance and polite-refusal letters — the exact exam-style tasks from your notes.",
  lessons:[
    {title:"The 4 questions before writing", blocks:[
      {type:"explain", text:"<strong>La production écrite.</strong> Before starting, ask:"},
      {type:"vocab", items:[["Tu es qui ?","Who are you?"],["À qui tu écris ?","Who are you writing to?"],["Quoi ?","What kind of text? (lettre, message, e-mail, carte postale)"],["Pourquoi ?","Why are you writing?"]]},
    ]},
    {title:"Letter format", blocks:[
      {type:"explain", text:"Layout: <strong>Place, date</strong> (top right) → <strong>Cher/Chère + name</strong> → greeting → body → sign-off → name."},
      {type:"eg-block", lines:[
        "Toronto, le 13 juin 2026",
        "Cher Ash,",
        "Salut ! Comment ça va ? J'espère que tu vas bien.",
        "[your message here]",
        "Confirme ta présence ! Merci !",
        "Amicalement,",
        "Darsh"
      ]},
      {type:"tip", text:"Sign-offs: <strong>Amicalement</strong>, <strong>Bises / Bisous</strong> (close friends), <strong>Au revoir</strong>. <em>Cher</em> for a man, <em>Chère</em> for a woman."},
    ]},
    {title:"Invitation letter", blocks:[
      {type:"explain", text:"State the occasion, day/time, place, planned activities, and ask them to confirm."},
      {type:"eg-block", lines:[
        "Cher Ash,",
        "Salut ! C'est mon anniversaire. Je t'invite à la fête",
        "le samedi 14 juin chez moi à 17h.",
        "J'organise des jeux, de la musique et de la danse.",
        "Tu peux apporter de la musique, s'il te plaît ?",
        "Confirme ta présence ! Merci !",
        "Amicalement, Darsh"
      ]},
    ]},
    {title:"Accepting an invitation", blocks:[
      {type:"eg-block", lines:[
        "Chère Simran,",
        "Salut ! Je reçois ton invitation. Merci beaucoup !",
        "J'accepte avec plaisir ! Je ne sais pas où se trouve",
        "ta maison — il y a un métro pour arriver ?",
        "Est-ce que j'emmène mon ami Vishisht ?",
        "J'attends ta réponse. À bientôt !",
        "Sharon"
      ]},
    ]},
    {title:"Politely refusing", blocks:[
      {type:"explain", text:"Thank them, give a reason (parce que…), apologise, and offer an alternative."},
      {type:"eg-block", lines:[
        "Chère Simran,",
        "Merci pour ton invitation, mais je ne peux pas venir",
        "parce que j'ai mon examen de français. Désolé(e) !",
        "Si tu veux, on se rencontre samedi prochain",
        "au café Godwit à 17h. Confirme ta présence !",
        "Au revoir, Sharon"
      ]},
      {type:"tip", text:"<strong>Ce jour-là</strong> = that day. Other reasons: <em>Je déménage</em> (I'm moving house), <em>J'ai un rendez-vous chez le médecin</em> (I have a doctor's appointment)."},
    ]},
    {title:"The preposition « chez »", blocks:[
      {type:"explain", text:"<strong>chez</strong> = \"at the place/home of\" — used with people and professions."},
      {type:"examples", items:[
        {fr:"Je rentre chez moi.", en:"I'm going home."},
        {fr:"Je vais chez mes grands-parents.", en:"I'm going to my grandparents'."},
        {fr:"J'ai un rendez-vous chez le médecin.", en:"I have a doctor's appointment."},
      ]},
    ]},
  ],
  quiz:[
    {q:"Writing to a female friend, start with…", context:"", opts:["Cher Simran","Chère Simran"], answer:"Chère Simran", why:"Chère = feminine."},
    {q:"'I'm going home' =", context:"chez", opts:["Je rentre à moi","Je rentre chez moi"], answer:"Je rentre chez moi", why:"chez moi = at my place."},
    {q:"A friendly sign-off?", context:"", opts:["Amicalement","Pourquoi"], answer:"Amicalement", why:"Amicalement = kindly/yours."},
  ]
},
{
  unit:9, emoji:"🔤", title:"Sounds, Accents, Punctuation & Revision",
  intro:"The finishing touches: the five accents, pronunciation rules, punctuation names, and a recap of how to build every kind of question.",
  lessons:[
    {title:"The 5 accents", blocks:[
      {type:"vocab", items:[
        ["é — accent aigu","sharp 'ay' sound. ex: étudiant, église"],
        ["è à ù — accent grave","soft, open sound. ex: père, mère, élève, préfère"],
        ["ç — cédille","makes c sound like 's'. ex: garçon, ça va"],
        ["ê î ô — circonflexe","original vowel sound. ex: hôtel, île (island), hiver"],
        ["œ — ligature","ex: sœur (sister), bœuf (beef)"],
      ]},
    ]},
    {title:"Handy pronunciation rules", blocks:[
      {type:"vocab", items:[
        ["o / au / eau / aux","all sound like 'o'"],
        ["ch","sounds like 'sh' (chanter)"],
        ["s between vowels","sounds like 'z'"],
        ["ss","sounds like 's'"],
        ["-ent (verb ending)","silent — ils parlent"],
        ["ille","'eeya' — fille (feeya)"],
      ]},
    ]},
    {title:"Punctuation — la ponctuation", blocks:[
      {type:"vocab", items:[
        [". — un point","full stop"],
        ["? — le point d'interrogation","question mark"],
        ["! — le point d'exclamation","exclamation mark"],
        [", — une virgule","comma"],
        ["; — le point-virgule","semicolon"],
        ["- — un tiret","hyphen"],
        ["@ — arobase","at sign"],
      ]},
      {type:"tip", text:"In French, a thin space goes BEFORE ? ! : ; — <em>Comment ça va ?</em>"},
    ]},
    {title:"Revision — yes/no questions (3 ways)", blocks:[
      {type:"examples", items:[
        {fr:"Tu parles anglais ?", en:"Intonation (casual)"},
        {fr:"Est-ce que tu parles anglais ?", en:"Est-ce que (neutral)"},
        {fr:"Parles-tu anglais ?", en:"Inversion (formal)"},
        {fr:"Il y a… → Y a-t-il… ?", en:"'Is there…?' in inversion"},
      ]},
    ]},
    {title:"Revision — open questions", blocks:[
      {type:"explain", text:"Question word + one of the three question forms:"},
      {type:"examples", items:[
        {fr:"Où tu habites ? / Où est-ce que tu habites ? / Où habites-tu ?", en:"Where do you live? (3 ways)"},
        {fr:"Comment vas-tu au travail ?", en:"How do you go to work?"},
        {fr:"Combien de membres y a-t-il dans ta famille ?", en:"How many members in your family?"},
        {fr:"Tu fais quoi ? / Que fais-tu ?", en:"What do you do? (Que = Quoi)"},
      ]},
    ]},
  ],
  quiz:[
    {q:"Which accent turns 'c' into 's'?", context:"", opts:["accent aigu (é)","cédille (ç)"], answer:"cédille (ç)", why:"ç → 's', as in garçon."},
    {q:"How does 'ch' sound?", context:"", opts:["like 'k'","like 'sh'"], answer:"like 'sh'", why:"chanter = 'shanté'."},
    {q:"The -ent on a verb (ils parlent) is…", context:"", opts:["silent","stressed"], answer:"silent", why:"You don't pronounce -ent."},
    {q:"'Is there…?' in inversion =", context:"", opts:["Y a-t-il ?","Il y a-t ?"], answer:"Y a-t-il ?", why:"Il y a → Y a-t-il in question form."},
  ]
},
];
