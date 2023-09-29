// # Español - Latinoamérica TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(Ninguno)',
  
  
  // titles/labels
  weapon : "Arma",
  blood_veil : "Velo de sangre",
  transform : "Transformar",
  blood_code : "Código de sangre",
  gift_type : "Tipos de don",
  passive : "Pasivo",
  active : "Activo",
  options : "Opciones",
  code_owner : "Código propietario ",
  origin : "Acceso:",
  companion_rank : "Méritos como compañero",
  rv_mastery : "Maestría de Rv",
  exclusive : "Exclusivo",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Confirmar",
  modal_close : "Cerrar",
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
    initial : "Predeterminado",
    '1h' : "Espada de una mano",
    '2h' : "Espada de dos manos",
    halberd : "Alabarda",
    hammer : "Martillo",
    bayonet : "Bayoneta",
    light_gifts : "Luz Dones",
    dark_gifts : "Oscuridad Dones",
    debuff : "Debuffs",
    misc : "Misceláneo"
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
  lv : "Nivel",
  hp : "PS",
  sta : "Aguante",
  ichor : "Icor",
  str : "Fuerza",
  dex : "Destreza",
  mnd : "Mente",
  wil : "Voluntad",
  vit : "Vitalidad",
  for : "Fortaleza",
  
  
  // weight
  weight : "Peso",
  total_weight : "Peso total",
  weight_limit : "Límite de peso",
  
  
  // attack stats
  attack : "Ataque",
  drain_attack : "Ataque de drenado",
  physical : "Físico", // weapon damage
  base : "Base", // base damage
  scaling : "Escala", // damage from scaling
  drain_rating : "Vel. drenado",
  
  
  // defense stats
  defense : "Defensa",
  stamina_reduction : "Reduc. aguante",
  balance : "Equilibrio",
  base_balance : "Equilibrio de base",
  
  
  // resistances
  status_effects : "Efectos de estado",
  resistances : "Resistencias",
  venom : "Veneno",
  stun : "Aturdimiento",
  inhibit : "Inhibición",
  slow : "Lentitud",
  leak : "Hemorragia",
  
  
  // misc menu options
  passive_effect : "Efectos pasivos",
  on : "sí",
  off : "no",
  hint : "Leer pista ",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Escala del atributo",
  required_stats : "Atributos necesarios",
  
  
  // mobility
  mobility : "Movilidad",
  mobi : {
    base : "Movilidad básica", // label for blood code mobility type (also used in the status display)
    slow : "Lentitud",
    normal : "Normal",
    quick : "Rápido"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "Árbol",
    dark : "Oscuro",
    light : "Luz",
    skill : "Habilidad"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "Espada de una mano",
  '2h' : "Espada de dos manos",
  halberd : "Alabarda",
  hammer : "Martillo",
  bayonet : "Bayoneta",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Tajo",
    crush : "Aplastar",
    pierce : "Perforar",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Sangre",
    fire : "Fuego",
    ice : "Hielo",
    lightning : "Rayo"
  },
  
  
  // gift stats
  gift : "Don", // singular
  gifts : "Dones", // plural
  
  ichor_cost : "Costo de icor",
  cooldown : "Recarga",
   seconds : " seg.", // displayed after the cooldown number
  physical : "Tipo de ataque",
  elemental : "No físico",
  usage_req : "Requisitos de uso",
  
  
  // removal (of skills/equipment)
  remove : "Quitar",
  remove_desc : "Eliminar las habilidades o equipos del equipo actual.",
  
  
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
        name : "Matarreinas",
        desc : "Tu propio código de sangre, que se dio<br>por perdido en la lucha contra la reina.<br>Los viejos sentimientos resuenan en tu interior.<br>Esta vez debes garantizar una paz duradera.<br>Este código está bien equilibrado para la exploración<br>y el combate cuerpo a cuerpo. Posee una gran cantidad de PS y<br>aguante.",
        owner : "Jugador"
      },
      
      A1 : {
        name : "Luchador",
        desc : "El código de sangre de un guerrero<br>que empuña una espada de su misma altura.<br>Alberga la voluntad de alguien que arriesgó<br>su vida peleando con todas sus fuerzas<br>en la Operación Matarreinas. Este<br>código mejora la el aguante en el combate<br>cuerpo a cuerpo. Aumenta las habilidades<br>basadas en fuerza y destreza.",
        owner : "Desconocido"
      },
      
      A2 : {
        name : "Ranger",
        desc : "El código de sangre de una aparición<br>que se movía ágilmente en el campo de batalla.<br>Alberga la voluntad de alguien que rescató<br>a los que vivían sumidos en el miedo<br>a los Perdidos y buscaba gotas de sangre para ayudar a los demás.<br>Este código es ideal para ofrecer<br>mejoras de apoyo y defensa con dones.",
        owner : "Desconocido"
      },
      
      A3 : {
        name : "Conjurador",
        desc : "El código de sangre de una aparición que convierte<br>la sangre que absorbe en un poder abrumador.<br>Alberga la voluntad de alguien que con astucia usó<br>dones complejos para destruir hordas de Perdidos.<br>Este código se especializa en dones<br>de ataques poderosos que se pueden usar a distancia.",
        owner : "Desconocido"
      },
      
      A4 : {
        name : "Bersérker",
        desc : "Un código de sangre heredado de un núcleo de vestigio reparado.<br>Alberga la voluntad de alguien que se arrepintió<br>de pecados pasados y combatió la agonía de la sed<br>para salvar a los demás.<br><br>Este código usa fuerza y aguante, y su baja reserva<br>de icor se compensa con una armadura pesada.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometeo",
        desc : "Un código de sangre recibido de Louis.<br>Alberga su voluntad, forjada y endurecida tras superar<br>incontables dificultades en nombre de la salvación<br>de las apariciones.<br><br>Este código está bien equilibrado para el combate, pero es algo frágil.<br>Sus dones refuerzan las habilidades de esquivar y bloquear.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Cazador",
        desc : "Un código de sangre heredado de un núcleo de vestigio reparado.<br>Alberga la voluntad de alguien que de algún modo no perdió la esperanza,<br>pese a que lo usaron como peón<br>y haya soportado un día infernal tras otro.<br><br>Este código es ideal para el combate a distancia<br>y usa dones que refuerzan los ataques a distancia con bayoneta.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercurio",
        desc : "Un código de sangre recibido de Coco.<br>Alberga su voluntad de combate, que ignora el temor<br>al frenesí y lucha para viajar por un mundo en ruinas,<br>en busca de los materiales para reconstruir la civilización.<br><br>Este código permite explorar de forma segura gracias a sus atributos<br>y dones equilibrados relacionados con el aguante y la bruma.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermes",
        desc : "Un código de sangre recibido de Davis.<br>Alberga su decidida voluntad de perseguir un rayo<br>de esperanza en medio de la desesperación y lanzarse al peligro<br>para encontrar una nueva esperanza.<br><br>Presenta un buen equilibrio entre los ataques cuerpo a cuerpo<br>y diversos dones prácticos.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Buscador oscuro",
        desc : "Un código de sangre heredado de un núcleo de Vestigio reparado.<br>Alberga la amarga voluntad de cumplir con el deber,<br>intentando preservar su valor incluso<br>cuando este parece que se desvanece.<br><br>Este código presenta muchos dones para el combate,<br>especialmente los destinados a tratar el veneno.",
        owner : "Sucesor anónimo"
      },
      
      A10 : {
        name : "Atlas",
        desc : "Un código de sangre recibido de Yakumo.<br>Alberga su ferviente voluntad de arriesgar su vida<br>luchando para proteger a aquellos que le importan.<br><br>Este código permite el uso de una armadura pesada,<br>por lo que es perfecto para resistir en el combate<br>cuerpo a cuerpo. Presenta dones útiles<br>para enfrentarse a fuertes amenazas.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Asesino",
        desc : "Un código de sangre heredado de un núcleo de Vestigio reparado.<br>Alberga la decidida voluntad de sobrevivir<br>en un mundo caótico para obtener la libertad.<br><br>Es ideal para el combate cuerpo a cuerpo.<br>Presenta dones perfectos para atacar por sorpresa.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artemis",
        desc : "Un código de sangre recibido de Mia.<br>Alberga su intrépida voluntad de superar<br>un destino cruel y liberar a aquellos que sufren.<br><br>Este código presenta mucha resistencia y dones con características de ataque,<br>pero tiene poco aguante.<br>También presenta dones que aumentan las habilidades de drenado.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Isis",
        desc : "Un código de sangre recibido de Aurora.<br>Alberga su decidida voluntad de defender y liberar<br>a alguien que eligió sufrir para que las apariciones<br>pudieran vivir en paz.<br><br>Este código es ideal en el combate a distancia<br>al superar a los enemigos con varios ataques de icor.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Tórax de la reina",
        desc : "Un código de sangre con parte del poder de la reina<br>recibido de la reliquia de Aurora.<br>Crea una sensación perturbadora que devora por dentro,<br>pero proporciona un poder apabullante que recorre las venas.<br><br>Este código es ideal para ataques a distancia<br>y para superar al enemigo con diversos<br>dones de ataque.",
        owner : "Reina"
      },
      
      A15 : {
        name : "Eos",
        desc : "Un código de sangre recibido de Io.<br>Alberga su firme voluntad de levantarse y tomar sus propias<br>decisiones en vez de ser solo un Guardián.<br><br>Este código presenta dones de apoyo, gran aguante<br>y mucho icor.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Un código de sangre recibido de Nicola.<br>Alberga su benigna voluntad de resistir el tormento<br>del combate para que sus seres queridos<br>puedan vivir en un mundo más pacífico.<br><br>Este código presenta gran aguante y peso total,<br>por lo que es ideal para el combate cuerpo a cuerpo. Su bajo nivel de icor<br>se compensa con una armadura pesada.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Aliento de la reina",
        desc : "Un código de sangre con parte del poder de la reina<br>recibido de la reliquia de Nicola.<br>Crea una sensación perturbadora que devora por dentro,<br>pero proporciona un poder apabullante que recorre las venas.<br><br>Este código es ideal para los estilos de combate<br>que utilizan dones mejorados. Complementa<br>sus escasos atributos con dones.",
        owner : "Reina"
      },
      
      A18 : {
        name : "Sobreviviente",
        desc : "Un código de sangre heredado de un núcleo de Vestigio reparado.<br>Alberga la firme voluntad de arriesgar<br>la propia vida luchando por el futuro<br>de las nuevas generaciones.<br><br>Este código se basa en la destreza y presenta dones<br>que son útiles en el combate.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Caballero oscuro",
        desc : "Un código de sangre heredado de un núcleo de vestigio reparado.<br>Alberga una trágica voluntad que fue sujeta a experimentos inhumanos<br>antes de convertirse en un títere de Mido<br>y, finalmente, en uno de los Perdidos.<br><br>Este don se basa en un gran aguante y fuerza.<br>También presenta dones eficaces si se usan con una alabarda.",
        owner : "Miguel García"
      },
      
      A20 : {
        name : "Scathach",
        desc : "Un código de sangre recibido de Emily.<br>Alberga su poderosa voluntad que tomó<br>el lugar de sus camaradas durmientes y siguió combatiendo en su defensa.<br><br>Este don está bien equilibrado para los dones y los ataques físicos.<br>Es ideal para dones de fuego.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Garra de la reina",
        desc : "Un código de sangre con parte del poder de la reina<br>recibido de la reliquia de Emily.<br>Crea una sensación perturbadora que devora por dentro,<br>pero proporciona un poder apabullante que recorre las venas.<br><br>Este código te permite controlar el campo de batalla<br>y superar al enemigo tanto con dones<br>como con ataques físicos.",
        owner : "Reina"
      },
      
      A22 : {
        name : "Harmonia",
        desc : "Un código de sangre recibido de Eva.<br>Alberga su voluntad de pagar su deuda y<br>dedicar su vida al que la salvó de la esclavitud.<br><br>Este código mejora las bonificaciones de concentración<br>y presenta dones oscuros excelentes. Flaquea si te desequilibran,<br>pero otorga una gran cantidad de icor.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Garganta de la reina",
        desc : "Un código de sangre con parte del poder de la reina<br>recibido de la reliquia de Eva.<br>Crea una sensación perturbadora que devora por dentro,<br>pero proporciona un poder apabullante que recorre las venas.<br><br>Este código es ideal para el combate basado en dones<br>y presenta muchos dones de apoyo.",
        owner : "Reina"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "Un código de sangre recibido de Jack.<br>Alberga su inquebrantable voluntad de sacrificarlo<br>todo por el deber y por mantener el equilibrio.<br><br>Este código es ideal para el combate cuerpo a cuerpo<br>muy agresivo, pero su peso<br>es extremadamente bajo.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Hefesto",
        desc : "Un código de sangre recibido de Murasame.<br>Alberga su apasionada voluntad de apoyar a los aliados<br>que se lanzan a difíciles combates y vela por ellos<br>con una sonrisa cuando regresan a casa.<br><br>Este código se especializa en las armas basadas en la destreza<br>y usa dones enrevesados para jugar con el enemigo.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Guerrero",
        desc : "Un código de sangre heredado de un núcleo de Vestigio reparado.<br>Alberga la orgullosa voluntad de un guerrero veterano<br>que no deja de golpear con su arma hasta el final.<br><br>Este código es ideal para los estilos de lucha basados en la fuerza<br>y otorga dones para sobrevivir.",
        owner : "Asistente de Murasame"
      },
      
      A27 : {
        name : "Explorador",
        desc : "Un código de sangre heredado de un núcleo de Vestigio reparado.<br>Alberga una voluntad amorosa de dejar de lado los propios deseos<br>y vivir por el bien de los seres queridos.<br><br>Este código es ideal para el combate basado en dones<br>con capacidad de drenado. Permite el uso de armadura ligera,<br>para que te muevas con rapidez en combate.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Reina",
        desc : "Un código de sangre surgido al reunir todas las reliquias<br>y convertirse en la reina.<br>La voluntad que alberga no contiene ningún indicio<br>de furia o tristeza. Tan solo pura soledad.<br><br>Este código se especializa en dones y presenta<br>un alto nivel de icor, lo que te permite superar al enemigo.",
        owner : "Reina"
      },
      
      A29 : {
        name : "Hades",
        desc : "Un código de sangre recibido de Silva.<br>Alberga su decidida voluntad de renunciar a todo<br>y soportar un completo aislamiento para salvar el futuro de la humanidad.<br><br>Este código presenta un gran poder de ataque obtenido<br>de la fuerza y la destreza.<br>Es ideal para usar equipos pesados.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Démeter",
        desc : "Un código de sangre recibido de Karen.<br>Alberga su compasiva voluntad de sacrificarse<br>por aquellos que sufren el tormento de la sed y portan con el peso<br>de sus pecados debido a un cruel destino.<br><br>Este código permite el apoyo basado en dones gracias a su alto nivel de icor.<br>También inflige daños basados en la fuerza.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Un código de sangre heredado del núcleo de Vestigio reparado de Cruz.<br>Alberga su decidida voluntad de eliminar una amenaza<br>y salvar a los débiles de los días<br>en que se inició el proyecto Reina.<br><br>Este código presenta dones que sirven para atacar<br>y defender. Posee dones únicos que implican el autosacrificio.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Heraldo",
        desc : "El código de sangre de alguien con el corazón<br>rebosante de ambición velada antes de surgir<br>como aparición.<br>Está lleno de la inexorable voluntad<br>de aplastar a todos los demás usando su poder etéreo<br>y que todos lo conozcan en Vein, Cárcel de las<br>Brumas. Alberga dones únicos que solo pueden<br>usar aquellos que cuenten con la determinación necesaria.",
        owner : "Desconocido"
      },
      
      A33 : {
        name : "Astrea",
        desc : "Un código de sangre que apareció como manifestación<br>del deseo de felicidad de Mia.<br>Está lleno de su deseo de ofrecer alivio<br>a los aliados que por suerte regresan a salvo de la batalla.<br><br>Este código ofrece equilibrio y estabilidad en combate<br>y presenta dones útiles en la exploración.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclepio",
        desc : "Código de sangre centrado en el aguante y los PS heredado del<br>núcleo de Vestigio reparado de Valerio, antiguo compañero de Jack.<br><br>Contiene la firme voluntad de apoyar y proteger a todos.<br><br>Aunque este código no tiene muchas opciones para el combate directo,<br>ayuda mucho a la supervivencia con sus PS altos y el aguante.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Aquiles",
        desc : "Código de sangre con gran destreza y aguante<br>heredado de un núcleo de Vestigio reparado.<br><br>Contiene la férrea voluntad de lanzarse a recorrer<br>incontables campos de batalla.<br><br>La riqueza en aguante, armas ligeras<br>y ataques veloces de este código es ideal para ejercer presión<br>en el combate frente a frente.",
        owner : "Desconocido"
      },
      
      A36 : {
        name : "Surt",
        desc : "Código de sangre sacado de un horror sellado<br>en lo más hondo de las profundidades.<br><br>El resplandor del infierno en llamas que contiene<br>todavía deslumbra tras su larga hibernación, lo que llena el cuerpo<br>de un poderío aterrador que pulveriza a todo el que se atreva a acercarse.<br><br>Con gran fuerza, fortaleza y una mucha reserva de aguante,<br>este código de sangre es perfecto para batallas dinámicas.",
        owner : "Caballero del Fuego Eterno"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pólux",
        desc : "Código de sangre centrado en la fuerza y los PS heredado de un núcleo de<br>Vestigio reparado.<br><br>Contiene la voluntad de un guerrero de buen corazón que luchó<br>codo a codo con amigos.<br><br>Este código de sangre es excelente para recibir ataques enemigos con defensa<br>fuerte y durabilidad, y luego lanzar poderosos golpes de respuesta.",
        owner : "Desconocido"
      },
      
      A38 : {
        name : "Ymir",
        desc : "Código de sangre sacado de un horror sellado<br>en las profundidades.<br><br>El brillo de las flores congeladas en su interior resplandece<br>igual que antes de su larga hibernación, afilando el buen ojo para<br>la perfecta oportunidad de aniquilarlos a todos de una sola vez.<br><br>Este código ostenta gran voluntad y vitalidad,<br>mejorando tanto los PS como el poder de los dones oscuros.",
        owner : "Emperatriz Congelada"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseo",
        desc : "Código de sangre con gran voluntad y mente heredadas<br>de un núcleo de Vestigio reparado.<br><br>Contiene la voluntad de un guerrero inteligente que tuvo muchas <br>batallas en la palma de la mano.<br><br>Este código, que derrocha poderosos regalos y mucho icor, está hecho<br>para aniquilar un enemigo detrás de otro.",
        owner : "Desconocido"
      },
      
      A40 : {
        name : "Váli",
        desc : "Código de sangre sacado de un horror sellado<br>en lo más hondo de las profundidades.<br><br>El restallido de los truenos en el interior no anula<br>su larga hibernación, lo que otorga el poder de fortalecerse<br>a uno mismo a voluntad y atrapar a todos en su camino.<br><br>Con mucha destreza y mente, este código se especializa en una<br>amplia selección de regalos luminosos que apoyan la batalla<br>con mejoras.",
        owner : "Señor del Trueno"
      },
      
      A41 : {
        name : "Orión",
        desc : "Código de sangre con alta voluntad y destreza<br>heredada de un núcleo de Vestigio reparado.<br><br>Contiene la voluntad de un francotirador talentoso que en el pasado<br>bailó por el campo de batalla con elegancia.<br><br>Este código está optimizado para el combate a distancia, y su<br>gran voluntad otorga mucho poder de ataque a las rondas de disparos.",
        owner : "Desconocido"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Mejora de salud",
        desc : "Aumenta los PS máximos."
      },
      
      A1 : {
        name : "Estimulante de salud",
        desc : "Aumenta los PS máximos."
      },
      
      A2 : {
        name : "Mejora de aguante",
        desc : "Aumenta el aguante máximo."
      },
      
      A3 : {
        name : "Estimulante de aguante",
        desc : "Aumenta el aguante máximo."
      },
      
      A4 : {
        name : "Velocista",
        desc : "Reduce el aguante consumido al correr."
      },
      
      A5 : {
        name : "Colmillos afilados",
        desc : "Aumenta el daño causado por un drenaje especial<br>hecho tras un bloqueo/ataque por la espalda."
      },
      
      A6 : {
        name : "Colmillo tenaza",
        desc : "Aumenta el daño causado por los ataques<br>de drenaje tras lanzar un ataque."
      },
      
      A7 : {
        name : "Colmillo heroico",
        desc : "Aumenta el daño causado por drenajes cargados."
      },
      
      A8 : {
        name : "Destrucción veloz",
        desc : "Aumenta el daño causado<br>en proporción a tu movilidad."
      },
      
      A9 : {
        name : "Instinto de supervivencia",
        desc : "Mejora las habilidades de don, el poder<br>de ataque de las armas y del drenado cuando<br>tus PS bajan de cierta cantidad."
      },
      
      A10 : {
        name : "Evasión astuta",
        desc : "Aumenta la cantidad de concentración ganada<br>al esquivar ataques."
      },
      
      A11 : {
        name : "Concentración resistente",
        desc : "Aumenta la concentración ganada<br>al recibir daño."
      },
      
      A12 : {
        name : "Aumento de drenado con arma",
        desc : "Aumenta la velocidad de drenaje<br>de los ataques con armas."
      },
      
      A13 : {
        name : "Avaricia",
        desc : "Aumenta la cantidad de icor ganado<br>con los ataques de drenaje."
      },
      
      A14 : {
        name : "Juramento de icor",
        desc : "Reduce los PS máximos para aumentar<br>la cantidad de icor que se puede almacenar."
      },
      
      A15 : {
        name : "Mejora de icor máximo",
        desc : "Aumenta la cantidad máxima de icor<br>que se puede almacenar."
      },
      
      A16 : {
        name : "Aumento velocidad don",
        desc : "Aumenta la velocidad de los dones."
      },
      
      A17 : {
        name : "Acelerador de carga",
        desc : "Aumenta la velocidad<br>de las acciones cargadas."
      },
      
      A18 : {
        name : "Aumento de perjuicio",
        desc : "Aumenta la acumulación del perjuicio<br>contra los enemigos."
      },
      
      A19 : {
        name : "Ambición de aparición",
        desc : "Te permite equiparte con Velos de sangre<br>y armas de mayor peso."
      },
      
      A20 : {
        name : "Oportunismo",
        desc : "Aumenta el daño con armas infligido<br>a enemigos con estados de enfermedad."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Delirio de sangre",
        desc : "Aumenta enormemente el límite de icor máximo, <br>pero disminuye en gran medida el poder de regalo y <br>la velocidad de recuperación de aguante."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Aumento de equilibrio",
        desc : "Aumenta el equilibrio."
      },
      
      B1 : {
        name : "Bloqueo ágil",
        desc : "Restaura el aguante por completo<br>al bloquear un ataque."
      },
      
      B2 : {
        name : "Aumento guardia de drenaje",
        desc : "Aumenta tu velocidad de drenaje<br>al defenderte de un ataque enemigo."
      },
      
      B3 : {
        name : "Defensa firme",
        desc : "Recibir daño letal cuando tus PS están<br>por encima de cierta cantidad te deja con 1 PS.",
        usage_req : "Atlas Códigos de sangre"
      },
      
      B4 : {
        name : "Captura de sangre",
        desc : "Esquivar los ataques enemigos drena su icor<br>según la velocidad de drenaje de tu arma.",
        usage_req : "Artemis Códigos de sangre"
      },
      
      B5 : {
        name : "Trampa evasiva",
        desc : "Esquivar ataques enemigos genera<br>proyectiles con icor que atacan al enemigo.",
        usage_req : "Hefesto Códigos de sangre"
      },
      
      B6 : {
        name : "Resistencia venenosa",
        desc : "Aumenta la resistencia al veneno."
      },
      
      B7 : {
        name : "Res. aturdimiento",
        desc : "Aumenta la resistencia al aturdimiento."
      },
      
      B8 : {
        name : "Resistencia inhibición",
        desc : "Aumenta la resistencia a inhibición."
      },
      
      B9 : {
        name : "Resistencia lentitud",
        desc : "Aumenta la resistencia a lentitud."
      },
      
      B10 : {
        name : "Resistencia hemorragia",
        desc : "Aumenta la resistencia a la hemorragia."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Aumento de fuerza",
        desc : "Aumenta la fuerza."
      },
      
      C1 : {
        name : "Aumento de destreza",
        desc : "Aumenta la destreza."
      },
      
      C2 : {
        name : "Aumento de mente",
        desc : "Aumenta la mente."
      },
      
      C3 : {
        name : "Aumento de voluntad",
        desc : "Aumenta la voluntad."
      },
      
      C4 : {
        name : "Aumento de vitalidad",
        desc : "Aumenta la vitalidad."
      },
      
      C5 : {
        name : "Aumento de fortaleza",
        desc : "Aumenta la fortaleza."
      },
      
      C6 : {
        name : "Aumento de fuerza y destreza",
        desc : "Aumenta la fuerza y la destreza."
      },
      
      C7 : {
        name : "Aumento de fuerza y voluntad",
        desc : "Aumenta la fuerza y la voluntad."
      },
      
      C8 : {
        name : "Aumento de fuerza y vitalidad",
        desc : "Aumenta la fuerza y la vitalidad."
      },
      
      C9 : {
        name : "Aumento de destreza y voluntad",
        desc : "Aumenta la destreza y la voluntad."
      },
      
      C10 : {
        name : "Aumento de destreza y fortaleza",
        desc : "Aumenta la destreza y la fortaleza."
      },
      
      C11 : {
        name : "Aumento de mente y voluntad",
        desc : "Aumenta la mente y la voluntad."
      },
      
      C12 : {
        name : "Aumento de mente y vitalidad",
        desc : "Aumenta la mente y la vitalidad."
      },
      
      C13 : {
        name : "Aumento de mente y fortaleza",
        desc : "Aumenta la mente y la fortaleza."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Aumento de fuerza y fortaleza",
        desc : "Aumenta la fuerza y la fortaleza."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Aumento de voluntad y vitalidad",
        desc : "Aumenta la voluntad y la vitalidad."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Aumento de destreza y mente.",
        desc : "Aumenta la destreza y la mente."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span> Impulso oscuro',
        desc : "Aumenta el efecto de los dones oscuros<br>durante la concentración."
      },
      
      D1 : {
        name : '<span style="font-family:GEZFont;"></span> Impulso luminoso',
        desc : "Aumenta el efecto de los dones luminosos<br>durante la concentración."
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span> Estabilidad de guardia',
        desc : "Reduce el aguante gastado<br>en la defensa durante la concentración."
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span> Guardia concentrada',
        desc : "Aumenta temporalmente la defensa<br>contra armas contra ataques físicos<br>durante la concentración."
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span> Uso de aguante concentrado',
        desc : "Reduce el aguante gastado durante la concentración."
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span> Concentración mantenida',
        desc : "Reduce la velocidad de consumo del nivel<br>de concentración cuando estás concentrado."
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span> Matanza concentrada',
        desc : "Aminora la velocidad a la que los ataques<br>reducen el nivel de concentración<br>cuando estás concentrado."
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span> Golpes de icor',
        desc : "Reduce el costo de icor de los ataques<br>con armas durante la concentración."
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span> Reducción de icor',
        desc : "Reduce el consumo de icor<br>durante la concentración.",
        usage_req : "Garganta de la reina Códigos de sangre"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora drenaje',
        desc : "Aumenta la velocidad de drenaje<br>durante la concentración."
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span> Vel. don concentrada',
        desc : "Aumenta la velocidad de los dones<br>durante la concentración."
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora sangre',
        desc : "Añade daño de sangre al arma actual<br>durante la concentración."
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora fuego',
        desc : "Añade daño de fuego al arma actual<br>durante la concentración."
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora hielo',
        desc : "Añade daño de hielo al arma actual<br>durante la concentración."
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora rayo',
        desc : "Añade daño de rayo al arma actual<br>durante la concentración."
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora veneno',
        desc : "Aplica un efecto de veneno a tu arma actual<br>durante la concentración."
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span> Mejora aturdimiento',
        desc : "Aplica el efecto de aturdimiento a tu arma<br>actual durante la concentración."
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span> Sonrisa de la diosa',
        desc : "Recupera los PS al inicio del estado<br>de concentración."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span> Concentración de icor',
        desc : "Recupera icor al entrar en un estado concentrado."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : "&CONCENTRACIÓN; aumento de todos los atributos",
        desc : "Aumenta todos los atributos durante la concentración."
      },
      
      D20 : {
        name : "&FOCO; poder de frenado",
        desc : "Aumenta la distancia a la que los enemigos <br>pierden el equilibrio con los disparos de tu <br>bayoneta mientras tú estás concentrado."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "Maestría espada de mano",
        desc : "Aumenta el poder de ataque cuando se lleva<br>una espada de una mano."
      },
      
      E1 : {
        name : "Maestría espada 2 manos",
        desc : "Aumenta el poder de ataque<br>con las espadas de dos manos."
      },
      
      E2 : {
        name : "Maestría de alabarda",
        desc : "Aumenta el poder de ataque cuando se lleva<br>una alabarda equipada."
      },
      
      E3 : {
        name : "Maestría de martillo",
        desc : "Aumenta temporalmente el poder de ataque<br>cuando te equipas con un gran martillo."
      },
      
      E4 : {
        name : "Maestría de bayoneta",
        desc : "Aumenta el poder de ataque cuando se lleva<br>una bayoneta equipada."
      },


      // # MISC #
      F0 : {
        name : "Cambio de regeneración",
        desc : "Reduce la cantidad de veces que se puede<br>usar la regeneración, pero aumenta<br>la cantidad curada."
      },
      
      F1 : {
        name : "Regeneración mejorada",
        desc : "Aumenta la cantidad de PS recuperados<br>por la habilidad Regeneración."
      },
      
      F2 : {
        name : "Regeneración aumentada",
        desc : "Aumenta la cantidad de veces<br>que puede usarse la regeneración."
      },
      
      F3 : {
        name : "Guía",
        desc : "Restablece tu poder de regeneración cuando<br>tu compañero tiene cero PS y se dispersa.",
        usage_req : "Astrea Códigos de sangre"
      },
      
      F4 : {
        name : "Robo de vida",
        desc : "Restaura PS al derrotar a los enemigos."
      },
      
      F5 : {
        name : "Drenaje regenerativo",
        desc : "Hace que los ataques de drenaje<br>recuperen PS."
      },
      
      F6 : {
        name : "Danza de espadas eterna",
        desc : "Versión mejorada de la Danza de espadas. Aumenta<br>el poder de ataque cuando esquives los ataques del rival.",
        usage_req : "Prometeo Códigos de sangre"
      },
      
      F7 : {
        name : "Veneno que absorbe sangre",
        desc : "Gana icor cuando los enemigos en un cierto<br>radio reciben daño por veneno.",
        usage_req : "Buscador oscuro Códigos de sangre"
      },
      
      F8 : {
        name : "Hambre de aparición",
        desc : "Aumenta la cantidad de bruma obtenida<br>al derrotar a enemigos."
      },
      
      F9 : {
        name : "Codicia de aparición",
        desc : "Aumenta la probabilidad de que<br>los enemigos derrotados dejen caer objetos."
      },
      
      F10 : {
        name : "Guía de pionero",
        desc : "Hace que los dones<br>sean más fáciles de dominar."
      },
      
      F11 : {
        name : "Reducción de daño al caer",
        desc : "Reduce el daño causado al caer."
      },
      
      F12 : {
        name : "Salvación",
        desc : "Cuando un aliado recibe daño letal,<br>sus PS se reducen a 1 y recibes<br>el resto del daño en su lugar.<br>Este efecto solo se activa<br>si tienes 2 o más PS. El daño que recibes<br>no puede reducir tus PS a 0.",
        usage_req : "Ishtar Códigos de sangre"
      },
      
      F13 : {
        name : "Incansable",
        desc : "Acelera la regeneración de tu aguante."
      },
      
      F14 : {
        name : "Refuerzo",
        desc : "Aumenta la regeneración al recolectar<br>bruma perdida tras su dispersión."
      },
      
      F15 : {
        name : "Daga de aparición",
        desc : "Lanzas un cuchillo que da icor<br>cuando golpea a un enemigo."
      },
      
      F16 : {
        name : "Atención total",
        desc : "Atacar con drenado cargado otorgará<br>concentración."
      },
      
      F17 : {
        name : "Carisma",
        desc : "Aumenta los atributos de tu compañero."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Flecha sónica",
        desc : "Dispara un proyectil creado con el poder<br>del icor. Una sola ráfaga no es impresionante,<br>pero es más eficaz contra grupos."
      },
      
      A1 : {
        name : "Disparo de sangre",
        desc : "Dispara gran un proyectil creado<br>con el poder de la sangre. Esta versión mejorada<br>de la flecha sónica tiene un impacto mayor."
      },
      
      A2 : {
        name : "Rugido sanguíneo",
        desc : "Genera un proyectil de sangre nauseabunda<br>que vuela hacia el objetivo.<br><br>Un impacto directo <br>desgarra la carne y deja una herida<br>que sigue causando dolor a la víctima."
      },
      
      A3 : {
        name : "Rugido flamígero",
        desc : "Dispara una intensa llama al objetivo.<br>Se dice que este ataque quema<br>tanto a sus objetivos que solo queda<br>una sombra de ellos."
      },
      
      A4 : {
        name : "Rugido congelante",
        desc : "Dispara un proyectil de hielo al objetivo.<br>Un impacto directo absorbe el calor<br>de la víctima, detiene su proceso mental<br>y entorpece su juicio."
      },
      
      A5 : {
        name : "Rugido de plasma",
        desc : "Genera un pulso de electricidad<br>que vuela hacia el objetivo.<br>Un impacto directo hierve la sangre de la víctima,<br>lo que causa un dolor intenso."
      },
      
      A6 : {
        name : "Estaca de sangre",
        desc : "Dispara un proyectil de icor perforador<br>al objetivo.<br>La fuerza creada está muy concentrada<br>y golpea a los enemigos<br>como una bola de cañón."
      },
      
      A7 : {
        name : "Estaca de fuego",
        desc : "Dispara un proyectil de fuego abrasador<br>al objetivo.<br>La fuerza creada está muy concentrada<br>y golpea a los enemigos<br>como una bola de cañón."
      },
      
      A8 : {
        name : "Estaca de hielo",
        desc : "Dispara un proyectil de hielo al objetivo.<br>La fuerza creada está muy concentrada<br>y golpea a los enemigos<br>como una bola de cañón."
      },
      
      A9 : {
        name : "Estaca de rayos",
        desc : "Dispara un proyectil de crepitante<br>electricidad al objetivo.<br>La fuerza creada está muy concentrada<br>y golpea a los enemigos<br>como una bola de cañón."
      },
      
      A10 : {
        name : "Ráfaga de sangre",
        desc : "Dispara una serie de proyectiles de sangre<br>que bombardean a los enemigos.<br>Si bien este don carece de poder,<br>los disparos rápidos continuos son ideales<br>para suprimir al enemigo."
      },
      
      A11 : {
        name : "Ráfaga de llamas",
        desc : "Dispara una serie de proyectiles de fuego<br>que bombardean a los enemigos.<br>Si bien este don carece de poder,<br>los disparos rápidos continuos son ideales<br>para suprimir al enemigo."
      },
      
      A12 : {
        name : "Ráfaga de hielo",
        desc : "Dispara una serie de proyectiles helados<br>que bombardean a los enemigos.<br>Si bien este don carece de poder,<br>los disparos rápidos continuos son ideales<br>para suprimir al enemigo."
      },
      
      A13 : {
        name : "Ráfaga de rayos",
        desc : "Dispara una serie de proyectiles eléctricos<br>que bombardean a los enemigos.<br>Si bien este don carece de poder,<br>los disparos rápidos continuos son ideales<br>para suprimir al enemigo."
      },
      
      A14 : {
        name : "Masa de Vodnik",
        desc : "Lanza sangre concentrada para destruir<br>a los enemigos. La sangre maldita de los muertos<br>condena a sus víctimas al infierno."
      },
      
      A15 : {
        name : "Fuego de Walpurgis",
        desc : "Usa un delicado control sobre el flujo<br>de sangre para lanzar una poderosa llamarada.<br>Las apariciones sin fe en sus propias<br>fuerzas no deberían usar técnicas<br>avanzadas. El poder superará a un usuario<br>incauto y lo destruirá."
      },
      
      A16 : {
        name : "Mirada de Baba Yaga",
        desc : "Usa un delicado control sobre el flujo<br>de sangre para lanzar una potente ola de frío.<br>Alguien que dispersa cuando parte<br>del cuerpo está helada no puede regenerarse<br>hasta que esa parte se descongele. Esta<br>debilidad a veces se explota<br>en los interrogatorios."
      },
      
      A17 : {
        name : "Ira de Perkunas",
        desc : "Usa un delicado control sobre el flujo<br>de sangre para lanzar una potente descarga.<br>La muerte es la única escapatoria a la ira<br>de un dios furioso."
      },
      
      A18 : {
        name : "Cuchilla crepuscular",
        desc : "Usa icor para crear una espada de sangre,<br>luego asesta un golpe en arco que abate a<br>los enemigos que tengas delante.<br>Se traza una línea de sangre por el cielo<br>crepuscular que se transforma en una espada<br>mortal para destruir a los enemigos."
      },
      
      A19 : {
        name : "Luna carmesí",
        desc : "Usa icor para crear una espada de fuego,<br>luego asesta un golpe en arco que abate<br>a los enemigos que tengas adelante.<br>Una luna roja aparece, ominosa, en el cielo<br>nocturno. Se dice que quienes la ven<br>sufrirán un grave infortunio."
      },
      
      A20 : {
        name : "Destello de aurora",
        desc : "Usa icor para crear una espada congelante,<br>luego asesta un golpe en arco que abate<br>a los enemigos que tengas delante.<br>Una línea de sangre en el aire se transforma<br>en una espada de hielo. La luz la recorre<br>como un prisma y distrae a los enemigos<br>cuya sangre pronto la mancharán."
      },
      
      A21 : {
        name : "Espada de Júpiter",
        desc : "Usa icor para crear una espada de rayo<br>que golpea en arco a los enemigos frente a ti.<br>Cuando la víctima abre los ojos<br>tras el cegador destello,<br>se da cuenta de que ya está muerta."
      },
      
      A22 : {
        name : "Ejecución",
        desc : "Crea una espada gigante a partir de tu<br>voluntad indomable que cae como<br>una guillotina sobre el enemigo.<br>Los que se enfrentan a esta espada afrontan<br>una innegable verdad. Es más sencillo<br>aceptarla que seguir luchando."
      },
      
      A23 : {
        name : "Tormenta de fuego",
        desc : "Dispara una serie de proyectiles llameantes<br>que desequilibran al enemigo.<br>Cada impacto individual no tiene<br>mucha potencia, pero son tantos<br>que pueden arrollar<br>incluso al más firme de los adversarios."
      },
      
      A24 : {
        name : "Proyectil eléctrico",
        desc : "Crea y dispara una serie de proyectiles<br>cargados con electricidad a tu objetivo.<br>El proyectil destellante cava la tierra<br>y ninguna armadura puede impedir que penetre<br>hasta el hueso."
      },
      
      A25 : {
        name : "Guardia de honor",
        desc : "Genera una serie de pilares de hielo<br>que bombardean al objetivo sin parar.<br>Cuando un bando puede atacar una y otra vez<br>con una sola acción y al otro no le queda<br>más remedio que esquivar esos ataques,<br>el ganador está claro."
      },
      
      A26 : {
        name : "Fuego bailarín",
        desc : "Dispara un proyectil que rebota.<br>Su trayectoria es incierta cuando rebota,<br>pero puede ser útil para alcanzar<br>enemigos impredecibles."
      },
      
      A27 : {
        name : "Estaca draconiana",
        desc : "Transforma tu sangre en una estaca gigante<br>que empala al objetivo.<br>Esta técnica es rápida y poderosa.<br>Se dice que los que caen bajo<br>su impacto son mandados directamente<br>a las llamas del infierno."
      },
      
      A28 : {
        name : "Bobina de Indra",
        desc : "Dispara tres potentes proyectiles eléctricos<br>a los pies del objetivo.<br><br>Esta técnica vaporiza al instante<br>la sangre de los infelices que reciban<br>un impacto directo, y los hace explotar desde<br>adentro."
      },
      
      A29 : {
        name : "Veredicto cuádruple",
        desc : "Dispara una ráfaga implacable<br>de proyectiles eléctricos al objetivo.<br>Aquellos a los que los ojos divinos<br>encuentran culpables nunca escapan de su castigo.<br>Este don no puede usarse de nuevo<br>hasta que esa furia divina no se calme."
      },
      
      A30 : {
        name : "Contrato antiguo",
        desc : "Dispara sangre concentrada al suelo<br>y hace que un pilar de sangre emerja<br>bajo tu objetivo.<br><br>Si bien este potente don es difícil<br>de aprender, si se usa adecuadamente,<br>es un aliado poderoso."
      },
      
      A31 : {
        name : "Hielo de icor",
        desc : "Condensa el icor y lo convierte en potentes<br>fragmentos de hielo que disparan al rival.<br>La cantidad de energía requerida<br>por este don es excesiva para la aparición<br>que la usa, por lo que se necesita<br>una reliquia como catalizador."
      },
      
      A32 : {
        name : "Crepúsculo",
        desc : "Dispara un amplio láser que atraviesa todo<br>lo que tienes delante.<br>Cuando la luz desaparece, no queda ni una<br>mota de polvo. Todo queda desintegrado.",
        usage_req : "Tórax de la reina Códigos de sangre"
      },
      
      A33 : {
        name : "Lirio de fuego",
        desc : "Dispara una rápida cuchilla.<br>Luego de pegarse a algo, explota.<br>Los enemigos no son el único objetivo de esta<br>técnica. Los usuarios experimentados lanzan<br>estas cuchillas a las paredes<br>o al techo a modo de trampa."
      },
      
      A34 : {
        name : "Cuchilla de arena",
        desc : "Crea una hoja de arena comprimida<br>que derriba a los enemigos.<br><br>Esta peculiar técnica erosiona el suelo<br>con icor y crea una espada<br>de partículas de arena. Por la dificultad de<br>modificar rápido una sustancia, se requiere un alto grado<br>de habilidad para usar este don."
      },
      
      A35 : {
        name : "Tormenta volátil",
        desc : "Crea cuchillas de arena que convergen<br>en el objetivo y explotan.<br><br>La enorme explosión se produce al concentrar<br>numerosas fuentes de presión en un solo<br>punto. Huir de semejante tormenta de arena<br>resultaría, como mínimo,<br>extremadamente difícil."
      },
      
      A36 : {
        name : "Brazo de set",
        desc : "Crea un brazo de arena a los pies<br>del objetivo que aplasta al enemigo.<br><br>La presa de esta trampa<br>no tiene escapatoria. Varias<br>capas de arena comprimida la hacen dura<br>como el acero y es físicamente imposible<br>de destruir."
      },
      
      A37 : {
        name : "Arenas de depravación",
        desc : "Crea una tormenta de arena gigante en torno al objetivo.<br><br>Los veteranos del campo de batalla saben<br>que nunca deben bajar la guardia,<br>ya que siempre puede haber algún demonio<br>sediento de sangre al acecho."
      },
      
      A38 : {
        name : "Ceniza caótica",
        desc : "Dispara un proyectil de drenaje<br>que roba icor al objetivo.<br>Los débiles son sangre que se convierte en<br>la carne de los poderosos. No es un robo,<br>es simplemente el uso de un recurso para<br>el futuro de la especie de los aparecidos."
      },
      
      A39 : {
        name : "Espina purgadora",
        desc : "Crea una espina gigante en el aire<br>que empala al objetivo.<br>Incontables apariciones han muerto<br>por estas espinas en combate,<br>y el temor que inspiran<br>sigue siendo tan grande como siempre."
      },
      
      A40 : {
        name : "Cruz lobo plateado",
        desc : "Dispara una cuchilla de sangre en forma de cruz<br>al objetivo.<br>Esta técnica de ataque la usaba<br>el líder de los Lobos Plateados. Se dice que la cruz<br>de sangre representa una oración por los caídos.<br>Es irónico que un don así resulte<br>tan eficaz para silenciar al objetivo<br>cortándolo en cuatro pedazos."
      },
      
      A41 : {
        name : "Salto de las sombras",
        desc : "Emite una onda de choque a tu alrededor,<br>luego te teletransporta al instante<br>hacia atrás. Este don dispersa el cuerpo<br>y lo vuelve a componer de inmediato.",
        usage_req : "Isis Códigos de sangre"
      },
      
      A42 : {
        name : "Impacto sangriento",
        desc : "Dispara a los enemigos de una zona con una<br>onda de choque causada por la súbita<br>liberación de icor concentrado.<br>Este don no causa mucho daño, pero<br>puede usarse para acercarse o alejarse.<br>Combinada con el uso del terreno,<br>puede cambiar el transcurso del combate."
      },
      
      A43 : {
        name : "Capa de invierno",
        desc : "Congela todo en las proximidades<br>con una ventisca ártica.<br>Ningún enemigo resiste este frío y viento.<br>Todos son derribados y quedan indefensos."
      },
      
      A44 : {
        name : "Destello de peonía",
        desc : "Crea una explosión gigante que engulle<br>a los enemigos que estén en la zona.<br><br>Pocos escapan de la súbita<br>explosión ilesos, especialmente<br>si los atrajeron cerca del punto<br>de origen.",
        usage_req : "Scathach Códigos de sangre"
      },
      
      A45 : {
        name : "Fuego fatuo",
        desc : "Dispara un proyectil de icor que se arquea<br>para cubrir la retaguardia.<br>Si bien este don hace poco daño, la<br>confusión que causa es muy valiosa."
      },
      
      A46 : {
        name : "Contraataque de ascua",
        desc  : "Dispara un proyectil llameante<br>que se arquea para cubrir la retaguardia.<br>Este don se prepara casi al instante,<br>así que para cuando el enemigo ve la llama,<br>ya está ardiendo."
      },
      
      A47 : {
        name : "Estallido desesperado",
        desc : "Un don arriesgado que libera una gran<br>cantidad de energía en tu interior, inflige<br>un gran daño a tu alrededor<br>y te deja al borde de la muerte.<br>Dicha técnica solo pueden usarla<br>las apariciones que hayan superado<br>el miedo a morir. El espectáculo mortífero persigue<br>a quien lo presencia."
      },
      
      A48 : {
        name : "Rosa de llamas",
        desc : "Lanza bombas de fuego que explotan y dañan<br>todo en la zona tras un momento.<br>Cuando estás rodeado y sin posibilidad<br>de escape, lo único que puedes hacer es rogar<br>que se te ocurra algo. Es una situación<br>que es preferible evitar."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Fuego del infierno guiado",
        desc : "Desata un remolino de llamas amenazador<br>que persigue al objetivo.<br>El llameante remolino persigue a su objetivo<br>como si tuviera voluntad propia,<br>y el Perdido es engullido por las llamas<br>sin posibilidad de escapar."
      },
      
      A50 : {
        name : "Espada de fuego danzarina",
        desc : "Invoca una espada llameante <br>que gira alrededor de tu cuerpo.<br><br>Una espada de fuego gira alrededor <br>de quien la usa a gran velocidad y rebana <br>sin piedad a todos lo que se acerquen."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Corriente de escarcha",
        desc : "Dispara rayos de luz congelantes en todas las direcciones <br>y derriba a cualquier enemigo en su camino.<br><br>La corriente de escarcha congela todo lo que toca, <br>se expande en todas direcciones desde quien la usa <br>y cerca a los asaltantes que se acercan en su helada garra de muerte.<br>Al ser una técnica sacada del código de sangre de la emperatriz <br>y desarrollada a partir de su poder, <br>este don genera repercusiónes graves a quien lo usa."
      },
      
      A52 : {
        name : "Torreta de escarcha",
        desc : "Crea una masa condensada congelada <br>que dispara periódicamente fragmentos de hielo.<br><br>Aunque los fragmentos de hielo que dispara el pilar <br>no son ni mucho menos mortales, <br>el daño acumulado es un gran paso hacia la victoria."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Aplastamiento de meteoro",
        desc : "Crea rocas que arden encima de tu cabeza <br>y hace que caigan sobre el enemigo como una lluvia de meteoros.<br><br>Puede que las rocas que caen parezcan solo una lluvia de meteoros, <br>pero hay pocos Perdidos capaces de seguir en pie <br>cuando les caen encima rocas llameantes."
      },
      
      A54 : {
        name : "Ola de escarcha",
        desc : "Provoca un frío gélido que se extiende por el suelo.<br><br>Aquellos que se acercan con hostilidad <br>verán su avance detenido por esta oleada congelante."
      },
      
      A55 : {
        name : "Campo de sed",
        desc : "Crea un campo que drena periódicamente icor <br>de los enemigos que están dentro. <br><br>El campo te permite drenar icor de <br>los Perdidos sin acercarte siquiera a ellos.<br>Una pequeña cantidad de icor puede significar <br>la diferencia entre la vida y la muerte. <br>Esta trampa es ideal al intentar obtener <br>ventaja en la batalla a través de dones."
      },
      
      A56 : {
        name : "Impacto de rayo",
        desc : "Surge del suelo antes de aterrizar en una explosión de rayos.<br><br>Aunque el ataque requiere tiempo para centrar los rayos <br>en el puño de quien lo usa, el poder resultante es abrumador.<br>Este don utiliza el rayo del emperador del rayo, <br>que recorre el cuerpo de quien lo usa <br>y puede reducir a cenizas a una aparición menor al instante."
      },


      // # DEBUFFS #
      B0 : {
        name : "Disparo venenoso",
        desc : "Dispara al objetivo un proyectil<br>que inflige veneno.<br>Esta bala ataca desde la sombra,<br>lo que provoca pánico en la víctima, pues le roba<br>salud al impactar."
      },
      
      B1 : {
        name : "Disparo de aturdimiento",
        desc : "Dispara al objetivo un proyectil<br>que inflige aturdimiento.<br>Esta bala ataca desde la sombra,<br>lo que provoca pánico en la víctima,<br>pues le roba la libertad al impactar."
      },
      
      B2 : {
        name : "Disparo lento",
        desc : "Dispara al objetivo un proyectil<br>que inflige lentitud.<br>Esta bala ataca desde la sombra,<br>lo que provoca pánico en la víctima, pues le roba<br>la movilidad al impactar."
      },
      
      B3 : {
        name : "Red de veneno",
        desc : "Lanza icor manipulado para crear una trampa<br>que envenena a los enemigos que la pisan.<br>Esta técnica detecta la sangre<br>de los atacantes y afecta solo a los adversarios<br>del que la usa."
      },
      
      B4 : {
        name : "Red de aturdimiento",
        desc : "Lanza icor manipulado para crear una trampa<br>que aturde a los enemigos que la pisan.<br>Todos los dones se crearon<br>con la supervivencia en mente. Cuando aparezca<br>una gran amenaza, usa este poder<br>para salir corriendo sin mirar atrás."
      },
      
      B5 : {
        name : "Red de ralentización",
        desc : "Lanza icor manipulado para crear una trampa<br>que ralentiza el movimiento de los enemigos<br>que la pisan. Las apariciones habilidosas<br>pueden forzar su voluntad en el icor<br>y lo guían con su clara imaginación. El primer<br>paso para hacerse poderoso<br>es comprenderse a sí mismo."
      },
      
      B6 : {
        name : "Red de choque",
        desc : "Manipula el icor para crear una trampa<br>de bajo nivel a tus pies que desequilibra<br>a los atacantes. El engaño es más eficaz<br>si se ejecuta rápido y en su totalidad;<br>hasta la sospecha más pequeña<br>alojada en el corazón puede engendrar<br>un miedo y una inquietud incalculables."
      },
      
      B7 : {
        name : "Llamas de furia",
        desc : "Manipula el icor para crear una trampa<br>a tus pies que inmola a los atacantes.<br>Se han realizado muchos experimentos<br>por la necesidad de reducir a los Perdidos<br>a cenizas. Ni siquiera funcionó<br>quemarlos repetidamente<br>cuando revivían."
      },
      
      B8 : {
        name : "Trampa de veneno",
        desc : "Rocía la zona con icor y crea una trampa de<br>veneno que devora a los atacantes.<br>La Unidad de Seguridad Cerbero inventó<br>diversos dones, muchos de ellos<br>con efectos indirectos."
      },
      
      B9 : {
        name : "Trampa de aturdimiento",
        desc : "Rocía la zona con icor y crea una trampa<br>que aturde a los atacantes.<br>La Unidad de Seguridad Cerbero inventó<br>diversos dones, muchos de ellos<br>con efectos indirectos."
      },
      
      B10 : {
        name : "Trampa de lentitud",
        desc : "Rocía la zona con icor y crea una trampa<br>que ralentiza a los atacantes.<br>La Unidad de Seguridad Cerbero inventó<br>diversos dones, muchos de ellos<br>con efectos indirectos."
      },
      
      B11 : {
        name : "Fuego frenético",
        desc : "Dispara un proyectil que reduce el nivel<br>de concentración del enemigo. Las puertas no<br>se abren para los que esperan de brazos<br>cruzados. Ve y ábrelas tú mismo."
      },


      // # BUFFS #
      C0 : {
        name : "Arma sangrienta",
        desc : "Añade temporalmente daño de sangre<br>a tus armas y a las de tu compañero.<br><br>Para las apariciones, la sangre es una<br>fuente de alimento, la armadura que las<br>protege de las amenazas y una sólida espada<br>que puede cortar los obstáculos. Todas las<br>apariciones buscan dominar la sangre."
      },
      
      C1 : {
        name : "Arma llameante",
        desc : "Añade temporalmente daño de fuego<br>a tus armas y a las de tu compañero.<br><br>Las heridas de las hojas llameantes se curan<br>con lentitud, incluso para las apariciones."
      },
      
      C2 : {
        name : "Arma de escarcha",
        desc : "Añade temporalmente daño de hielo<br>a tus armas y a las de tu compañero.<br><br>Al congelar una herida al instante,<br>la dispersión se ralentiza y provoca que<br>el enemigo se retuerza de dolor."
      },
      
      C3 : {
        name : "Arma de rayos",
        desc : "Añade temporalmente daño de rayo<br>a tus armas y a las de tu compañero.<br><br>Este don es un maravilloso aliado y un<br>temible enemigo. No olvides que también<br>pueden usarlo contra ti."
      },
      
      C4 : {
        name : "Marca de veneno",
        desc : "Aplica temporalmente el efecto de veneno a<br>tu arma actual. Un golpe inflige una toxina<br>que destruye desde dentro. La muerte es<br>segura, pero el terror solo ha comenzado."
      },
      
      C5 : {
        name : "Marca entumecedora",
        desc : "Aplica temporalmente un efecto<br>de aturdimiento a tu arma actual.<br>Los sentidos son un don, pero la libertad<br>hay que ganársela. ¿Qué haces cuando una víctima<br>tiene su cara distorsionada por el terror?<br>Todo está en manos<br>del que trazó esa marca."
      },
      
      C6 : {
        name : "Marca de custodia",
        desc : "Aplica temporalmente el efecto inhibidor<br>a tu arma actual.<br>La habilidad de sellar dones es bastante<br>significativa. Incluso un ratón<br>puede ser peligroso cuando se ve acorralado."
      },
      
      C7 : {
        name : "Marca de retención",
        desc : "Aplica temporalmente el efecto de lentitud<br>al arma actual.<br>La víctima de dicho efecto se ve abrumada<br>por una sensación de fatiga, pues su sangre<br>se vuelve pesada y esto hace que sus movimientos<br>sean torpes, de forma que queda expuesta<br>peligrosamente."
      },
      
      C8 : {
        name : "Adrenalina",
        desc : "Aumenta temporalmente el poder de ataque.<br>Para destruir los horrores que habían<br>invadido al mundo, la humanidad necesitaba<br>un poder inimaginable. Pronto, los dones<br>se convirtieron en la luz de la esperanza<br>que ilumina el camino de todas las<br>apariciones."
      },
      
      C9 : {
        name : "Puente a la gloria",
        desc : "Aumenta de forma temporal el poder de ataque.<br>Los Perdidos ganan fuerza al<br>beber sangre de los vivos.<br>Sabiduría, habilidad y experiencia son las claves<br>para sobrevivir a la cárcel que es este mundo."
      },
      
      C10 : {
        name : "Marcha forzada",
        desc : "Aumenta temporalmente tu poder de ataque<br>y el de tu compañero. El efecto termina<br>cuando recibes daño. Esta habilidad es<br>ideal para usarla en un ataque preventivo<br>contra un adversario."
      },
      
      C11 : {
        name : "Impacto a distancia",
        desc : "Aumenta temporalmente el poder de ataque<br>de los disparos de las armas.<br>Cuando se sobrevive un combate tras otro,<br>el uso efectivo de la energía<br>se vuelve cada vez más importante.<br>Eliminar a los enemigos desde lejos<br>es un modo excelente de lograrlo."
      },
      
      C12 : {
        name : "Golpe de locura",
        desc : "Aumenta el poder del siguiente ataque.<br>Romper los grilletes que retienen al cuerpo<br>y generar una fuerza que va más allá<br>de las barreras psicológicas es imposible<br>para un humano, pero para una aparición<br>no es más que un buen truco."
      },
      
      C13 : {
        name : "Colmillo destellante",
        desc : "Aumenta el poder del siguiente ataque.<br>Al condensar el icor y liberarlo<br>en el momento justo, se puede conseguir<br>un súbito aumento de fuerza."
      },
      
      C14 : {
        name : "Segador despiadado",
        desc : "Ignora parte de la defensa física<br>y defensa contra armas del enemigo<br>en tu siguiente ataque.<br>Da igual lo fuerte que sea la armadura,<br>el impacto de esta hoja no puede mitigarse.<br>Es como la guadaña de la parca,<br>que causa la muerte a todos,<br>sin importar sus circunstancias."
      },
      
      C15 : {
        name : "Grito oscuro",
        desc : "Aumenta mucho la eficacia de los dones<br>oscuros para el siguiente ataque.<br>Un grito de guerra restaura la voluntad<br>de triunfar y llama a la fuerza<br>de superar los desafíos."
      },
      
      C16 : {
        name : "Danza de espadas",
        desc : "Aumenta temporalmente el poder de ataque cada vez<br>que dañas al enemigo con tu arma.<br>Si no buscas una solución, puedes<br>dejarte llevar y provocar una mutua<br>destrucción.",
        usage_req : "Prometeo Códigos de sangre"
      },
      
      C17 : {
        name : "Filo sacrificial",
        desc : "Aumenta mucho el poder de ataque,<br>pero drena los PS con el paso del tiempo.<br>El efecto termina cuando los PS bajan a 1.<br>El poder inimaginable tiene un precio, pero<br>solo los que están dispuestos a pagarlo<br>tienen asegurada la victoria.",
        usage_req : "Heimdall Códigos de sangre"
      },
      
      C18 : {
        name : "Fervor somático",
        desc : "Aumenta temporalmente<br>la fuerza y la destreza.<br>El aumento de poder ofensivo<br>que otorga este don lo hace popular<br>entre las apariciones."
      },
      
      C19 : {
        name : "Fervor cognitivo",
        desc : "Aumenta temporalmente la mente y la voluntad.<br><br>Esta técnica es popular entre las apariciones por las mejoras<br>que proporciona a los dones."
      },
      
      C20 : {
        name : "Precisión",
        desc : "Hace que sea más fácil desequilibrar<br>a los adversarios con tu arma de forma temporal.<br>Un pequeño hueco puede alterar un combate<br>por completo. Al crearlo, puedes darte<br>la oportunidad de garantizar tu supervivencia."
      },
      
      C21 : {
        name : "Festín de caza",
        desc : "Aumenta temporalmente la velocidad<br>de drenado de los ataques con armas.<br>El papel de los dones en combate<br>es muy importante. Al asegurar<br>un suministro constante de icor,<br>la eficacia aumenta exponencialmente."
      },
      
      C22 : {
        name : "Cuchillas chupasangre",
        desc : "Aumenta temporalmente la velocidad<br>de drenado de los ataques con armas<br>para ti y tu compañero.<br>Este don mejora la eficacia<br>de los mecanismos de drenado de las armas."
      },
      
      C23 : {
        name : "Destreza con dones",
        desc : "Aumenta temporalmente la velocidad<br>de los dones para ti y tu compañero.<br>Las apariciones experimentadas que sobrevivieron<br>el tiempo suficiente pueden desatar<br>varios dones rápidamente<br>cuando se dirigen al combate."
      },
      
      C24 : {
        name : "Extensión de dones",
        desc : "Alarga temporalmente los efectos<br>de los dones usados por ti y tu compañero.<br>Puede parecer una diferencia baladí,<br>pero unos pocos instantes de efecto más<br>pueden cambiar el transcurso del combate."
      },
      
      C25 : {
        name : "Aceleración",
        desc : "Usa el poder del icor para<br>mejorar tus reflejos y tus evasiones temporalmente.<br>Esta técnica usa una gran cantidad de icor<br>y es difícil de aprender, pero el poder<br>que otorga es innegable."
      },
      
      C26 : {
        name : "Concentración",
        desc : "Reduce temporalmente el consumo de aguante.<br>El efecto termina cuando recibes daño. Esta<br>habilidad es ideal para usarla en un ataque<br>preventivo contra un adversario."
      },
      
      C27 : {
        name : "Zapatos rojos",
        desc : "Te permite usar PS para realizar acciones<br>al quedarte sin aguante.<br><br>Quienes tratan de ir más allá de sus límites<br>por desesperación son héroes o necios.<br>Para ser valiente de verdad, hay que renunciar<br>a cierto grado de cordura.",
        usage_req : "Fionn Códigos de sangre"
      },
      
      C28 : {
        name : "Corazón valiente",
        desc : "Aumenta la visión cinética y los reflejos,<br>lo que reduce el costo de aguante de esquivar.<br>Da igual lo grande que sea una amenaza,<br>un juicio y juego de pies rápidos<br>puede minimizar el peligro."
      },
      
      C29 : {
        name : "Mejora de moral",
        desc : "Aumenta tu aguante máximo y el de tu compañero<br>y recupera el aguante de ambos.<br>Las apariciones deben estar alerta<br>en todo momento para reaccionar a los sutiles<br>cambios del entorno. Para las criaturas a las que<br>no se les permite descansar,<br>esta técnica podría ser considerarse<br>de las más necesarias."
      },
      
      C30 : {
        name : "Tiempo abreviado",
        desc : "Usa icor para acelerar temporalmente<br>las acciones con carga.<br>Una ventaja de tiempo puede ser<br>muy beneficiosa en combate. Un solo ataque<br>puede otorgar una victoria sangrienta."
      },
      
      C31 : {
        name : "Sangre sobrenatural",
        desc : "Te permite sacrificar PS para usar dones<br>si te quedas sin icor.<br><br>El intelecto de una aparición, sobre todo<br>respecto al uso de potentes dones, puede ser<br>asombroso. Si vas a sacrificar tu carne y<br>tu sangre en dicho propósito, procura no<br>ocasionar tu propia ruina.",
        usage_req : "Harmonia Códigos de sangre"
      },
      
      C32 : {
        name : "Onda de impacto",
        desc : "Añade un efecto temporal de onda de choque<br>a los golpes que causa daño adicional.<br>Este don requiere algo de talento<br>para aprenderla, pero es muy útil."
      },
      
      C33 : {
        name : "Viaje final",
        desc : "Pone tu capacidad regenerativa<br>en un estado de frenesí que lleva a la muerte.<br>Recupera al instante todos los PS<br>y habilidades, pero te mata tras un cierto<br>periodo de tiempo.<br>Las apariciones son casi inmortales, pero<br>la dispersión tiene un alto precio.<br>Asegúrate de conseguir algo que lo valga.",
        usage_req : "Matarreinas Códigos de sangre"
      },
      
      C34 : {
        name : "Fervor vigoroso",
        desc : "Aumenta temporalmente la fortaleza y la vitalidad.<br>Aunque las apariciones pueden volver de la muerte una y otra vez, <br>con PS altos y una reserva grande de aguante <br>no tendrán que temer al enfrentarse a ellos."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Orden ofensiva",
        desc : "Disminuye temporalmente tu defensa <br>y aumenta el poder de ataque para ti <br>y para tu compañero.<br>Sacrificar tu propia seguridad te permite mejorar <br>el poder de ataque de tus aliados al instante."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Eficiencia de icor",
        desc : "Reduce el costo de icor de los ataques <br>con arma por tiempo limitado.<br>Hay quienes vigilan su icor mientras luchan <br>y otros no lo hacen, pero una cosa está clara: <br>unos viven más que otros."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Voluntad de hierro",
        desc : "Reduce temporalmente el daño recibido<br>erigiendo una barrera en la sangre.<br>Evitar las heridas, incluso las más<br>pequeñas, puede mejorar mucho<br>tus probabilidades de supervivencia."
      },
      
      D1 : {
        name : "Barrera de sangre",
        desc : "Condensa el icor hasta su límite absoluto<br>y crea una barrera que reduce mucho el daño<br>que tú y tu compañero reciben de un ataque.<br>Un escudo, incluso uno temporal,<br>puede otorgar la ventaja psicológica<br>que lleva a la victoria."
      },
      
      D2 : {
        name : "Sangre vaporizante",
        desc : "Temporalmente hace que el daño recibido<br>se reduzca mucho a costa de icor.<br>El usuario debe recordar que el icor<br>es lo que lo mantiene vivo.<br>Al que olvida buscar una manera de retirarse,<br>le aguarda la muerte.",
        usage_req : "Eos Códigos de sangre"
      },
      
      D3 : {
        name : "Juggernaut",
        desc : "Aumenta el equilibrio y la resistencia<br>contra ataques directos, pero reduce<br>la movilidad y la resistencia elemental.<br>Este don quita una debilidad y crea otra,<br>es difícil decidir el momento<br>oportuno de usarlo. Sin embargo,<br>es una herramienta poderosa<br>si se emplea con eficacia.",
        usage_req : "Aliento de la reina Códigos de sangre"
      },
      
      D4 : {
        name : "Baluarte firme",
        desc : "Aumenta temporalmente la defensa contra<br>armas al recibir ataques físicos.<br>Combatir contra enemigos frenéticos no es fácil.<br>La Unidad de Seguridad Cerbero<br>recurrió a una sólida defensa<br>que convierte en fuerza para derrotarlos."
      },
      
      D5 : {
        name : "Contraataque de guardia",
        desc : "Otorga temporalmente la capacidad<br>de desviar ataques y hacer que los adversarios<br>se desequilibren cuando los bloqueas.<br>Bloquear el ataque del enemigo<br>y contraatacar cuando queda expuesto<br>parece una estrategia fácil,<br>pero no deja de ser eficaz."
      },
      
      D6 : {
        name : "Fuerza aplastante",
        desc : "Hace que la guardia del adversario sea más<br>fácil de romper temporalmente.<br>No le temas al enemigo que gasta demasiada<br>energía en defenderse. Una espada decidida<br>siempre se abrirá paso hasta la victoria."
      },
      
      D7 : {
        name : "Estabilidad de guardia",
        desc : "Temporalmente reduce el costo de aguante de la guardia.<br>Cuando las defensas son superadas,<br>el combate puede darse por terminado.<br>Mientras conserves las defensas,<br>el combate continúa."
      },
      
      D8 : {
        name : "Velo prismático",
        desc : "Aumenta temporalmente la defensa contra<br>armas contra ataques elementales.<br>Combatir contra apariciones frenéticas<br>no es fácil. La Unidad de Seguridad Cerbero<br>recurrió a una sólida defensa que<br>convierte en fuerza para derrotarlas."
      },
      
      D9 : {
        name : "Guardia de sangre",
        desc : "Crea una barrera temporal que los rodea<br>a ti y a tu compañero, reduce el poder de<br>la sangre y aumenta la resistencia.<br><br>El icor cambia de propiedades según<br>la fuerza de voluntad del usuario.<br>Convertirla en una barrera<br>es una tarea sencilla."
      },
      
      D10 : {
        name : "Protección a las llamas",
        desc : "Crea una barrera temporal que los rodea<br>a ti y a tu compañero, reduce el poder del<br>fuego y mejora la resistencia.<br><br>El campo extrae poder de las llamas y reduce<br>el daño del calor."
      },
      
      D11 : {
        name : "Armadura de hielo",
        desc : "Crea una barrera temporal que los rodea<br>a ti y a tu compañero, reduce el poder del<br>hielo y aumenta la resistencia.<br><br>El campo reductor impide la congelación<br>y reduce el daño del frío."
      },
      
      D12 : {
        name : "Velo de Raijin",
        desc : "Crea una barrera temporal que los rodea<br>a ti y a tu compañero, reduce el poder de<br>la electricidad y aumenta la resistencia.<br><br>Cuando una aparición se une a los Perdidos,<br>recuerda todos sus dones y los usa<br>sin compasión contra sus antiguos camaradas,<br>así que hubo que desarrollar contramedidas."
      },
      
      D13 : {
        name : "Muro elemental",
        desc : "Aumenta temporalmente la resistencia a<br>todos los elementos para ti y tu compañero.<br><br>Un guerrero habilidoso se prepara para<br>cualquier situación. El exceso de orgullo<br>te arrastrará a una muerte temprana."
      },
      
      D14 : {
        name : "Corazón real",
        desc : "Aumenta temporalmente<br>la resistencia al desequilibrio.<br>En el caos del combate, una mente serena<br>es lo que define a una aparición.<br>Si esto se pierde, también se abandona<br>la esperanza del futuro."
      },
      
      D15 : {
        name : "Luchador obstinado",
        desc : "Aumenta temporalmente la resistencia al desequilibrio<br>contra los ataques del enemigo.<br>Solo los guerreros con la tenacidad<br>de soportar cualquier ataque sobrevivirán<br>en este mundo."
      },
      
      D16 : {
        name : "Equilibrio perfecto",
        desc : "Aumenta mucho la resistencia al desequilibrio<br>contra un ataque. Lanzarse sin miedo hacia<br>adelante es un paso seguro hacia el futuro."
      },
      
      D17 : {
        name : "Generación anticuerpos",
        desc : "Aumenta temporalmente la resistencia<br>a todos los perjuicios.<br>No es necesario decir que los efectos de estado<br>son una seria amenaza para los usuarios<br>de dones. Un fallo de preparación<br>puede hacer que termines convertido<br>rápidamente en cenizas."
      },
      
      D18 : {
        name : "Contramedidas",
        desc : "Por un tiempo limitado, esquivar<br>los ataques enemigos genera proyectiles<br>que atacan al enemigo al tocarlo.<br>El coraje de dar un paso al frente<br>sin titubeos es importante, pero<br>el peligro al hacerlo también es muy real."
      },
      
      D19 : {
        name : "Venganza taimada",
        desc : "Durante un tiempo, recibir daño<br>genera proyectiles de fuego<br>que atacan al enemigo al tocarlo.<br>Llamas de ira impiden más ataques,<br>y para las apariciones que las usan,<br>son las llamas de la salvación.",
        usage_req : "Garra de la reina Códigos de sangre"
      },
      
      D20 : {
        name : "Tenacidad feral",
        desc : "Luego de usar este don, si recibes daño<br>letal cuando tus PS están por encima<br>de cierta cantidad, te quedarás con 1 PS.<br>El efecto solo puede activarse una vez.<br>Sé valiente, sin importar el peligro.<br>Mientras te aferres a la vida,<br>las posibilidades son ilimitadas."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Cuerpo robusto",
        desc : "Disminuye la efectividad del don mientras<br>aumenta temporalmente tus PS máximos.<br>De ti depende cómo utilizar la gran cantidad<br>de PS que se obtienen con este don."
      },
      
      D22 : {
        name : "Guardia circular",
        desc : "Te permite subir tu guardia desde todos lados, <br>no solo desde el frente.<br>Ahora no tienes nada que temer, <br>da igual dónde estén tus enemigos. <br>Sin embargo, ten en cuenta que la <br>fortuna no sonríe a los que solo se defienden."
      },
      
      D23 : {
        name : "Orden defensiva",
        desc : "Disminuye temporalmente tu poder de ataque <br>y aumenta la defensa para ti y para tu compañero.<br>Sacrificar tu propia seguridad te permite mejorar <br>el poder de ataque de tus aliados al instante."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Audacia desenfrenada",
        desc : "Un regalo comunitario con Louis que aumenta el ataque<br>y altera tus movimientos de evasión en detrimento<br>de la reducción de daño.<br><br>Este regalo transforma la sed de sangre de la aparición en <br>una fuerza, lo cual aumenta el riesgo de que te unas a los Perdidos<br>si cometes el más mínimo error. Es difícil mantenerse en este camino<br>sin una voluntad firme.",
        usage_req : "Ahora formas equipo con Louis"
      },
      
      E1 : {
        name : "Lupinus Vita",
        desc : "Un don comunitario con Yakumo que reduce<br>el aguante consumido en la guardia y mejora<br>tu primer ataque luego de realizar la guardia,<br>pero también reduce la velocidad de evasión.<br>El impulso de defender y ayudar a tus camaradas<br>aporta más vigor a la sangre. Los obstáculos<br>desaparecerán cuando los aplastes con el peso<br>de la responsabilidad.",
        usage_req : "Ahora formas equipo con Yakumo"
      },
      
      E2 : {
        name : "Estaca de convicción",
        desc : "Un don comunitario con Io<br>que mejora la resistencia al desequilibrio,<br>pero reduce la efectividad de drenar.<br>Una férrea voluntad arraigada hace que<br>un poder durmiente se active con el único<br>fin de que la misión se cumpla.",
        usage_req : "Ahora formas equipo con Io"
      },
      
      E3 : {
        name : "El despertar de la sangre",
        desc : "Un don comunitario con Mia que reduce<br>el costo de icor y aumenta la efectividad del don,<br>pero reduce el poder de ataque cuerpo a cuerpo.<br>La sangre despertada que corre por las venas<br>lleva la fuerza para sobrevivir<br>en este mundo desolado. Bajo este efecto,<br>tu entorno empieza a parecerse<br>a un escenario de cuento de hadas.",
        usage_req : "Ahora formas equipo con Mia"
      },
      
      E4 : {
        name : "Aumento letal",
        desc : "Un don comunitario con Jack que aumenta<br>el poder de ataque y reduce el consumo<br>de aguante, pero también reduce el número de<br>veces que puedes regenerar.<br>Mantener la Cárcel de las Brumas significa<br>arriesgar tu vida y prolongar el peligro.<br>La dimensión de dicha tarea siembra<br>el miedo en la mayoría de apariciones.",
        usage_req : "Ahora formas equipo con Jack"
      },
      
      E5 : {
        name : "Contención efímera",
        desc : "Un don comunitario con Eva que mejora<br>el drenado y la eficacia del don,<br>pero aumenta el consumo de icor.<br>La sangre de una aparición danza por las venas,<br>como inspirada por una hermosa canción<br>que atraviesa el corazón, y la lluvia carmesí<br>sacia al alma sedienta.",
        usage_req : "Ahora formas equipo con Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Ofrenda restauradora",
        desc : "Gasta tus propios PS para restaurar<br>los PS de compañeros. Para una aparición,<br>la muerte ya no es algo tan temible.<br>Lo que más teme es perder los lazos<br>de confianza que la unen a los demás<br>y verse obligada a vivir en soledad.",
        usage_req : "Los PS son 2 o más"
      },
      
      F1 : {
        name : "Beneficio solidario",
        desc : "Consume gran parte de tus propios PS<br>para restaurar los de tu compañero.<br>La decidida voluntad de alguien que<br>arriesga su vida a tu lado es una bendición<br>que puede curar las heridas de los aliados.",
        usage_req : "Los PS son 2 o más"
      },
      
      F2 : {
        name : "Curación automática",
        desc : "Usarás automáticamente Ofrenda restauradora<br>cuando tu compañero sufra daño crítico.<br>Sin embargo, consumirá PS por adelantado.<br><br>Sacrificarte para salvar a otros<br>no es una decisión fácil.<br>La luz de la salvación es el fruto de una relación<br>significativa.",
        usage_req : "Démeter Códigos de sangre<br>Los PS son 2 o más"
      },
      
      F3 : {
        name : "Ayuda de guardián",
        desc : "Sacrifica PS para curar a tu compañero<br>y mejora temporalmente la defensa.<br><br>No se puede sobrevivir a la prisión de la realidad individualmente<br>y lo que ahora es doloroso, quizá luego resulte<br>una referencia que te sacará de un apuro.",
        usage_req : "Astrea Códigos de sangre<br>Los PS son 2 o más"
      },
      
      F4 : {
        name : "Luz purificadora",
        desc : "Durante un tiempo limitado, una parte<br>del daño que recibes se curará poco a poco.<br>El dolor les recuerda a los aparecidos la vida<br>que han perdido. Desde cierto punto de vista,<br>es una bendición. Este modo de pensar<br>estimula las células y causa<br>que se regeneren solas."
      },
      
      F5 : {
        name : "Regenerador",
        desc : "Aumenta tus capacidades regenerativas<br>y las de tu compañero, ganarán más PS<br>mediante la regeneración.<br>Una ligera diferencia en aguante determina<br>el resultado de muchos combates. Un sentido<br>de estabilidad también<br>acerca más a la victoria."
      },
      
      F6 : {
        name : "Curar veneno",
        desc : "Los cura a ti y a tu compañero de veneno.<br>Úsalo para bloquear el efecto antes de que los afecte.<br>Pese a la naturaleza inmortal de las apariciones,<br>las dolencias seguían siendo un problema que no pudo<br>evitarse, y la medicina se convirtió en algo<br>esencial. Hoy sus vidas dependen de la<br>experimentación, así como de un esfuerzo incansable."
      },
      
      F7 : {
        name : "Curar aturdimiento",
        desc : "Los cura a ti y a tu compañero de aturdimiento.<br>Mejor usarlo para bloquear el efecto antes de que los afecte.<br>Pese a la naturaleza inmortal de las apariciones,<br>las dolencias seguían siendo un problema que no pudo<br>evitarse, y la medicina se convirtió en algo<br>esencial. Hoy sus vidas dependen de la experimentación,<br>así como de un esfuerzo incansable."
      },
      
      F8 : {
        name : "Curar inhibición",
        desc : "Los cura a ti y a tu compañero de inhibición.<br>Úsalo para bloquear el efecto antes de que los afecte.<br>Pese a la naturaleza inmortal de las apariciones,<br>las dolencias seguían siendo un problema que no pudo<br>evitarse, y la medicina se convirtió en algo<br>esencial. Hoy sus vidas dependen de la experimentación,<br>así como de un esfuerzo incansable."
      },
      
      F9 : {
        name : "Curar lentitud",
        desc : "Los cura a ti y a tu compañero de lentitud. Puede bloquear<br>el efecto si se usa antes de que los afecte.<br>Pese a la naturaleza inmortal de las apariciones,<br>las dolencias seguían siendo un problema<br>que no pudo evitarse, y la medicina se convirtió en<br>algo fundamental. Hoy las vidas dependen de la prueba<br>y el error, así como de un esfuerzo incansable."
      },
      
      F10 : {
        name : "Curar hemorragia",
        desc : "Los cura a ti y a tu compañero de hemorragia. Puede bloquear<br>el efecto si se usa antes de que los afecte.<br>Pese a la naturaleza inmortal de las apariciones,<br>las dolencias seguían siendo un problema<br>que no pudo evitarse, y la medicina se convirtió en<br>algo fundamental. Hoy sus vidas dependen de la experimentación,<br>así como de un esfuerzo incansable."
      },
      
      F11 : {
        name : "Esencia de panacea",
        desc : "Los cura a ti y a tu compañero de todos los perjuicios.<br>También los bloquea si se usa<br>antes de que los afecten.<br>Tras días de combates extenuantes,<br>un corazón cansado se reconforta con momentos<br>de humor y al recordar los vínculos de confianza<br>y emoción compartidos con los camaradas."
      },
      
      F12 : {
        name : "Sacrificio de sangre",
        desc : "Gasta tus propios PS para ganar icor.<br>Para las apariciones que pasan tanto tiempo<br>en combate, el valor del icor<br>es incuestionable. El poder que otorga<br>es tan grande que ignoran el temor<br>de acabar convertidas en cenizas."
      },
      
      F13 : {
        name : "Deshacer recuerdos",
        desc : "Todos los dones que necesitan tiempo<br>para usarse pueden utilizarse al instante.<br>En caso de apuro, quizás sea mejor olvidarse<br>y empezar desde el principio."
      },
      
      F14 : {
        name : "Luz flotante",
        desc : "Crea una bola de luz a tus pies.<br>En la edad de las luces químicas, muchas<br>exploraciones llegan a su fin cuando<br>se acaban los suministros de equipo. Poder<br>usar los dones en su lugar aumenta mucho<br>las distancias que pueden recorrerse."
      },
      
      F15 : {
        name : "Vivificación",
        desc : "Te devuelve al último muérdago que tocaste<br>sin perder bruma, y causa<br>una dispersión intencional.<br>La retirada no es cobardía. Saber elegir<br>tus combates es importante<br>en este mundo prisión."
      },
      
      F16 : {
        name : "Rondador nocturno",
        desc : "Reduce el ruido que haces, por lo que<br>es más difícil que te detecten.<br>Si percibes la más ligera presencia detrás de ti,<br>date la vuelta para asegurarte. Nunca<br>se sabe quién puede estar acechándote<br>desde las sombras."
      },
      
      F17 : {
        name : "Velo de niebla nocturna",
        desc : "Envuelve el cuerpo en una capa de sangre<br>parecida a una niebla que dificulta<br>que los enemigos te vean.<br>El usuario aparece difuso<br>y es difícil localizarlo."
      },
      
      F18 : {
        name : "Cazador de botín",
        desc : "Descubre si en un radio determinado<br>hay elementos que aún no tienes.<br><br>Olfatea los débiles rastros de tu objetivo<br>gracias a los sentidos sobrenaturales<br>avivados por el hambre de una aparición."
      },
      
      F19 : {
        name : "Identificador activo",
        desc : "Los enemigos en un perímetro determinado<br>aparecerán en tu radar.<br><br>Los inmortales deberían temer a la muerte,<br>en especial si no quieren el tormento eterno."
      },
      
      F20 : {
        name : "Rastreador de tesoros",
        desc : "En tu radar, verás un elemento<br>que aún no tienes en un radio determinado. <br><br>Dispersas pequeñas cantidades de tu propia sangre<br>que actúan como exploradores. Esto supera<br>completamente el reino humano."
      },
      
      F21 : {
        name : "Percepción aguda",
        desc : "Descubre si en el mapa actual hay elementos<br>que aún no tienes.<br><br>Olfatea los débiles rastros de tu objetivo<br>gracias a los sentidos sobrenaturales<br>avivados por el hambre incesante<br>de una aparición. Debes completar tu colección."
      },
      
      F22 : {
        name : "Abismo de ruptura",
        desc : "Salta y golpea con todas tus fuerzas.<br>Ofensiva. Espada/alabarda/bayoneta a una mano.<br><br>Salta por el aire y corta como si<br>estuvieras esculpiendo un abismo oscuro.<br>Aprovechar el movimiento antes y después<br>del ataque es difícil, por lo que debes<br>sincronizarte con los movimientos del rival."
      },
      
      F23 : {
        name : "Ataque fantasma",
        desc : "Desapareces como la niebla, saltas y cortas.<br>Ofensiva. Espada/alabarda/bayoneta a una mano.<br><br>Desapareces como un fantasma<br>entre las sombras, luego corres al objetivo<br>y realizas un corte cruzado. No puedes<br>recibir daño mientras estés en forma de<br>niebla, lo que te permite atacar sin miedo."
      },
      
      F24 : {
        name : "Pulso circular",
        desc : "Desatas una lluvia de ataques.<br>Ofensiva. Espada/alabarda/bayoneta.<br><br>Supera a tu enemigo con una combinación<br>de 5 ataques. Si aplicas un don a tu arma<br>antes de esto, aumentará en gran medida<br>la potencia del don."
      },
      
      F25 : {
        name : "Castigador de la legión",
        desc : "Lanzas tu arma y la giras. Ofensiva.<br>Espada a dos manos/alabarda/martillo.<br><br>Lanzas tu arma y usas el poder del don<br>para girarla y acabar con muchos enemigos.<br>Este ataque impacta un área amplia,<br>pero toma tiempo ejecutarse,<br>así que úsalo con prudencia<br>incluso contra enemigos más débiles."
      },
      
      F26 : {
        name : "Ronda de proyectiles",
        desc : "Disparas una lluvia de balas rastreadoras.<br>Ofensiva. Bayoneta.<br><br>Gira para infundirle icor a la bayoneta,<br>luego dispara cuatro balas que persiguen<br>al objetivo. Es un ataque lento,<br>por lo que debe usarse<br>en las circunstancias correctas."
      },
      
      F27 : {
        name : "Aniquilador triple",
        desc : "Desatas un combo sobre un objetivo cercano.<br>Ofens. Espada dos manos/alabarda/martillo.<br><br>Utiliza el icor para aumentar tus músculos<br>durante unos instantes y agitar<br>un arma pesada tres veces en rápida<br>sucesión. Este ataque se produce rápido,<br>por lo que es perfecto en espacios cerrados."
      },
      
      F28 : {
        name : "Embestida del dragón",
        desc : "Saltas y lanzas un ataque potente. Ofensiva.<br>Espada a dos manos/alabarda/martillo.<br><br>Avanza hacia un enemigo lejano<br>y ataca sin descanso, como un dragón<br>que intenta romper el cuello de un tigre.<br>Este ataque es devastador, pero deja al<br>usuario vulnerable, por lo que debe<br>usarse con precaución."
      },
      
      F29 : {
        name : "Fiebre de combate",
        desc : "Avanzas como la niebla y desatas un combo.<br>Ofensiva. Alabarda.<br><br>Dispérsate, avanza e inicia una serie<br>de ataques con estocadas.<br>El primer ataque puede llevar a otros<br>ataques o a esquivar, por lo que es<br>un buen punto de partida."
      },
      
      F30 : {
        name : "Profundidad cambiante",
        desc : "Avanzas en forma incorpórea.<br><br>Te desvaneces un momento<br>como un fantasma en la noche<br>y arremetes sin que te afecten los ataques."
      },
      
      F31 : {
        name : "Patea tumbas",
        desc : "Das un pisotón en el suelo que causa<br>una onda de choque.<br><br>Tus piernas se llenan de energía<br>y golpeas el suelo, con lo que envías<br>una ola destructiva de energía.<br>La fuerza es suficiente para despertar<br>a los muertos y aturdir a los Perdidos<br>para lanzarles otro ataque."
      },
      
      F32 : {
        name : "Corte rápido",
        desc : "Un ataque extremadamente rápido.<br>Ofensiva. Espada a dos manos/martillo.<br><br>Te sacudes rápidamente y lanzas<br>un golpe repentino que podría impactar<br>un ave en pleno vuelo.<br>La velocidad es inaudita para un arma pesada,<br>lo que te permite infligir daño<br>ante la más mínima oportunidad."
      },
      
      F33 : {
        name : "Vacío evanescente",
        desc : "Te vuelves incorpóreo y esquivas los ataques.<br><br>Este don te permite evadir el peligro<br>al dispersarte y reaparecer sobre<br>tu ubicación anterior. Este sutil pero<br>innovador don utiliza el ciclo de vida<br>de la aparición para lograr un<br>efecto supremo, pero dominarlo es difícil."
      },
      
      F34 : {
        name : "Ráfaga tormentosa",
        desc : "Saltas adelante y golpeas dos veces.<br>Ofensiva. Espada a dos manos/martillo.<br><br>Saltas hacia el enemigo y lanza dos<br>ataques fuertes. El armamento pesado<br>puede ser lento, por lo que un ataque<br>abrumador bien podría ser tu mejor aliado."
      },
      
      F35 : {
        name : "Ataque sombrío",
        desc : "Haces una embestida corta y rápida.<br>Ofensiva. Espada a una mano/alabarda/bayoneta.<br><br>Te deslizas como una sombra y lanzas<br>un ataque rápido. Esta técnica es<br>excelente para cubrir espacios pequeños<br>y es muy adecuada si tu estrategia<br>es estar muy cerca de tus oponentes."
      },
      
      F36 : {
        name : "Ofrenda modesta",
        desc : "Gasta una pequeña cantidad de tus PS para recuperar <br>una pequeña cantidad de los de tus compañeros.<br>Aunque este regalo consume menos PS que Ofrenda restauradora, <br>también recuperará menos al enemigo.",
        usage_req : "Los PS son 2 o más"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Resonancia de icor (recibir)",
        desc : "Cuando tu compañero obtiene icor, <br>tú obtienes la misma cantidad.<br>La unidad entre tus compañeros y tú <br>se convierte en la sangre de tus venas, <br>su poder te recorre todo el cuerpo.<br><br>No se puede usar con resonancia de icor (enviar)."
      },
      
      F38 : {
        name : "Resonancia de icor (enviar)",
        desc : "Cuando obtienes icor, <br>tu compañero obtiene la misma cantidad.<br><br>Tu sangre baila con extraña excitación. <br>La resonancia del interior de tu cuerpo <br>será la salvación de tus camaradas.<br>No se puede usar con resonancia de icor (recibir)."
      },
      
      F39 : {
        name : "Postura serena",
        desc : "Adopta inmediatamente una postura que calma <br>tu mente y restablece todo el aguante.<br>Esta postura no solo puede duplicar <br>tu ataque de combo durante la batalla, <br>sino que además te salva de estar al borde de la muerte."
      },
      
      F40 : {
        name : "Delirio estimulante",
        desc : "Restablece aguante cuando esquivas con éxito<br>los ataques enemigos mientras el efecto está activo.<br>Incluso los Perdidos son vulnerables tras el ataque. <br>Si puedes evadir sus ataques, <br>la posibilidad del contraataque aparecerá delante de tus ojos."
      },
      
      F41 : {
        name : "Corte tranquilo",
        desc : "Ejecuta un ataque imperceptible<br>desde una postura quieta.<br> Habilidad ofensiva que se ejecuta <br>con una espada de una mano.<br>Este corte instantáneo crea una espada de vacío <br>que rebana a todos los enemigos cercanos.<br>Esta técnica exige el alma entera del usuario, <br>y solo puede dominarse con el tiempo."
      },
      
      F42 : {
        name : "Cuchilla circular",
        desc : "Salta mientras ejecuta un tajo giratorio. <br>Habilidad ofensiva que se ejecuta con una espada <br>de una mano/alabarda/bayoneta.<br>Esta técnica te cubre por todos lados <br>mientras rebanas a los enemigos cercanos.<br>Aparte de su utilización obvia cuando los enemigos te rodean, <br>el ataque también puede llegar a enemigos <br>cuyas posiciones serían difíciles de alcanzar de otro modo."
      },
      
      F43 : {
        name : "Inmersión salvaje",
        desc : "Lanza un asalto desde el aire que abate al enemigo. <br>Habilidad ofensiva que se ejecuta con una espada de una mano/alabarda.<br><br>Las técnicas de batalla del monarca caballero requieren <br>entrenamiento para ser efectivas. Este regalo es excelente <br>en las distancias cortas con tu enemigo <br>porque te permite saltar por el aire y volar hacia él."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Ataque inquebrantable",
        desc : "Lanza un único ataque que es muy resistente al desequilibrio. <br>Habilidad ofensiva que se ejecuta con una espada de dos manos/martillo.<br><br>Un ataque singular que no conoce el miedo <br>y puede por sí solo cambiar las tornas de la batalla y obtener la victoria. <br>Sin embargo, la indiferencia por la propia vida también puede <br>reducirlo todo a cero, lo que crea una delgada línea <br>que debe recorrerse con sabiduría."
      },
      
      F45 : {
        name : "Espada de usurpador",
        desc : "Corta a un enemigo y recupera PS.<br>Habilidad ofensiva que se ejecuta con alabarda.<br><br>Por naturaleza, las apariciones no solo tienen sed de sangre,<br>sino también de la vida misma. Entrégate a tus deseos."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Relanzamiento cero",
        desc : "Restablece el tiempo de recarga de don de tu compañero.<br>Mientras se lo permita su icor, tu compañero podrá acorralar <br>enemigos usando un don poderoso una y otra vez sin esperar."
      },
      
      F47 : {
        name : "Regeneración de icor",
        desc : "Restaura gradualmente icor a cambio de un descenso <br>en el poder de ataque y defensa contra armas.<br><br>Sin embargo, transcurrido cierto tiempo, <br>la recuperación de icor se detendrá <br>y recuperarás tu poder perdido."
      },
      
      F48 : {
        name : "Carga de rayo",
        desc : "Se precipita hacia los enemigos a la velocidad de la luz y desata<br>un golpe de palma.<br><br>Cerca a tu presa en un instante como una bestia<br>voraz a la caza.<br><br>El ataque en sí no inflige gran cantidad de daño,<br>pero la velocidad a la que te permite moverte abre el camino hacia<br>una victoria decisiva contra cualquier arma."
      },
      
      F49 : {
        name : "Recuperación de concentración",
        desc : "Aumenta parcialmente el nivel de <br>concentración tras su uso.<br>Puede que este don no te envíe <br>siempre a un estado de concentración,<br>así que es importante elegir el momento <br>adecuado que encaje en tu estrategia."
      },
      
      F50 : {
        name : "Cañón radiante",
        desc : "Dispara poderosos proyectiles que infligen daño perforador. <br>Habilidad ofensiva que se ejecuta con una bayoneta.<br>Los proyectiles disparados alcanzarán al instante su objetivo y <br>atravesarán a todos los oponentes en su trayectoria.<br>Sin embargo, debido al tiempo que se necesita para que la energía confluya, <br>esta técnica no es efectiva contra enemigos cercanos, <br>sino contra grupos más grandes."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Espada matarreinas",
        desc : "Espada de un solo filo producida en masa<br>y proporcionada a los soldados<br>de la Operación Exterminador de la reina.<br>Como debía poder construirse rápidamente,<br>el conductor de icor está expuesto y tiene<br>un aspecto descuidado, pero su hoja afilada<br>corta a los Perdidos con facilidad."
      },
      
      A1 : {
        name : "Tubo de servidumbre",
        desc : "Un arma sencilla tipo bate. Solo es un tubo<br>con una función de drenaje incorporada,<br>lo que lo hace una versión rudimentaria<br>de una espada. Lo usan principalmente<br>apariciones que están subyugadas a otras,<br>y proporciona una débil luz de esperanza<br>en el combate."
      },
      
      A2 : {
        name : "Espadón",
        desc : "Una espada ancha de doble filo, producida<br>en masa por el Gobierno provisional.<br>Diseñada para tener poder en bruto,<br>al golpear con todo el cuerpo, puede<br>derribar incluso a Perdidos gigantes.<br>Debido a su facilidad de uso, es frecuente<br>verla en manos de héroes y villanos<br>en el mundo de Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Una espada curva de un solo filo, modelada<br>a partir de una katana. Fue creada<br>por Mukuro, que grabó en la hoja el nombre<br>del arma, que significa &quot;cadáver desdeñado&quot;.<br>Se diferencia de las espadas que suelen<br>verse en Vein y se precisa cierta habilidad<br>para aprovecharla al máximo."
      },
      
      A4 : {
        name : "Carmesí resistente",
        desc : "Arma de confianza de Louis. Su hoja roja<br>está grabada con un regalo similar<br>a un hechizo. Cuando se alimenta de icor,<br>puede cortar las defensas más duras<br>con un solo golpe. Procede de la misma<br>aparición que le dio a Yakumosu a su arma<br>y fue construida hábilmente para la técnica<br>de Louis."
      },
      
      A5 : {
        name : "Machete",
        desc : "Una gran cuchilla que parece forjada<br>a partir de un solo pedazo de metal. Creada<br>en un taller por un grupo de ingenieros,<br>fue diseñada para combinar el manejo<br>de una espada de una mano con el poder<br>de una espada de dos manos.<br>Debido a su gran peso, se necesita<br>mucha fuerza para usarla con eficacia,<br>por lo que pocos la utilizan."
      },
      
      A6 : {
        name : "Espada Lobo Plateado",
        desc : "Espada de plata de una sola mano<br>para la unidad de seguridad Cerbero.<br>Aunque tiene un activador de regalos,<br>está equilibrada y su calidad es alta<br>para un arma producida en masa. Cerbero<br>es una fuerza de élite formada<br>tras Exterminador de la reina y su equipo<br>muestra su valía cuando está<br>en buenas manos."
      },
      
      A7 : {
        name : "Garra flamígera",
        desc : "Espada larga de la Sucesora de la garra.<br>Produce arcos carmesí e incendia<br>todo lo que toca debido al calor<br>de su interior. Dicen que es una creación<br>nacida del pensamiento de la Sucesora,<br>pero ¿cuál era su intención?"
      },
      
      A8 : {
        name : "Sangre helada",
        desc : "Arma para estocadas empleada<br>por la Portaespadas, una de las marionetas<br>de Mido. Tiene instalado un activador<br>de regalos de tipo frío que permite generar<br>al instante una lanza de hielo. Es un arma<br>única creada para los mejores de Cerbero<br>y su uso requiere una técnica delicada."
      },
      
      A9 : {
        name : "Espada del atardecer",
        desc : "Una espada matarreinas deformada y corroída<br>por el miasma. Ni siquiera la materia<br>inorgánica es inmune a la corrupción<br>de la reina, que deslustró el brillo negro<br>de esta arma y modificó sus propiedades.<br>Sin embargo, a pesar de que todos dudan<br>al empuñarla, su eficacia es indiscutible."
      },
      
      A10 : {
        name : "Sable negro",
        desc : "Una espada negro azabache de un solo filo.<br>Su hoja curva está hecha para cortar<br>la carne y un espadachín hábil aprovechará<br>mejor su efecto. A los cazadores de negro<br>no les importa el peso de sus armas y buscan<br>sobre todo la fuerza, así que se necesita<br>una buena preparación."
      },
      
      A11 : {
        name : "Verduga",
        desc : "Arma preferida de Jack, el vigilante<br>de la Cripta. Su hoja cuidadosamente afilada<br>no muestra señales de desgaste.<br>Un solo golpe produce heridas letales.<br>Su historia es desconocida, pero seguramente<br>sea una versión personalizada de las armas<br>de los cazadores de negro. El cuidado<br>que muestra dice mucho sobre el enigmático<br>vigilante."
      },
      
      A12 : {
        name : "Espadón perdido",
        desc : "Espada de una mano de apariciones caídas<br>que se unieron a los Perdidos. El tiempo<br>que pasó en el miasma alteró<br>sus propiedades. Fue creada para matar<br>Perdidos, pero terminó alimentándose<br>de sangre de apariciones. Esta ironía<br>es muy habitual en el mundo de Vein."
      },
      
      A13 : {
        name : "Mandoble carmesí",
        desc : "Espada de una mano similar a una espada<br>larga que perteneció a un devorador<br>de dioses con un autocontrol férreo.<br>Contiene un activador de regalos que permite<br>a quien la empuña infligir cortes.<br>Esta espada carmesí brilla frente<br>a la oscura sangre que se derrama."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Tubo de fuego del infierno",
        desc : "Un arma tipo bate deformada por el fuego del infierno.<br><br>Este tubo estuvo expuesto al miasma y fue bañado en el fuego del infierno, lo que hizo que cambiara de color. Solo aquellos que hayan superado las pruebas más duras podrán obtenerlo."
      },
      
      A15 : {
        name : "Espada infernal",
        desc : "Espada de un solo filo quemada en el fuego del infierno.<br><br>A pesar de su gran escalada de fuerza, sigue siendo muy ligera.<br><br>La espada de fuego carmesí alberga una poderosa llama e impregna con fuego los ataques cargados de esta arma."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Tubo de escarcha",
        desc : "Un arma tipo bate deformada por la escarcha.<br><br>Este tubo estuvo expuesto al miasma y fue bañado en escarcha, lo que hizo que cambiara de color. Solo aquellos que hayan superado las pruebas más duras podrán obtenerlo."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Tubo de rayo",
        desc : "Un arma tipo bate deformada por un rayo.<br><br>Este tubo estuvo expuesto al miasma y recibió el impacto de un rayo, lo que hizo que cambiara de color. Solo aquellos que hayan superado las pruebas más duras podrán obtenerlo."
      },
      
      A18 : {
        name : "Tubo de los inigualables",
        desc : "Un arma tipo bate concedida únicamente a quienes desean convertirse en los más grandes.<br><br>Una aparición inigualable en poder no tiene necesidad de armamento adicional; este arma solo existe para venerar a los poderosos."
      },
      
      A19 : {
        name : "Espada de destello",
        desc : "Espada de una mano galvanizada por un trueno.<br><br>Es pesada, pero presenta gran poder defensivo y también gran destreza y escalada de mente.<br><br>La electricidad azul oculta en el interior de esta espada centellea e impregna con rayos los ataques cargados de esta arma."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Espadón matarreinas",
        desc : "Una espada de dos manos producida en masa<br>para las apariciones en la Operación<br>Exterminador de la reina. Se diseñó<br>para luchar contra el cuerpo de la reina,<br>por lo que es más que adecuada para cortar<br>a los Perdidos."
      },
      
      B1 : {
        name : "Zweihander",
        desc : "Espada larga de dos manos producida<br>por el Gobierno provisional. Diseñada<br>para matar grandes especímenes<br>de los Perdidos, es duradera y ofrece<br>a su portador una gran protección.<br>La información de la Operación Exterminador<br>de la reina permitió añadir mejoras<br>técnicas, como un conductor de icor<br>unitario interno."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Una espada larga modelada a partir<br>de una gran espada japonesa. Fue creada<br>por una aparición llamada Mukuro, que grabó<br>en la hoja el nombre del arma, que significa<br>&quot;cadáver segador&quot;. Diseñada para tajos<br>amplios y feroces, su fuerza produce<br>una racha de viento si golpea con violencia."
      },
      
      B3 : {
        name : "Perdición oni",
        desc : "La espada que le ha servido a Yakumo<br>en innumerables campos de batalla. Creada<br>con una técnica diferente a la mayoría<br>de las armas del mundo de Vein, fue diseñada<br>para empuñarla en movimiento,<br>a pesar de su tamaño. Yakumo la recibió<br>de la misma aparición que le dio su arma<br>a Louis y la personalizó para adaptarla<br>a su estilo."
      },
      
      B4 : {
        name : "Espada deformada",
        desc : "Espada de dos manos cuya hoja se parece<br>a un diente alargado. Creada con el cuerpo<br>de un enorme espécimen de Perdido, esta arma<br>es capaz de desatar algo semejante<br>a un regalo cuando golpea con todo su poder.<br>Tiene una leve calidez y se rumorea<br>que ansía el sabor de la sangre."
      },
      
      B5 : {
        name : "Gran Espada Negra",
        desc : "Una espada de dos manos con un solo filo<br>negro encadenado. Esta arma larga y curva<br>se diseñó para cortar las extremidades<br>de los enemigos. A los cazadores de negro<br>no les importa el peso de sus armas y buscan<br>sobre todo la fuerza, así que se necesita<br>una buena preparación."
      },
      
      B6 : {
        name : "Espada Rey Lobo Plateado",
        desc : "Espada dorada de dos manos empuñada<br>por Silva después de ceder ante el frenesí.<br>Conserva parte del poder asociado<br>a las reliquias y puede asestar poderosos<br>golpes en línea recta a gran velocidad.<br>Su diseño inspira una belleza casi devorada<br>por la fuerza bruta y da un aura imperiosa<br>a su portador."
      },
      
      B7 : {
        name : "Filo de Juicio",
        desc : "Espada de dos manos creada<br>por el inquisitivo y depravado Mido.<br>Su mecanismo interno de transformación<br>genera una hoja de regalo de gran potencia,<br>con un gran poder destructivo, probablemente<br>reservado para un enfrentamiento final<br>contra Silva."
      },
      
      B8 : {
        name : "Espadón del atardecer",
        desc : "Un espadón matarreinas deformado y corroído<br>por el miasma. Ni siquiera la materia<br>inorgánica es inmune a la corrupción<br>de la reina, que deslustró el brillo negro<br>de esta arma y modificó sus propiedades.<br>Sin embargo, a pesar de que todos dudan<br>al empuñarla, su eficacia es indiscutible."
      },
      
      B9 : {
        name : "Zweihander perdida",
        desc : "Espada de dos manos de apariciones caídas<br>que se unieron a los Perdidos. El tiempo<br>en el miasma alteró sus propiedades. Creada<br>para matar a los Perdidos, terminó<br>alimentándose de la sangre<br>de las apariciones. Esta ironía<br>es muy habitual en el mundo de Vein."
      },
      
      B10 : {
        name : "Marca de Lobo Plateado",
        desc : "Espada de plata de dos manos de la unidad<br>de seguridad Cerbero. Está pensada<br>para combates cuerpo a cuerpo,<br>pero también puede alcanzar rápidamente<br>al enemigo con potentes cortes. Cerbero<br>es una fuerza de élite creada<br>tras la Operación Exterminador de la reina<br>y su equipo muestra su valía<br>cuando está en buenas manos."
      },
      
      B11 : {
        name : "Espadón de lividez",
        desc : "Espada de dos manos similar a una sierra<br>gigante que perteneció a un devorador<br>de dioses que cargaba con el peso<br>del destino. Emplearla usando toda tu fuerza<br>hará que brille con un intenso azul<br>y que golpee con una fuerza terrible.<br>Es un arma envuelta en una luz cegadora<br>que será el fin de los Perdidos."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Balmung iracundo",
        desc : "Espada de dos manos quemada en el fuego del infierno.<br><br>Aunque es pesada, es excelente en poder de ataque y defensa contra armas, y también posee escalada de destreza alta.<br><br>La hoja quemada todavía conserva el calor de la llama e impregna con fuego los ataques cargados."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Espadón azur",
        desc : "Espada de dos manos congelada por la escarcha.<br><br>Aunque es pesada, presenta gran defensa contra armas y escalada de voluntad.<br><br>Esta espada de escarcha blanca contiene el poder del cero absoluto en su interior, lo que impregna con hielo sus ataques cargados."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Alabarda matarreinas",
        desc : "Un arma de mástil producida en masa<br>para las apariciones de la Operación<br>Exterminador de la reina. Creada<br>para ofrecer potencia y facilidad de uso,<br>los que luchaban contra Perdidos gigantes<br>eran los primeros en recibir<br>los nuevos modelos."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "Arma de mástil larga producida<br>por el Gobierno provisional. El diseño<br>de la punta mejora la efectividad<br>cuando se golpea con fuerza suficiente.<br>Las armas del Gobierno provisional<br>se diseñan para defender a los civiles.<br>Aunque parecen sencillas y emplean<br>materiales comunes, son muy capaces<br>de destruir a los Perdidos."
      },
      
      C2 : {
        name : "Empaladora",
        desc : "Una lanza fina y de punta afilada. Su largo<br>supera la altura de una persona media,<br>pero es ligera y permite realizar ataques<br>rápidos. Fue diseñada por unos ingenieros<br>excéntricos cuyos productos se manejan<br>de forma rara, salvo esta arma,<br>creada por capricho."
      },
      
      C3 : {
        name : "Cortadora granate",
        desc : "Digna arma de mástil de color rojo y plata,<br>bautizada en honor de una joya roja. Alberga<br>un activador de regalos en miniatura<br>que envía hojas segadoras al golpear.<br>Creada por una secta de apariciones<br>que se considera la nueva nobleza,<br>es muy funcional a pesar de su aspecto<br>ostentoso."
      },
      
      C4 : {
        name : "Dammerung ",
        desc : "Arma de mástil usada por la inocente Io.<br>Murasame la modificó para que active<br>un regalo que ofrece al portador protección<br>adicional al golpear. A medida que te labres<br>un destino, ¿encontrarás tu pasado o crearás<br>un nuevo futuro con tus amigos?"
      },
      
      C5 : {
        name : "Alabarda negra",
        desc : "Una arma de mástil con una hoja negra.<br>Su extremo en forma de guadaña se diseñó<br>para cortar cabezas de Perdidos.<br>A los cazadores de negro no les importa<br>el peso de sus armas y buscan sobre todo<br>la fuerza, así que se necesita<br>una buena preparación."
      },
      
      C6 : {
        name : "Guadaña de asesino",
        desc : "La herramienta de un ejecutor del Foso<br>ululante. Tiene un activador de regalos<br>que puede producir líquido y dispara<br>columnas de agua al golpear. El Perdido<br>que la portaba fue reducido a cenizas,<br>pero su poder permanece y pasa<br>a su siguiente usuario, como en un último<br>esfuerzo por aferrarse a la vida."
      },
      
      C7 : {
        name : "Alabarda del atardecer",
        desc : "Una alabarda matarreinas deformada<br>y corroída por el miasma. Ni siquiera<br>la materia inorgánica es inmune<br>a la corrupción de la reina, que deslustró<br>el brillo negro de esta arma y modificó<br>sus propiedades. Sin embargo,<br>a pesar de que todos dudan al empuñarla,<br>su eficacia es indiscutible."
      },
      
      C8 : {
        name : "Bardiche perdida",
        desc : "Arma de mástil usada por apariciones caídas<br>que se unieron a los Perdidos. El tiempo<br>que pasó en el miasma alteró<br>sus propiedades. Fue creada para matar<br>Perdidos, pero terminó alimentándose<br>de sangre de apariciones. Esta ironía<br>es muy habitual en el mundo de Vein."
      },
      
      C9 : {
        name : "Hacha aniquiladora",
        desc : "Un arma destructiva que empuñó un miembro<br>especialmente fuerte de Cerbero. Su forma<br>cambió cuando el portador se convirtió<br>en Perdido, lo que le proporcionó un temible<br>poder nuevo que le permitía destrozar<br>las defensas y rebanar a los enemigos."
      },
      
      C10 : {
        name : "Alabarda lobo plateado",
        desc : "Arma de mástil de plata para la unidad<br>de seguridad Cerbero. Es un arma formidable<br>que emite un aura autoritaria. Cerbero<br>es una fuerza de élite formada<br>tras Exterminador de la reina y su equipo<br>muestra su valía cuando está<br>en buenas manos."
      },
      
      C11 : {
        name : "Lanza cerúlea",
        desc : "Alabarda similar a una lanza que perteneció<br>a un devorador de dioses con grandes<br>aspiraciones. Si se usa con gran fuerza,<br>de su cabeza surge una espada de regalo<br>que permite al usuario atacar con mayor<br>alcance. Esta elegante arma azul atravesó<br>a muchos dioses y reducirá a cenizas<br>a los Perdidos."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Alabarda de niebla sangrienta",
        desc : "Una alabarda congelada por la escarcha.<br><br>Equilibra su bajo poder de ataque con peso ligero y escalada de fuerza alta.<br><br>El frío incesante contenido dentro del arma impregna con hielo sus ataques cargados."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Brionac de rayo",
        desc : "Alabarda galvanizada por un trueno.<br><br>Aunque su poder y su defensa contra armas es más baja, es ligera y aumenta la ganancia de icor.<br><br>La espada eléctrica está oculta en una luz azulada que impregna con rayos sus ataques cargados."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Martillo matarreinas",
        desc : "Mazo proporcionado a las apariciones<br>en la Operación Exterminador de la reina.<br>Diseñado para aplastar las extremidades<br>de la reina, la búsqueda de poder lo dejó<br>en un estado poco manejable<br>y requiere mucho entrenamiento."
      },
      
      D1 : {
        name : "Martillos de servidumbre",
        desc : "Un arma primitiva tipo martillo.<br>Solo es una empuñadura con un bloque pesado<br>en el extremo. Se le dio el mínimo<br>tratamiento para convertirla en un arma<br>para las apariciones. Lo usan principalmente<br>apariciones que están subyugadas a otras<br>y proporciona una débil luz de esperanza<br>en el combate."
      },
      
      D2 : {
        name : "Maza Juggernaut",
        desc : "Un gran martillo usado por Oliver,<br>que sucumbió a la sed y se unió<br>a los Perdidos. No la cuidaron bien,<br>pero sigue funcionando perfectamente<br>como arma y mantiene todo el poder que tenía<br>durante la Operación Exterminador<br>de la reina. Fue regalada por alguien<br>que la consideraba inútil,<br>pero dio esperanza al siervo que la recibió."
      },
      
      D3 : {
        name : "Hacha pesada",
        desc : "Un arma de mástil larga, producida en masa<br>por el Gobierno provisional. Su gruesa hoja<br>no está pensada para ataques de precisión,<br>pero asesta tajos pesados. Fue diseñada<br>para matar a Perdidos gigantes,<br>pero debido a la falta de herramientas<br>en el duro mundo de Vein, también se utiliza<br>para demoler edificios y despejar<br>vegetación."
      },
      
      D4 : {
        name : "Ancla de impulso",
        desc : "Un martillo mecánico de construcción sólida.<br>Contiene un activador de regalos que dispara<br>oleadas de calor desde su escape,<br>lo que multiplica su poder. Al golpear<br>el suelo, lo sacude y genera una onda<br>expansiva. Es la obra maestra<br>de unos ingenieros medio locos<br>y algunas apariciones lo consideran<br>su compañero vital."
      },
      
      D5 : {
        name : "Martillo enorme",
        desc : "Un enorme martillo usado por los Perdidos<br>agrandados por la exposición al miasma.<br>Su faz se endureció por la exposición<br>a un miasma denso y un golpe poderoso<br>puede destrozar la guardia de cualquiera.<br>Muchos siervos enviados en busca de gotas<br>de sangre terminan sufriendo una terrible<br>transformación y sosteniendo estas armas."
      },
      
      D6 : {
        name : "Martillo lobo plateado",
        desc : "Martillo de plata de la unidad de seguridad<br>Cerbero. Su centro de gravedad<br>está en un punto que permite al usuario<br>empuñar el arma libremente,<br>a pesar de su tamaño. Cerbero es una fuerza<br>de élite formada tras Exterminador<br>de la reina y su equipo muestra su valía<br>cuando está en buenas manos."
      },
      
      D7 : {
        name : "Labrys del tirano",
        desc : "Un hacha de doble filo con un tenue brillo<br>dorado. Pesa más de lo que parece<br>y solo los más fuertes pueden empuñarla<br>como es debido. La hoja resplandeciente<br>y el mango no son de oro real,<br>sino una imitación creada con el nacimiento<br>de un tirano."
      },
      
      D8 : {
        name : "Mazo del atardecer",
        desc : "Un martillo matarreinas deformado y corroído<br>por el miasma. Ni siquiera la materia<br>inorgánica es inmune a la corrupción<br>de la reina, que deslustró el brillo negro<br>de esta arma y modificó sus propiedades.<br>Sin embargo, a pesar de que todos dudan<br>al empuñarla, su eficacia es indiscutible."
      },
      
      D9 : {
        name : "Martillo quemado",
        desc : "Un martillo deformado por la exposición<br>prolongada a una llama intensa.<br>Lo transformó en una bola de fuego<br>que quema carne y hueso por igual<br>con un calor lúgubre."
      },
      
      D10 : {
        name : "Hacha pesada perdida",
        desc : "Un hacha usada por apariciones caídas<br>que se unieron a los Perdidos. El tiempo<br>que pasó en el miasma alteró<br>sus propiedades. Fue creada para matar<br>Perdidos, pero terminó alimentándose<br>de sangre de apariciones. Esta ironía<br>es muy habitual en el mundo de Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Martillo infernal",
        desc : "Martillo quemado en el fuego del infierno.<br><br>Cuenta con una escalada de destreza especialmente alta, por lo que mejora enormemente el poder de ataque físico y la velocidad de drenaje.<br><br>El fuego del infierno atrapado en el metal arde con la misma fuerza de siempre e impregna con fuego los ataques cargados."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Ventisquero de Sharur",
        desc : "Martillo congelado por la escarcha.<br><br>Se especializa en defensa y escalada de fuerza y presenta un peso un poco más ligero.<br><br>Este arma alberga el frío gélido del cero absoluto, por lo que impregna con hielo sus ataques cargados."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Bayoneta matarreinas",
        desc : "Bayoneta producida para las apariciones<br>de la Operación Exterminador de la reina.<br>Su generador de regalos permite realizar<br>ataques efectivos a distancia. Es popular<br>entre los guerreros que prefieren evitar<br>los ataques cuerpo a cuerpo."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "La bayoneta que Mia siempre tiene a mano.<br>Se personalizó y aligeró para que incluso<br>su liviana propietaria pueda usarla<br>libremente. Las marcas y los arañazos<br>de su superficie cuentan la historia<br>de cómo protegió dos vidas importantes.<br>Como agradecimiento, recibe el nombre<br>de una flor."
      },
      
      E2 : {
        name : "Apaciguadora",
        desc : "Bayoneta construida con piezas de armas<br>y chatarra. A pesar de su burdo aspecto,<br>el activador de regalos funciona<br>perfectamente, enviando ataques<br>en una oleada limpia. Es el arma preferida<br>de los forajidos y quienes alardean<br>de riqueza suelen verse en su mira."
      },
      
      E3 : {
        name : "Bayoneta",
        desc : "Una bayoneta de sierra producida en masa<br>por el Gobierno provisional. Su activador<br>de regalos puede disparar ráfagas de corto<br>alcance que cubran una zona.<br>Muchas apariciones no han sido entrenadas<br>en el manejo de las armas, así que se diseñó<br>para ser eficaz incluso en manos<br>poco hábiles."
      },
      
      E4 : {
        name : "Perforadora rubelita",
        desc : "Una digna bayoneta roja y plateada<br>que recibe su nombre de una joya roja.<br>Su largo y elegante cañón dispara balas<br>que parecen perseguir a sus objetivos.<br>Una secta de apariciones se considera<br>la nobleza y sus armas merecen<br>todo el lujo que puedan proporcionarles."
      },
      
      E5 : {
        name : "Bayoneta lobo plateado",
        desc : "Bayoneta de plata utilizada por la unidad<br>de seguridad Cerbero. Las hojas de ambos<br>lados del cañón fueron creadas para cargas<br>iniciales en intensas batallas cuerpo<br>a cuerpo. Cerbero es una fuerza de élite<br>formada tras Exterminador de la reina<br>y su equipo muestra su valía<br>cuando está en buenas manos."
      },
      
      E6 : {
        name : "Desastre ardiente",
        desc : "El arma del Artillero, una de las marionetas<br>de Mido. Alberga un mecanismo que amplifica<br>los regalos de fuego y produce oleadas<br>de llamas incandescentes. Se creó<br>para un artillero con gran compatibilidad<br>y permite que el usuario ajuste la forma<br>del fuego que dispara."
      },
      
      E7 : {
        name : "Bayoneta del atardecer",
        desc : "Una bayoneta matarreinas deformada<br>y corroída por el miasma. Ni siquiera<br>la materia inorgánica es inmune<br>a la corrupción de la reina, que deslustró<br>el brillo negro de esta arma y modificó<br>sus propiedades. Sin embargo,<br>a pesar de que todos dudan al empuñarla,<br>su eficacia es indiscutible."
      },
      
      E8 : {
        name : "Bayoneta negra",
        desc : "Bayoneta con hoja y cañón negros. Su filo<br>curvo puede cortar hasta la carne más dura<br>y facilita el uso de feroces disparos<br>continuos. A los cazadores de negro<br>no les importa el peso de sus armas y buscan<br>sobre todo la fuerza, así que se necesita<br>una buena preparación para usarla."
      },
      
      E9 : {
        name : "Libertador",
        desc : "La bayoneta de Eva, vigilante de la Cripta.<br>Tiene un activador de regalos que dispara<br>balas buscadoras. Eva la recibió<br>de su compañero Jack y su tremendo poder<br>de muestra la profunda lealtad<br>que se profesan."
      },
      
      E10 : {
        name : "Bayoneta perdida",
        desc : "Bayoneta usada por apariciones caídas<br>que se unieron a los Perdidos. El tiempo<br>que pasó en el miasma alteró<br>sus propiedades. Fue creada para matar<br>Perdidos, pero terminó alimentándose<br>de sangre de apariciones. Esta ironía<br>es muy habitual en el mundo de Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Nieve sangrienta",
        desc : "Bayoneta congelada por la escarcha.<br><br>Compensa su bajo poder y defensa contra armas con un peso ligero y ganancia de icor aumentada.<br><br>Esta arma está dotada de una congelación profunda, y cuando ejecuta ataques cargados dispara rondas poderosas de hielo en rápida sucesión, mientras que la hoja obtiene propiedades de hielo."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Rayo",
        desc : "Bayoneta galvanizada por un trueno.<br><br>Es ligera y puede infligir mucho daño incluso en ataques cuerpo a cuerpo.<br><br>Está imbuida con un misterioso rayo púrpura que impregna la espada con rayos y convierte sus rondas en proyectiles guiados durante los ataques cargados."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Garra nocturna",
        desc : "Un velo de sangre de tipo Ogro<br>de estilo tradicional para apariciones.<br><br>Su mecanismo de drenaje es muy eficaz y aumenta<br>la cantidad de icor ganado al atacar.<br><br>Este modelo es excelente tanto en forma como en función<br>y es muy apreciado por su producción limitada."
      },
      
      A1 : {
        name : "Plata noble",
        desc : "Velo de sangre con capa en forma de alas<br>de murciélago. Las líneas de plata de los huesos<br>contienen sistemas que mejoran los dones<br>de apoyo. Sus creadores pusieron mucho énfasis<br>en el estilo, pero las apariciones<br>suelen estar más concentradas en sobrevivir<br>y no se dan cuenta."
      },
      
      A2 : {
        name : "Variante GXM",
        desc : "Velo de sangre creado con placas blindadas y<br>tejido especial. Protege muchísimo e incluye<br>funciones que mejoran los dones de apoyo.<br>Fue creado por un fabricante militar,<br>pero la escasez de fibra sintética y aleación<br>en Vein significa que pocas apariciones<br>lo pueden usar."
      },
      
      A3 : {
        name : "Liberador sangriento",
        desc : "Velo de sangre con una capa andrajosa. Parece<br>un poco harapiento a primera vista,<br>pero mejora los dones ofensivos y la resistencia<br>a los efectos de estado. Se desconoce<br>su fabricante. Es sensible y el mecanismo<br>de transformación del brazo derecho<br>es inestable, por lo que requiere<br>un refuerzo adicional."
      },
      
      A4 : {
        name : "Garra matarreinas",
        desc : "Velo de sangre usado por las fuerzas<br>de la Operación Matarreinas.<br>Mejora todos los dones, pero no es tan robusto<br>como sería deseable. Se diseñó para una producción<br>masiva de bajo costo, así que<br>tiene como base un chaleco táctico para<br>equipar rápidamente a las apariciones<br>y enviarlas a primera línea."
      },
      
      A5 : {
        name : "Garra venosa",
        desc : "Velo de sangre de tipo Ogro<br>de una aparición cuya sed la llevó a convertirse<br>en uno de los Perdidos. Posiblemente, debido a la transformación,<br>dura menos que otros<br>similares, pero lo compensa<br>con su ligereza.<br>Sus tentáculos ilustran claramente<br>el horror de convertirse en un Perdido."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Caballero ruinoso",
        desc : "Velo de sangre desgarrado por el fuego del infierno.<br><br>Aunque es una prenda pesada, otorga a su portador gran reducción de daño y escalada de regalos oscuros.<br><br>No se conserva ningún registro de este velo de sangre en la historia; sin embargo, el misterio en sí sugiere un nuevo poder y posibilidades ocultas en su interior."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Garra crepuscular",
        desc : "Velo de sangre raído por un trueno descomunal.<br><br>Su peso pesado se equilibra con gran reducción de daño y escalada de fuerza.<br><br>Los guerreros que hayan alcanzado gran fuerza seguirán buscando el conflicto para alcanzar el máximo de poder con este velo."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Lanza nocturna",
        desc : "Un velo de sangre de tipo Aguijón<br>de estilo tradicional para apariciones.<br><br>Ofrece menos movilidad que otros del mismo tipo,<br>pero mucha protección contra todo tipo de daño.<br><br>Este modelo es excelente tanto en forma como en función<br>y es muy apreciado por su producción limitada."
      },
      
      B1 : {
        name : "Traje de cuervo",
        desc : "Velo de sangre que recuerda mucho a las alas<br>de un cuervo. Como indica su diseño místico,<br>mejora el poder de los dones ofensivos.<br>Creado originalmente como prototipo<br>para la serie nocturna, pero por un cambio de enfoque<br>hacia el equilibrio, solo se produjo este."
      },
      
      B2 : {
        name : "Manto invernal",
        desc : "Velo de sangre con forma de atuendo<br>para explorar regiones polares. Obstaculiza<br>la movilidad, pero ofrece una gran protección<br>y mejora los dones de apoyo. Diseñado<br>para expediciones montañosas en busca de gotas<br>de sangre que no dieron fruto, este modelo<br>se dejó de lado."
      },
      
      B3 : {
        name : "Atuendo de plata",
        desc : "Velo de sangre que recuerda a una armadura<br>brillante de caballero. Muy resistente<br>a ataques cortantes y perforantes. Diseñado<br>por artesanos que querían preservar el sentido<br>humano de la belleza. Muchas apariciones<br>sienten ese mismo deseo."
      },
      
      B4 : {
        name : "Espina matarreinas",
        desc : "Velo de sangre usado por las fuerzas<br>de la Operación Matarreinas. Mejora<br>todos los dones, pero no es tan robusto<br>como sería deseable. Los de Aguijón se pueden<br>usar a distancia y son buenos para<br>escaramuzas, pero el complejo mecanismo<br>de drenado impide la producción masiva."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Protagonismo elegante",
        desc : "Velo de sangre raído por el fuego del infierno.<br><br>Sus características especiales incluyen un peso ligero, gran escalada de destreza y reducción de daño.<br><br>Este hermoso velo no se hizo solo para presumir, sin embargo, su elegancia es un reflejo del ansia de poder de su creador."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Velo bajo cero",
        desc : "Velo de sangre raído por la escarcha.<br><br>Para compensar su peso pesado, es excelente en reducción de daño y escalada de don oscuro.<br><br>La apariencia solemne y digna de esta prenda es la marca de una voluntad férrea de proteger la vida de las apariciones."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Colmillo nocturno",
        desc : "Un velo de sangre de tipo Sabueso<br>de estilo tradicional para apariciones.<br><br>Tiene una gran capacidad defensiva, lo que lo convierte en<br>fiable en cualquier campo de batalla.<br><br>Este modelo es excelente tanto en forma como en función<br>y es muy apreciado por su producción limitada."
      },
      
      C1 : {
        name : "Sabueso azulado",
        desc : "Velo de sangre que parece una chaqueta. No es<br>especialmente resistente a los elementos,<br>pero ofrece resistencia a los efectos de estado.<br>Es muy popular entre las apariciones por su<br>bajo costo y su estilo que combina con todo."
      },
      
      C2 : {
        name : "Defensor GXL",
        desc : "Velo de sangre creado con placas blindadas<br>y tejido especial. Protege como una fortaleza,<br>pero es curiosamente vulnerable a efectos<br>de estado. Fue creado por un fabricante militar,<br>pero la escasez de fibra sintética<br>y aleación en Vein significa que pocas<br>apariciones lo pueden usar."
      },
      
      C3 : {
        name : "Fuerte puercoespín",
        desc : "Velo de sangre con picos de metal. Protege<br>menos de lo que parece, pero aumenta el poder<br>de los dones ofensivos. Al parecer,<br>lo crearon fabricantes del mercado negro. No es<br>muy funcional como ropa normal,<br>pero su aspecto amenazador cumple su propósito."
      },
      
      C4 : {
        name : "Hábito blanco",
        desc : "Velo de sangre que recuerda a un hábito<br>de monje. Dificulta el movimiento y ofrece<br>poca defensa, pero aumenta mucho la efectividad<br>de los dones de apoyo. Eran de una secta<br>religiosa de apariciones, pero un día<br>se desvanecieron sin previo aviso."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Equipo violeta",
        desc : "Velo de sangre raído por el fuego del infierno.<br><br>Lo que le falta en escalada de regalos lo compensa con la increíble ligereza de peso y gran escalada de fuerza.<br><br>Como por fin tienen un peso ligero, los portadores de los velos de sangre de tipo sabueso serán como bestias sueltas en el bosque y causarán destrozos en los campos de batalla con inconsciente abandono"
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Colmillo de trueno de amanecer",
        desc : "Velo de sangre raído por un trueno descomunal.<br><br>Aunque es pesado, es excelente en regalo luminoso, destreza y escalada de mente.<br><br>Los rumores dicen que la aparición más fuerte del pasado utilizó este velo una vez, pero no hay forma de saber si es cierto."
      },
      
      
      // # IVY #
      D0 : {
        name : "Espina nocturna",
        desc : "Un velo de sangre de tipo Hiedra<br>de estilo tradicional para apariciones.<br><br>Mejora los efectos de todos los regalos y ofrece<br>defensa estable contra ataques no físicos.<br><br>Este modelo es excelente tanto en forma como en función<br>y es muy apreciado por su producción limitada."
      },
      
      D1 : {
        name : "Gracia marfil",
        desc : "Velo de sangre adornado con plata. Aunque<br>no protege especialmente, aumenta mucho<br>la eficacia de los dones. Es un objeto<br>que intenta ofrecer un toque de belleza al mundo<br>en ruinas de Vein y personifica un sentido<br>de la estética que las apariciones<br>casi han perdido por completo."
      },
      
      D2 : {
        name : "Asalto GXH",
        desc : "Velo de sangre creado a partir de un abrigo y equipado<br>con función de drenado.<br>Protege sin sacrificar la movilidad<br>y también mejora los dones ofensivos.<br><br>Fue creado por un fabricante militar,<br>pero la escasez de fibra sintética y aleación<br>en esta veta significa que pocas apariciones lo pudieron obtener."
      },
      
      D3 : {
        name : "Chal de oración",
        desc : "Velo de sangre con un diseño elaborado<br>y un audaz color rojo. Resulta sorprendentemente<br>protector y mejora la efectividad<br>de los dones de apoyo. Su dueño original rezó<br>por la salvación, pero nadie sabe<br>si recibió respuesta."
      },
      
      D4 : {
        name : "Espolón suicida",
        desc : "Velo de sangre que parece un collar<br>de espinas. Mejora mucho el poder de los dones ofensivos,<br>pero apenas ofrece defensa física.<br>Se rumorea que es obra de un ingeniero perverso,<br>convencido de que la única defensa real<br>es matar primero al enemigo.<br>Pocos lo usan voluntariamente."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Espina cautivadora",
        desc : "Velo de sangre raído por la escarcha.<br><br>Debido a su peso pesado, ofrece reducción de daño y gran escalada de destreza.<br><br>Bajo la elegante capucha se esconde la brillante mirada de alguien que anhela el beso de la muerte, el dulce sabor de la carne fresca."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Espinas de maestro",
        desc : "Velo de sangre raído por un trueno descomunal.<br><br>Lo que le falta en escalada de regalos, lo compensa con ligereza de peso, gran destreza y escalada de voluntad.<br><br>Se dice que toda aparición que se ponga este velo sentirá como si le hubieran crecido alas."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Alivio",
        desc : "Reduce el peso de un equipo, <br>pero también reduce sus atributos básicos."
      },
      
      A1 : {
        name : "Fortificación",
        desc : "Aumenta el peso de un equipo <br>pero también aumenta sus atributos básicos."
      },
      
      A2 : {
        name : "Intensificación",
        desc : "Otorga una mejor escalada de atributos de equipo.<br>Reduce las propiedades del arma y el ataque del don."
      },
      
      A3 : {
        name : "Dones",
        desc : "Mejora mucho el ataque de un arma o la efectividad de regalo de un velo de sangre.<br>Reduce mucho la escalada de atributos."
      },
      
      A4 : {
        name : "Devorar",
        desc : "Mejora el ritmo de drenado de un objeto.<br>Reduce propiedades arma y ataque del don."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Fuego",
        desc : "Otorga fuego a un equipo. <br>Reduce propiedades del arma, el ataque del don y escala de atributos."
      },
      
      B1 : {
        name : "Hielo",
        desc : "Otorga hielo a un equipo. <br>Reduce propiedades del arma, ataque del don y escala de atributos."
      },
      
      B2 : {
        name : "Rayo",
        desc : "Otorga electricidad a un equipo. <br>Reduce las propiedades del arma, ataque del don y escala de atributos."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Veneno",
        desc : "Crea equipo para envenenar a los enemigos <br>pero reduce el ataque y las propiedades del don."
      },
      
      C1 : {
        name : "Aturdimiento",
        desc : "Crea equipo que aturde enemigos <br>pero reduce el ataque y las propiedades del don."
      },
      
      C2 : {
        name : "Inhibición",
        desc : "Crea equipo para inhibir a los enemigos <br>pero reduce el ataque y las propiedades del don."
      },
      
      C3 : {
        name : "Lentitud",
        desc : "Crea equipo para ralentizar enemigos <br>pero reduce el ataque y las propiedades del don."
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
