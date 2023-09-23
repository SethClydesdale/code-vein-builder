// # Español - España TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(None)',
  
  
  // titles/labels
  weapon : "Arma",
  blood_veil : "Velo de sangre",
  transform : "Transformar",
  blood_code : "Códigos de sangre",
  gift_type : "Tipos de don",
  passive : "Pasivo",
  active : "Activo",
  options : "Opciones",
  code_owner : "Dueño de código",
  origin : "Acceso:",
  companion_rank : "Logros como camarada",
  rv_mastery : "Maestría resuc.",
  exclusive : "Exclusivo",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Confirmar",
  modal_close : "Cerrar",
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
    initial : "Predeterminado",
    '1h' : "Espada a 1 mano",
    '2h' : "Espada a 2 manos",
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
  status : "Estadísticas",
  lv : "Nivel",
  hp : "PS",
  sta : "Energía",
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
  drain_attack : "Ataque drenaje",
  physical : "Físico", // weapon damage
  base : "Base", // base damage
  scaling : "Ajuste", // damage from scaling
  drain_rating : "Nivel de drenaje",
  
  
  // defense stats
  defense : "Defensa",
  stamina_reduction : "Reducción de energía",
  balance : "Equilibrio",
  base_balance : "Equilib. básico",
  
  
  // resistances
  status_effects : "Efectos de estado",
  resistances : "Resistencias",
  venom : "Veneno",
  stun : "Aturdimiento",
  inhibit : "Inhibición",
  slow : "Lentitud",
  leak : "Pérdida",
  
  
  // misc menu options
  passive_effect : "Efectos pasivos",
  on : "sí",
  off : "no",
  hint : "Leer la pista",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Ponderación de estadísticas",
  required_stats : "Estadísticas necesarias",
  
  
  // mobility
  mobility : "Movilidad",
  mobi : {
    base : "Movilidad básica", // label for blood code mobility type (also used in the status display)
    slow : "Lento",
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
  '1h' : "Espada a 1 mano",
  '2h' : "Espada a 2 manos",
  halberd : "Alabarda",
  hammer : "Martillo",
  bayonet : "Bayoneta",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Tajante",
    crush : "Aplastante",
    pierce : "Perforante",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Sangre",
    fire : "Fuego",
    ice : "Hielo",
    lightning : "Relámpago"
  },
  
  
  // gift stats
  gift : "Don", // singular
  gifts : "Dones", // plural
  
  ichor_cost : "Coste de icor",
  cooldown : "Reutilización",
   seconds : "s", // displayed after the cooldown number
  physical : "Tipo de ataque",
  elemental : "No físico",
  usage_req : "Requisitos de uso",
  
  
  // removal (of skills/equipment)
  remove : "Retirar",
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
        desc : "Tu propio código de sangre, que creías<br>perdido en la lucha contra la Reina hace<br>tiempo. Los antiguos sentimientos del<br>interior todavía te afectan. Esta vez debes<br>asegurarte de que tienen una paz duradera.<br>Este código está bien equilibrado para la<br>exploración y el combate cuerpo a<br>cuerpo, con mucha resistencia y PS.",
        owner : "Jugador"
      },
      
      A1 : {
        name : "Luchador",
        desc : "El código de sangre de un guerrero con una<br>espada más alta que él. Contiene<br>la voluntad de quien arriesgó su vida<br>luchando con todas sus fuerzas<br>en la Operación Matarreinas. El código<br>de sangre mejora la resistencia en la lucha<br>cuerpo a cuerpo. Sube las habilidades<br>basadas en la fuerza y la destreza.",
        owner : "Desconocido"
      },
      
      A2 : {
        name : "Montaraz",
        desc : "El código de sangre de un resucitado de gran<br>agilidad en el campo de batalla. Contiene<br>la voluntad de quien rescató a aquellos<br>que temían a los Perdidos y que buscaban<br>perlas de sangre para compartirlas.<br>Destaca al ofrecer ventajas de apoyo<br>y defensa con dones.",
        owner : "Desconocido"
      },
      
      A3 : {
        name : "Conjurador",
        desc : "El código de sangre de un resucitado que<br>convierte sangre drenada en un gran poder.<br>Contiene la voluntad de quien usaba<br>complejos dones para destruir hordas<br>de Perdidos. Está especializado en<br>poderosos dones de ataque a distancia.",
        owner : "Desconocido"
      },
      
      A4 : {
        name : "Fanático",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene la voluntad<br>de acero de quien expía sus errores<br>pasados y lucha hasta el final, sufriendo<br>la agonía de la sed para salvar a los demás.<br>Presenta una gran fuerza y resistencia<br>y compensa su baja reserva de icor<br>con armadura pesada.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometeo",
        desc : "Código de sangre que te dio Louis. Contiene<br>su voluntad, erigida y endurecida al superar<br>numerosos desafíos para salvar a los<br>resucitados. Este código está equilibrado<br>para el combate, aunque es algo frágil.<br>Sus dones facilitan esquivar y bloquear.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Cazador",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene una voluntad<br>que permaneció de alguna forma llena de<br>esperanza a pesar de ser usada como<br>peón y pasar un día horrible tras otro.<br>Destaca en el combate a distancia y alberga<br>dones de apoyo al ataque a distancia<br>con la bayoneta.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercurio",
        desc : "Código de sangre que te dio Coco. Contiene<br>su voluntad luchadora, que deja a un lado<br>el miedo al frenesí y lucha para recorrer<br>el mundo ruinoso en busca de materiales<br>para reconstruir la civilización. Permite<br>explorar de forma segura gracias a sus<br>estadísticas equilibradas y dones basados<br>en la energía y en la neblina.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermes",
        desc : "Código de sangre que te dio Davis. Contiene<br>su resuelta voluntad de seguir un rayo de<br>esperanza entre la desolación y lanzarse<br>al peligro para extender la esperanza.<br>Alberga un gran equilibrio entre ataques<br>cuerpo a cuerpo y una gran variedad<br>de dones útiles.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Buscatinieblas",
        desc : "Código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene una<br>amarga voluntad de cumplir su deber<br>y busca preservar su valor incluso<br>cuando este parece desvanecerse.<br>Cuenta con muchos dones de batalla y<br>está especializado en los venenosos.",
        owner : "Sucesor anónimo"
      },
      
      A10 : {
        name : "Atlas",
        desc : "Código de sangre que te dio Yakumo.<br>Contiene su ferviente disposición a<br>arriesgar su vida luchando por proteger<br>a aquellos que le importan. Permite<br>utilizar armadura pesada, lo que resulta<br>ideal en combate a corta distancia.<br>También posee dones muy útiles para<br>hacer frente a amenazas poderosas.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Asesino",
        desc : "Un código de sangre obtenido de un núcleo<br>de Vestigio reparado. Contiene una férrea <br>voluntad de sobrevivir en un mundo caótico <br>para conseguir la libertad. Resulta ideal para<br>el combate cuerpo a cuerpo y posee dones<br>perfectos para ataques sorpresa.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artemisa",
        desc : "Código de sangre que te dio Mia. Contiene<br>su valiente voluntad de superar un cruel<br>destino y de liberar a aquellos que sufren.<br>Posee mucha energía y dones de ataque,<br>pero no tiene demasiada resistencia.<br>También alberga dones que potencian<br>las habilidades de drenaje.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Isis",
        desc : "Código de sangre que te dio Aurora.<br>Contiene su resuelta voluntad de defender<br>y liberar a aquellos que escogieron sufrir<br>para que los resucitados vivan en paz.<br>Está especializado en combate a distancia<br>y en dominar al enemigo con ataques de icor.<br>",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Tórax de la Reina",
        desc : "Un código de sangre con parte del poder<br>de la Reina obtenido de la reliquia de<br>Aurora. Crea una sensación incómoda que<br>carcome por dentro, pero da un poder de<br>vértigo que recorre la sangre. Está<br>especializado en ataques a distancia<br>y en dominar al enemigo con una<br>gran variedad de dones de ataque.",
        owner : "La Reina"
      },
      
      A15 : {
        name : "Eos",
        desc : "Código de sangre que te dio Io. Contiene su<br>férrea voluntad de resistir y de tomar sus<br>propias decisiones en lugar de ser una<br>simple Guarda. Alberga dones de apoyo,<br>una gran resistencia y mucho icor.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Código de sangre que te dio Nicola.<br>Contiene su amable voluntad de resistir<br>el tormento de su lucha interna para que<br>aquellos que le importan puedan vivir<br>en un mundo más pacífico. Posee una gran<br>resistencia y es muy pesado, ideal para el<br>cuerpo a cuerpo. Su baja reserva de icor<br>se compensa con su resistente armadura.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Aliento de la Reina",
        desc : "Un código de sangre con parte del poder de<br>la Reina obtenido de la reliquia de Nicola.<br>Crea una sensación incómoda que carcome<br>por dentro, pero da un poder de vértigo<br>que recorre la sangre. Está especializado<br>en estilos de combate que emplean dones<br>mejorados. Compensa sus bajas<br>estadísticas con dones.",
        owner : "La Reina"
      },
      
      A18 : {
        name : "Superviviente",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Alberga la férrea<br>voluntad de arriesgar la propia vida en pos<br>de un futuro mejor para las generaciones<br>venideras. Está centrado en la destreza<br>y posee dones muy útiles en combate.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Caballero Negro",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene una trágica<br>voluntad que estuvo sujeta a experimentos<br>inhumanos antes de convertirse en la<br>marioneta de Mido, y a continuación en un<br>Perdido. Posee mucha fuerza y resistencia,<br>así como dones efectivos con la alabarda.",
        owner : "Miguel García"
      },
      
      A20 : {
        name : "Scathach",
        desc : "Código de sangre que te dio Emily.<br>Contiene su poderosa voluntad, que tomó<br>el lugar de sus compañeros dormidos y<br>luchó para defenderlos. Presenta un buen<br>equilibrio entre dones y ataques físicos<br>y está especializado en dones de fuego.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Garra de la Reina",
        desc : "Un código de sangre con parte del poder<br>de la Reina obtenido de la reliquia de <br>Emily. Crea una sensación incómoda<br>que carcome por dentro, pero da un<br>poder de vértigo que recorre la sangre.<br>Permite controlar el campo de batalla<br>al superar al enemigo con dones y<br>ataques físicos.",
        owner : "La Reina"
      },
      
      A22 : {
        name : "Armonía",
        desc : "Código de sangre que te dio Eva. Contiene<br>su voluntad de entrega y dedicación a<br>aquellos que la salvaron de la esclavitud.<br>Mejora las bonificaciones de concentración<br>y posee dones oscuros magníficos. Resulta<br>vulnerable al aturdimiento, pero ofrece<br>grandes cantidades de icor.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Garganta de la Reina",
        desc : "Un código de sangre con parte del poder<br>de la Reina obtenido de la reliquia<br>de Eva. Crea una sensación incómoda<br>que carcome por dentro, pero da<br>un poder de vértigo que recorre la sangre.<br>Destaca en el combate con dones y<br>contiene muchos dones de apoyo.",
        owner : "La Reina"
      },
      
      A24 : {
        name : "Heimdal",
        desc : "Código de sangre que te dio Jack. Contiene<br>su intrépida voluntad de sacrificarlo todo<br>por mantener el equilibrio y el deber.<br>Está especializado en combate cuerpo<br>a cuerpo muy agresivo, pero su límite<br>de peso resulta extremadamente bajo.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Hefesto",
        desc : "Código de sangre que te dio Murasame.<br>Contiene su apasionada voluntad de apoyar<br>a los aliados que se lanzan a arduas<br>batallas y de recibirlos con una sonrisa<br>cuando vuelven a casa. Está especializado<br>en armas basadas en la destreza y emplea<br>dones retorcidos para jugar con el enemigo.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Guerrero",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene la orgullosa<br>voluntad de un guerrero veterano que siguió<br>empuñando su arma hasta el final. Resulta<br>ideal para estilos de lucha basados en la<br>fuerza y ofrece dones que favorecen la<br>supervivencia.",
        owner : "Asistente de Murasame"
      },
      
      A27 : {
        name : "Explorador",
        desc : "Un código de sangre heredado de un núcleo<br>de Vestigio reparado. Contiene una cariñosa<br>voluntad de dejar a un lado los deseos<br>propios y de vivir por los que te importan.<br>Destaca en el combate basado en dones con<br>una gran capacidad de drenaje y permite<br>el uso de armadura ligera para maniobrar<br>fácilmente.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "La Reina",
        desc : "Un código de sangre creado a partir de<br>la colecta de todas las reliquias y la<br>conversión en la Reina. Contiene una<br>voluntad libre de rabia o pena. Es pura<br>soledad. Está especializado en dones y<br>alberga una gran reserva de icor, lo que<br>permite superar al enemigo.",
        owner : "La Reina"
      },
      
      A29 : {
        name : "Hades",
        desc : "Código de sangre que te dio Silva. Contiene<br>su férrea voluntad de dejarlo todo y de<br>soportar un aislamiento completo con tal<br>de salvar el futuro de la humanidad.<br>Alberga un gran poder de ataque<br>procedente de la fuerza y de la destreza<br>y resulta ideal para utilizar equipo pesado.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Deméter",
        desc : "Código de sangre que te dio Karen. Contiene<br>su clemente voluntad de sacrificarse a sí<br>misma por aquellos que sufrían el tormento<br>de la sed y soportaban la carga de los<br>pecados causados por un cruel destino.<br>Su gran reserva de icor ofrece un apoyo<br>basado en dones. Además, inflige un gran<br>daño de fuerza en combate.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Un código de sangre heredado del núcleo de<br>Vestigio reparado de Cruz. Contiene su<br>férrea voluntad de eliminar un peligro y<br>de salvar a los débiles de los días en los<br>que el Proyecto REINA empezó. Posee<br>dones que apoyan tanto el ataque como<br>la defensa, así como dones que conllevan<br>el autosacrificio.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Heraldo",
        desc : "El código de sangre de alguien cuyo corazón<br>hervía de ambiciones secretas y que resurgió<br>como resucitado. Rebosa una voluntad<br>inexorable de destruir a todo el mundo con<br>un poder sobrenatural y de darse a conocer<br>en Vein, Prisión de las Neblinas. Alberga<br>dones exclusivos que solo pueden<br>usarse con una gran determinación.",
        owner : "Desconocido"
      },
      
      A33 : {
        name : "Astrea",
        desc : "Un código de sangre que apareció como<br>manifestación de la búsqueda de felicidad<br>de Mia. Alberga sus plegarias por el retorno<br>a casa de los aliados y su deseo de<br>proporcionarles comodidad y descanso a su<br>regreso. Ofrece equilibrio y estabilidad en<br>combate y posee dones útiles para la<br>exploración.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclepio",
        desc : "Un código de sangre centrado en la energía<br>y los PS, heredado del núcleo de Vestigio<br>reparado de Valerio, el antiguo compañero<br>de Jack.<br><br>Contiene la voluntad resuelta de ayudar y proteger.<br><br>Aunque este código no tiene muchas opciones<br>de combate directo, es una gran ayuda para la<br>supervivencia gracias a sus PS y energía.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Aquiles",
        desc : "Un código de sangre con gran destreza y energía,<br>heredado de un núcleo de Vestigio reparado.<br><br>Posee una voluntad inquebrantable para atravesar<br>numerosos campos de batalla.<br><br>La riqueza en energía de este código, sus armas<br>ligeras y sus ataques rápidos son ideales para<br>presionar en el combate directo.",
        owner : "Desconocido"
      },
      
      A36 : {
        name : "Surt",
        desc : "Un código de sangre recuperado de un horror<br>sellado en las profundidades.<br><br>El fulgor del infierno desatado en su interior<br>sigue quemando tras su letargo, y llena al<br>portador con una fuerza temible que pulveriza<br>a quien se le interponga.<br><br>Tiene una gran fuerza, fortaleza y mucha energía<br>y es ideal para las batallas dinámicas.",
        owner : "Caballero infernal"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pólux",
        desc : "Un código de sangre centrado en la fuerza y<br>los PS, heredado de un núcleo de Vestigio<br>reparado.<br><br>Contiene la voluntad de un amable guerrero<br>que luchó codo con codo junto a sus amigos.<br><br>Este código es excelente para afrontar ataques<br>enemigos con una defensa fuerte y duradera,<br>y luego contraatacar con golpes poderosos.",
        owner : "Desconocido"
      },
      
      A38 : {
        name : "Ymir",
        desc : "Un código de sangre recuperado de un horror<br>sellado en las profundidades.<br><br>El refulgir de su hielo interior brilla como antes<br>de su letargo, mejorando la vista para darle al<br>portador la oportunidad ideal de aniquilar a<br>todos de un solo golpe.<br>Este código tiene una gran voluntad y vitalidad,<br>y mejora tanto los PS como los dones oscuros.",
        owner : "Emperatriz de hielo"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseo",
        desc : "Un código de sangre con una gran fuerza de<br>voluntad y mente, heredado de un núcleo de<br>Vestigio reparado.<br><br>Contiene la voluntad de un astuto guerrero<br>que obtuvo numerosas victorias.<br><br>Con poderosos dones y mucho icor, este<br>código está construido para aniquilar a los<br>enemigos, uno tras otro.",
        owner : "Desconocido"
      },
      
      A40 : {
        name : "Váli",
        desc : "Un código de sangre recuperado de un horror<br>sellado en las profundidades.<br><br>La luz de los relámpagos que chocan en su<br>interior no ha disminuido en su letargo, lo<br>que le da al portador el poder de reforzarse<br>a voluntad y arrasar con todo a su paso.<br>Este código tiene una gran mente y destreza,<br>y ofrece una gran selección de dones de luz<br>para la batalla.",
        owner : "Señor del trueno"
      },
      
      A41 : {
        name : "Orión",
        desc : "Un código de sangre con una gran voluntad y destreza,<br>heredado de un núcleo de Vestigio reparado.<br><br>Contiene la voluntad de un tirador experimentado<br>que cruzaba la batalla con elegancia.<br><br>Este código está optimizado para atacar a distancia,<br>y su gran fuerza de voluntad concede un enorme poder<br>de ataque a las armas de fuego.",
        owner : "Desconocido"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Potenciador de salud",
        desc : "Aumenta el número máximo de PS."
      },
      
      A1 : {
        name : "Estimulante de salud",
        desc : "Aumenta el número máximo de PS."
      },
      
      A2 : {
        name : "Aumento de energía",
        desc : "Aumenta el nivel máximo de energía."
      },
      
      A3 : {
        name : "Estimulante de energía",
        desc : "Aumenta el nivel máximo de energía."
      },
      
      A4 : {
        name : "Corredor",
        desc : "Reduce la energía drenada al correr."
      },
      
      A5 : {
        name : "Colmillos afilados",
        desc : "Aumenta el daño infligido con un drenaje<br>especial tras una parada o ataque trasero.<br>"
      },
      
      A6 : {
        name : "Colmillo tenaz",
        desc : "Aumenta el daño infligido por ataques de drenaje<br>realizados tras un ataque de lanzamiento."
      },
      
      A7 : {
        name : "Colmillo heroico",
        desc : "Aumenta el daño infligido con habilidades<br>de carga de drenaje."
      },
      
      A8 : {
        name : "Destrucción veloz",
        desc : "Aumenta el daño infligido en proporción<br>a tu movilidad."
      },
      
      A9 : {
        name : "Instinto supervivencia",
        desc : "Potencia habilidades de don y poder de ataque con<br>armas y drenaje cuando los PS bajan de un punto."
      },
      
      A10 : {
        name : "Destreza en evasión",
        desc : "Aumenta la cantidad de concentración<br>obtenida al esquivar ataques."
      },
      
      A11 : {
        name : "Concentración resistente",
        desc : "Aumenta la cantidad de concentración<br>obtenida al recibir daños."
      },
      
      A12 : {
        name : "Mejora niv. drenaje de armas",
        desc : "Aumenta el nivel de drenaje de los ataques<br>con armas."
      },
      
      A13 : {
        name : "Avaricia",
        desc : "Aumenta la cantidad de icor ganada<br>en los ataques de drenaje."
      },
      
      A14 : {
        name : "Promesa de icor",
        desc : "Reduce los PS máximos para aumentar<br>la cantidad de icor que puedes tener."
      },
      
      A15 : {
        name : "Potenciador máx. icor",
        desc : "Aumenta la cantidad máxima de icor<br>que puedes tener."
      },
      
      A16 : {
        name : "Velocidad de don aument.",
        desc : "Aumenta la velocidad de tus dones."
      },
      
      A17 : {
        name : "Acelerador de carga",
        desc : "Aumenta la velocidad de las acciones con carga."
      },
      
      A18 : {
        name : "Acumulación efecto perj.",
        desc : "Aumenta la acumulación de efecto perjudicial<br>contra enemigos."
      },
      
      A19 : {
        name : "Ambición de resucitado",
        desc : "Te permite equipar armas más pesadas<br>y velos de sangre."
      },
      
      A20 : {
        name : "Oportunismo",
        desc : "Aumenta el daño de arma infligido a enemigos<br>con afecciones de estado."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Ráfaga de sangre",
        desc : "Aumenta el límite de icor máximo, pero reduce el<br>poder de los dones y la recuperación de energía."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Equilibrio +",
        desc : "Aumenta el equilibrio."
      },
      
      B1 : {
        name : "Parada diestra",
        desc : "Restaura toda la energía al parar<br>un ataque."
      },
      
      B2 : {
        name : "Niv. drenaje defensivo +",
        desc : "Aumenta tu capacidad de drenaje<br>al defenderte de un ataque enemigo."
      },
      
      B3 : {
        name : "Firmeza",
        desc : "Recibir daño mortal cuando tus PS están por encima<br>de una cierta cantidad te dejará con 1 PS.",
        usage_req : "Atlas Códigos de sangre"
      },
      
      B4 : {
        name : "Agarre de sangre",
        desc : "Esquivar ataques enemigos drena su icor<br>según el nivel de drenaje de tu arma.",
        usage_req : "Artemisa Códigos de sangre"
      },
      
      B5 : {
        name : "Trampa evasiva",
        desc : "Por un coste de icor, esquivar ataques enemigos<br>genera proyectiles que atacan al enemigo.",
        usage_req : "Hefesto Códigos de sangre"
      },
      
      B6 : {
        name : "Resistencia al veneno",
        desc : "Aumenta la resistencia al veneno."
      },
      
      B7 : {
        name : "Resistencia al aturdimiento",
        desc : "Aumenta la resistencia al aturdimiento."
      },
      
      B8 : {
        name : "Resistencia a la inhibición",
        desc : "Aumenta la resistencia a inhibición."
      },
      
      B9 : {
        name : "Resistencia a la lentitud",
        desc : "Aumenta la resistencia a la lentitud."
      },
      
      B10 : {
        name : "Resistencia a las pérdidas",
        desc : "Aumenta la resistencia a las pérdidas"
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Fuerza +",
        desc : "Aumenta la fuerza."
      },
      
      C1 : {
        name : "Destreza +",
        desc : "Aumenta la destreza."
      },
      
      C2 : {
        name : "Mente +",
        desc : "Aumenta la mente."
      },
      
      C3 : {
        name : "Voluntad +",
        desc : "Aumenta la voluntad."
      },
      
      C4 : {
        name : "Vitalidad +",
        desc : "Aumenta la vitalidad."
      },
      
      C5 : {
        name : "Fortaleza +",
        desc : "Aumenta la fortaleza."
      },
      
      C6 : {
        name : "Fuerza/Destreza +",
        desc : "Aumenta la fuerza y la destreza."
      },
      
      C7 : {
        name : "Fuerza/Voluntad +",
        desc : "Aumenta la fuerza y la voluntad."
      },
      
      C8 : {
        name : "Fuerza/Vitalidad +",
        desc : "Aumenta la fuerza y la vitalidad."
      },
      
      C9 : {
        name : "Destreza/Voluntad +",
        desc : "Aumenta la destreza y la voluntad."
      },
      
      C10 : {
        name : "Destreza/Fortaleza +",
        desc : "Aumenta la destreza y la fortaleza."
      },
      
      C11 : {
        name : "Mente/Voluntad +",
        desc : "Aumenta la mente y la voluntad."
      },
      
      C12 : {
        name : "Mente/Vitalidad +",
        desc : "Aumenta la mente y la vitalidad."
      },
      
      C13 : {
        name : "Mente/Fortaleza +",
        desc : "Aumenta la mente y la fortaleza."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Fuerza/Fortaleza +",
        desc : "Aumenta la fuerza y la fortaleza."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Voluntad/Vitalidad +",
        desc : "Aumenta la voluntad y la vitalidad."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Destreza/Mente +",
        desc : "Aumenta la destreza y la mente."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : " Impulso oscuro",
        desc : "Aumenta el efecto de los dones oscuros<br>cuando te concentras."
      },
      
      D1 : {
        name : " Impulso claro",
        desc : "Aumenta el efecto de los dones de luz<br>cuando te concentras."
      },
      
      D2 : {
        name : " Estabilidad defensiva",
        desc : "Reduce el consumo de energía al defenderte<br>cuando te concentras."
      },
      
      D3 : {
        name : " Defensa concentrada",
        desc : "Aumenta la defensa con armas contra<br>ataques físicos mientras te concentras."
      },
      
      D4 : {
        name : " Uso de energía concentr.",
        desc : "Reduce la energía gastada<br>cuando te concentras."
      },
      
      D5 : {
        name : " Concentración incesante",
        desc : "Reduce el paso al que el medidor de concentración<br>se consume con el tiempo cuando te concentras.<br>"
      },
      
      D6 : {
        name : " Matanza concentrada",
        desc : "Reduce el ritmo al que el medidor de concentración<br>se consume por ataques cuando te concentras.<br>"
      },
      
      D7 : {
        name : " Ataques de icor",
        desc : "Reduce el coste de icor de los ataques<br>con armas cuando te concentras."
      },
      
      D8 : {
        name : " Reducción icor",
        desc : "Reduce el consumo de icor cuando te concentras.",
        usage_req : "Garganta de la Reina Códigos de sangre"
      },
      
      D9 : {
        name : " Potencia drenaje",
        desc : "Aumenta los niveles de drenaje<br>cuando te concentras."
      },
      
      D10 : {
        name : " Velocidad don concentr.",
        desc : "Aumenta la velocidad de tus dones<br>cuando te concentras."
      },
      
      D11 : {
        name : " Efecto sangre",
        desc : "Añade daños por sangre a tu arma actual<br>mientras te concentras."
      },
      
      D12 : {
        name : " Efecto fuego",
        desc : "Añade daños por fuego a tu arma actual<br>mientras te concentras."
      },
      
      D13 : {
        name : " Efecto hielo",
        desc : "Añade daños por hielo a tu arma actual<br>mientras te concentras."
      },
      
      D14 : {
        name : " Efecto rayo",
        desc : "Añade daños por rayo a tu arma actual<br>mientras te concentras."
      },
      
      D15 : {
        name : " Efecto veneno",
        desc : "Aplica el efecto veneno temporalmente<br>a tu arma actual cuando te concentras."
      },
      
      D16 : {
        name : " Efecto aturdimiento",
        desc : "Aplica el efecto aturdimiento <br>a tu arma actual cuando te concentras."
      },
      
      D17 : {
        name : " Sonrisa de Diosa",
        desc : "Restaura tus PS cuando te concentras."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : " Concentración de icor",
        desc : "Restaura el icor cuando te concentras."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : " Estadísticas +",
        desc : "Aumenta todas las estadísticas cuando te concentras."
      },
      
      D20 : {
        name : " Detener poder",
        desc : "Los enemigos perderán más equilibrio con los<br>disparos de tu bayoneta cuando te concentras."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "Maestría con espada a una mano",
        desc : "Aumenta el poder de ataque al equipar<br>una espada a una mano."
      },
      
      E1 : {
        name : "Maestría con espada a dos manos",
        desc : "Aumenta el poder de ataque al equipar<br>una espada a dos manos."
      },
      
      E2 : {
        name : "Maestría en alabardas",
        desc : "Aumenta el poder de ataque al equipar<br>una alabarda."
      },
      
      E3 : {
        name : "Maestría en martillos",
        desc : "Aumenta el poder de ataque al equipar<br>un martillo."
      },
      
      E4 : {
        name : "Maestría en bayonetas",
        desc : "Aumenta el poder de ataque al equipar<br>una bayoneta."
      },


      // # MISC #
      F0 : {
        name : "Cambio de regeneración",
        desc : "Reduce las veces que se puede usar<br>regeneración, pero aumenta su potencia<br>de curación."
      },
      
      F1 : {
        name : "Regeneración mejorada",
        desc : "Aumenta la cantidad de PS restaurados<br>por la habilidad de regeneración."
      },
      
      F2 : {
        name : "Regeneración aumentada",
        desc : "Aumenta el número de veces que se puede usar<br>regeneración."
      },
      
      F3 : {
        name : "Faro",
        desc : "Restaura tu poder de regeneración al llegar<br>los PS de tu acompañante a 0 y se dispersa.",
        usage_req : "Astrea Códigos de sangre"
      },
      
      F4 : {
        name : "Robavida",
        desc : "Restaura tus PS cuando derrotas enemigos."
      },
      
      F5 : {
        name : "Drenaje regenerador",
        desc : "Hace que los ataques de drenaje<br>restauren PS."
      },
      
      F6 : {
        name : "Baile de cuchilla eterno",
        desc : "Versión mejorada de Baile de cuchilla.<br>Aumenta el poder de tus ataques<br>al esquivar ataques enemigos.",
        usage_req : "Prometeo Códigos de sangre"
      },
      
      F7 : {
        name : "Veneno chupasangre",
        desc : "Obtén icor cuando los enemigos en un<br>determinado radio reciben daño por veneno.",
        usage_req : "Buscatinieblas Códigos de sangre"
      },
      
      F8 : {
        name : "Hambre de resucitado",
        desc : "Aumenta la cantidad de neblina obtenida<br>al derrotar enemigos."
      },
      
      F9 : {
        name : "Codicia de resucitado",
        desc : "Aumenta las probabilidades de que los<br>enemigos suelten objetos."
      },
      
      F10 : {
        name : "Guía de pionero",
        desc : "Hace que los dones sean más fáciles<br>de dominar."
      },
      
      F11 : {
        name : "Reduc. daño por caídas",
        desc : "Reduce el daño producido por caídas."
      },
      
      F12 : {
        name : "Salvación",
        desc : "Cuando un aliado recibe daño mortal, sus PS<br>se reducen a 1 y tú recibes el resto<br>del daño. Este efecto solo se activa<br>si tienes 2 o más PS. El daño que recibes<br>no puede reducir tus PS a 0.",
        usage_req : "Ishtar Códigos de sangre"
      },
      
      F13 : {
        name : "Infatigable",
        desc : "Incrementa el índice de regeneración<br>de resistencia."
      },
      
      F14 : {
        name : "Apoyo",
        desc : "Incrementa la regeneración al recoger<br>neblina perdida tras dispersarte."
      },
      
      F15 : {
        name : "Daga de resucitado",
        desc : "Lanzas un cuchillo que produce icor al<br>golpear a un enemigo."
      },
      
      F16 : {
        name : "Atención completa",
        desc : "Golpear con el drenaje cargado otorga<br>concentración."
      },
      
      F17 : {
        name : "Carisma",
        desc : "Aumenta las estadísticas de tus compañeros (no las del jugador)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Flecha sónica",
        desc : "Dispara un proyectil creado a partir<br>de icor. Una sola descarga no es<br>muy impresionante, pero muestra<br>su valor contra grupos de enemigos."
      },
      
      A1 : {
        name : "Disparo de sangre",
        desc : "Dispara un gran proyectil creado a partir<br>del poder de la sangre. El impacto de esta<br>versión mejorada de la Flecha sónica<br>es mucho mayor."
      },
      
      A2 : {
        name : "Rugido sangriento",
        desc : "Genera un proyectil de sangre inmunda que<br>ataca al enemigo. Un golpe directo atraviesa<br>la piel y crea una herida que deja<br>a la víctima agonizando."
      },
      
      A3 : {
        name : "Rugido abrasador",
        desc : "Envía una potente llama al objetivo. Se dice<br>que quienes sufren este ataque<br>son calcinados hasta dejar solo una sombra."
      },
      
      A4 : {
        name : "Rugido gélido",
        desc : "Lanza un proyectil de hielo gélido al<br>objetivo. Un golpe directo elimina el calor<br>de las víctimas, detiene sus pensamientos<br>y nubla su juicio."
      },
      
      A5 : {
        name : "Rugido de plasma",
        desc : "Genera una recarga eléctrica que ataca al<br>enemigo. Un golpe directo hierve la sangre<br>de las víctimas y crea un dolor agonizante."
      },
      
      A6 : {
        name : "Estaca de sangre",
        desc : "Lanza un proyectil de icor lacerante<br>al objetivo. La fuerza creada está muy<br>concentrada y atraviesa a los enemigos<br>como una bala de cañón."
      },
      
      A7 : {
        name : "Estaca de fuego",
        desc : "Lanza un proyectil de llamas abrasadoras<br>al objetivo. La fuerza creada está muy<br>concentrada y atraviesa a los enemigos<br>como una bala de cañón."
      },
      
      A8 : {
        name : "Estaca de hielo",
        desc : "Lanza proyectiles de hielo gélido<br>al objetivo. La fuerza creada está muy<br>concentrada y atraviesa a los enemigos<br>como una bala de cañón."
      },
      
      A9 : {
        name : "Estaca de rayo",
        desc : "Lanza un proyectil de electricidad chispeante<br>al objetivo. La fuerza creada está muy<br>concentrada y atraviesa a los enemigos<br>como una bala de cañón."
      },
      
      A10 : {
        name : "Cortina de sangre",
        desc : "Dispara una serie de proyectiles de sangre<br>que bombardean a tus enemigos en un<br>gran radio. Aunque no son muy potentes,<br>los disparos continuos hacen que sea<br>ideal para eliminar al enemigo."
      },
      
      A11 : {
        name : "Cortina de fuego",
        desc : "Dispara una serie de proyectiles de fuego<br>que bombardean a tus enemigos en un<br>gran radio. Aunque no son muy potentes,<br>los disparos continuos hacen que sea<br>ideal para eliminar al enemigo."
      },
      
      A12 : {
        name : "Cortina de hielo",
        desc : "Dispara una serie de proyectiles gélidos<br>que bombardean a tus enemigos en un<br>gran radio. Aunque no son muy potentes,<br>los disparos continuos hacen que sea<br>ideal para eliminar al enemigo."
      },
      
      A13 : {
        name : "Cortina eléctrica",
        desc : "Dispara una serie de proyectiles eléctricos<br>que bombardean a tus enemigos en un<br>gran radio. Aunque no son muy potentes,<br>los disparos continuos hacen que sea<br>ideal para eliminar al enemigo."
      },
      
      A14 : {
        name : "Masa de Vodník",
        desc : "Libera sangre concentrada para destruir a<br>los enemigos. La sangre maldita de los<br>muertos condena a las víctimas al infierno."
      },
      
      A15 : {
        name : "Fuego de Walpurgis",
        desc : "Controla finamente el flujo sanguíneo para<br>crear una potente llamarada. Los resucitados<br>que no confíen en su fuerza no deberían<br>usar técnicas avanzadas. El poder hará<br>colapsar a los usuarios inconscientes<br>y los destruirá."
      },
      
      A16 : {
        name : "Mirada de Baba Yaga",
        desc : "Controla finamente el flujo sanguíneo para<br>crear una potente ola gélida. Quien se<br>disperse con parte del cuerpo congelado<br>no puede regenerar esa parte<br>hasta que se descongele. Esto se suele<br>aprovechar para interrogar."
      },
      
      A17 : {
        name : "Ira de Perkunas",
        desc : "Controla finamente el flujo sanguíneo para <br>crear una potente descarga. La muerte <br>es la única salida para escapar de la ira <br>de un dios enfadado."
      },
      
      A18 : {
        name : "Espada del crepúsculo",
        desc : "Utiliza el icor para crear una espada de<br>sangre y blandirla en arco para alcanzar<br>a todos los enemigos delante de ti.<br>Se traza una línea de sangre que atraviesa<br>el crepuscular cielo y se transforma<br>en una espada mortal que destruye<br>a los enemigos."
      },
      
      A19 : {
        name : "Luna carmesí",
        desc : "Utiliza el icor para crear una espada<br>llameante y blandirla en arco para alcanzar<br>a los enemigos frente a ti. Una luna<br>carmesí brilla de forma aciaga en el cielo<br>nocturno. Se dice que quien la vea<br>sufrirá grandes desdichas."
      },
      
      A20 : {
        name : "Destello de Aurora",
        desc : "Utiliza el icor para crear una espada helada<br>y blandirla en arco para alcanzar a los<br>enemigos frente a ti. Una línea de sangre<br>en el aire se transforma en una espada<br>de hielo. La luz danza por ella como<br>si fuese un prisma, mientras distrae<br>a los enemigos, cuya sangre después bañará<br>la hoja."
      },
      
      A21 : {
        name : "Espada de Júpiter",
        desc : "Utiliza el icor para crear una espada<br>de rayo y blandirla en arco para alcanzar<br>a todos frente a ti. Cuando su víctima<br>abre los ojos tras haber sido cegada por<br>el rayo, se da cuenta de que ya ha muerto."
      },
      
      A22 : {
        name : "Ejecución",
        desc : "Crea una espada gigante a partir de tu<br>indomable voluntad que degüella al enemigo.<br>Una verdad innegable cae sobre aquellos<br>que se enfrentan a ella. Sería más simple<br>aceptarlo que seguir luchando."
      },
      
      A23 : {
        name : "Tormenta de fuego",
        desc : "Dispara una serie de proyectiles llameantes<br>que hacen tambalearse al enemigo. Aunque una<br>sola bala no es muy potente, el elevado número<br>de estas basta para superar hasta al más<br>resistente de los enemigos."
      },
      
      A24 : {
        name : "Rayo explosivo",
        desc : "Genera y dispara una oleada de proyectiles<br>eléctricos al objetivo. El fogonazo se hunde<br>en el suelo y no hay armadura que pueda<br>evitar que llegue hasta el hueso."
      },
      
      A25 : {
        name : "Defensa de honor",
        desc : "Genera varios pilares de hielo que<br>bombardean al objetivo sin parar. Cuando<br>una de las partes puede atacar una<br>y otra vez con una sola acción y la otra<br>tiene que esquivar dichos ataques<br>sin fallar, el ganador está claro."
      },
      
      A26 : {
        name : "Fuego danzante",
        desc : "Dispara una bala que rebota. Nadie sabe en<br>qué dirección rebotará la bala, pero puede<br>ser útil para alcanzar a enemigos<br>impredecibles."
      },
      
      A27 : {
        name : "Estaca dracónica",
        desc : "Transforma tu sangre en una enorme estaca<br>que perfora al objetivo. Esta técnica<br>es rápida y poderosa. Dicen que aquellos<br>que perecen por ella son enviados<br>directamente a las llamas del inframundo."
      },
      
      A28 : {
        name : "Bucle de Indra",
        desc : "Dispara tres potentes rayos de electricidad<br>a los pies del objetivo. Esta técnica<br>vaporiza al instante la sangre de los<br>desafortunados que se cruzan en su camino<br>y los revienta desde el interior."
      },
      
      A29 : {
        name : "Veredicto cuádruple",
        desc : "Dispara una cortina continua de balas<br>eléctricas al objetivo. Aquellos que <br>son culpables ante los dioses no<br>escapan a su castigo. Este don no se<br>puede usar otra vez hasta que esa<br>ira divina se haya calmado."
      },
      
      A30 : {
        name : "Contrato ancestral",
        desc : "Dispara sangre concentrada contra el suelo<br>para elevar una columna de sangre bajo tu<br>objetivo. Aunque este potente don es<br>difícil de aprender, resulta muy valioso<br>si se usa correctamente."
      },
      
      A31 : {
        name : "Hielo de icor",
        desc : "Condensa el icor y lo convierte en potentes<br>fragmentos de hielo que lanza al enemigo.<br>La cantidad de energía que este don necesita<br>es una carga para el resucitado que lo usa,<br>por lo que es imposible usarlo sin una<br>reliquia como catalizador."
      },
      
      A32 : {
        name : "Crepúsculo",
        desc : "Dispara un ancho láser que atraviesa todo<br>lo que haya delante de ti. Cuando la luz<br>desaparece, no queda ningún rastro.<br>Todo se ha desintegrado.",
        usage_req : "Tórax de la Reina Códigos de sangre"
      },
      
      A33 : {
        name : "Lirio de fuego",
        desc : "Lanza una veloz espada que tras un tiempo<br>clavada en algo explota. Los enemigos<br>no son los únicos objetivos de esta técnica.<br>Los usuarios más experimentados lanzarán<br>espadas a los muros o al suelo<br>para que actúen como trampas."
      },
      
      A34 : {
        name : "Filo de arena",
        desc : "Genera una espada de arena a alta presión<br>desde el suelo que golpea a los enemigos.<br>Esta peculiar técnica erosiona el suelo con<br>icor y crea una espada a partir de<br>partículas arenosas. Debido a la dificultad<br>de alterar rápidamente una sustancia, se<br>requiere un elevado grado de habilidad<br>para utilizar este don."
      },
      
      A35 : {
        name : "Tormenta volátil",
        desc : "Genera espadas de arena que convergen<br>en el objetivo y explotan. Esta gigantesca<br>explosión se induce al concentrar varias<br>fuerzas de presión sobre un mismo punto.<br>Intentar huir de una tormenta de arena de<br>tales características resulta, como mínimo,<br>extremadamente difícil."
      },
      
      A36 : {
        name : "Arma determinante",
        desc : "Crea un brazo de arena a los pies del<br>objetivo y aplasta sin piedad al enemigo.<br>No hay escapatoria de esta trampa de arena;<br>sus múltiples capas de arena comprimida<br>la hacen más dura que el acero<br>y físicamente imposible de destruir."
      },
      
      A37 : {
        name : "Arenas de la depravación",
        desc : "Desata una gigantesca tormenta de arena<br>alrededor de tu objetivo. Los veteranos<br>del campo de batalla saben que no hay<br>que bajar la guardia, puesto que no se sabe<br>qué sediento engendro podría tenerte<br>en el punto de mira."
      },
      
      A38 : {
        name : "Ceniza caótica",
        desc : "Lanza un proyectil drenante que priva de<br>icor al objetivo. Los débiles son la sangre<br>que corre por las venas de los poderosos.<br>No es robo, simplemente es usar un recurso<br>para el futuro de los resucitados."
      },
      
      A39 : {
        name : "Espina purgadora",
        desc : "Crea una espina gigante en el aire que<br>perfora al objetivo. Numerosos resucitados<br>fallecieron en batalla por estas espinas,<br>y el terror que inspiran no ha cambiado<br>en absoluto."
      },
      
      A40 : {
        name : "Cruz de lobo argenta",
        desc : "Dispara una espada de sangre con forma<br>de cruz al objetivo. Dicen que esta técnica<br>de ataque de la cruz sangrienta, antaño<br>usada por el líder de los lobos argenta,<br>representa una oración por los caídos.<br>Resulta pues irónico que un don así sea<br>tan eficaz a la hora de eliminar a sus<br>objetivos despedazándolos en cuatro trozos."
      },
      
      A41 : {
        name : "Salto de sombra",
        desc : "Emite un temblor a tu alrededor<br>y te transporta al instante hacia atrás.<br>El don funciona al dispersar el cuerpo<br>y agruparlo inmediatamente.",
        usage_req : "Isis Códigos de sangre"
      },
      
      A42 : {
        name : "Impacto sangriento",
        desc : "Destruye a los enemigos de una zona con un<br>temblor causado por la repentina liberación<br>de icor condensado. El daño no es el fuerte<br>de este don pero se puede usar tanto cuerpo<br>a cuerpo como a distancia y, al combinarlo<br>con el uso del entorno, puede cambiar<br>el curso de la batalla."
      },
      
      A43 : {
        name : "Capa de invierno",
        desc : "Congela todo a tu alrededor con una ventisca<br>ártica. No hay enemigo que pueda resistir<br>el frío y el viento que causa. Derriba<br>a todos y los deja indefensos."
      },
      
      A44 : {
        name : "Destello de peonía",
        desc : "Genera una explosión gigantesca que engulle<br>a todos los enemigos de la zona.<br>Pocos pueden salir ilesos de una explosión<br>repentina, especialmente los que se han<br>visto atraídos al punto de origen.",
        usage_req : "Scathach Códigos de sangre"
      },
      
      A45 : {
        name : "Fuego fatuo",
        desc : "Lanza un proyectil de icor que se arquea<br>para proteger las espaldas del usuario.<br>Este don apenas causa daños, pero<br>la confusión que crea lo hace muy valioso."
      },
      
      A46 : {
        name : "Giro de ascuas",
        desc  : "Lanza un proyectil en llamas que se arquea<br>para proteger las espaldas del usuario.<br>La preparación de este don apenas lleva<br>tiempo, por lo que para cuando los enemigos<br>ven la llama, ya están ardiendo."
      },
      
      A47 : {
        name : "Ira desesperada",
        desc : "Un peligroso don que libera una increíble<br>cantidad de energía guardada en tu interior,<br>que inflige daño masivo a tu alrededor, pero<br>te deja al borde de la muerte. Solo los<br>resucitados que han conquistado el miedo a<br>la muerte son capaces de usar una técnica de<br>este calibre. Tal espectáculo perseguirá a<br>todos aquellos que lo presencien."
      },
      
      A48 : {
        name : "Rosa flamígera",
        desc : "Dispersa bombas de fuego que explotan tras<br>un tiempo y dañan todo a su alcance.<br>Cuando te rodean y no hay escapatoria,<br>lo único que puedes hacer es esperar<br>a que se te ocurra algo. Es una<br>situación que debes evitar."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Hogar infernal",
        desc : "Lanza un vórtice de llamas amenazante que<br>persigue al objetivo.<br><br>Este huracán de fuego persigue a su objetivo como<br>si tuviera voluntad propia: los Perdidos perseguidos<br>no podrán escapar y acabarán engullidos por las llamas."
      },
      
      A50 : {
        name : "Hoja flamígera danzante",
        desc : "Convoca una espada que gira alrededor de tu cuerpo.<br><br>Una afilada hoja gira alrededor de su usuario a gran<br>velocidad, rebanando sin piedad a quien ose acercarse."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Corriente escarchada",
        desc : "Dispara rayos helados de luz en todas direcciones<br>y barre a los enemigos.<br><br>La corriente congela todo lo que toca y se expande<br>en todas las direcciones desde el usuario y cerca a<br>los enemigos que se aproximen en su abrazo mortal.<br>Es una técnica sacada del código de sangre de la <br>Emperatriz y desarrollada con su poder, por lo que <br>este don pasa factura a su usuario."
      },
      
      A52 : {
        name : "Torreta gélida",
        desc : "Crea una masa helada que dispara<br>periódicamente esquirlas de hielo.<br><br>Aunque las esquirlas disparadas no<br>son mortales, el daño que acumulan<br>facilita la victoria."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Lluvia de meteoros",
        desc : "Crea rocas ardientes sobre tu cabeza, que<br>se precipitan hacia tus enemigos como una<br>lluvia de meteoritos.<br><br>Puede que solo sea una lluvia de piedras y no<br>de meteoritos, pero pocos Perdidos pueden<br>sobrevivir a una roca ardiente que les cae encima."
      },
      
      A54 : {
        name : "Ola helada",
        desc : "Invoca un frío gélido que se extiende por el suelo.<br><br>Quienes se acerquen con intenciones hostiles se<br>verán detenidos por una ola helada."
      },
      
      A55 : {
        name : "Campo sediento",
        desc : "Crea un campo que drena periódicamente<br>el icor de los enemigos que estén dentro.<br><br>El campo te permite drenar icor de los<br>Perdidos sin tener que acercarte a ellos.<br><br>Hasta la más pequeña gota de icor puede ser la<br>diferencia entre la vida y la muerte. Esta trampa<br>es ideal para cambiar las tornas en combates con dones."
      },
      
      A56 : {
        name : "Impacto de relámpago",
        desc : "Aparece desde el suelo antes de aterrizar<br>en una explosión de relámpagos.<br><br>Aunque el ataque necesita tiempo para concentrar<br>los rayos en el puño del usuario, el poder resultante<br>es imparable.<br><br>Este don utiliza relámpagos del Señor del trueno,<br>que atraviesan el cuerpo del usuario y reducen a cenizas<br>al instante a los resucitados menores."
      },


      // # DEBUFFS #
      B0 : {
        name : "Disparo venenoso",
        desc : "Lanza un proyectil venenoso a tu objetivo.<br>La bala impacta desde las sombras, lo que<br>genera el pánico entre sus víctimas y les<br>absorbe la salud al alcanzarlas."
      },
      
      B1 : {
        name : "Disparo aturdidor",
        desc : "Lanza un proyectil a tu objetivo que le<br>inflige aturdimiento. La bala impacta desde<br>las sombras, lo que genera el pánico<br>entre sus víctimas y les absorbe<br>la libertad al alcanzarlas."
      },
      
      B2 : {
        name : "Disparo ralentizador",
        desc : "Lanza un proyectil a tu objetivo que le<br>inflige lentitud. La bala impacta desde las<br>sombras, lo que genera el pánico entre<br>sus víctimas y les absorbe movilidad<br>al alcanzarlas."
      },
      
      B3 : {
        name : "Tela venenosa",
        desc : "Arroja icor tratado para crear un cepo<br>que envenena a los enemigos que lo pisan.<br>Esta técnica detecta la sangre de los<br>asaltantes y afecta solo a los oponentes<br>del usuario."
      },
      
      B4 : {
        name : "Tela aturdidora",
        desc : "Arroja icor tratado para crear un cepo<br>que aturde a los enemigos que lo pisan.<br>Todos los dones se crean pensando en<br>la supervivencia. Cuando aparezca<br>una gran amenaza, utiliza este poder<br>para correr sin mirar atrás."
      },
      
      B5 : {
        name : "Tela ralentizadora",
        desc : "Arroja icor tratado para crear un cepo<br>que ralentiza a los enemigos que lo<br>pisan. Los resucitados más duchos<br>pueden transformar su voluntad en icor<br>y tener la mente fría para guiarlo.<br>El primer paso hacia el poder es conocerse<br>a uno mismo."
      },
      
      B6 : {
        name : "Red de choque",
        desc : "Manipula el icor para crear una trampa<br>de baja potencia a tus pies que aturde<br>a cualquier asaltante.<br>El engaño es más efectivo si se ejecuta<br>con rapidez y por completo. Hasta el<br>más diminuto fragmento de duda<br>alojado en el corazón puede generar<br>un temor y una inquietud incalculables."
      },
      
      B7 : {
        name : "Llamas de ira",
        desc : "Manipula el icor para crear una trampa a tus<br>pies que inmola a tus enemigos con una<br>ráfaga de fuego. La necesidad de convertir a<br>los Perdidos en cenizas ha originado muchos<br>experimentos. Ni quemar a las criaturas<br>repetidamente mientras revivían funcionó."
      },
      
      B8 : {
        name : "Trampa venenosa",
        desc : "Dispersa icor en la zona y crea una trampa<br>venenosa que devora a los asaltantes.<br>La Unidad de Seguridad Cerbero ha inventado<br>una gama de dones que suelen tener<br>efectos indirectos."
      },
      
      B9 : {
        name : "Trampa aturdidora",
        desc : "Dispersa icor en la zona y crea una trampa<br>que aturde a los asaltantes.<br>La Unidad de Seguridad Cerbero ha inventado<br>una gama de dones que suelen tener<br>efectos indirectos."
      },
      
      B10 : {
        name : "Trampa ralentizadora",
        desc : "Dispersa icor en la zona y crea una trampa<br>que ralentiza a los asaltantes.<br>La Unidad de Seguridad Cerbero ha inventado<br>una gama de dones que suelen tener<br>efectos indirectos."
      },
      
      B11 : {
        name : "Fuego en frenesí",
        desc : "Dispara un proyectil que reduce el medidor<br>de concentración del enemigo. No hay<br>oportunidades para los que se sientan<br>a esperar. Levántate y búscalas tú."
      },


      // # BUFFS #
      C0 : {
        name : "Arma de sangre",
        desc : "Añade temporalmente daño de sangre a tu arma y<br>la de tu compañero.<br>Para los resucitados, la sangre es una<br>fuente de alimentación, la armadura que los<br>protege de las amenazas y la robusta espada<br>que se abre paso entre los obstáculos.<br>Todos los resucitados quieren dominarla."
      },
      
      C1 : {
        name : "Arma llameante",
        desc : "Añade daño de fuego temporal a tu arma y<br>la de tu compañero. Las heridas causadas por <br>las hojas ardientes tardan más en curarse, <br>incluso en resucitados."
      },
      
      C2 : {
        name : "Arma gélida",
        desc : "Añade daño de hielo temporal a tu arma y la<br>de tu compañero.<br>Al congelar instantáneamente una herida, la<br>dispersión se ralentiza y deja al enemigo <br>retorciéndose de dolor."
      },
      
      C3 : {
        name : "Arma relampagueante",
        desc : "Añade daño eléctrico temporal a tu arma y<br>la de tu compañero.<br><br>Este don es un gran aliado y<br>un temible enemigo. Nunca olvides<br>que lo que usas contra otros puede ser<br>utilizado en tu contra."
      },
      
      C4 : {
        name : "Marca de veneno",
        desc : "Aplica temporalmente el efecto veneno a tu<br>arma actual. Un ataque transmite una toxina<br>que destruye desde el interior. La muerte<br>es certera, pero el terror acaba de empezar."
      },
      
      C5 : {
        name : "Marca aturdidora",
        desc : "Aplica temporalmente el efecto aturdimiento<br>a tu arma actual. La consciencia permanece,<br>pero no el libre albedrío. ¿Cómo tratas<br>a una víctima cuyo rostro está retorcido<br>por el terror? Todo está en manos de<br>los que dejaron esa marca."
      },
      
      C6 : {
        name : "Marca protectora",
        desc : "Aplica temporalmente el efecto inhibición<br>a tu arma actual. La habilidad de sellar<br>dones es muy importante. Quién sabe<br>de lo que alguien es capaz cuando está<br>entre la espada y la pared."
      },
      
      C7 : {
        name : "Marca de unión",
        desc : "Aplica temporalmente el efecto lentitud<br>a tu arma actual. Las víctimas alcanzadas<br>por este efecto sufren una sensación de<br>agotamiento al espesarse su sangre, lo que<br>entorpece sus movimientos y abre huecos<br>peligrosos."
      },
      
      C8 : {
        name : "Adrenalina",
        desc : "Mejora temporalmente el poder de ataque.<br>Para destruir a los horrores que invadieron<br>el mundo, la humanidad necesitaba<br>un poder más allá de lo imaginable.<br>Pronto, los dones pasaron a ser el rayo<br>de esperanza que iluminaba el camino<br>de todos los resucitados."
      },
      
      C9 : {
        name : "Puente hacia la gloria",
        desc : "Aumenta temporalmente el poder de<br>ataque. Los Perdidos inmortales se<br>fortalecen al beber la sangre de los<br>vivos.<br>Sabiduría, habilidad y experiencia son<br>la clave para sobrevivir en este mundo<br>de condena."
      },
      
      C10 : {
        name : "Potenciador",
        desc : "Aumenta temporalmente tu poder de ataque<br>y el de tu acompañante. El efecto acaba<br>cuando recibes daño. Esta habilidad destaca<br>cuando se usa como ataque preventivo contra<br>un oponente."
      },
      
      C11 : {
        name : "Impacto a distancia",
        desc : "Aumenta temporalmente el poder de<br>ataque de los disparos. Tras sobrevivir a<br>numerosas batallas, emplear la energía<br>eficazmente es cada vez más importante.<br>Derribar a los enemigos a distancia es<br>un gran método para conseguirlo."
      },
      
      C12 : {
        name : "Golpe de locura",
        desc : "Aumenta el poder del próximo ataque.<br>Va más allá de lo humanamente posible,<br>pues rompe inconscientemente las cadenas<br>que frenan al cuerpo y generan una fuerza<br>que sobrepasa barreras psicológicas.<br>Es un buen truco para resucitados."
      },
      
      C13 : {
        name : "Colmillo intermitente",
        desc : "Aumenta el poder del próximo ataque. Puedes<br>ganar un golpe repentino de fuerza al condensar<br>icor y liberarlo en el momento justo.<br>"
      },
      
      C14 : {
        name : "Segador despiadado",
        desc : "Ignora parte de la defensa física y del arma<br>del enemigo en tu siguiente ataque. Da igual<br>lo gruesa que sea tu armadura, el daño de<br>esta espada es inevitable. Como la guadaña<br>aniquiladora de un segador, actúa sin<br>importar las circunstancias."
      },
      
      C15 : {
        name : "Grito oscuro",
        desc : "Aumenta enormemente la eficacia de dones<br>oscuros en el próximo ataque. Un grito<br>de batalla restaura la voluntad de<br>triunfar y repone la fuerza necesaria<br>para superar desafíos."
      },
      
      C16 : {
        name : "Baile de cuchilla",
        desc : "Aumenta temporalmente el poder de ataque<br>cada vez que dañas a un enemigo con tu<br>arma. Si no te vas de la zona, puedes verte<br>implicado en planes que pueden causar<br>destrucción mutua.",
        usage_req : "Prometeo Códigos de sangre"
      },
      
      C17 : {
        name : "Espada ceremonial",
        desc : "Aumenta enormemente el poder de ataque, pero<br>drena los PS con el tiempo. Este efecto<br>termina cuando los PS llegan a 1.<br>Todo poder inimaginable tiene un precio,<br>pero solo aquellos dispuestos a pagarlo<br>tendrán la victoria asegurada.",
        usage_req : "Heimdal Códigos de sangre"
      },
      
      C18 : {
        name : "Fervor somático",
        desc : "Aumenta temporalmente la fuerza y la destreza.<br>La mejora del poder ofensivo de este don<br>hace que sea popular entre resucitados."
      },
      
      C19 : {
        name : "Fervor cognitivo",
        desc : "Aumenta temporalmente la mente<br>y la voluntad. La mejora a los dones<br>que esta técnica proporciona hace<br>que sea popular entre resucitados."
      },
      
      C20 : {
        name : "Precisión",
        desc : "Es más fácil aturdir enemigos con tu arma<br>durante un tiempo. Un pequeño intervalo<br>puede cambiar una batalla por completo.<br>Al crear este intervalo, consigues la<br>oportunidad de asegurar tu supervivencia."
      },
      
      C21 : {
        name : "Banquete de caza",
        desc : "Aumenta un tiempo el nivel de drenaje de los<br>ataques con armas. El papel de los dones<br>en la batalla es sumamente importante.<br>Al asegurar una fuente regular de icor,<br>la efectividad aumenta exponencialmente."
      },
      
      C22 : {
        name : "Cuchillas chupasangre",
        desc : "Aumenta temporalmente el nivel de drenaje<br>de los ataques con armas para ti y tu<br>compañero. Este don mejora la eficacia<br>de los mecanismos de drenaje de las armas."
      },
      
      C23 : {
        name : "Pericia con dones",
        desc : "Aumenta la velocidad de los dones un tiempo<br>para ti y tu compañero. Los resucitados<br>más experimentados que han sobrevivido<br>lo suficiente pueden desatar multitud<br>de dones en ciertos momentos mientras<br>se abren paso en batalla."
      },
      
      C24 : {
        name : "Extensión de don",
        desc : "Alarga temporalmente los efectos de dones<br>usados por ti y tu compañero. Parece<br>que no hay mucha diferencia, pero<br>unas pequeñas olas pueden causar<br>un tsunami que cambie el curso<br>de la batalla."
      },
      
      C25 : {
        name : "Aceleración",
        desc : "Utiliza el poder del icor para potenciar<br>temporalmente tus reflejos y aumentar<br>tu capacidad para esquivar. Esta técnica<br>emplea una gran cantidad de icor y es<br>difícil de aprender, pero el poder que<br>otorga resulta innegable."
      },
      
      C26 : {
        name : "Concentración",
        desc : "Reduce temporalmente el consumo de energía.<br>El efecto acaba cuando recibes daño.<br>Esta habilidad destaca cuando se usa<br>como ataque preventivo contra un oponente."
      },
      
      C27 : {
        name : "Pies rojos",
        desc : "Permite utilizar PS para ejecutar acciones<br>al agotarse tu energía. Aquellos dispuestos<br>a ir más allá de sus límites, fruto de la<br>desesperación, terminarán como héroes<br>o como necios. Para hallar la auténtica<br>valentía hay que dejar un poco de lado<br>el raciocinio.",
        usage_req : "Fionn Códigos de sangre"
      },
      
      C28 : {
        name : "Corazón valiente",
        desc : "Mejora la visión cinética y los reflejos,<br>y reduce el coste de energía al esquivar.<br>No importa la gravedad de la amenaza,<br>un juicio rápido y la agilidad pueden<br>minimizar el peligro."
      },
      
      C29 : {
        name : "Potenciador de moral",
        desc : "Aumenta tu energía máxima y la de tu<br>compañero, además de restaurarla por<br>completo. Los resucitados deben estar alerta<br>siempre para reaccionar a los cambios<br>sutiles del entorno. Para las criaturas<br>que no pueden descansar, esta técnica<br>podría ser posiblemente la mejor necesidad."
      },
      
      C30 : {
        name : "Pisatiempo",
        desc : "Usa el icor para acelerar temporalmente las<br>acciones con carga. Una ventaja de tiempo<br>es un gran beneficio en la batalla.<br>Un solo ataque puede suponer la victoria."
      },
      
      C31 : {
        name : "Sangre sobrenatural",
        desc : "Permite sacrificar PS para usar dones al<br>agotarse el icor. El intelecto de un<br>resucitado, sobre todo en cuanto al uso<br>de dones, puede hipnotizar la mente.<br>Aquellos dispuestos a sacrificar la carne<br>y la sangre con tal objetivo deben<br>procurar no labrarse su propia ruina.",
        usage_req : "Armonía Códigos de sangre"
      },
      
      C32 : {
        name : "Ola de impacto",
        desc : "Añade un efecto temporal de temblor<br>a los ataques que inflige daño adicional.<br>Dominar este don requiere talento,<br>pero supone una gran ventaja."
      },
      
      C33 : {
        name : "Viaje final",
        desc : "Hace que tu poder regenerador entre en un<br>frenesí que lleva a la muerte. Restaura<br>inmediatamente todos tus PS y aumenta<br>tus habilidades, pero te mata cuando pasa<br>un tiempo. Los resucitados son casi<br>inmortales, pero dispersarse conlleva<br>un alto precio. Asegúrate de conseguir<br>algo que merezca la pena.",
        usage_req : "Matarreinas Códigos de sangre"
      },
      
      C34 : {
        name : "Fervor vigoroso",
        desc : "Aumenta la fortaleza y la vitalidad temporalmente.<br>Aunque los resucitados vuelvan una y otra vez de<br>la muerte, no tendrán más remedio que enfrentarse<br>a ella gracias a tu aumento en PS y tu reserva de energía."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Orden de ataque",
        desc : "Reduce temporalmente tu defensa y aumenta<br>tu poder de ataque y el de tu compañero.<br><br>Sacrificar tu seguridad te permite mejorar el poder<br>de ataque de todo tu equipo en un instante."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Icor eficiente",
        desc : "Reduce el coste de icor de los ataques con armas<br>durante un tiempo limitado.<br><br>Hay quienes vigilan su icor en la lucha y quienes no,<br>pero una cosa está clara: unos viven más que otros."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Voluntad férrea",
        desc : "Disminuye temporalmente el daño recibido<br>al crear una barrera en tu sangre.<br>Evitar hasta la herida más pequeña<br>aumenta enormemente tus oportunidades<br>de sobrevivir."
      },
      
      D1 : {
        name : "Barrera de sangre maligna",
        desc : "Crea una barrera que reduce en gran medida<br>el daño de un ataque en ti y en tu compañero<br>al condensar el icor al límite. Incluso un escudo<br>temporal puede proporcionar una ventaja<br>psicológica que te lleve a la victoria.<br>"
      },
      
      D2 : {
        name : "Sangre ablativa",
        desc : "Reduce temporalmente gran parte del daño<br>recibido a costa de icor. El usuario debe<br>recordar que el icor es lo que lo<br>mantiene con vida. La muerte siempre<br>aguarda a quienes olvidan retirarse.",
        usage_req : "Eos Códigos de sangre"
      },
      
      D3 : {
        name : "Juggernaut",
        desc : "Aumenta el equilibrio y la resistencia<br>contra ataques directos pero reduce<br>la movilidad y la resistencia elemental.<br>Este don quita una debilidad y añade otra,<br>por lo que es difícil saber cuándo usarlo.<br>Sin embargo, es una herramienta poderosa<br>si se usa bien.",
        usage_req : "Aliento de la Reina Códigos de sangre"
      },
      
      D4 : {
        name : "Baluarte firme",
        desc : "Aumenta temporalmente la defensa con armas<br>contra los ataques físicos. Luchar contra<br>resucitados en frenesí no es fácil. <br>La Unidad de Seguridad Cerbero ha dependido<br>de una sólida defensa que ha convertido<br>en su punto fuerte para imponerse a ellos."
      },
      
      D5 : {
        name : "Giro defensivo",
        desc : "Otorga temporalmente la habilidad de<br>desviar ataques y aturdir enemigos<br>al defenderse satisfactoriamente.<br>Bloquear el ataque de un enemigo<br>y atacarle seguidamente cuando se<br>descuida puede parecer una estrategia<br>simple, pero es muy efectiva."
      },
      
      D6 : {
        name : "Poder aplastante",
        desc : "Hace que sea más fácil romper la defensa<br>de un enemigo. No temas a un enemigo<br>que gasta mucha energía en defensa.<br>La inquebrantable espada se abrirá paso<br>hacia la victoria."
      },
      
      D7 : {
        name : "Estabilidad de defensa",
        desc : "Reduce temporalmente el coste de energía<br>al defenderse. Cuando te rompen la defensa,<br>puedes dar la batalla por terminada.<br>Si esto no ocurre, la lucha continúa."
      },
      
      D8 : {
        name : "Velo refractario",
        desc : "Aumenta temporalmente la defensa con armas<br>contra ataques elementales. Luchar<br>contra resucitados en frenesí no es fácil.<br>La Unidad de Seguridad Cerbero ha confiado<br>en una sólida defensa que convierten<br>en fuerza para derrotarles."
      },
      
      D9 : {
        name : "Escudo antisangre",
        desc : "Crea alrededor de ti y de tu compañero una<br>barrera temporal que mitiga el poder de la<br>sangre y mejora tu resistencia.<br><br>El icor cambia sus propiedades en función<br>de la fuerza de voluntad del usuario.<br>Convertirlo en una barrera es una tarea<br>sencilla."
      },
      
      D10 : {
        name : "Protección antillamas",
        desc : "Crea alrededor de ti y de tu compañero una<br>barrera temporal que mitiga el poder del<br>fuego y mejora tu resistencia.<br>El campo toma el poder de las llamas<br>y disminuye el daño por calor."
      },
      
      D11 : {
        name : "Armadura de hielo",
        desc : "Crea alrededor de ti y de tu compañero una<br>barrera temporal que mitiga el poder del<br>hielo y mejora tu resistencia.<br>El campo mitigante inhibe el poder de<br>enfriar y reduce el daño por frío."
      },
      
      D12 : {
        name : "Velo de Raijin",
        desc : "Crea alrededor de ti y de tu compañero una<br>barrera temporal que mitiga el poder del<br>rayo y mejora tu resistencia.<br>Cualquier resucitado que se una a los <br>Perdidos recuerda todavía todos sus<br>dones y los emplea sin piedad contra<br>antiguos compañeros, por lo que hubo<br>que desarrollar tácticas defensivas."
      },
      
      D13 : {
        name : "Muro elemental",
        desc : "Aumenta temporalmente la resistencia a todos<br>los elementos para ti y tu compañero.<br>Un guerrero hábil está preparado para<br>ajustarse a cualquier situación. La soberbia<br>puede conducirte a una muerte temprana."
      },
      
      D14 : {
        name : "Corazón regio",
        desc : "Aumenta temporalmente la resistencia<br>al aturdimiento. Entre el caos de la<br>batalla, una mente fría puede significar<br>la victoria o la derrota para un resucitado.<br>Cuando se pierde, también se desvanece<br>la esperanza por el futuro."
      },
      
      D15 : {
        name : "Luchador testarudo",
        desc : "Aumenta temporalmente la resistencia al<br>aturdimiento ante ataques enemigos.<br>Solo los guerreros lo suficientemente<br>tenaces como para soportar cualquier<br>ataque sobrevivirán en este mundo."
      },
      
      D16 : {
        name : "Equilibrio perfecto",
        desc : "Aumenta enormemente la resistencia al<br>aturdimiento durante un ataque. Embestir<br>sin miedo es sin duda dar un paso<br>hacia el mañana."
      },
      
      D17 : {
        name : "Generador de anticuerpos",
        desc : "Aumenta temporalmente la resistencia a todos<br>los efectos perjudiciales. No hace falta decir que<br>los efectos de estado son una seria amenaza para<br>todo usuario de dones. Una falta de preparación<br>podría reducirte a cenizas."
      },
      
      D18 : {
        name : "Contramedida",
        desc : "Por tiempo limitado, esquivar ataques<br>enemigos genera proyectiles que atacan<br>al enemigo con el contacto. El valor para<br>dar un paso adelante sin dudar es<br>importante, pero el peligro de hacerlo<br>es real."
      },
      
      D19 : {
        name : "Venganza pícara",
        desc : "Por tiempo limitado, recibir daño genera<br>proyectiles abrasadores que atacan al<br>enemigo al contacto. Las llamas de rabia<br>previenen los ataques, y para los<br>resucitados que las usan, son llamas<br>de salvación.",
        usage_req : "Garra de la Reina Códigos de sangre"
      },
      
      D20 : {
        name : "Tenacidad salvaje",
        desc : "Después de usar este don, recibir daño<br>mortal cuando tus PS están por encima<br>de una cierta cantidad te dejará en su lugar<br>con 1 PS. Este efecto solo se puede activar<br>una vez. Llénate de valor, da igual cuál sea<br>el peligro. Mientras te aferres a la vida,<br>las posibilidades son ilimitadas."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Cuerpo resistente",
        desc : "Reduce la efectividad de tus dones mientras aumenta<br>temporalmente los PS máximos.<br><br>Es cosa tuya cómo utilizar la gran cantidad de PS<br>obtenidos con este don."
      },
      
      D22 : {
        name : "Defensa circular",
        desc : "Te permite defender todos los flancos y no solo el frente.<br><br>Ahora no tienes nada que temer, vengan de donde vengan<br>tus enemigos. Ten en cuenta, no obstante, que las batallas<br>no se ganan solo defendiendo."
      },
      
      D23 : {
        name : "Orden defensiva",
        desc : "Reduce temporalmente tu poder de ataque<br>y aumenta tu defensa y la de tu compañero.<br><br>Sacrificar tu seguridad te permite mejorar la<br>defensa de tus aliados en un instante."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Destemplanza temeraria",
        desc : "Don comunal con Louis que aumenta el<br>ataque y modifica los movimientos evasivos,<br>pero reduce el daño.<br><br>Este don transforma la sed de sangre<br>del resucitado en fuerza y aumenta el<br>riesgo de unirse a los Perdidos.<br>Es complicado mantener dicho camino si no<br>se dispone de una determinación muy firme.",
        usage_req : "Formando equipo con Louis"
      },
      
      E1 : {
        name : "Lupinus Vita",
        desc : "Don compartido con Yakumo que reduce la<br>energía consumida al bloquear y mejora el primer<br>ataque tras bloquear, según el número de ataques<br>bloqueados. Sin embargo, reduce la velocidad al<br>esquivar. La motivación para defender y dar<br>apoyo a los compañeros proporciona fuerza<br>a la sangre. Los obstáculos desaparecerán<br>cuando golpees con el peso de la responsabilidad.",
        usage_req : "Formando equipo con Yakumo"
      },
      
      E2 : {
        name : "Estaca de convicción",
        desc : "Don compartido con Io que mejora<br>la resistencia al aturdimiento, pero<br>reduce la eficacia al drenar. Una intensa<br>voluntad enraizada hace que el poder<br>del sueño se active con el único objetivo<br>de responder a la llamada personal.",
        usage_req : "Formando equipo con Io"
      },
      
      E3 : {
        name : "Despertar de la sangre",
        desc : "Don compartido con Mia: reduce el coste de<br>icor y aumenta la eficacia de los dones,<br>pero reduce el poder de los ataques cuerpo<br>a cuerpo. La sangre despertada que corre<br>por las venas contiene la fuerza para<br>sobrevivir en este mundo desolado.<br>Bajo sus efectos, el entorno se convertirá<br>en un mundo propio de los cuentos de hadas.",
        usage_req : "Formando equipo con Mia"
      },
      
      E4 : {
        name : "Oleada fatal",
        desc : "Don compartido con Jack que aumenta el<br>poder de ataque y reduce el consumo de<br>energía, pero que a su vez reduce el número<br>de veces que puedes regenerarte. Mantener<br>la Prisión de las Neblinas implica arriesgar<br>tu propia vida y obviar el peligro. La<br>magnitud de una tarea así infunde respeto<br>a casi todos los resucitados.",
        usage_req : "Formando equipo con Jack"
      },
      
      E5 : {
        name : "Estribillo efímero",
        desc : "Don compartido con Eva que mejora el<br>drenaje y la eficacia de los dones, pero<br>aumenta el consumo de icor. La sangre<br>del resucitado danza por las venas, como<br>si bailase al compás de una canción que<br>atraviesa el corazón, y la lluvia carmesí<br>inunda el alma sedienta.",
        usage_req : "Formando equipo con Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Ofrenda curativa",
        desc : "Gasta tus propios PS para restaurar los PS<br>de tus camaradas. Para un resucitado,<br>la muerte no es algo que haya que temer.<br>Lo más aterrador es perder los vínculos<br>de confianza que te unen a otros y verte<br>obligado a vivir una vida en solitario.",
        usage_req : "PS a 2 o superior"
      },
      
      F1 : {
        name : "Ayuda solidaria",
        desc : "Consume una gran cantidad de tus propios PS<br>para restaurar una gran cantidad de los PS<br>de tu compañero. La firme voluntad de alguien<br>que arriesga su vida a tu lado es una bendición<br>que puede curar las heridas de tus aliados.",
        usage_req : "PS a 2 o superior"
      },
      
      F2 : {
        name : "Autocuración",
        desc : "Usarás automáticamente<br>una Ofrenda curativa cuando tu compañero<br>reciba daño crítico. Sin embargo,<br>cada uso consume PS. Sacrificarte para<br>salvar a los demás no es algo fácil. La luz<br>de la salvación es el resultado de una<br>valiosa relación.",
        usage_req : "Deméter Códigos de sangre<br>PS a 2 o superior"
      },
      
      F3 : {
        name : "Vínculo del Guardián",
        desc : "Sacrifica PS para curar al aliado y mejorar<br>temporalmente la reducción de daño. Nadie<br>puede sobrevivir por sí mismo a la prisión que <br>supone la realidad. Lo que ahora duele,<br>más adelante se convertirá en un salvavidas<br>que te guiará en una situación extrema.",
        usage_req : "Astrea Códigos de sangre<br>PS a 2 o superior"
      },
      
      F4 : {
        name : "Luz purificadora",
        desc : "Por tiempo limitado, parte del daño recibido<br>se curará automáticamente con lentitud.<br>El dolor les recuerda a los resucitados<br>la vida que perdieron. Por una parte,<br>es una bendición. Es esa forma de pensar<br>la que estimula las células<br>y hace que se reparen a sí mismas."
      },
      
      F5 : {
        name : "Regenerador",
        desc : "Potencia tus habilidades regeneradoras<br>y las de tu compañero al aumentar<br>la cantidad de PS curados por regeneración.<br>Una pequeña diferencia en resistencia<br>determina el resultado de muchas<br>peleas. El sentido de estabilidad<br>también acerca la victoria."
      },
      
      F6 : {
        name : "Supresor de veneno",
        desc : "Os cura a ti y a tu compañero de<br>veneno. Se puede usar para bloquear el<br>efecto antes de sufrirlo. A pesar de ser<br>inmortales, las enfermedades eran un<br>problema inevitable para los resucitados,<br>y la medicina se convirtió en un asunto<br>fundamental. Hoy, sus vidas dependen<br>de ensayo y error y de un tenaz esfuerzo."
      },
      
      F7 : {
        name : "Supresor de aturdimiento",
        desc : "Os cura a ti y a tu compañero de<br>aturdimiento. Es más útil al bloquear el<br>efecto antes de sufrirlo. A pesar de ser<br>inmortales, las enfermedades eran un<br>problema inevitable para los resucitados,<br>y la medicina se convirtió en un asunto<br>fundamental. Hoy, sus vidas dependen<br>de ensayo y error y de un tenaz esfuerzo."
      },
      
      F8 : {
        name : "Supresor de inhibición",
        desc : "Os cura a ti y a tu compañero de<br>inhibición. Se puede usar para bloquear el<br>efecto antes de sufrirlo. A pesar de ser<br>inmortales, las enfermedades eran un<br>problema inevitable para los resucitados,<br>y la medicina se convirtió en un asunto<br>fundamental. Hoy, sus vidas dependen<br>de ensayo y error y de un tenaz esfuerzo."
      },
      
      F9 : {
        name : "Supresor de lentitud",
        desc : "Os cura a ti y a tu compañero de lentitud.<br>Puede bloquear el efecto si se usa antes de<br>sufrirlo. A pesar de la naturaleza inmortal<br>de los resucitados, las enfermedades seguían<br>siendo un problema inevitable, y la medicina<br>se convirtió en un asunto fundamental.<br>Hoy, sus vidas consisten en prueba y error,<br>y suponen un tenaz esfuerzo."
      },
      
      F10 : {
        name : "Supresor de pérdida",
        desc : "Os cura a ti y a tu compañero de la pérdida.<br>Puede bloquear el efecto si se usa antes de<br>sufrirlo. A pesar de la naturaleza inmortal<br>de los resucitados, las enfermedades seguían<br>siendo un problema inevitable, y la medicina<br>se convirtió en un asunto fundamental.<br>Hoy, sus vidas dependen de ensayo y error,<br>al igual que de un tenaz esfuerzo."
      },
      
      F11 : {
        name : "Esencia de Panacea",
        desc : "Os cura a ti y a tu compañero de todos los<br>efectos perjudiciales. También puede<br>bloquearlos si se utiliza con antelación.<br>Tras los agotadores días de batalla, reírse<br>y recordar los vínculos de confianza y las<br>emociones compartidas con tus compañeros<br>revitaliza los corazones cansados."
      },
      
      F12 : {
        name : "Sacrificio de sangre",
        desc : "Gasta tus propios PS para obtener icor.<br>Para los resucitados que pasan mucho<br>tiempo en combate, el valor del icor es<br>incuestionable. Su fuerza es innegable,<br>pues mantiene a raya el miedo a<br>convertirse en cenizas."
      },
      
      F13 : {
        name : "Olvidar",
        desc : "Todos los dones que requieren tiempo para<br>usarlos se pueden utilizar instantáneamente.<br>En un apuro, es mejor olvidarse<br>y empezar otra vez desde el principio."
      },
      
      F14 : {
        name : "Luz flotante",
        desc : "Crea una bola de luz a tus pies.<br>En la era de las luces químicas, muchas<br>expediciones fueron interrumpidas<br>cuando se quedaron sin equipo.<br>La posibilidad de usar dones en su lugar<br>aumenta los recorridos posibles."
      },
      
      F15 : {
        name : "Vivificación",
        desc : "Te transporta al último muérdago tocado<br>sin perder neblina al hacer que tu cuerpo<br>se disperse intencionadamente. Retirarse<br>no es de cobardes. Ser capaz de escoger<br>tus batallas es esencial en esta prisión de<br>mundo."
      },
      
      F16 : {
        name : "Acechador nocturno",
        desc : "Reduce el ruido que produces, por lo que es<br>más difícil que te detecten. Si notas<br>incluso la más mínima presencia detrás,<br>date la vuelta para asegurarte. Nunca sabes<br>quién puede estar acechándote<br>entre las sombras."
      },
      
      F17 : {
        name : "Velo brumoso nocturno",
        desc : "Envuelve tu cuerpo en una capa de calígine<br>de sangre, por lo que es más difícil<br>que los enemigos te detecten. Al usarla,<br>te muestras difuso y es más difícil<br>que te rastreen."
      },
      
      F18 : {
        name : "Localizador de botines",
        desc : "Averiguas si quedan objetos por recoger<br>a cierto alcance.<br>Rastreas las débiles huellas de tu objetivo<br>usando los sentidos sobrehumanos que te<br>concede el hambre de resucitado."
      },
      
      F19 : {
        name : "Identificador activo",
        desc : "Tu radar muestra a los enemigos que se<br>encuentran a cierto alcance.<br>Aquellos que son inmortales deben temer a la<br>muerte por encima de todo si no desean<br>sufrir el tormento eterno."
      },
      
      F20 : {
        name : "Localizador de tesoros",
        desc : "En tu radar se mostrará un objeto no<br>recogido situado a cierta distancia.<br>Dispersas pequeñas cantidades de sangre que<br>exploran el entorno. Este tipo de acciones<br>son inalcanzables para los humanos."
      },
      
      F21 : {
        name : "Percepción valiosa",
        desc : "Averiguas si quedan objetos por recoger<br>en el mapa actual.<br>Rastreas las débiles huellas de tu objetivo<br>usando los sentidos sobrehumanos que te<br>concede el hambre insaciable de un<br>resucitado. Debes recoger todos los objetos."
      },
      
      F22 : {
        name : "Abismo seccionado",
        desc : "Saltas y golpeas con todas tus fuerzas.<br>Una habilidad ofensiva hecha con Espada a una mano,<br>Alabarda o Bayoneta. Saltas en el aire y mueves el arma<br>como si cortaras un abismo oscuro. Beneficiarse del<br>movimiento antes y después del ataque es difícil,<br>así que sincronízalo con los movimientos del enemigo.<br>"
      },
      
      F23 : {
        name : "Ataque fantasma",
        desc : "Te desvaneces como la niebla y ejecutas un tajo con salto.<br>Una habilidad ofensiva hecha con Espada a una mano, Alabarda<br>o Bayoneta. Tras desaparecer en las sombras como un fantasma,<br>corres hacia el objetivo y ejecutas un tajo cruzado. Mientras estés<br>en forma de niebla no podrán herirte, así que ataca sin miedo."
      },
      
      F24 : {
        name : "Pulso circulante",
        desc : "Lanzas una salva de ataques.<br>Una habilidad ofensiva hecha con Espada a una mano,<br>Alabarda o Bayoneta. Abrumas al enemigo con una<br>combinación de cinco ataques. Si le aplicas un don al<br>arma antes del ataque, aumentarás su potencia<br>en gran medida."
      },
      
      F25 : {
        name : "Aplastalegiones",
        desc : "Lanzas el arma y la haces girar.<br>Una habilidad ofensiva hecha con Espada a dos manos o<br>Martillo. Lanzas el arma hacia delante y usas el poder del<br>don para hacer que gire y barra a grupos de enemigos.<br>Este ataque afecta a una zona amplia pero tarda<br>tiempo en ejecutarse, de modo que debes usarlo con<br>cuidado incluso contra los enemigos más débiles.<br>"
      },
      
      F26 : {
        name : "Ronda de fusilamiento",
        desc : "Disparas una salva de balas dirigidas.<br>Una habilidad ofensiva hecha con Bayoneta.<br>Usas la rotación para comprimir el icor en tu<br>bayoneta y disparas cuatro balas que dan caza<br>al objetivo. Este ataque tarda un poco en<br>ejecutarse, así que utilízalo solo cuando<br>se den las circunstancias adecuadas."
      },
      
      F27 : {
        name : "Triple aniquilador",
        desc : "Lanzas un combo contra un objetivo cercano.<br>Una habilidad ofensiva hecha con Espada a dos manos o <br>Martillo. Utilizas icor para potenciar en gran medida<br>tus músculos brevemente y blandes un arma<br>pesada tres veces en rápida sucesión. Este<br>ataque, que se ejecuta con rapidez,<br>resulta indispensable en distancias cortas."
      },
      
      F28 : {
        name : "Embestida dragón",
        desc : "Saltas adelante y ejecutas un ataque poderoso.<br>Ofensiva. Espada a dos manos/Martillo.<br><br>Te abalanzas sobre un enemigo distante y lo<br>atacas despiadadamente, como un dragón que<br>intentara romperle el pescuezo a un tigre.<br>Este ataque te dejará vulnerable, así que<br> ten cuidado y vigila los contraataques."
      },
      
      F29 : {
        name : "Precipitación",
        desc : "Arremetes en forma de niebla y lanzas un combo.<br>Una habilidad ofensiva hecha con Alabarda.<br>Te dispersas y corres para iniciar una serie<br>de ataques con arremetida. El primero puede<br>dar paso a otros ataques o a una esquiva,<br>por lo que es un buen punto de partida."
      },
      
      F30 : {
        name : "Vacío cambiante",
        desc : "Arremetes en forma de niebla.<br>Tu cuerpo se dispersa momentáneamente <br>como un fantasma en la noche y arremetes,<br>evitando todos los ataques durante<br>el proceso."
      },
      
      F31 : {
        name : "Rompelápidas",
        desc : "Golpeas el suelo con el pie y provocas una<br>onda sísmica.<br>Antes de golpear el suelo, acumulas<br>energía en las piernas para liberar una onda<br>de energía destructora que despierta a<br>los muertos que descansan bajo tierra y<br>aturde a los Perdidos, dejándolos<br>vulnerables al siguiente ataque."
      },
      
      F32 : {
        name : "Cortagolondrinas",
        desc : "Lanza un ataque rápido como un rayo.<br>Ofensiva. Espada a dos manos/Martillo.<br><br>Giras el cuerpo con rapidez y ejecutas un<br>ataque repentino capaz de golpear a una<br>golondrina en pleno vuelo. Para ser un arma<br>pesada, tiene una velocidad asombrosa que<br>te permitirá causar daños a la menor<br>oportunidad."
      },
      
      F33 : {
        name : "Vacío evanescente",
        desc : "Te transformas en niebla para esquivar<br>los ataques.<br>Este don te permite dispersarte y reaparecer<br>sobre tu posición anterior para evitar el<br>peligro. Es un don sutil pero rompedor que<br>usa el ciclo vital de un resucitado de forma<br>magistral, aunque resulta difícil dominarlo."
      },
      
      F34 : {
        name : "Explosión atormentadora",
        desc : "Saltas hacia delante y golpeas dos veces.<br>Ofensiva. Espada a dos manos/Martillo.<br><br>Te abalanzas sobre el enemigo y ejecutas dos<br>ataques pesados con rapidez. Las armas<br>pesadas pueden ser muy lentas, de modo que<br>una ofensiva aplastante siempre será tu<br>mejor aliada."
      },
      
      F35 : {
        name : "Ataque de sombras",
        desc : "Ejecutas una carga rápida a corto alcance.<br>Ofensiva. Espada a 1 mano/Alabarda/Bayoneta.<br><br>Te deslizas hacia delante como una sombra y<br>ejecutas un ataque rápido. Esta técnica es<br>idónea para acortar distancias y para<br>aquellos cuya estrategia consiste en<br>pegarse al oponente."
      },
      
      F36 : {
        name : "Ofrenda modesta",
        desc : "Gasta una pequeña cantidad de tus PS para restaurar una<br>pequeña cantidad de los de tus compañeros. Aunque este<br>don consume menos PS que la Ofrenda curativa, también<br>curará menos al objetivo.",
        usage_req : "PS a 2 o superior"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Resonancia icor (recibir)",
        desc : "Te otorga el mismo icor que gane tu compañero<br>(no el jugador).<br><br>La unión entre tus compañeros y tú se convierte<br>en la sangre de tus venas, el poder que mueve<br>tu cuerpo.<br><br>No se puede usar con «Resonancia icor (dar)»."
      },
      
      F38 : {
        name : "Resonancia icor (dar)",
        desc : "El icor de tu compañero aumentará según<br>la cantidad que ganes (no se aplica al<br>jugador).<br><br>Tu sangre bulle con emoción. La resonancia<br>en tu cuerpo salvará a tus camaradas.<br><br>No se puede usar con «Resonancia icor<br>(recibir)»."
      },
      
      F39 : {
        name : "Postura serena",
        desc : "Restaura inmediatamente toda la energía tras<br>adoptar una pose que calma tu mente.<br><br>Esta pose no solo dobla tu tiempo de ataque<br>combo en batalla sino que te salva cuando<br>estás al borde de la muerte."
      },
      
      F40 : {
        name : "Ráfaga revitalizante",
        desc : "Restaura energía al esquivar con éxito un ataque cuando esté <br>en efecto. Hasta los Perdidos son vulnerables tras un ataque. <br>Si puedes evitar sus golpes, se te presentará la oportunidad de atacar."
      },
      
      F41 : {
        name : "Tajo tranquilo",
        desc : "Adopta una pose de quietud y realiza un ataque imperceptible.<br>Una habilidad de ataque con espada a una mano.<br>Este corte instantáneo crea una hoja de vacío que<br>atraviesa a todos los enemigos en su rango.<br>Esta técnica exige el alma completa de su usuario<br>y solo puede dominarse con tiempo."
      },
      
      F42 : {
        name : "Cuchilla circular",
        desc : "Salta mientras realizas un corte giratorio. Una habilidad<br>de ataque con una espada a una mano/alabarda/bayoneta.<br>Esta técnica cubre todos tus flancos mientras atraviesa<br>a los enemigos cercanos.<br>Además de su uso evidente cuando te cercan tus enemigos,<br>el ataque también puede acertar a enemigos cuya posición<br>es más difícil de calcular."
      },
      
      F43 : {
        name : "Salto salvaje",
        desc : "Lanza un ataque en el aire y arrasa con el enemigo.<br>Una habilidad de ataque con una espada a una<br>mano/alabarda.<br><br>Las técnicas de batalla del caballero monarca requieren<br>entrenamiento para mejorar. Este don es excelente<br>para acortar distancias, ya que permite saltar en el aire<br>y volar hacia el enemigo."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Golpe resuelto",
        desc : "Ataca con un único golpe muy resistente al aturdimiento.<br>Una habilidad de ataque con espada a dos manos/martillo.<br>Un solo golpe exento de miedo puede cambiar las tornas<br>de la batalla y reclamar la victoria. No obstante, despreocuparse<br>por la propia vida puede hacer que todo sea en vano. Es una<br>fina línea por la que hay que saber caminar."
      },
      
      F45 : {
        name : "Espada del usurpador",
        desc : "Corta a tu enemigo y recupera tus PS. Una habilidad<br>de ataque con alabarda.<br><br>Estar sedientos de sangre y vida es la naturaleza<br>de los resucitados. Cede ante tus deseos."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Sin esperar",
        desc : "Restaura el tiempo de reutilización de dones<br>de tu compañero.<br><br>Mientras su icor lo permita, tu compañero podrá<br>arrinconar a los enemigos usando un poderoso<br>don una y otra vez sin esperar."
      },
      
      F47 : {
        name : "Regeneración de icor",
        desc : "Restaura gradualmente el icor a cambio de una<br>reducción en el poder de ataque con armas y la defensa.<br><br>No obstante, tras un periodo de tiempo la restauración<br>de icor cesará y recuperarás el poder perdido."
      },
      
      F48 : {
        name : "Carga del rayo",
        desc : "Embiste a tus enemigos a la velocidad del rayo<br>y realiza un ataque con la palma de la mano.<br><br>Acecha a tu presa en un instante, como una<br>bestia imparable de caza.<br><br>El ataque no hace mucho daño, pero la velocidad<br>que te otorga puede ser la clave de la victoria<br>contra cualquier arma."
      },
      
      F49 : {
        name : "Vuelve a concentrarte",
        desc : "Aumenta parcialmente el medidor de concentración tras su uso.<br><br>Este don no siempre te hará entrar en un estado de<br>concentración, así que es importante usarlo en el momento<br>adecuado para tu estrategia."
      },
      
      F50 : {
        name : "Cañón radiante",
        desc : "Dispara poderosos proyectiles que hacen daño perforante.<br>Una habilidad de ataque con bayoneta.<br><br>Los proyectiles impactarán inmediatamente en tus enemigos,<br>atravesándolos en su trayectoria.<br><br>No obstante, debido al tiempo que tarda la energía en fusionarse,<br>esta técnica no es efectiva contra enemigos cercanos; sino contra<br>grandes grupos."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Espada Matarreinas",
        desc : "Espada de un solo filo fabricada en masa<br>para los soldados de la Operación<br>Matarreinas. Diseñada para ser fabricada<br>lo más rápido posible, el conductor de icor<br>está descubierto, otorgándole una apariencia<br>tosca, pero su afilada cuchilla raja la<br>carne de los Perdidos con facilidad."
      },
      
      A1 : {
        name : "Tubo de esclavitud",
        desc : "Un arma simple similar a un garrote. Se trata de<br>un tubo con una función de drenaje<br>integrada que lo convierte en algo parecido<br>a una espada. Lo utilizan principalmente<br>los resucitados subyugados y proporciona un<br>débil destello de esperanza en combate."
      },
      
      A2 : {
        name : "Sable",
        desc : "Espada ancha de doble filo fabricada en masa<br>por el gobierno provisional. Diseñada<br>exclusivamente en base a la potencia, si se<br>blande con todo el cuerpo puede derribar<br>hasta los más grandes especímenes de<br>Perdidos. Su facilidad de uso la hace muy<br>popular tanto en manos de héroes como<br>de villanos en el mundo de Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Espada curvada de un solo filo con diseño<br>de katana. Fue creada por un resucitado<br>llamado Mukuro, que además grabó en ella<br>su nombre, que significa &quot;cadáver<br>despreciable&quot;. El arma difiere de las<br>espadas habituales en Vein y sacarle<br>el máximo provecho requiere una gran<br>habilidad por parte del portador."
      },
      
      A4 : {
        name : "Carmesí duradero",
        desc : "Fiel arma de apoyo de Louis. Su cuchilla roja<br>está grabada con una especie de don<br>mágico que atraviesa hasta las más férreas<br>defensas de un solo tajo al imbuirla de<br>icor. Fue recibida del mismo resucitado que<br>otorgó a Yakumo su propia arma y fue<br>creada por unas entregadas manos con<br>la mente puesta en la técnica de Louis."
      },
      
      A5 : {
        name : "Machete",
        desc : "Gran cuchilla de carnicero hecha,<br>al parecer, de una pieza de acero.<br>Un loco grupo de ingenieros la desarrolló<br>en una tienda y se diseñó para combinar<br>el manejo de espadas a una mano con el poder<br>de las espadas a dos manos. Sin embargo,<br>su uso requiere mucha fuerza debido al peso,<br>y por ello pocos usan este arma."
      },
      
      A6 : {
        name : "Cuchilla lobo argenta",
        desc : "Espada a una mano plateada empleada por la Unidad<br>de Seguridad Cerbero.<br>A pesar de su activador de dones, está bien equilibrada<br>y ofrece una calidad superior para un arma fabricada en<br>masa. Cerbero es una fuerza de élite bien entrenada que<br>surgió tras la Operación Matarreinas, y su equipamiento<br>demuestra su valor en manos expertas."
      },
      
      A7 : {
        name : "Garra ardiente",
        desc : "Espada larga empleada por la Sucesora de<br>la Garra. El calor de su interior genera<br>arcos carmesí en el aire y hace estallar en<br>llamas todo lo que golpea. Se dice que se<br>originó a partir de los pensamientos de la<br>Sucesora, pero ¿cuál era la verdadera<br>intención?"
      },
      
      A8 : {
        name : "Sangregélida",
        desc : "Arma agresiva usada por la Espadachín,<br>una secuaz de Mido. Posee un activador<br>de dones de tipo gélido en su estructura,<br>lo que permite crear al instante una lanza<br>de hielo. Se trata de un objeto único<br>creado para la élite de Cerbero y requiere<br>una exquisita técnica para manejarla<br>eficazmente.<br>"
      },
      
      A9 : {
        name : "Espada del atardecer",
        desc : "Una espada Matarreinas retorcida y corroída<br>por el miasma. Ni siquiera la materia inorgánica<br>es inmune a la corrupción de la Reina, que ha<br>deslustrado el brillo negro de esta arma y ha<br>alterado sus propiedades. Aunque nadie la empuñaría<br>sin vacilar, su efectividad es innegable."
      },
      
      A10 : {
        name : "Sable negro",
        desc : "Espada azabache de un solo filo. Su hoja<br>curvada se diseñó para atravesar la carne,<br>efecto que un diestro espadachín podrá<br>aprovechar al máximo. A los Cazadores de<br>Negro les resulta indiferente el peso de<br>sus armas y persiguen la potencia por<br>encima de todo, para lo que se necesita<br>mucha práctica."
      },
      
      A11 : {
        name : "Ejecutora",
        desc : "Espada favorita de Jack, el Vigilante de la<br>Cripta. Su afilada hoja no presenta signos<br>de uso, y puede infligir heridas mortales<br>de una sola estocada. Se desconoce su<br>historia, pero parece una versión<br>personalizada de las armas usadas por los<br>Cazadores de Negro, y el cuidado recibido<br>dice mucho del reservado Vigilante."
      },
      
      A12 : {
        name : "Sable de Perdido",
        desc : "Espada a una mano usada por los resucitados<br>caídos que se unieron a los Perdidos.<br>El tiempo expuesta al miasma ha alterado<br>sus propiedades. Se fabricó para aniquilar<br>a los Perdidos, pero más adelante se<br>alimentó de la sangre de los resucitados.<br>Ironías así son el pan de cada día en el<br>mundo de Vein."
      },
      
      A13 : {
        name : "Espada larga carmesí",
        desc : "Espada a una mano de diseño similar al<br>de una espada larga empuñada por un<br>devorador de dioses con un férreo<br>autocontrol. Incorpora un activador de<br>dones que permite al portador disparar<br>ondas cortantes. Esta arma carmesí de<br>asesino de dioses reluce con fuerza<br>cuando se derrama la oscura sangre."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Tubería infernal",
        desc : "Un arma similar a un garrote retorcida por el<br>fuego infernal.<br><br>Esta tubería estuvo expuesta a la miasma y se<br>bañó en fuego infernal, lo que le hizo cambiar<br>de color. Solo quienes superan las peores pruebas<br>pueden obtenerla."
      },
      
      A15 : {
        name : "Espada infernal",
        desc : "Espada de un solo filo abrasada por el fuego infernal.<br><br>Incluso con un gran ajuste de fuerza sigue<br>siendo muy ligera.<br><br>La hoja carmesí aloja una poderosa llama que<br>imbuye los ataques cargados con fuego."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Tubería escarchada",
        desc : "Un arma similar a un garrote retorcida por la escarcha.<br><br>Esta tubería estuvo expuesta a la miasma y se<br>bañó en escarcha gélida, lo que le hizo cambiar<br>de color. Solo quienes superan las peores pruebas<br>pueden obtenerla."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Tubería eléctrica",
        desc : "Un arma similar a un garrote retorcido por un rayo.<br><br>Esta tubería estuvo expuesta a la miasma y un<br>rayo la fulminó, lo que le hizo cambiar de color.<br>Solo quienes superan las peores pruebas pueden<br>obtenerla."
      },
      
      A18 : {
        name : "Tubería sin rival",
        desc : "Un arma similar a un garrote otorgada solo a<br>quienes desean ser los mejores.<br><br>Un resucitado con poderes inigualables no necesita<br>armas adicionales; esta arma solo existe para<br>reverenciar a los poderosos."
      },
      
      A19 : {
        name : "Espada Fulmen",
        desc : "Espada a una mano galvanizada por el rayo.<br><br>Es pesada, pero tiene un gran poder defensivo y<br>un gran ajuste de destreza y mente.<br><br>La electricidad azul oculta en su filo brilla con<br>hermosura e imbuye sus ataques cargados con<br>relámpagos."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Gran esp. Matarreinas",
        desc : "Espada a dos manos fabricada en masa para<br>los resucitados en la Operación Matarreinas.<br>Esta espada se diseñó para ser utilizada<br>contra el cuerpo de la Reina, lo que la hace<br>más que adecuada para eliminar a los Perdidos."
      },
      
      B1 : {
        name : "Zweihander",
        desc : "Espada larga a dos manos fabricada en masa<br>por el gobierno provisional. Diseñada para<br>aniquilar grandes especímenes, es muy<br>resistente y ofrece una gran protección<br>a su portador. La información de la<br>Operación Matarreinas condujo a<br>innovaciones tecnológicas, como un<br>conductor de icor interno individual."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Espada grande similar a un sable japonés.<br>Fue creada por un resucitado llamado Mukuro,<br>que además grabó en ella su nombre, que significa<br>&quot;cadáver segador&quot;. Diseñada para<br>infligir amplios tajos devastadores, posee<br>bastante potencia como para enviar una<br>ráfaga de viento al blandirla con fuerza."
      },
      
      B3 : {
        name : "Maldición Oni",
        desc : "Espada que ha acompañado a Yakumo en<br>incontables batallas. Se forjó con distintas<br>técnicas de la mayoría de las armas del mundo<br>de Vein y la construyeron para ser blandida en<br>movimiento, a pesar de su tamaño. Yakumo la<br>recibió del mismo resucitado que le proporcionó<br>a Louis su arma, y él la ha personalizado a su estilo."
      },
      
      B4 : {
        name : "Espada retorcida",
        desc : "Espada a dos manos con una hoja similar a la<br>de un gran colmillo.<br>Fabricada a partir del cadáver de un<br>gigantesco espécimen de Perdido, esta<br>extraña arma posee el poder de desatar algo<br>parecido a un don cuando se blande a<br>máxima potencia. Alberga una ligera calidez <br>y se rumorea que ansía sangre."
      },
      
      B5 : {
        name : "Gran espada negra",
        desc : "Espada a dos manos con un solo filo de sierra<br>negro. Esta arma larga y curvada fue diseñada<br>para cercenar las extremidades de los enemigos.<br>A los Cazadores de Negro les resulta indiferente<br>el peso de sus armas, y persiguen la potencia por<br>encima de todo, por lo que se necesita mucha práctica."
      },
      
      B6 : {
        name : "Espada real lobo argenta",
        desc : "Espada a dos manos dorada que empuñó Silva<br>tras entrar en frenesí.<br>Conserva parte del poder vinculado a las<br>reliquias y puede ejecutar ataques potentes<br>en línea recta a una velocidad vertiginosa.<br>Su diseño ofrece una belleza casi totalmente<br>empañada por su fuerza pura y confiere un<br>aura imperiosa a su portador."
      },
      
      B7 : {
        name : "Filo juicioso",
        desc : "Espada a dos manos forjada por el siempre<br>inquisitivo y depravado resucitado Mido.<br>Su mecanismo de transformación interno<br>despliega una hoja de don de gran<br>rendimiento que le confiere un increíble<br>poder de destrucción, seguramente previsto<br>para el enfrentamiento final contra Silva."
      },
      
      B8 : {
        name : "Gran espada del atardecer",
        desc : "Una gran espada Matarreinas retorcida<br>y corroída por el miasma.<br>Ni siquiera la materia inorgánica es inmune<br>a la corrupción de la Reina, que ha<br>deslustrado el brillo negro de esta arma y<br>ha alterado sus propiedades. Aunque nadie la<br>empuñaría sin vacilar, su efectividad<br>es innegable."
      },
      
      B9 : {
        name : "Zweihander de Perdido",
        desc : "Espada a dos manos usada por los resucitados<br>caídos que se unieron a los Perdidos.<br>El tiempo que ha pasado expuesta al miasma<br>ha alterado sus propiedades. Se fabricó para<br>aniquilar a los Perdidos, pero más adelante<br>se alimentó de la sangre de los resucitados."
      },
      
      B10 : {
        name : "Hierro lobo argenta",
        desc : "Espada a dos manos plateada empleada por<br>la Unidad de Seguridad Cerbero. Está pensada<br>para ataques a corta distancia, pero también<br>puede acercar a los enemigos con sus fuertes<br>tajos. Cerbero es una fuerza de élite bien<br>entrenada que surgió tras la Operación<br>Matarreinas, y su equipamiento demuestra<br>su valor en manos expertas."
      },
      
      B11 : {
        name : "Gran espada pálida",
        desc : "Espada a dos manos en forma de sierra<br>gigante empuñada por un devorador de dioses<br>que soportó el peso del destino.<br>Al blandirla con fuerza emite un fulgor<br>azulado y golpea con una fuerza increíble.<br>Esta arma envuelta en una luz cegadora<br>despachará a los Perdidos sin problema."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Balmung furiosa",
        desc : "Espada a dos manos abrasada por el fuego infernal.<br><br>Aunque es pesada, tiene mucho poder y defensa<br>de armas; además de un gran ajuste de destreza.<br><br>La hoja abrasada aún conserva el calor de la llama,<br>e imbuye los ataques cargados con fuego."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Gran espada celeste",
        desc : "Espada a dos manos congelada por la escarcha.<br><br>Aunque es pesada, tiene una gran defensa de<br>armas y ajuste de voluntad.<br><br>Esta espada escarchada contiene un poder<br>congelador absoluto, lo que imbuye sus ataques<br>cargados con hielo."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Alabarda Matarreinas",
        desc : "Arma de asta fabricada en masa para los<br>resucitados en la Operación Matarreinas.<br>Potente y fácil de usar, los que se<br>enfrentaban a los gigantes Perdidos fueron<br>los primeros en recibir nuevos modelos."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "Arma de asta larga fabricada en masa por el<br>gobierno provisional. El diseño de la punta<br>indica su eficacia al blandirla con fuerza<br>suficiente. Las armas del gobierno<br>provisional están construidas con la defensa<br>civil en mente, por lo que a pesar de su<br>aspecto simple y sus materiales comunes,<br>son totalmente capaces de destruir Perdidos."
      },
      
      C2 : {
        name : "Empaladora",
        desc : "Lanza delgada de punta afilada. Su longitud<br>supera la altura media de las personas, pero<br>es lo bastante ligera como para ejecutar<br>estocadas rápidas. Fue forjada por unos<br>excéntricos ingenieros cuyos productos<br>resultaban muy poco prácticos, excepto esta<br>arma, que no fue más que un capricho."
      },
      
      C3 : {
        name : "Cercenadora granate",
        desc : "Arma de asta solemne en tonos rojo y plata que recibe<br>su nombre de una gema roja. Incorpora un diminuto<br>activador de dones que  lanza cuchillas al blandirla.<br>La fabricó una secta de resucitados que se consideran<br>la nueva nobleza y es muy funcional a pesar de su aspecto ostentoso."
      },
      
      C4 : {
        name : "Dammerung ",
        desc : "Arma de asta utilizada por la inocente Io.<br>Ha sido personalizada por Murasame para<br>activar un don que confiere al portador<br>protección adicional al blandirla. Mientras<br>forjas tu destino, ¿hallarás tu propio<br>pasado o soñarás con crear un futuro<br>con tus amigos?"
      },
      
      C5 : {
        name : "Alabarda negra",
        desc : "Arma de asta de filo azabache.<br>Su gran punta en forma de guadaña se diseñó<br>para segar las cabezas de los Perdidos.<br>A los Cazadores de Negro les resulta<br>indiferente el peso de sus armas, y<br>persiguen la potencia por encima de todo; de<br>modo que, para blandir el arma, se requiere<br>mucha práctica."
      },
      
      C6 : {
        name : "Hoz de asesino",
        desc : "Instrumento de un ejecutor que habitaba en<br>el Foso Aullante. Incorpora un activador de<br>dones que produce líquido y dispara columnas<br>de agua al blandirla. El Perdido que la usaba<br>quedó reducido a cenizas, pero su poder se<br>conservó y transmitió al siguiente portador,<br>en un último intento de supervivencia."
      },
      
      C7 : {
        name : "Alabarda del atardecer",
        desc : "Una alabarda Matarreinas retorcida<br>y corroída por el miasma.<br>Ni siquiera la materia inorgánica es inmune<br>a la corrupción de la Reina, que ha<br>deslustrado el brillo negro de esta arma y<br>ha alterado sus propiedades. Aunque nadie la<br>empuñaría sin vacilar, su efectividad<br>es innegable."
      },
      
      C8 : {
        name : "Bardiche de Perdido",
        desc : "Arma de asta empleada por los resucitados<br>caídos que se unieron a los Perdidos.<br>El tiempo expuesta al miasma ha alterado<br>sus propiedades. Se fabricó para aniquilar<br>a los Perdidos, pero más adelante se<br>alimentó de la sangre de los resucitados.<br>Ironías así son el pan de cada día en el<br>mundo de Vein."
      },
      
      C9 : {
        name : "Hacha destructora",
        desc : "Arma destructiva antaño empuñada por un<br>miembro de Cerbero muy fuerte.<br>Su forma cambió cuando su portador se<br>convirtió en un Perdido y le concedió un<br>temible poder que le permite abrirse paso<br>por las defensas y despedazar a los enemigos."
      },
      
      C10 : {
        name : "Hacha larga lobo argenta",
        desc : "Arma de asta plateada empleada por la Unidad<br>de Seguridad Cerbero. Esta formidable arma<br>emite un aura de autoridad. Cerbero es una<br>fuerza de élite bien entrenada que surgió<br>tras la Operación Matarreinas, y su equipamiento<br>demuestra su valor en manos expertas."
      },
      
      C11 : {
        name : "Lanza cerúlea",
        desc : "Alabarda de diseño similar a una lanza<br>empuñada por un devorador de dioses<br>que albergaba profundas aspiraciones.<br>Al blandirla con toda su energía, surge<br>una hoja de don de la punta, lo que<br>aumenta el alcance del atacante. Esta<br>elegante arma azul ha desgarrado dioses,<br>así que reducirá a los Perdidos a cenizas."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Alabarda nube de sangre",
        desc : "Un hacha de batalla congelada por la escarcha.<br><br>Equilibra su bajo poder de ataque con un peso<br>liviano y gran ajuste de fuerza.<br><br>El frío incesante contenido en su interior imbuye<br>sus ataques cargados con hielo."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Rayo Brionac",
        desc : "Alabarda galvanizada por el rayo.<br><br>Aunque su poder de ataque y su defensa de armas<br>son bajos, es ligera y aumenta el icor.<br><br>La hoja eléctrica está teñida de una luz azulada<br>que imbuye sus ataques cargados con relámpagos."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Martillo Matarreinas",
        desc : "Almádena fabricada en masa para los<br>resucitados en la Operación Matarreinas.<br>Diseñada para fracturar las extremidades<br>de la Reina, su potencia dificulta su uso,<br>por lo que requiere mucho entrenamiento."
      },
      
      D1 : {
        name : "Martillo de esclavitud",
        desc : "Un arma simple similar a un garrote. Es una<br>empuñadura con un bloque de cemento en la<br>la parte superior. Apenas se considera<br>un arma para resucitados. La utilizan<br>principalmente los resucitados subyugados<br>y proporciona un débil destello de<br>esperanza en combate."
      },
      
      D2 : {
        name : "Almádena juggernaut",
        desc : "Gran martillo utilizado por Oliver, que<br>sucumbió a la sed y se unió a los Perdidos.<br>A pesar de su falta de mantenimiento, aún<br>funciona a la perfección como arma y<br>conserva todo el poder que albergaba durante<br>la Operación Matarreinas. Regalado porque se<br>creía inservible, proporcionó un rayo de<br>esperanza al esclavo que lo recibió."
      },
      
      D3 : {
        name : "Hacha pesada",
        desc : "Arma de asta larga fabricada en masa por el<br>gobierno provisional. Su gruesa hoja no está<br>pensada para ataques precisos, pero ejecuta<br>tajos muy contundentes. Fue diseñada para<br>aniquilar gigantes Perdidos, pero la escasez<br>de herramientas en el duro mundo de Vein<br>supuso que también se usara para demoler<br>viejos edificios y retirar vegetación."
      },
      
      D4 : {
        name : "Ancla de impulso",
        desc : "Martillo mecánico muy resistente. Incorpora<br>un activador de dones que emite oleadas de<br>calor desde su puerto de escape, aumentando<br>su poder devastador. Al golpear el suelo, se<br>produce un gran temblor. Es la obra maestra<br>de un grupo de ingenieros medio perturbados,<br>y algunos resucitados han hecho de él un<br>compañero inseparable."
      },
      
      D5 : {
        name : "Martillo descomunal",
        desc : "Martillo gigantesco usado por los Perdidos<br>que aumentaron de tamaño tras la exposición<br>al miasma. El miasma fortaleció su cara<br>y un golpe potente podría aplastar cualquier<br>defensa. No pocos esclavos resucitados<br>enviados en busca de perlas de sangre<br>acabaron sufriendo tan terrible<br>transformación y usando estas armas."
      },
      
      D6 : {
        name : "Martillo lobo argenta",
        desc : "Martillo de guerra plateado empleado por la<br>Unidad de Seguridad Cerbero. Su centro de<br>gravedad está ubicado en un punto que<br>permite al usuario blandir el arma con<br>libertad a pesar de su tamaño. Cerbero es<br>una fuerza de élite bien entrenada que<br>surgió tras la Operación Matarreinas, y su<br>equipo demuestra su valor en manos expertas."
      },
      
      D7 : {
        name : "Labrys de tirano",
        desc : "Un hacha doble que emite un apagado<br>fulgor dorado. Es más pesada incluso<br>de lo que parece y solo los más fuertes<br>pueden blandirla de manera efectiva.<br>El mango y la hoja brillantes no son de oro,<br>sino falsificaciones creadas con el<br>nacimiento de un tirano."
      },
      
      D8 : {
        name : "Martillo del atardecer",
        desc : "Un martillo Matarreinas retorcido<br>y corroído por el miasma.<br>Ni siquiera la materia inorgánica es inmune<br>a la corrupción de la Reina, que ha<br>deslustrado el brillo negro de esta arma y<br>ha alterado sus propiedades. Aunque nadie la<br>empuñaría sin vacilar, su efectividad<br>es innegable."
      },
      
      D9 : {
        name : "Martillo ardiente",
        desc : "Martillo de guerra combado por la prolongada<br>exposición a las llamas, que lo han<br>transformado en una bola de demolición que<br>machaca carne y huesos por igual. Además, su<br>fúnebre calor puede llegar incluso a<br>reducirlo todo a cenizas."
      },
      
      D10 : {
        name : "Hacha pesada de Perdido",
        desc : "Hacha empleada por los resucitados<br>caídos que se unieron a los Perdidos.<br>El tiempo expuesta al miasma ha alterado<br>sus propiedades. Se fabricó para aniquilar<br>a los Perdidos, pero más adelante se<br>alimentó de la sangre de los resucitados.<br>Ironías así son el pan de cada día en el<br>mundo de Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Martillo infernal",
        desc : "Martillo de guerra abrasado por el fuego infernal.<br><br>Su ajuste de destreza es especialmente alto, lo que<br>mejora mucho el poder de los ataques físicosy el<br>nivel de drenaje.<br><br>La llama infernal atrapada en el metal arde como el<br>primer día e imbuye los ataques cargados con fuego."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Ventisca Sharur",
        desc : "Un martillo de guerra congelado por la escarcha.<br><br>Sus especialidades son la defensa y el ajuste de<br>fuerza; además, tiene un peso más ligero.<br><br>Esta arma aloja el gélido frío del cero absoluto,<br>lo que imbuye sus ataques cargados con hielo."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Bayoneta Matarreinas",
        desc : "Bayoneta fabricada en masa para los<br>resucitados en la Operación Matarreinas.<br>Su generador de don permite ejecutar<br>ataques a larga distancia, lo que la hace<br>popular entre los detractores del cuerpo<br>a cuerpo."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "La bayoneta que Mia tiene siempre a mano.<br>Ha sido aligerada y personalizada para que<br>hasta el más pequeño usuario pueda usarla<br>fácilmente. Las muescas y los arañazos de su<br>superficie cuentan las historias de cómo<br>protegió dos importantes vidas. Recibió el<br>nombre de una flor en señal de agradecimiento."
      },
      
      E2 : {
        name : "Antidisturbios",
        desc : "Bayoneta construida a partir de piezas de<br>armas y material de desecho.<br>A pesar de su aspecto tosco, su activador de<br>dones funciona muy bien y ejecuta ataques en<br>cadena a la perfección.<br>Se trata de un arma muy utilizada por los<br>proscritos y suele tener como objetivo a<br>aquellos que alardean de sus riquezas."
      },
      
      E3 : {
        name : "Bayoneta",
        desc : "Bayoneta de filo serrado fabricada en masa<br>por el gobierno provisional.<br>Su activador de dones lanza ráfagas de corto<br>alcance capaces de cubrir una zona.<br>Muchos resucitados carecen de entrenamiento<br>oficial en armas, por lo que se diseñó para<br>que fuera efectiva incluso en manos inexpertas."
      },
      
      E4 : {
        name : "Perforadora rubelita",
        desc : "Bayoneta majestuosa en tonos rojo y plata<br>que debe su nombre a una gema roja.<br>Su cañón largo y elegante lanza proyectiles<br>que persiguen al objetivo.<br>Hay una secta de resucitados que se<br>considera noble y cree que su armamento<br>merece todos los lujos."
      },
      
      E5 : {
        name : "Bayoneta lobo argenta",
        desc : "Bayoneta plateada empleada por la Unidad<br>de Seguridad Cerbero. Los afilados cantos <br>de los lados del cañón fueron diseñados <br>para la carga inicial en los combates a corta <br>distancia. Cerbero es una fuerza de élite bien<br>entrenada que surgió tras la Operación<br>Matarreinas y su equipamiento demuestra<br>su valor en manos expertas."
      },
      
      E6 : {
        name : "Desastre abrasador",
        desc : "Arma del Cañonero, uno de los secuaces de<br>Mido. Incorpora un mecanismo que potencia<br>los dones de fuego y envía mantos de llamas<br>al rojo vivo. Fue construida para un tirador<br>con una gran compatibilidad con dones y<br>permite al usuario ajustar la forma del<br>fuego que despide."
      },
      
      E7 : {
        name : "Bayoneta del atardecer",
        desc : "Una bayoneta Matarreinas retorcida<br>y corroída por el miasma.<br>Ni siquiera la materia inorgánica es inmune<br>a la corrupción de la Reina, que ha<br>deslustrado el brillo negro de esta arma y<br>ha alterado sus propiedades. Aunque nadie la<br>empuñaría sin vacilar, su efectividad<br>es innegable."
      },
      
      E8 : {
        name : "Bayoneta negra",
        desc : "Bayoneta con hoja y cañón de color negro.<br>Su filo curvado puede atravesar hasta la<br>carne más resistente, lo que prepara al<br>enemigo para el potente disparo posterior.<br>A los Cazadores de Negro les resulta<br>indiferente el peso de sus armas, y<br>persiguen la potencia por encima de<br>todo, por lo que se necesita mucha práctica."
      },
      
      E9 : {
        name : "Libertador",
        desc : "Bayoneta utilizada por Eva, Vigilante de la<br>Cripta. Incorpora un activador de dones<br>personalizado que lanza proyectiles de<br>rastreo. Eva recibió esta arma de su<br>compañero Jack, y su increíble potencia<br>demuestra la profunda lealtad que este<br>le profesa."
      },
      
      E10 : {
        name : "Bayoneta de Perdido",
        desc : "Bayoneta empleada por los resucitados<br>caídos que se unieron a los Perdidos.<br>El tiempo expuesta al miasma ha alterado<br>sus propiedades. Se fabricó para aniquilar<br>a los Perdidos, pero más adelante se<br>alimentó de la sangre de los resucitados.<br>Ironías así son el pan de cada día en el<br>mundo de Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Nieve sangrienta",
        desc : "Una bayoneta congelada por la escarcha.<br><br>Contrarresta su bajo poder en ataque y defensa<br>de armas con un peso liviano y un aumento en la<br>obtención de icor.<br><br>Esta arma, llena de un frío profundo, dispara<br>poderosas balas de hielo en una rápida sucesión<br>cuando realiza ataques cargados, mientras que la<br>hoja gana propiedades de hielo."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Rayo",
        desc : "Bayoneta galvanizada por el rayo.<br><br>Es ligera y sus ataques cuerpo a cuerpo<br>infligen bastante daño.<br><br>Una luz azulada y misteriosa reside dentro<br>de esta arma, lo que imbuye la hoja con rayos<br>y convierte sus balas en proyectiles guiados<br>durante los ataques cargados."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Garra nocturna",
        desc : "Velo de sangre de tipo Ogro tradicional<br>para resucitados. Su mecanismo de drenaje <br>es muy eficiente, lo que aumenta la cantidad<br>de icor obtenida al atacar. Este modelo destaca<br>por su forma y su función y es muy apreciado por<br>lo limitado de las existencias."
      },
      
      A1 : {
        name : "Plata noble",
        desc : "Velo de sangre con un manto en forma de<br>alas de murciélago. Las líneas plateadas que<br>indican los huesos contienen sistemas que<br>mejoran los dones de apoyo. Sus creadores<br>hicieron hincapié en el estilo, pero por<br>desgracia, muchos de los resucitados están<br>demasiado preocupados por sobrevivir como<br>para percibirlo."
      },
      
      A2 : {
        name : "Variante GXM",
        desc : "Velo de sangre fabricado con chapa reforzada<br>y tejidos tratados. Protege tanto como<br>parece e incluye funciones que mejoran los<br>dones de apoyo. Fue desarrollado por un<br>antiguo fabricante militar, pero la falta de<br>aleaciones y tejidos sintéticos de Vein hace<br>que pocos resucitados puedan llevarlo."
      },
      
      A3 : {
        name : "Liberador Sangreoscura",
        desc : "Velo de sangre con un manto harapiento.<br>A primera vista parece andrajoso, pero<br>mejora los dones ofensivos y la resistencia<br>a efectos de estado. Se desconoce su<br>creador. Está ajustado para ser sensible,<br>y el mecanismo de transformación del brazo<br>derecho es inestable, lo que requiere<br>refuerzo adicional."
      },
      
      A4 : {
        name : "Garra Matarreinas",
        desc : "Velo de sangre empleado por las fuerzas de<br>la Operación Matarreinas. Mejora todos los<br>dones, pero no es demasiado resistente.<br>Fue diseñado para reducir los costes de<br>producción, por lo que se utilizaron las<br>reservas de trajes tácticos y se añadió la<br>función de drenaje para equipar enseguida<br>a los resucitados y enviarlos al frente."
      },
      
      A5 : {
        name : "Garra venosa",
        desc : "Velo de sangre de tipo ogro obtenido de un<br>resucitado cuya sed lo impulsó a incorporarse<br>a los Perdidos. Probablemente debido a su<br>transformación, tiene menos durabilidad que <br>otros similares, pero lo compensa siendo<br>considerablemente ligero. Los tentáculos<br>reflejan a la perfección el horror de convertirse<br>en un Perdido."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Caballero del desastre",
        desc : "Un velo de sangre raído por el fuego infernal.<br><br>Aunque es una prenda pesada, concede a su<br>portador una alta reducción al daño y ajuste<br>para los dones oscuros.<br><br>No hay registros en la historia de este velo de<br>sangre, pero su misterio sugiere un poder nuevo<br>y posibilidades ocultas en él."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Garra del crepúsculo",
        desc : "Un velo de sangre raído por el rayo.<br><br>Su gran peso se equilibra con una gran reducción<br>del daño y un gran ajuste de la fuerza.<br><br>Los guerreros que han conseguido una gran fuerza<br>siguen buscando el conflicto e intentan alcanzar la<br>cima del poder con este velo."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Lanza nocturna",
        desc : "Velo de sangre de tipo Aguijón de estilo<br>tradicional para los resucitados.<br>Ofrece menos movilidad que los de su clase,<br>pero proporciona una gran defensa ante<br>todo tipo de daño. Este modelo destaca <br>por su forma y su función y es muy apreciado<br>por lo limitado de las existencias."
      },
      
      B1 : {
        name : "Uniforme de cuervo",
        desc : "Velo de sangre de aspecto muy similar a las<br>alas de un cuervo. Como su místico diseño<br>implica, mejora la potencia de los dones<br>ofensivos. En un principio fue creado como<br>prototipo para los velos de sangre nocturnos, <br>sin embargo un cambio en busca del equilibrio<br>supuso que este fuese el único jamás fabricado."
      },
      
      B2 : {
        name : "Manto invernal",
        desc : "Velo de sangre con forma de traje de<br>exploración polar. Entorpece seriamente<br>la movilidad, pero ofrece bastante<br>protección y mejora en gran medida los<br>dones de apoyo. En un principio diseñado<br>para expediciones de montaña en busca<br>de perlas de sangre que resultaron<br>infructuosas, este modelo fue abandonado."
      },
      
      B3 : {
        name : "Atuendo plateado",
        desc : "Velo de sangre con la apariencia de una<br>brillante armadura de caballero. Es muy<br>resistente a los ataques tajantes y<br>penetrantes y fue diseñado por artesanos<br>que pretendían preservar el sentimiento<br>humano de la belleza. Muchos resucitados<br>comparten ese mismo deseo."
      },
      
      B4 : {
        name : "Espina Matarreinas",
        desc : "Velo de sangre empleado por las fuerzas de<br>la Operación Matarreinas. Mejora todos los<br>dones, pero no es demasiado resistente.<br>Los de tipo aguijón se pueden usar a<br>distancia y están bien preparados para la<br>refriega, pero su complicado mecanismo<br>de drenaje evitó la producción en masa."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Prominencia grácil",
        desc : "Un velo de sangre raído por el fuego infernal.<br><br>Sus características especiales incluyen poco peso,<br>ajuste de alta destreza y una gran reducción al daño.<br><br>Este hermoso velo no está diseñado únicamente para<br>ser vistoso, y su elegancia es un reflejo de la búsqueda<br>de poder de su creador."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Sudario helado",
        desc : "Un velo de sangre raído por la escarcha.<br><br>Como contrapunto a su gran peso, es excelente<br>para reducir el daño y ajustar los dones oscuros.<br><br>La apariencia solemne y digna de esta prenda es<br>un reflejo de su voluntad inquebrantable para<br>proteger la vida de los resucitados."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Colmillo nocturno",
        desc : "Velo de sangre de tipo Perro de estilo<br>tradicional. Posee fuertes capacidades <br>defensivas, por lo que resulta fiable en<br>combate. Este modelo destaca por su forma<br>y su función y es muy apreciado por lo<br>limitado de las existencias."
      },
      
      C1 : {
        name : "Perros azules",
        desc : "Velo de sangre de aspecto similar a una<br>chaqueta. No es especialmente resistente<br>a los elementos, pero ofrece un gran nivel<br>de resistencia a los efectos de estado.<br>Su bajo coste y su estilo que combina con<br>todo hacen que sea muy popular entre los<br>resucitados."
      },
      
      C2 : {
        name : "Defensor GXL",
        desc : "Velo de sangre fabricado con chapa reforzada<br>y tejidos tratados. Es resistente como una<br>fortaleza, pero es sorprendentemente<br>vulnerable a los efectos de estado. Lo creó<br>un antiguo fabricante militar, pero la<br>escasez de aleaciones y tejidos sintéticos<br>de Vein hace que pocos resucitados puedan<br>llevarlo."
      },
      
      C3 : {
        name : "Fuerte Erizo",
        desc : "Velo de sangre recubierto de púas metálicas.<br>Protege menos de lo que aparenta, pero<br>aumenta la potencia de los dones ofensivos.<br>Se dice que fue creado por fabricantes del<br>mercado negro. No es tan práctico como la<br>ropa normal, pero su aspecto amenazador<br>consigue sin duda su propósito."
      },
      
      C4 : {
        name : "Ropajes blancos",
        desc : "Velo de sangre similar a una toga monástica.<br>Dificulta un poco el movimiento y ofrece<br>poca protección, pero aumenta en gran<br>medida la eficacia de los dones de apoyo.<br>Solía portarlo una secta de resucitados<br>religiosos, pero un día desaparecieron<br>como por arte de magia."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Equipo violeta",
        desc : "Un velo de sangre raído por el fuego infernal.<br><br>Lo que le falta de ajuste de don lo compensa con<br>su peso increíblemente liviano y su gran ajuste<br>de fuerza.<br><br>Ahora que por fin tienen un peso liviano, los portadores<br>de velos de sangre de tipo Perro serán como bestias<br>salvajes liberadas, destrozando los campos de batalla<br>con imprudente desenfreno."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Colmillo del alba",
        desc : "Un velo de sangre raído por el rayo.<br><br>Aunque pesa, es excelente con la destreza, el ajuste<br>de la mente y está optimizado para los dones de luz.<br><br>Los rumores afirman que el resucitado más fuerte del<br>pasado usó este velo, pero no es posible confirmar la leyenda."
      },
      
      
      // # IVY #
      D0 : {
        name : "Espina nocturna",
        desc : "Velo de sangre de tipo Hiedra de estilo<br>tradicional para resucitados.<br><br>Mejora los efectos de todos los tipos de<br>dones y ofrece defensa ante ataques no físicos.<br><br>Este modelo destaca por su forma y su<br>función y es muy apreciado por lo<br>limitado de las existencias."
      },
      
      D1 : {
        name : "Gracia de marfil",
        desc : "Velo de sangre adornado con plata. A pesar<br>de no ser particularmente protector, aumenta<br>en gran medida la eficacia de los dones.<br>Este objeto busca añadir un toque de belleza<br>al ruinoso mundo de Vein y abraza un sentido<br>de la estética que los resucitados están<br>a punto de perder por completo."
      },
      
      D2 : {
        name : "Asalto GXH",
        desc : "Velo de sangre fabricado a partir de un<br>abrigo con capacidad de drenaje. Ofrece<br>una gran protección sin sacrificar la<br>maniobrabilidad y además mejora los dones<br>ofensivos. Fue desarrollado por un antiguo<br>fabricante militar, pero la escasez de<br>aleaciones y tejidos sintéticos de Vein hizo<br>que pocos resucitados pudieran llevarlo."
      },
      
      D3 : {
        name : "Chal de la oración",
        desc : "Velo de sangre que destaca por su elaborado<br>diseño y su llamativo color rojo.<br>Es sorprendentemente protector y mejora<br>la efectividad de los dones de apoyo.<br>Su dueño original rezaba por la salvación,<br>pero nadie sabe si obtuvo respuesta."
      },
      
      D4 : {
        name : "Espolón suicida",
        desc : "Velo de sangre de aspecto similar a un<br>collar de espinas. Mejora en gran medida<br>la potencia de los dones ofensivos, pero<br>no ofrece casi defensa física. Se dice que<br>su creador era un retorcido ingeniero que<br>creía firmemente que la única defensa de<br>verdad era acabar antes con el enemigo,<br>así que pocos lo usan por voluntad propia."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Espina embrujada",
        desc : "Un velo de sangre raído por la escarcha.<br><br>A pesar de su peso, ofrece reducción del daño y un<br>gran ajuste de destreza.<br><br>Bajo la capucha elegante se oculta la brillante mirada<br>de quien añora el beso de la muerte, el sabor dulce<br>de la sangre fresca."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Espinas maestras",
        desc : "Un velo de sangre raído por el rayo.<br><br>Lo que le falta de ajuste de don lo compensa con<br>su peso liviano y su gran ajuste de destreza y voluntad.<br><br>Se dice que el resucitado que lo lleve sentirá que le<br>han salido alas."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Alivio",
        desc : "Reduce las estadísticas base de un objeto<br>para disminuir su peso."
      },
      
      A1 : {
        name : "Fortificación",
        desc : "Aumenta las estadísticas base de un objeto<br>a la vez que su peso."
      },
      
      A2 : {
        name : "Intensificación",
        desc : "Mejora el ajuste de estadísticas de un<br>objeto. Reduce el ataque del arma/don."
      },
      
      A3 : {
        name : "Dones",
        desc : "Aumenta el poder de ataque en armas y la eficacia<br>de un velo en dones. Reduce el ajuste de estadísticas."
      },
      
      A4 : {
        name : "Devorar",
        desc : "Mejora las propiedades de drenaje del<br>equipo. Reduce el ataque del arma/don."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Fuego",
        desc : "Otorga fuego a un objeto y reduce el<br>ataque del arma/don y las estadísticas."
      },
      
      B1 : {
        name : "Hielo",
        desc : "Otorga hielo a un objeto y reduce el<br>ataque del arma/don y las estadísticas."
      },
      
      B2 : {
        name : "Relámpago",
        desc : "Otorga electricidad a un objeto y reduce el<br>ataque del arma/don y las estadísticas."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Veneno",
        desc : "Crea un objeto que envenena a los enemigos,<br>pero tiene menos propiedades de dones y ataque."
      },
      
      C1 : {
        name : "Aturdimiento",
        desc : "Crea un objeto que aturde a los enemigos,<br>pero tiene menos propiedades de dones y ataque."
      },
      
      C2 : {
        name : "Inhibición",
        desc : "Crea un objeto que inhibe a los enemigos,<br>pero tiene menos propiedades de dones y ataque."
      },
      
      C3 : {
        name : "Lentitud",
        desc : "Crea un objeto que ralentiza a los enemigos,<br>pero tiene menos propiedades de dones y ataque."
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
