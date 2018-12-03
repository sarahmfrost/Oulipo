
function poemGen() {

lines = [[ //first line
      'Don Pedro from his shirt has washed the fleas',
      'The wild horse champs the Parthenon\'s top frieze',
      'At snuff no Cornish sailorman would sneeze',
      'At five precisely out went La Marquise',
      'From playboy Chance the nymph no longer flees',
      'He bent right down to pick up his valise',
      'When one with t\'other straightaway agrees',
      'Prose took the minstrel\'s verse without a squeeze',
      'The acid tongue with gourmet\'s expertise',
      'The marble tomb gapes wide with jangling keys'
      ],
      [ //second line
      'The bull\'s horns ought to dry it like a bone',
      'Since Elgin left his nostrils in the stone',
      'His nasal ecstasy beats best Cologne',
      'For tea cucumber sandwiches a scone',
      'Through snobbish growing round her hemline zone',
      'That hordes of crooks felt they\'d more right to own',
      'The answer is they could be twins full-grown',
      'His exaltation shocked both youth and crone',
      'Licks round carved marble chops on snails full-blown',
      'When masons clutch the breath we hold on loan'
      ],
      [ //third line
      'Old corned-beef\'s rusty armour spreads disease',
      'The Turks said just take anything you please',
      'Upon his old oak chest he cuts his cheese',
      'Her native chaffeur waiting in the breeze',
      'His toga rumpled high above his knees',
      'He bent right down and well what did he seize',
      'Replies like this the dumbstruck brain may tease',
      'The understanding critic firstly sees',
      'The showman gargles fire and sword with ease',
      'Forms shadowy with indecision wheeze'
      ],
      [ //fourth line
      'That suede ferments is not at all well known',
      'And loudly sang off-key without a tone',
      'With cherry-pips his cottage floor is sown',
      'Which neither time nor tide can long postpone',
      'One gathers rosebuds or grows old alone',
      'The thumb- and finger-prints of Al Capone',
      'Normal one aims to be <I>and</I> share the throne',
      '\'Ere meanings new to ancient tribes are thrown',
      'While sharks to let\'s say potted shrimps are prone',
      'And empty cages show lif\'e bird has flown'
      ],
      [ //fifth line
      'To one sweet hour of bliss my memory clings',
      'O Parthenon you hold the charger\'s strings',
      'The Frisian Isles my friends are cherished things',
      'How it surprised us pale grey underlings',
      'Old Galileo\'s Pisan offerings',
      'Oh how oh how he hates such pilferings',
      'And yet \'twas he the beggar Fate just flings',
      'They both are right not untamed mutterings',
      'The roundabout eats profits made on swings',
      'It\'s one of many horrid happenings'
      ],
      [ //sixth line
      'Signalling gauchos very rarely shave',
      'The North Wind Bites into his architrave',
      'Whose ocean still-born herrings madly brave',
      'When flame a form to wrath ancestral gave',
      'Were pots graffiti\'d over by a slave',
      'Filching the lolly country thrift helped save',
      'Rejecting ermine to become a knave',
      'That metred rhyme alone can souls enslave',
      'Nought can the mouse\'s timid nibbling stave',
      'With sombre thoughts they grimly line the nave'
      ],
      [ //seventh line
      'An icicle of frozen marrow pings',
      'Th\'outrageous Thames a troubled arrow slings',
      'Such merchandise a melancholy brings',
      'A darling baron pockets precious Mings',
      'The leaning linguist cameramaniac sings',
      'He\'s gone to London how the echo rings',
      'The fertile mother changeling drops like kings',
      'They both are right not unformed smatterings',
      'In salads all chew grubs before they\'ve wings',
      'Proud death quite il-le-gi-ti-mate-ly sings',
      ],
      [ //eighth line
      'As sleeping-bags the silent landscape pave',
      'To break a rule Britannia\'s might might wave',
      'For burning bushes never fish forgave',
      'Till fireman come with hose-piped tidal wave',
      'Etruscan words which Greece and Rome engrave',
      'Through homestead hillside woodland rock and cave',
      'In purest cradles tha\'s how they behave',
      'That every verbal shock aims to deprave',
      'The nicest kids for strickiest toffees crave',
      'Victorious worms grind all into the grave',
      ],
      [ //ninth line
      'Staunch pilgrims longest journeys can\'t depress',
      'Platonic Greece was not so talentless',
      'When dried the terrapin can naught express',
      'The fasting fakir doesn\'t smell the less',
      'Emboggled minds may puff and blow and guess',
      'The peasant\'s skirts on rainy days she\'d tress',
      'The genealogist with field and fess',
      'Poetic licence needs no strain or stress',
      'The wolf devours both sheep and shepherdess',
      'It\'s no good rich men crying Heaven Bless'
      ],
      [ //tenth line
      'What things we did we went the whole darned hog',
      'A piercing wit would sprightliest horses flog',
      'Shallots and sharks\' fins face the smould\'ring log',
      'In Indian summers Englishmen drink grog',
      'With gravity at gravity\'s great cog',
      'And starve the snivelling baby like a dog',
      'With quill white-collared through his life will jog',
      'One tongue will do to keep the verse agog',
      'A bird-brain banquet melts bold Mistress Mog',
      'Or grinning like a pale-faced golliwog'
      ],
      [ //eleventh line
      'And played their mountain croquet jungle chess',
      'Socrates watched his hemlock effervesce',
      'While homeward thirsts to each quenched glass say yes',
      'The colonel\'s still escutcheoned in undress',
      'On wheels the tourist follows his hostess',
      'Watching manure and compost coalesce',
      'To prove mamma an adult with a tress',
      'From cool Parnassus down to wild Loch Ness',
      'The country land just thrives on farmyard mess',
      'Poor Yorick comes to bury not address'
      ],
      [ //twelfth line
      'Southern baroque\'s seductive dialogue',
      '<I>Their</I> sculptors did <I>our</I> best our hulks they clog',
      'Lobsters for sale must be our apologue',
      'No need to cart such treasures from the fog',
      'With breaking voice across the Alps they slog',
      'One misses cricket hearth and croaking frog',
      'But <I>I</I> can understand you Brother Gog',
      'Bard I adore your endless monologue',
      'Whiskey will always wake an Irish bog',
      'We\'ll suffocate before the epilogue'
      ],
      [ // thirteenth line
      'Suits lisping Spanish tongues for whom say some',
      'With marble souvenirs then fill a slum',
      'On fish-slab whale nor seal has never swum',
      'The taj Mahal has trinkets spice and gum',
      'Do bank clerks rule their abacus by thumb?',
      'Where no one bothered how one warmed one\'s bum',
      'And let you off from your opinions glum',
      'Ventriloquists be blowed <I>you</I> strike me dumb',
      'Though bretzels take the dols from board-room drum',
      'Poor reader smile before your lips go numb'
      ],
      [ //fourteenth line
      'The bell tolls fee-less fi-less fo-less fum',
      'For Europe\'s glory while Fate\'s harpies strum',
      'They\'re kings we\'re mammal-cousins hi ho hum',
      'And lessors\' dates have all too short a sum',
      'In cognac brandy is Bacardi rum?',
      'Yet from the City\'s pie pulled not one plum',
      'A wise loaf always knows its humblest crumb',
      'Soliloquies predict great things old chum',
      'Fried grilled black pudding\'s still the world\'s best yum',
      'The best of all things to an end must come'
      ]
]

lines_fr = [[ //premiere
      'Le roi de la pampa retourne sa chemise',
      'Le cheval Parth&eacute;non s\'&eacute;nerve sur sa frise',
      'Le vieux marin breton de tabac prit sa prise',
      'C\'&eacute;tait &agrave; cinq o\'clock qu\'il sortait la marquise',
      'Du jeune avantageux la nymphe &eacute;tait &eacute;prise',
      'Il se penche il voudrait attraper sa valise',
      'Quand l\'un aveque l\'autre aussit&ocirc;t sympathise',
      'Lorsqu\'un jour exalt&eacute; l\'a&egrave;de prosa&iuml;se',
      'Le marbre pour l\'acide est une friandise',
      'Lorsque tout est fini lorsque l\'on agonise'
      ],
      [ // deuxieme
      'pour la mettre &agrave; s&eacute;cher aux cornes des taureaux',
      'depuis que lord Elgin n&eacute;gligea ses naseaux',
      'pour du fin fond du nez exciter les arceaux',
      'pour consommer un th&eacute; puis des petits g&#226;teaux',
      'snob un peu sur les bords des bords fondamentaux',
      'que convoitait c\'est s&ucirc;r une horde d\'escrocs',
      'se faire il pourrait bien que ce soit des jumeaux',
      'pour d&eacute;plaire au profane aussi bien qu\'aux idiots',
      'd\'aucuns par-dessus tout prisent les escargots',
      'lorsque le marbrier astique nos tombeaux'
      ],
      [ //troisième
      'le corn&eacute;db&icirc;f en bo&icirc;te empeste la remise',
      'le Turc de ce temps-l&aacute; pataugeait dans sa crise',
      'sur l\'antique bahut il choisit sa cerise',
      'le chauffeur indig&egrave;ne attendait dans la brise',
      'une toge il portait qui n\'&eacute;tait pas de mise',
      'il se penche et alors &agrave; sa grande surprise',
      'la d&eacute;couverte alors voil&agrave; qui traumatise',
      'la critique lucide aper&ccedil;oit ce qu\'il vise',
      'sur la place un forain de feu se gargarise',
      'des &ecirc;tres ind&eacute;cis vous parlent sans franchise'
      ],
      [ // quatrième
      'et fermentent de m&ecirc;me et les cuirs et les peaux',
      'il chantait tout de m&ecirc;me oui mais il chantait faux',
      'il n\'avait droit qu\'&agrave; une et le jour des Rameaux',
      'elle soufflait bien fort par-dessus les c&ocirc;teaux',
      'des narcisses on cueille ou bien on est des veaux',
      'il ne trouve aussi sec qu\'un sac de vieux fayots',
      'on esp&egrave;re toujours &ecirc;tre de vrais normaux',
      'il donne &agrave; la tribu des cris aux sens nouveaux',
      'qui sait si le requin boulotte les turbots?',
      'et tout vient signifier la fin des haricots'
      ],
      [ // cinquieme
      'Je me souviens encor de cette heure exeuquise',
      'Le cheval Parth&eacute;non frissonnait sous la bise',
      'Souvenez-vous amis de ces &icirc;les de Frise',
      'On &eacute;tait bien surpris par cette plaine grise',
      'Quand on prend des photos de cette tour de Pise',
      'Il d&eacute;plore il d&eacute;plore une telle mainmise',
      'Et pourtant c\'&eacute;tait lui le fr&egrave;re de feintise',
      'L\'un et l\'autre a raison non la foule insoumise',
      'Du voisin le Papou su&ccedil;ote l\'apophyse',
      'On vous fait devenir une orde marchandise'
      ],
      [ // sixième
      'les gauchos dans la plaine agitaient leurs drapeaux',
      'du climat londonien o&ugrave; s\'&eacute;battent les beaux',
      'où venaient par milliers s\'&eacute;chouer les harenceaux',
      'quand se carbonisait la fureur des ch&#226;teaux',
      'd\'où Galil&eacute;e jadis jeta ses petits pots',
      'qui se pla&icirc;t &agrave; flouer de pauvres provinciaux',
      'qui clochard devenant jetait ses oripeaux',
      'le vulgaire s\'ent&ecirc;te &agrave; vouloir des vers beaux',
      'que n\'a pas d&eacute;vor&eacute; la horde des mulots?',
      'on pr&eacute;pare la route aux pensers s&eacute;pulcraux'
      ],
      [ // septième
      'nous avions aussi froid que nus sur la banquise',
      'il grelottait, le pauvre aux bords de la Tamise',
      'nous regrettions un peu ce tas de marchandise',
      'un audacieux baron empoche toute accise',
      'd\'une &eacute;trusque inscription la pierre &eacute;tait incise',
      'aller &agrave; la grand\'ville est bien une entreprise',
      'un fr&egrave;re m&ecirc;me bas est la part ind&eacute;cise',
      'l\'un et l\'autre ont raison non la foule impr&eacute;cise',
      'le gourmet en salade avale le cytise',
      'de la mort on vous greffe une orde b&#226;tardise'
      ],
      [ // huitième
      'lorsque pour nous distraire y plantions nos tr&eacute;teaux',
      'quand les gr&ecirc;lons fin mars mitraillent les bateaux',
      'lorsqu\'on voyait au loin flamber les arbrisseaux',
      'lorsque vient le pompier avec ses grandes eaux',
      'les Grecs et les Romains en vain cherchent leurs mots',
      'elle effraie le Berry comme les Morvandiaux',
      'que les parents f&eacute;conds offrent aux purs berceaux',
      'à tous, n\'est pas donné d\'aimer les chocs verbaux', ///
      'l\'enfant pur aux yeux bleus aime les berlingots',
      'la mite a grignot&eacute; tissus os et rideaux'
      ],
      [ //neufième
      'Du p&ocirc;le &agrave; Rosario fait une belle trotte',
      'La Gr&egrave;ce de Planton &agrave; coup s&ucirc;r n\'est point sotte',
      'On s&egrave;che le poisson dorade ou molve lotte',
      'Du Gange au Malabar le lord anglais zozotte',
      'L\'esprit souffle et resouffle au-dessus de la botte',
      'Devant la boue urbaine on retrousse sa cotte',
      'Le g&egrave;n&egrave;alogiste observe leur bouillotte',
      'Le po&egrave;te inspir&egrave; n\'est point un polyglotte',
      'Le loup est amateur de coq et de cocotte',
      'Le brave a beau crier ah cr&egrave; nom saperlotte',
      ],
      [ //dixième
      'aventures on eut qui s\'y pique s\'y frotte',
      'on comptait les esprits ac&eacute;r&eacute;s &agrave; la hotte',
      'on sale le requin on fume &agrave; l\'&eacute;chalote',
      'comme &agrave; Chandernagor le manant sent la crotte',
      'le touriste &agrave; Florence ignoble charibotte',
      'on gifle le marmot qui plonge sa menotte',
      'gratter le parchemin deviendra sa marotte',
      'une langue suffit pour emplir sa cagnotte',
      'le chat fait un festin de t&ecirc;tes de linotte',
      'le l&#226;che peut arguer de sa mine p&#226;lotte'
      ],
      [ //11
      'lorsqu\'on boit du mat&eacute; l\'on devient argentin',
      'lorsque Socrate mort passait pour un lutin',
      'lorsqu\'on revient au port en essuyant un grain',
      'le colonel s\'&eacute;plonge un blason dans la main',
      'l\'autocar &eacute;crabouille un peu d\'esprit latin',
      'lorsqu\'il voit la gadoue il cherche le purin',
      'il voudra retrouver le germe adult&eacute;rin',
      'm&ecirc;me s\'il prend son sel au celte c\'est son bien',
      'chemin vicinal se nourrit de crottin',
      'Les croque-morts sont l&agrave; pour se mettre au turbin'
      ],
      [ //12
      'L\'Am&eacute;rique du Sud s&eacute;duit les &eacute;quivoques',
      'Sa sculpture est illustre et dans le fond des coques',
      'Enfin on vend le tout homards et salicoques',
      'Ne fallait pas si loin agiter ses breloques',
      'Les rapports transalpins sont-ils biunivoques?',
      'On regrette &agrave; la fin les agrestes bicoques',
      'Fr&egrave;re je te comprends si parfois tu d&eacute;bloques',
      'Barde que tu me plais toujours tu soliloques',
      'On a bu du pinard &agrave; toutes les époques', ////
      'Cela considérant &ocirc; lecteur tu suffoques',  ///
      ],
      [//13
      'exaltent l\'espagnol les oreilles baroques',
      'on transporte et le marbre et d&eacute;bris et d&eacute;froques',
      'on s\'excuse il n\'y a ni baleines ni phoques',
      'les Indes ont assez sans &ccedil;a de pendeloques',
      'les banquiers d\'Avignon changent-ils les ba&iuml;oques?',
      'on mettait sans façon ses plus infectes loques',
      'fr&egrave;re je t\'absoudrai si tu m\'embrelucoques',
      'tu me stup&eacute;fies plus que tous les ventriloques',
      'grignoter des bretzels distrait bien des colloques',
      'comptant tes abattis lecteur tu te disloques',
      ],
      [
      'si la cloche se tait et son terlintintin',
      'si l\'Europe le veut l\'Europe ou son destin',
      'le mammif&egrave;re est roi nous sommes son cousin',
      'l\'&eacute;cu, de vair ou d\'or ne dure qu\'un matin',
      'le Beaune et le Chianti sont-ils le m&ecirc;me vin?',
      'mais on n\'aurait pas vu le m&eacute;tropolitain',
      'la g&eacute;mellit&eacute; vraie accuse son destin',
      'le m&eacute;tromane &agrave; force incarne le devin',
      'mais rien ne vaut grill&eacute; le morceau de boudin',
      'toute chose pourtant doit avoir une fin',
      ]
]


var full_poem = []
var full_poem_fr = []

for (i = 0; i < lines.length; i++){
  ranNum = [Math.floor(Math.random() * 10)];
  full_poem.push(lines[i][ranNum]);
  full_poem_fr.push(lines_fr[i][ranNum]);
  };

    document.getElementById('poemDisplay').innerHTML = full_poem_fr.join('<br>') + '<br><br>' + full_poem.join('<br>');
//    document.getElementById('poemDisplay_fr').innerHTML = full_poem_fr.join('<br>');

}