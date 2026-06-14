/**
 * verbs-data.js
 * All 50 verbs + 10 grammar patterns for the Verb Gym.
 * Each verb: n (infinitive), m (meaning), t (type), r (rows of [pronoun, form])
 */
const VERBS = [
  {n:"être",m:"to be",t:"etre",r:[["je","suis"],["tu","es"],["il/elle","est"],["nous","sommes"],["vous","êtes"],["ils/elles","sont"]]},
  {n:"avoir",m:"to have",t:"etre",r:[["j'","ai"],["tu","as"],["il/elle","a"],["nous","avons"],["vous","avez"],["ils/elles","ont"]]},
  {n:"parler",m:"to speak",t:"er",r:[["je","parle"],["tu","parles"],["il/elle","parle"],["nous","parlons"],["vous","parlez"],["ils/elles","parlent"]]},
  {n:"habiter",m:"to live",t:"er",r:[["j'","habite"],["tu","habites"],["il/elle","habite"],["nous","habitons"],["vous","habitez"],["ils/elles","habitent"]]},
  {n:"aimer",m:"to like / love",t:"er",r:[["j'","aime"],["tu","aimes"],["il/elle","aime"],["nous","aimons"],["vous","aimez"],["ils/elles","aiment"]]},
  {n:"adorer",m:"to adore",t:"er",r:[["j'","adore"],["tu","adores"],["il/elle","adore"],["nous","adorons"],["vous","adorez"],["ils/elles","adorent"]]},
  {n:"détester",m:"to dislike",t:"er",r:[["je","déteste"],["tu","détestes"],["il/elle","déteste"],["nous","détestons"],["vous","détestez"],["ils/elles","détestent"]]},
  {n:"écouter",m:"to listen",t:"er",r:[["j'","écoute"],["tu","écoutes"],["il/elle","écoute"],["nous","écoutons"],["vous","écoutez"],["ils/elles","écoutent"]]},
  {n:"regarder",m:"to watch",t:"er",r:[["je","regarde"],["tu","regardes"],["il/elle","regarde"],["nous","regardons"],["vous","regardez"],["ils/elles","regardent"]]},
  {n:"marcher",m:"to walk",t:"er",r:[["je","marche"],["tu","marches"],["il/elle","marche"],["nous","marchons"],["vous","marchez"],["ils/elles","marchent"]]},
  {n:"chanter",m:"to sing",t:"er",r:[["je","chante"],["tu","chantes"],["il/elle","chante"],["nous","chantons"],["vous","chantez"],["ils/elles","chantent"]]},
  {n:"danser",m:"to dance",t:"er",r:[["je","danse"],["tu","danses"],["il/elle","danse"],["nous","dansons"],["vous","dansez"],["ils/elles","dansent"]]},
  {n:"aider",m:"to help",t:"er",r:[["j'","aide"],["tu","aides"],["il/elle","aide"],["nous","aidons"],["vous","aidez"],["ils/elles","aident"]]},
  {n:"améliorer",m:"to improve",t:"er",r:[["j'","améliore"],["tu","améliores"],["il/elle","améliore"],["nous","améliorons"],["vous","améliorez"],["ils/elles","améliorent"]]},
  {n:"préférer",m:"to prefer",t:"er",r:[["je","préfère"],["tu","préfères"],["il/elle","préfère"],["nous","préférons"],["vous","préférez"],["ils/elles","préfèrent"]]},
  {n:"monter",m:"to climb",t:"er",r:[["je","monte"],["tu","montes"],["il/elle","monte"],["nous","montons"],["vous","montez"],["ils/elles","montent"]]},
  {n:"jouer",m:"to play",t:"er",r:[["je","joue"],["tu","joues"],["il/elle","joue"],["nous","jouons"],["vous","jouez"],["ils/elles","jouent"]]},
  {n:"discuter",m:"to discuss",t:"er",r:[["je","discute"],["tu","discutes"],["il/elle","discute"],["nous","discutons"],["vous","discutez"],["ils/elles","discutent"]]},
  {n:"utiliser",m:"to use",t:"er",r:[["j'","utilise"],["tu","utilises"],["il/elle","utilise"],["nous","utilisons"],["vous","utilisez"],["ils/elles","utilisent"]]},
  {n:"organiser",m:"to organise",t:"er",r:[["j'","organise"],["tu","organises"],["il/elle","organise"],["nous","organisons"],["vous","organisez"],["ils/elles","organisent"]]},
  {n:"inviter",m:"to invite",t:"er",r:[["j'","invite"],["tu","invites"],["il/elle","invite"],["nous","invitons"],["vous","invitez"],["ils/elles","invitent"]]},
  {n:"confirmer",m:"to confirm",t:"er",r:[["je","confirme"],["tu","confirmes"],["il/elle","confirme"],["nous","confirmons"],["vous","confirmez"],["ils/elles","confirment"]]},
  {n:"préparer",m:"to prepare",t:"er",r:[["je","prépare"],["tu","prépares"],["il/elle","prépare"],["nous","préparons"],["vous","préparez"],["ils/elles","préparent"]]},
  {n:"apporter",m:"to bring (thing)",t:"er",r:[["j'","apporte"],["tu","apportes"],["il/elle","apporte"],["nous","apportons"],["vous","apportez"],["ils/elles","apportent"]]},
  {n:"emmener",m:"to bring (person)",t:"er",r:[["j'","emmène"],["tu","emmènes"],["il/elle","emmène"],["nous","emmenons"],["vous","emmenez"],["ils/elles","emmènent"]]},
  {n:"rencontrer",m:"to meet",t:"er",r:[["je","rencontre"],["tu","rencontres"],["il/elle","rencontre"],["nous","rencontrons"],["vous","rencontrez"],["ils/elles","rencontrent"]]},
  {n:"accepter",m:"to accept",t:"er",r:[["j'","accepte"],["tu","acceptes"],["il/elle","accepte"],["nous","acceptons"],["vous","acceptez"],["ils/elles","acceptent"]]},
  {n:"gaspiller",m:"to waste",t:"er",r:[["je","gaspille"],["tu","gaspilles"],["il/elle","gaspille"],["nous","gaspillons"],["vous","gaspillez"],["ils/elles","gaspillent"]]},
  {n:"ranger",m:"to arrange / tidy",t:"er",r:[["je","range"],["tu","ranges"],["il/elle","range"],["nous","rangeons"],["vous","rangez"],["ils/elles","rangent"]]},
  {n:"partager",m:"to share",t:"er",r:[["je","partage"],["tu","partages"],["il/elle","partage"],["nous","partageons"],["vous","partagez"],["ils/elles","partagent"]]},
  {n:"nager",m:"to swim",t:"er",r:[["je","nage"],["tu","nages"],["il/elle","nage"],["nous","nageons"],["vous","nagez"],["ils/elles","nagent"]]},
  {n:"manger",m:"to eat",t:"er",r:[["je","mange"],["tu","manges"],["il/elle","mange"],["nous","mangeons"],["vous","mangez"],["ils/elles","mangent"]]},
  {n:"commencer",m:"to begin",t:"er",r:[["je","commence"],["tu","commences"],["il/elle","commence"],["nous","commençons"],["vous","commencez"],["ils/elles","commencent"]]},
  {n:"placer",m:"to place",t:"er",r:[["je","place"],["tu","places"],["il/elle","place"],["nous","plaçons"],["vous","placez"],["ils/elles","placent"]]},
  {n:"s'appeler",m:"to call oneself",t:"er",r:[["je","m'appelle"],["tu","t'appelles"],["il/elle","s'appelle"],["nous","nous appelons"],["vous","vous appelez"],["ils/elles","s'appellent"]]},
  {n:"raconter",m:"to tell / narrate",t:"er",r:[["je","raconte"],["tu","racontes"],["il/elle","raconte"],["nous","racontons"],["vous","racontez"],["ils/elles","racontent"]]},
  {n:"déménager",m:"to move house",t:"er",r:[["je","déménage"],["tu","déménages"],["il/elle","déménage"],["nous","déménageons"],["vous","déménagez"],["ils/elles","déménagent"]]},
  {n:"porter",m:"to wear / carry",t:"er",r:[["je","porte"],["tu","portes"],["il/elle","porte"],["nous","portons"],["vous","portez"],["ils/elles","portent"]]},
  {n:"aller",m:"to go",t:"irreg",r:[["je","vais"],["tu","vas"],["il/elle","va"],["nous","allons"],["vous","allez"],["ils/elles","vont"]]},
  {n:"faire",m:"to do / make",t:"irreg",r:[["je","fais"],["tu","fais"],["il/elle","fait"],["nous","faisons"],["vous","faites"],["ils/elles","font"]]},
  {n:"venir",m:"to come",t:"irreg",r:[["je","viens"],["tu","viens"],["il/elle","vient"],["nous","venons"],["vous","venez"],["ils/elles","viennent"]]},
  {n:"voir",m:"to see",t:"irreg",r:[["je","vois"],["tu","vois"],["il/elle","voit"],["nous","voyons"],["vous","voyez"],["ils/elles","voient"]]},
  {n:"sortir",m:"to go out",t:"irreg",r:[["je","sors"],["tu","sors"],["il/elle","sort"],["nous","sortons"],["vous","sortez"],["ils/elles","sortent"]]},
  {n:"partir",m:"to leave",t:"irreg",r:[["je","pars"],["tu","pars"],["il/elle","part"],["nous","partons"],["vous","partez"],["ils/elles","partent"]]},
  {n:"mentir",m:"to lie",t:"irreg",r:[["je","mens"],["tu","mens"],["il/elle","ment"],["nous","mentons"],["vous","mentez"],["ils/elles","mentent"]]},
  {n:"prendre",m:"to take",t:"irreg",r:[["je","prends"],["tu","prends"],["il/elle","prend"],["nous","prenons"],["vous","prenez"],["ils/elles","prennent"]]},
  {n:"conduire",m:"to drive",t:"irreg",r:[["je","conduis"],["tu","conduis"],["il/elle","conduit"],["nous","conduisons"],["vous","conduisez"],["ils/elles","conduisent"]]},
  {n:"devenir",m:"to become",t:"irreg",r:[["je","deviens"],["tu","deviens"],["il/elle","devient"],["nous","devenons"],["vous","devenez"],["ils/elles","deviennent"]]},
  {n:"recevoir",m:"to receive",t:"irreg",r:[["je","reçois"],["tu","reçois"],["il/elle","reçoit"],["nous","recevons"],["vous","recevez"],["ils/elles","reçoivent"]]},
  {n:"pouvoir",m:"can / to be able to",t:"modal",r:[["je","peux"],["tu","peux"],["il/elle","peut"],["nous","pouvons"],["vous","pouvez"],["ils/elles","peuvent"]]},
  {n:"vouloir",m:"to want",t:"modal",r:[["je","veux"],["tu","veux"],["il/elle","veut"],["nous","voulons"],["vous","voulez"],["ils/elles","veulent"]]},
  {n:"devoir",m:"must / have to",t:"modal",r:[["je","dois"],["tu","dois"],["il/elle","doit"],["nous","devons"],["vous","devez"],["ils/elles","doivent"]]},
  {n:"falloir",m:"to be necessary",t:"modal",r:[["il (only)","faut"],["il ne … pas","ne faut pas"]]},
];

