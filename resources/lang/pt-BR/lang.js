// # Português - Brasil TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(None)',
  
  
  // titles/labels
  weapon : "Arma",
  blood_veil : "Véu de sangue",
  transform : "Transformar",
  blood_code : "Códigos de Sangue",
  gift_type : "Tipos de Dádiva",
  passive : "Passivo(a)",
  active : "Ativo(a)",
  options : "Opções",
  code_owner : "Dono(a) do código",
  origin : "Acesso:",
  companion_rank : "Mérito como companheiro",
  rv_mastery : "Maestria Ap",
  exclusive : "Exclusivo",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Confirmar",
  modal_close : "Fechar",
  modal_title_default : "Popup", // Please translate this
  
  
  // preset selector
  preset_default : 'Select a Preset Build', // Please translate this
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
    initial : "Predefinição",
    '1h' : "Espada de uma mão",
    '2h' : "Espada de duas mãos",
    halberd : "Alabarda",
    hammer : "Martelo",
    bayonet : "Baioneta",
    light_gifts : "Luz Dádivas",
    dark_gifts : "Escura Dádivas",
    debuff : "Debuffs",
    misc : "Miskellen"
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
  status : "Atributos",
  lv : "Nível",
  hp : "PV",
  sta : "Vigor",
  ichor : "Sangue Negro",
  str : "Força",
  dex : "Destreza",
  mnd : "Mente",
  wil : "Determinação",
  vit : "Vitalidade",
  for : "Coragem",
  
  
  // weight
  weight : "Peso",
  total_weight : "Peso total",
  weight_limit : "Limite de peso",
  
  
  // attack stats
  attack : "Ataque",
  drain_attack : "Ataque de drenagem",
  physical : "Físico", // weapon damage
  base : "Base", // base damage
  scaling : "Escala", // damage from scaling
  drain_rating : "Taxa de drenagem",
  
  
  // defense stats
  defense : "Defesa",
  stamina_reduction : "Redução de vigor",
  balance : "Equilíbrio",
  base_balance : "Equilíbrio base",
  
  
  // resistances
  status_effects : "Efeitos de status",
  resistances : "Resistências",
  venom : "Veneno",
  stun : "Atordoamento",
  inhibit : "Inibição",
  slow : "Lentidão",
  leak : "Vazamento",
  
  
  // misc menu options
  passive_effect : "Efeitos passivos",
  on : "Ligar",
  off : "Desligar",
  hint : "Ler dica ",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Crescimento de atributo",
  required_stats : "Atributos necessários",
  
  
  // mobility
  mobility : "Mobilidade",
  mobi : {
    base : "Mobilidade base", // label for blood code mobility type (also used in the status display)
    slow : "Lentidão",
    normal : "Normal",
    quick : "Rápido"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "Árvore",
    dark : "Escura",
    light : "Luz",
    skill : "Habilidade"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "Espada de uma mão",
  '2h' : "Espada de duas mãos",
  halberd : "Alabarda",
  hammer : "Martelo",
  bayonet : "Baioneta",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Corte",
    crush : "Esmagamento",
    pierce : "Perfuração",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Sangue",
    fire : "Fogo",
    ice : "Gelo",
    lightning : "Eletricidade"
  },
  
  
  // gift stats
  gift : "Dádiva", // singular
  gifts : "Dádivas", // plural
  
  ichor_cost : "Custo de Sangue Negro",
  cooldown : "Recarga",
   seconds : "s", // displayed after the cooldown number
  physical : "Tipo de ataque",
  elemental : "Não físico",
  usage_req : "Requisitos de uso",
  
  
  // removal (of skills/equipment)
  remove : "Remover",
  remove_desc : "Remover a habilidade ou equipamento atualmente equipado.",
  
  
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
        name : "Regicida",
        desc : "O seu próprio código de sangue, que você pensou ter<br>perdido na luta com a Rainha há muito tempo.<br>Os antigos sentimentos dentro dele ainda falam com você.<br>Desta vez você precisa garantir uma paz duradoura.<br>Esse código é bem equilibrado para exploração<br>e combate corpo a corpo, além de possuir PV altos e<br>resistência.",
        owner : "Jogador"
      },
      
      A1 : {
        name : "Lutador",
        desc : "O código de sangue de um guerreiro que empunha uma<br>espada mais longa do que sua altura. Possui<br>a resolução de alguém que arriscou vidas usando<br>cada grama de força que possuía na<br>Operação Regicida. Esse código tem resistência para lutar em contato direto.<br>Aumenta as habilidades com base em força e<br>destreza.",
        owner : "Desconhecido"
      },
      
      A2 : {
        name : "Vigia",
        desc : "O código de sangue de uma aparição que dançou<br>agilmente pelo campo de batalha. Possui a<br>resolução de alguém que resgatou aqueles que viviam com<br>medo dos Perdidos e que procuravam cristais<br>de sangue para dividir com os outros.<br>Esse código é excelente para fornecer vantagens de<br>suporte e defesa com Dádivas.",
        owner : "Desconhecido"
      },
      
      A3 : {
        name : "Conjurador",
        desc : "Código de sangue de uma aparição que transforma<br>o sangue drenado em um poder impressionante.<br>Possui a resolução de alguém que usou com esperteza<br>Dádivas complexas para destruir hordas de Perdidos.<br>Esse código é especializado em Dádivas de ataque<br>poderosas que podem ser usadas à distância.",
        owner : "Desconhecido"
      },
      
      A4 : {
        name : "Berserker",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação de<br>aço de alguém que corrigiu seus antigos<br>erros e batalhou até o fim com a agonia da<br>sede para salvar os outros.<br><br>Esse código possui grande força e resistência.<br>Seu baixo estoque de sangue negro pode ser<br>compensado com armadura pesada.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometeu",
        desc : "Um código de sangue recebido do Louis. Possui a<br>resolução dele, fortalecida pela superação de<br>incontáveis dificuldades em nome da<br>salvação das aparições.<br><br>Esse código é bem equilibrado para o combate, mas<br>um tanto frágil. Suas Dádivas favorecem<br>esquivar e aparar.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Caçador",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação de<br>alguém que, de algum jeito, permaneceu cheio<br>de esperança apesar de ser usado como peão e<br>resistiu dia após dia infernal.<br><br>Esse código é excelente em combate a distância<br>e possui Dádivas que apoiam ataques<br>a distância com a baioneta.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercúrio",
        desc : "Um código de sangue recebido da Coco. Possui<br>a resolução de luta dela que põe de lado o<br>medo do frenesi e batalha para viajar pelo<br>mundo em ruínas em busca de materiais<br>para reconstruir a civilização.<br><br>Esse código permite exploração segura com seus<br>atributos equilibrados e Dádivas<br>relacionadas a vigor e bruma.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermes",
        desc : "Um código de sangue recebido do Davis.<br>Possui a resolução inabalável dele para<br>perseguir um raio de esperança em meio ao<br>desespero e mergulhar no perigo para que<br>uma nova esperança seja encontrada.<br><br>Possui um bom equilíbrio entre ataques corpo<br>a corpo e uma variedade de Dádivas úteis.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Notívago",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação<br>amarga de se segurar com força ao dever,<br>procurando preservar seu valor mesmo<br>enquanto esse valor parece desaparecer.<br><br>Esse código possui muitas Dádivas prontas<br>para a batalha, especializado naquelas<br>que lidam com veneno.",
        owner : "Sucessor sem nome"
      },
      
      A10 : {
        name : "Atlas",
        desc : "Um código de sangue recebido do Yakumo.<br>Possui a determinação dele de arriscar sua<br>vida lutando para proteger aqueles que ama.<br><br>Esse código permite o uso de armadura pesada,<br>tornando-o excelente para aguentar o combate<br>em contato direto. Também possui Dádivas<br>úteis para enfrentar ameaças poderosas.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Assassino",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui determinação para<br>sobreviver em um mundo caótico para<br>conquistar a liberdade.<br><br>Esse código é ótimo para combate corpo<br>a corpo e possui Dádivas que são excelentes<br>para ataques-surpresa.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Ártemis",
        desc : "Um código de sangue recebido da Mia. Possui<br>a determinação intrépida de superar um<br>destino cruel e liberar aqueles que sofrem.<br><br>Esse código possui vigor alto e Dádivas de<br>ataque, mas sofre de pouca resistência.<br>Também possui Dádivas que impulsionam<br>habilidades de drenagem.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Ísis",
        desc : "Um código de sangue recebido da Aurora.<br>Possui a determinação resoluta dela de<br>defender e libertar alguém que escolheu<br>sofrer para que as aparições pudessem<br>viver em paz.<br><br>Esse código é especializado em combate a<br>distância subjugando inimigos com vários<br>ataques de sangue negro.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Tórax da Rainha",
        desc : "Um código de sangue com um pouco do poder<br>da Rainha, recebido da relíquia da Aurora.<br>Cria uma sensação perturbadora que corrói<br>por dentro, mas fornece um poder vertiginoso<br>que corre no sangue.<br><br>Esse código é especializado em ataques a<br>distância e impactar inimigos com uma<br>variedade de Dádivas de ataque.",
        owner : "Rainha"
      },
      
      A15 : {
        name : "Eos",
        desc : "Um código de sangue recebido da Io. Possui a<br>determinação dela de enfrentar e fazer<br>escolhas pessoais em vez de ser apenas uma<br>Serviçal.<br><br>Esse código tem Dádivas de suporte, muita<br>resistência e muito sangue negro.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Um código de sangue recebido do Nicola.<br>Possui sua determinação bondosa de suportar<br>o tormento de batalhar consigo mesmo para<br>que aqueles que ele estima possam viver em<br>um mundo mais pacífico.<br><br>Esse código possui grande resistência e peso<br>total, tornando-o bom para combate corpo a<br>corpo. Seu baixo estoque de sangue negro<br>pode ser compensado com uma armadura resistente.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Respiração da Rainha",
        desc : "Um código de sangue com um pouco do poder<br>da Rainha, recebido da relíquia do Nicola.<br>Cria uma sensação perturbadora que corrói<br>por dentro, mas fornece um poder vertiginoso<br>que corre no sangue.<br><br>Esse código é especializado em estilos de<br>batalha que utilizam Dádivas melhoradas.<br>Suplementa seus baixos atributos com Dádivas.",
        owner : "Rainha"
      },
      
      A18 : {
        name : "Sobrevivente",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação<br>sólida de arriscar a vida ao lutar pela<br>chance de futuro da próxima geração.<br><br>Esse código é focado em destreza e tem<br>Dádivas que são úteis em batalha.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Cavaleiro Negro",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação<br>trágica de quem foi sujeito a experimentos<br>desumanos antes de se tornar fantoche do<br>Mido e, finalmente, um dos Perdidos.<br><br>Essa Dádiva foca em alta resistência e<br>força, além de possuir Dádivas eficazes<br>ao serem usadas com uma alabarda.",
        owner : "Miguel Garcia"
      },
      
      A20 : {
        name : "Scathach",
        desc : "Um código de sangue recebido da Emily. Possui<br>a determinação poderosa dela de tomar o lugar dos<br>seus companheiros adormecidos e lutar<br>pela defesa deles.<br><br>Essa Dádiva é equilibrada para Dádivas<br>e ataques físicos principalmente especializados<br>em Dádivas de fogo.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Garra da Rainha",
        desc : "Um código de sangue com um pouco do poder da Rainha,<br>recebido da relíquia da Emily. Cria uma<br>sensação perturbadora que corrói por dentro,<br>mas fornece um poder vertiginoso que<br>corre no sangue.<br><br>Esse código permite que você controle o<br>campo de batalha impressionando inimigos com<br>Dádivas e ataques físicos.",
        owner : "Rainha"
      },
      
      A22 : {
        name : "Harmonia",
        desc : "Um código de sangue recebido da Eva. Possui a<br>determinação dela de revidar e dedicar sua vida<br>àquele que a salvou de ser uma escrava.<br><br>Esse código melhora bônus de foco e possui<br>Dádivas escuras excelentes. Pode ser<br>enfraquecido com facilidade, mas fornece<br>grandes quantidades de sangue negro.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Garganta da Rainha",
        desc : "Um código de sangue com um pouco do poder<br>da Rainha, recebido da relíquia da Eva. Cria<br>uma sensação perturbadora que corrói por<br>dentro, mas fornece um poder vertiginoso que<br>corre no sangue.<br><br>Esse código é excelente em combate de<br>Dádivas e possui muitas Dádivas de suporte.",
        owner : "Rainha"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "Um código de sangue recebido do Jack. Possui<br>sua determinação de morrer tentando, de sacrificar<br>tudo pelo dever de preservar o equilíbrio.<br><br>Esse código é especializado em combate corpo<br>a corpo altamente agressivo, mas carrega<br>muito pouco peso.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Hefesto",
        desc : "Um código de sangue recebido da Murasame.<br>Possui a determinação apaixonada dela de<br>apoiar aliados que se jogam em batalhas<br>difíceis e observá-los com um sorriso quando<br>eles voltam para casa.<br><br>Esse código é especializado em armas de<br>destreza e usa Dádivas traiçoeiras para<br>brincar com o inimigo.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Guerreiro",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação<br>orgulhosa de um guerreiro veterano que<br>continuou brandindo a arma dele até o fim.<br><br>Esse código é ideal para estilos de luta<br>focados em força e fornece Dádivas<br>que ajudam com a sobrevivência.",
        owner : "Serviçal de Murasame"
      },
      
      A27 : {
        name : "Batedora",
        desc : "Um código de sangue herdado de um núcleo do<br>Vestígio reparado. Possui a determinação<br>amável de rejeitar seus desejos e viver pelo<br>bem dos seus amados.<br><br>Esse código é excelente para combate com<br>Dádivas de alta capacidade de drenagem, e permite<br>o uso de armadura leve, possibilitando<br>manobras ligeiras no campo de batalha.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Rainha",
        desc : "Um código de sangue nascido ao reunir todas<br>as relíquias e se tornar a Rainha. A resolução<br>que possui não contém nem um pouco de raiva<br>ou pesar. É feito de pura solidão.<br><br>Esse código é especializado em Dádivas e tem<br>um alto estoque de sangue negro, permitindo<br>que você impressione o inimigo.",
        owner : "Rainha"
      },
      
      A29 : {
        name : "Hades",
        desc : "Um código de sangue recebido do Silva. Possui<br>a resolução determinada dele para desistir<br>de tudo e suportar a isolação total para<br>salvar o futuro da humanidade.<br><br>Esse código tem alto poder de ataque baseado<br>em força e destreza, além de ser ideal para<br>usar equipamento pesado.",
        owner : "Gregório Silva"
      },
      
      A30 : {
        name : "Deméter",
        desc : "Um código de sangue recebido da Karen. Possui<br>a determinação misericordiosa dela de se<br>sacrificar por aqueles que sofrem a tormenta<br>da sede e carregar o fardo dos pecados<br>causados por um destino cruel.<br><br>Esse código permite suporte de Dádiva com<br>seu alto estoque de sangue negro. Também<br>pode gerar altos danos baseados em força<br>no combate.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Um código de sangue herdado do núcleo do<br>Vestígio reparado de Cruz. Possui sua<br>resolução determinada em eliminar uma ameaça<br>e salvar os fracos dos dias iniciais do<br>Projeto RAINHA.<br><br>Esse código possui Dádivas que auxiliam<br>no ataque e na defesa, além de Dádivas<br>únicas que demandam autossacrifício.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Prenúncio",
        desc : "O código de sangue de alguém que possuía um coração que<br>fervia com ambições secretas e renasceu como<br>aparição.<br>Repleto com a determinação inexorável de<br>acabar com todos os outros com seu poder sobrenatural<br>e ser conhecido por todos em Vein como Cárcere das<br>Névoas. Possui Dádivas únicas que só podem<br>ser usadas por quem é determinado.",
        owner : "Desconhecido"
      },
      
      A33 : {
        name : "Astrea",
        desc : "Código de sangue que surgiu como<br>manifestação do desejo de felicidade de Mia.<br>Repleto de um desejo de dar alívio aos<br>companheiros cansados que, felizmente,<br>retornaram do campo de batalha.<br><br>Esse código fornece equilíbrio e<br>estabilidade em combate, além de possuir<br>Dádivas úteis durante a exploração.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclépio",
        desc : "Um código de sangue com foco em vigor e PV, herdado de um núcleo do <br>Vestígio reparado de Valerio, o antigo parceiro de Jack.<br><br>Carrega a determinação de ajudar e proteger a todos.<br><br>Embora não tenha muitas opções para combate direto, o código ajuda <br>na sobrevivência, com grande quantidade de PV e vigor.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Aquiles",
        desc : "Um código de sangue com alta taxa de vigor e destreza, herdado <br>de um núcleo do Vestígio reparado. Carrega a vontade inabalável <br>de atravessar incontáveis campos de batalha.<br><br>A grande quantidade de vigor, armas leves e ataques ágeis deste <br>código é ideal para aumentar a pressão em combates corpo a corpo.",
        owner : "Desconhecido"
      },
      
      A36 : {
        name : "Surt",
        desc : "Código de sangue obtido de um horror isolado e remoto.<br>O fulgor de um inferno ardente contido ali ainda causa espanto, <br>mesmo depois do seu sono profundo, enchendo o corpo do dono <br>com um poder aterrorizante que pulveriza quem ousar se aproximar.<br><br>Com alto teor de força, coragem e boa reserva de vigor, este <br>código de sangue possibilita combates dinâmicos.",
        owner : "Cavaleiro do Fogo Infernal"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pólux",
        desc : "Código de sangue com foco em força e PV, herdado <br>de um núcleo do Vestígio reparado.<br>Carrega a vontade de um guerreiro de bom coração <br>que lutou lado a lado com seus amigos.<br><br>Com alta capacidade de defesa e durabilidade, o <br>código é ótimo para enfrentar ataques inimigos e <br>contra-atacar com golpes poderosos.",
        owner : "Desconhecido"
      },
      
      A38 : {
        name : "Ímer",
        desc : "Código de sangue obtido de um horror isolado e remoto.<br><br>O brilho de flores congeladas contidas ali reluz como antes <br>de seu sono profundo, aguçando o olhar do dono para decidir <br>a hora certa de aniquilar todos de uma só vez.<br><br>O código tem alta determinação e vitalidade, aprimorando <br>os PV e o poder das Dádivas escuras.",
        owner : "Imperatriz de Gelo"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseu",
        desc : "Código de sangue com alto teor de determinação e mente, <br>herdado de um núcleo do Vestígio reparado.<br><br>Carrega a vontade de um guerreiro astuto, que controlou <br>muitas batalhas na palma da mão.<br><br>Com Dádivas poderosas e bastante sangue negro, este <br>código é feito para aniquilar inimigos em sequência.",
        owner : "Desconhecido"
      },
      
      A40 : {
        name : "Váli",
        desc : "Código de sangue obtido de um horror isolado e remoto.<br>O clarão e o estrondo dos trovões contidos ali não esmoreceram <br>com o sono longevo, e sim fortalecem seu dono para que este <br>possa trucidar tudo que cruzar o seu caminho.<br><br>Com alto teor de destreza e mente, a especialidade deste código <br>é uma ampla gama de Dádivas de luz que dão apoio nas batalhas <br>com aprimoramentos.",
        owner : "Senhor do Trovão"
      },
      
      A41 : {
        name : "Órion",
        desc : "Código de sangue de alta determinação e destreza, herdado de <br>um núcleo do Vestígio reparado.<br>Carrega a vontade de um exímio atirador, que já percorreu com <br>elegância o campo de batalha.<br><br>O código é otimizado para combate a distância, e sua alta taxa <br>de determinação confere ótimo poder de ataque para projéteis <br>de armas de fogo.",
        owner : "Desconhecido"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Impulso de Vida",
        desc : "Aumenta o máximo de PV."
      },
      
      A1 : {
        name : "Estimulante de Vida",
        desc : "Aumenta o máximo de PV."
      },
      
      A2 : {
        name : "Impulso de Vigor",
        desc : "Aumenta o máximo de vigor."
      },
      
      A3 : {
        name : "Estimulante de Vigor",
        desc : "Aumenta o máximo de vigor."
      },
      
      A4 : {
        name : "Corredor",
        desc : "Reduz o vigor drenado por correr."
      },
      
      A5 : {
        name : "Presas Afiadas",
        desc : "Aumenta o dano causado por uma drenagem<br>especial realizada após aparar / atacar por trás."
      },
      
      A6 : {
        name : "Presa Tenaz",
        desc : "Aumenta o dano causado por ataques de<br>drenagem realizados após lançar ataque."
      },
      
      A7 : {
        name : "Presa Heroica",
        desc : "Aumenta o dano causado pordrenagem carregada."
      },
      
      A8 : {
        name : "Destruição Ligeira",
        desc : "Aumenta o dano causado em proporção a sua mobilidade."
      },
      
      A9 : {
        name : "Instinto de Sobrevivência",
        desc : "Impulsiona habilidades das Dádivas e o ataque das armas<br>e do dreno quando seus PV forem uma certa quantia."
      },
      
      A10 : {
        name : "Evasão Sagaz",
        desc : "Aumenta a quantidade de foco obtida ao<br>se esquivar de ataques."
      },
      
      A11 : {
        name : "Foco Resiliente",
        desc : "Aumenta a quantidade de foco obtida ao<br>receber dano."
      },
      
      A12 : {
        name : "Aumento de Taxa de Drenagem de Arma",
        desc : "Aumenta a taxa de drenagem dos ataques<br>com arma."
      },
      
      A13 : {
        name : "Cobiça",
        desc : "Aumenta a quantidade de sangue negro obtido ao<br>drenar ataques."
      },
      
      A14 : {
        name : "Voto do Sangue Negro",
        desc : "Reduz o máximo de PV para aumentar a quantidade de<br>sangue negro."
      },
      
      A15 : {
        name : "Impulso de Sangue Negro Máximo",
        desc : "Aumenta a quantia máxima de sangue negro que<br>pode ser acumulada."
      },
      
      A16 : {
        name : "Velocidade de Dádiva Aumentada",
        desc : "Aumenta a velocidade das suas Dádivas."
      },
      
      A17 : {
        name : "Acelerador de Carga",
        desc : "Aumenta a velocidade das suas ações carregadas."
      },
      
      A18 : {
        name : "Acúmulo de Penalidade",
        desc : "Aumenta o acúmulo de penalidade contra inimigos."
      },
      
      A19 : {
        name : "Ambição da Aparição",
        desc : "Permite que você equipe armas mais pesadas<br>e véus de sangue."
      },
      
      A20 : {
        name : "Oportunismo",
        desc : "Aumenta o dano que a arma causa contra<br>inimigos com enfermidades."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Ímpeto de Sangue",
        desc : "Aumenta limite máx. de sangue negro. Diminui<br>poder e taxa de rest. de vigor e Dádivas."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Mais Equilíbrio",
        desc : "Aumenta o equilíbrio."
      },
      
      B1 : {
        name : "Aparar Habilidoso",
        desc : "Restaura completamente o vigor quando você apara<br>um ataque."
      },
      
      B2 : {
        name : "Aumento de Taxa de Drenagem em Defesa",
        desc : "Aumenta a taxa de drenagem ao se<br>defender de um ataque inimigo."
      },
      
      B3 : {
        name : "Aguentar Firme",
        desc : "Ao receber um dano fatal quando você está com uma<br>certa quantia de PV irá deixar você com 1 PV.",
        usage_req : "Atlas Códigos de Sangue"
      },
      
      B4 : {
        name : "Tomada de Sangue",
        desc : "Esquivar dos ataques inimigos drena o sangue negro deles<br>de acordo com a taxa de drenagem da sua arma.",
        usage_req : "Ártemis Códigos de Sangue"
      },
      
      B5 : {
        name : "Armadilha Evasiva",
        desc : "Desviar dos ataques inimigos gera projéteis,<br>ao custo de sangue negro, que atacam o inimigo.",
        usage_req : "Hefesto Códigos de Sangue"
      },
      
      B6 : {
        name : "Resist. a veneno",
        desc : "Aumenta a resistência a veneno."
      },
      
      B7 : {
        name : "Resist. a atordoamento",
        desc : "Aumenta a resistência a atordoamento."
      },
      
      B8 : {
        name : "Resist. a inibição",
        desc : "Aumenta a resistência a inibição."
      },
      
      B9 : {
        name : "Resist. a lentidão",
        desc : "Aumenta a resistência a lentidão."
      },
      
      B10 : {
        name : "Resist. a vazamento",
        desc : "Aumenta a resistência a vazamento."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Mais Força",
        desc : "Aumenta a força."
      },
      
      C1 : {
        name : "Mais Destreza",
        desc : "Aumenta a destreza."
      },
      
      C2 : {
        name : "Mais Mente",
        desc : "Aumenta a mente."
      },
      
      C3 : {
        name : "Mais Determinação",
        desc : "Aumenta a determinação."
      },
      
      C4 : {
        name : "Mais Vitalidade",
        desc : "Aumenta a vitalidade."
      },
      
      C5 : {
        name : "Mais Coragem",
        desc : "Aumenta a coragem."
      },
      
      C6 : {
        name : "Mais Força / Destreza",
        desc : "Aumenta força e destreza."
      },
      
      C7 : {
        name : "Mais Força / Determinação",
        desc : "Aumenta força e determinação."
      },
      
      C8 : {
        name : "Mais Força / Vitalidade",
        desc : "Aumenta força e vitalidade."
      },
      
      C9 : {
        name : "Mais Destreza / Determinação",
        desc : "Aumenta a destreza e determinação."
      },
      
      C10 : {
        name : "Mais Destreza / Coragem",
        desc : "Aumenta a destreza e coragem."
      },
      
      C11 : {
        name : "Mais Determinação/Mente",
        desc : "Aumenta a mente e a determinação."
      },
      
      C12 : {
        name : "Mais Vitalidade/Mente",
        desc : "Aumenta a mente e a vitalidade."
      },
      
      C13 : {
        name : "Mais Coragem/Mente",
        desc : "Aumenta a mente e a coragem."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Mais Força/Coragem",
        desc : "Aumenta força e coragem."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Mais Determinação/Vitalidade",
        desc : "Aumenta determinação e vitalidade."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Mais Destreza/Mente",
        desc : "Aumenta a destreza e mente."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : " Impulso Sombrio",
        desc : "Aumenta o efeito de Dádivas escuras enquanto<br>você estiver focado."
      },
      
      D1 : {
        name : " Impulso Claro",
        desc : "Aumenta o efeito de Dádivas da luz enquanto<br>você estiver focado."
      },
      
      D2 : {
        name : " Estabilidade de Defesa",
        desc : "Reduz o consumo de vigor ao se defender<br>enquanto você está focado."
      },
      
      D3 : {
        name : " Defesa Focada",
        desc : "Aumenta a defesa da arma contra ataques<br>físicos enquanto em foco."
      },
      
      D4 : {
        name : " Uso de Vigor em Foco",
        desc : "Reduz o vigor gasto enquanto você está focado."
      },
      
      D5 : {
        name : " Foco Conservado",
        desc : "Reduz a velocidade em que o medidor de foco é<br>consumido com o tempo enquanto você está focado."
      },
      
      D6 : {
        name : " Carnificina Focada",
        desc : "Reduz a velocidade em que o medidor de foco é<br>consumido pelos ataques enquanto você está focado."
      },
      
      D7 : {
        name : " Ataques de Sangue Negro",
        desc : "Reduz o custo em sangue negro dos ataques de arma<br>enquanto você estiver em foco."
      },
      
      D8 : {
        name : " Redução de Sangue Negro",
        desc : "Reduz o consumo de sangue negro enquanto você está<br>focado.",
        usage_req : "Garganta da Rainha Códigos de Sangue"
      },
      
      D9 : {
        name : " Impulso de Drenagem",
        desc : "Aumenta todas as taxas de drenagem enquanto você está<br>focado."
      },
      
      D10 : {
        name : " Velocidade de Dádiva em Foco",
        desc : "Aumenta a velocidade das suas Dádivas enquanto<br>você estiver focado."
      },
      
      D11 : {
        name : " Vantagem de Sangue",
        desc : "Adiciona dano de sangue à sua arma atual<br>enquanto você está focado."
      },
      
      D12 : {
        name : " Vantagem de Fogo",
        desc : "Adiciona dano de fogo à sua arma atual<br>enquanto você está focado."
      },
      
      D13 : {
        name : " Vantagem de Gelo",
        desc : "Adiciona dano de gelo à sua arma atual<br>enquanto você está focado."
      },
      
      D14 : {
        name : " Vantagem de Eletricidade",
        desc : "Adiciona dano de eletricidade à sua arma atual<br>enquanto você está focado."
      },
      
      D15 : {
        name : " Veneno Focado",
        desc : "Aplica o efeito de veneno na sua<br>arma atual enquanto focado."
      },
      
      D16 : {
        name : " Vantagem de Atordoamento",
        desc : "Aplica um efeito de atordoamento à sua arma<br>atual enquanto você está focado."
      },
      
      D17 : {
        name : " Sorriso da Deusa",
        desc : "Restaura PV quando você entra em estado de foco."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : " Foco de Sangue Negro",
        desc : "Restaura o sangue negro quando você entra em estado de foco."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : " Mais Atributos (Todos)",
        desc : "Aumenta todos os atributos enquanto você estiver focado."
      },
      
      D20 : {
        name : " Poder de Parada",
        desc : "Aumenta a perda de equilíbrio dos inimigos com<br>os disparos de baioneta enquanto você estiver focado."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "Domínio de Espada de Uma Mão",
        desc : "Aumenta o poder de ataque quando equipado com uma<br>espada de uma mão."
      },
      
      E1 : {
        name : "Domínio de Espada de Duas Mãos",
        desc : "Aumenta o poder de ataque quando equipado com uma<br>espada de duas mãos."
      },
      
      E2 : {
        name : "Maestria de Alabarda",
        desc : "Aumenta o poder de ataque quando equipado com uma<br>alabarda."
      },
      
      E3 : {
        name : "Maestria de Martelo",
        desc : "Aumenta o poder de ataque quando equipado com um<br>martelo grandioso."
      },
      
      E4 : {
        name : "Maestria de Baioneta",
        desc : "Aumenta o poder de ataque quando equipado com uma<br>baioneta."
      },


      // # MISC #
      F0 : {
        name : "Alteração de Regeneração",
        desc : "Reduz o número de vezes que a regeneração pode<br>ser usada, mas aumenta a quantia curada."
      },
      
      F1 : {
        name : "Regeneração Melhorada",
        desc : "Aumenta a quantidade de PV curados por<br>habilidades regenerativas."
      },
      
      F2 : {
        name : "Regeneração Aprimorada",
        desc : "Aumenta o número de vezes que a regeneração<br>pode ser usada."
      },
      
      F3 : {
        name : "Portador da Luz",
        desc : "Restaura seu poder regenerativo quando seu<br>companheiro atinge zero PV e se dispersa.",
        usage_req : "Astrea Códigos de Sangue"
      },
      
      F4 : {
        name : "Roubo de Vida",
        desc : "Restaura PV ao derrotar inimigos."
      },
      
      F5 : {
        name : "Dreno Regenerativo",
        desc : "Faz os ataques de drenagem recuperarem PV."
      },
      
      F6 : {
        name : "Dança das Lâminas Eternas",
        desc : "Uma versão melhorada de Dança das Lâminas. Aumenta<br>o poder de ataque quando você se esquiva de ataques inimigos.",
        usage_req : "Prometeu Códigos de Sangue"
      },
      
      F7 : {
        name : "Veneno Drenador de Sangue",
        desc : "Recebe sangue negro quando inimigos dentro de um certo<br>raio sofrem danos de veneno.",
        usage_req : "Notívago Códigos de Sangue"
      },
      
      F8 : {
        name : "Fome da Aparição",
        desc : "Aumenta a quantidade de bruma obtida ao<br>derrotar inimigos."
      },
      
      F9 : {
        name : "Ganância da Aparição",
        desc : "Aumenta as chances de obter itens de<br>inimigos derrotados."
      },
      
      F10 : {
        name : "Orientação do Pioneiro",
        desc : "Torna mais fácil dominar as Dádivas."
      },
      
      F11 : {
        name : "Redução de Dano de Queda",
        desc : "Reduz o dano recebido por quedas."
      },
      
      F12 : {
        name : "Livramento",
        desc : "Quando um aliado toma dano fatal, seus PV são<br>reduzidos a 1 e você recebe o restante<br>do dano. Esse efeito só é ativado se<br>você tiver 2 ou mais PV. O dano que você<br>recebe não pode reduzir seus PV a 0.",
        usage_req : "Ishtar Códigos de Sangue"
      },
      
      F13 : {
        name : "Tolerância",
        desc : "Aumenta a taxa de regeneração do seu vigor."
      },
      
      F14 : {
        name : "Sustento",
        desc : "Aumenta a taxa de regeneração à medida<br>que você coleta bruma após a dispersão."
      },
      
      F15 : {
        name : "Adaga da Aparição",
        desc : "Jogue uma faca que concede sangue negro<br>ao acertar o inimigo."
      },
      
      F16 : {
        name : "Atenção Total",
        desc : "Acertos com a drenagem no máximo concedem<br>foco."
      },
      
      F17 : {
        name : "Carisma",
        desc : "Aumenta os atributos do parceiro (não se aplica ao jogador)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Seta Sônica",
        desc : "Dispara um projétil criado com sangue negro.<br>Uma única saraivada não é muito impressionante, mas<br>mostra o seu valor contra um grupo de inimigos."
      },
      
      A1 : {
        name : "Disparo de Sangue",
        desc : "Dispara um projétil grande criado com o poder<br>do sangue. Esta versão melhorada da<br>Seta Sônica causa muito mais impacto."
      },
      
      A2 : {
        name : "Rugido Sanguíneo",
        desc : "Gera um projétil de sangue podre que voa para o alvo.<br><br>Um acerto direto atravessa a carne e<br>deixa uma ferida que causa dor constante<br>à vítima."
      },
      
      A3 : {
        name : "Rugido Flamejante",
        desc : "Dispara uma chama intensa no alvo.<br>Dizem que aqueles atingidos por esse ataque<br>queimam tão completamente que tudo o que resta<br>no final é uma sombra."
      },
      
      A4 : {
        name : "Rugido Congelante",
        desc : "Dispara um projétil de gelo congelante no<br>alvo.<br>Um golpe direto extrai o calor da vítima,<br>impedindo seus pensamentos e obstruindo seu<br>julgamento."
      },
      
      A5 : {
        name : "Rugido de Plasma",
        desc : "Gera uma explosão de eletricidade que voa<br>para o alvo.<br>Um gole direto ferve o sangue da vítima,<br>criando dor intensa."
      },
      
      A6 : {
        name : "Estaca de Sangue",
        desc : "Dispara um projétil de sangue negro lancinante no<br>alvo.<br>A força criada é altamente concentrada<br>e esmaga os inimigos como uma bola de canhão."
      },
      
      A7 : {
        name : "Estaca de Fogo",
        desc : "Dispara um projétil de chama ardente no<br>alvo.<br>A força criada é altamente concentrada<br>e esmaga os inimigos como uma bola de canhão."
      },
      
      A8 : {
        name : "Estaca de Gelo",
        desc : "Dispara um projétil de gelo congelante no<br>alvo. A força criada é altamente concentrada<br>e esmaga os inimigos como uma bola de canhão."
      },
      
      A9 : {
        name : "Estaca de Eletricidade",
        desc : "Dispara um projétil de eletricidade crepitante<br>no alvo.<br>A força criada é altamente concentrada<br>e esmaga os inimigos como uma bola de canhão."
      },
      
      A10 : {
        name : "Barragem de Sangue",
        desc : "Dispara uma série de projéteis de sangue que<br>bombardeiam os inimigos numa área larga.<br><br>Embora falte poder para esta habilidade, os disparos<br>contínuos a tornam ideal para suprimir o inimigo."
      },
      
      A11 : {
        name : "Barragem de Chamas",
        desc : "Dispara uma série de projéteis de fogo que<br>bombardeiam os inimigos numa área larga.<br><br>Embora falte poder para esta habilidade, os disparos<br>contínuos a tornam ideal para suprimir o inimigo."
      },
      
      A12 : {
        name : "Barragem de Gelo",
        desc : "Dispara uma série de projéteis de gelo que<br>bombardeiam os inimigos numa área larga.<br><br>Embora falte poder para esta habilidade, os disparos<br>contínuos a tornam ideal para suprimir o inimigo."
      },
      
      A13 : {
        name : "Barragem de Eletricidade",
        desc : "Dispara uma série de projéteis elétricos que<br>bombardeiam os inimigos numa área larga.<br><br>Embora falte poder para esta habilidade, os disparos<br>contínuos a tornam ideal para suprimir o inimigo."
      },
      
      A14 : {
        name : "Massa de Vodnik",
        desc : "Lança sangue concentrado para destruir inimigos.<br>O sangue amaldiçoado dos mortos condena suas<br>vítimas para o inferno."
      },
      
      A15 : {
        name : "Fogueira de Valburga",
        desc : "Usa de controle preciso do fluxo de sangue para liberar<br>um fogaréu poderoso.<br>As aparições sem fé na sua força<br>não deveriam usar técnicas avançadas. O<br>poder irá colapsar em um usuário distraído<br>e o destruir."
      },
      
      A16 : {
        name : "Olhar da Baba Yaga",
        desc : "Usa de controle preciso do fluxo de sangue para liberar<br>uma poderosa onda de frio.<br>Alguém que se dispersa enquanto uma parte do corpo<br>está congelada não pode regenerar essa parte até<br>que descongele. Essa falha é, às vezes, explorada<br>para interrogação."
      },
      
      A17 : {
        name : "Raiva de Perkunas",
        desc : "Usa de controle preciso do fluxo de sangue para liberar<br>um choque poderoso.<br>A morte é a única escapatória da ira de<br>um deus zangado."
      },
      
      A18 : {
        name : "Lâmina Crepuscular",
        desc : "Usa sangue negro para criar uma lâmina de sangue e<br>brandi-la em um arco que arrebata os inimigos<br>na sua frente.<br>Uma linha de sangue é traçada pelo céu no<br>crepúsculo, transformando-se em uma lâmina letal que<br>destrói os oponentes."
      },
      
      A19 : {
        name : "Lua Carmesim",
        desc : "Usa sangue negro para criar uma lâmina flamejante e<br>brandi-la em um arco que arrebata os inimigos<br>na sua frente.<br>Uma lua vermelha paira sinistramente no céu noturno.<br>Dizem que qualquer um que presenciá-la<br>sofrerá um grande infortúnio."
      },
      
      A20 : {
        name : "Flash da Aurora",
        desc : "Usa sangue negro para criar uma lâmina congelante e<br>brandi-la em um arco que arrebata os inimigos<br>na sua frente.<br>Uma linha de sangue no ar se transforma em uma<br>espada de gelo. A luz dança através dela, como<br>um prisma, distraindo os inimigos, cujo sangue<br>em breve a manchará."
      },
      
      A21 : {
        name : "Lâmina de Júpiter",
        desc : "Usa sangue negro para criar uma lâmina de eletricidade<br>e brandi-la em um arco que arrebata<br>os inimigos na sua frente.<br>Quando a vítima abre seus olhos depois de ser<br>cegada pelo flash, percebe que já está<br>quase morta."
      },
      
      A22 : {
        name : "Execução",
        desc : "Cria uma espada gigante com a sua resolução<br>indomável que cai como uma guilhotina no<br>inimigo.<br>Aqueles que enfrentam essa lâmina percebem<br>uma verdade inegável. Seria mais simples aceitá-la<br>do que continuar a lutar."
      },
      
      A23 : {
        name : "Tempestade de Fogo",
        desc : "Dispara uma série de projéteis flamejantes que<br>enfraquecem o inimigo.<br>Embora cada bala não tenha muito poder individualmente,<br>seu volume bruto é suficiente para dominar até mesmo<br>os inimigos mais resistentes."
      },
      
      A24 : {
        name : "Raio Explosivo",
        desc : "Cria e dispara uma série de projéteis<br>infundidos de eletricidade no seu alvo.<br>O raio escava a terra e<br>nenhuma armadura pode impedi-lo de ir até o fim."
      },
      
      A25 : {
        name : "Guarda de Honra",
        desc : "Gera diversos pilares de gelo que<br>bombardeiam o alvo implacavelmente.<br>Quando um lado pode atacar repetidamente<br>com uma única ação e o outro precisa<br>desviar desses ataques sem falhar, o vencer<br>é óbvio."
      },
      
      A26 : {
        name : "Ataque Dançante",
        desc : "Dispara uma bala que ricocheteia.<br>Ninguém sabe para que lado a bala pode<br>quicar, mas isso pode ser útil para pegar<br>inimigos imprevisíveis."
      },
      
      A27 : {
        name : "Estaca Dracônica",
        desc : "Transforma o seu sangue em uma estaca gigante<br>que perfura o alvo.<br>Essa técnica é rápida e poderosa.<br>Dizem que aqueles que caem com seu corte são<br>enviados diretamente para as chamas do<br>submundo."
      },
      
      A28 : {
        name : "Ataque do Indra",
        desc : "Dispara três raios poderosos nos pés<br>do seu alvo.<br><br>Essa técnica vaporiza instantaneamente o sangue<br>daqueles que forem desafortunados o bastante para receber<br>um golpe direto, e os explode de dentro<br>para fora."
      },
      
      A29 : {
        name : "Veredito Quadruplicado",
        desc : "Dispara uma barragem de balas de raios<br>implacável no alvo.<br>Aqueles considerados culpados pelo olhar divino nunca poderão<br>escapar da sua punição. Esta dádiva não pode ser<br>usada novamente até que a raiva sagrada diminua."
      },
      
      A30 : {
        name : "Contrato Ancião",
        desc : "Dispara sangue concentrado no chão,<br>o que faz um pilar de sangue se erguer<br>debaixo do seu alvo.<br>Embora esta Dádiva potente seja difícil de<br>aprender, quando usada corretamente, é uma aliada<br>valiosa."
      },
      
      A31 : {
        name : "Gelo de Sangue Negro",
        desc : "Condensa sangue negro e o converte em poderosos<br>estilhaços de gelo que são atirados no inimigo.<br>A quantidade de energia necessária para esta Dádiva<br>dá um grande fardo à aparição que a usa,<br>tornando impossível usá-la sem uma relíquia<br>como catalisador."
      },
      
      A32 : {
        name : "Crepúsculo",
        desc : "Dispara um laser amplo que perfura qualquer<br>coisa na sua frente.<br>Quando a luz desaparecer, nem mesmo uma<br>poeirinha permanecerá. Tudo estará desintegrado.",
        usage_req : "Tórax da Rainha Códigos de Sangue"
      },
      
      A33 : {
        name : "Lírio de Fogo",
        desc : "Dispara uma lâmina ágil. Um curto período após<br>grudar em algo, ela explode. Inimigos não são os<br>únicos alvos dessa técnica. Usuários experientes<br>arremessam lâminas em paredes ou no chão para<br>agir como armadilhas."
      },
      
      A34 : {
        name : "Lâmina Arenosa",
        desc : "Cria uma lâmina de areia altamente pressurizada<br>no chão que empurra inimigos.<br><br>Esta técnica peculiar corrói o chão com<br>sangue negro e cria uma lâmina de partículas<br>que parecem areia. Pela dificuldade de<br>alterar substâncias rapidamente, muita<br>habilidade é necessária para usar esta Dádiva."
      },
      
      A35 : {
        name : "Tempestade Volátil",
        desc : "Cria lâminas de areia que convergem no<br>alvo e explodem.<br><br>Esta enorme explosão é gerada ao focar<br>diversas fontes de pressão em um único<br>ponto. Tentar escapar de uma tempestade de areia<br>assim seria extremamente difícil,<br>sem dúvida."
      },
      
      A36 : {
        name : "Braço de Set",
        desc : "Cria um braço de areia nos pés do alvo<br>que esmaga o inimigo.<br><br>Não há escapatória desta armadilha<br>de areia; suas camadas de areia comprimida<br>a tornam mais forte que o aço e<br>indestrutível."
      },
      
      A37 : {
        name : "Areias da Depravação",
        desc : "Cria uma tempestade de areia em volta do alvo.<br><br>Veteranos do campo de batalha sabem que nunca devem<br>baixar sua guarda, pois não há como<br>saber qual mal sedento por sangue tem você<br>em sua mira no momento."
      },
      
      A38 : {
        name : "Cinzas Caóticas",
        desc : "Dispara um projétil de drenagem que rouba o<br>sangue negro do alvo.<br>Os fracos são sangue que se torna a<br>carne dos fortes. Não é roubo,<br>é apenas o uso de um recurso pelo<br>futuro das aparições."
      },
      
      A39 : {
        name : "Espinho do Expurgo",
        desc : "Cria um espinho gigante no ar que<br>perfura o alvo.<br>Incontáveis aparições morreram para esses<br>espinhos no campo de batalha e o medo que eles inspiram<br>continua atual como sempre."
      },
      
      A40 : {
        name : "Cruz Argêntea do Lobo",
        desc : "Dispara uma lâmina de sangue em forma de<br>cruz no alvo.<br>Uma técnica de assalto já usada pelo<br>líder dos Lobos Argênteos, reza a lenda que<br>a cruz de sangue representa uma prece pelos<br>mortos. É irônico que essa Dádiva<br>seja tão friamente eficaz ao cortar<br>o alvo em quatro pedaços."
      },
      
      A41 : {
        name : "Salto das Sombras",
        desc : "Libera uma onda de choque ao seu redor, depois<br>transporta você instantaneamente para trás.<br>Esta Dádiva funciona dispersando o corpo e<br>o remontando imediatamente.",
        usage_req : "Ísis Códigos de Sangue"
      },
      
      A42 : {
        name : "Impacto Sangrento",
        desc : "Explode os inimigos em uma área com uma onda de choque<br>causada pela liberação repentina de sangue negro<br>condensado.<br>Dano não é o ponto forte dessa Dádiva, mas<br>ela pode ser usada para aumentar ou reduzir distância<br>e, quando combinada com o uso do terreno, pode<br>mudar o resultado de uma batalha."
      },
      
      A43 : {
        name : "Manto Invernal",
        desc : "Congela tudo por perto com uma<br>nevasca ártica.<br>Nenhum inimigo consegue aguentar o frio e o vento<br>criados. Todos são nocauteados e deixados<br>desamparados."
      },
      
      A44 : {
        name : "Clarão de Peônia",
        desc : "Ativa uma explosão gigante que envolve os<br>inimigos na área.<br><br>Poucos escapam de uma explosão próxima<br>intactos, especialmente quando<br>atraídos para seu ponto de<br>detonação.",
        usage_req : "Scathach Códigos de Sangue"
      },
      
      A45 : {
        name : "Fogo Fátuo",
        desc : "Dispara um projétil de sangue negro em um<br>arco que cobre sua retaguarda.<br>Embora essa Dádiva cause pouco dano, a<br>confusão que ela cria a torna altamente<br>valiosa."
      },
      
      A46 : {
        name : "Reversão de Brasa",
        desc  : "Dispara um projétil flamejante em um arco<br>que cobre a retaguarda do usuário.<br>Esta Dádiva não leva quase tempo algum para preparar,<br>então quando os inimigos enxergarem as chamas,<br>eles já estarão pegando fogo."
      },
      
      A47 : {
        name : "Explosão de Desespero",
        desc : "Dádiva arriscada que solta uma enorme<br>quantidade de energia armazenada dentro<br>de si, causando muito dano à área ao seu<br>redor, mas deixando você à beira da morte.<br>Esta técnica só pode ser usada por<br>aparições que conquistaram o seu medo<br>de morrer. O espetáculo funesto assombra<br>a todos que o vislumbram."
      },
      
      A48 : {
        name : "Chama da Rosa",
        desc : "Espalha bombas de fogo que explodem após um<br>curto período, causando dano a qualquer coisa na área.<br>Quando cercado e sem escapatória, a<br>única coisa que você pode fazer é rezar pra ter uma<br>ideia. É uma situação que você deve<br>tentar evitar."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Fogo Infernal Guiado",
        desc : "Dispara um vórtice ameaçador de fogo que persegue o alvo.<br><br>O turbilhão de fogo persegue o alvo como se tivesse vida <br>própria. O Perdido na mira é engolido pelas chamas, sem <br>ter como escapar."
      },
      
      A50 : {
        name : "Lâmina de Fogo Dançante",
        desc : "Invoca uma lâmina flamejante que gira em <br>torno do seu corpo.<br>Uma lâmina de fogo gira em alta velocidade <br>ao redor do portador, cortando sem misericórdia <br>tudo que se aproximar."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Corrente de Geada",
        desc : "Dispara raios congelantes de luz em todas as direções, <br>varrendo os inimigos no caminho.<br>A corrente de geada congela tudo o que toca, <br>espalhando-se em todas as direções e cercando os <br>atacantes no abraço gélido da morte.<br>Como técnica tirada do código de sangue da Imperatriz <br>e desenvolvida a partir do seu poder, esta Dádiva exige <br>muito do usuário."
      },
      
      A52 : {
        name : "Torre Gélida",
        desc : "Cria uma massa gélida condensada que dispara <br>estilhaços de gelo periodicamente.<br><br>Embora os estilhaços disparados não sejam nada <br>letais, o dano acumulado contribui e muito para <br>a vitória."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Pancada Meteórica",
        desc : "Cria rochas flamejantes sobre sua cabeça e que caem <br>sobre o inimigo como uma chuva de meteoros.<br><br>A queda das rochas pode parecer uma chuva de meteoros, <br>mas poucos Perdidos conseguiriam sobreviver ao serem <br>atingidos por uma rocha flamejante."
      },
      
      A54 : {
        name : "Onda de Gelo",
        desc : "Convoca um ar gélido que se espalha pelo chão.<br><br>Quem se aproximar com hostilidade será detido<br>por esta onda congelante."
      },
      
      A55 : {
        name : "Campo de Sede",
        desc : "Cria um campo que drena periodicamente o sangue <br>negro dos inimigos dentro dele.<br>O campo permite que você drene sangue negro dos <br>Perdidos sem se aproximar deles.<br>Até uma pequena quantidade de sangue negro pode <br>fazer a diferença entre a vida e a morte. Esta armadilha <br>é ideal para tentar mudar o rumo da batalha com Dádivas."
      },
      
      A56 : {
        name : "Impacto Elétrico",
        desc : "Salte do solo e aterrisse numa explosão elétrica.<br>Embora o ataque exija tempo para focar eletricidade <br>no punho do usuário, o poder resultante é arrebatador.<br><br>Esta Dádiva usa a eletricidade do Senhor do Trovão, que <br>flui pelo corpo do usuário e pode transformar uma <br>aparição inferior em cinzas na mesma hora."
      },


      // # DEBUFFS #
      B0 : {
        name : "Disparo Venenoso",
        desc : "Dispara um projétil no seu alvo que<br>causa envenenamento.<br>Esta bala atinge a partir das sombras,<br>gerando pânico nas vítimas quando<br>sorve a vida delas após acertar."
      },
      
      B1 : {
        name : "Disparo Atordoante",
        desc : "Dispara um projétil no seu alvo que<br>causa atordoamento.<br>Esta bala atinge a partir das sombras,<br>gerando pânico nas vítimas quando<br>sorve a liberdade delas após acertar."
      },
      
      B2 : {
        name : "Disparo de Lentidão",
        desc : "Dispara um projétil no seu alvo que<br>causa lentidão.<br>Esta bala atinge a partir das sombras,<br>gerando pânico nas vítimas quando<br>sorve o movimento delas após acertar."
      },
      
      B3 : {
        name : "Teia Venenosa",
        desc : "Joga sangue negro tratado no chão para criar uma armadilha<br>que envenena os inimigos que pisarem nela.<br>A técnica detecta o sangue dos<br>assaltantes e afeta apenas os oponentes do<br>usuário."
      },
      
      B4 : {
        name : "Teia Atordoante",
        desc : "Joga sangue negro tratado no chão para criar uma armadilha<br>que atordoa os inimigos que pisarem nela.<br>Todas as Dádivas foram criadas com a sobrevivência<br>em mente. Quando uma grande ameaça aparece, use esse<br>poder e corra sem olhar para trás."
      },
      
      B5 : {
        name : "Teia Desacelerante",
        desc : "Joga no chão sangue negro tratado para criar uma armadilha<br>que desacelera o movimento dos inimigos que pisarem nela.<br><br>As aparições mais habilidosas podem forçar sua resolução no<br>sangue negro e ter a imaginação clara para guiá-lo.<br>O primeiro passo para o poder, é entender a si mesmo."
      },
      
      B6 : {
        name : "Teia de Choque",
        desc : "Manipula o sangue negro para criar uma armadilha fraca<br>aos seus pés que enfraquece os assaltantes.<br><br>A desilusão é mais eficaz quando executada<br>rápida e completamente; até mesmo uma fração<br>de suspeita no coração pode<br>criar medo e inquietude indescritíveis."
      },
      
      B7 : {
        name : "Chamas da Raiva",
        desc : "Manipula sangue negro para criar uma armadilha aos seus<br>pés que imola os assaltantes com uma camada<br>de fogo.<br>A necessidade de reduzir os Perdidos a cinzas<br>resultou em muitos experimentos. Não se obteve<br>sucesso nem mesmo queimando as criaturas repetidamente<br>quando reviviam."
      },
      
      B8 : {
        name : "Armadilha Venenosa",
        desc : "Espalha sangue negro na área, criando uma armadilha<br>de veneno que devora os assaltantes.<br>A Unidade de Segurança Cérbero inventou<br>diversas Dádivas, muitas delas com<br>efeitos indiretos."
      },
      
      B9 : {
        name : "Armadilha Atordoante",
        desc : "Espalha sangue negro na área, criando uma armadilha<br>que atordoa os assaltantes.<br>A Unidade de Segurança Cérbero inventou<br>diversas Dádivas, muitas delas com<br>efeitos indiretos."
      },
      
      B10 : {
        name : "Armadilha de Lentidão",
        desc : "Espalha sangue negro na área, criando uma armadilha<br>que desacelera os assaltantes.<br>A Unidade de Segurança Cérbero inventou<br>diversas Dádivas, muitas delas com<br>efeitos indiretos."
      },
      
      B11 : {
        name : "Fogo Frenético",
        desc : "Dispara um projétil que reduz o<br>medidor de foco do inimigo.<br>Portas não se abrem para aqueles que ficam parados<br>esperando. Avance e abra-as você mesmo."
      },


      // # BUFFS #
      C0 : {
        name : "Arma de Sangue",
        desc : "Adiciona dano de sangue temporário às armas<br>atuais, suas e de seu parceiro.<br><br>Para as aparições, o sangue é uma fonte de<br>nutrientes; uma armadura que protege<br>contra ameaças e uma lâmina capaz de<br>destruir obstáculos. Todas as aparições buscam<br>dominar o sangue."
      },
      
      C1 : {
        name : "Arma Flamejante",
        desc : "Adiciona dano de fogo temporário às armas<br>atuais, suas e de seu parceiro.<br><br>Ferimentos causados por lâminas flamejantes<br>curam lentamente, até mesmo em aparições."
      },
      
      C2 : {
        name : "Arma Congelante",
        desc : "Adiciona dano de gelo temporário às armas<br>atuais, suas e de seu parceiro.<br><br>Quando a ferida é imediatamente congelada,<br>a dispersão é reduzida e o inimigo sente dor<br>por mais tempo."
      },
      
      C3 : {
        name : "Arma Elétrica",
        desc : "Adiciona dano elétrico temporário às armas<br>atuais, suas e de seu parceiro.<br><br>Esta Dádiva é uma grande aliada e um terrível inimigo.<br>Nunca esqueça que tudo que você usa<br>pode ser usado contra você."
      },
      
      C4 : {
        name : "Marca de Veneno",
        desc : "Aplica temporariamente o efeito de veneno na sua<br>arma atual.<br>Um golpe libera uma toxina que destrói de<br>dentro para fora. O destino é certo, mas o terror<br>apenas começou."
      },
      
      C5 : {
        name : "Marca Dormente",
        desc : "Aplica temporariamente o efeito de atordoamento na sua<br>arma atual.<br>Os sentidos estão presentes, mas a liberdade foi roubada.<br>Como você lida com uma vítima cuja face está<br>envolta pelo terror? Tudo está nas mãos<br>daquele que esculpiu aquela marca."
      },
      
      C6 : {
        name : "Marca da Proteção",
        desc : "Aplica temporariamente o efeito de inibição à<br>sua arma atual.<br>A habilidade de selar Dádivas é muito<br>relevante. Estando encurralado,<br>quem sabe do que um rato seria capaz?"
      },
      
      C7 : {
        name : "Marca de Amarração",
        desc : "Temporariamente aplica efeito de lentidão à<br>sua arma atual.<br>Vítimas sob este efeito são tomadas<br>pela fadiga conforme o sangue em seus corpos<br>se torna pesado, tornando seus movimentos<br>lerdos e criando aberturas perigosas<br>em suas defesas."
      },
      
      C8 : {
        name : "Adrenalina",
        desc : "Impulsiona seu poder de ataque temporariamente.<br>Para destruir os horrores que invadiram o<br>mundo, a humanidade precisava de um poder que ia além<br>da imaginação. Em pouco tempo, as Dádivas se<br>tornaram a luz de esperança continua a iluminar<br>o caminho das aparições."
      },
      
      C9 : {
        name : "Ponte para Glória",
        desc : "Aumenta temporariamente o poder de ataque.<br>Perdidos ganham força ao<br>beber o sangue dos vivos.<br>Sabedoria, habilidade e experiência são as chaves<br>para sobreviver na prisão que é esse mundo."
      },
      
      C10 : {
        name : "Sobrecarga",
        desc : "Aumenta temporariamente o seu e o poder de ataque<br>do seu parceiro. O efeito termina quando você sofre<br>dano.<br>Essa habilidade funciona melhor quando usada para um<br>golpe preventivo contra um oponente."
      },
      
      C11 : {
        name : "Impacto a Distância",
        desc : "Aumenta temporariamente o poder de ataque de<br>disparos feitos com armas.<br>No decorrer de batalha após batalha<br>acalorada, usar energia de modo eficiente<br>torna-se cada vez mais importante. Atingir<br>inimigos à distância é um método excelente<br>de conseguir isso."
      },
      
      C12 : {
        name : "Golpe da Loucura",
        desc : "Aumenta o poder do próximo ataque.<br>Quebrar inconscientemente as amarras que prendem<br>o corpo gerando uma força que<br>vai além das barreiras psicológicas é uma<br>impossibilidade humana, mas é um belo truque para uma<br>aparição."
      },
      
      C13 : {
        name : "Presa Repentina",
        desc : "Aumenta o poder do próximo ataque.<br>Um repentino ímpeto de força pode ser obtido ao<br>condensar sangue negro e depois liberá-lo no<br>momento certo."
      },
      
      C14 : {
        name : "Ceifador Impiedoso",
        desc : "Ignora alguma defesa física do inimigo<br>e defesa de arma para o seu próximo ataque.<br>Não importa a espessura da sua armadura, o corte<br>desta lâmina não poderá ser evitado. É como a<br>foice do ceifador, entregando a morte a todos,<br>independente da circunstância."
      },
      
      C15 : {
        name : "Grito Sombrio",
        desc : "Aumenta muito a eficiência das<br>Dádivas escuras no próximo ataque.<br>Um grito de batalha restaura a vontade de ter sucesso<br>e chama a força para vencer os<br>desafios."
      },
      
      C16 : {
        name : "Dança das Lâminas",
        desc : "Aumenta temporariamente o poder de ataque cada vez que<br>você causa dano ao inimigo com sua arma.<br>Se você não buscar uma saída, você pode<br>acabar pego em planos que causam destruição<br>mútua.",
        usage_req : "Prometeu Códigos de Sangue"
      },
      
      C17 : {
        name : "Vantagem Sacrificial",
        desc : "Aumenta muito o poder de ataque, mas drena<br>PV com o tempo. O efeito termina quando os PV são<br>reduzidos a 1.<br>Um poder além da imaginação vem com um preço,<br>mas apenas aqueles dispostos a pagá-lo têm garantia<br>de vitória.",
        usage_req : "Heimdall Códigos de Sangue"
      },
      
      C18 : {
        name : "Zelo Somático",
        desc : "Aumenta temporariamente força e destreza.<br>O impulso de poder ofensivo que essa Dádiva<br>concede a torna popular entre as aparições."
      },
      
      C19 : {
        name : "Zelo Cognitivo",
        desc : "Aumenta temporariamente a mente e<br>determinação.<br><br>O impulso a Dádivas que esta técnica<br>fornece a tornou popular entre as aparições."
      },
      
      C20 : {
        name : "Precisão",
        desc : "Temporariamente torna mais fácil enfraquecer<br>os inimigos com a sua arma.<br>Uma pequena abertura pode alterar completamente uma batalha.<br>Criando essa abertura, você pode dar a si<br>uma oportunidade para garantir sua sobrevivência."
      },
      
      C21 : {
        name : "Banquete da Caça",
        desc : "Aumenta temporariamente a taxa de drenagem dos<br>ataques com arma.<br>O papel das Dádivas na batalha é<br>imensamente importante. Ao garantir<br>um suprimento consistente de sangue negro, a eficácia<br>aumenta exponencialmente."
      },
      
      C22 : {
        name : "Lâminas Sugadoras de Sangue",
        desc : "Aumenta temporariamente a taxa de drenagem dos<br>ataques com arma para você e seu parceiro.<br>Esta Dádiva melhora a eficiência dos mecanismos<br>de dreno construídos nas armas."
      },
      
      C23 : {
        name : "Proeza das Dádivas",
        desc : "Aumenta temporariamente a velocidade de Dádivas para você e<br>seu parceiro.<br>Aparições experientes que sobreviveram por tempo<br>suficiente podem usar uma miríade de Dádivas em<br>pouco tempo, enquanto avançam pelas<br>batalhas."
      },
      
      C24 : {
        name : "Extensão da Dádiva",
        desc : "Estende temporariamente os efeitos das Dádivas<br>usadas por você e seu parceiro.<br>Pode parecer uma diferença pequena, mas algumas<br>marolas podem se transformar na maré da batalha."
      },
      
      C25 : {
        name : "Acelerar",
        desc : "Usa sangue negro para impulsionar os reflexos<br>temporariamente, fortalecendo sua esquiva.<br>Essa técnica usa uma grande quantidade de sangue negro<br>e é difícil de aprender, mas o poder que ela<br>concede não pode ser negado."
      },
      
      C26 : {
        name : "Concentração",
        desc : "Reduz temporariamente o consumo de vigor. O<br>efeito termina quando você tomar dano.<br>Essa Dádiva funciona melhor quando usada para um<br>golpe preventivo contra um oponente."
      },
      
      C27 : {
        name : "Sapatos Vermelhos",
        desc : "Permite que você use PV para realizar ações<br>quando não possui mais vigor.<br><br>Aqueles que ultrapassam seus limites<br>em desespero se tornam heróis ou tolos.<br>Para ser valente de verdade, é preciso abandonar<br>a razão, até certo ponto.",
        usage_req : "Fionn Códigos de Sangue"
      },
      
      C28 : {
        name : "Coração Valente",
        desc : "Melhora a visão cinética e os reflexos,<br>reduzindo o custo de vigor por se esquivar.<br>Não importa o tamanho da ameaça, um<br>julgamento rápido e um jogo de pés podem minimizar<br>o perigo."
      },
      
      C29 : {
        name : "Impulso de Moral",
        desc : "Aumenta o vigor máximo para você e<br>seu parceiro, e restaura completamente o vigor<br>de ambos.<br>Aparições devem se manter alertas o tempo inteiro para<br>reagir a mudanças súbitas ao<br>seu redor. Para criaturas que não<br>podem descansar, essa técnica pode ser<br>considerada a maior das necessidades."
      },
      
      C30 : {
        name : "Ruptura Temporal",
        desc : "Usa sangue negro para temporariamente acelerar ações<br>carregadas.<br>Uma vantagem de tempo é um benefício enorme na<br>batalha. Um único ataque pode representar<br>a vitória com sangue."
      },
      
      C31 : {
        name : "Sangue Sobrenatural",
        desc : "Permite que sacrifique PV para usar Dádivas<br>quando não tem mais sangue negro.<br><br>O intelecto de uma aparição, no que tange<br>ao uso de Dádivas poderosas, pode<br>impressionar. Se você sacrificar sua carne e<br>sangue desta maneira, tome cuidado para<br>não causar sua própria ruína.",
        usage_req : "Harmonia Códigos de Sangue"
      },
      
      C32 : {
        name : "Onda de Impacto",
        desc : "Adiciona temporariamente um efeito de onda de choque para<br>atacar e causar dano adicional.<br>Essa Dádiva exige algum talento para ser adquirida,<br>mas é uma verdadeira bênção."
      },
      
      C33 : {
        name : "Jornada Final",
        desc : "Coloca seu poder regenerativo em um frenesi<br>que leva à morte. Restaura imediatamente<br>todos os PV e aumenta todas as habilidades, mas<br>mata você após um determinado<br>tempo.<br>Aparições são quase imortais, mas<br>dispersar tem um preço alto. Lembre-se<br>de pegar algo que vale o custo.",
        usage_req : "Regicida Códigos de Sangue"
      },
      
      C34 : {
        name : "Zelo Vigoroso",
        desc : "Aumenta temporariamente a coragem e a vitalidade.<br><br>Embora as aparições possam voltar à vida repetidas vezes, <br>com PV alto e uma boa reserva de vigor, elas não terão motivo <br>para temer a morte."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Ordem Ofensiva",
        desc : "Reduz temporariamente sua defesa e aumenta o seu <br>poder de ataque, assim como o do seu parceiro.<br><br>Sacrificar sua própria segurança permite que você <br>aumente o poder de ataque dos seus aliados <br>instantaneamente."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Eficiência de Sangue Negro",
        desc : "Reduz o custo de sangue negro de ataques de <br>armas por tempo limitado. Há quem preste <br>atenção ao sangue negro ao lutar e há quem <br>não se importe muito, mas uma coisa é <br>certa: um pode sobreviver mais do que o outro."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Vontade de Ferro",
        desc : "Reduz temporariamente o dano sofrido tecendo<br>uma barreira no seu sangue.<br>Evitar até mesmo a menor das feridas pode<br>aumentar muito suas chances de sobrevivência."
      },
      
      D1 : {
        name : "Barreira de Sangue Podre",
        desc : "Cria uma barreira que reduz muito o dano<br>a você e seu parceiro de um ataque<br>ao condensar o sangue negro ao seu limite absoluto.<br>Até mesmo um escudo temporário pode fornecer uma<br>vantagem psicológica que levará à vitória."
      },
      
      D2 : {
        name : "Sangue Ablativo",
        desc : "Faz, temporariamente, o dano recebido ser<br>muito reduzido pelo custo de sangue negro.<br>O usuário deve se lembrar que o sangue negro é o que<br>o mantém vivo. A morte espera por alguém que<br>esquece de encontrar uma rota de fuga.",
        usage_req : "Eos Códigos de Sangue"
      },
      
      D3 : {
        name : "Colosso",
        desc : "Aumenta o equilíbrio e a resistência contra<br>ataques diretos, mas diminui a mobilidade<br>e a resistência elemental.<br>Esta Dádiva remove uma fraqueza e cria<br>outra, fazendo com que seja difícil saber quando usá-la.<br>No entanto, é uma ferramenta poderoso quando usada<br>com eficácia.",
        usage_req : "Respiração da Rainha Códigos de Sangue"
      },
      
      D4 : {
        name : "Baluarte Estável",
        desc : "Aumenta temporariamente a defesa da arma<br>contra ataques físicos.<br>Contra-atacar aparições em frenesi não é<br>fácil. A Unidade de Segurança Cérbero<br>confia em uma defesa sólida que transformou<br>em força para prevalecer contra elas."
      },
      
      D5 : {
        name : "Reversão de Defesa",
        desc : "Concede temporariamente a habilidade de desviar<br>ataques e enfraquecer adversários ao<br>se defender com sucesso.<br>Bloquear o ataque de um inimigo e depois seguir<br>com um ataque seu enquanto ele está desprotegido<br>pode parecer uma estratégia óbvia, mas<br>continua sendo uma estratégia eficaz."
      },
      
      D6 : {
        name : "Poder Esmagador",
        desc : "Facilita temporariamente a quebra da<br>guarda do oponente.<br>Não tema um inimigo que gasta muita<br>energia na defesa. A lâmina inabalável cortará<br>seu caminho até a vitória."
      },
      
      D7 : {
        name : "Estabilidade de Defesa",
        desc : "Reduz temporariamente o custo de vigor por<br>se defender.<br>Quando a defesa é quebrada, a batalha está<br>praticamente acabada. Enquanto sua defesa continuar<br>boa, a luta continua."
      },
      
      D8 : {
        name : "Véu Prismático",
        desc : "Aumenta temporariamente a defesa da arma<br>contra ataques elementais.<br>Contra-atacar aparições em frenesi não é<br>fácil. A Unidade de Segurança Cérbero<br>confia em uma defesa sólida que transformou<br>em força para prevalecer contra elas."
      },
      
      D9 : {
        name : "Proteção de Sangue",
        desc : "Cria uma barreira temporária que cerca você<br>e seu parceiro, aumentando sua resistência<br>e reduzindo o poder do sangue.<br><br>O sangue negro muda suas propriedades<br>de acordo com a determinação do usuário.<br>É fácil transformá-lo em uma barreira."
      },
      
      D10 : {
        name : "Proteção Contra Fogo",
        desc : "Cria uma barreira temporária que cerca você<br>e seu parceiro, aumentando sua resistência<br>e reduzindo o poder do fogo.<br><br>O campo suga o poder das chamas<br>e reduz o dano do calor."
      },
      
      D11 : {
        name : "Armadura contra Gelo",
        desc : "Cria uma barreira temporária que cerca você<br>e seu parceiro, aumentando sua resistência<br>e reduzindo o poder do gelo.<br><br>O campo anestesiante inibe o poder<br>de resfriamento e reduz o dano do frio."
      },
      
      D12 : {
        name : "Véu do Raijin",
        desc : "Cria uma barreira temporária ao seu redor<br>e de seu parceiro que reduz o poder<br>da eletricidade, aumentando sua resistência.<br><br>As aparições que se juntam aos Perdidos<br>continuam lembrando de todas as suas Dádivas<br>e as usam sem piedade contra seus antigos<br>companheiros, então é preciso contra-atacar."
      },
      
      D13 : {
        name : "Barreira Elemental",
        desc : "Aumenta temporariamente a resistência,<br>sua e de seu parceiro, a todos os elementos.<br><br>Guerreiros hábeis conseguem se adequar a<br>qualquer situação. O excesso de orgulho<br>levará você para o túmulo mais cedo."
      },
      
      D14 : {
        name : "Coração Real",
        desc : "Temporariamente aumenta a resistência a<br>enfraquecimento.<br>Em meio ao caos da batalha, uma<br>mente firme é o que firma ou quebra uma<br>aparição. Quando ela é perdida, também se vai qualquer esperança<br>pelo futuro."
      },
      
      D15 : {
        name : "Lutador Persistente",
        desc : "Aumenta temporariamente a resistência a enfraquecimento<br>contra ataques inimigos.<br>Apenas guerreiros com a tenacidade para continuar<br>insistindo após qualquer ataque sobreviverão neste mundo."
      },
      
      D16 : {
        name : "Equilíbrio Perfeito",
        desc : "Aumenta muito a resistência contra enfraquecimento<br>por um ataque.<br>Avançar sem medo é um passo firme<br>rumo ao futuro."
      },
      
      D17 : {
        name : "Geração de Anticorpos",
        desc : "Aumenta temporariamente a resistência a todas as<br>penalidades.<br>Nem é necessário dizer que efeitos de status<br>são uma ameaça séria a qualquer usuário de Dádivas.<br>Um lapso durante a preparação poderia levar rapidamente<br>a ser reduzido a cinzas."
      },
      
      D18 : {
        name : "Contramedida",
        desc : "Por um tempo limitado, desviar dos ataques inimigos<br>gera projéteis que atacam o inimigo<br>ao serem tocados.<br>A coragem para dar um passo adiante sem<br>hesitar é importante, mas o perigo de<br>fazer isso é muito real."
      },
      
      D19 : {
        name : "Vingança Sorrateira",
        desc : "Por um tempo limitado, receber dano gera<br>projéteis de fogo que atacam o inimigo<br>quando tocados.<br>As chamas da raiva impedem ataques adicionais e,<br>para as aparições que as usam, elas são<br>as chamas da salvação.",
        usage_req : "Garra da Rainha Códigos de Sangue"
      },
      
      D20 : {
        name : "Tenacidade Feroz",
        desc : "Após usar esta Dádiva, receber um dano fatal<br>quando seus PV estiverem acima de uma certa quantia<br>deixará você com 1 PV. Esse efeito só<br>é ativado uma vez.<br>Agarre-se à sua coragem, não importa o<br>perigo. Enquanto você se prender à vida, as<br>possibilidades são ilimitadas."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Corpo Robusto",
        desc : "Diminui sua eficiência de Dádivas enquanto aumenta <br>temporariamente o máximo de PV.<br><br>Você decide como usar a grande quantidade de PV <br>obtida com esta Dádiva."
      },
      
      D22 : {
        name : "Defesa Circular",
        desc : "Permite a defesa por todos os lados, não só na dianteira.<br><br>Agora não há nada a temer, não importa onde estejam os inimigos. <br>Lembre-se, porém, que a sorte não sorri para quem só sabe se defender."
      },
      
      D23 : {
        name : "Ordem Defensiva",
        desc : "Reduz temporariamente o seu poder de ataque<br>e aumenta a sua defesa e a do seu parceiro.<br><br>Sacrificar a sua segurança lhe permite<br>aumentar a defesa dos seus aliados na hora."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Desdém Incauto",
        desc : "Dádiva comunal com Louis que aumenta<br>o ataque e altera movimentos de evasão,<br>às custas de redução de dano.<br><br>Esta Dádiva transforma a sede de sangue<br>da aparição em força, aumentando o risco<br>de se unir aos Perdidos ao menor deslize.<br>É difícil se manter assim sem determinação.",
        usage_req : "Em parceria com Louis"
      },
      
      E1 : {
        name : "Lupinus Vitae",
        desc : "Dádiva comunal com Yakumo que reduz<br>o consumo de vigor ao se defender e aprimora<br>seu 1º ataque após uma defesa conforme o nº<br>de ataques defendidos, mas também reduz a<br>velocidade de esquiva. A vontade de defender<br>e ajudar seus companheiros renova as forças<br>do sangue. Obstáculos desmoronam quando você<br>os ataca com o peso da responsabilidade.",
        usage_req : "Em parceria com Yakumo"
      },
      
      E2 : {
        name : "Pico de Convicção",
        desc : "Dádiva comunal com Io que melhora a<br>resistência ao enfraquecimento, mas<br>reduz a eficiência do dreno. Uma vontade forte<br>e profunda faz o poder adormecido<br>fervilhar para que o seu chamado seja<br> cumprido.",
        usage_req : "Em parceria com Io"
      },
      
      E3 : {
        name : "Despertar do Sangue",
        desc : "Dádiva comunal com Mia que reduz o<br>custo do sangue negro e aumenta a<br>eficiência das Dádivas, mas reduz o poder<br>de ataque corpo a corpo. O sangue<br>desperto que corre pelas suas veias traz<br>consigo a força para sobreviver a este<br>mundo desolado. Sob o seu efeito,<br>seus arredores fazem você pensar que<br>entrou em um conto de fadas.",
        usage_req : "Em parceria com Mia"
      },
      
      E4 : {
        name : "Surto Fatal",
        desc : "Dádiva comunal com Jack que aumenta o<br>poder de ataque e reduz o consumo de<br>vigor, mas também reduz o número de<br>vezes que você pode se regenerar.<br>Manter o Cárcere das Névoas requer<br>arriscar a vida e afastar o perigo.<br>A escala dessa tarefa semeia o medo<br>na maioria das aparições.",
        usage_req : "Em parceria com Jack"
      },
      
      E5 : {
        name : "Contenção Efêmera",
        desc : "Dádiva comunal com Eva que aprimora o<br>dreno e a eficiência das Dádivas, mas<br>aumenta o consumo de sangue negro. O<br>sangue de uma aparição dança pelas suas<br>veias, como se estivesse inspirado por<br>uma bela melodia ouvida com o coração e<br>uma chuva carmesim sacia a alma sedenta.",
        usage_req : "Em parceria com Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Oferenda Restauradora",
        desc : "Gaste seus próprios PV para restaurar os PV dos<br>companheiros.<br>Para uma aparição, a morte não é mais algo a<br>se temer. A coisa mais assustadora é<br>perder os laços de confiança que ligam você aos<br>outros e ser forçada a viver uma vida<br>solitária.",
        usage_req : "PV está em 2 ou mais"
      },
      
      F1 : {
        name : "Bênção Solidária",
        desc : "Consome uma grande quantidade dos seus próprios PV para<br>recuperar uma grande quantidade dos PV do seu parceiro.<br>A resolução determinada de alguém que arrisca<br>sua vida ao seu lado é uma bênção que<br>pode curar as feridas dos aliados.",
        usage_req : "PV está em 2 ou mais"
      },
      
      F2 : {
        name : "Cura Automática",
        desc : "Você usará automaticamente a Oferenda<br>Restauradora quando seu parceiro tomar<br>dano crítico. No entanto, consome PV<br>previamente.<br><br>Sacrificar a si mesmo para salvar os outros<br>não é algo feito facilmente. A luz da salvação<br>é o fruto de uma relação significativa.",
        usage_req : "Deméter Códigos de Sangue<br>PV está em 2 ou mais"
      },
      
      F3 : {
        name : "Assistência Guardiã",
        desc : "Sacrifica PV para curar seu companheiro e<br>temporariamente impulsionar sua defesa.<br><br>Não se pode sobreviver à prisão da realidade<br>só. Aquilo que dói hoje, pode mostrar-se<br>essencial para a vida mais adiante<br>em uma situação apertada.",
        usage_req : "Astrea Códigos de Sangue<br>PV está em 2 ou mais"
      },
      
      F4 : {
        name : "Luz Purificadora",
        desc : "Por um tempo limitado, uma porção do dano que<br>você sofrer será lentamente curado automaticamente.<br>Toda dor lembra as aparições da vida que<br>perderam. De um ponto de vista, é uma<br>benção. É esse modo de pensar que<br>estimula as células, fazendo com que elas reparem<br>a si mesmas."
      },
      
      F5 : {
        name : "Regenerador",
        desc : "Impulsiona as suas habilidades regenerativas e as<br>do seu parceiro, aumentando a quantidade de PV<br>curados por regeneração.<br>Uma pequena diferença na resistência determina o<br>resultado de muitas lutas. Uma sensação de<br>estabilidade também aproxima a vitória."
      },
      
      F6 : {
        name : "Remoção de Veneno",
        desc : "Cura você e seu parceiro de veneno.<br>Bloqueia o efeito antes de ser atingido.<br>Apesar da natureza imortal das aparições,<br>doenças ainda são um problema que não pode<br>ser evitado e remédios se tornaram de extrema<br>importância. Hoje, a vida deles depende de tentativa<br>e erro, bem como esforços incansáveis."
      },
      
      F7 : {
        name : "Remoção de Atordoamento",
        desc : "Cura você e seu parceiro de atordoamento.<br>Bloqueia o efeito antes de ser atingido.<br>Apesar da natureza imortal das aparições,<br>doenças ainda são um problema que não pode<br>ser evitado e remédios se tornaram de extrema<br>importância. Hoje, a vida deles depende de tentativa<br>e erro, bem como esforços incansáveis."
      },
      
      F8 : {
        name : "Remoção de Inibição",
        desc : "Cura você e seu parceiro de inibição.<br>Bloqueia o efeito antes de ser atingido.<br>Apesar da natureza imortal das aparições,<br>doenças ainda são um problema que não pode<br>ser evitado e remédios se tornaram de extrema<br>importância. Hoje, a vida deles depende de tentativa<br>e erro, bem como esforços incansáveis."
      },
      
      F9 : {
        name : "Remoção de Lentidão",
        desc : "Cura lentidão em você e seu parceiro. Pode bloquear<br>o efeito se usado antes de ser atingido.<br>Apesar da natureza imortal das aparições,<br>doenças ainda são um problema que não pode<br>ser evitado e remédios se tornaram de extrema<br>importância. Hoje, a vida deles depende de tentativa<br>e erro, bem como esforços incansáveis."
      },
      
      F10 : {
        name : "Remoção de Vazamento",
        desc : "Cura vazamento em você e seu parceiro. Pode bloquear<br>o efeito se usado antes de ser atingido.<br>Apesar da natureza imortal das aparições,<br>doenças ainda são um problema que não pode<br>ser evitado e remédios se tornaram de extrema<br>importância. Hoje, a vida deles depende de tentativa<br>e erro, bem como esforços incansáveis."
      },
      
      F11 : {
        name : "Essência da Panaceia",
        desc : "Cura você e o seu parceiro de todas as penalidades.<br>Também pode bloquear penalidades se usado antes<br>de ser atingido.<br>Durante os dias exaustivos de batalha,<br>acalma um coração cansado ter momentos de<br>humor e se lembrar dos laços de confiança<br>e emoção e você compartilhar com seus companheiros."
      },
      
      F12 : {
        name : "Sacrifício de Sangue",
        desc : "Gasta seus próprios PV para ganhar sangue negro.<br>Para as aparições que passam tanto tempo em<br>combate, o valor do sangue negro é<br>inquestionável. A força dele é certa,<br>contendo o medo de se transformar em cinzas."
      },
      
      F13 : {
        name : "Deslembrar",
        desc : "Todas as Dádivas que necessitam de tempo para usar<br>podem ser usadas instantaneamente.<br>Em apuros, pode ser melhor esquecer<br>e começar novamente do início."
      },
      
      F14 : {
        name : "Luz Flutuante",
        desc : "Cria uma bola de luz nos seus pés.<br>Na época das luzes químicas, muitas<br>explorações foram canceladas quando o equipamento<br>acabava. Ser capaz de usar as Dádivas<br>expande muito o alcance de uma<br>possível viagem."
      },
      
      F15 : {
        name : "Vivificação",
        desc : "Leva você de volta ao último visco tocado<br>sem perder bruma ao causar intencionalmente<br>o seu corpo a dispersar.<br>Recuar não é covardia. Ser capaz de<br>escolher as suas lutas é importante neste<br>mundo carcerário."
      },
      
      F16 : {
        name : "Perseguidor Noturno",
        desc : "Reduz a quantidade de som que você cria,<br>fazendo ser mais difícil ser detectado.<br>Se você sentir mesmo a presença mais fraca<br>atrás de você, vire-se e certifique-se.<br>Você nunca sabe quem pode ser a<br>espreita nas sombras."
      },
      
      F17 : {
        name : "Véu da Névoa Noturna",
        desc : "Cobre seu corpo com um manto de sangue<br>como névoa, tornando mais difícil para inimigos<br>perceberem você.<br>O usuário fica turvo, tornando-o difícil<br>de rastrear."
      },
      
      F18 : {
        name : "Detector de Espólios",
        desc : "Saiba se há itens não coletados<br>em determinada área.<br><br>Fareje os sutis rastros do seu alvo usando<br>os sentidos sobrenaturais concedidos pela fome<br>de uma aparição."
      },
      
      F19 : {
        name : "IFF Ativo",
        desc : "Seu radar mostra os inimigos que aparecem<br>em determinada área.<br><br>A menos que queiram passar a eternidade em<br>agonia, os imortais são os que mais devem<br>temer a morte."
      },
      
      F20 : {
        name : "Rastreador de Tesouros",
        desc : "Item não coletado de determinada área<br>aparecem no seu radar.<br><br>Espalhe pequenas quantidades do seu próprio<br>sangue como batedores. Esse tipo de proeza<br>está muito além das capacidades humanas."
      },
      
      F21 : {
        name : "Prêmios à Vista",
        desc : "Saiba se há itens não coletados<br>no mapa atual.<br><br>Fareje os rastros deixados pelo seu alvo<br>usando os sentidos sobrenaturais concedidos<br>pela fome insaciável de uma aparição.<br>Sua coleção ficará completa."
      },
      
      F22 : {
        name : "Abismo Gigante",
        desc : "Dê um salto e aterrisse com toda a sua força.<br>Ofensivo. Espada de uma mão / Alabarda / Baioneta.<br><br>Dê um salto e aterrisse como se estivesse<br>esculpindo uma fenda obscura.<br><br>Tirar proveito dos momentos antes e depois do ataque<br>é complicado, então é bom sincronizar-se com<br>os movimentos do inimigo."
      },
      
      F23 : {
        name : "Ataque Fantasma",
        desc : "Suma como névoa e dê um salto cortante.<br>Ofensivo. Espada de uma mão / Alabarda / Baioneta.<br><br>Desapareça como um fantasma nas sombras<br>e avance contra o inimigo pra realizar<br>um corte cruzado.<br><br>Você não pode ser atingido<br>quando está em forma de névoa,<br>então pode atacar sem medo."
      },
      
      F24 : {
        name : "Pulso Giratório",
        desc : "Dispare uma rajada de golpes.<br>Ofensivo. Espada de uma mão / Alabarda / Baioneta. <br><br>Desoriente o inimigo com uma alucinante<br>combinação de cinco ataques.<br><br>Coloque uma Dádiva na sua arma<br>para aumentar a potência do ataque."
      },
      
      F25 : {
        name : "Punição Coletiva",
        desc : "Jogue sua arma e faça ela girar.<br>Ofensivo. Espada de duas mãos /Alabarda / Martelo. <br><br>Jogue sua arma para a frente e use o poder<br>da Dádiva para fazê-la girar e derrubar um<br>grupo de inimigos. Esse ataque atinge uma<br>grande área mas demora pra ser executado,<br>então cuidado ao usá-lo, até contra inimigos<br>mais fracos."
      },
      
      F26 : {
        name : "Fuzilaria Barroca",
        desc : "Dispare uma rajada de balas guiadas.<br>Ofensivo. Baioneta.<br><br>Usa a rotação para comprimir o sangue negro<br>na sua baioneta e depois dispara quatro<br>balas que perseguem o alvo. Este ataque tem<br>uma execução demorada e deve ser usado<br>no momento certo."
      },
      
      F27 : {
        name : "Aniquilação Tripla",
        desc : "Realize um combo contra um alvo próximo.<br>Ofensivo. Espada de duas mãos / Alabarda / Martelo.<br><br>Use sangue negro para aumentar bastante<br>seus músculos por um breve período e girar<br>uma arma pesada três vezes seguidas.<br>Este ataque é muito ágil e portanto<br>muito útil em situações de cerco."
      },
      
      F28 : {
        name : "Bote do Dragão",
        desc : "Salte para frente e realize um poderoso ataque.<br>Ofensivo. Espada de duas mãos/Alabarda/Martelo.<br><br>Avance ferozmente contra um inimigo distante<br>e ataque como um dragão tentando quebrar<br>o pescoço de um tigre. Este ataque<br>é devastador mas deixa o usuário vulnerável,<br>exigindo cuidado redobrado."
      },
      
      F29 : {
        name : "Corrida de Carruagem",
        desc : "Avance em forma de névoa e dispare um combo.<br>Ofensivo. Alabarda. <br><br>Se disperse e avance para realizar uma<br>série de golpes de uma vez. O primeiro<br>ataque pode desencadear outros ataques ou uma<br>esquiva, e portanto é um ótimo ponto de partida."
      },
      
      F30 : {
        name : "Deslocamento Ilusório",
        desc : "Avance em forma de névoa. <br><br>Disperse seu corpo momentaneamente como um<br>fantasma assombrando a noite e depois avance,<br>evitando todos os ataques no percurso."
      },
      
      F31 : {
        name : "Nocaute Rochoso",
        desc : "Pise no chão violentamente para causar<br>um tremor. <br><br>Acumule energia nas pernas e dê um pisão<br>pra criar uma onda destrutiva de energia.<br>A força é suficiente para acordar os mortos<br>que repousam embaixo da terra e enfraquecer<br>os Perdidos para o próximo ataque."
      },
      
      F32 : {
        name : "Cortador de Andorinha",
        desc : "Uma ataque extremamente rápido.<br>Ofensivo. Espada de duas mãos/Martelo.<br><br>Gire seu corpo em um único movimento<br>e execute um golpe que poderia atingir uma<br>andorinha em pleno voo. Nunca se viu uma<br>arma pesada ser tão veloz. Com ela você pode<br>causar dano assim que tiver uma brecha."
      },
      
      F33 : {
        name : "Sumiço Ilusório",
        desc : "Fuja dos ataques transformando-se em névoa.<br><br>Esta Dádiva permite que você se esquive do<br>perigo se dispersando e reaparecendo na<br>posição anterior. Esta Dádiva sutil e<br>inovadora usa o ciclo de vida das aparições<br>de forma brilhante, mas é muito difícil<br>de controlar."
      },
      
      F34 : {
        name : "Explosão Turbulenta",
        desc : "Dê um salto pra frente e ataque duas vezes.<br>Ofensivo. Espada de duas mãos/Martelo.<br><br>Pule no alvo e realize dois ataques rápidos<br>e potentes. As armas pesadas podem ser meio<br>lentas, então é melhor mandar ver na força."
      },
      
      F35 : {
        name : "Ataque das Sombras",
        desc : "Realize um ataque rápido e de curto alcance.<br>Ofensivo. Espada de uma mão/Baioneta.<br><br>Deslize para a frente como uma sombra<br>e realize um ataque rápido.<br>Esta técnica é ótima para percorrer curtas<br>distâncias e funciona bem para quem quer<br>ficar na cola dos oponentes."
      },
      
      F36 : {
        name : "Oferenda Modesta",
        desc : "Gasta uma pequena parte dos seus PV para restaurar <br>uma pequena quantia dos PV dos aliados. Embora <br>esta Dádiva consuma menos PV que a Oferenda <br>Restauradora, ela também restaura menos PV dos <br>alvos.",
        usage_req : "PV está em 2 ou mais"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Ressonância de Sangue Negro (Receber)",
        desc : "Quando seu parceiro ganha sangue negro, você ganha a <br>mesma quantia. A união entre você e seus companheiros <br>torna-se o sangue em suas veias, o poder que corre no <br>seu corpo. Não pode ser usado com &quot;Ressonância de <br>Sangue Negro (Enviar)&quot;."
      },
      
      F38 : {
        name : "Ressonância de Sangue Negro (Enviar)",
        desc : "Quando você ganha sangue negro, seu parceiro ganha <br>a mesma quantia. Seu sangue ferve com uma agitação <br>estranha. A ressonância dentro do seu corpo será a <br>salvação dos aliados. Não pode ser usado com <br>&quot;Ressonância de Sangue Negro (Receber)&quot;."
      },
      
      F39 : {
        name : "Postura Serena",
        desc : "Imediatamente adota uma postura que acalma <br>sua mente e recupera todo o vigor.<br>Além de duplicar seu tempo de combo na batalha, <br>esta postura também pode salvar você da beira <br>da morte."
      },
      
      F40 : {
        name : "Ímpeto Revigorante",
        desc : "Restaura o vigor quando você consegue se esquivar <br>de ataques inimigos enquanto o efeito estiver ativo.<br>Mesmo os Perdidos ficam vulneráveis após atacar. <br>Se conseguir se esquivar, a chance de contra-atacar <br>surgirá diante dos seus olhos."
      },
      
      F41 : {
        name : "Corte Impassível",
        desc : "Realiza um ataque imperceptível de uma postura parada. <br>Habilidade ofensiva realizada com uma espada de uma mão.<br><br>Este corte instantâneo cria uma lâmina de vácuo que corta <br>todos os inimigos dentro do alcance. A técnica exige toda <br>a alma de seu usuário, e precisa de tempo para dominar."
      },
      
      F42 : {
        name : "Cutelo Circular",
        desc : "Salte enquanto executa um corte giratório. Habilidade ofensiva <br>realizada com uma espada de uma mão/alabarda/baioneta.<br><br>Esta técnica lhe dá cobertura por todos os lados enquanto <br>atravessa os inimigos próximos. Além de seu uso óbvio <br>quando os inimigos estão se aproximando à sua volta, o <br>ataque também pode atingir inimigos cujas posições <br>muitas vezes são difíceis de precisar."
      },
      
      F43 : {
        name : "Mergulho Selvagem",
        desc : "Lança um ataque do ar e trucida o inimigo. Habilidade <br>ofensiva realizada com uma espada de uma mão/alabarda.<br><br>As técnicas de batalha deste cavaleiro monarca precisam <br>de treinamento para serem bem usadas. Esta Dádiva é <br>excelente em se aproximar do seu inimigo, permitindo <br>que você salte no ar e voe na direção dele."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Golpe Inabalável",
        desc : "Dá um golpe único altamente resistente a enfraquecimento. <br>Habilidade ofensiva realizada com uma espada de duas <br>mãos/um martelo.<br>Um ataque único sem medo pode mudar o rumo da batalha <br>e trazer a vitória. Contudo, essa falta de medo da morte <br>pode pôr tudo a perder, criando uma situação instável que <br>deve ser tratada com perspicácia."
      },
      
      F45 : {
        name : "Lâmina do Usurpador",
        desc : "Corte um inimigo e recupere PV. Habilidade ofensiva<br>realizada com uma alabarda.<br><br>Por natureza, as aparições cobiçam não só sangue<br>como também própria vida. Ceda aos seus desejos."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Relançamento Zero",
        desc : "Reinicia o tempo de recarga da Dádiva do parceiro.<br><br>Enquanto o sangue negro dele permitir, seu aliado <br>poderá encurralar inimigos usando uma poderosa <br>Dádiva repetidamente, sem esperar."
      },
      
      F47 : {
        name : "Regeneração de Sangue Negro",
        desc : "Restaura gradualmente o sangue negro a custo <br>da defesa e do poder de ataque das armas.<br>No entanto, com o passar do tempo, a restauração <br>do sangue negro será interrompida e você <br>recuperará o poder que perdeu."
      },
      
      F48 : {
        name : "Carga de Eletricidade",
        desc : "Dispare em direção aos inimigos em alta<br>velocidade para desferir um golpe.<br><br>Aproxime-se de sua presa num instante, como<br>um feroz predador.<br><br>O ataque não causa muito dano, mas a<br>velocidade que ele lhe dá abre caminho para<br>uma vitória decisiva contra qualquer arma."
      },
      
      F49 : {
        name : "Recuperação de Foco",
        desc : "Aumenta parcialmente o medidor de foco após o uso.<br><br>Esta Dádiva nem sempre manda você para um estado <br>de foco, então é importante calcular a hora certa de<br> usá-la para ajudar na sua estratégia."
      },
      
      F50 : {
        name : "Cano Radiante",
        desc : "Dispara projéteis poderosos que causam dano perfurante. <br>Habilidade ofensiva realizada com uma baioneta.<br><br>Os projéteis disparados instantaneamente atingem o <br>alvo e perfuram todos os adversários ao longo de <br>sua trajetória. Contudo, devido ao tempo necessário <br>para a energia se aglutinar, esta técnica não é eficaz <br>contra inimigos próximos, mas sim contra grupos grandes."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Espada Regicida",
        desc : "Espada de um gume produzida em massa para soldados da Operação Regicida. Feita para ser produzida rapidamente, seu condutor de sangue negro é exposto, dando uma aparência grosseira, mas a sua lâmina bem afiada corta a carne dos Perdidos facilmente."
      },
      
      A1 : {
        name : "Cano do Reino dos Servos",
        desc : "Uma simples arma tipo clava. É só um cano com função de drenagem embutida que lembra vagamente uma espada. É usada principalmente por aparições que são dominadas por outras, e dá uma pontinha de esperança em combate."
      },
      
      A2 : {
        name : "Espada Larga",
        desc : "Espada grande de dois gumes produzida em massa pelo Governo Provisório. Feita com foco em força, se empunhada com o corpo inteiro, é capaz de abater até espécimes gigantes de Perdidos. Sua facilidade de uso a torna comum nas mãos de heróis e vilões no mundo de Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Espada recurva de um gume feita para parecer uma katana. Foi criada por uma aparição chamada Mukuro, que gravou seu nome nela e que significa &quot;cadáver rejeitado&quot;. A arma é diferente das espadas comumente vistas em Vein. Fazer bom uso dela requer habilidade."
      },
      
      A4 : {
        name : "Carmesim Duradouro",
        desc : "Arma de confiança de Louis. Sua lâmina vermelha tem uma dádiva gravada. Quando acionada com sangue negro, é capaz de cortar as defesas mais fortes com um único golpe. Foi recebida da mesma aparição que deu a Yakumo sua arma. E foi feita por mãos dedicadas e com as técnicas de Louis em mente."
      },
      
      A5 : {
        name : "Machete",
        desc : "Cutelo grande aparentemente feito de um só pedaço de aço. Criado numa loja por um grupo selvagem de engenheiros, foi projetado para combinar o manuseio de uma espada de uma mão com o poder de uma espada de duas mãos. Entretanto, requer muita força para uso eficaz devido ao enorme peso e, assim, poucos o utilizam."
      },
      
      A6 : {
        name : "Espada Argêntea do Lobo",
        desc : "Espada de prata de um gume, usada pela Unidade de Segurança Cérbero. Embora tenha um gatilho de dádivas, é bem balanceada e de boa qualidade para uma arma produzida em massa. Cérbero é uma força de elite formada após a Operação Regicida, e seu equipamento mostra seu valor em mãos habilidosas."
      },
      
      A7 : {
        name : "Garra Ardente",
        desc : "Arma longa usada pela Sucessora da Garra. O calor em seu interior a faz deixar arcos carmesim no ar, ateando fogo a tudo que toca. Dizem que foi criada pelos pensamentos da Sucessora, mas qual seria sua intenção?"
      },
      
      A8 : {
        name : "Sangue Gélido",
        desc : "Arma de perfuração usada pela Portadora da Espada, uma das marionetes de Mido. Um gatilho de dádivas de gelo foi gravado ao longo dela, permitindo que gere uma lança gélida instantaneamente. Ela é única, feita para a melhor da Cérbero e requer uma técnica delicada de manuseio."
      },
      
      A9 : {
        name : "Espada Pôr-do-sol",
        desc : "Uma Espada Regicida deformada que foi corroída pelo miasma. Nem mesmo a matéria inorgânica está imune à corrupção da Rainha, que alterou o brilho e as propriedades desta arma. Mas enquanto ninguém for capaz de empunhá-la com firmeza, sua eficácia não pode ser contestada."
      },
      
      A10 : {
        name : "Sabre Negro",
        desc : "Espada negra, com apenas um gume. Sua lâmina recurva serve para cortar carne, um usuário habilidoso pode maximizar esse efeito. Caçadores de Preto não dão atenção ao peso de suas armas, e buscam poder acima de tudo, então o treinamento é essencial."
      },
      
      A11 : {
        name : "Executora",
        desc : "Espada favorita de Jack, o Guardião da Cripta. Sua lâmina bem afiada não mostra sinais de desgaste. Um único golpe seu deixa ferimentos letais. Sua origem é desconhecida, mas deve ser uma versão personalizada das armas usadas pelos Caçadores de Preto. O cuidado que recebeu fala muito sobre o Guardião."
      },
      
      A12 : {
        name : "Espada Larga Perdida",
        desc : "Espada de uma mão usada por aparições caídas que se juntaram aos Perdidos. O tempo passado no miasma alterou as suas propriedades. Ela foi feita para matar os Perdidos, mas passou a alimentar-se de aparições. Esse tipo de ironia é comum no mundo de Vein."
      },
      
      A13 : {
        name : "Espada Carmesim",
        desc : "Espada de uma mão inspirada em uma lâmina longa empunhada por um devorador de deuses com autocontrole inflexível. Ela contém um acionador de dádiva que possibilita que o portador dispare ondas cortantes. Essa lâmina carmesim matadora de deuses brilha contra o cenário de salpicos escuros de sangue."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Cano do Fogo Infernal",
        desc : "Arma semelhante a porrete modificada pelo<br>fogo infernal.<br><br>Este cano foi exposto ao miasma e banhado em<br>fogo infernal, fazendo-o mudar de cor.<br>Somente os que superarem as provas mais<br>cruéis poderão obtê-lo."
      },
      
      A15 : {
        name : "Lâmina do Inferno",
        desc : "Espada de um gume chamuscada por fogo infernal.<br><br>Mesmo com grande crescimento de força, ainda é muito leve.<br><br>Esta espada ardente carmesim possui uma chama poderosa que confere fogo aos ataques carregados da arma."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Cano da Geada",
        desc : "Arma semelhante a porrete modificada pela<br>geada.<br><br>Este cano foi exposto ao miasma e banhado em<br>geada, fazendo-o mudar de cor. Somente os<br>que superarem as provas mais cruéis poderão<br>obtê-lo."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Cano Elétrico",
        desc : "Arma semelhante a porrete modificada por um<br>raio.<br><br>Este cano foi exposto ao miasma e atingido<br>por um raio, fazendo-o mudar de cor. Somente<br>os que superarem as provas mais cruéis<br>poderão obtê-lo."
      },
      
      A18 : {
        name : "Cano dos Incomparáveis",
        desc : "Arma semelhante a porrete dada somente a<br>quem deseja se tornar o maior de todos.<br><br>Uma aparição com poder sem igual não precisa<br>de armamento adicional; esta arma existe<br>apenas para venerar os poderosos."
      },
      
      A19 : {
        name : "Espada Fúlmen",
        desc : "Espada de uma mão galvanizada por um raio.<br><br>É pesada, mas possui alto poder defensivo, além de grande crescimento de destreza e mente.<br><br>A eletricidade azul oculta nesta lâmina cintila de forma belíssima e confere eletricidade aos ataques carregados da arma."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Grande Espada Regicida",
        desc : "Espada de duas mãos produzida em massa para aparições na Operação Regicida. Esta espada foi feita para ser usada contra o corpo da Rainha, o que a torna mais do que adequada para despedaçar os Perdidos."
      },
      
      B1 : {
        name : "Zweihander",
        desc : "Espada longa, de duas mãos, produzida em massa pelo Governo Provisório. Feita para eliminar espécimes grandes de Perdidos. Ela é altamente resistente e oferece boa proteção ao usuário. Dados posteriores à Operação Regicida levaram a melhorias técnicas, como um condutor de sangue negro único."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Espada grande feita a partir de uma espada montante japonesa. Foi criada por uma aparição chamada Mukuro, que também gravou seu nome na lâmina, que significa &quot;cadáver ceifador&quot;. Feita para cortes amplos, ela é forte o suficiente para deslocar o vento ao ser usada com força."
      },
      
      B3 : {
        name : "Matadora de Oni",
        desc : "A espada que garantiu a sobrevivência de Yakumo em diversas batalhas. Feita com uma técnica diferente da maioria em Vein, ela foi feita para ser usada em movimento, apesar de seu tamanho. Yakumo a recebeu da mesma aparição que deu a Louis sua arma, e ele a personalizou ao seu estilo."
      },
      
      B4 : {
        name : "Espada Deturpada",
        desc : "Espada de duas mãos com uma lâmina que parece uma presa. Feita com o corpo de um espécime de Perdido muito grande, esta arma tem o poder de liberar algo que se assemelha a uma dádiva ao ser usada com força máxima. Ela emana um leve calor e dizem que anseia beber sangue."
      },
      
      B5 : {
        name : "Montante Negra",
        desc : "Espada de duas mãos com uma lâmina de elos e um gume. Esta arma longa e curva foi feita para cortar os membros dos inimigos. Caçadores de Preto não dão atenção ao peso de suas armas, e buscam poder acima de tudo, então o treinamento é essencial."
      },
      
      B6 : {
        name : "Espada Argêntea do Rei-Lobo",
        desc : "Espada de duas mãos dourada usada por Silva após entrar em frenesi. Ela retém parte do poder das relíquias, e é capaz de desferir golpes poderosos em linha reta com velocidade devastadora. Pelo seu design, parece que sua beleza foi quase apagada pelo seu poder. Ela dá uma aura intensa ao seu usuário."
      },
      
      B7 : {
        name : "Lâmina do Julgamento",
        desc : "Espada de duas mãos feitas pela aparição infinitamente inquisidora e depravada: Mido. Seu mecanismo de transformação gera uma lâmina de grandes dádivas, dando a ela muito poder de destruição, provavelmente para uma última luta contra Silva."
      },
      
      B8 : {
        name : "Montante Pôr-do-Sol",
        desc : "Uma Grande Espada Regicida deformada que foi corroída pelo miasma. Nem mesmo a matéria inorgânica está imune à corrupção da Rainha, que alterou o brilho e as propriedades desta arma. Mas enquanto ninguém for capaz de empunhá-la com firmeza, sua eficácia não pode ser contestada."
      },
      
      B9 : {
        name : "Zweihander Perdida",
        desc : "Espada de duas mãos usada por aparições caídas que se juntaram aos Perdidos. O tempo passado no miasma alterou as suas propriedades. Ela foi feita para matar os Perdidos, mas passou a alimentar-se de aparições. Esse tipo de ironia é comum no mundo de Vein."
      },
      
      B10 : {
        name : "Sabre Argênteo do Lobo",
        desc : "Espada de prata, de duas mãos, usada pela Unidade de Segurança Cérbero. Ela é melhor usada em proximidade, mas pode se aproximar rápido de inimigos com cortes poderosos. Cérbero é uma força de elite formada após a Operação Regicida, e seu equipamento mostra seu valor em mãos habilidosas."
      },
      
      B11 : {
        name : "Grande Espada Escaldada",
        desc : "Espada de duas mãos inspirada em uma serra gigante empunhada por um devorador de deuses que carregava o peso do destino. Balançá-la com força total vai fazê-la brilhar em azul e golpear com uma força terrível. Os Perdidos darão pouco trabalho com essa arma cercada de luz ofuscante."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Balmung Furiosa",
        desc : "Espada de dois gumes chamuscada por fogo infernal.<br><br>Embora pesada, é ótima em poder de ataque e defesa da arma, também tendo grande crescimento de destreza.<br><br>A lâmina queimada guarda o calor da chama, impregnando de fogo os ataques carregados da arma."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Grande Espada Índigo",
        desc : "Espada de duas mãos resfriada pela geada.<br><br>Embora pesada, possui grande defesa da arma e crescimento de determinação.<br><br>Esta espada branca e gelada guarda o poder do zero absoluto, que confere gelo aos seus ataques carregados."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Alabarda Regicida",
        desc : "Alabarda produzida em massa e dada às aparições na Operação Regicida. Feita com a facilidade de uso e o poder em mente. Os que enfrentaram Perdidos gigantes receberam primeiro os novos modelos."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "Uma longa alabarda produzida em massa pelo Governo Provisório. O design de seu gume a torna eficiente quando usada com força. Armas do Governo Provisório são feitas para defesa de civis, então, embora pareçam usar apenas materiais simples, elas são mais do que capazes de destruir Perdidos."
      },
      
      C2 : {
        name : "Empaladora",
        desc : "Lança estreita com uma ponta afiada. Seu comprimento é maior que o de uma pessoa mediana, mas ela é leve o suficiente para investidas repentinas. Foi feita por engenheiros excêntricos cujos produtos eram difíceis de usar, exceto por esta arma, feita por capricho."
      },
      
      C3 : {
        name : "Lança de Granada",
        desc : "Uma alabarda digna, em vermelho e prata, e com o nome de uma joia vermelha. Ela tem um gatilho de dádivas que lança lâminas ao golpear. Foi criada por uma seita de aparições que acredita ser realeza, e que suas armas merecem todo o luxo que puderem dar."
      },
      
      C4 : {
        name : "Dammerung ",
        desc : "Alabarda usada pela inocente Io. Foi personalizada por Murasame para ativar uma dádiva que concede proteção adicional a quem usá-la. Enquanto traça seu destino, você encontrará seu próprio passado, ou torcerá para criar um futuro com seus amigos?"
      },
      
      C5 : {
        name : "Alabarda Negra",
        desc : "Alabarda com a lâmina no mais puro preto. Seu gume em forma de foice foi feito para cortar cabeças de Perdidos. Caçadores de Preto não dão atenção ao peso de suas armas, e buscam poder acima de tudo, então o treinamento é essencial."
      },
      
      C6 : {
        name : "Foice do Assassino",
        desc : "Ferramenta de um carrasco que vivia no Poço Uivante. Possui um gatilho de dádivas capaz de produzir líquido e disparar colunas de água ao ser usada. Os Perdidos que a usaram foram reduzidos a cinzas, mas seu poder se mantém, passado ao próximo a empunhá-la, como um último desejo de vida."
      },
      
      C7 : {
        name : "Alabarda Pôr-do-Sol",
        desc : "Uma Alabarda Regicida deformada que foi corroída pelo miasma. Nem mesmo a matéria inorgânica está imune à corrupção da Rainha, que alterou o brilho e as propriedades desta arma. Mas, enquanto ninguém for capaz de empunhá-la com firmeza, sua eficácia não pode ser contestada."
      },
      
      C8 : {
        name : "Bardiche Perdida",
        desc : "Alabarda usada por aparições caídas que se juntaram aos Perdidos. O tempo passado no miasma alterou as suas propriedades. Ela foi feita para matar os Perdidos, mas passou a se alimentar de aparições. Esse tipo de ironia é comum no mundo de Vein."
      },
      
      C9 : {
        name : "Machado Obliterante",
        desc : "Arma destrutiva usada por um integrante específico da Unidade de Segurança Cérbero. Transformou-se quando seu portador virou um Perdido, dando-lhe um novo e terrível poder de destroçar defesas e inimigos."
      },
      
      C10 : {
        name : "Alabarda Argêntea do Lobo",
        desc : "Alabarda de prata usada pela Unidade de Segurança Cérbero. É uma arma formidável que emite uma aura autoritária. Cérbero é uma força de elite formada após a Operação Regicida, e seu equipamento mostra seu valor em mãos habilidosas."
      },
      
      C11 : {
        name : "Lança Cerúlea",
        desc : "Alabarda inspirada em uma lança empunhada por um devorador de deuses com uma aspiração profunda. Quando balançada com força total, uma lâmina de dádiva surge da cabeça, permitindo que o portador ataque com mais alcance. Essa elegante arma azul perfurou deuses e vai reduzir os Perdidos a cinzas."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Alabarda da Névoa de Sangue",
        desc : "Alabarda resfriada pela geada.<br><br>Compensa seu baixo poder de ataque com peso leve e grande crescimento de força.<br><br>O frio incessante contido na arma confere gelo aos seus ataques carregados."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Brionac do Relâmpago",
        desc : "Alabarda galvanizada por um raio.<br><br>Embora seu poder de ataque e sua defesa da arma sejam baixos, é leve e aumenta o ganho de sangue negro.<br><br>A lâmina elétrica é coberta em uma luz azulada, que confere eletricidade aos seus ataques carregados."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Martelo Regicida",
        desc : "Marreta produzida em massa e dada às aparições na Operação Regicida. Feita para arrebentar os membros da Rainha. A busca por força a tornou difícil de empunhar e seu uso requer muito treinamento."
      },
      
      D1 : {
        name : "Martelo do Reino dos Servos",
        desc : "Uma arma primitiva do tipo martelo. É só um cabo com um bloco de concreto pesadona ponta. Recebeu tratamento mínimo para torná-la uma arma para aparições. É usada principalmente por aparições que são dominadas por outras e dá uma pontinha de esperança em combate."
      },
      
      D2 : {
        name : "Marreta do Jaganata",
        desc : "Grande martelo usado por Oliver, que sucumbiu à sede e se tornou um Perdido. Embora não tenha sido bem cuidado, ele ainda funciona perfeitamente como arma e detém todo poder que tinha durante a Operação Regicida. Foi doado por alguém que o achava inútil, dando a um servo um pouco de esperança."
      },
      
      D3 : {
        name : "Machado Pesado",
        desc : "Alabarda produzida em massa pelo Governo Provisório. Sua lâmina espessa não foi feita para ataques precisos, mas realiza profundos cortes. Foi feita para abater Perdidos gigantes, mas a falta de ferramentas no mundo de Vein faz com que ela seja usada para demolir edificações e cortar vegetação."
      },
      
      D4 : {
        name : "Âncora de Impulso",
        desc : "Martelo mecânico resistente. Ele contém um gatilho de dádivas que dispara ondas de calor do seu cano de escape, multiplicando seu poder destrutivo. Golpear o chão com ele faz a terra tremer e gera uma onda de choque. É uma obra-prima de engenheiros loucos, muito apreciada por algumas aparições."
      },
      
      D5 : {
        name : "Martelo Grande",
        desc : "Martelo enorme usado pelos Perdidos engrandecidos pela exposição ao miasma. Sua face foi endurecida pela mesma exposição, e um golpe com toda força é capaz de atravessar qualquer guarda. Muitas aparições serviçais enviadas em busca de cristais de sangue terminam sofrendo transformações terríveis por tais armas."
      },
      
      D6 : {
        name : "Martelo Argênteo do Lobo",
        desc : "Martelo de prata usado pela Unidade de Segurança Cérbero. Seu centro de gravidade foi equilibrado para que quem a empunha possa usá-la livremente apesar do seu peso. Cérbero é uma força de elite formada após a Operação Regicida, e seu equipamento mostra seu valor em mãos habilidosas."
      },
      
      D7 : {
        name : "Labrys do Tirano",
        desc : "Um machado duplo que reluz ouro velho. Só os mais fortes conseguem empunhá-lo. A lâmina e o cabo não são de ouro: foram forjados quando um tirano nasceu."
      },
      
      D8 : {
        name : "Malho Pôr-do-Sol",
        desc : "Um Martelo Regicida deformado que foi corroído pelo miasma. Nem mesmo a matéria inorgânica está imune à corrupção da Rainha, que alterou o brilho e as propriedades desta arma. Mas, enquanto ninguém for capaz de empunhá-la com firmeza, sua eficácia não pode ser contestada."
      },
      
      D9 : {
        name : "Martelo Queimado",
        desc : "Martelo de guerra distorcido por exposição a chamas intensas, que o transformou em uma ferramenta de demolição capaz de esmagar carne e osso, os transformando em cinzas com seu calor funesto."
      },
      
      D10 : {
        name : "Machado Pesado Perdido",
        desc : "Machado usado por aparições caídas que se juntaram aos Perdidos. O tempo passado no miasma alterou as suas propriedades. Ela foi feita para matar os Perdidos, mas passou a alimentar-se de aparições. Esse tipo de ironia é comum no mundo de Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Martelo do Fogo Infernal",
        desc : "Martelo chamuscado por fogo infernal.<br><br>Seu crescimento de destreza é especialmente grande, melhorando muito o poder de ataque físico e a taxa de drenagem.<br><br>O fogo infernal aprisionado no metal está mais quente do que nunca, impregnando de fogo os ataques carregados."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Sharur Monte de Neve",
        desc : "Martelo resfriado pela geada.<br><br>Especializado em defesa e crescimento de força, com um peso levemente menor.<br><br>Esta arma guarda o frio congelante do zero absoluto, que confere gelo aos seus ataques carregados."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Baioneta Regicida",
        desc : "Baioneta produzida em massa para aparições na Operação Regicida. Seu gerador de dádivas permite ataques de longa distância eficientes, tornando-a popular entre os avessos à proximidade."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "A baioneta que Mia sempre manteve perto. Ela foi personalizada e seu peso reduzido para que até um usuário de pequeno porte a pudesse usar. Suas falhas e arranhões contam a história de como protegeu duas vidas importantes. Seu nome é o de uma flor, dado em agradecimento."
      },
      
      E2 : {
        name : "Antimotim",
        desc : "Baioneta feita com peças reaproveitadas e materiais reciclados. Apesar do aspecto, seu gatilho de dádivas opera bem, efetuando ataques compactos. É a arma favorita dos foras da lei: os que costumam ostentar sua fortuna acabam em sua mira."
      },
      
      E3 : {
        name : "Baioneta",
        desc : "Baioneta de lâmina serrada produzida em massa pelo Governo Provisório. Seu gatilho de dádivas dispara rajadas de curto alcance que cobrem uma área. Muitas aparições não têm treinamento, então ela foi feita para ser eficiente até em mãos pouco habilidosas."
      },
      
      E4 : {
        name : "Rubelita Perfurante",
        desc : "Uma baioneta digna vermelha e prata, com o nome de uma joia rubra. Seu cano longo e gracioso dispara balas que parecem perseguir seus alvos. Uma seita de aparições acredita ser parte da realeza e suas armas merecem todo o luxo que eles puderem dar."
      },
      
      E5 : {
        name : "Baioneta Argêntea do Lobo",
        desc : "Baioneta de prata usada pela Unidade de Segurança Cérbero. As lâminas dos dois lados do cano servem para investidas em lutas intensas. Cérbero é uma força de elite formada após a Operação Regicida, e seu equipamento mostra seu valor em mãos habilidosas."
      },
      
      E6 : {
        name : "Desastre Flamejante",
        desc : "Arma do Canhoneiro, uma das marionetes de Mido. Ela abriga um mecanismo que amplifica dádivas de fogo e lança rajadas de uma chama quente e branca. Ela foi feita para um atirador com muita compatibilidade com dádivas e permite o ajuste do formato de seu disparo."
      },
      
      E7 : {
        name : "Baioneta Pôr-do-Sol",
        desc : "Uma Baioneta Regicida deformada que foi corroída pelo miasma. Nem mesmo a matéria inorgânica está imune à corrupção da Rainha, que alterou o brilho e as propriedades desta arma. Mas, enquanto ninguém for capaz de empunhá-la com firmeza, sua eficácia não pode ser contestada."
      },
      
      E8 : {
        name : "Baioneta Negra",
        desc : "Baioneta com uma lâmina e cano pretos. Sua ponta curvada pode cortar até a carne mais dura e abrir a guarda dos inimigos para disparos seguidos. Caçadores de Preto não dão atenção ao peso de suas armas, e buscam poder acima de tudo, então o treinamento é essencial."
      },
      
      E9 : {
        name : "Libertadora",
        desc : "Baioneta usada por Eva, a Guardiã da Cripta. Tem um gatilho de dádivas personalizado que dispara projéteis teleguiados. A arma foi dada a ela por Jack, seu parceiro, e seu poder demonstra sua lealdade a ela."
      },
      
      E10 : {
        name : "Baioneta Perdida",
        desc : "Baioneta usada por aparições caídas que se juntaram aos Perdidos. O tempo passado no miasma alterou as suas propriedades. Ela foi feita para matar os Perdidos, mas passou a alimentar-se de aparições. Esse tipo de ironia é comum no mundo de Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Neve Sangrenta",
        desc : "Baioneta resfriada pela geada.<br><br>Compensa seu baixo poder de ataque e defesa da arma com peso leve e maior ganho de sangue negro.<br><br>Esta arma é repleta de um frio profundo e ao realizar ataques carregados, atira projéteis de gelo poderosos em rápida sucessão, enquanto a lâmina ganha propriedades de gelo."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Corisco",
        desc : "Baioneta galvanizada por um raio.<br><br>É leve e até ataques corpo a corpo podem causar bastante dano.<br><br>Uma misteriosa luz roxa permeia a arma, o que confere eletricidade à lâmina e transforma os projéteis guiados em ataques carregados."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Garra Noturna",
        desc : "Véu de sangue tipo ogro com um estilo<br>tradicional para aparições.<br><br>Sua drenagem é muito eficiente, aumentando o sangue<br>negro ganho de ataques.<br><br>O modelo se destaca em forma e função e é altamente<br>valorizado devido à produção limitada."
      },
      
      A1 : {
        name : "Prata Nobre",
        desc : "Véu de sangue com um manto na forma <br>de asas de morcego. As linhas prateadas <br>contêm sistemas que aprimoram Dádivas <br>de suporte. Seus criadores enfatizaram o <br>estilo, mas aparições costumam se preocupar <br>demais com a sobrevivência para perceber."
      },
      
      A2 : {
        name : "Variante GXM",
        desc : "Véu de sangue feito de placas de armadura<br>e tecido. Protege tanto quanto aparenta e <br>inclui funções que aprimoram Dádivas de <br>suporte. Foi criado por um ex-produtor de <br>equipamentos militares, mas suas fibras e <br>ligas raras em Vein significam que poucos <br>podem usá-lo."
      },
      
      A3 : {
        name : "Libertador de Sangue",
        desc : "Véu de sangue com um manto rasgado.<br>Parece um trapo, mas aprimora Dádivas<br>de ataque e resistência a efeitos de <br>status. Não se sabe quem produziu. É<br>sensível, e o mecanismo do braço direito<br>é instável. Requer reforço adicional."
      },
      
      A4 : {
        name : "Garra Regicida",
        desc : "Véu de sangue usado por forças enviadas <br>na Operação Regicida. Aprimora todo tipo <br>de Dádiva, mas não é tão robusto quanto <br>se desejaria. Foi feito para ser produzido <br>em massa, então foi concebido com base <br>no colete tático padrão, com drenagem <br>adicional para aparições enviadas ao fronte."
      },
      
      A5 : {
        name : "Garra Venosa",
        desc : "Véu de sangue tipo ogro coletado de uma<br>aparição cuja sede a levou a tornar-se um<br>dos Perdidos. É possível que, por causa da <br>transformação, ela seja menos resistente <br>do que outras do mesmo tipo, mas ela mais <br>do que compensa sendo bastante leve.<br><br>Os tentáculos criados por ela ilustram claramente <br>o terror que é tornar-se um dos Perdidos."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Cavaleiro Destruidor",
        desc : "Véu de sangue rasgado por fogo infernal.<br><br>Embora pesado, esta veste concede ao portador alta redução de danos e crescimento de Dádivas escuras.<br><br>A história não registra traços deste véu de sangue. No entanto, o mistério por si só sugere que o objeto guarda novos poderes e possibilidades."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Garra do Crepúsculo",
        desc : "Véu de sangue rasgado por um raio retumbante.<br>Seu peso é compensado pela alta redução de <br>danos e alto crescimento de força.<br>Guerreiros que agora têm muita força ainda buscam <br>conflitos, recorrendo ao ápice de poder deste véu."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Lança Noturna",
        desc : "Véu de sangue de ferrão com um estilo<br>tradicional.<br><br>Oferece menos mobilidade do que a concorrência do<br>mesmo tipo, mas é uma boa proteção contra todo tipo<br>de dano.<br><br>Este modelo se destaca em forma<br>e função e é altamente valorizado devido <br>à produção limitada."
      },
      
      B1 : {
        name : "Asas do Corvo",
        desc : "Véu de sangue muito semelhante às asas<br>de um corvo. Como seu desenho místico<br>sugere, ele aprimora as Dádivas de ataque. <br>Foi criado como protótipo para a série de <br>véus de sangue noturnos. Uma mudança <br>de balanceamento fez deste, o único a ser <br>produzido."
      },
      
      B2 : {
        name : "Manto Invernal",
        desc : "Véu de sangue na forma de um traje de<br>exploração polar. Dificulta a movimentação,<br>mas oferece muita proteção e aprimora<br>Dádivas de suporte. <br>Feito para as expedições às montanhas na <br>busca vã por cristais de sangue,  este modelo <br>acabou deixado de lado."
      },
      
      B3 : {
        name : "Traje Prateado",
        desc : "Véu de sangue que se assemelha à armadura<br>reluzente usada por cavaleiros. É muito<br>resistente a cortes e perfuração. Foi<br>feita por artesãos que queriam manter<br>a noção de beleza humana. Muitas<br>aparições têm esse mesmo desejo."
      },
      
      B4 : {
        name : "Espinho Regicida",
        desc : "Véu de sangue usado pelas forças <br>enviadas na Operação Regicida. <br>Aprimora todas as Dádivas, mas não <br>é tão robusto quanto se desejaria. Os <br>ferrões podem ser usados à distância <br>e servem bem em combates, mas o <br>mecanismo complicado de drenagem<br>impossibilitou sua produção em massa."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Proeminência Graciosa",
        desc : "Véu de sangue rasgado por fogo infernal.<br><br>Seus destaques incluem peso leve, alto crescimento de destreza e alta redução de danos.<br><br>Este belo véu não foi feito só para ser vistoso, mas sua elegância é um reflexo de como o criador buscou o poder."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Manto Glacial",
        desc : "Véu de sangue rasgado pela geada.<br><br>Para compensar o peso, sua redução de danos e crescimento de Dádivas escuras são ótimos.<br><br>O feitio solene e distinto desta veste é a marca da vontade inabalável de proteger a vida das aparições."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Presa Noturna",
        desc : "Véu de sangue canino<br>com estilo tradicional para aparições.<br><br>Tem forte capacidade defensiva, que o torna<br>confiável em todo tipo de combate.<br><br>Este modelo se destaca em forma e função e é<br>de alto valor por ter produção limitada."
      },
      
      C1 : {
        name : "Cães Azuis",
        desc : "Véu de sangue que parece só uma jaqueta.<br>Embora não seja muito resistente, ele<br>oferece alto índice de resistência aos<br>elementos e efeitos de status. Seu baixo<br>custo e estilo que combina com quase<br>tudo o torna popular entre aparições."
      },
      
      C2 : {
        name : "Defensor GXL",
        desc : "Véu de sangue feito de placas de armadura<br>e tecido. Suas propriedades o tornam uma <br>fortaleza, mas é muito frágil contra efeitos <br>de status.<br>Criado por um ex-produtor de equipamentos<br>militares, mas suas fibras e ligas raras em Vein <br>significam que poucas aparições podem usá-lo."
      },
      
      C3 : {
        name : "Forte Espinhoso",
        desc : "Véu de sangue cheio de espinhos metálicos.<br><br>Protege menos do que aparenta, mas aumenta<br>o poder de ataque de Dádivas.<br><br>Dizem que foi criado por produtores do mercado<br>negro. Não serve como roupa casual, mas é<br>intimidador, cumprindo bem o seu propósito."
      },
      
      C4 : {
        name : "Vestes Brancas",
        desc : "Véu de sangue que lembra um manto<br>monástico. Impede um pouco a <br>movimentação e oferece pouca defesa, <br>mas aumenta a eficiência de Dádivas de <br>suporte. Era muito usado por uma seita <br>de aparições religiosas que desapareceu <br>sem qualquer aviso."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Equipamento Violeta",
        desc : "Véu de sangue rasgado por fogo infernal.<br><br>O que lhe falta em crescimento de Dádivas ele compensa com o peso incrivelmente leve e alto crescimento de força.<br><br>Após finalmente adquirir a leveza, os portadores do véu de sangue canino transformam-se em feras à solta na selva, trucidando o campo de batalha sem pensar duas vezes."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Presa do Trovão da Aurora",
        desc : "Véu de sangue rasgado por um raio retumbante.<br>Embora pesado, é ótimo no quesito crescimento de <br>destreza e mente, e é otimizado para Dádivas de luz.<br>Reza a lenda que a aparição mais forte do passado <br>um dia usou este véu, mas não há como saber se isso é verdade."
      },
      
      
      // # IVY #
      D0 : {
        name : "Espinho Noturno",
        desc : "Véu de sangue de hera com um estilo<br>tradicional para aparições.<br><br>Aprimora os efeitos de todas as Dádivas e oferece<br>defesa estável contra ataques não-físicos.<br><br>Este modelo se destaca em forma e função <br>e é altamente valorizado devido à produção limitada."
      },
      
      D1 : {
        name : "Marfim da Graça",
        desc : "Véu de sangue ornamentado com prata.<br>Embora não proteja muito, ele aumenta<br>bastante a eficiência de Dádivas. É um<br>item que busca oferecer um toque de beleza<br>ao mundo arruinado de Vein, com uma<br>estética que as aparições estão prestes a<br>perder por completo."
      },
      
      D2 : {
        name : "Assalto GXH",
        desc : "Véu de sangue feito com um casaco com<br>função de drenagem. Protege bastante, sem<br>sacrificar a movimentação, e também<br>aprimora Dádivas de ataque.<br><br>Foi obra de um ex-produtor de equipamentos<br>militares, mas a raridade de suas fibras<br>e ligas nesta Vein significa que apenas<br>poucas aparições podiam obtê-lo."
      },
      
      D3 : {
        name : "Manto de Prece",
        desc : "Véu de sangue marcado por um desenho<br>elaborado e cor vermelha vibrante. <br>Protege bastante e aprimora a eficiência <br>de Dádivas de suporte. Seu dono original<br>rezava por salvação, mas não se sabe se<br>ele foi atendido."
      },
      
      D4 : {
        name : "Surto Suicida",
        desc : "Véu de sangue que parece um colar feito<br>de espinhos. Aumenta bastante o poder de<br>Dádivas de ataque, mas quase não oferece <br>defesa física. Dizem que o seu criador era um <br>engenheiro insano que acreditava que a única <br>defesa era matar o inimigo primeiro. Por isso, <br>poucos o usam espontaneamente."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Espinho Encantador",
        desc : "Véu de sangue rasgado pela geada.<br><br>Em troca do peso, ele oferece redução de danos e altíssimo crescimento de destreza.<br><br>O manto elegante esconde o olhar cintilante de quem anseia pelo beijo da morte, o doce sabor de sangue fresco."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Espinhas Mestras",
        desc : "Véu de sangue rasgado por um raio retumbante.<br>O que lhe falta em crescimento de Dádivas é <br>compensado por seu peso leve e grande crescimento <br>de destreza e determinação.<br>Dizem que a aparição que usa este véu sente que criou asas."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Alívio",
        desc : "Reduz o peso de um equipamento,<br>mas também os seus atributos básicos."
      },
      
      A1 : {
        name : "Fortificação",
        desc : "Aumenta o peso de um equipamento<br>e também os seus atributos básicos."
      },
      
      A2 : {
        name : "Intensificação",
        desc : "Dá maior cresc. atributo a um equipamento.<br>Reduz o ataque da arma e de Dádivas."
      },
      
      A3 : {
        name : "Dádivas",
        desc : "Grande aum. de ataq. de arma e eficiência de dádivas<br>de um véu de sangue. Custa grd redução cresc. atributos."
      },
      
      A4 : {
        name : "Devorar",
        desc : "Aumenta a drenagem de um equipamento.<br>Reduz o ataque da arma e de Dádivas."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Fogo",
        desc : "Dá propriedades de fogo a um equipamento.<br>Reduz ataque de arma / Dádivas e cresc. atributos."
      },
      
      B1 : {
        name : "Gelo",
        desc : "Dá propriedades de gelo a um equipamento.<br>Reduz ataque de arma / Dádivas e cresc. atributos."
      },
      
      B2 : {
        name : "Eletricidade",
        desc : "Dá propriedades elétricas a um equipamento.<br>Reduz ataque de arma / Dádivas e cresc. atributos."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Veneno",
        desc : "Cria equipamento que envenena inimigos, mas<br>tem Dádivas e ataque diminuídos."
      },
      
      C1 : {
        name : "Atordoamento",
        desc : "Cria equipamento que atordoa inimigos, mas<br>tem Dádivas e ataque diminuídos."
      },
      
      C2 : {
        name : "Inibição",
        desc : "Cria equipamento que inibe inimigos, mas<br>tem Dádivas e ataque diminuídos."
      },
      
      C3 : {
        name : "Lentidão",
        desc : "Cria equipamento que desacelera inimigos,<br>mas tem Dádivas e ataque diminuídos."
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
