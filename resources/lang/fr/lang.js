// # Français TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(Aucun)',
  
  
  // titles/labels
  weapon : "Arme",
  blood_veil : "Voile de sang",
  transform : "Transformer",
  blood_code : "Code sanguin",
  gift_type : "Types de Dons",
  passive : "Passif",
  active : "Actif",
  options : "Options",
  code_owner : "Propriétaire du code",
  origin : "Accès:",
  companion_rank : "Mérites de Compagnon",
  rv_mastery : "Maîtrise Rv",
  exclusive : "Exclusif",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Confirmer",
  modal_close : "Fermer",
  modal_title_default : "Popup", // Please translate this
  
  
  // preset selector
  preset_default : 'Select a Preset Build', // Please translate this
  preset_windows : 'Load Preset?' // Please translate this
  preset_empty : 'Empty Build', // Please translate this
  preset_random : 'Random Build', // Please translate this
  preset_warn : 'Do you want to load the "%{PRESET_NAME}" build? Your current build will be overwritten.', // Please translate this
  preset_stop_warning : 'Stop showing this warning', // Please translate this
  preset_submit : 'Submit a Build', // Please translate this
  preset_submit_confirm : 'Do you want to submit a build? You will leave the current page. Please make sure to save your build before proceeding.', // Please translate this
  preset_author : 'Author', // Please translate this
  preset_origin : 'Source', // Please translate this
  preset_desc : 'Description', // Please translate this
  
  // preset groups
  preset_group : {
    initial : "Violation",
    '1h' : "Épée à une main",
    '2h' : "Épée à 2 mains",
    halberd : "Hallebarde",
    hammer : "Marteau",
    bayonet : "Baïonnette",
    light_gifts : "Lumière Dons",
    dark_gifts : "Ténèbres Dons",
    debuff : "Débuffs",
    misc : "Divers"
  },
  
  
  // language selector
  lang_select : 'Language', // Please translate this
  submit_translation : 'Submit a Translation', // Please translate this
  submit_translation_confirm : 'Do you want to submit a translation? You will leave the current page. Please make sure to save your build before proceeding.', // Please translate this
  
  
  // save build
  save_build : 'Save Build', // Please translate this
  save_build_desc : 'Copy the URL or Code for your build to save it or share it with others online.', // Please translate this
  copy_url : 'Copy URL', // Please translate this
  copy_code : 'Copy Code', // Please translate this
  copy_success : 'Copied!', // Please translate this
  
  // load build
  load_build : 'Load Build', // Please translate this
  load_build_label : 'Build URL/Code', // Please translate this
  load_build_desc : 'Paste your Build URL or Code into the textarea below and click the "Load Build" button to load the build. Please note that this will overwrite your current build.', // Please translate this
  load_build_error : 'Please insert a build URL or Code to load a build.', // Please translate this

  
  // stats
  status : "Statut",
  lv : "Niveau",
  hp : "PV",
  sta : "Endurance",
  ichor : "Ichor",
  str : "Force",
  dex : "Dextérité",
  mnd : "Esprit",
  wil : "Volonté",
  vit : "Vitalité",
  for : "Courage",
  
  
  // weight
  weight : "Poids",
  total_weight : "Poids total",
  weight_limit : "Limite de poids",
  
  
  // attack stats
  attack : "Attaque",
  drain_attack : "Attaque absorb.",
  physical : "Physique", // weapon damage
  base : "Base", // base damage
  scaling : "Échelle", // damage from scaling
  drain_rating : "Taux d'absorption",
  
  
  // defense stats
  defense : "Défense",
  stamina_reduction : "Réduction d'endurance",
  balance : "Stabilité",
  base_balance : "Stabilité de base",
  
  
  // resistances
  status_effects : "Altérations d'état",
  resistances : "Résistances",
  venom : "Empoisonnement",
  stun : "Étourdissement",
  inhibit : "Inhibition",
  slow : "Ralentissement",
  leak : "Déperdition",
  
  
  // misc menu options
  passive_effect : "Effets passifs",
  on : "Avec",
  off : "sans",
  hint : "Lire l'astuce",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Échelle de stats",
  required_stats : "Stats requises",
  
  
  // mobility
  mobility : "Mobilité",
  mobi : {
    base : "Mobilité de base", // label for blood code mobility type (also used in the status display)
    slow : "Lente",
    normal : "Normale",
    quick : "Rapide"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "Arbre",
    dark : "Ténèbres",
    light : "Lumière",
    skill : "Compétence"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "Épée à une main",
  '2h' : "Épée à 2 mains",
  halberd : "Hallebarde",
  hammer : "Marteau",
  bayonet : "Baïonnette",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Taillade",
    crush : "Écrasement",
    pierce : "Perforation",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Sang",
    fire : "Feu",
    ice : "Glace",
    lightning : "Foudre"
  },
  
  
  // gift stats
  gift : "Don", // singular
  gifts : "Dons", // plural
  
  ichor_cost : "Coût en ichor",
  cooldown : "Rechargement",
   seconds : "sec.", // displayed after the cooldown number
  physical : "Type d'attaque",
  elemental : "Non-physique",
  usage_req : "Conditions d'util.",
  
  
  // removal (of skills/equipment)
  remove : "Retirer",
  remove_desc : "Supprimez la compétence ou l'équipement actuellement équipé.",
  
  
  // equip error
  equip_error : "You do not meet the requirements to use one or more Gifts/Items you have equipped.", // Please translate this
  
  
  // # DATA SECTION #
  // Mostly names and descriptions for items and skills
  // I recommend booting up Code Vein and copying the texts from the game for these
  /*------------------------------
  * 1. BLOOD CODES
  * 2. PASSIVE SKILLS
  * 3. ACTIVE SKILLS
  * 4. WEAPONS
  * 5. BLOOD VEILS
  * 6. TRANSFORMATIONS
  *------------------------------*/
  data : {
    // # 1. BLOOD CODES #
    blood_code : {
      A0 : {
        name : "Régicide",
        desc : "Votre propre code sanguin, que l'on croyait perdu<br>depuis longtemps lors du combat contre la Reine.<br>Vous pouvez encore percevoir les sentiments qu'il contient.<br>Cette fois-ci, vous devrez instaurer une paix durable.<br><br>Ce code est bien équilibré pour l'exploration et la mêlée.<br>Comporte des PV et une endurance élevés.",
        owner : "Joueur"
      },
      
      A1 : {
        name : "Combattant",
        desc : "Code sanguin d'un guerrier armé d'une épée<br>plus grande que lui.<br>Il contient la volonté de quelqu'un qui a risqué sa vie et<br>combattu de toutes ses forces lors de l'opération Régicide.<br><br>Ce code est axé sur l'endurance pour la mêlée.<br>Améliore les capacités de force et de dextérité.",
        owner : "Inconnu"
      },
      
      A2 : {
        name : "Veilleur",
        desc : "Code sanguin d'un revenant qui danse gracieusement<br>sur le champ de bataille.<br>Il contient la volonté de quelqu'un qui a sauvé ceux qui<br>vivent dans la peur des Déchus et qui a partagé les<br>perles de sang qu'il a récoltées.<br><br>Ce code excelle dans les Dons de soutien et de défense.",
        owner : "Inconnu"
      },
      
      A3 : {
        name : "Mage",
        desc : "Code sanguin d'un revenant qui change le<br>sang absorbé en énergie surpuissante.<br>Il contient la volonté de quelqu'un qui a su tirer parti de<br>Dons complexes pour anéantir de nombreux Déchus.<br><br>Ce code se spécialise dans les Dons offensifs<br>puissants pouvant être utilisés à distance.",
        owner : "Inconnu"
      },
      
      A4 : {
        name : "Enragé",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la volonté de fer de quelqu'un qui s'est repenti<br>pour ses erreurs et qui a lutté jusqu'au bout pour sauver<br>son prochain.<br><br>Ce code est axé sur la force et l'endurance.<br>Une armure lourde peut compenser son faible stock d'ichor.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prométhée",
        desc : "Code sanguin remis par Louis.<br>Il contient sa volonté, endurcie par les nombreuses<br>épreuves qu'il a traversées pour le salut des revenants.<br><br>Ce code est bien équilibré pour le combat, mais fragile.<br>Ses Dons renforcent l'esquive et la parade.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Chasseur",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la volonté de quelqu'un qui a réussi à garder<br>espoir malgré une vie misérable passée à être utilisé<br>comme un pion.<br><br>Ce code excelle au combat à distance.<br>Contient des Dons utiles pour les tirs de la baïonnette.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercure",
        desc : "Code sanguin remis par Coco.<br>Il contient la détermination qui lui permet d'oublier<br>sa peur de la frénésie et du combat afin d'explorer<br>les ruines du monde pour trouver de quoi rebâtir<br>une civilisation.<br><br>Ce code est adapté à l'exploration avec ses statistiques<br>équilibrées et ses Dons liés à l'endurance et aux nuées.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermès",
        desc : "Code sanguin remis par Davis.<br>Il contient sa volonté inébranlable qui lui permet<br>de faire face à tous les dangers pour trouver de<br>nouvelles sources d'espoir.<br><br>Ce code est adapté aux attaques en mêlée et<br>dispose d'une grande variété de Dons utiles.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Nocturne",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la volonté amère d'accomplir son devoir,<br>de préserver une valeur qui semble disparaître.<br><br>Ce code contient de nombreux Dons faits pour le combat,<br>notamment ceux qui empoisonnent.",
        owner : "Héritier sans nom"
      },
      
      A10 : {
        name : "Atlas",
        desc : "Code sanguin remis par Yakumo.<br>Il contient son envie brûlante de risquer sa vie<br>au combat pour protéger ceux qu'il aime.<br><br>Ce code permet d'utiliser des armures lourdes, idéal<br>pour le combat en mêlée. Possède également des<br>Dons utiles pour résister à des ennemis puissants.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Assassin",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la détermination de survivre dans un monde<br>chaotique pour s'en libérer.<br><br>Ce code est optimisé pour la mêlée.<br>Comporte des Dons très utiles pour les attaques surprises.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artémis",
        desc : "Code sanguin remis par Mia.<br>Il contient sa détermination à surmonter un<br>destin cruel et à libérer ceux qui souffrent.<br><br>Ce code est axé sur l'endurance et les Dons offensifs,<br>mais souffre d'un manque de résistance.<br>Comporte également des Dons qui renforcent les<br>capacités d'absorption.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Isis",
        desc : "Code sanguin remis par Aurora.<br>Il contient sa volonté de protéger et de libérer quelqu'un<br>qui a choisi de souffrir pour que les revenants puissent<br>vivre en paix.<br><br>Ce code se spécialise dans le combat à distance et<br>les attaques d'ichor pour écraser l'ennemi.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Torse de la Reine",
        desc : "Code sanguin imprégné du pouvoir de la Reine<br>remis par la relique d'Aurora.<br>Il provoque un sentiment étrange qui vous dévore de<br>l'intérieur, mais qui procure une puissance enivrante.<br><br>Ce code se spécialise dans les attaques à distance<br>et les Dons offensifs pour écraser l'ennemi.",
        owner : "Reine"
      },
      
      A15 : {
        name : "Éos",
        desc : "Code sanguin remis par Io.<br>Il contient sa volonté implacable de surmonter sa<br>condition de Protectrice et de faire ses propres choix.<br><br>Ce code est spécialisé en soutien et en endurance,<br>et possède un grand stock d'ichor.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Code sanguin remis par Nicolas.<br>Il contient sa volonté bienveillante de lutter contre<br>lui-même pour que ceux qu'il aime puissent vivre<br>dans un monde paisible.<br><br>Ce code est axé sur une endurance et un poids<br>total élevés, idéal pour la mêlée. Une bonne<br>armure peut compenser son faible stock d'ichor.",
        owner : "Nicolas Karnstein"
      },
      
      A17 : {
        name : "Souffle de la Reine",
        desc : "Code sanguin imprégné du pouvoir de la Reine<br>remis par la relique de Nicolas.<br>Il provoque un sentiment étrange qui vous dévore de<br>l'intérieur, mais qui procure une puissance enivrante.<br><br>Ce code se spécialise dans l'utilisation de Dons améliorés.<br>Compense ses faibles stats par des Dons.",
        owner : "Reine"
      },
      
      A18 : {
        name : "Survivante",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il renferme la volonté inébranlable de risquer sa vie pour<br>offrir un avenir à la nouvelle génération.<br><br>Ce code se concentre sur la dextérité et contient des<br>Dons utiles en combat.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Chevalier noir",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il renferme une volonté tragique, soumise à d'abominables<br>expériences afin de servir docilement Mido avant de<br>rejoindre les rangs des Déchus.<br><br>Ce code est axé sur une endurance et une force élevés,<br>et contient des Dons efficaces avec une hallebarde.",
        owner : "Miguel Garcia"
      },
      
      A20 : {
        name : "Scáthach",
        desc : "Code sanguin remis par Emily.<br>Il contient sa puissante volonté de prendre la place de ses<br>camarades endormis et de se battre pour les protéger.<br><br>Ce code est bien équilibré pour les Dons et<br>les attaques physiques. Spécialisé dans les Dons de feu.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Griffe de la Reine",
        desc : "Code sanguin imprégné du pouvoir de la Reine<br>remis par la relique d'Emily.<br>Il provoque un sentiment étrange qui vous dévore de<br>l'intérieur, mais qui procure une puissance enivrante.<br><br>Ce code permet d'écraser l'ennemi à l'aide de Dons et<br>d'attaques physiques.",
        owner : "Reine"
      },
      
      A22 : {
        name : "Harmonie",
        desc : "Code sanguin remis par Eva.<br>Il contient sa volonté de payer sa dette et sa<br>dévotion à celui qui l'a sauvée d'une vie d'esclavage.<br><br>Ce code renforce la concentration et contient<br>d'excellents Dons de ténèbres. Résiste mal au<br>vacillement, mais fournit un stock d'ichor élevé.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Gorge de la Reine",
        desc : "Code sanguin imprégné du pouvoir de la Reine<br>remis par la relique d'Eva.<br>Il provoque un sentiment étrange qui vous dévore de<br>l'intérieur, mais qui procure une puissance enivrante.<br><br>Ce code excelle dans les Dons de combat<br>et comporte de nombreux Dons de soutien.",
        owner : "Reine"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "Code sanguin remis par Jack.<br>Il contient son envie téméraire de tout sacrifier pour<br>accomplir son devoir et maintenir l'équilibre.<br><br>Ce code se spécialise dans la mêlée très agressive,<br>mais ne permet pas de porter de lourdes charges.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Héphaïstos",
        desc : "Code sanguin remis par Murasame.<br>Il contient sa volonté passionnée de soutenir ses<br>alliés qui participent aux combats les plus rudes<br>et de les accueillir avec un sourire à leur retour.<br><br>Ce code se spécialise dans les armes à haute<br>dextérité et utilise des Dons retors contre l'ennemi.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Guerrier",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la volonté fière d'un guerrier expérimenté qui a<br>continué de brandir son épée jusqu'à la fin.<br><br>Ce code est idéal pour les styles de combat axés sur<br>la force et comporte des Dons utiles à la survie.",
        owner : "Assistant de Murasame"
      },
      
      A27 : {
        name : "Éclaireuse",
        desc : "Code sanguin obtenu après avoir réparé un cœur de vestige.<br>Il contient la volonté aimante qui pousse à renoncer à ses<br>désirs et à vivre pour le bien de ses êtres chers.<br><br>Ce code excelle dans les Dons de combat aux<br>grandes capacités d'absorption et permet<br>d'utiliser des armures légères pour une plus<br>grande manœuvrabilité sur le terrain.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Reine",
        desc : "Code sanguin obtenu après avoir rassemblé<br>toutes les reliques et reçu le titre de Reine.<br>La volonté qu'il contient ne dégage ni rage ni chagrin.<br>Il est constitué de solitude à l'état pur.<br><br>Ce code se spécialise dans les Dons et possède<br>un stock d'ichor élevé pour écraser l'ennemi.",
        owner : "Reine"
      },
      
      A29 : {
        name : "Hadès",
        desc : "Code sanguin remis par Silva.<br>Il contient sa détermination à tout abandonner et à<br>s'isoler loin de tout pour sauver l'avenir de l'humanité.<br><br>Ce code améliore la force et la dextérité pour des<br>attaques puissantes. Idéal pour l'équipement lourd.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Déméter",
        desc : "Code sanguin remis par Karen.<br>Il contient sa volonté compatissante de se<br>sacrifier pour ceux qui souffrent de la soif et<br>d'endosser les péchés causés par ce cruel destin.<br><br>Ce code contient un stock d'ichor élevé,<br>utile pour les Dons de soutien. Il peut aussi<br>infliger d'énormes dégâts de force en combat.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Code sanguin obtenu après avoir réparé<br>le cœur du vestige de Cruz.<br>Il contient sa détermination à éliminer la menace et<br>à sauver les faibles lorsque le Projet Reine débuta.<br><br>Ce code contient des Dons utiles en attaque et en<br>défense, ainsi que des Dons uniques impliquant de<br>se sacrifier.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Sombre présage",
        desc : "Code sanguin d'un cœur qui bouillonnait d'une ambition<br>secrète avant de devenir un revenant.<br>Il contient la volonté inexorable d'utiliser toutes les forces<br>de l'univers pour parvenir à ses fins et de se faire connaître<br>de tous les habitants de Vein, la Prison brumeuse.<br><br>Comporte des Dons uniques qui nécessitent une grande<br>détermination.",
        owner : "Inconnu"
      },
      
      A33 : {
        name : "Astréa",
        desc : "Code sanguin qui représente le vœu de bonheur de Mia.<br>Il contient son désir de réconforter ses camarades<br>éreintés à leur retour du champ de bataille.<br><br>Ce code assure équilibre et stabilité en combat<br>et comporte des Dons utiles pour l'exploration.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclépios",
        desc : "Code sanguin axé sur l'endurance et les PV,<br>obtenu après avoir réparé le cœur de vestige de<br>Valerio, l'ancien partenaire de Jack.<br><br>Il renferme la résolution d'aider et de protéger<br>tout le monde.<br><br>Ce code n'offre pas beaucoup d'options pour le<br>combat au corps à corps, mais son endurance et<br>ses PV élevés en font un atout de poids pour la<br>survie.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Achille",
        desc : "Code sanguin à l'endurance et à la dextérité<br>élevées, obtenu après avoir réparé un cœur de<br>vestige.<br><br>Il renferme la volonté inflexible de tout<br>embraser sur les champs de bataille.<br><br>Son endurance élevée, le faible poids de ses<br>armes et la vitesse de ses attaques rendent ce<br>code idéal pour harceler l'ennemi au corps à<br>corps.",
        owner : "Inconnu"
      },
      
      A36 : {
        name : "Surt",
        desc : "Code sanguin obtenu sur une abomination scellée<br>au cœur des profondeurs.<br><br>Son long sommeil n'a pas étouffé son brasier<br>infernal, qui remplit le corps de son possesseur<br>d'une puissance effrayante pulvérisant quiconque<br>ose s'approcher.<br><br>Doté d'une force, d'un courage et d'une<br>endurance élevés, ce code sanguin permet des<br>combats dynamiques.",
        owner : "Chevalier du brasier"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pollux",
        desc : "Code sanguin axé sur la force et les PV, obtenu<br>après avoir réparé un cœur de vestige.<br><br>Il renferme la volonté d'un guerrier au grand<br>cœur qui s'est battu aux côtés de ses amis.<br><br>Ce code oppose aux attaques ennemies une bonne<br>défense et une grande résistance, avant de<br>répliquer par des coups puissants.",
        owner : "Inconnu"
      },
      
      A38 : {
        name : "Ymir",
        desc : "Code sanguin obtenu sur une abomination scellée<br>au cœur des profondeurs.<br><br>Son long sommeil n'a pas altéré le chatoiement<br>de ses fleurs de glace, qui permettent à l'œil<br>perçant de saisir l'occasion parfaite d'anéantir<br>l'ennemi d'un coup.<br><br>Doté d'une volonté et d'une vitalité élevées, ce<br>code augmente aussi les PV et la puissance des<br>Dons de ténèbres.",
        owner : "Impératrice de glace"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Persée",
        desc : "Code sanguin à la volonté et à l'esprit élevés,<br>obtenu après avoir réparé un cœur de vestige.<br><br>Il renferme la volonté d'un guerrier intelligent<br>qui a maîtrisé le cours de nombreuses batailles.<br><br>Doté de Dons puissants et d'une grande quantité<br>d'ichor, ce code est fait pour anéantir les<br>adversaires les uns après les autres.",
        owner : "Inconnu"
      },
      
      A40 : {
        name : "Váli",
        desc : "Code sanguin obtenu sur une abomination scellée<br>au cœur des profondeurs.<br><br>Son long sommeil n'a pas terni la lueur de ses<br>éclairs crépitants, qui offre à son possesseur<br>la force de tout écraser sur son passage.<br><br>Grâce à sa dextérité et son esprit élevés, ce<br>code se spécialise dans une grande variété de<br>Dons de lumière de renforcement.",
        owner : "Seigneur de la foudre"
      },
      
      A41 : {
        name : "Orion",
        desc : "Code sanguin offrant une volonté et une<br>dextérité élevées, obtenu après avoir réparé un<br>cœur de vestige.<br><br>Il renferme la volonté d'un tireur d'élite<br>talentueux qui virevoltait gracieusement sur les<br>champs de bataille.<br><br>Optimisé pour le combat à distance, ce code<br>renforce considérablement la puissance d'attaque<br>des balles.",
        owner : "Inconnu"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Bonus de santé",
        desc : "Augmente les PV maximum."
      },
      
      A1 : {
        name : "Stimulant de santé",
        desc : "Augmente les PV maximum."
      },
      
      A2 : {
        name : "Faveur d'endurance",
        desc : "Augmente l'endurance maximale."
      },
      
      A3 : {
        name : "Stimulant d'endurance",
        desc : "Augmente l'endurance maximale."
      },
      
      A4 : {
        name : "Sprinteur",
        desc : "Réduit l'endurance absorbée par la ruée."
      },
      
      A5 : {
        name : "Crocs aiguisés",
        desc : "Augmente les dégâts des absorptions spéciales<br>après une parade ou un coup dans le dos."
      },
      
      A6 : {
        name : "Croc tenace",
        desc : "Augmente les dégâts infligés par les<br>absorptions réalisées après une projection."
      },
      
      A7 : {
        name : "Croc héroïque",
        desc : "Augmente les dégâts infligés par les<br>absorptions chargées."
      },
      
      A8 : {
        name : "Destruction rapide",
        desc : "Augmente les dégâts infligés<br>proportionnellement à votre mobilité."
      },
      
      A9 : {
        name : "Instinct de survie",
        desc : "Décuple les Dons ainsi que la puissance des armes et<br>de l'absorption lorsque vos PV sont bas."
      },
      
      A10 : {
        name : "Évasion futée",
        desc : "Augmente temporairement la quantité de<br>concentration obtenue en esquivant."
      },
      
      A11 : {
        name : "Concentration inébranlable",
        desc : "Augmente la quantité de concentration obtenue<br>en subissant des dégâts."
      },
      
      A12 : {
        name : "Bonus de taux d'absorption",
        desc : "Augmente le taux d'absorption des attaques à l'arme."
      },
      
      A13 : {
        name : "Avarice",
        desc : "Augmente la quantité d'ichor obtenue grâce aux absorptions."
      },
      
      A14 : {
        name : "Vœu d'ichor",
        desc : "Réduit les PV maximum pour augmenter la<br>quantité d'ichor que vous pouvez conserver."
      },
      
      A15 : {
        name : "Bonus d'ichor max.",
        desc : "Augmente la quantité maximum d'ichor que vous<br>pouvez conserver."
      },
      
      A16 : {
        name : "Vitesse de Don +",
        desc : "Augmente la vitesse d'utilisation des Dons."
      },
      
      A17 : {
        name : "Accélérateur de charge",
        desc : "Augmente la vitesse des actions chargées."
      },
      
      A18 : {
        name : "Cumul d'altérations +",
        desc : "Augmente l'accumulation d'altérations sur<br>l'ennemi."
      },
      
      A19 : {
        name : "Ambition du revenant",
        desc : "Permet de vous équiper d'armes et de voiles<br>de sang plus lourds."
      },
      
      A20 : {
        name : "Opportunisme",
        desc : "Augmente les dégâts de l'arme contre les<br>ennemis affectés par une altération d'état."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Afflux de sang",
        desc : "Augmente fortement la limite d'ichor,<br>mais réduit fortement la puissance<br>des Dons et la vitesse de récupération<br>de l'endurance."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Bonus de stabilité",
        desc : "Augmente la stabilité."
      },
      
      B1 : {
        name : "Parade habile",
        desc : "Restaure entièrement l'endurance à chaque parade."
      },
      
      B2 : {
        name : "Garde ultra-absorbante",
        desc : "Augmente votre taux d'absorption lorsque vous<br>vous protégez contre une attaque ennemie."
      },
      
      B3 : {
        name : "Inébranlable",
        desc : "Fait tomber vos PV à 1 si vous recevez un<br>coup mortel. Requiert un minimum de PV.",
        usage_req : "Atlas Code sanguin"
      },
      
      B4 : {
        name : "Prise de sang",
        desc : "Esquiver permet d'absorber de l'ichor selon<br>le taux d'absorption de votre arme.",
        usage_req : "Artémis Code sanguin"
      },
      
      B5 : {
        name : "Piège évasif",
        desc : "En esquivant les attaques de l'ennemi, vous <br>générez un piège. Consomme de l'ichor.",
        usage_req : "Héphaïstos Code sanguin"
      },
      
      B6 : {
        name : "Résist. empoisonnement",
        desc : "Augmente la résistance à l'empoisonnement."
      },
      
      B7 : {
        name : "Résist. étourdissement",
        desc : "Augmente la résistance à l'étourdissement."
      },
      
      B8 : {
        name : "Résistance à l'inhibition",
        desc : "Augmente la résistance à l'inhibition."
      },
      
      B9 : {
        name : "Résist. ralentissement",
        desc : "Augmente la résistance au ralentissement."
      },
      
      B10 : {
        name : "Résist. à la déperdition",
        desc : "Augmente la résistance à la déperdition."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Bonus de force",
        desc : "Augmente la force."
      },
      
      C1 : {
        name : "Bonus de dextérité",
        desc : "Augmente la dextérité."
      },
      
      C2 : {
        name : "Bonus d'esprit",
        desc : "Augmente l'esprit."
      },
      
      C3 : {
        name : "Bonus de volonté",
        desc : "Augmente la volonté."
      },
      
      C4 : {
        name : "Bonus de vitalité",
        desc : "Augmente la vitalité."
      },
      
      C5 : {
        name : "Bonus de courage",
        desc : "Augmente le courage."
      },
      
      C6 : {
        name : "Bonus de force/dextérité",
        desc : "Augmente la force et la dextérité."
      },
      
      C7 : {
        name : "Bonus de force/volonté",
        desc : "Augmente la force et la volonté."
      },
      
      C8 : {
        name : "Bonus de force/vitalité",
        desc : "Augmente la force et la vitalité."
      },
      
      C9 : {
        name : "Bonus de dextérité/volonté",
        desc : "Augmente la dextérité et la volonté."
      },
      
      C10 : {
        name : "Bonus de dextérité/courage",
        desc : "Augmente la dextérité et le courage."
      },
      
      C11 : {
        name : "Bonus esprit/volonté",
        desc : "Augmente l'esprit et la volonté."
      },
      
      C12 : {
        name : "Bonus esprit/vitalité",
        desc : "Augmente l'esprit et la vitalité."
      },
      
      C13 : {
        name : "Bonus esprit/courage",
        desc : "Augmente l'esprit et le courage."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Bonus de force/courage",
        desc : "Augmente la force et le courage."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Bonus de volonté/vitalité",
        desc : "Augmente la volonté et la vitalité."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Bonus de dextérité/esprit",
        desc : "Augmente la dextérité et l'esprit."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span> Élan ténébreux',
        desc : "Augmente les effets des Dons de ténèbres en<br>état de concentration."
      },
      
      D1 : {
        name : '<span style="font-family:GEZFont;"></span> Élan lumineux',
        desc : "Augmente les effets des Dons de lumière en<br>état de concentration."
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span> Stabilité de la garde',
        desc : "Réduit l'endurance consommée par la garde en<br>état de concentration."
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span> Garde concentrée',
        desc : "Augmente la défense de l'arme contre les<br>attaques physiques en état de concentration."
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span> Endurance concentrée',
        desc : "Réduit l'endurance dépensée en état de<br>concentration."
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span> Concentration continue',
        desc : "Réduit la vitesse de consommation de la jauge<br>de concentration en état de concentration."
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span> Carnage concentré',
        desc : "Réduit la quantité de concentration consommée<br>par les attaques en état de concentration."
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span> Coups d&#39;ichor',
        desc : "Réduit le coût en ichor des attaques à<br>l'arme en état de concentration."
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor réduit',
        desc : "Réduit la consommation d'ichor en état de<br>concentration.",
        usage_req : "Gorge de la Reine Code sanguin"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus d&#39;absorption',
        desc : "Augmente tous les taux d'absorption en état<br>de concentration."
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span> Don rapide concentré',
        desc : "Augmente la vitesse d'utilisation des Dons<br>en état de concentration."
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de sang',
        desc : "Votre arme actuelle inflige des dégâts de<br>sang en état de concentration."
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de feu',
        desc : "Votre arme actuelle inflige des dégâts de<br>feu en état de concentration."
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de glace',
        desc : "Votre arme actuelle inflige des dégâts de<br>glace en état de concentration."
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de foudre',
        desc : "Votre arme actuelle inflige des dégâts de<br>foudre en état de concentration."
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de poison',
        desc : "Ajoute un effet à votre arme qui inflige l'altération<br>empoisonnement en état de concentration."
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus d&#39;étourdissement',
        desc : "Ajoute un effet à votre arme qui inflige l'altération<br>étourdissement en état de concentration."
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span> Le sourire de la Déesse',
        desc : "Restaure les PV quand vous passez en état de<br>concentration."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span> Concentration d&#39;ichor',
        desc : "Restaure de l'ichor quand vous passez en état de<br>concentration."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : '<span style="font-family:GEZFont;"></span> Bonus de stats',
        desc : "Augmente toutes les statistiques en état de<br>concentration."
      },
      
      D20 : {
        name : '<span style="font-family:GEZFont;"></span> Pouvoir d&#39;arrêt',
        desc : "En état de concentration, vos tirs de baïonnette<br>déstabilisent davantage l'ennemi."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "As de l'épée à une main",
        desc : "Augmente la puissance d'attaque lorsque vous<br>portez une épée à une main."
      },
      
      E1 : {
        name : "As de l'épée à 2 mains",
        desc : "Augmente la puissance d'attaque lorsque vous<br>portez une épée à deux mains."
      },
      
      E2 : {
        name : "As de la hallebarde",
        desc : "Augmente la puissance d'attaque lorsque vous<br>portez une hallebarde."
      },
      
      E3 : {
        name : "As du marteau",
        desc : "Augmente la puissance d'attaque lorsque vous<br>portez une masse."
      },
      
      E4 : {
        name : "As de la baïonnette",
        desc : "Augmente la puissance d'attaque lorsque vous<br>portez une baïonnette."
      },


      // # MISC #
      F0 : {
        name : "Régénération modifiée",
        desc : "Réduit le nombre d'utilisations possibles de<br>la régénération, mais augmente son efficacité."
      },
      
      F1 : {
        name : "Régénération améliorée",
        desc : "Augmente la quantité de PV restaurée par la<br>capacité de Régénération."
      },
      
      F2 : {
        name : "Régénération augmentée",
        desc : "Augmente le nombre d'utilisations possibles<br>de la régénération."
      },
      
      F3 : {
        name : "Porteur du feu",
        desc : "Restaure votre régénération lorsqu'un allié<br>perd tous ses PV et se disperse.",
        usage_req : "Astréa Code sanguin"
      },
      
      F4 : {
        name : "Vol de vie",
        desc : "Régénère les PV en tuant des ennemis."
      },
      
      F5 : {
        name : "Absorption curative",
        desc : "Les attaques d'absorption restaurent des PV."
      },
      
      F6 : {
        name : "Danse de la lame éternelle",
        desc : "Version améliorée de la Danse de la lame.<br>Augmente temporairement la puissance d'attaque<br>quand vous esquivez les coups de l'ennemi.",
        usage_req : "Prométhée Code sanguin"
      },
      
      F7 : {
        name : "Empoisonnement absorbant",
        desc : "Octroie de l'ichor lorsque les ennemis<br>proches subissent de l'empoisonnement.",
        usage_req : "Nocturne Code sanguin"
      },
      
      F8 : {
        name : "Faim de revenant",
        desc : "Augmente la quantité de nuées obtenue en<br>venant à bout d'un ennemi."
      },
      
      F9 : {
        name : "Avidité de revenant",
        desc : "Augmente les chances de trouver des objets<br>sur les ennemis vaincus."
      },
      
      F10 : {
        name : "Voie du pionnier",
        desc : "Facilite la maîtrise des Dons."
      },
      
      F11 : {
        name : "Chute amortie",
        desc : "Réduit les dégâts subis après une chute."
      },
      
      F12 : {
        name : "Délivrance",
        desc : "Lorsqu'un allié subit des dégâts mortels,<br>ses PV tombent à 1 et vous subissez les<br>dégâts restants.<br><br>Cet effet ne s'active que s'il vous reste au<br>moins 2 PV. Les dégâts que vous subissez<br>ne peuvent pas faire tomber vos PV à 0.",
        usage_req : "Ishtar Code sanguin"
      },
      
      F13 : {
        name : "Infatigabilité",
        desc : "Augmente votre taux de régénération<br>d'endurance."
      },
      
      F14 : {
        name : "Renfort",
        desc : "Augmente la régénération quand vous<br>récupérez les nuées perdues après dispersion."
      },
      
      F15 : {
        name : "Dague de revenant",
        desc : "Lancez un couteau qui octroie de l'ichor<br>lorsqu'il atteint un ennemi."
      },
      
      F16 : {
        name : "Attention complète",
        desc : "Frapper avec une absorption chargée octroie<br>de la concentration."
      },
      
      F17 : {
        name : "Charisme",
        desc : "Augmente les statistiques de votre partenaire<br>(ne s'applique pas avec un joueur)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Flèche sonique",
        desc : "Canalise de l'ichor pour tirer un projectile.<br><br>Vous n'impressionnerez personne avec une simple volée,<br>mais son utilité contre des groupes d'ennemis est indéniable."
      },
      
      A1 : {
        name : "Tir de sang",
        desc : "Canalise le pouvoir du sang pour tirer un grand projectile.<br><br>Cette version améliorée de la Flèche sonique a un impact<br>beaucoup plus important."
      },
      
      A2 : {
        name : "Cri sanglant",
        desc : "Génère un projectile de sang vicié en<br>direction de la cible.<br><br>Un coup direct déchire les chairs et laisse<br>une plaie béante qui provoque d'intenses<br>douleurs."
      },
      
      A3 : {
        name : "Cri embrasé",
        desc : "Projette une flamme dévastatrice sur la cible.<br><br>On dit que cette attaque est tellement puissante que toutes<br>ses victimes ne laissent qu'une ombre derrière elles."
      },
      
      A4 : {
        name : "Cri glaçant",
        desc : "Tire un projectile de glace sur la cible.<br><br>Un coup direct vide la victime de toute chaleur<br>et embrume son esprit pour l'empêcher de<br>réfléchir."
      },
      
      A5 : {
        name : "Cri de plasma",
        desc : "Génère une décharge électrique en direction<br>de la cible.<br><br>Un coup direct fait bouillir le sang de la victime<br>et lui fait souffrir le martyre."
      },
      
      A6 : {
        name : "Pointe de sang",
        desc : "Tire un projectile d'ichor sur la cible.<br><br>Ce projectile est un concentré de force à<br>l'état pur. Il percute les ennemis comme un<br>boulet de canon."
      },
      
      A7 : {
        name : "Pointe enflammée",
        desc : "Tire un projectile de feu sur la cible.<br><br>Ce projectile est un concentré de force à<br>l'état pur. Il percute les ennemis comme un<br>boulet de canon."
      },
      
      A8 : {
        name : "Pointe de givre",
        desc : "Tire un projectile de glace sur la cible.<br><br>Ce projectile est un concentré de force à l'état pur.<br>Il percute les ennemis comme un boulet de canon."
      },
      
      A9 : {
        name : "Pointe de foudre",
        desc : "Tire un projectile d'électricité sur la cible.<br><br>Ce projectile est un concentré de force à<br>l'état pur. Il percute les ennemis comme un<br>boulet de canon."
      },
      
      A10 : {
        name : "Barrage de sang",
        desc : "Tire une volée de projectiles sanglants qui<br>s'abattent sur l'ennemi dans une vaste zone.<br><br>Malgré son manque de puissance,<br>la vitesse de tir de cette technique est idéale<br>pour réprimer l'ennemi."
      },
      
      A11 : {
        name : "Barrage de flammes",
        desc : "Tire une volée de projectiles de feu qui<br>s'abattent sur l'ennemi dans une vaste zone.<br><br>Malgré son manque de puissance,<br>la vitesse de tir de cette technique est idéale<br>pour réprimer l'ennemi."
      },
      
      A12 : {
        name : "Barrage de glace",
        desc : "Tire une volée de projectiles gelés qui<br>s'abattent sur l'ennemi dans une vaste zone.<br><br>Malgré son manque de puissance,<br>la vitesse de tir de cette technique est idéale<br>pour réprimer l'ennemi."
      },
      
      A13 : {
        name : "Barrage de foudre",
        desc : "Tire une volée de projectiles électriques qui<br>s'abattent sur l'ennemi dans une vaste zone.<br><br>Malgré son manque de puissance,<br>la vitesse de tir de cette technique est idéale<br>pour réprimer l'ennemi."
      },
      
      A14 : {
        name : "Amas de Vodnik",
        desc : "Relâche du sang concentré pour détruire vos<br>ennemis.<br><br>Le sang maudit des morts condamne ses<br>victimes à l'enfer."
      },
      
      A15 : {
        name : "Le feu de Walpurgis",
        desc : "Contrôle la circulation sanguine avec précision<br>pour générer un puissant brasier.<br><br>Les techniques avancées ne sont pas destinées<br>aux revenants qui ne croient pas en leur propre<br>force. Leur puissance se retournerait contre un<br>utilisateur involontaire et le détruirait."
      },
      
      A16 : {
        name : "Le regard de Baba Yaga",
        desc : "Contrôle la circulation sanguine avec précision<br>pour générer une puissante vague de froid.<br><br>Ceux qui se dispersent alors qu'une partie de<br>leur corps est gelée ne peuvent pas la régénérer<br>tant qu'elle n'a pas fondu. On utilise parfois ce<br>défaut pour mener des interrogatoires."
      },
      
      A17 : {
        name : "La rage de Perkunas",
        desc : "Contrôle la circulation sanguine avec précision<br>pour générer une puissante décharge.<br><br>Le seul moyen d'échapper à la colère<br>d'un dieu énervé, c'est de mourir."
      },
      
      A18 : {
        name : "Lame crépusculaire",
        desc : "Utilise de l'ichor pour créer une lame de sang qui<br>tranche les ennemis qui se trouvent devant vous.<br><br>Une ligne de sang traverse le ciel au crépuscule<br>et se change en une lame mortelle qui détruit<br>vos adversaires."
      },
      
      A19 : {
        name : "Lune écarlate",
        desc : "Utilise de l'ichor pour créer une lame de feu qui<br>tranche les ennemis qui se trouvent devant vous.<br><br>Une lune rouge menaçante brille dans la nuit.<br>On dit que ceux qui la voient seront frappés de<br>malchance."
      },
      
      A20 : {
        name : "Flash de l'aurore",
        desc : "Utilise de l'ichor pour créer une lame de glace qui<br>tranche les ennemis qui se trouvent devant vous.<br><br>Une ligne de sang traverse le ciel et se change<br>en une épée de glace. Sa surface fait danser la<br>lumière comme un prisme et distrait les ennemis."
      },
      
      A21 : {
        name : "Lame de Jupiter",
        desc : "Utilise de l'ichor pour créer une lame de foudre qui<br>tranche les ennemis qui se trouvent devant vous.<br><br>Lorsque la victime ouvre les yeux après<br>avoir été aveuglée par l'éclair, elle se rend<br>compte qu'elle est déjà morte."
      },
      
      A22 : {
        name : "Exécution",
        desc : "Votre volonté inébranlable crée une épée<br>géante qui tombe comme un couperet sur<br>l'ennemi.<br><br>Ceux qui sont confrontés à cette lame<br>découvrent une vérité indéniable.<br>Mieux vaut cesser de lutter et l'accepter."
      },
      
      A23 : {
        name : "Tempête de feu",
        desc : "Tire une volée de projectiles enflammés qui<br>font vaciller l'ennemi.<br><br>Les balles ne sont pas très puissantes<br>individuellement, mais il y en a suffisamment<br>pour donner du fil à retordre aux ennemis<br>les plus coriaces."
      },
      
      A24 : {
        name : "Éclair explosif",
        desc : "Crée et tire une volée de projectiles <br>électriques sur votre cible.<br><br>L'éclair plonge dans le sol et aucune armure ne <br>peut l'empêcher de pénétrer jusqu'à l'os."
      },
      
      A25 : {
        name : "Garde d'honneur",
        desc : "Génère plusieurs colonnes de glace qui<br>s'abattent sans relâche sur la cible.<br><br>Lorsqu'un combattant peut enchaîner les<br>attaques en une seule action et que son<br>adversaire doit absolument les éviter,<br>l'issue du combat est évidente."
      },
      
      A26 : {
        name : "Brasier dansant",
        desc : "Tire trois balles qui ricochent.<br><br>Impossible de deviner dans quelle direction les<br>balles vont rebondir, mais avec un peu de chance<br>elles toucheront des ennemis imprévisibles."
      },
      
      A27 : {
        name : "Pieu de dragon",
        desc : "Transforme votre sang en un pieu géant qui<br>transperce la cible.<br><br>Cette technique est à la fois rapide et puissante.<br>On dit que ceux qui subissent sa morsure vont<br>directement brûler en enfer."
      },
      
      A28 : {
        name : "Bobine d'Indra",
        desc : "Tire trois puissants éclairs aux pieds de votre cible.<br><br>Cette technique désintègre instantanément<br>le sang des malheureux qui se font frapper<br>de plein fouet et les fait exploser de l'intérieur."
      },
      
      A29 : {
        name : "Quadruple verdict",
        desc : "Tire une salve continue de balles de foudre sur la cible.<br><br>Ceux que la justice divine a reconnu coupables<br>ne peuvent échapper à leur châtiment. Il faut attendre<br>que la colère se calme avant de pouvoir réutiliser ce Don."
      },
      
      A30 : {
        name : "Contrat ancien",
        desc : "Tire du sang concentré dans le sol qui fait<br>jaillir une colonne de sang sous votre cible.<br><br>Bien que ce puissant Don soit difficile à<br>apprendre, c'est un allié précieux, pour peu<br>qu'on l'utilise correctement."
      },
      
      A31 : {
        name : "Glace d'ichor",
        desc : "Concentre l'ichor et le convertit en puissants<br>éclats de glace lancés vers l'ennemi.<br><br>L'utilisation de ce Don demande une quantité<br>d'énergie phénoménale. Si vous n'avez pas de<br>relique pour servir de catalyseur, vous ne<br>pourrez pas l'utiliser."
      },
      
      A32 : {
        name : "Crépuscule",
        desc : "Tire un grand rayon laser qui transperce<br>tout ce qui se trouve devant vous.<br><br>Lorsque la lumière disparaît, il ne reste<br>plus rien, pas même de la poussière.<br>Tout est désintégré.",
        usage_req : "Torse de la Reine Code sanguin"
      },
      
      A33 : {
        name : "Lys de feu",
        desc : "Lance une lame rapide.<br>Une fois qu'elle est plantée, elle explose.<br><br>Cette technique ne sert pas uniquement à<br>attaquer vos ennemis. En visant les murs et le<br>sol, les utilisateurs expérimentés s'en servent<br>comme d'un piège."
      },
      
      A34 : {
        name : "Lame de sable",
        desc : "Crée une lame de sable comprimé qui sort du<br>sol et repousse les ennemis.<br><br>Cette technique particulière utilise de<br>l'ichor pour éroder le sol et crée une lame<br>composée de sable. En raison de la difficulté<br>à altérer rapidement une substance, ce Don<br>nécessite un haut niveau de compétence."
      },
      
      A35 : {
        name : "Tempête explosive",
        desc : "Crée des lames de sable qui convergent vers<br>la cible et explosent.<br><br>Cette énorme explosion est produite par la<br>concentration de multiples sources de<br>pression en un point unique. Il paraît<br>extrêmement difficile, voire impossible,<br>d'échapper à une telle tempête de sable."
      },
      
      A36 : {
        name : "Sables mortels",
        desc : "Crée aux pieds de la cible un poing de sable<br>qui broie l'ennemi.<br><br>Personne ne peut échapper à ce piège de<br>sable. Composé de multiples couches de sable<br>compressé, il est plus résistant que l'acier<br>et impossible à détruire."
      },
      
      A37 : {
        name : "Sables de la décadence",
        desc : "Crée une tempête de sable géante autour de<br>votre cible.<br><br>Les vétérans du champ de bataille savent<br>qu'il ne faut jamais baisser sa garde, car<br>personne ne sait quelles horreurs assoiffées<br>de sang nous guettent."
      },
      
      A38 : {
        name : "Cendre chaotique",
        desc : "Tire un projectile qui absorbe l'ichor de la cible.<br><br>Les faibles sont le sang qui nourrit la chair des<br>puissants. Ce n'est pas du vol.<br>C'est une ressource comme une autre qu'il<br>faut utiliser pour bâtir l'avenir des revenants."
      },
      
      A39 : {
        name : "Épine purificatrice",
        desc : "Crée une épine géante qui transperce la cible.<br><br>De nombreux revenants ont trouvé la mort sur<br>ces pointes lors des combats. La terreur<br>qu'elles inspirent est toujours aussi délicieuse."
      },
      
      A40 : {
        name : "Croix du loup d'argent",
        desc : "Déchaîne une lame de sang en forme de<br>croix sur la cible.<br><br>Technique d'assaut autrefois utilisée par le<br>chef des Loups d'argent, la croix de sang<br>représenterait une prière aux déchus. Quelle<br>ironie qu'un tel Don soit aussi froidement<br>efficace pour découper sa cible en quatre."
      },
      
      A41 : {
        name : "Saut de l'ombre",
        desc : "Génère une onde de choc autour de vous, puis<br>vous téléporte immédiatement en arrière.<br><br>Ce Don disperse le corps et le réassemble<br>instantanément.",
        usage_req : "Isis Code sanguin"
      },
      
      A42 : {
        name : "Impact sanglant",
        desc : "Relâche de l'ichor condensé pour générer une<br>onde de choc qui anéantit les ennemis à proximité.<br><br>Ce Don n'est pas très puissant, mais il est parfait<br>pour vous rapprocher ou vous éloigner de votre<br>objectif. Sachez tirer parti du terrain pour renverser<br>le cours du combat."
      },
      
      A43 : {
        name : "Manteau hivernal",
        desc : "Provoque un blizzard qui gèle tout ce qui se<br>trouve à proximité.<br><br>Aucun ennemi ne peut résister au froid et au<br>vent créés par ce Don. Ils seront tous<br>impuissants face à leur inexorable trépas."
      },
      
      A44 : {
        name : "Flash pivoine",
        desc : "Déclenche une explosion géante qui engloutit<br>les ennemis dans la zone.<br><br>Rares sont ceux qui parviennent à sortir<br>indemnes d'une explosion, particulièrement<br>lorsqu'ils sont attirés vers le point d'origine.",
        usage_req : "Scáthach Code sanguin"
      },
      
      A45 : {
        name : "Feu follet",
        desc : "Tire un projectile d'ichor qui couvre vos arrières.<br><br>Ce Don ne fait pas beaucoup de dégâts, mais<br>il est très utile pour créer la confusion dans les<br>rangs ennemis."
      },
      
      A46 : {
        name : "Braise inversée",
        desc  : "Tire un projectile de feu qui protège les<br>arrières de l'utilisateur.<br><br>Ce Don est très rapide à préparer.<br>L'ennemi sera déjà en train de brûler<br>quand il verra la flamme arriver."
      },
      
      A47 : {
        name : "Explosion désespérée",
        desc : "Don dangereux qui libère l'énorme quantité<br>d'énergie qui sommeille en vous pour infliger<br>des dégâts considérables à tout ce qui vous<br>entoure et qui vous laisse à l'article de la mort.<br><br>Cette technique est réservée aux revenants qui<br>ne craignent plus la mort. Ceux qui la voient en<br>action en gardent un souvenir terrifiant."
      },
      
      A48 : {
        name : "Flamme de rose",
        desc : "Répand des bombes qui explosent après<br>quelques instants et détruisent tout ce qui<br>les entoure.<br><br>Lorsque la fuite est impossible, tout ce que vous<br>pouvez faire, c'est prier pour qu'une solution vous<br>vienne à l'esprit. C'est une situation à éviter."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Brasier à tête chercheuse",
        desc : "Libère un vortex de flammes menaçant qui<br>poursuit sa cible.<br><br>Cette tempête de feu poursuit sa cible comme si<br>elle était dotée de sa propre volonté et le<br>Déchu visé est englouti dans les flammes sans<br>possibilité de fuite."
      },
      
      A50 : {
        name : "Lame de feu dansante",
        desc : "Invoque une lame enflammée qui tourne autour de<br>votre corps.<br><br>Une lame de feu tourne autour de son<br>utilisateur à grande vitesse, tranchant sans<br>pitié tous ceux qui s'approchent."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Flot de givre",
        desc : "Tire des rayons de lumière gelés dans toutes<br>les directions.<br><br>Le flot de givre gèle tout ce qu'il touche et<br>s'étend dans toutes les directions pour<br>encercler les ennemis en approche dans<br>l'étreinte froide de la mort.<br><br>Cette technique tirée du code sanguin de<br>l'Impératrice et développée grâce à son pouvoir<br>est un Don qui pèse lourd sur son utilisateur."
      },
      
      A52 : {
        name : "Tourelle de givre",
        desc : "Crée une masse de glace condensée qui tire à<br>intervalles réguliers des projectiles de glace.<br><br>Même si ces projectiles sont loin d'être<br>fatals, leurs dégâts cumulés vous rapprochent<br>toujours plus de la victoire."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Chute de météore",
        desc : "Crée des rochers brûlants dans les airs et les<br>fait s'abattre sur l'ennemi comme des météores.<br><br>Les rochers qui s'abattent ont peut-être<br>l'apparence de simples météores, mais peu de<br>Déchus seraient capables de se relever après en<br>avoir reçu un sur la tête."
      },
      
      A54 : {
        name : "Vague de givre",
        desc : "Invoque un froid mordant qui se répand sur le<br>sol.<br><br>Ceux qui s'approchent avec des intentions<br>hostiles se retrouveront cloués sur place par<br>cette vague frigorifique."
      },
      
      A55 : {
        name : "Champ de la soif",
        desc : "Crée un champ de force qui absorbe<br>régulièrement l'ichor des adversaires à<br>l'intérieur.<br><br>Le champ de force vous permet de drainer<br>l'ichor des Déchus sans vous en approcher.<br><br>La moindre quantité d'ichor peut faire la<br>différence entre la vie et la mort. Ce piège<br>est idéal pour inverser le cours du combat avec<br>les Dons."
      },
      
      A56 : {
        name : "Impact foudroyant",
        desc : "Sautez dans les airs avant de retomber dans une<br>explosion de foudre.<br><br>L'attaque demande un peu de temps pour<br>concentrer la foudre dans le poing de<br>l'utilisateur, mais sa puissance est<br>redoutable.<br><br>Ce Don emploie la foudre du Seigneur de la<br>foudre, qui parcourt le corps de l'utilisateur<br>et peut réduire instantanément un revenant<br>inférieur en cendres."
      },


      // # DEBUFFS #
      B0 : {
        name : "Tir venimeux",
        desc : "Tire un projectile empoisonné sur votre cible.<br><br>Cette balle frappe comme sortie de nulle part,<br>créant la panique chez sa victime alors qu'elle<br>lui dérobe de la vie à l'impact."
      },
      
      B1 : {
        name : "Tir étourdissant",
        desc : "Tire un projectile étourdissant sur votre cible.<br><br>Cette balle frappe comme sortie de nulle<br>part, créant la panique chez sa victime alors<br>qu'elle lui dérobe sa liberté à l'impact."
      },
      
      B2 : {
        name : "Tir ralentissant",
        desc : "Tire un projectile ralentissant sur votre cible.<br><br>Cette balle frappe comme sortie de nulle part,<br>créant la panique chez sa victime alors qu'elle<br>lui dérobe sa mobilité à l'impact."
      },
      
      B3 : {
        name : "Toile empoisonnée",
        desc : "Jette de l'ichor traité au sol pour créer un piège qui<br>empoisonne les ennemis qui marchent dessus.<br><br>Cette technique détecte le sang des ennemis et<br>n'affecte que ceux qui s'opposent à l'utilisateur."
      },
      
      B4 : {
        name : "Toile étourdissante",
        desc : "Jette de l'ichor traité au sol pour créer un piège<br>qui étourdit les ennemis qui marchent dessus.<br><br>Tous les Dons ont été créés dans le but de<br>survivre. Dès que vous sentez une menace<br>approcher, déclenchez ce pouvoir et fuyez<br>sans vous retourner."
      },
      
      B5 : {
        name : "Toile de ralentissement",
        desc : "Jette de l'ichor traité au sol pour créer un piège<br>qui ralentit les ennemis qui marchent dessus.<br><br>Les revenants talentueux peuvent insuffler leur<br>volonté dans l'ichor et le guider grâce à leur<br>imagination. La première étape pour être<br>puissant, c'est de se comprendre soi-même."
      },
      
      B6 : {
        name : "Toile de choc",
        desc : "Manipule l'ichor à vos pieds pour créer un piège de<br>faible puissance qui fait vaciller l'ennemi.<br><br>La tromperie est d'autant plus efficace qu'elle est<br>exécutée rapidement. Le moindre petit soupçon de<br>méfiance peut entraîner la peur et l'agitation."
      },
      
      B7 : {
        name : "Flammes enragées",
        desc : "Manipule l'ichor à vos pieds pour créer un piège<br>qui libère un mur de feu afin d'immoler l'ennemi.<br><br>La nécessité de réduire les Déchus en cendres<br>a donné lieu à de nombreuses expériences.<br>Brûler les créatures à chaque fois qu'elles<br>ressuscitent ne suffit pas."
      },
      
      B8 : {
        name : "Piège empoisonné",
        desc : "Répand de l'ichor dans la zone pour créer<br>un piège empoisonné qui dévore l'ennemi.<br><br>L'unité de sécurité Cerbère a inventé de<br>nombreux Dons dont une grande partie<br>possède des effets indirects."
      },
      
      B9 : {
        name : "Piège étourdissant",
        desc : "Répand de l'ichor dans la zone pour créer<br>un piège qui étourdit l'ennemi.<br><br>L'unité de sécurité Cerbère a inventé de<br>nombreux Dons dont une grande partie<br>possède des effets indirects."
      },
      
      B10 : {
        name : "Piège de ralentissement",
        desc : "Répand de l'ichor dans la zone pour créer<br>un piège qui ralentit l'ennemi.<br><br>L'unité de sécurité Cerbère a inventé de<br>nombreux Dons dont une grande partie<br>possède des effets indirects."
      },
      
      B11 : {
        name : "Feu frénétique",
        desc : "Tire un projectile qui réduit la jauge de<br>concentration de l'ennemi.<br><br>Si vous voulez qu'une porte s'ouvre, mieux<br>vaut le faire vous-même plutôt que d'attendre<br>sans rien faire."
      },


      // # BUFFS #
      C0 : {
        name : "Arme de sang",
        desc : "Ajoute temporairement des dégâts de sang à<br>votre arme et à celle de votre partenaire.<br><br>Pour les revenants, le sang est une source<br>de nourriture, une armure qui résiste à<br>toutes les menaces et une lame solide qui<br>abat tous les obstacles. Tous les revenants<br>cherchent à maîtriser le sang."
      },
      
      C1 : {
        name : "Arme enflammée",
        desc : "Ajoute temporairement des dégâts de feu<br>à votre arme et à celle de votre partenaire.<br><br>Les blessures infligées par les lames<br>enflammées mettent du temps à guérir,<br>même pour les revenants."
      },
      
      C2 : {
        name : "Arme de givre",
        desc : "Ajoute temporairement des dégâts de glace à<br>votre arme et à celle de votre partenaire.<br><br>On peut ralentir la dispersion en gelant<br>instantanément une blessure et ainsi<br>permettre à l'ennemi de savourer sa douleur."
      },
      
      C3 : {
        name : "Arme de foudre",
        desc : "Ajoute temporairement des dégâts de foudre à<br>votre arme et à celle de votre partenaire.<br><br>Ce Don est un allié précieux et un ennemi<br>redoutable. N'oubliez pas, toutes vos armes<br>peuvent être retournées contre vous."
      },
      
      C4 : {
        name : "Marque venimeuse",
        desc : "Ajoute temporairement un effet d'empoisonnement à votre arme.<br><br>Frappez pour inoculer une toxine qui détruit de l'intérieur.<br>La mort est inévitable, mais la terreur ne fait que commencer."
      },
      
      C5 : {
        name : "Marque d'apathie",
        desc : "Ajoute temporairement un effet<br>d'étourdissement à votre arme.<br><br>Paralyse le corps, mais pas les sens.<br>Comment réagissez-vous face au visage<br>terrorisé de votre victime ? Tout dépend de<br>la personne qui a gravé cette marque."
      },
      
      C6 : {
        name : "Marque de sceau",
        desc : "Ajoute temporairement un effet d'inhibition à votre arme.<br><br>La capacité de sceller les Dons est très importante.<br>Qui sait de quoi est capable une souris prise au piège ?"
      },
      
      C7 : {
        name : "Marque d'entrave",
        desc : "Ajoute temporairement un effet de<br>ralentissement à votre arme. <br><br>Les victimes de cet effet sont assaillies par la<br>fatigue et le sang dans leurs veines se fait lourd,<br>ce qui ralentit leurs mouvements et les laisse<br>vulnérables à n'importe quelle attaque."
      },
      
      C8 : {
        name : "Adrénaline",
        desc : "Augmente temporairement votre puissance d'attaque.<br><br>Pour détruire les abominations qui ont envahi le monde,<br>l'humanité avait besoin de pouvoirs dépassant l'imagination.<br>Très vite, les Dons sont devenus la lumière d'espoir qui<br>éclaire le chemin que tous les revenants doivent suivre."
      },
      
      C9 : {
        name : "Pont de la gloire",
        desc : "Augmente temporairement la puissance d'attaque.<br><br>Les Déchus immortels gagnent en force en buvant le<br>sang des vivants. Sagesse, compétence et expérience<br>sont les clés de la survie dans la prison qu'est ce monde."
      },
      
      C10 : {
        name : "Surcharge",
        desc : "Augmente temporairement la puissance<br>d'attaque de votre groupe jusqu'à ce que<br>vous subissiez des dégâts.<br><br>Cette capacité est surtout utile pour effectuer<br>une frappe préventive contre un ennemi."
      },
      
      C11 : {
        name : "Impact longue distance",
        desc : "Augmente temporairement la puissance<br>d'attaque des coups de feu.<br><br>Pour ceux qui passent leur vie au combat,<br>économiser son énergie est une nécessité.<br>Une excellente méthode pour y parvenir est<br>d'éliminer les ennemis à distance."
      },
      
      C12 : {
        name : "Coup de folie",
        desc : "Augmente la puissance de la prochaine attaque.<br><br>Tout corps à ses limites, que les simples humains ne<br>peuvent pas consciemment outrepasser.<br>Pour les revenants, en revanche, rien n'est plus simple."
      },
      
      C13 : {
        name : "Croc éclair",
        desc : "Augmente la puissance de la prochaine attaque.<br><br>En condensant et en relâchant l'ichor au bon<br>moment, vous pouvez décupler votre force."
      },
      
      C14 : {
        name : "Faucheuse impitoyable",
        desc : "Votre prochaine attaque ignore une partie de la<br>défense physique et de la défense de l'arme de l'ennemi.<br><br>Cette lame peut transpercer la plus épaisse des armures.<br>Telle la Grande Faucheuse, elle répand inexorablement la<br>mort partout où elle passe."
      },
      
      C15 : {
        name : "Cri ténébreux",
        desc : "Décuple l'efficacité des Dons de ténèbres<br>lors de la prochaine attaque.<br><br>Un cri de guerre restaure la volonté de gagner<br>et redonne la force de relever tous les défis."
      },
      
      C16 : {
        name : "Danse de la lame",
        desc : "Augmente temporairement la puissance<br>d'attaque à chaque fois que votre arme<br>inflige des dégâts à un ennemi.<br><br>Attention à ne pas vous laisser embarquer dans<br>une stratégie à double tranchant. Pensez toujours<br>à vous aménager une issue de secours.",
        usage_req : "Prométhée Code sanguin"
      },
      
      C17 : {
        name : "Lame du sacrifice",
        desc : "Décuple la puissance d'attaque, mais draine<br>petit à petit les PV. L'effet prend fin quand les<br>PV tombent à 1.<br><br>Il y a toujours un prix à payer pour obtenir de<br>grands pouvoirs. Ceux qui l'acceptent sont<br>assurés de remporter la victoire.",
        usage_req : "Heimdall Code sanguin"
      },
      
      C18 : {
        name : "Zèle somatique",
        desc : "Augmente temporairement la force et la dextérité.<br><br>La puissance d'attaque offerte par ce Don le rend<br>très populaire auprès des revenants."
      },
      
      C19 : {
        name : "Zèle cognitif",
        desc : "Augmente temporairement l'esprit et la<br>volonté. <br><br>L'amélioration que cette technique apporte<br>aux Dons la rend très populaire auprès<br>des revenants."
      },
      
      C20 : {
        name : "Précision",
        desc : "Augmente temporairement votre capacité à faire vaciller<br>l'ennemi avec votre arme.<br><br>Le moindre écart peut changer le cours d'un combat.<br>En creusant cet écart, vous renforcez vos chances de survie."
      },
      
      C21 : {
        name : "Repas de chasse",
        desc : "Augmente temporairement le taux d'absorption<br>des attaques à l'arme.<br><br>Les Dons jouent un rôle fondamental lors des<br>combats. Assurez-vous d'avoir une source<br>d'ichor fiable pour maximiser votre efficacité."
      },
      
      C22 : {
        name : "Lames vampiriques",
        desc : "Augmente temporairement le taux d'absorption<br>des attaques à l'arme de votre groupe.<br><br>Ce Don rend les mécanismes d'absorption des<br>armes plus performants."
      },
      
      C23 : {
        name : "Aptitude au Don",
        desc : "Augmente temporairement la vitesse<br>d'utilisation des Dons de votre groupe.<br><br>Les revenants expérimentés qui survivent<br>depuis longtemps peuvent activer de nombreux<br>Dons en quelques instants lors d'un combat."
      },
      
      C24 : {
        name : "Extension de Don",
        desc : "Rallonge temporairement les effets des Dons<br>que vous ou votre partenaire utilisez.<br><br>La différence peut vous sembler infime, mais la<br>plus petite vague peut changer le cours du combat."
      },
      
      C25 : {
        name : "Célérité",
        desc : "Utilise le pouvoir de l'ichor pour affûter temporairement<br>vos réflexes et faciliter ainsi l'esquive.<br><br>Cette technique consomme une grande quantité d'ichor<br>et n'est pas facile à apprendre, mais sa puissance est<br>indéniable."
      },
      
      C26 : {
        name : "Concentration",
        desc : "Réduit temporairement la consommation<br>d'endurance jusqu'à ce que vous subissiez<br>des dégâts.<br><br>Cette capacité est surtout utile pour effectuer<br>une frappe préventive contre un ennemi."
      },
      
      C27 : {
        name : "Increvable",
        desc : "Vous permet de consommer vos PV pour<br>effectuer des actions lorsque vous n'avez<br>plus d'endurance.<br><br>Ceux qui, par désespoir, repoussent leurs<br>limites sont soit des fous, soit des héros.<br>Pour obtenir la gloire, il faut parfois<br>sacrifier sa raison.",
        usage_req : "Fionn Code sanguin"
      },
      
      C28 : {
        name : "Cœur vaillant",
        desc : "Améliore la vision cinétique et les réflexes pour<br>réduire l'endurance consommée en esquivant.<br><br>Un esprit vif et de bons réflexes vous mettront<br>à l'abri de tous les dangers."
      },
      
      C29 : {
        name : "Remontant",
        desc : "Augmente l'endurance maximum de votre groupe<br>et restaure complètement votre endurance.<br><br>Les revenants doivent toujours rester sur<br>leurs gardes pour pouvoir réagir au moindre<br>changement de l'environnement. Pour les<br>créatures qui ne peuvent pas dormir, cette<br>technique est une véritable nécessité."
      },
      
      C30 : {
        name : "Manque de temps",
        desc : "Utilise de l'ichor pour accélérer<br>temporairement les actions chargées.<br><br>En combat, tout gain de temps est bon à<br>prendre. Une seule attaque peut vous offrir<br>la victoire."
      },
      
      C31 : {
        name : "Sang surnaturel",
        desc : "Vous permet de sacrifier des PV pour utiliser<br>des Dons lorsque vous êtes à court d'ichor.<br><br>L'intelligence requise pour utiliser des Dons<br>puissants est impressionnante. Si vous êtes<br>prêt à sacrifier votre chair et votre sang<br>dans ce but, attention à ne pas causer votre<br>propre perte.",
        usage_req : "Harmonie Code sanguin"
      },
      
      C32 : {
        name : "Onde d'impact",
        desc : "Ajoute temporairement un effet d'onde de choc<br>aux attaques physiques qui provoque des<br>dégâts supplémentaires.<br><br>Ce Don n'est pas à la portée de tout le monde,<br>mais il est très efficace."
      },
      
      C33 : {
        name : "Dernier voyage",
        desc : "Déchaîne vos pouvoirs de régénération, mais<br>entraîne votre mort. Restaure immédiatement<br>tous les PV et augmente toutes les<br>capacités, mais finit par vous tuer.<br><br>Les revenants sont pratiquement immortels,<br>mais la dispersion a un prix. Faites en sorte<br>d'attraper quelque chose qui en vaut la peine.",
        usage_req : "Régicide Code sanguin"
      },
      
      C34 : {
        name : "Zèle vigoureux",
        desc : "Augmente temporairement le courage et<br>l'endurance.<br><br>Même si les revenants ne restent jamais<br>longtemps dans les bras de la mort, ils n'auront<br>plus à la craindre grâce à un stock de PV et<br>d'endurance élevé."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Ordre offensif",
        desc : "Réduit temporairement votre défense pour<br>augmenter la puissance d'attaque de l'équipe.<br><br>Le sacrifice de votre sécurité renforce<br>instantanément la puissance d'attaque de vos<br>alliés."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Ichor efficace",
        desc : "Réduit temporairement le coût en ichor des<br>attaques armées.<br><br>En combat, certains gardent un œil sur leur<br>niveau d'ichor, d'autres non, mais une chose est<br>sûre : les premiers survivent plus longtemps."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Volonté de fer",
        desc : "Réduit temporairement les dégâts subis en<br>érigeant une barrière dans votre sang.<br><br>La moindre petite blessure peut réduire vos<br>chances de survie, alors mieux vaut les éviter."
      },
      
      D1 : {
        name : "Barrière de fielsang",
        desc : "Crée une barrière d'ichor condensé qui<br>réduit énormément les dégâts subis par<br>votre groupe pour une attaque.<br><br>Même un bouclier temporaire peut vous<br>donner la détermination de gagner."
      },
      
      D2 : {
        name : "Sang de suppression",
        desc : "Réduit temporairement et drastiquement les<br>dégâts subis en échange d'ichor.<br><br>L'utilisateur doit se souvenir que c'est l'ichor<br>qui le maintient en vie. Ceux qui oublient de<br>s'aménager une issue de secours mourront<br>à coup sûr.",
        usage_req : "Éos Code sanguin"
      },
      
      D3 : {
        name : "Juggernaut",
        desc : "Augmente la stabilité et la résistance aux<br>attaques directes, mais réduit la mobilité<br>et la résistance élémentaire.<br><br>Difficile de savoir quand utiliser ce Don qui<br>remplace une faiblesse par une autre.<br>C'est toutefois un outil très puissant pour<br>peu qu'on l'utilise correctement.",
        usage_req : "Souffle de la Reine Code sanguin"
      },
      
      D4 : {
        name : "Digue constante",
        desc : "Augmente temporairement la défense de l'arme<br>face aux attaques physiques.<br><br>Il n'est pas simple de lutter contre les revenants<br>en proie à la frénésie. L'unité de sécurité Cerbère<br>se repose sur une défense solide qu'elle convertit<br>en force pour leur tenir tête."
      },
      
      D5 : {
        name : "Garde inversée",
        desc : "Confère la capacité temporaire de détourner les<br>attaques et de faire vaciller les ennemis après<br>une garde.<br><br>Vous trouvez peut-être que bloquer l'attaque d'un<br>ennemi avant de le frapper est une stratégie plutôt<br>grossière. Il n'empêche qu'elle reste très efficace."
      },
      
      D6 : {
        name : "Puissance dévastatrice",
        desc : "Vous permet temporairement de briser la garde<br>d'un ennemi plus facilement.<br><br>Vous n'avez pas à craindre l'ennemi qui se<br>concentre trop longtemps sur sa défense.<br>Votre lame inébranlable vous apportera la victoire."
      },
      
      D7 : {
        name : "Stabilité de la garde",
        desc : "Réduit temporairement l'endurance consommée<br>par la garde.<br><br>Lorsque les défenses sont brisées, le combat<br>est terminé. Tant que votre défense reste solide,<br>vous pourrez poursuivre le combat."
      },
      
      D8 : {
        name : "Voile prismatique",
        desc : "Augmente temporairement la défense de l'arme<br>face aux attaques élémentaires.<br><br>Il n'est pas simple de lutter contre les revenants<br>en proie à la frénésie. L'unité de sécurité Cerbère<br>se repose sur une défense solide qu'elle<br>convertit en force pour leur tenir tête."
      },
      
      D9 : {
        name : "Garde de sang",
        desc : "Dresse une barrière temporaire autour de votre partenaire<br>et de vous-même qui réduit la puissance du sang et<br>augmente votre résistance.<br><br>Les propriétés de l'ichor changent en fonction de la force<br>de la volonté de l'utilisateur. Il est très simple de le changer<br>en barrière."
      },
      
      D10 : {
        name : "Protection flamboyante",
        desc : "Dresse une barrière temporaire autour de<br>votre partenaire et de vous-même qui réduit<br>la puissance du feu et augmente votre<br>résistance.<br><br>Le champ de force tire sa force des flammes<br>et réduit les dégâts dus à la chaleur."
      },
      
      D11 : {
        name : "Armure de glace",
        desc : "Dresse une barrière temporaire autour de<br>votre partenaire et de vous-même qui réduit<br>la puissance des attaques de glace et<br>augmente votre résistance.<br><br>Le champ de force empêche le gel et réduit<br>les dégâts dus au froid."
      },
      
      D12 : {
        name : "Voile de Raijin",
        desc : "Dresse une barrière temporaire autour de votre<br>partenaire et de vous-même qui réduit la puissance<br>des attaques de foudre et augmente votre résistance.<br><br>Les revenants qui rejoignent les Déchus se<br>souviennent de leurs Dons et s'en servent<br>sans remords contre leurs anciens camarades.<br>Il a fallu développer des contre-mesures."
      },
      
      D13 : {
        name : "Rempart élémentaire",
        desc : "Augmente temporairement votre résistance et<br>celle de votre partenaire à tous les éléments.<br><br>Un guerrier talentueux sait s'adapter à<br>toute situation. Ne laissez pas un excès<br>d'orgueil causer votre mort prématurée."
      },
      
      D14 : {
        name : "Cœur royal",
        desc : "Augmente temporairement la résistance aux<br>effets de vacillement.<br><br>Dans la folie du combat, un esprit serein<br>peut faire toute la différence pour les<br>revenants. Gardez votre calme, ou tout<br>espoir sera perdu."
      },
      
      D15 : {
        name : "Combattant acharné",
        desc : "Augmente temporairement la résistance au<br>vacillement face aux attaques ennemies.<br><br>Seuls les guerriers suffisamment tenaces<br>pour résister à n'importe quelle attaque<br>pourront survivre dans ce monde."
      },
      
      D16 : {
        name : "Équilibre parfait",
        desc : "Décuple la résistance au vacillement pour une<br>attaque. Foncez sans crainte vers votre avenir."
      },
      
      D17 : {
        name : "Génération d'anticorps",
        desc : "Augmente temporairement la résistance à<br>toutes les altérations.<br><br>Il ne fait aucun doute que les altérations<br>représentent une menace majeure pour<br>les utilisateurs de Dons. Un manque de<br>préparation risquerait de vous mener tout<br>droit à l'immolation."
      },
      
      D18 : {
        name : "Contre-mesure",
        desc : "En esquivant les attaques ennemies, vous<br>générez temporairement des projectiles qui<br>attaquent l'ennemi quand on les touche.<br><br>C'est très bien d'avoir le courage d'avancer<br>sans hésiter, mais cela reste très dangereux."
      },
      
      D19 : {
        name : "Vengeance sournoise",
        desc : "En subissant des dégâts, vous créez<br>temporairement des projectiles enflammés<br>qui attaquent l'ennemi quand on les touche.<br><br>Des flammes de colère bloquent les attaques.<br>Pour les revenants qui les manipulent, ce sont<br>des flammes salvatrices.",
        usage_req : "Griffe de la Reine Code sanguin"
      },
      
      D20 : {
        name : "Ténacité féroce",
        desc : "Après avoir utilisé ce Don, si vous subissez<br>des dégâts mortels lorsque vos PV dépassent<br>une certaine quantité, ils tomberont à 1.<br>Cet effet ne peut s'activer qu'une seule fois.<br><br>Gardez courage dans l'adversité.<br>Tant que vous vous accrocherez à la vie,<br>les possibilités seront infinies."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Robustesse",
        desc : "Réduit l'efficacité de vos Dons, mais augmente<br>temporairement vos PV max.<br><br>Libre à vous de décider comment faire usage de<br>la grande quantité de PV octroyée par ce Don."
      },
      
      D22 : {
        name : "Garde circulaire",
        desc : "Permet de parer de tous côtés, et pas seulement<br>de face.<br><br>Vous n'avez désormais plus rien à craindre, où<br>que se trouvent vos adversaires. N'oubliez pas<br>toutefois que la chance ne sourit pas à ceux qui<br>ne font que se défendre."
      },
      
      D23 : {
        name : "Ordre défensif",
        desc : "Réduit temporairement votre puissance<br>d'attaque pour augmenter la défense de l'équipe.<br><br>Le sacrifice de votre sécurité renforce<br>instantanément la défense de vos alliés."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Abandon téméraire",
        desc : "Don combiné avec Louis qui augmente l'attaque et modifie vos<br>manœuvres d'évasion aux dépens de la réduction des dégâts.<br><br>Ce Don convertit la soif de sang d'un revenant en force. Le<br>moindre faux pas peut vous transformer en Déchu. Il vous<br>sera difficile de suivre cette voie sans une volonté de fer.",
        usage_req : "Partenaire actuel : Louis"
      },
      
      E1 : {
        name : "Lupinus Vita",
        desc : "Don combiné avec Yakumo qui réduit la consommation<br>d'endurance de la garde et renforce votre prochain coup<br>en fonction du nombre d'attaques parées juste avant.<br>Réduit en contrepartie la vitesse d'esquive.<br><br>Le désir de protéger et soutenir ses camarades<br>vivifie le sang. Le poids de vos responsabilités<br>fera tomber les obstacles sur votre route.",
        usage_req : "Partenaire actuel : Yakumo"
      },
      
      E2 : {
        name : "Pointe de conviction",
        desc : "Don combiné avec Io qui améliore la résistance au<br>vacillement, mais qui réduit l'efficacité de l'absorption.<br><br>Une volonté implacable permet d'éveiller des pouvoirs<br>jusqu'alors endormis dans le seul but d'accomplir sa<br>destinée.",
        usage_req : "Partenaire actuel : Io"
      },
      
      E3 : {
        name : "Éveil sanglant",
        desc : "Don combiné avec Mia qui baisse la consommation<br>d'ichor et augmente l'efficacité des Dons, mais<br>réduit la puissance d'attaque en mêlée.<br><br>Le sang éveillé qui court dans vos veines vous donne<br>la force de survivre dans ce monde en ruines. Sous son<br>influence, tout vous semble sortir d'un conte de fées.",
        usage_req : "Partenaire actuel : Mia"
      },
      
      E4 : {
        name : "Déferlement fatal",
        desc : "Don combiné avec Jack qui augmente la puissance<br>d'attaque et réduit la consommation d'endurance, mais<br>réduit également le nombre de régénérations possible.<br><br>En maintenant la Prison brumeuse, vous choisissez de<br>repousser la menace au péril de votre vie. La plupart des<br>revenants sont intimidés par l'ampleur de cette tâche.",
        usage_req : "Partenaire actuel : Jack"
      },
      
      E5 : {
        name : "Refrain éphémère",
        desc : "Don combiné avec Eva qui renforce l'efficacité<br>de l'absorption et des Dons, mais qui augmente<br>la consommation d'ichor.<br><br>Le sang d'un revenant danse dans ses veines<br>au rythme d'une chanson qui transperce le cœur.<br>La pluie écarlate désaltère les âmes assoiffées.",
        usage_req : "Partenaire actuel : Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Offrande vitale",
        desc : "Sacrifie vos PV pour restaurer ceux de vos compagnons. <br><br>Les revenants n'ont plus rien à craindre de la mort.<br>Il n'y a rien de plus effrayant que de perdre la confiance qui<br>vous unit aux autres et de devoir mener une vie solitaire.",
        usage_req : "PV à 2 ou plus"
      },
      
      F1 : {
        name : "Bénédiction amicale",
        desc : "Sacrifie une grande partie de vos PV pour<br>restaurer ceux de votre partenaire.<br><br>La détermination de quelqu'un qui risque sa<br>vie à vos côtés est une bénédiction qui peut<br>soigner les blessures de vos alliés.",
        usage_req : "PV à 2 ou plus"
      },
      
      F2 : {
        name : "Guérison automatique",
        desc : "Vous utilisez automatiquement Offrande vitale<br>lorsque votre partenaire subit des dégâts<br>critiques. Cependant, son utilisation<br>consomme des PV en avance.<br><br>Ce n'est pas facile de se sacrifier pour le<br>bien d'autrui. La lumière du salut naît<br>d'une relation profonde.",
        usage_req : "Déméter Code sanguin<br>PV à 2 ou plus"
      },
      
      F3 : {
        name : "Aide de gardien",
        desc : "Sacrifie les PV pour soigner votre partenaire<br>et augmenter temporairement votre défense.<br><br>Il est impossible de survivre seul à cette<br>prison qu'est la réalité. Les douleurs du<br>présent vous aideront peut-être plus tard<br>à vous tirer de situations délicates.",
        usage_req : "Astréa Code sanguin<br>PV à 2 ou plus"
      },
      
      F4 : {
        name : "Lumière purificatrice",
        desc : "Pour une durée limitée, une partie des dégâts que<br>vous subissez sera automatiquement soignée.<br><br>La douleur permet aux revenants de se souvenir<br>de leur vie perdue. Certains diront que c'est une<br>bonne chose. Cette façon de penser stimule les<br>cellules et leur permet de se régénérer."
      },
      
      F5 : {
        name : "Régénérateur",
        desc : "Améliore les capacités régénératrices de<br>votre groupe et augmente la quantité de PV<br>restaurée par la régénération.<br><br>La moindre différence d'endurance peut changer<br>l'issue de nombre de combats. De plus, il est plus<br>facile d'emporter la victoire lorsqu'on se sent stable."
      },
      
      F6 : {
        name : "Suppresseur d'empoisonnement",
        desc : "Soigne votre groupe de l'altération<br>empoisonnement. Peut également agir en préventif.<br><br>Même si les revenants ne peuvent pas mourir,<br>ils peuvent tomber malades et<br>l'approvisionnement en médicaments est très<br>vite devenu un problème. Aujourd'hui, la<br>moindre petite erreur peut leur coûter la vie."
      },
      
      F7 : {
        name : "Suppresseur d'étourdissement",
        desc : "Soigne votre groupe de l'altération<br>étourdissement. Plus efficace en préventif.<br><br>Même si les revenants ne peuvent pas mourir,<br>ils peuvent tomber malades et<br>l'approvisionnement en médicaments est très<br>vite devenu un problème. Aujourd'hui, la<br>moindre petite erreur peut leur coûter la vie."
      },
      
      F8 : {
        name : "Suppresseur d'inhibition",
        desc : "Soigne votre groupe de l'altération inhibition.<br>Peut également agir en préventif.<br><br>Même si les revenants ne peuvent pas mourir,<br>ils peuvent tomber malades et<br>l'approvisionnement en médicaments est très<br>vite devenu un problème. Aujourd'hui, la<br>moindre petite erreur peut leur coûter la vie."
      },
      
      F9 : {
        name : "Suppresseur de ralentissement",
        desc : "Soigne votre groupe de l'altération ralentissement.<br>Peut également agir en préventif.<br><br>Même si les revenants ne peuvent pas mourir,<br>ils peuvent tomber malades et l'approvisionnement<br>en médicaments est très vite devenu un problème.<br>Aujourd'hui, la moindre petite erreur peut leur coûter la vie."
      },
      
      F10 : {
        name : "Suppresseur de déperdition",
        desc : "Soigne votre groupe de l'altération déperdition.<br>Peut également agir en préventif.<br><br>Même si les revenants ne peuvent pas mourir,<br>ils peuvent tomber malades et<br>l'approvisionnement en médicaments est très<br>vite devenu un problème. Aujourd'hui, la<br>moindre petite erreur peut leur coûter la vie."
      },
      
      F11 : {
        name : "Essence de Panacée",
        desc : "Soigne toutes les altérations de votre groupe.<br>Peut également agir en préventif.<br><br>Lorsque la fatigue des combats se fait sentir,<br>il n'y a rien de mieux pour soulager son cœur<br>que de partager un moment de bonheur et de<br>penser aux liens de confiance qui nous<br>unissent à nos camarades."
      },
      
      F12 : {
        name : "Sacrifice de sang",
        desc : "Sacrifie vos PV pour gagner de l'ichor.<br><br>L'ichor est une ressource très précieuse<br>pour les revenants qui passent leur vie à<br>combattre. Son indéniable puissance suffit à<br>passer outre la peur d'être réduit en cendres."
      },
      
      F13 : {
        name : "Oubli",
        desc : "Vous pouvez utiliser instantanément les Dons<br>qui nécessitent un temps de chargement.<br><br>Quand tout tourne mal, mieux vaut faire<br>table rase du passé et reprendre du début."
      },
      
      F14 : {
        name : "Lumière flottante",
        desc : "Crée une boule de lumière à vos pieds.<br><br>À l'ère des lumières chimiques, de nombreuses explorations<br>ont dû prendre fin pour cause d'équipements usés. La capacité<br>à utiliser les Dons a décuplé les possibilités de voyage."
      },
      
      F15 : {
        name : "Vivification",
        desc : "Active volontairement la dispersion de votre corps pour<br>vous ramener à la dernière pousse que vous avez<br>touchée sans perdre de nuées.<br><br>Battre en retraite n'est pas un signe de lâcheté. Tous les<br>combats ne sont pas bons à mener dans ce monde."
      },
      
      F16 : {
        name : "Traqueur nocturne",
        desc : "Réduit les bruits que vous faites et les risques de détection.<br><br>Si vous ressentez la moindre présence derrière vous,<br>faites demi-tour pour en avoir le cœur net. Qui sait ce qui<br>pourrait s'approcher furtivement de vous dans l'ombre."
      },
      
      F17 : {
        name : "Voile de brume nocturne",
        desc : "Enveloppe votre corps d'une brume de sang<br>qui empêche les ennemis de vous repérer.<br><br>L'utilisateur semble perdu dans le brouillard,<br>ce qui le rend difficile à suivre."
      },
      
      F18 : {
        name : "Repère-butin",
        desc : "Découvrez s'il vous reste des objets à<br>obtenir à proximité.<br><br>Humez les traces infimes laissées par votre<br>cible en faisant appel aux sens surhumains<br>que procurent la faim du revenant."
      },
      
      F19 : {
        name : "Identification active",
        desc : "Les ennemis à proximité apparaîtront sur<br>votre radar.<br><br>Ceux qui sont immortels devraient craindre<br>encore davantage la mort s'ils ne veulent<br>pas savourer le tourment éternel."
      },
      
      F20 : {
        name : "Traqueur de trésor",
        desc : "Les objets non obtenus à proximité<br>apparaîtront sur votre radar.<br><br>Dispersez quelques gouttes de votre sang qui<br>partiront en éclaireur. Un tel exploit<br>dépasse l'entendement de l'humanité."
      },
      
      F21 : {
        name : "Détecteur de trouvailles",
        desc : "Découvrez s'il vous reste des objets à<br>obtenir sur la carte actuelle.<br><br>Humez les traces infimes laissées par votre<br>cible en faisant appel aux sens surhumains<br>que procurent la faim insatiable du revenant.<br>Votre collection se doit d'être complète."
      },
      
      F22 : {
        name : "Abysse tranchant",
        desc : "Bondissez et retombez de toutes vos forces.<br>Attaque réalisée avec : épée à une main/hallebarde/baïonnette.<br><br>Sautez en l'air et frappez comme si vous<br>creusiez un sombre abîme. Il est difficile<br>de bouger avant et après cette attaque, elle<br>doit donc être synchronisée avec les<br>mouvements de l'ennemi."
      },
      
      F23 : {
        name : "Assaut fantôme",
        desc : "Volatilisez-vous comme la brume, puis frappez en bondissant.<br>Attaque réalisée avec : épée à une main/hallebarde/baïonnette.<br><br>Fondez-vous dans les ombres tel un fantôme,<br>puis courez vers la cible et tailladez-la.<br>Vous ne pouvez pas être blessé sous forme de<br>brume, ce qui vous permet d'attaquer sans peur."
      },
      
      F24 : {
        name : "Frappe diluvienne",
        desc : "Déchaînez un déluge de coups.<br>Attaque réalisée avec : épée à une main/hallebarde/baïonnette.<br><br>Écrasez votre ennemi grâce à un tourbillon<br>de cinq attaques combinées. Appliquer un Don<br>à votre arme avant cette attaque augmentera<br>grandement la puissance de ce Don."
      },
      
      F25 : {
        name : "Punisseur de légions",
        desc : "Lancez votre arme et faites-la tournoyer.<br>Attaque réalisée avec : épée à deux mains/marteau.<br><br>Lancez votre arme, puis servez-vous du Don pour<br>la faire tournoyer, balayant les groupes<br>d'ennemis. Même si cette attaque touche une<br>vaste zone, il faut du temps pour l'exécuter,<br>elle doit donc être utilisée avec prudence."
      },
      
      F26 : {
        name : "Fusillade en rondo",
        desc : "Tirez une pluie de balles à tête chercheuse.<br>Attaque réalisée avec : baïonnette.<br><br>Tirez profit de la rotation pour appliquer<br>de l'ichor sur votre baïonnette, puis tirez<br>quatre balles traquant leur cible.<br>Cette attaque prend du temps, elle doit donc<br>être utilisée dans les bonnes circonstances."
      },
      
      F27 : {
        name : "Triple annihilateur",
        desc : "Exécutez un combo sur une cible à proximité.<br>Attaque réalisée avec : épée à deux mains/marteau.<br><br>Utilisez de l'ichor pour renforcer considérablement vos<br>muscles un bref instant et abattre une arme lourde trois fois<br>d'affilée. Cette attaque s'effectue rapidement, ce qui la rend indispensable au corps à corps."
      },
      
      F28 : {
        name : "Fente du dragon",
        desc : "Sautez vers l'avant et portez un coup puissant.<br>Attaque réalisée avec : épée à deux mains/marteau.<br><br>Bondissez vers un ennemi éloigné, puis<br>attaquez sans relâche tel le dragon tentant<br>de rompre la nuque du tigre.<br>Cette attaque est dévastatrice, mais laisse son<br>utilisateur vulnérable aux contre-attaques."
      },
      
      F29 : {
        name : "Débandade",
        desc : "Jetez-vous vers l'avant sous forme de brume<br>et exécutez un combo. Attaque réalisée avec : hallebarde.<br><br>Dissipez-vous et foncez vers l'avant en<br>amorçant une série de frappes imposantes. La<br>première attaque peut mener à d'autres ou à<br>une esquive, ce qui en fait une excellente<br>manœuvre d'ouverture lors d'un combat."
      },
      
      F30 : {
        name : "Déplacement spectral",
        desc : "Jetez-vous vers l'avant sous forme de brume.<br><br>Votre corps s'évapore un instant tel un<br>fantôme hantant la nuit et vous vous jetez<br>vers l'avant, évitant toutes les attaques au<br>passage."
      },
      
      F31 : {
        name : "Heurte-tombe",
        desc : "Enfoncez votre pied dans le sol, provoquant<br>une onde de choc.<br><br>Accumulez de l'énergie dans vos jambes, puis<br>frappez le sol pour la projeter en une vague<br>destructrice. Cette force suffit à réveiller<br>les morts sous terre et fait vaciller les Déchus,<br>permettant d'enchaîner sur une autre attaque."
      },
      
      F32 : {
        name : "Tranche-hirondelle",
        desc : "Attaque extrêmement rapide.<br>Attaque réalisée avec : épée à deux mains/marteau.<br><br>Contorsionnez-vous pour porter un coup d'une<br>telle rapidité qu'il pourrait atteindre une<br>hirondelle en plein vol. Sa vitesse est inouïe pour<br>une arme lourde, ce qui vous permet d'infliger des<br>dommages à la moindre ouverture."
      },
      
      F33 : {
        name : "Disparition spectrale",
        desc : "Esquivez les attaques en vous transformant en brume.<br><br>Ce Don vous permet d’éviter les dangers en vous dispersant<br>et en réapparaissant au niveau de votre position antérieure.<br>Ce Don subtil mais novateur utilise le cycle de vie<br>des revenants à la perfection, mais il est difficile à maîtriser."
      },
      
      F34 : {
        name : "Explosion de tourment",
        desc : "Bondissez vers l'avant et frappez deux fois.<br>Attaque réalisée avec : épée à deux mains/marteau.<br><br>Sautez vers l'ennemi et assenez deux coups<br>puissants et rapides. <br>Les armes lourdes peuvent être lentes,<br>une attaque écrasante est donc souvent<br>votre meilleure alliée."
      },
      
      F35 : {
        name : "Assaut d'ombre",
        desc : "Chargez rapidement à courte portée.<br>Attaque réalisée avec : épée à une main/hallebarde/baïonnette.<br><br>Glissez comme une ombre et portez une attaque rapide.<br>Cette technique est excellente pour combler un court<br>écart et convient parfaitement à ceux dont la<br>stratégie consiste à coller leurs adversaires."
      },
      
      F36 : {
        name : "Modeste offrande",
        desc : "Sacrifie une petite partie de vos PV pour<br>restaurer ceux de votre partenaire. Ce Don<br>consomme moins de PV que l'Offrande vitale, mais<br>en restaure également moins à la cible.",
        usage_req : "PV à 2 ou plus"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Symbiose d'ichor (gain)",
        desc : "Vous octroie la même quantité d'ichor que votre<br>partenaire quand celui-ci gagne de l'ichor<br>(ne s'applique pas avec un joueur).<br><br>L'harmonie entre vos partenaires et vous coule<br>dans vos veines et alimente ce pouvoir qui<br>traverse tout votre corps.<br><br>Incompatible avec &quot;Symbiose d'ichor (don)&quot;."
      },
      
      F38 : {
        name : "Symbiose d'ichor (don)",
        desc : "Octroie la même quantité d'ichor à votre<br>partenaire quand vous gagnez de l'ichor<br>(ne s'applique pas avec un joueur).<br><br>Votre sang danse d'une étrange excitation.<br>La résonnance qui emplit votre corps sauvera<br>vos camarades.<br><br>Incompatible avec &quot;Symbiose d'ichor (gain)&quot;."
      },
      
      F39 : {
        name : "Posture de sérénité",
        desc : "Prenez immédiatement une posture qui calme<br>votre esprit et restaure toute l'endurance.<br><br>Cette posture peut non seulement doubler votre<br>temps de combos pendant les combats, mais aussi<br>vous sauver de la mort."
      },
      
      F40 : {
        name : "Ruée revigorante",
        desc : "Restaure de l'endurance quand vous esquivez des<br>attaques ennemies lorsque l'effet est actif.<br><br>Même les Déchus sont vulnérables après avoir<br>attaqué. Si vous parvenez à esquiver leurs<br>coups, une chance de contre-attaquer s'offrira<br>à vous."
      },
      
      F41 : {
        name : "Taillade tranquille",
        desc : "Réalisez une attaque imperceptible depuis une<br>posture calme avec une épée à une main.<br><br>Ce coup tranchant instantané crée une lame<br>d'air qui tranche tous les ennemis à portée.<br><br>Cette technique nécessite que son utilisateur y<br>mette toute son âme et sa maîtrise demande du<br>temps."
      },
      
      F42 : {
        name : "Taillade circulaire",
        desc : "Effectuez pendant un saut une entaille<br>tournoyante avec une épée à une<br>main/hallebarde/baïonnette.<br><br>Cette technique vous couvre de tous les côtés<br>et touche les ennemis à proximité.<br><br>En plus de son utilité contre les ennemis qui<br>vous encerclent, cette attaque touche également<br>les ennemis dont la position est difficile à<br>déterminer."
      },
      
      F43 : {
        name : "Plongeon sauvage",
        desc : "Lancez une attaque dans les airs et décimez les<br>ennemis avec une épée à une main/hallebarde.<br><br>La maîtrise des techniques de combat du roi<br>chevalier demande beaucoup d'entraînement.<br>Ce Don vous permet de vous rapprocher de<br>l'ennemi en sautant dans les airs et en volant<br>vers lui."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Coup ferme",
        desc : "Portez un coup unique très résistant au<br>vacillement avec une épée à deux mains/un<br>marteau.<br><br>Un coup unique porté sans crainte peut suffire<br>à inverser l'issue du combat et prendre la<br>victoire. Toutefois, faire fi de sa propre vie<br>peut aussi bien s'avérer complètement inutile.<br>La sagesse est de mise."
      },
      
      F45 : {
        name : "Lame de l'usurpateur",
        desc : "Tranchez un ennemi avec une hallebarde pour<br>récupérer des PV.<br><br>De nature, les revenants n'ont pas soif de sang<br>mais de la vie elle-même. Cédez à vos désirs."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Zéro délai",
        desc : "Réinitialise le temps de rechargement des Dons<br>de votre partenaire.<br><br>Tant que son ichor le lui permet, votre<br>partenaire peut acculer l'ennemi en enchaînant<br>sans aucun délai des Dons puissants."
      },
      
      F47 : {
        name : "Régénération d'ichor",
        desc : "Restaure peu à peu l'ichor au détriment de la<br>puissance d'attaque des armes et de la défense.<br><br>Toutefois, après un certain temps, les effets<br>cessent et vous retrouvez la puissance perdue."
      },
      
      F48 : {
        name : "Charge foudroyante",
        desc : "Foncez vers les ennemis à la vitesse de<br>l'éclair et portez un coup de paume.<br><br>Rapprochez-vous de votre proie en un instant,<br>comme un prédateur affamé.<br><br>L'attaque n'inflige pas beaucoup de dégâts,<br>mais la vitesse à laquelle elle vous permet de<br>vous déplacer vous assure la victoire contre<br>n'importe quelle arme."
      },
      
      F49 : {
        name : "Concentration rétablie",
        desc : "Remplit partiellement la jauge de concentration.<br><br>Ce Don ne vous fait pas toujours entrer en état<br>de concentration, c'est pourquoi il est<br>important de l'utiliser au bon moment en<br>fonction de votre stratégie."
      },
      
      F50 : {
        name : "Canon radieux",
        desc : "Tire des projectiles puissants infligeant des<br>dégâts perforants avec une baïonnette.<br><br>Les projectiles atteignent immédiatement leur<br>cible et transpercent tous les ennemis qui se<br>tiennent sur leur trajectoire.<br><br>Cependant, en raison du temps que prend<br>l'énergie à s'accumuler, cette technique est<br>plus efficace contre de grands groupes<br>d'ennemis qu'à bout portant."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Lame régicide",
        desc : "Épée commune à simple tranchant, produite en<br>série et utilisée par les soldats de l'Opération<br>Régicide. Conçue pour être fabriquée rapidement,<br>son conducteur d'ichor est exposé à l'air libre,<br>ce qui lui donne une apparence grossière même si <br>il est parfaitement aiguisé. Sa lame aiguisée n'a<br>cependant aucun mal à transpercer la chair des Déchus."
      },
      
      A1 : {
        name : "Tuyau d'asservissement",
        desc : "Arme simple semblable à une massue. Ce n'est<br>qu'un tuyau avec une fonction d'absorption<br>intégrée, ce qui la rapproche d'une épée.<br>Principalement utilisée par les revenants<br>asservis, cette arme fournit une maigre<br>lueur d'espoir en combat."
      },
      
      A2 : {
        name : "Glaive",
        desc : "Large épée à double tranchant produite en<br>série par le gouvernement provisoire. Conçue<br>dans le seul but d'être puissante, elle peut<br>même abattre des spécimens géants de Déchus<br>si on y met tout le poids du corps. Très<br>facile à manier, elle est très répandue chez<br>les héros comme chez les brigands du monde<br>de Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Lame incurvée à simple tranchant conçue sur<br>le modèle d'un katana. Son créateur, un<br>revenant du nom de Mukuro, a également gravé<br>son nom, qui signifie &quot;Repousse cadavre&quot;,<br>sur la lame. Cette arme diffère des épées<br>que l'on voit d'ordinaire à Vein et seul un<br>épéiste compétent saura exploiter tout son<br>potentiel."
      },
      
      A4 : {
        name : "Ténacité écarlate",
        desc : "Fidèle arme secondaire de Louis. Sa lame rouge<br>est gravée d'un Don de type Sort et peut,<br>lorsqu'elle est chargée en ichor, briser<br>d'un seul coup les défenses les plus<br>solides. Offerte par le revenant qui donna<br>également son arme à Yakumo, elle a été<br>fabriquée de manière à être parfaitement<br>adaptée à la technique de Louis."
      },
      
      A5 : {
        name : "Machette",
        desc : "Large fendoir donnant l'impression de n'être composé<br>que d'une seule pièce d'acier.<br><br>Créé par un groupe d'ingénieurs, il a été conçu<br>pour être manié d'une seule main tout en déployant<br>la même puissance qu'une épée à deux mains.<br><br>Cette arme reste peu utilisée à cause de son poids<br>qui nécessite une statistique de force élevée."
      },
      
      A6 : {
        name : "Lame du loup d'argent",
        desc : "Épée à une main argentée utilisée par l'unité de sécurité Cerbère.<br><br>Bien qu'elle possède une amorce à Don, elle est bien<br>équilibrée et de meilleure qualité qu'une arme de série.<br><br>Cerbère est une unité d'élite hautement qualifiée qui a été<br>formée après l'Opération Régicide. Son équipement révèle sa<br>vraie valeur entre des mains compétentes."
      },
      
      A7 : {
        name : "Griffe ardente",
        desc : "Longue épée utilisée par l'Héritière de la<br>Griffe. En raison de la chaleur qu'elle<br>renferme, elle laisse des traînées écarlates<br>dans les airs lorsqu'elle est brandie et<br>embrase tout ce qu'elle touche. Elle serait<br>née des pensées de l'Héritière, mais dans<br>quel but ?"
      },
      
      A8 : {
        name : "Glace-sang",
        desc : "Arme d'estoc de la Portelame, l'un des suppôts<br>de Mido. Une amorce pour les Dons de type<br>Givre est intégrée dans sa longueur, ce qui<br>lui permet de générer instantanément une<br>lance de glace. Objet unique fabriqué pour<br>l'élite de Cerbère, son maniement nécessite<br>une technique subtile."
      },
      
      A9 : {
        name : "Épée du crépuscule",
        desc : "Lame régicide tordue et rouillée par le miasme.<br>Rien ne peut échapper à la corruption de<br>la Reine, pas même la matière inorganique.<br>Les propriétés de cette arme noire à l'éclat<br>terni ont été altérées.<br>Bien que personne ne l'ait encore utilisée<br>sans émettre de réserves, son efficacité<br>est indéniable."
      },
      
      A10 : {
        name : "Sabre noir",
        desc : "Épée à simple tranchant d'un noir de jais.<br>Sa lame incurvée a été conçue pour trancher<br>dans la chair, et un épéiste compétent peut<br>en maximiser l'effet. Les Chasseurs en noir<br>font peu de cas du poids de leurs armes et<br>recherchent avant tout la puissance, c'est<br>pourquoi cette épée est à réserver à un<br>guerrier entraîné."
      },
      
      A11 : {
        name : "Exécutrice",
        desc : "Épée favorite de Jack, le Gardien de la<br>crypte. Sa lame très aiguisée ne montre<br>aucun signe d'usure, ce qui en dit long sur<br>le caractère réservé du Gardien. Elle peut<br>infliger d'un seul coup des plaies fatales.<br>On ne sait pas d'où elle vient, mais il s'agit<br>certainement d'une version personnalisée des<br>armes employées par les Chasseurs en noir."
      },
      
      A12 : {
        name : "Glaive de Déchu",
        desc : "Épée à une main utilisée par les revenants<br>qui ont rejoint les Déchus. Le temps passé<br>dans le miasme a altéré ses propriétés.<br>Conçue pour tuer les Déchus, elle fut<br>pourtant nourrie par la suite du sang des<br>revenants. Une telle ironie du sort est<br>malheureusement chose courante dans le monde<br>de Vein."
      },
      
      A13 : {
        name : "Claymore écarlate",
        desc : "Épée à une main conçue sur le modèle d'une<br>épée longue maniée par un théophage aux<br>nerfs d'acier. Elle renferme une amorce à<br>Don qui permet à son utilisateur d'envoyer<br>des ondes tranchantes. Cette arme écarlate<br>déicide brille d'un éclat puissant<br>lorsqu'elle fait couler le sang."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Tuyau des enfers",
        desc : "Sorte de massue déformée par un brasier.<br><br>Ce tuyau a été exposé au miasme et plongé<br>dans les flammes de l'enfer, ce qui en a<br>changé la couleur. Seuls ceux qui ont<br>surmonté les épreuves les plus dures peuvent<br>l'obtenir."
      },
      
      A15 : {
        name : "Lame infernale",
        desc : "Épée à simple tranchant brûlée par un brasier.<br><br>Elle augmente considérablement la force, mais<br>reste très légère.<br><br>Sa lame écarlate renferme une flamme puissante<br>qui imprègne de feu les attaques chargées de<br>l'arme."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Tuyau du givre",
        desc : "Sorte de massue déformée par le givre.<br><br>Ce tuyau a été exposé au miasme et plongé<br>dans le givre, ce qui en a changé la<br>couleur. Seuls ceux qui ont surmonté les<br>épreuves les plus dures peuvent l'obtenir."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Tuyau de la foudre",
        desc : "Sorte de massue déformée par un éclair.<br><br>Ce tuyau a été exposé au miasme et frappé<br>par la foudre, ce qui en a changé la<br>couleur. Seuls ceux qui ont surmonté les<br>épreuves les plus dures peuvent l'obtenir."
      },
      
      A18 : {
        name : "Tuyau de l'incomparable",
        desc : "Sorte de massue confiée à ceux qui<br>souhaitent s'élever au-dessus des autres.<br><br>Un revenant à la puissance sans égale n'a pas<br>besoin d'arme supplémentaire. Cette arme<br>existe uniquement pour vénérer les puissants."
      },
      
      A19 : {
        name : "Lame Fulmen",
        desc : "Épée à une main galvanisée par un éclair.<br><br>Elle est lourde, mais offre une grande<br>puissance défensive, et améliore grandement la<br>dextérité et l'esprit.<br><br>L'électricité bleue que renferme cette lame<br>scintille magnifiquement et imprègne de foudre<br>les attaques chargées de l'arme."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Espadon régicide",
        desc : "Épée commune à deux mains, produite en<br>série et utilisée par les revenants lors de<br>l'Opération Régicide. Conçue à l'origine<br>pour permettre aux soldats de transpercer<br>le corps de la Reine, cette lame n'aura<br>aucun mal à trancher les Déchus."
      },
      
      B1 : {
        name : "Espadon",
        desc : "Épée longue à deux mains produite en série<br>par le gouvernement provisoire. Conçue pour<br>tuer les grands spécimens de Déchus, elle<br>est très résistante et protège bien son<br>porteur. Suite aux retours de l'opération<br>Régicide, des améliorations ont été<br>intégrées, comme un conducteur d'ichor<br>individuel."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Épée longue inspirée d'un sabre japonais.<br>Son créateur, un revenant du nom de Mukuro,<br>grava également son nom, qui signifie<br>&quot;Faucheuse de cadavre&quot;, dans la lame. Conçue<br>pour porter des attaques de zone, elle est<br>assez puissante pour créer des rafales de<br>vent lorsqu'on la manie avec force."
      },
      
      B3 : {
        name : "Oni Bane",
        desc : "Épée qui a accompagné Yakumo sur de nombreux champs<br>de bataille.<br><br>Fabriquée selon une technique qui diffère de celle utilisée<br>pour la plupart des armes de Vein, elle a été conçue<br>pour des mouvements amples et rapides malgré sa grande taille.<br><br>Yakumo l'a reçu du revenant qui a aussi donné son arme à Louis,<br>et l'a ensuite adapté à son style."
      },
      
      B4 : {
        name : "Lame retorse",
        desc : "Épée à deux mains dont la lame ressemble à une dent allongée.<br><br>Créée à partir du corps d'un spécimen géant de Déchu, cette<br>arme étrange possède le pouvoir de libérer une sorte de Don<br>lorsqu'on l'utilise à pleine puissance.<br><br>Cette arme diffuse une faible chaleur et on la prétend avide<br>de sang."
      },
      
      B5 : {
        name : "Espadon noir",
        desc : "Épée à deux mains dotée d'une chaîne noire à<br>simple tranchant. Cette longue arme incurvée<br>a été conçue pour démembrer ses adversaires.<br>Les Chasseurs en noir font peu de cas du<br>poids de leurs armes et recherchent avant<br>tout la puissance, c'est pourquoi cette épée<br>est à réserver à un guerrier entraîné."
      },
      
      B6 : {
        name : "Lame du roi-loup d'argent",
        desc : "Épée à deux mains dorée maniée par Silva après avoir été<br>atteint par la frénésie. Elle conserve une partie du pouvoir<br>des reliques et peut aligner de puissants coups à une<br>vitesse terrifiante. Son aspect suggère que la puissance<br>brute a été privilégiée à la beauté et confère à son porteur<br>une aura d'autorité."
      },
      
      B7 : {
        name : "Lame du jugement",
        desc : "Épée à deux mains fabriquée par le revenant<br>à la curiosité malsaine Mido.<br><br>Son mécanisme de transformation interne<br>peut générer une lame de Don très puissante,<br>qui lui confère une puissance destructrice<br>destinée très probablement à soutenir un<br>affrontement final contre Silva."
      },
      
      B8 : {
        name : "Espadon du crépuscule",
        desc : "Espadon régicide tordu et rouillé par le miasme.<br>Rien ne peut échapper à la corruption de<br>la Reine, pas même la matière inorganique.<br>Les propriétés de cette arme noire à l'éclat<br>terni ont été altérées.<br>Bien que personne ne l'ait encore utilisée<br>sans émettre de réserves, son efficacité<br>est indéniable."
      },
      
      B9 : {
        name : "Espadon de Déchu",
        desc : "Épée à deux mains utilisée par les revenants<br>qui ont rejoint les Déchus.<br><br>Le temps passé dans le miasme a altéré ses<br>propriétés. Conçue pour tuer les Déchus, elle<br>fut pourtant nourrie du sang des revenants.<br>Une telle ironie du sort est malheureusement<br>chose courante dans ce monde."
      },
      
      B10 : {
        name : "Fer du loup d'argent",
        desc : "Épée à deux mains argentée utilisée par<br>l'unité de sécurité Cerbère. Mieux adaptée à<br>la mêlée, elle peut rapidement réduire<br>l'écart avec l'adversaire par de puissantes<br>taillades. Cerbère est une unité d'élite<br>hautement qualifiée qui a été formée après<br>l'opération Régicide. Son équipement révèle<br>sa vraie valeur entre des mains compétentes."
      },
      
      B11 : {
        name : "Espadon opalin",
        desc : "Épée à deux mains conçue sur le modèle d'une scie géante<br>maniée par un théophage accablé par le poids du destin.<br><br>À pleine puissance, elle luit d'une lueur bleue avant de<br>s'abattre dans un choc terrible. Cette arme à l'aura<br>aveuglante ne fera qu'une bouchée des Déchus.<br>"
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Balmung courroucé",
        desc : "Épée à deux mains brûlée par un brasier.<br><br>Malgré son poids, elle offre une puissance<br>d'attaque et une défense d'arme excellentes,<br>tout en augmentant la dextérité.<br><br>La lame brûlée a conservé la chaleur des<br>flammes et imprègne de feu les attaques<br>chargées."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Espadon azur",
        desc : "Épée à deux mains refroidie par le givre.<br><br>Malgré son poids, sa défense d'arme est élevée<br>et elle augmente la volonté.<br><br>Cette lame recouverte de givre renferme le<br>pouvoir du zéro absolu qui imprègne de glace<br>ses attaques chargées."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Hallebarde régicide",
        desc : "Arme d'hast commune, produite en série et <br>utilisée par les revenants lors de l'Opération<br>Régicide. Elle a été conçue pour frapper vite<br>et fort. Ceux qui affrontaient les géants Déchus<br>sont les premiers à avoir été équipés de ce<br>nouveau modèle."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "Longue arme d'hast produite en série par le<br>gouvernement provisoire. Compte tenu de la<br>forme de sa tête, elle n'est efficace que<br>lorsqu'on la manie avec force. Les armes du<br>gouvernement provisoire servent avant tout à<br>la défense des civils, donc même si elles ne<br>sont pas très raffinées, elles sont tout à<br>fait à même de tuer des Déchus."
      },
      
      C2 : {
        name : "Empaleuse",
        desc : "Lance fine à la tête aiguisée. Plus grande<br>qu'une personne de taille moyenne, elle est<br>tout de même assez légère pour permettre des<br>fentes rapides. Créée sur un coup de tête<br>par des ingénieurs excentriques, elle est la<br>seule de leurs armes à ne pas être trop<br>complexe à manier."
      },
      
      C3 : {
        name : "Fendeuse grenat",
        desc : "Majestueuse arme d'hast rouge et argent qui porte le nom<br>d'un joyau rouge.<br><br>Elle renferme une amorce à Don miniature qui envoie<br>des vagues de lames lorsqu'on la manie.<br><br>Créée par une secte de revenants qui se prend<br>pour la nouvelle noblesse, elle est très fonctionnelle<br>malgré son apparence ostentatoire."
      },
      
      C4 : {
        name : "Dammerung",
        desc : "Arme d'hast utilisée par l'innocente Io.<br>Elle a été personnalisée par Murasame pour<br>activer un Don qui fournit à son porteur une<br>protection supplémentaire lorsqu'il la<br>manie. Au fur et à mesure que tu traces ton<br>destin, en apprendras-tu plus sur ton propre<br>passé ou chercheras-tu à créer un avenir<br>avec tes amis ?"
      },
      
      C5 : {
        name : "Hallebarde noire",
        desc : "Arme d'hast à la lame noir de jais.<br><br>Sa large tête en forme de faux a été conçue<br>pour décapiter les Déchus.<br><br>Les Chasseurs en noir font peu de cas du poids<br>de leurs armes et recherchent avant tout la<br>puissance. Réservée à un guerrier entraîné."
      },
      
      C6 : {
        name : "Faux de l'assassin",
        desc : "Outil d'un bourreau qui résidait dans le<br>Gouffre hurlant. Elle renferme une amorce à<br>Don qui peut produire du liquide et tirer<br>des colonnes d'eau. Le Déchu qui la<br>possédait a été réduit en cendres, mais son<br>pouvoir a été transmis intact à son<br>successeur, comme une ultime tentative pour<br>s'accrocher à la vie."
      },
      
      C7 : {
        name : "Hallebarde du crépuscule",
        desc : "Hallebarde régicide tordue et rouillée par le miasme.<br>Rien ne peut échapper à la corruption de<br>la Reine, pas même la matière inorganique.<br>Les propriétés de cette arme noire à l'éclat<br>terni ont été altérées.<br>Bien que personne ne l'ait encore utilisée<br>sans émettre de réserves, son efficacité<br>est indéniable."
      },
      
      C8 : {
        name : "Bardiche de Déchu",
        desc : "Arme d'hast utilisée par les revenants qui<br>ont rejoint les Déchus. Le temps passé dans<br>le miasme a altéré ses propriétés. Conçue<br>pour tuer les Déchus, elle fut pourtant<br>nourrie par la suite du sang des revenants.<br>Une telle ironie du sort est malheureusement<br>chose courante dans le monde de Vein."
      },
      
      C9 : {
        name : "Hache d'anéantissement",
        desc : "Arme destructrice autrefois utilisée par un membre<br>particulièrement fort de Cerbère.<br><br>Elle a muté après la déchéance de son porteur,<br>l'alimentant d'un nouveau pouvoir terrible capable<br>de briser n'importe quelle défense et de trancher<br>complètement ses adversaires."
      },
      
      C10 : {
        name : "Hache du loup d'argent",
        desc : "Arme d'hast argentée utilisée par l'unité de<br>sécurité Cerbère. Cette arme formidable émet<br>une aura impérieuse. Cerbère est une unité<br>d'élite hautement qualifiée qui a été formée<br>après l'Opération Régicide. Son équipement<br>révèle sa vraie valeur entre des mains<br>compétentes."
      },
      
      C11 : {
        name : "Lance azurée",
        desc : "Hallebarde conçue sur le modèle d'une lance<br>maniée par un théophage à l'ambition<br>dévorante. À pleine puissance, une lame de<br>Don sort de sa tête et en accroît la portée.<br>Cette élégante arme bleue a transpercé des<br>dieux et réduira les Déchus en cendres."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Hallebarde de brume sanglante",
        desc : "Hallebarde refroidie par le givre.<br><br>Elle compense son manque de puissance par un<br>poids faible et une grande amélioration de la<br>force.<br><br>Le froid incessant contenu dans l'arme imprègne<br>de glace ses attaques chargées."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Brionac foudroyante",
        desc : "Hallebarde galvanisée par un éclair.<br><br>Sa puissance d'attaque et sa défense d'arme<br>sont faibles, mais elle est légère et augmente<br>le gain d'ichor.<br><br>Sa lame électrique diffuse une lumière bleutée<br>qui imprègne de foudre les attaques chargées."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Marteau régicide",
        desc : "Masse commune, produite en série et utilisée<br>par les revenants lors de l'Opération<br>Régicide. Conçue pour broyer les membres<br>de la Reine, cette arme dévastatrice est<br>difficile à manier. Seuls les combattants bien<br>entraînés peuvent l'utiliser correctement."
      },
      
      D1 : {
        name : "Marteau d'asservissement",
        desc : "Arme primitive semblable à un marteau.<br><br>Ce n'est qu'un manche surmonté d'un bloc<br>de ciment. Il a subi un léger traitement pour<br>pouvoir servir d'arme aux revenants.<br><br>Utilisée par les revenants asservis, cette <br>arme fournit une maigre lueur d'espoir en combat."
      },
      
      D2 : {
        name : "Masse destructrice",
        desc : "Masse utilisée par Oliver, qui succomba à la<br>soif de sang et rejoignit les Déchus. Malgré<br>son manque d'entretien, c'est une arme<br>toujours aussi fonctionnelle qui a conservé<br>la puissance qu'elle avait pendant<br>l'Opération Régicide. Abandonnée car jugée<br>inutile, elle a apporté une lueur d'espoir à<br>l'esclave qui la récupéra."
      },
      
      D3 : {
        name : "Hache d'armes lourde",
        desc : "Longue arme d'hast produite en série par le<br>gouvernement provisoire. Sa lame épaisse<br>n'est pas faite pour des attaques de<br>précision, mais provoque de longues<br>balafres. Conçue à la base pour tuer les<br>Déchus géants, elle sert aussi d'outil de<br>démolition ou d'élagage compte tenu de la<br>pénurie d'outils à Vein."
      },
      
      D4 : {
        name : "Ancre d'impulsion",
        desc : "Marteau mécanique robuste. Il renferme une<br>amorce à Don qui tire des vagues de chaleur,<br>ce qui démultiplie son pouvoir écrasant.<br>Lorsqu'il frappe le sol, il provoque des<br>secousses sismiques. Cette arme est le<br>chef-d'œuvre d'un groupe d'ingénieurs un peu<br>fous et certains revenants ne<br>l'échangeraient pour rien au monde."
      },
      
      D5 : {
        name : "Marteau géant",
        desc : "Grand marteau utilisé par des Déchus devenus<br>énormes suite à leur exposition au miasme.<br>Sa face a été exposée à du miasme dense pour<br>être durcie et un coup à pleine puissance<br>peut briser n'importe quelle garde. Nombreux<br>sont les esclaves de revenants partis<br>chercher des perles de sang à avoir muté et<br>à manier de telles armes."
      },
      
      D6 : {
        name : "Marteau du loup d'argent",
        desc : "Marteau de guerre argenté utilisé par<br>l'unité de sécurité Cerbère. Son centre de<br>gravité offre une grande liberté de<br>maniement à son utilisateur, malgré sa<br>taille. Cerbère est une unité d'élite<br>hautement qualifiée qui a été formée après<br>l'Opération Régicide. Son équipement révèle<br>sa vraie valeur entre des mains compétentes."
      },
      
      D7 : {
        name : "Labrys du tyran",
        desc : "Hache à double tranchant qui brille d'un or terni.<br><br>Encore plus lourde qu'elle n'y paraît, elle exige<br>une force herculéenne pour être efficace.<br><br>Bien qu'elles brillent d'un éclat doré, la lame et<br>la poignée ne sont que de vulgaires contrefaçons,<br>conséquences directes de la naissance d'un tyran."
      },
      
      D8 : {
        name : "Marteau du crépuscule",
        desc : "Marteau régicide tordu et rouillé par le miasme.<br>Rien ne peut échapper à la corruption de<br>la Reine, pas même la matière inorganique.<br>Les propriétés de cette arme noire à l'éclat<br>terni ont été altérées.<br>Bien que personne ne l'ait encore utilisée<br>sans émettre de réserves, son efficacité<br>est indéniable."
      },
      
      D9 : {
        name : "Marteau de guerre brûlé",
        desc : "Marteau de guerre tordu par une longue<br>exposition à des flammes intenses, qui en<br>ont fait une arme de destruction capable<br>d'écraser la chair comme les os tout en les<br>réduisant en cendres dans un funeste<br>brasier."
      },
      
      D10 : {
        name : "Hache lourde de Déchu",
        desc : "Hache utilisée par les revenants qui ont<br>rejoint les Déchus. Le temps passé dans le<br>miasme a altéré ses propriétés. Conçue pour<br>tuer les Déchus, elle fut pourtant nourrie<br>par la suite du sang des revenants. Une<br>telle ironie du sort est malheureusement<br>chose courante dans le monde de Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Marteau des enfers",
        desc : "Marteau brûlé par un brasier.<br><br>Il augmente fortement la dextérité et renforce<br>considérablement la puissance d'attaque<br>physique et le taux d'absorption.<br><br>Les flammes contenues dans son métal sont<br>toujours aussi chaudes et imprègnent de feu les<br>attaques chargées."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Sharur verglaçant",
        desc : "Marteau de guerre refroidi par le givre.<br><br>Spécialisé dans l'amélioration de la défense et<br>de la force, il reste tout de même plus léger<br>que les marteaux habituels.<br><br>Cette arme contient le froid arctique du zéro<br>absolu qui imprègne de glace ses attaques<br>chargées."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Baïonnette régicide",
        desc : "Baïonnette commune, produite en série et utilisée par les<br>revenants lors de l'Opération Régicide. Son<br>générateur de Dons en fait une arme très<br>appréciée des amateurs de combats à<br>distance."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "Baïonnette que Mia garde toujours à portée<br>de main. Elle a été allégée et personnalisée<br>pour que même sa frêle propriétaire puisse<br>l'utiliser librement. Les accrocs et rayures<br>à sa surface témoignent du rôle qu'elle a<br>joué en protégeant deux vies importantes. En<br>guise de remerciement, elle a été baptisée<br>d'après une fleur."
      },
      
      E2 : {
        name : "Briseuse d'émeute",
        desc : "Baïonnette fabriquée à partir de fragments d'arme et de<br>matériaux de récupération. Malgré son aspect brut, son<br>amorce à Don fonctionne parfaitement et lance des attaques<br>de zone nettes. C'est l'arme préférée des hors-la-loi : ceux<br>qui font trop grand étalage de leurs richesses se retrouvent<br>souvent à sa pointe."
      },
      
      E3 : {
        name : "Baïonnette",
        desc : "Baïonnette à lame de scie produite en série par le<br>gouvernement provisoire.<br><br>Son amorce à Don peut lancer des explosions de courte portée<br>sur toute une zone.<br><br>De nombreux revenants ne sont pas formés au maniement des<br>armes, c'est pourquoi elle a été conçue pour être efficace<br>même entre les mains d'un guerrier inexpérimenté."
      },
      
      E4 : {
        name : "Transperceuse rubellite",
        desc : "Majestueuse baïonnette rouge et argentée qui doit son nom à<br>un joyau rouge. Son long canon gracieux tire des balles qui<br>semblent poursuivre leur cible.<br><br>Les revenants sectaires qui l'utilisent se prennent pour des<br>nobles et estiment que leurs armes méritent tout le luxe<br>qu'elles peuvent leur apporter."
      },
      
      E5 : {
        name : "Baïonn. du loup d'argent",
        desc : "Baïonnette argentée utilisée par l'unité de<br>sécurité Cerbère. Les lames de chaque côté<br>du canon peuvent résister à des charges dans<br>des mêlées intenses. Cerbère est une unité<br>d'élite hautement qualifiée qui a été formée<br>après l'Opération Régicide. Son équipement<br>révèle sa vraie valeur entre des mains<br>compétentes."
      },
      
      E6 : {
        name : "Catastrophe ardente",
        desc : "Arme du Canonnier, l'un des sbires de Mido.<br>Elle comporte un mécanisme qui amplifie les<br>Dons de feu et libère des traînées de<br>flammes incandescentes. Fabriquée par un<br>artilleur démontrant une compatibilité<br>élevée avec les Dons, elle permet à son<br>utilisateur d'ajuster la forme des flammes<br>qu'elle crache."
      },
      
      E7 : {
        name : "Baïonnette du crépuscule",
        desc : "Baïonnette régicide tordue et rouillée par le miasme.<br>Rien ne peut échapper à la corruption de<br>la Reine, pas même la matière inorganique.<br>Les propriétés de cette arme noire à l'éclat<br>terni ont été altérées.<br>Bien que personne ne l'ait encore utilisée<br>sans émettre de réserves, son efficacité<br>est indéniable."
      },
      
      E8 : {
        name : "Baïonnette noire",
        desc : "Baïonnette à la lame et au canon noirs. Sa<br>lame incurvée peut transpercer la chair des<br>ennemis les plus résistants avant de leur<br>asséner un puissant coup de feu.<br>Les Chasseurs en noir font peu de cas du<br>poids de leurs armes et recherchent avant<br>tout la puissance, c'est pourquoi cette arme<br>est à réserver à un guerrier entraîné."
      },
      
      E9 : {
        name : "Libertador",
        desc : "Baïonnette qu'utilise Eva, la Gardienne de<br>la crypte. Elle possède une amorce à Don<br>personnalisée qui tire des balles à tête<br>chercheuse. Eva a reçu cette arme de son<br>partenaire Jack et sa puissance phénoménale<br>témoigne de la profondeur de sa loyauté pour<br>elle."
      },
      
      E10 : {
        name : "Baïonnette de Déchu",
        desc : "Baïonnette utilisée par les revenants qui<br>ont rejoint les Déchus. Le temps passé dans<br>le miasme a altéré ses propriétés. Conçue<br>pour tuer les Déchus, elle fut pourtant<br>nourrie par la suite du sang des revenants.<br>Une telle ironie du sort est malheureusement<br>chose courante dans le monde de Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Neige sanglante",
        desc : "Baïonnette refroidie par le givre.<br><br>Elle compense sa puissance d'attaque et sa<br>défense d'arme faibles par sa légèreté et un<br>gain d'ichor accru.<br><br>Ce fusil est imprégné d'un froid glacial. Lors<br>des attaques chargées, il tire rapidement de<br>puissantes balles successives et sa lame gagne<br>des propriétés de glace."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Boule de foudre",
        desc : "Baïonnette galvanisée par un éclair.<br><br>Elle est légère et même ses attaques de mêlée<br>sont douloureuses.<br><br>Ce fusil est parcouru par un mystérieux courant<br>électrique violet qui imprègne de foudre sa<br>lame et convertit ses cartouches en projectiles<br>à tête chercheuse pendant les attaques<br>chargées."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Griffe nocturne",
        desc : "Voile de sang de type Ogre au style traditionnel et<br>réservé aux revenants.<br><br>Son mécanisme d'absorption très efficace augmente la<br>quantité d'ichor glanée grâce aux attaques. Brillant<br>tant dans la forme que dans la fonction, ce modèle<br>est très prisé de par sa rareté."
      },
      
      A1 : {
        name : "Noble argent",
        desc : "Voile de sang doté d'un manteau à manches<br>chauve-souris. Les lignes argentées qui<br>marquent les os renferment des systèmes qui<br>renforcent les Dons de soutien. Ses<br>créateurs ont mis l'accent sur le style,<br>mais malheureusement, la plupart des<br>revenants sont trop occupés par leur survie<br>pour y prêter attention."
      },
      
      A2 : {
        name : "Variante GXM",
        desc : "Voile de sang taillé dans un tissu traité au<br>revêtement blindé. Il protège aussi bien<br>qu'il en a l'air et inclut des fonctions qui<br>renforcent les Dons de soutien. Il a été<br>créé par un ancien fabricant d'armes, mais<br>la rareté des fibres synthétiques et des<br>alliages à Vein fait que peu de revenants<br>ont la possibilité de le porter."
      },
      
      A3 : {
        name : "Libérateur de sombresang",
        desc : "Voile de sang au manteau déchiré. À première<br>vue, il a l'air en piteux état, mais il<br>renforce les Dons offensifs et la résistance<br>aux altérations d'état. On ignore qui l'a<br>conçu. Sensible, il nécessite un renfort<br>supplémentaire, car le mécanisme de<br>transformation du bras droit est instable."
      },
      
      A4 : {
        name : "Griffe régicide",
        desc : "Voile de sang utilisé par les soldats de<br>l'Opération Régicide. Il renforce tous les<br>types de Dons, mais n'est pas aussi solide<br>qu'on pourrait le souhaiter. Conçu pour être<br>produit en série à faible coût, il a été créé à partir<br>d'un simple gilet tactique agrémenté d'une<br>fonction d'absorption pour un équipement<br>rapide des revenants envoyés au front."
      },
      
      A5 : {
        name : "Griffe sanglante",
        desc : "Voile de sang de type Ogre récupéré sur le<br>corps d'un revenant que la soif a changé en<br>Déchu. Cette transformation explique<br>peut-être sa piètre résistance par rapport<br>aux autres voiles du même type. Il est en<br>revanche très léger. Les tentacules qui en<br>jaillissent illustrent l'horreur de la<br>transformation en Déchu."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Chevalier du désastre",
        desc : "Voile de sang déchiré par un brasier.<br><br>Malgré son poids, ce vêtement réduit<br>considérablement les dégâts et renforce les<br>Dons de ténèbres.<br><br>L'histoire n'a gardé nulle trace de ce voile,<br>ce qui laisse songeur quant à son pouvoir et<br>les possibilités qu'il renferme."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Griffe du crépuscule",
        desc : "Voile de sang déchiré par un éclair tonitruant.<br><br>Son poids élevé est compensé par une forte<br>diminution des dégâts et une force élevée.<br><br>Les guerriers devenus très forts cherchent<br>toujours le conflit et atteignent le summum de<br>la puissance avec ce voile."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Lance nocturne",
        desc : "Voile de sang de type Aiguillon au style<br>traditionnel et réservé aux revenants.<br><br>Plus encombrant que d'autres modèles du même type,<br>il offre néanmoins une bonne défense.<br><br>Brillant tant dans la forme que dans la fonction, ce<br>modèle est très prisé de par sa rareté."
      },
      
      B1 : {
        name : "Lassitude du corbeau",
        desc : "Voile de sang qui ressemble beaucoup aux<br>ailes d'un corbeau. Comme le suggère son<br>aspect mystique, il renforce la puissance<br>des Dons offensifs. Les voiles de sang de<br>type nocturne s'inspirèrent de ce prototype<br>avant de rechercher un meilleur équilibre,<br>c'est pourquoi ce fut le seul exemplaire<br>jamais produit."
      },
      
      B2 : {
        name : "Manteau hivernal",
        desc : "Voile de sang adapté à l'exploration des<br>régions polaires. Très encombrant, il offre<br>néanmoins une bonne protection et renforce<br>considérablement les Dons de soutien.<br>Initialement conçu pour des expéditions en<br>montagne en quête de perles de sang, il a<br>été mis de côté lorsque celles-ci se sont<br>avérées vaines."
      },
      
      B3 : {
        name : "Vêtement argenté",
        desc : "Voile de sang qui ressemble à l'armure<br>chatoyante des chevaliers. Très résistant<br>aux attaques tranchantes et perforantes, il<br>a été conçu par des artisans qui voulaient<br>conserver un certain sens humain de la<br>beauté. De nombreux revenants aspirent à la<br>même chose."
      },
      
      B4 : {
        name : "Épine régicide",
        desc : "Voile de sang utilisé par les soldats de<br>l'Opération Régicide. Il renforce tous les<br>types de Dons, mais n'est pas aussi solide<br>qu'on pourrait le souhaiter. Les voiles de<br>type Aiguillon peuvent être utilisés à<br>distance et sont adaptés aux embuscades,<br>mais leur mécanisme d'absorption complexe<br>empêche toute production en série."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Éminence gracieuse",
        desc : "Voile de sang déchiré par un brasier.<br><br>De faible poids, il offre une grande dextérité<br>et réduit considérablement les dégâts.<br><br>L'élégance de ce voile n'est pas son seul<br>atout, mais reflète la quête de pouvoir de<br>son créateur."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Voile négatif",
        desc : "Voile de sang déchiré par le givre.<br><br>Pour compenser son poids élevé, il excelle dans<br>la réduction des dégâts et le renforcement des<br>Dons de ténèbres.<br><br>Son apparence solennelle et digne témoigne<br>d'une volonté inébranlable de protéger la vie<br>des revenants."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Croc nocturne",
        desc : "Voile de sang de type Limier au style traditionnel<br>pour les revenants.<br><br>Ses excellentes capacités défensives en font un<br>équipement fiable sur n'importe quel champ de<br>bataille. Brillant tant dans la forme que dans la<br>fonction, ce modèle est très prisé de par sa rareté."
      },
      
      C1 : {
        name : "Limier bleu",
        desc : "Voile de sang qui ressemble à une simple<br>veste. Bien qu'il ne soit pas<br>particulièrement résistant aux éléments, il<br>offre une résistance élevée aux altérations<br>d'état. Son faible coût et son style<br>passe-partout en ont fait un modèle<br>populaire chez les revenants."
      },
      
      C2 : {
        name : "Défenseur GXL",
        desc : "Voile de sang taillé dans un tissu traité au<br>revêtement blindé. Bien que ses qualités<br>défensives en fassent une petite forteresse,<br>il est étonnamment vulnérable aux<br>altérations. Il a été créé par un ancien<br>fabricant d'armes, mais la rareté des<br>alliages et des fibres synthétiques à Vein<br>fait que peu ont la chance de le posséder."
      },
      
      C3 : {
        name : "Forteresse du hérisson",
        desc : "Voile de sang couvert de pics en métal. Il<br>protège moins bien qu'il n'y paraît, mais<br>augmente la puissance des Dons offensifs. Il<br>aurait été créé par des fabricants du marché<br>noir. Ce n'est pas le genre de tenue que<br>l'on peut facilement porter tous les jours,<br>mais son aspect intimidant atteint le but<br>recherché."
      },
      
      C4 : {
        name : "Aube blanche",
        desc : "Voile de sang rappelant une robe de moine.<br>Il gêne les mouvements et offre peu de<br>défense, mais il augmente considérablement<br>l'efficacité des Dons de soutien. Il était<br>traditionnellement porté par une secte de<br>revenants religieux, qui se sont mystérieusement<br>évanouis dans la nature."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Attirail violet",
        desc : "Voile de sang déchiré par un brasier.<br><br>Il compense sa faible puissance de Don par son<br>extrême légèreté et une augmentation nette de<br>la force.<br><br>Avec un équipement enfin plus léger, les<br>porteurs de voiles de sang de type Limiers<br>seront comme des bêtes lâchées dans la nature,<br>arpentant les champs de bataille dans un<br>déchaînement le plus total."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Croc du point du jour",
        desc : "Voile de sang déchiré par un éclair tonitruant.<br><br>Bien qu'il soit lourd, il est optimisé pour les<br>Dons de lumière et renforce considérablement la<br>dextérité et l'esprit.<br><br>On raconte que le plus fort revenant du passé<br>aurait utilisé ce voile, mais impossible de<br>savoir dans quelle mesure cette rumeur est vraie."
      },
      
      
      // # IVY #
      D0 : {
        name : "Ronce nocturne",
        desc : "Voile de sang de type Vigne au style traditionnel et<br>réservé aux revenants.<br><br>Renforce les effets de tous les types de Dons et<br>fournit une défense stable contre les attaques non<br>physiques. Brillant tant dans la forme que dans la<br>fonction, ce modèle est très prisé de par sa rareté."
      },
      
      D1 : {
        name : "Grâce d'ivoire",
        desc : "Voile de sang orné d'argent. Bien qu'il<br>offre une faible protection, il augmente<br>considérablement l'efficacité des Dons. Cet<br>objet cherche à apporter une touche de<br>beauté dans le monde en ruines de Vein et<br>incarne un sens de l'esthétique que les<br>revenants sont sur le point de perdre<br>entièrement."
      },
      
      D2 : {
        name : "Assaillant GXH",
        desc : "Voile de sang composé d'un manteau agrémenté<br>d'une fonction d'absorption. Il offre une<br>bonne protection sans sacrifier la<br>maniabilité et renforce les Dons offensifs.<br>Il a été créé par un ancien fabricant<br>d'armes, mais la rareté des fibres<br>synthétiques et des alliages à Vein fait que<br>peu ont la chance de le posséder."
      },
      
      D3 : {
        name : "Châle de prière",
        desc : "Voile de sang rouge vif au design élaboré.<br>Sa capacité de protection est étonnamment<br>très efficace, et il renforce également<br>l'efficacité des Dons de soutien. Son<br>propriétaire d'origine priait pour son<br>salut, mais personne ne sait s'il obtint une<br>réponse."
      },
      
      D4 : {
        name : "Élan suicidaire",
        desc : "Voile de sang qui ressemble à un collier<br>d'épines. Il renforce grandement la<br>puissance des Dons offensifs, mais n'offre<br>quasiment aucune défense physique. Son<br>créateur serait un ingénieur fou qui était<br>persuadé que la meilleure défense était de<br>tuer l'ennemi en premier. Rares sont ceux à<br>l'utiliser de plein gré."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Épine ensorcelante",
        desc : "Voile de sang déchiré par le givre.<br><br>Malgré son poids élevé, il réduit bien les<br>dégâts et augmente considérablement la<br>dextérité.<br><br>Sous son élégante capuche se cache le regard<br>brillant d'une personne qui cherche à embrasser<br>la mort et à goûter le sang frais."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Épines du maître",
        desc : "Voile de sang déchiré par un éclair tonitruant.<br><br>Il compense sa faible puissance de Don par un<br>poids extrêmement léger et une forte<br>augmentation de la dextérité et de la volonté.<br><br>Le port de ce voile donne à son porteur<br>l'impression que des ailes lui poussent."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Soulagement",
        desc : "Réduit le poids de l'équipement mais réduit<br>également ses statistiques de base."
      },
      
      A1 : {
        name : "Renforcement",
        desc : "Augmente le poids de l'équipement mais<br>augmente également ses statistiques de base."
      },
      
      A2 : {
        name : "Intensification",
        desc : "Augmente l'échelle de stats de l'équipement.<br>Réduit l'attaque des armes et des Dons."
      },
      
      A3 : {
        name : "Dons",
        desc : "Décuple l'attaque d'une arme et l'efficacité<br>des Dons d'un voile de sang.<br>Réduit grandement l'échelle de stats."
      },
      
      A4 : {
        name : "Assimilation",
        desc : "Augmente le taux d'absorption de l'équipement.<br>Réduit l'attaque des armes et des Dons."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Feu",
        desc : "Octroie des propriétés de feu. Réduit l'attaque<br>des armes/Dons et l'échelle de stats."
      },
      
      B1 : {
        name : "Glace",
        desc : "Octroie des propriétés de glace. Réduit l'attaque<br>des armes/Dons et l'échelle de stats."
      },
      
      B2 : {
        name : "Foudre",
        desc : "Octroie des propriétés de foudre. Réduit l'attaque<br>des armes/Dons et l'échelle de stats."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Empoisonnement",
        desc : "Crée de l'équipement qui empoisonne l'ennemi.<br>Les Dons et l'attaque sont amoindris."
      },
      
      C1 : {
        name : "Étourdissement",
        desc : "Crée un objet qui étourdit l'ennemi. Les<br>Dons et l'attaque sont amoindris."
      },
      
      C2 : {
        name : "Inhibition",
        desc : "Crée de l'équipement qui entrave l'ennemi.<br>Les Dons et l'attaque sont amoindris."
      },
      
      C3 : {
        name : "Ralentissement",
        desc : "Crée un objet qui ralentit l'ennemi. Les<br>Dons et l'attaque sont amoindris."
      }
    }
  }
};


// # DO NOT EDIT #
// these are special keys that are language dependent

// mobility key
// converts the translated string into a comparable value
CodeVeinBuilder.status.mobiKey[_lang.na]          = -1;
CodeVeinBuilder.status.mobiKey[_lang.mobi.slow]   = 0;
CodeVeinBuilder.status.mobiKey[_lang.mobi.normal] = 1;
CodeVeinBuilder.status.mobiKey[_lang.mobi.quick]  = 2;