const TAG_LABELS = { etre:"Être / Avoir", er:"-ER Regular", irreg:"Irregular", modal:"Modal" };

const PATTERNS_DATA = [
  {title:"-ER verb endings (regular)", sub:"Remove -er, add: -e, -es, -e, -ons, -ez, -ent",
   rule:"The most common verb type — over 80% of all French verbs. je / il / elle sound identical. The -ent ending is always silent.",
   examples:[{key:"je parle",sent:"Je parle français.",trans:"I speak French."},{key:"nous parlons",sent:"Nous parlons beaucoup.",trans:"We speak a lot."},{key:"ils parlent",sent:"Ils parlent ensemble.",trans:"They speak together."}],
   conj:[["je","parle"],["tu","parles"],["il/elle","parle"],["nous","parlons"],["vous","parlez"],["ils/elles","parlent"]]},
  {title:"-GER verbs: nous + -eons", sub:"manger · ranger · partager · nager · déménager",
   rule:"To keep the soft 'g' before -ons, insert an 'e': nous mangeons, not nous mangons.",
   examples:[{key:"nous mangeons",sent:"Nous mangeons à midi.",trans:"We eat at noon."},{key:"nous nageons",sent:"Nous nageons à la piscine.",trans:"We swim at the pool."}],
   conj:[["je","mange"],["tu","manges"],["il/elle","mange"],["nous","mangeons"],["vous","mangez"],["ils/elles","mangent"]]},
  {title:"-CER verbs: nous + -çons", sub:"commencer · placer",
   rule:"To keep the soft 'c' (like 's') before -ons, add a cedilla: nous commençons.",
   examples:[{key:"nous commençons",sent:"Nous commençons le cours.",trans:"We begin the lesson."}],
   conj:[["je","commence"],["tu","commences"],["il/elle","commence"],["nous","commençons"],["vous","commencez"],["ils/elles","commencent"]]},
  {title:"Être — the essential irregular", sub:"Identity · nationality · profession · description",
   rule:"Completely irregular — memorise it. Je suis canadien. Il est médecin. Nous sommes amis.",
   examples:[{key:"je suis",sent:"Je suis étudiant.",trans:"I am a student."},{key:"vous êtes",sent:"Vous êtes professeure ?",trans:"Are you a teacher?"},{key:"ils sont",sent:"Ils sont indiens.",trans:"They are Indian."}],
   conj:[["je","suis"],["tu","es"],["il/elle","est"],["nous","sommes"],["vous","êtes"],["ils/elles","sont"]]},
  {title:"Avoir — age & possessions", sub:"Ownership · age · fixed expressions",
   rule:"Age uses avoir, NOT être. J'ai 25 ans (I have 25 years) — never Je suis 25 ans.",
   examples:[{key:"j'ai",sent:"J'ai 25 ans.",trans:"I am 25 years old."},{key:"tu as",sent:"Tu as des enfants ?",trans:"Do you have children?"},{key:"ils ont",sent:"Ils ont une voiture.",trans:"They have a car."}],
   conj:[["j'","ai"],["tu","as"],["il/elle","a"],["nous","avons"],["vous","avez"],["ils/elles","ont"]]},
  {title:"Aller — destinations + near future", sub:"aller + au/à la + place · aller + infinitif",
   rule:"Use au / à la / à l' / aux for destinations. Near future: aller + infinitive = 'going to do'. Je vais manger.",
   examples:[{key:"je vais",sent:"Je vais au cinéma.",trans:"I am going to the cinema."},{key:"tu vas",sent:"Tu vas à l'université ?",trans:"Are you going to university?"},{key:"near future",sent:"Il va partir demain.",trans:"He's going to leave tomorrow."}],
   conj:[["je","vais"],["tu","vas"],["il/elle","va"],["nous","allons"],["vous","allez"],["ils/elles","vont"]]},
  {title:"Faire — activities & weather", sub:"faire de la/du + activity · il fait + weather",
   rule:"faire + de + article for sports. Weather always uses il: Il fait chaud / froid / du soleil.",
   examples:[{key:"faire du sport",sent:"Je fais du sport le matin.",trans:"I do sport in the morning."},{key:"de la natation",sent:"Elle fait de la natation.",trans:"She goes swimming."},{key:"weather",sent:"Il fait froid aujourd'hui.",trans:"It's cold today."}],
   conj:[["je","fais"],["tu","fais"],["il/elle","fait"],["nous","faisons"],["vous","faites"],["ils/elles","font"]]},
  {title:"Modal verbs: pouvoir · vouloir · devoir", sub:"Always followed by an infinitive",
   rule:"These three always pair with a verb in infinitive form. Je peux nager. Tu veux manger ? Il doit partir.",
   examples:[{key:"pouvoir + inf.",sent:"Je peux parler français.",trans:"I can speak French."},{key:"vouloir + inf.",sent:"Tu veux aller au cinéma ?",trans:"Do you want to go to the cinema?"},{key:"devoir + inf.",sent:"Il doit étudier.",trans:"He must study."}],
   conj:[["pouvoir — je","peux"],["vouloir — je","veux"],["devoir — je","dois"],["pouvoir — nous","pouvons"],["vouloir — nous","voulons"],["devoir — nous","devons"]]},
  {title:"Negation: ne … pas", sub:"Subject + ne/n' + verb + pas",
   rule:"ne becomes n' before a vowel. Special: Il ne faut pas = one must not.",
   examples:[{key:"ne … pas",sent:"Je n'aime pas le café.",trans:"I don't like coffee."},{key:"ne … pas",sent:"Il ne parle pas anglais.",trans:"He doesn't speak English."},{key:"ne faut pas",sent:"Il ne faut pas stresser.",trans:"You must not stress."}],
   conj:[]},
  {title:"Venir de — origin & passé récent", sub:"venir de + place · venir de + infinitif",
   rule:"Origin: Je viens de Toronto / du Canada / d'Inde. Passé récent: venir de + infinitive = just did. Je viens de manger = I just ate.",
   examples:[{key:"je viens de",sent:"Je viens de Toronto.",trans:"I come from Toronto."},{key:"tu viens du",sent:"Tu viens du Canada ?",trans:"Do you come from Canada?"},{key:"passé récent",sent:"Je viens de manger.",trans:"I just ate."}],
   conj:[["je","viens"],["tu","viens"],["il/elle","vient"],["nous","venons"],["vous","venez"],["ils/elles","viennent"]]},
];

/* shared helpers */
function getFilteredVerbs(filter, search){
  const q=(search||"").toLowerCase();
  return VERBS.filter(v=>{
    const mt = filter==="all" || v.t===filter;
    const ms = !q || v.n.toLowerCase().includes(q) || v.m.toLowerCase().includes(q);
    return mt && ms;
  });
}
function shuffle(a){ return [...a].sort(()=>Math.random()-0.5); }
function escHtml(s){ return String(s).replace(/'/g,"&#39;").replace(/"/g,"&quot;"); }
