// # DEUTSCH TRANSLATION  By 清羽？ or  Qingyu510
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(Keine)',
  
  
  // titles/labels
  weapon : "Waffe",
  blood_veil : "Blutschleier",
  transform : "Umwandeln",
  blood_code : "Blutcode",
  gift_type : "Talent-Typen",
  passive : "Passiv",
  active : "Aktiv",
  options : "Optionen",
  code_owner : "Code-Besitzer",
  origin : "Zugang:",
  companion_rank : "Verdienste als Begleiter",
  rv_mastery : "Wg-Meister",
  exclusive : "Exklusiv",
  dlc : "DLC",
  
  
  // modal
  modal_ok : "Bestätigen",
  modal_close : "Schließen",
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
    initial : "Standard",
    '1h' : "Einhandschwert",
    '2h' : "Zweihandschwert",
    halberd : "Hellebarde",
    hammer : "Hammer",
    bayonet : "Bajonett",
    light_gifts : "Licht Talente",
    dark_gifts : "Dunkel Talente",
    debuff : "Schwächungszauber",
    misc : "Verschiedenes"
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
  status : "Werte",
  lv : "Stufe",
  hp : "LP",
  sta : "Ausdauer",
  ichor : "Ichor",
  str : "Stärke",
  dex : "Geschick",
  mnd : "Verstand",
  wil : "Willenskraft",
  vit : "Vitalität",
  for : "Standhaftigkeit",
  
  
  // weight
  weight : "Gewicht",
  total_weight : "Gesamtgewicht",
  weight_limit : "Max. Gewicht",
  
  
  // attack stats
  attack : "Angriff",
  drain_attack : "Entzugs-Angriff",
  physical : "Physisch", // weapon damage
  base : "Basis", // base damage
  scaling : "Skalierung", // damage from scaling
  drain_rating : "Entzugswert",
  
  
  // defense stats
  defense : "Verteidigung",
  stamina_reduction : "Ausdauer-Reduktion",
  balance : "Gleichgewicht",
  base_balance : "Basis-Gleichgewicht",
  
  
  // resistances
  status_effects : "Statuseffekte",
  resistances : "Widerstandskräfte",
  venom : "Gift",
  stun : "Paralyse",
  inhibit : "Hemmen",
  slow : "Langsam",
  leak : "Leck",
  
  
  // misc menu options
  passive_effect : "Passive Effekte",
  on : "ein",
  off : "aus",
  hint : "Hinweis lesen",
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : "Werte-Skalierung",
  required_stats : "Benötigte Werte",
  
  
  // mobility
  mobility : "Beweglichkeit",
  mobi : {
    base : "Grundbeweglichk.", // label for blood code mobility type (also used in the status display)
    slow : "Langsam",
    normal : "Normal",
    quick : "Schnell"
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : "Baum",
    dark : "Dunkel",
    light : "Licht",
    skill : "Fähigkeit"
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : "Einhandschwert",
  '2h' : "Zweihandschwert",
  halberd : "Hellebarde",
  hammer : "Hammer",
  bayonet : "Bajonett",
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : "Schlitzen",
    crush : "Schmettern",
    pierce : "Durchbohren",
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : "Blut",
    fire : "Feuer",
    ice : "Eis",
    lightning : "Blitz"
  },
  
  
  // gift stats
  gift : "Talent", // singular
  gifts : "Talente", // plural
  
  ichor_cost : "Ichor-Kosten",
  cooldown : "Abklingzeit",
   seconds : "Sek.", // displayed after the cooldown number
  physical : "Angriffstyp",
  elemental : "Nichtphysisch",
  usage_req : "Nutzungsvoraussetz.",
  
  
  // removal (of skills/equipment)
  remove : "Entfernen",
  remove_desc : "Entfernen Sie die aktuell ausgerüstete Fertigkeit oder Ausrüstung.",
  
  
  // equip error
  equip_error : "Dir fehlen die erforderlichen Werte, um eines oder<br>mehrere deiner ausgerüsteten Talente einzusetzen.",
  
  
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
        name : "Königinnen-Schlächter",
        desc : "Dein eigener Blutcode, der vor langer Zeit im Kampf<br>gegen die Königin verloren geglaubt war.<br><br>Die damaligen Gefühle darin berühren dich noch.<br>Dieses Mal musst du für dauerhaften Frieden sorgen.<br><br>Ein gut ausgewogener Code für Erkundung und Nah-<br>kampf mit hohen LP- und Beständigkeitswerten.",
        owner : "Spieler"
      },
      
      A1 : {
        name : "Kämpfer",
        desc : "Der Blutcode eines Kriegers, dessen Schwert größer<br>ist als er selbst.<br><br>Er enthält den Willen von jemandem, der sein Leben<br>in der Operation Königinnen-Schlächter riskiert hat. <br><br>Der Code erhöht die Beständigkeit im Nahkampf. <br>Verstärkt Fähigkeiten, die auf Stärke und Geschick basieren.",
        owner : "Unbekannt"
      },
      
      A2 : {
        name : "Ranger",
        desc : "Der Blutcode eines Wiedergängers, der gewandt über<br>das Schlachtfeld tanzte.<br><br>Enthält den Willen von jemandem, der andere in Angst<br>vor den Verlorenen rettete und der nach Blutperlen<br>suchte, um sie zu teilen.<br><br>Dieser Code ist bestens geeignet, um mit Talenten<br>Unterstützung und Verteidigungsboni zu gewähren.",
        owner : "Unbekannt"
      },
      
      A3 : {
        name : "Zauberwirker",
        desc : "Der Blutcode eines Wiedergängers, der entzogenes Blut<br>in überwältigende Kraft verwandelt.<br><br>Enthält den Willen von jemandem, der geschickt komplexe<br>Talente zur Vernichtung von Verlorenen einsetzte.<br><br>Der Code ist auf mächtige Angriffstalente spezialisiert,<br>die sich aus der Ferne einsetzen lassen.",
        owner : "Unbekannt"
      },
      
      A4 : {
        name : "Berserker",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Enthält den eisernen Willen von jemandem, der<br>für vergangene Taten büßte und sich bis zum Ende durch<br>die Qual des Dursts gekämpft hat, um andere zu retten.<br><br>Der Code bietet hohe Stärke und Beständigkeit. Geringer<br>Ichorvorrat lässt sich mit schwerer Rüstung ausgleichen.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometheus",
        desc : "Ein von Louis erhaltener Blutcode.<br>Er enthält seinen Willen, gestählt durch die Über-<br>windung zahlloser Härten im Namen der Rettung von<br>Wiedergängern.<br><br>Der Code ist gut für den Kampf geeignet, aber etwas<br>fragil. Die Talente helfen beim Ausweichen und Parieren.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Jäger",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Er enthält einen Willen, der voller Hoffnung<br>blieb, trotz der täglichen Höllenqual, die er als<br>Bauernopfer ertragen musste.<br><br>Der Code eignet sich bestens für den Fernkampf und<br>bietet Talente für Fernangriffe mit dem Bajonett.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Merkur",
        desc : "Ein von Coco erhaltener Blutcode.<br>Er enthält ihren Kampfeswillen, der die Furcht<br>vor dem Wahn und Kämpfen verdrängt, um die<br>zerstörte Welt nach Materialien für den Wieder-<br>aufbau der Zivilisation durchsuchen zu können.<br><br>Der Code ermöglicht sichere Erkundung mit<br>ausgewogenen Werten und Talenten, die<br>Ausdauer und Dunst beeinflussen.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermes",
        desc : "Ein von Davis erhaltener Blutcode.<br>Er enthält seinen unerschütterlichen Willen, in-<br>mitten der Verzweiflung einem Funken Hoffnung<br>nachzujagen und sich dafür in Gefahr zu begeben.<br><br>Der Code stellt eine gute Mischung aus Nahkampf-<br>angriffen und etlichen nützlichen Talenten dar.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Dunkelsucher",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Enthält einen verbitterten Willen der Pflicht-<br>erfüllung, der trotz ihres schwindenden Wertes daran<br>festhält.<br><br>Der Code bietet viele Kampftalente, besonders<br>solche, bei denen Gift eine Rolle spielt.",
        owner : "Namenloser Nachfolger"
      },
      
      A10 : {
        name : "Atlas",
        desc : "Ein von Yakumo erhaltener Blutcode.<br>Enthält seine inbrünstige Bereitschaft, sein Leben<br>zum Schutz derer zu riskieren, die ihm wichtig sind.<br><br>Der Code ermöglicht das Tragen schwerer Rüstung<br>und ist daher bestens für Nahkämpfe geeignet.<br>Er bietet auch Talente, die helfen, mächtigen<br>Gefahren zu trotzen.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Assassine",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Enthält einen entschlossenen Willen, in einer<br>chaotischen Welt zu überleben, um Freiheit zu erlangen.<br><br>Der Code ist ideal für den Nahkampf und bietet<br>hervorragende Talente für Überraschungsangriffe.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artemis",
        desc : "Ein von Mia erhaltener Blutcode.<br>Enthält ihren furchtlosen Willen, einem grausamen<br>Schicksal zu entrinnen, um die Leidenden zu befreien.<br><br>Der Code bietet hohe Ausdauer und Angriffs-<br>talente, aber nur geringe Beständigkeit. Gewährt<br>auch Talente, die Entzugsfähigkeiten stärken.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Isis",
        desc : "Ein von Aurora erhaltener Blutcode.<br><br>Enthält ihren resoluten Willen, jene zu verteidigen<br>und zu befreien, die Qualen über sich ergehen ließen,<br>damit Wiedergänger in Frieden leben konnten.<br><br>Der Code ist spezialisiert auf den Fernkampf und<br>auf das Überwältigen von Gegnern mit Ichorangriffen.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Brustkorb der Königin",
        desc : "Ein von Auroras Relikt erhaltener Blutcode mit<br>einem Teil der Kraft der Königin.<br><br>Erzeugt ein verstörendes Gefühl, das von innen nagt,<br>aber gewährt schwindelerregende, durchströmende Kräfte.<br><br>Der Code ist spezialisiert auf Fernangriffe und<br>diverse Angriffstalente, die Gegner überwältigen.",
        owner : "Königin"
      },
      
      A15 : {
        name : "Eos",
        desc : "Ein von Io erhaltener Blutcode.<br><br>Enthält ihren festen Willen, sich zu erheben und<br>eigene Entscheidungen zu treffen, anstatt nur<br>eine Hüterin zu sein.<br><br>Der Code bietet Unterstützungstalente,<br>hohe Beständigkeit und jede Menge Ichor.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "Ein von Nicola erhaltener Blutcode.<br>Enthält seine gutherzige Bereitschaft, die Qualen des<br>Kampfes mit sich selbst zu ertragen, damit die, die er<br>schätzt, in einer friedlicheren Welt leben können.<br><br>Dieser gute Nahkampf-Code bietet hohe Beständigkeit<br>und großes Gesamtgewicht. Solide Rüstung kann den<br>Ichormangel ausgleichen.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Atem der Königin",
        desc : "Ein von Nicolas Relikt erhaltener Blutcode mit<br>einem Teil der Kraft der Königin.<br><br>Erzeugt ein verstörendes Gefühl, das von innen nagt,<br>aber gewährt schwindelerregende, durchströmende Kräfte.<br><br>Der Code ist auf Kampfstile mit verbesserten Talenten<br>spezialisiert. Talente gleichen die niedrigen Werte aus.",
        owner : "Königin"
      },
      
      A18 : {
        name : "Überlebenskämpfer",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Enthält den starken Willen, sein eigenes Leben<br>für die Zukunft einer neuen Generation zu riskieren.<br><br>Der Code ist ganz auf Geschick ausgerichtet und<br>bietet Talente, die im Kampf von Nutzen sind.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Dunkler Ritter",
        desc : "Aus einem reparierten Überrestkern<br>erhaltener Blutcode.<br>Er enthält einen tragischen Willen, der das<br>Objekt unmenschlicher Experimente war,<br>bevor er zu Midos Marionette und schließlich<br>zu einem Verlorenen wurde.<br><br>Der Code setzt den Schwerpunkt auf hohe<br>Beständigkeit und Stärke. Er bietet Talente,<br>die beim Einsatz von Hellebarden helfen.",
        owner : "Miguel Garcia"
      },
      
      A20 : {
        name : "Scathach",
        desc : "Ein von Emily erhaltener Blutcode.<br><br>Enthält ihren starken Willen, der den Platz ihrer<br>schlafenden Kameraden einnahm und sie verteidigte.<br><br>Ein gut ausgewogener Code, der auf Talente und<br>physische Angriffe setzt, besonders Feuertalente.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Klaue der Königin",
        desc : "Ein von Emilys Relikt erhaltener Blutcode mit<br>einem Teil der Kraft der Königin.<br><br>Erzeugt ein verstörendes Gefühl, das von innen nagt,<br>aber gewährt schwindelerregende, durschströmende Kräfte.<br><br>Der Code erlaubt es dir, die Schlacht zu dominieren, indem<br>du Gegner mit Talenten und phys. Angriffen überwältigst.",
        owner : "Königin"
      },
      
      A22 : {
        name : "Harmonia",
        desc : "Ein von Eva erhaltener Blutcode.<br><br>Enthält ihren Willen, sich zu revanchieren und ihr Leben<br>dem zu widmen, der sie aus der Sklaverei befreite.<br><br>Der Code verbessert Fokus-Boni und bietet hervorragende<br>dunkle Talente. Er ist zwar anfällig dafür, ins Wanken<br>zu geraten, stellt aber reichlich Ichor zur Verfügung.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Kehle der Königin",
        desc : "Ein von Evas Relikt erhaltener Blutcode mit<br>einem Teil der Kraft der Königin.<br><br>Erzeugt ein verstörendes Gefühl, das von innen nagt,<br>aber gewährt schwindelerregende, durchströmende Kräfte.<br><br>Der Code ist optimal für den Kampf mit Talenten und<br>bietet viele Unterstützungstalente.",
        owner : "Königin"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "Ein von Jack erhaltener Blutcode.<br><br>Enthält seinen kompromisslosen Willen, alles für die<br>Pflicht zu opfern und das Gleichgewicht zu bewahren.<br><br>Der Code ist spezialisiert auf besonders aggressiven<br>Nahkampf, aber das Maximalgewicht ist äußerst niedrig.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Hephaistos",
        desc : "Ein von Murasame erhaltener Blutcode.<br>Enthält ihren leidenschaftlichen Willen, Verbündete zu<br>unterstützen, die sich in schwierige Kämpfe stürzen,<br>und lächelnd über sie zu wachen, wenn sie heimkehren.<br><br>Der Code setzt auf Waffen, die Geschick erfordern, und<br>nutzt hinterhältige Talente, die mit dem Gegner spielen.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Krieger",
        desc : "Aus einem reparierten Überrestkern erhaltener Blut-<br>code. Enthält den stolzen Willen eines Kriegs-<br>veteranen, der bis zum bitteren Ende kämpfte.<br><br>Der Code ist ideal für Kampfstile, die den<br>Schwerpunkt auf Stärke setzen, und bietet Talente,<br>die beim Überleben helfen.",
        owner : "Murasames Assistent"
      },
      
      A27 : {
        name : "Späher",
        desc : "Aus einem reparierten Überrestkern<br>erhaltener Blutcode. Er enthält den<br>liebenden Willen, seine eigenen Bedürfnisse<br>hintanzustellen und zum Wohle geschätzter<br>Personen zu leben.<br>Dieser Code ist optimal für den Kampf mit<br>Talenten, bietet hohes Entzugspotenzial<br>und gestattet das Tragen leichter Rüstung.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Königin",
        desc : "Ein Blutcode, der durch das Sammeln aller Relikte<br>und der Königinwerdung entstanden ist.<br><br>Der enthaltene Wille zeigt keine Anzeichen von Wut<br>oder Leid. Er besteht aus reiner Einsamkeit.<br><br>Der Code ist spezialisiert auf Talente und bietet<br>einen großen Ichorvorrat, um Gegner zu überwältigen.",
        owner : "Königin"
      },
      
      A29 : {
        name : "Hades",
        desc : "Ein von Silva erhaltener Blutcode.<br>Enthält seinen festen Willen, alles aufzugeben und<br>völlige Isolation zu ertragen, um die Zukunft der<br>Menschheit zu retten.<br><br>Der Code bietet hohe Angriffskraft, die auf Stärke<br>und Geschick basiert, und ist ideal für den Einsatz<br>schwerer Ausrüstung.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Demeter",
        desc : "Ein von Karen erhaltener Blutcode.<br><br>Enthält ihren barmherzigen Willen, sich für die zu<br>opfern, die unter Durst leiden und wegen ihres<br>grausamen Schicksals die Last von Sünden tragen.<br><br>Der Code gestattet dank reichlich Ichor die<br>Unterstützung mit Talenten. Er hat auch hohes,<br>auf Stärke basierendes Schadenspotenzial.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "Aus dem reparierten Überrestkern von Cruz erhaltener<br>Blutcode. Enthält ihren festen Willen vom Beginn des<br>Projekts KÖNIGIN, eine Bedrohung zu beseitigen und die<br>Schwachen zu beschützen.<br><br>Der Code bietet Talente für Angriff und Verteidigung<br>und einzigartige Talente, die Selbstopferung beinhalten.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Vorbote",
        desc : "Der Blutcode von jemandem, dessen Herz vor heimlichem<br>Ehrgeiz kochte und der als Wiedergänger erwachte.<br><br>Erfüllt vom erbarmungslosen Willen, alle anderen mit<br>unheimlicher Stärke zu vernichten und sich einen Namen<br>zu machen in Vein, dem Gefängnis der Nebel.<br><br>Er birgt einzigartige Talente, die nur jene<br>nutzen können, die Entschlossenheit zeigen.",
        owner : "Unbekannt"
      },
      
      A33 : {
        name : "Astrea",
        desc : "Ein Blutcode, der ein Ausdruck von Mias Wunsch<br>nach Glück ist.<br><br>Erfüllt von dem Wunsch, müden Kameraden, die glück-<br>licherweise zurückgekehrt sind, Fürsorge zu spenden.<br><br>Der Code bietet Gleichgewicht und Stabilität im<br>Kampf sowie nützliche Talente für Erkundungen.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asklepios",
        desc : "Aus einem reparierten Überrestkern von Jacks<br>ehemaligem Partner Valerio erhaltener<br>Blutcode mit Ausdauer- und LP-Fokus.<br><br>Enthält den Willen, allen zu<br>helfen und sie zu schützen.<br><br>Eignet sich nicht gut für den<br>direkten Kampf, hohe LP und Ausdauer<br>helfen aber beim Überleben.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Achilles",
        desc : "Aus einem reparierten Überrestkern erhaltener<br>Blutcode mit hohem Geschick und Ausdauer.<br><br>Enthält den eisernen Willen, über<br>unzählige Schlachtfelder zu donnern.<br><br>Seine Ausdauer, leichten Waffen und<br>schnellen Angriff machen bei<br>Angriffen Mann gegen Mann Druck.",
        owner : "Unbekannt"
      },
      
      A36 : {
        name : "Surt",
        desc : "Von einem in den Tiefen eingeschlossenen<br>Schreckenswesen erhaltener Blutcode.<br><br>In ihm flammt ein Inferno und füllt<br>den Körper mit grässlicher Macht,<br>die alle in der Nähe pulverisiert.<br><br>Dank hoher Stärke, Standhaftigkeit und<br>viel Ausdauer sorgt er für dynamische Kämpfe.",
        owner : "Höllenfeuer-Ritter"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pollux",
        desc : "Aus einem reparierten Überrestkern erhaltener Blutcode mit Stärke- und LP-Fokus.<br><br>Enthält den Willen eines gütigen Kriegers, der an der Seite seiner Freunde kämpfte.<br><br>Dieser Code bietet ausgezeichnete Verteidigung gegen feindliche Angriffe, ehe er mit mächtigen Schlägen kontert.",
        owner : "Unbekannt"
      },
      
      A38 : {
        name : "Ymir",
        desc : "Von einem in den Tiefen eingeschlossenen<br>Schreckenswesen erhaltener Blutcode.<br><br>Gefrorene Blüten glänzen in ihm<br>und schärfen das Auge für eine<br>Gelegenheit, alle auf einmal auszulöschen.<br><br>Dank hoher Willenskraft und Vitalität<br>verbessert er LP und Kraft von Dunkelheit-Talenten.",
        owner : "Eis-Kaiserin"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseus",
        desc : "Aus einem reparierten Überrestkern erhaltener<br>Blutcode mit hoher Willenskraft und Verstand.<br><br>Enthält den Willen eines klugen Kriegers,<br>der viele Schlachten überstanden hat.<br><br>Dank starker Talente und viel Ichor vernichtet<br>er einen Gegner nach dem anderen.",
        owner : "Unbekannt"
      },
      
      A40 : {
        name : "Váli",
        desc : "Von einem in den Tiefen eingeschlossenen<br>Schreckenswesen erhaltener Blutcode.<br><br>Sein Donnergrollen ist nicht verstummt und<br>gewährt die Macht, sich beliebig zu<br>stärken und alles vor sich niederzutrampeln.<br><br>Dank hohem Geschick und Verstand<br>eignet er sich für viele Lichttalente, die<br>den Kampf mit Verbesserungen unterstützen.",
        owner : "Fürst des Donners"
      },
      
      A41 : {
        name : "Orion",
        desc : "Aus einem reparierten Überrestkern erhaltener <br>Blutcode mit Willenskraft und Geschick.<br><br>Enthält den Willen eines Schützen, der elegant <br>über das Schlachtfeld tanzte.<br><br>Für den Distanzkampf optimiert; erhöhte Angriffs-<br>stärke von Munition dank hoher Willenskraft.",
        owner : "Unbekannt"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Lebensschub",
        desc : "Erhöht maximale LP."
      },
      
      A1 : {
        name : "Lebensstimulator",
        desc : "Erhöht maximale LP."
      },
      
      A2 : {
        name : "Ausdauerschub",
        desc : "Erhöht die maximale Ausdauer."
      },
      
      A3 : {
        name : "Ausdauerstimulator",
        desc : "Erhöht die maximale Ausdauer."
      },
      
      A4 : {
        name : "Sprinter",
        desc : "Reduziert die beim Sprinten verbrauchte Ausdauer."
      },
      
      A5 : {
        name : "Geschliffene Reißzähne",
        desc : "Erhöht den Schaden, der durch Spezial-Entzug<br>bei Paraden/Angriffen von hinten verursacht wird."
      },
      
      A6 : {
        name : "Unnachgiebiger Reißzahn",
        desc : "Erhöht den durch Entzug verursachten Schaden<br>nach Schleuderangriffen."
      },
      
      A7 : {
        name : "Heroischer Reißzahn",
        desc : "Erhöht den durch aufgeladene Entzugs-Angriffe<br>verursachten Schaden."
      },
      
      A8 : {
        name : "Schnelle Vernichtung",
        desc : "Erhöht den verursachten Schaden im<br>Verhältnis zu deiner Beweglichkeit."
      },
      
      A9 : {
        name : "Überlebenstrieb",
        desc : "Verstärkt Talent-Fähigkeiten, Kraft von Waffen und<br>Entzugs-Angriffen, wenn LP unter bestimmtem Wert."
      },
      
      A10 : {
        name : "Cleveres Ausweichen",
        desc : "Erhöht die durch Ausweichmanöver erhaltene<br>Menge an Fokus."
      },
      
      A11 : {
        name : "Belastbarer Fokus",
        desc : "Erhöht die durch erlittenen Schaden<br>erhaltene Menge an Fokus."
      },
      
      A12 : {
        name : "Waffen-Entzugswert +",
        desc : "Erhöht den Entzugswert von Waffenangriffen."
      },
      
      A13 : {
        name : "Gier",
        desc : "Erhöht die durch Entzugs-Angriffe gewonnene<br>Menge an Ichor."
      },
      
      A14 : {
        name : "Ichor-Schwur",
        desc : "Reduziert die maximalen LP, um den maximalen<br>Ichorvorrat zu erhöhen."
      },
      
      A15 : {
        name : "Max. Ichor-Schub",
        desc : "Erhöht den maximalen Ichorvorrat."
      },
      
      A16 : {
        name : "Erhöhtes Talent-Tempo",
        desc : "Erhöht die Geschwindigkeit deiner Talente."
      },
      
      A17 : {
        name : "Ladungsbeschleuniger",
        desc : "Erhöht die Geschwindigkeit von aufgeladenen<br>Aktionen."
      },
      
      A18 : {
        name : "Schwächenaufbau",
        desc : "Erhöht den Aufbau von Schwächen bei Gegnern."
      },
      
      A19 : {
        name : "Ehrgeiz des Wiedergängers",
        desc : "Ermöglicht es dir, schwerere Waffen und<br>Blutschleier auszurüsten."
      },
      
      A20 : {
        name : "Opportunismus",
        desc : "Erhöht Waffenschaden bei Feinden, die mit<br>Statuseffekten befallen sind."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Rausch des Blutes",
        desc : "Erhöht maximalen Ichor enorm; reduziert <br>Talentkraft und Regenerationsrate der <br>Ausdauer dramatisch."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Gleichgewicht +",
        desc : "Erhöht das Gleichgewicht."
      },
      
      B1 : {
        name : "Geschickte Parade",
        desc : "Regeneriert nach dem Parieren eines<br>Angriffs die Ausdauer vollständig."
      },
      
      B2 : {
        name : "Blocken-Entzugswert +",
        desc : "Erhöht deinen Entzugswert, wenn du einen<br>gegnerischen Angriff blockst."
      },
      
      B3 : {
        name : "Fester Stand",
        desc : "Erleidest du tödlichen Schaden, wenn deine LP über<br>einem bestimmten Wert liegen, überlebst du mit 1 LP.",
        usage_req : "Atlas Blutcodes"
      },
      
      B4 : {
        name : "Blutgreifer",
        desc : "Ausweichen von Angriffen entzieht den Gegnern<br>entsprechend dem Entzugswert deiner Waffe Ichor.",
        usage_req : "Artemis Blutcodes"
      },
      
      B5 : {
        name : "Ausweichschlinge",
        desc : "Das Ausweichen gegnerischer Angriffe erzeugt Projektile,<br>die Ichor verbrauchen und den Gegner angreifen.",
        usage_req : "Hephaistos Blutcodes"
      },
      
      B6 : {
        name : "Giftwiderstand",
        desc : "Erhöht den Giftwiderstand."
      },
      
      B7 : {
        name : "Paralysewiderstand",
        desc : "Erhöht den Paralysewiderstand."
      },
      
      B8 : {
        name : "Hemmwiderstand",
        desc : "Erhöht den Hemmwiderstand."
      },
      
      B9 : {
        name : "Verlangsamungswiderstand",
        desc : "Erhöht den Verlangsamungswiderstand."
      },
      
      B10 : {
        name : "Leck-Widerstand",
        desc : "Erhöht den Leck-Widerstand."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Stärke +",
        desc : "Erhöht Stärke."
      },
      
      C1 : {
        name : "Geschick +",
        desc : "Erhöht Geschick."
      },
      
      C2 : {
        name : "Verstand +",
        desc : "Erhöht Verstand."
      },
      
      C3 : {
        name : "Willenskraft +",
        desc : "Erhöht Willenskraft."
      },
      
      C4 : {
        name : "Vitalität +",
        desc : "Erhöht Vitalität."
      },
      
      C5 : {
        name : "Standhaftigk. +",
        desc : "Erhöht Standhaftigkeit."
      },
      
      C6 : {
        name : "Stärke/Geschick +",
        desc : "Erhöht Stärke und Geschick."
      },
      
      C7 : {
        name : "Stärke/Willenskraft +",
        desc : "Erhöht Stärke und Willenskraft."
      },
      
      C8 : {
        name : "Stärke/Vitalität +",
        desc : "Erhöht Stärke und Vitalität."
      },
      
      C9 : {
        name : "Geschick/Willenskraft +",
        desc : "Erhöht Geschick und Willenskraft."
      },
      
      C10 : {
        name : "Geschick/Standhaftigk. +",
        desc : "Erhöht Geschick und Standhaftigkeit."
      },
      
      C11 : {
        name : "Verstand/Willenskraft +",
        desc : "Erhöht Verstand und Willenskraft."
      },
      
      C12 : {
        name : "Verstand/Vitalität +",
        desc : "Erhöht Verstand und Vitalität."
      },
      
      C13 : {
        name : "Verstand/Standhaftigk. +",
        desc : "Erhöht Verstand und Standhaftigkeit."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Stärke/Standhaftigk. +",
        desc : "Erhöht Stärke und Standhaftigkeit."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Willenskraft/Vitalität +",
        desc : "Erhöht Willenskraft und Vitalität."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Geschick/Verstand +",
        desc : "Erhöht Geschick und Verstand."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span> Dunkler Impuls',
        desc : "Erhöht die Wirkung von dunklen Talenten,<br>während du fokussiert bist."
      },
      
      D1 : {
        name : '<span style="font-family:GEZFont;"></span> Licht-Impuls',
        desc : "Erhöht die Wirkung von Licht-Talenten,<br>während du fokussiert bist."
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span> Blockstabilität',
        desc : "Reduziert die verbrauchte Ausdauer beim Blocken,<br>während du fokussiert bist."
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span> Fokuss. Block',
        desc : "Erhöht die Waffenverteidigung gegen physische<br>Angriffe, während du fokussiert bist."
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span> Fokuss. Ausdauerverbrauch',
        desc : "Reduziert die verbrauchte Ausdauer, während<br>du fokussiert bist."
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span> Aufrechterhaltener Fokus',
        desc : "Reduziert die Rate, mit der die Fokus-Leiste<br>verbraucht wird, während du fokussiert bist."
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span> Fokuss. Blutbad',
        desc : "Reduziert die Rate, mit der die Fokus-Leiste bei Angriffen<br>verbraucht wird, während du fokussiert bist."
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor-Angriff',
        desc : "Reduziert die Ichor-Kosten von Waffenangriffen,<br>während du fokussiert bist."
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor-Reduktion',
        desc : "Reduziert den Verbrauch von Ichor, während<br>du fokussiert bist.",
        usage_req : "Kehle der Königin Blutcodes"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span> Entzugsschub',
        desc : "Erhöht alle Entzugswerte, während du<br>fokussiert bist."
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span> Fokuss. Talent-Tempo',
        desc : "Erhöht die Geschwindigkeit deiner Talente,<br>während du fokussiert bist."
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span> Blut-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Blut-Effekt<br>aus, während du fokussiert bist."
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span> Feuer-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Feuer-Effekt<br>aus, während du fokussiert bist."
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span> Eis-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Eis-Effekt<br>aus, während du fokussiert bist."
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span> Blitz-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Blitz-Effekt<br>aus, während du fokussiert bist."
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span> Gift-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Gift-Effekt<br>aus, während du fokussiert bist."
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span> Paralyse-Verstärkung',
        desc : "Stattet deine aktuelle Waffe mit dem Paralyse-<br>Effekt aus, während du fokussiert bist."
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span> Lächeln der Göttin',
        desc : "Regeneriert LP, wenn du in einen<br>fokussierten Zustand übergehst."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor-Fokus',
        desc : "Regeneriert Ichor, wenn du in<br>einen fokussierten Zustand übergehst."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : '<span style="font-family:GEZFont;"></span> Alle Werte +',
        desc : "Erhöht alle Werte, während du<br>fokussiert bist."
      },
      
      D20 : {
        name : '<span style="font-family:GEZFont;"></span> Voller Stopp',
        desc : "Gegner verlieren mehr Gleichgewicht durch <br>deine Bajonettschüsse, während du fokussiert <br>bist."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "Einhandschwertmeister",
        desc : "Erhöht die Angriffskraft, wenn ein<br>Einhandschwert ausgerüstet wurde."
      },
      
      E1 : {
        name : "Zweihandschwertmeister",
        desc : "Erhöht die Angriffskraft, wenn ein<br>Zweihandschwert ausgerüstet wurde."
      },
      
      E2 : {
        name : "Hellebardenmeister",
        desc : "Erhöht die Angriffskraft, wenn eine<br>Hellebarde ausgerüstet wurde."
      },
      
      E3 : {
        name : "Hammermeister",
        desc : "Erhöht die Angriffskraft, wenn ein<br>Großhammer ausgerüstet wurde."
      },
      
      E4 : {
        name : "Bajonettmeister",
        desc : "Erhöht die Angriffskraft, wenn ein Bajonett<br>ausgerüstet wurde."
      },


      // # MISC #
      F0 : {
        name : "Regenerationswandel",
        desc : "Reduziert die Anzahl der möglichen Einsätze von<br>Regeneration, aber erhöht die regenerierte Menge."
      },
      
      F1 : {
        name : "Verbesserte Regeneration",
        desc : "Erhöht die durch Regenerationsfähigkeit<br>wiederhergestellten LP."
      },
      
      F2 : {
        name : "Erweiterte Regeneration",
        desc : "Erhöht die Anzahl der möglichen Einsätze von<br>Regeneration."
      },
      
      F3 : {
        name : "Fackelträger",
        desc : "Stellt Regeneneration wieder her, wenn die LP<br>deines Partners auf null fallen und er sich auflöst.",
        usage_req : "Astrea Blutcodes"
      },
      
      F4 : {
        name : "Lebensraub",
        desc : "Stellt nach dem Besiegen von Gegnern LP<br>wieder her."
      },
      
      F5 : {
        name : "Regenerierender Entzug",
        desc : "Entzugs-Angriffe regenerieren LP."
      },
      
      F6 : {
        name : "Ewiger Klingentanz",
        desc : "Eine verbesserte Version von Klingentanz, die die Angriffs-<br>kraft erhöht, wenn du gegnerischen Angriffen ausweichst.",
        usage_req : "Prometheus Blutcodes"
      },
      
      F7 : {
        name : "Blutraubendes Gift",
        desc : "Erhalte Ichor, wenn Gegner innerhalb eines<br>bestimmten Radius Schaden durch Gift erleiden.",
        usage_req : "Dunkelsucher Blutcodes"
      },
      
      F8 : {
        name : "Hunger des Wiedergängers",
        desc : "Erhöht die durch das Besiegen von Gegnern<br>erhaltene Menge an Dunst."
      },
      
      F9 : {
        name : "Gier des Wiedergängers",
        desc : "Erhöht die Wahrscheinlichkeit, dass besiegte<br>Gegner Gegenstände hinterlassen."
      },
      
      F10 : {
        name : "Führung des Pioniers",
        desc : "Erleichtert das Meistern von Talenten."
      },
      
      F11 : {
        name : "Fallschadenreduzierung",
        desc : "Reduziert den durch Herunterfallen<br>erlittenen Schaden."
      },
      
      F12 : {
        name : "Errettung",
        desc : "Erleidet ein Verbündeter tödlichen Schaden, fallen<br>seine LP auf 1. Du nimmst den restlichen Schaden.<br><br>Dieser Effekt tritt nur ein, wenn du 2 oder mehr LP<br>hast. Der erlittene Schaden kann deine LP nicht<br>auf 0 reduzieren.",
        usage_req : "Ishtar Blutcodes"
      },
      
      F13 : {
        name : "Unermüdlichkeit",
        desc : "Erhöht die Regenerationsrate deiner<br>Ausdauer."
      },
      
      F14 : {
        name : "Polster",
        desc : "Erhöht Regeneration beim Sammeln verlorenen<br>Dunstes nach der Streuung."
      },
      
      F15 : {
        name : "Wiedergängerdolch",
        desc : "Wirft ein Messer, das Ichor gewährt, wenn es<br>einen Widersacher trifft."
      },
      
      F16 : {
        name : "Komplette Aufmerksamkeit",
        desc : "Ein Treffer mit einem aufgeladenen Entzug<br>gewährt Fokus."
      },
      
      F17 : {
        name : "Charisma",
        desc : "Erhöht die Werte deines Partners (gilt nicht für Spieler)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Schallpfeil",
        desc : "Feuert ein aus Ichor erschaffenes Geschoss ab.<br><br>Eine einzelne Salve ist nicht sehr beeindruckend,<br>aber es zeigt seinen Wert gegen Gruppen von Gegnern."
      },
      
      A1 : {
        name : "Blutschuss",
        desc : "Feuert ein aus der Kraft des Blutes erschaffenes,<br>großes Geschoss ab.<br><br>Diese verbesserte Version des Blutpfeils hat weit<br>größere Wirkung."
      },
      
      A2 : {
        name : "Blutgebrüll",
        desc : "Erzeugt ein Projektil aus verseuchtem Blut,<br>das auf das Ziel zufliegt.<br><br>Ein direkter Treffer zerfetzt Fleisch und<br>führt zu einer tiefen Wunde, die dem Opfer<br>kontinuierlich große Schmerzen bereitet."
      },
      
      A3 : {
        name : "Feuriges Gebrüll",
        desc : "Schießt eine starke Flamme auf das Ziel.<br><br>Es heißt, dass die von diesem Angriff Getroffenen<br>vollständig verbrannt werden, sodass sie nur einen<br>Schatten hinterlassen."
      },
      
      A4 : {
        name : "Frostgebrüll",
        desc : "Feuert ein Projektil aus frostigem Eis auf das Ziel.<br><br>Ein direkter Treffer entzieht dem Opfer Wärme,<br>unterdrückt seine Gedanken und schränkt seine<br>Urteilskraft ein."
      },
      
      A5 : {
        name : "Plasmagebrüll",
        desc : "Erzeugt einen Elektrizitätsschub, der auf<br>das Ziel zufliegt. <br><br>Ein direkter Treffer lässt das Blut des Opfers<br>kochen und führt zu starken Schmerzen."
      },
      
      A6 : {
        name : "Blutspitze",
        desc : "Feuert ein Projektil aus durchbohrendem<br>Ichor auf dein Ziel.<br><br>Die erzeugte Kraft ist hochkonzentriert und<br>schmettert wie eine Kanonenkugel durch<br>die Gegner."
      },
      
      A7 : {
        name : "Flammenspitze",
        desc : "Feuert ein Projektil aus brennenden Flammen<br>auf dein Ziel.<br><br>Die erzeugte Kraft ist hochkonzentriert und<br>schmettert wie eine Kanonenkugel durch<br>die Gegner."
      },
      
      A8 : {
        name : "Frostspitze",
        desc : "Feuert ein Projektil aus frostigem Eis auf das Ziel.<br><br>Die erzeugte Kraft ist hochkonzentriert und<br>schmettert wie eine Kanonenkugel durch die Gegner."
      },
      
      A9 : {
        name : "Blitzspitze",
        desc : "Feuert ein Projektil aus knisternder<br>Elektrizität auf dein Ziel.<br><br>Die erzeugte Kraft ist hochkonzentriert und<br>schmettert wie eine Kanonenkugel durch<br>die Gegner."
      },
      
      A10 : {
        name : "Blutsalve",
        desc : "Verschießt eine Reihe Blutgeschosse, die<br>Gegner in einem weiten Bereich bombardieren.<br>Diese Fähigkeit ist nicht sehr stark, doch<br>der schnelle Dauerbeschuss lässt sie als<br>ideales Sperrfeuer wirken."
      },
      
      A11 : {
        name : "Flammensalve",
        desc : "Verschießt eine Reihe Feuergeschosse, die<br>Gegner in einem weiten Bereich bombardieren.<br>Diese Fähigkeit ist nicht sehr stark, doch<br>der schnelle Dauerbeschuss lässt sie als<br>ideales Sperrfeuer wirken."
      },
      
      A12 : {
        name : "Eissalve",
        desc : "Verschießt eine Reihe eisiger Geschosse, die<br>Gegner in einem weiten Bereich bombardieren.<br>Diese Fähigkeit ist nicht sehr stark, doch<br>der schnelle Dauerbeschuss lässt sie als<br>ideales Sperrfeuer wirken."
      },
      
      A13 : {
        name : "Blitzsalve",
        desc : "Verschießt eine Reihe Elektrogeschosse, die<br>Gegner in einem weiten Bereich bombardieren.<br>Diese Fähigkeit ist nicht sehr stark, doch<br>der schnelle Dauerbeschuss lässt sie als<br>ideales Sperrfeuer wirken."
      },
      
      A14 : {
        name : "Vodnikmasse",
        desc : "Stößt konzentriertes Blut aus, um Gegner zu<br>vernichten.<br><br>Das verfluchte Blut der Toten verdammt seine<br>Opfer zu Höllenqualen."
      },
      
      A15 : {
        name : "Walpurgisfeuer",
        desc : "Nutzt genaue Kontrolle über den Blutfluss,<br>um ein heftiges Feuer zu entfesseln.<br>Wiedergänger, die der eigenen Kraft nicht<br>vertrauen, sollten keine fortgeschrittenen<br>Techniken einsetzen. Die geballte Energie<br>kann über den unbedarften Nutzer<br>hereinbrechen und ihn vernichten."
      },
      
      A16 : {
        name : "Baba Yagas Blick",
        desc : "Nutzt genaue Kontrolle über den Blutfluss,<br>um eine heftige Kältewelle zu entfesseln.<br>Wird jemand zerstreut, während ein Teil<br>seines Körpers eingefroren ist, kann er<br>diesen Teil nicht regenerieren, bis er<br>auftaut. Diese Schwachstelle wird manchmal<br>bei Verhören eingesetzt."
      },
      
      A17 : {
        name : "Perkunas' Zorn",
        desc : "Nutzt genaue Kontrolle über den Blutfluss,<br>um einen starken Elektroschock zu<br>entfesseln. Nur der Tod rettet vor dem Zorn<br>eines wütenden Gottes."
      },
      
      A18 : {
        name : "Dämmerungsklinge",
        desc : "Verwendet Ichor, um eine Klinge aus Blut zu erschaffen<br>und sie in einem Bogen durch Gegner vor dir zu schwingen.<br><br>Eine Linie aus Blut zeichnet sich am Dämmerungshimmel<br>ab und wird zu einer tödlichen Klinge, die Angreifer<br>vernichtet."
      },
      
      A19 : {
        name : "Blutroter Mond",
        desc : "Nutzt Ichor, um eine lodernde Klinge zu erschaffen und<br>sie in einem Bogen durch Gegner vor dir zu schwingen.<br><br>Am Nachthimmel hängt ein unheilverheißender roter Mond.<br>Jeder, der davon Zeuge wird, soll von großem Unglück <br>heimgesucht werden."
      },
      
      A20 : {
        name : "Polarlichtblitz",
        desc : "Nutzt Ichor, um eine frostige Klinge zu erschaffen und<br>sie in einem Bogen durch Gegner vor dir zu schwingen.<br><br>Eine Linie aus Blut in der Luft wird zu einem Schwert aus<br>Eis. Das Licht tanzt darauf gleich einem Prisma und lenkt<br>die Feinde ab, mit deren Blut es sobald befleckt sein wird."
      },
      
      A21 : {
        name : "Jupiters Klinge",
        desc : "Verwendet Ichor, um eine Klinge aus Blitzen zu<br>erschaffen und sie in einem Bogen durch Gegner<br>vor dir zu schwingen.<br><br>Wenn das Opfer die Augen öffnet, nachdem das Licht es<br>geblendet hat, merkt es, dass es bereits tot ist."
      },
      
      A22 : {
        name : "Hinrichtung",
        desc : "Erzeugt ein riesiges Schwert aus deinem unbeugsamen<br>Willen, das wie eine Guillotine auf den Gegner fällt.<br><br>Die damit Konfrontierten erkennen eine unleugbare<br>Wahrheit. Es hinzunehmen wäre einfacher, als<br>weiter dagegen anzukämpfen."
      },
      
      A23 : {
        name : "Feuersturm",
        desc : "Schießt eine Serie von Flammenprojektilen,<br>die den Gegner ins Wanken bringen.<br><br>Eine einzelne Kugel hat wenig Kraft, aber die große<br>Anzahl überwältigt selbst den robustesten Gegner."
      },
      
      A24 : {
        name : "Sprengblitz",
        desc : "Erzeugt und feuert eine Salve von elektrisch<br>geladenen Projektilen auf das Ziel.<br><br>Der leuchtende Blitz gräbt sich in die Erde<br>und keine Rüstung kann ihn davon abhalten,<br>bis in die Knochen vorzudringen."
      },
      
      A25 : {
        name : "Ehrengarde",
        desc : "Erzeugt eine Reihe von Eissäulen, die das Ziel<br>unerbittlich bombardieren.<br><br>Wenn eine Seite wiederholt mit einer einzelnen<br>Aktion angreifen kann und die andere Seite<br>konstant ausweichen muss, steht der Gewinner<br>bereits fest."
      },
      
      A26 : {
        name : "Tanzendes Feuer",
        desc : "Feuert eine abprallende Kugel.<br><br>Es ist nicht vorhersehbar, in welche Richtung<br>eine Kugel abprallt, aber sie kann dabei<br>helfen, unberechenbare Gegner zu treffen."
      },
      
      A27 : {
        name : "Drachenpfahl",
        desc : "Verwandelt dein Blut in einen riesigen Pfahl,<br>der das Ziel durchbohrt.<br><br>Diese Technik ist sowohl schnell als auch kraft-<br>voll. Es heißt, die damit Durchbohrten landen<br>direkt im Feuer der Unterwelt."
      },
      
      A28 : {
        name : "Indraspule",
        desc : "Feuert drei mächtige Blitze auf die Füße<br>des Ziels.<br><br>Diese Technik verdampft bei einem direkten<br>Treffer augenblicklich das Blut des Gegners,<br>der dadurch von innen explodiert."
      },
      
      A29 : {
        name : "Vierfaches Urteil",
        desc : "Schießt ein unerbittliches Trommelfeuer aus<br>Blitzkugeln auf das Ziel.<br><br>Die in göttlichen Augen für schuldig Befundenen<br>können ihrer Bestrafung nicht entgehen. Dieses<br>Talent kann erst wieder benutzt werden, wenn der<br>heilige Zorn nachgelassen hat."
      },
      
      A30 : {
        name : "Ältestenvertrag",
        desc : "Schießt gebündeltes Blut in den Boden, das als<br>Blutsäule unter deinem Ziel hervorschießt.<br>Dieses mächtige Talent ist schwer zu<br>erlernen, aber bei richtiger Anwendung ist<br>es ein wertvoller Verbündeter."
      },
      
      A31 : {
        name : "Ichor-Eis",
        desc : "Bündelt Ichor und wandelt ihn in mächtige<br>Eissplitter um, die einen Gegner beschießen.<br><br>Der hohe Energieverbrauch dieses Talents ist<br>eine große Belastung für den Wiedergänger,<br>der es nutzt, und ist nur mit einem Relikt<br>als Katalysator zu bewältigen."
      },
      
      A32 : {
        name : "Dämmerung",
        desc : "Feuert einen breiten Laser ab, der alles vor<br>dir durchbohrt.<br><br>Wenn das Licht erlischt, bleibt nicht mal ein<br>Staubkorn zurück. Alles wurde aufgelöst.",
        usage_req : "Brustkorb der Königin Blutcodes"
      },
      
      A33 : {
        name : "Feuerlilie",
        desc : "Verschießt eine flinke Klinge. Kurz nachdem sie<br>sich in ihr Ziel gebohrt hat, detoniert sie.<br><br>Diese Technik eignet sich nicht nur für Feinde.<br>Erfahrene Nutzer schießen Klingen in Wände oder<br>den Boden, um sie als Fallen einzusetzen."
      },
      
      A34 : {
        name : "Sandklinge",
        desc : "Erzeugt eine Klinge aus unter Hochdruck stehendem<br>Sand aus dem Boden, die Feinde wegstößt.<br><br>Diese außergewöhnliche Technik erodiert den<br>Untergrund mit Ichor und erzeugt eine Klinge aus<br>sandartigen Teilchen. Da es sehr schwierig ist,<br>Substanzen schnell umzuwandeln, ist großes Können<br>erforderlich, um dieses Talent zu nutzen."
      },
      
      A35 : {
        name : "Explosiver Sturm",
        desc : "Erzeugt Klingen aus Sand, die im Ziel<br>zusammentreffen und explodieren.<br><br>Die riesige Explosion wird ausgelöst, indem<br>aus verschiedenen Richtungen Druck auf<br>denselben Punkt ausgeübt wird. Einem<br>solchen Sandsturm zu entkommen, ist,<br>gelinde gesagt, extrem schwierig."
      },
      
      A36 : {
        name : "Arm von Set",
        desc : "Erzeugt einen Arm aus Sand um die Füße des Ziels,<br>der den Gegner unbarmherzig zermalmt.<br><br>Aus dieser Sandfalle gibt es kein Entrinnen;<br>die vielen Schichten komprimierten Sandes<br>sind härter als Stahl und unzerstörbar."
      },
      
      A37 : {
        name : "Sand der Verderbnis",
        desc : "Erzeugt einen gigantischen Sandsturm um<br>dein Ziel herum.<br><br>Veteranen des Schlachtfelds wissen, dass man<br>nie unachtsam sein darf, denn man weiß nie,<br>welch blutdürstiges Wesen gerade seine Augen<br>auf einen gerichtet hat."
      },
      
      A38 : {
        name : "Chaosasche",
        desc : "Schießt ein Entzugsprojektil, das dem Ziel Ichor raubt.<br><br>Die Schwachen sind das Blut, das zum Fleisch der<br>Starken wird. Es ist kein Raub, sondern nur die Nutzung<br>einer Ressource für die Zukunft der Wiedergänger."
      },
      
      A39 : {
        name : "Dorn der Säuberung",
        desc : "Erzeugt einen riesigen Dorn in der Luft, der das<br>Ziel durchbohrt.<br><br>Zahllose Wiedergänger sind diesen Spitzen im<br>Kampf zum Opfer gefallen und der Schrecken,<br>den sie verbreiten, ist präsent wie immer."
      },
      
      A40 : {
        name : "Silberwolf-Kreuz",
        desc : "Feuert eine kreuzförmige Blutklinge auf das Ziel ab.<br><br>Eine Angriffstechnik, die einst vom Anführer der<br>Silberwölfe benutzt wurde. Das Blutkreuz soll ein<br>Gebet für die Gefallenen symbolisieren. Es ist<br>daher ironisch, dass das Talent so effizient darin<br>ist, sein Ziel kaltblütig in vier Teile zu schneiden<br>und es dadurch zum Schweigen zu bringen."
      },
      
      A41 : {
        name : "Schattensprung",
        desc : "Erzeugt eine Schockwelle um dich herum und<br>transportiert dich dann unverzüglich rückwärts.<br><br>Dieses Talent basiert darauf, den Körper<br>aufzulösen und sofort wieder zusammenzusetzen.",
        usage_req : "Isis Blutcodes"
      },
      
      A42 : {
        name : "Blutiger Einschlag",
        desc : "Sprengt Gegner im Umfeld mit einer Schockwelle weg,<br>erzeugt durch plötzliches Freisetzen verdichteten Ichors.<br><br>Schaden ist nicht die Stärke dieses Talents, aber<br>es eignet sich zur Herstellung oder Beseitigung<br>von Distanzen und kann unter Berücksichtigung<br>des Geländes eine Schlacht wenden."
      },
      
      A43 : {
        name : "Winterumhang",
        desc : "Friert alles in der Umgebung mit einem arktischen<br>Schneesturm ein.<br><br>Kein Gegner kann der erzeugten Kälte und dem Wind<br>standhalten. Alle werden zur Seite gestoßen und hilflos zurückgelassen."
      },
      
      A44 : {
        name : "Pfingstrosenblitz",
        desc : "Erzeugt eine Explosion, die Gegner im Umkreis einhüllt.<br><br>Kaum jemand entrinnt einer plötzlichen Explosion in der<br>Nähe ungeschoren, vor allem dann nicht, wenn sie zu<br>ihrem Zentrum gelockt wurden.",
        usage_req : "Scathach Blutcodes"
      },
      
      A45 : {
        name : "Irrlicht",
        desc : "Schießt ein Ichor-Projektil, das dir in einem Bogen<br>Rückendeckung gibt.<br><br>Dieses Talent richtet wenig Schaden an, aber die<br>Verwirrung, die es stiftet, macht es äußerst wertvoll."
      },
      
      A46 : {
        name : "Glutumkehr",
        desc  : "Schießt ein Flammenprojektil, das dem Nutzer in <br>einem Bogen Rückendeckung gibt. <br><br>Dieses Talent erfordert fast keine Vorbereitungszeit. <br>Wenn der Gegner die Flamme sieht, hat er schon <br>Feuer gefangen."
      },
      
      A47 : {
        name : "Verzweifelter Ausbruch",
        desc : "Ein riskantes Talent, das eine enorme Menge<br>in dir angesammelter Energie freisetzt und<br>deinem Umfeld massiven Schaden zufügt, dich<br>aber an die Schwelle des Todes bringt.<br><br>So eine Technik kann nur von Wiedergängern<br>benutzt werden, die den Tod nicht fürchten.<br>Das grausige Spektakel verfolgt alle, die<br>Zeuge davon werden."
      },
      
      A48 : {
        name : "Rosenflamme",
        desc : "Verstreut Feuerbomben, die nach kurzer Zeit<br>explodieren und alles in der Umgebung beschädigen.<br><br>Wenn du umzingelt bist und keinen Ausweg mehr weißt,<br>kannst du nur beten, dass dir etwas einfällt. Solche<br>Situationen solltest du möglichst vermeiden."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Zielsuchendes Höllenfeuer",
        desc : "Entfesselt einen unheilvollen <br>Flammenwirbel, der das Ziel verfolgt.<br><br>Der Feuersturm verfolgt sein Ziel <br>hartnäckig und die Flammen verschlingen <br>den Verlorenen unbarmherzig."
      },
      
      A50 : {
        name : "Tanzende Feuerklinge",
        desc : "Ruft eine Feuerklinge herbei, die um deinen<br>Körper wirbelt.<br>Die Feuerklinge wirbelt rasant um dich herum<br>und zerteilt alle, die sich ihr nähern."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Raureifkaskade",
        desc : "Feuert eisiges Licht in alle Richtungen,<br>das Gegner einfach hinwegfegt. Die Raureif-<br>kaskade lässt alle bei Berührung gefrieren<br>und breitet sich vom Wirker kreisförmig aus.<br>Da der Blutcode der Kaiserin die Grundlage<br>für dieses Talent bildet, fordert sein Ein-<br>satz einen hohen Preis von dem Wirker."
      },
      
      A52 : {
        name : "Frostgeschützturm",
        desc : "Erzeugt eine Eismasse, die in Abständen<br>Eissplitter verschießt.<br>Die Eissplitter sind nicht tödlich, der<br>gesammelte Schaden ist jedoch ein großer<br>Schritt zum Sieg."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Meteoriten-Schmettern",
        desc : "Erzeugt flammende Felsbrocken über deinem<br>Kopf und lässt sie wie einen Meteorschauer<br>auf den Feind niederprasseln.<br>Sieht auf den ersten Blick vielleicht nicht<br>sehr beeindruckend aus, aber es gibt wohl<br>kaum einen Verlorenen, der diesen Feuer-<br>hagel aushält und dann noch steht."
      },
      
      A54 : {
        name : "Frostwelle",
        desc : "Erzeugt eisige Kälte, die sich auf dem<br>Boden ausbreitet.<br>Jeder Gegner, der sich dir nähert, wird<br>durch diese Eiswelle gebremst."
      },
      
      A55 : {
        name : "Feld des Durstes",
        desc : "Erzeugt ein Feld, das Gegnern darin<br>regelmäßig Ichor entzieht.<br>So kannst du den Verlorenen Ichor rauben,<br>ohne dich ihnen überhaupt zu nähern.<br>Manchmal entscheidet sogar die kleinste<br>Menge Ichor über Leben und Tod. Diese Falle<br>ist ideal, wenn du in der Schlacht das Blatt<br>mit deinen Talenten wenden willst."
      },
      
      A56 : {
        name : "Blitzeinschlag",
        desc : "Spring hoch und lande in einer Blitz-<br>explosion. Für den Angriff muss man zwar<br>die Blitze erst in seiner Hand sammeln,<br>aber seine Durchschlagskraft ist gewaltig.<br>Dieses Talent setzt auf die Blitzenergie<br>des Fürsts des Donners, die durch die<br>Adern des Wirkers fließt, und kann schwache<br>Wiedergänger sofort zu Asche verbrennen."
      },


      // # DEBUFFS #
      B0 : {
        name : "Giftschuss",
        desc : "Feuert ein Projektil ab, das dein Ziel vergiftet.<br><br>Dieses Geschoss trifft Gegner wie aus dem Nichts<br>und versetzt sie in Panik, wenn es ihnen bei einem<br>Treffer die Gesundheit raubt."
      },
      
      B1 : {
        name : "Paralyseschuss",
        desc : "Feuert ein Projektil ab, das dein Ziel<br>paralysiert.<br><br>Dieses Geschoss trifft Gegner wie aus<br>dem Nichts und versetzt sie in Panik,<br>wenn es ihnen bei einem Treffer die<br>Bewegungsfreiheit raubt."
      },
      
      B2 : {
        name : "Verlangsamungsschuss",
        desc : "Feuert ein Projektil ab, das dein Ziel verlangsamt.<br><br>Dieses Geschoss trifft Gegner wie aus dem Nichts<br>und versetzt sie in Panik, wenn es ihnen bei einem<br>Treffer die Beweglichkeit raubt."
      },
      
      B3 : {
        name : "Giftnetz",
        desc : "Wirft Ichor ab, um eine Falle zu erschaffen,<br>die Feinde, die in sie hineintreten, vergiftet.<br><br>Diese Technik erkennt das Blut der<br>Angreifer und wirkt nur auf Gegner des<br>Anwenders."
      },
      
      B4 : {
        name : "Paralysenetz",
        desc : "Wirft Ichor ab, um eine Falle zu erschaffen,<br>die Feinde, die in sie hineintreten, paralysiert.<br><br>Alle Talente wurden erschaffen, um das Über-<br>leben zu sichern. Wenn eine große Bedrohung<br>auftritt, setze diese Macht ein und renne, ohne<br>nach hinten zu blicken."
      },
      
      B5 : {
        name : "Verlangsamungsnetz",
        desc : "Wirft Ichor ab, um eine Falle zu erschaffen,<br>die Feinde, die in sie hineintreten, verlangsamt.<br><br>Geübte Wiedergänger können ihren Willen<br>zu Ichor konzentrieren und haben die klare<br>Vorstellungskraft, ihn zu führen. Der erste<br>Schritt zur Macht ist Selbsterkenntnis."
      },
      
      B6 : {
        name : "Schocknetz",
        desc : "Manipuliert Ichor und kreiert eine schwache Falle<br>an deinen Füßen, die Angreifer ins Wanken bringt.<br><br>Täuschungen sind am effektivsten, wenn sie<br>schnell und kompromisslos ausgeführt werden.<br>Selbst ein Funken des Verdachts kann<br>unsägliche Furcht und Ruhelosigkeit wecken."
      },
      
      B7 : {
        name : "Flammen des Rauschs",
        desc : "Manipuliert Ichor, um eine Falle zu deinen Füßen<br>zu erzeugen, die Angreifer mit Feuer eindeckt.<br><br>Die Notwendigkeit, aus den Verlorenen Asche zu machen,<br>hat zu vielen Experimenten geführt. Doch selbst das<br>wiederholte Verbrennen dieser Kreaturen bei ihrer<br>Wiederbelebung blieb erfolglos."
      },
      
      B8 : {
        name : "Giftfalle",
        desc : "Verteilt Ichor in der Umgebung und erschafft<br>eine Giftfalle, die sich in Angreifer frisst.<br><br>Die Sicherheitseinheit Cerberus hat viele<br>Talente erfunden, darunter einige mit<br>indirekter Wirkung."
      },
      
      B9 : {
        name : "Paralysefalle",
        desc : "Verteilt Ichor in der Umgebung und erschafft<br>eine Falle, die Angreifer paralysiert.<br><br>Die Sicherheitseinheit Cerberus hat viele<br>Talente erfunden, darunter einige mit<br>indirekter Wirkung."
      },
      
      B10 : {
        name : "Verlangsamungsfalle",
        desc : "Verteilt Ichor in der Umgebung und erschafft<br>eine Falle, die Angreifer verlangsamt.<br><br>Die Sicherheitseinheit Cerberus hat viele<br>Talente erfunden, darunter einige mit<br>indirekter Wirkung."
      },
      
      B11 : {
        name : "Wahnsinniges Feuer",
        desc : "Feuert ein Projektil, das die Fokus-Leiste des<br>Gegners verringert.<br><br>Türen öffnen sich nicht für jene, die herumstehen<br>und warten. Gehe voran und öffne sie selbst."
      },


      // # BUFFS #
      C0 : {
        name : "Blutwaffe",
        desc : "Stattet die aktuelle Waffen von dir und deinem<br>Partner zeitweise mit dem Blut-Effekt aus.<br><br>Für Wiedergänger ist Blut Nahrungsquelle, Rüstung<br>zum Schutz vor Bedrohungen und eine robuste Klinge,<br>die durch Hindernisse schneidet. Alle Wiedergänger<br>streben danach, das Blut zu beherrschen."
      },
      
      C1 : {
        name : "Flammenwaffe",
        desc : "Stattet die aktuellen Waffen von dir und deinem<br>Partner zeitweise mit dem Feuer-Effekt aus.<br><br>Durch brennende Klingen verursachte Wunden<br>heilen langsam, selbst bei Wiedergängern."
      },
      
      C2 : {
        name : "Frostwaffe",
        desc : "Stattet die aktuelle Waffen von dir und deinem<br>Partner zeitweise mit dem Eis-Effekt aus.<br><br>Das sofortige Einfrieren der Wunde verlangsamt die<br>Auflösung und lässt den Gegner den Schmerz auskosten."
      },
      
      C3 : {
        name : "Blitzwaffe",
        desc : "Stattet die aktuellen Waffen von dir und deinem<br>Partner zeitweise mit dem Blitz-Effekt aus.<br><br>Dieses Talent ist ein wunderbarer Verbündeter<br>und grausiger Gegner. Vergiss nie, dass deine<br>Waffen gegen dich eingesetzt werden könnten."
      },
      
      C4 : {
        name : "Giftzeichen",
        desc : "Stattet deine aktuelle Waffe zeitweise mit<br>dem Gift-Effekt aus.<br><br>Ein Schlag verursacht eine Vergiftung, die von<br>innen zerstört. Der Untergang ist gewiss, aber<br>der Schrecken hat gerade erst begonnen."
      },
      
      C5 : {
        name : "Betäubungszeichen",
        desc : "Stattet deine aktuelle Waffe zeitweise mit<br>dem Paralyseeffekt aus.<br><br>Die Sinne sind wach, aber die Freiheit ist<br>genommen. Wie geht man mit einem Gegner<br>um, dessen Gesicht schreckverzerrt ist? Alles<br>liegt in den Händen desjenigen, der dieses<br>Zeichen gesetzt hat."
      },
      
      C6 : {
        name : "Abwehrzeichen",
        desc : "Stattet deine aktuelle Waffe zeitweise mit<br>dem Hemmen-Effekt aus.<br><br>Die Fähigkeit, Talente zu versiegeln, ist äußerst<br>bedeutend. Wer weiß, wozu eine Maus imstande ist,<br>wenn sie in eine Ecke gedrängt wird?"
      },
      
      C7 : {
        name : "Fesselzeichen",
        desc : "Stattet deine aktuelle Waffe zeitweise mit<br>dem Langsam-Effekt aus.<br><br>Opfer dieses Effekts werden von Erschöpfung<br>überwältigt, während das Blut in ihrem Körper<br>schwer wird. Ihre Bewegungen werden langsam<br>und es tun sich Schwachstellen in ihrer<br>Verteidigung auf."
      },
      
      C8 : {
        name : "Adrenalin",
        desc : "Erhöht zeitweise die Angriffskraft.<br><br>Um die Schreckenswesen zu vernichten, die in die<br>Welt eingefallen waren, brauchten die Menschen eine<br>unvorstellbar große Kraft. Bald darauf brachten<br>Talente ein Licht der Hoffnung, das weiterhin allen<br>Wiedergängern den Weg voraus erhellt."
      },
      
      C9 : {
        name : "Brücke zum Ruhm",
        desc : "Erhöht zeitweise die Angriffskraft.<br><br>Das Trinken des Blutes der Lebenden stärkt die<br>unsterblichen Verlorenen. Weisheit, Können und<br>Erfahrung sind der Schlüssel zum Überleben im<br>Gefängnis, das diese Welt geworden ist."
      },
      
      C10 : {
        name : "Übersteuerung",
        desc : "Erhöht zeitweise die Angriffskraft bei dir und deinem<br>Partner. Der Effekt endet, wenn du Schaden erleidest.<br><br>Diese Fähigkeit eignet sich am besten für einen<br>Erstschlag gegen einen Gegner."
      },
      
      C11 : {
        name : "Einschlag aus der Ferne",
        desc : "Erhöht zeitweise die Angriffskraft der aus Waffen<br>abgefeuerten Schüsse.<br><br>Im Verlauf unzähliger hitziger Gefechte wird ein<br>effizienter Einsatz von Energie zunehmend<br>wichtiger. Eine hervorragende Methode dafür<br>ist das Ausschalten von Feinden aus der Ferne."
      },
      
      C12 : {
        name : "Hieb des Wahnsinns",
        desc : "Erhöht die Kraft des nächsten Angriffs.<br><br>Sprengt unbewusst die Fesseln, die den<br>Körper zurückhalten, und erzeugt dadurch<br>Stärke, die über psychologische Barrieren<br>hinausgeht. Dies ist für Menschen unmöglich,<br>aber ein guter Trick für einen Wiedergänger."
      },
      
      C13 : {
        name : "Blitzender Reißzahn",
        desc : "Erhöht die Kraft des nächsten Angriffs.<br><br>Ein abrupter Rausch von Stärke, der im richtigen<br>Moment freigesetzt wird, kann durch das Verdichten<br>von Ichor erreicht werden."
      },
      
      C14 : {
        name : "Gnadenloser Sensenmann",
        desc : "Ignoriert teilweise die physische und die Waffen-<br>verteidigung des Gegners beim nächsten Angriff.<br><br>Egal wie stark die Rüstung ist, dieser Klinge kann<br>niemand entgehen. Sie ist wie die Sense von<br>Gevatter Tod, die jeden heimsucht, ohne Rücksicht<br>auf die Umstände."
      },
      
      C15 : {
        name : "Dunkelschrei",
        desc : "Erhöht die Wirkung von dunklen Talenten beim<br>nächsten Angriff enorm.<br><br>Ein Kampfschrei stellt den Willen zu siegen wieder<br>her und ruft Stärke hervor, um Herausforderungen<br>zu überwinden."
      },
      
      C16 : {
        name : "Klingentanz",
        desc : "Erhöht zeitweise die Angriffskraft, wenn du<br>einem Gegner mit deiner Waffe Schaden zufügst.<br><br>Wenn du nicht auf einen Ausweg achtest, kannst du<br>in Plänen gefangen werden, die gegenseitige Ver-<br>nichtung verursachen.",
        usage_req : "Prometheus Blutcodes"
      },
      
      C17 : {
        name : "Opferklinge",
        desc : "Erhöht die Angriffskraft enorm, aber entzieht mit<br>der Zeit LP. Der Effekt endet, wenn die LP auf 1<br>reduziert wurden.<br><br>Unvorstellbare Kraft hat ihren Preis, aber nur<br>diejenigen, die bereit sind, ihn zu zahlen,<br>werden siegreich sein.",
        usage_req : "Heimdall Blutcodes"
      },
      
      C18 : {
        name : "Somatischer Eifer",
        desc : "Erhöht zeitweise Stärke und Geschick. <br><br>Dieses Talent ist bei Wiedergängern aufgrund <br>seiner Verstärkung von Offensivkräften beliebt."
      },
      
      C19 : {
        name : "Kognitiver Eifer",
        desc : "Erhöht vorübergehend Verstand und Willenskraft.<br><br>Eine bei Wiedergängern wegen seiner Verstärkung<br>von Talenten beliebte Technik."
      },
      
      C20 : {
        name : "Präzision",
        desc : "Macht es zeitweise leichter, Gegner mit deiner Waffe<br>ins Wanken zu bringen.<br><br>Eine winzige Lücke kann einen Kampf komplett drehen.<br>Durch das Schaffen dieser Lücke gibst du dir selbst<br>die Gelegenheit, dein Überleben zu sichern."
      },
      
      C21 : {
        name : "Jagdschmaus",
        desc : "Erhöht zeitweise den Entzugswert von Waffenangriffen.<br><br>Talente spielen im Kampf eine überaus wichtige Rolle.<br>Mit einem stetigen Vorrat an Ichor nimmt ihre<br>Effektivität exponentiell zu."
      },
      
      C22 : {
        name : "Blutsaugende Klingen",
        desc : "Erhöht zeitweise den Entzugswert von<br>Waffenangriffen für dich und deinen Partner.<br><br>Dieses Talent verbessert die Effizienz von<br>in Waffen eingebauten Entzugsmechanismen."
      },
      
      C23 : {
        name : "Talentkönnen",
        desc : "Erhöht zeitweise die Geschwindigkeit von<br>Talenten für dich und deinen Partner.<br><br>Erfahrene Wiedergänger, die lange überlebt<br>haben, können während des Kampfes in kurzer<br>Zeit eine Vielzahl von Talenten auslösen."
      },
      
      C24 : {
        name : "Talent-Verlängerung",
        desc : "Verlängert vorübergehend die Wirkung der von dir<br>und deinem Partner benutzten Talente.<br><br>Es mag wie ein kleiner Unterschied erscheinen,<br>aber kleine Wellen können anschwellen und eine<br>Schlacht entscheiden."
      },
      
      C25 : {
        name : "Beschleunigen",
        desc : "Nutzt die Kraft von Ichor, um deine Reflexe zu<br>verbessern, damit du schneller ausweichst.<br><br>Diese Technik verbraucht eine große Menge Ichor<br>und ist schwer zu lernen, aber die Kraft, die es<br>verleiht, ist unbestreitbar."
      },
      
      C26 : {
        name : "Konzentration",
        desc : "Reduziert zeitweise den Verbrauch von Ausdauer.<br>Der Effekt endet, wenn du Schaden nimmst.<br><br>Diese Fähigkeit eignet sich am besten für einen<br>Erstschlag gegen einen Gegner."
      },
      
      C27 : {
        name : "Rote Schuhe",
        desc : "Ermöglicht dir, LP für Aktionen zu nutzen,<br>wenn deine Ausdauer aufgebraucht ist.<br><br>Jene, die aus Verzweiflung ihre Grenzen überwinden,<br>werden als Helden oder als Narren bekannt. Um echten<br>Heldenmut zu beweisen, muss man einen Teil seiner<br>Vernunft aufgeben.",
        usage_req : "Fionn Blutcodes"
      },
      
      C28 : {
        name : "Tapferes Herz",
        desc : "Verbessert kinetische Sehkraft und Reflexe, was <br>den Ausdauerverbrauch beim Ausweichen reduziert. <br><br>Egal wie groß die Bedrohung ist, schnelle Entscheidungen <br>und Beinarbeit können die Gefahr verringern."
      },
      
      C29 : {
        name : "Moralschub",
        desc : "Erhöht die maximale Ausdauer von dir und deinem Partner<br>und stellt die Ausdauer vollständig wieder her.<br><br>Wiedergänger müssen ständig wachsam sein, um auf feine<br>Änderungen der Umgebung zu reagieren. Für Kreaturen,<br>denen keine Pausen vergönnt sind, könnte diese Technik<br>die wahrscheinlich größte Notwendigkeit sein."
      },
      
      C30 : {
        name : "Zeitmangel",
        desc : "Verwendet Ichor, um aufgeladene Aktionen<br>vorübergehend zu beschleunigen. <br><br>Ein Zeitvorsprung ist ein enormer Vorteil im Kampf.<br>Ein einzelner Angriff kann den Sieg mit Blut besiegeln."
      },
      
      C31 : {
        name : "Übernatürliches Blut",
        desc : "Ermöglicht dir die Verwendung von LP für den Einsatz<br>deiner Talente, wenn du keinen Ichor mehr hast.<br><br>Der Einsatz von mächtigen Talenten hat einen fast<br>hypnotischen Effekt auf den Verstand eines Wieder-<br>gängers. Wenn du dein eigen Fleisch und Blut dafür<br>opferst, pass auf, dass du nicht deinen eigenen<br>Untergang herbeiführst.",
        usage_req : "Harmonia Blutcodes"
      },
      
      C32 : {
        name : "Einschlagwelle",
        desc : "Ergänzt Schlagangriffe zeitweise um eine Schockwelle,<br>die zusätzlichen Schaden verursacht.<br><br>Der Erwerb dieses Talents erfordert etwas Geschick,<br>aber es ist ein wahrer Segen."
      },
      
      C33 : {
        name : "Letzte Reise",
        desc : "Stürzt deine Regenerationskraft in den Wahn, der zum<br>Tod führt. Stellt sofort alle LP wieder her und verbessert<br>alle Fähigkeiten, aber tötet dich nach einer bestimmten<br>Zeit.<br><br>Wiedergänger sind beinahe unsterblich, aber die Auf-<br>lösung hat einen hohen Preis. Gehe sicher, dass sie<br>es wert ist.",
        usage_req : "Königinnen-Schlächter Blutcodes"
      },
      
      C34 : {
        name : "Lebendiger Eifer",
        desc : "Erhöht kurz Standhaftigkeit und Vitalität.<br><br>Wiedergänger kehren immer wieder mit hohen LP<br>und viel Ausdauer ins Leben zurück und müssen<br>keine Angst davor haben."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Befehl zur Offensive",
        desc : "Senkt kurz deine Verteidigung und erhöht die<br>Angriffskraft für dich und deinen Partner.<br>Auf Kosten deiner Sicherheit kannst du<br>sofort die Angriffskraft deiner Verbündeten<br>verstärken."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Ichor-Effizienz",
        desc : "Reduziert die Ichor-Kosten von Waffenangriffen<br>für begrenzte Zeit.<br><br>Die einen behalten ihren Ichor beim Kämpfen im <br>Auge, die anderen nicht. Eins steht aber fest: <br>Eine Gruppe überlebt länger."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Eiserner Wille",
        desc : "Reduziert zeitweise den erhaltenen Schaden<br>durch Einbindung einer Barriere in dein Blut.<br><br>Selbst die kleinste Wunde zu vermeiden, kann<br>deine Überlebenschancen in dieser Welt<br>deutlich erhöhen."
      },
      
      D1 : {
        name : "Finsterblut-Barriere",
        desc : "Erzeugt eine Barriere, welche den dir und deinem<br>Partner zugefügten Schaden eines Angriffs stark<br>reduziert, indem Ichor bis zur absoluten Grenze<br>verdichtet wird.<br><br>Selbst ein temporärer Schild kann ein psycho-<br>logischer Vorteil sein, der zum Sieg führt."
      },
      
      D2 : {
        name : "Ablatives Blut",
        desc : "Reduziert zeitweise erheblich den erlittenen<br>Schaden auf Kosten von Ichor.<br><br>Der Nutzer darf nicht vergessen, dass Ichor ihn<br>am Leben erhält. Der Tod erwartet denjenigen,<br>der es versäumt, sich rechtzeitig zurückzuziehen.",
        usage_req : "Eos Blutcodes"
      },
      
      D3 : {
        name : "Dampfwalze",
        desc : "Erhöht Gleichgewicht und Widerstand gegen direkte Angriffe,<br>aber vermindert Beweglichkeit und Elementarwiderstand.<br><br>Dieses Talent beseitigt eine Schwäche und erzeugt eine andere, <br>was seinen Einsatz situationsabhängig macht. Allerdings ist es <br>bei effektiver Verwendung ein mächtiges Werkzeug.",
        usage_req : "Atem der Königin Blutcodes"
      },
      
      D4 : {
        name : "Standhaftes Bollwerk",
        desc : "Erhöht zeitweise die Waffenverteidigung gegen<br>physische Angriffe.<br><br>Es ist nicht leicht, Wiedergänger im Wahn zurück-<br>zuschlagen. Die Sicherheitseinheit Cerberus greift<br>auf eine solide Verteidigung zurück, aus der sie<br>Stärke gewinnt, um gegen sie zu bestehen."
      },
      
      D5 : {
        name : "Block-Umkehr",
        desc : "Ermöglicht es zeitweise, Angriffe abzulenken und<br>Gegner nach dem Blocken ins Wanken zu bringen.<br><br>Einen gegnerischen Angriff zu blocken und darauf<br>einen eigenen Schlag folgen zu lassen, erscheint<br>wie eine einfache Strategie, aber es bleibt eine<br>wirkungsvolle."
      },
      
      D6 : {
        name : "Zerschmetternde Macht",
        desc : "Erleichtert es zeitweise, den Block eines Gegners zu<br>durchbrechen.<br><br>Fürchte keinen Feind, der zu viel Energie auf Verteidigung<br>verwendet. Die unbeirrbare Klinge wird sich einen Weg <br>zum Sieg bahnen."
      },
      
      D7 : {
        name : "Blockstabilität",
        desc : "Reduziert zeitweise den Ausdauerverbrauch beim Blocken.<br><br>Wenn die Verteidigung durchbrochen ist, ist die Schlacht<br>so gut wie beendet. Solange deine Verteidigung steht,<br>geht der Kampf weiter."
      },
      
      D8 : {
        name : "Prismenschleier",
        desc : "Erhöht zeitweise die Waffenverteidigung gegen<br>Elementarangriffe.<br><br>Es ist nicht leicht, Wiedergänger im Wahn zurück-<br>zuschlagen. Die Sicherheitseinheit Cerberus greift<br>auf eine solide Verteidigung zurück, aus der sie<br>Stärke gewinnt, um gegen sie zu bestehen."
      },
      
      D9 : {
        name : "Blutschutz",
        desc : "Erzeugt eine temporäre Barriere um dich und deinen Partner,<br>die die Kraft des Blutes abschwächt und den Widerstand erhöht.<br><br>Ichor verändert seine Eigenschaften entsprechend der Willens-<br>stärke des Nutzers. Ihn in eine Barriere zu verwandeln, ist<br>eine leichte Sache."
      },
      
      D10 : {
        name : "Flammenschutz",
        desc : "Erzeugt eine temporäre Barriere um dich und<br>deinen Partner, die Feuerkräfte schwächt<br>und deinen Widerstand erhöht.<br><br>Das Feld entzieht Flammen die Kraft und<br>vermindert Feuerschaden."
      },
      
      D11 : {
        name : "Eisrüstung",
        desc : "Erzeugt eine temporäre Barriere um dich und<br>deinen Partner, die Eiskräfte schwächt und<br>deinen Widerstand erhöht.<br><br>Das betäubende Feld hemmt die Kraft zu<br>kühlen und vermindert Kälteschaden."
      },
      
      D12 : {
        name : "Raijins Schleier",
        desc : "Erzeugt eine temporäre Barriere um dich und<br>deinen Partner, die Blitzkräfte schwächt<br>und deinen Widerstand erhöht.<br><br>Jeder Wiedergänger, der ein Verlorener wird,<br>erinnert sich an seine Talente und setzt sie<br>gnadenlos gegen seine früheren Kameraden<br>ein, was Gegenmaßnahmen erforderlich macht."
      },
      
      D13 : {
        name : "Elementarwall",
        desc : "Erhöht zeitweise den Widerstand gegen alle<br>Elemente für dich und deinen Partner.<br><br>Ein geschickter Krieger ist darauf eingestellt,<br>sich jeder Situation anzupassen. Übermäßiger<br>Stolz bedeutet nur den frühen Tod."
      },
      
      D14 : {
        name : "Königliches Herz",
        desc : "Erhöht zeitweise den Widerstand gegen Wanken.<br><br>Im brodelnden Chaos des Kampfes ist ein kühler Kopf<br>das Entscheidende für einen Wiedergänger. Wenn der<br>verloren geht, schwindet mit ihm auch die Hoffnung auf<br>eine Zukunft."
      },
      
      D15 : {
        name : "Zäher Kämpfer",
        desc : "Erhöht zeitweise den Widerstand gegen Wanken<br>bei gegnerischen Angriffen.<br><br>Nur Krieger, die sich beharrlich durch jeden<br>Angriff kämpfen, überleben in dieser Welt."
      },
      
      D16 : {
        name : "Perfektes Gleichgewicht",
        desc : "Erhöht den Widerstand gegen Wanken für einen<br>Angriff enorm.<br><br>Ohne Furcht nach vorn zu stürzen, ist ein solider<br>Schritt in die Zukunft."
      },
      
      D17 : {
        name : "Antikörper-Erzeugung",
        desc : "Erhöht zeitweise den Widerstand gegen alle Schwächungen.<br><br>Es ist selbstverständlich, dass Statuseffekte eine<br>ernsthafte Bedrohung für jeden Nutzer von Talenten<br>darstellen. Ein Versäumnis bei der Vorbereitung kann<br>schnell zur Aschewerdung führen."
      },
      
      D18 : {
        name : "Gegenmaßnahme",
        desc : "Das Ausweichen gegnerischer Angriffe erzeugt zeitweise<br>Projektile, die den Gegner bei Berührung angreifen.<br><br>Der Mut, ohne zu Zögern nach vorn zu treten, ist<br>wichtig, aber die Gefahr dabei ist sehr real."
      },
      
      D19 : {
        name : "Listige Vergeltung",
        desc : "Für begrenzte Zeit erzeugt das Erleiden von Schaden<br>feurige Projektile, die den Gegner bei Berührung<br>angreifen.<br><br>Flammen des Zorns verhindern weitere Angriffe und<br>für die Wiedergänger, die sie einsetzen, sind sie<br>Flammen der Erlösung.",
        usage_req : "Klaue der Königin Blutcodes"
      },
      
      D20 : {
        name : "Ungezähmte Zähigkeit",
        desc : "Wenn du dieses Talent einsetzt und tödlichen Schaden<br>erleidest, überlebst du mit 1 LP, wenn deine LP über<br>einem bestimmten Wert liegen. Dieser Effekt wird nur<br>einmal ausgelöst.<br><br>Bewahre deinen Mut, egal wie groß die Gefahr ist. Wenn<br>du am Leben hängst, sind die Möglichkeiten endlos."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Robuster Körper",
        desc : "Senkt die Effektivität deines Talents und<br>erhöht kurz dein LP-Maximum.<br>Wie du den LP-Überschuss aus diesem Talent<br>einsetzt, liegt ganz bei dir."
      },
      
      D22 : {
        name : "Rundum blocken",
        desc : "Ermöglicht es dir, rundum zu blocken.<br><br>Jetzt musst du dich nicht mehr fürchten, <br>egal, wo deine Gegner sind. Denk aber daran, <br>dass das Glück jenen nicht hold ist, die sich <br>nur verteidigen."
      },
      
      D23 : {
        name : "Befehl zur Defensive",
        desc : "Senkt kurz deine Angriffskraft und erhöht <br>die Verteidigung für dich und deinen Partner.<br><br>Auf Kosten deiner Sicherheit kannst du sofort <br>die Verteidigung deiner Verbündeten verstärken."
      },
      
      // # COMMUNAL GIFTS #
      E0 : {
        name : "Tollkühne Hingabe",
        desc : "Ein Gemeinschaftstalent mit Louis, das auf Kosten<br>der Schadensreduzierung den Angriff verstärkt<br>und deine Ausweichbewegungen ändert.<br>Das Talent transformiert den Blutdurst der<br>Wiedergänger in Stärke, aber erhöht das<br>Risiko, durch einen einzigen Fehler zum<br>Verlorenen zu werden. Nur mit fester<br>Entschlossenheit ist solch ein Weg zu gehen.",
        usage_req : "Aktueller Partner ist Louis"
      },
      
      E1 : {
        name : "Lupinus Vita",
        desc : "Ein Gemeinschaftstalent mit Yakumo. Senkt<br>Ausdauerverbrauch beim Blocken, verstärkt<br>1. Angriff nach dem Blocken abhängig von<br>der Anzahl geblockter Angriffe. Senkt die<br>Ausweichgeschwindigkeit. Der Drang, Kameraden<br>zu verteidigen und zu unterstützen, gibt dem<br>Blut Kraft. Hindernisse zerbröseln unter dem<br>Gewicht deiner verantwortungsschweren Hiebe.",
        usage_req : "Aktueller Partner ist Yakumo"
      },
      
      E2 : {
        name : "Überzeugungssteigerung",
        desc : "Ein Gemeinschaftstalent mit Io, das den Widerstand<br>gegen Wanken erhöht, aber die Wirksamkeit von<br>Entzug mindert.<br><br>Ein starker Wille mit festen Wurzeln weckt<br>schlummernde Kräfte, einzig und allein, um<br>seine Bestimmung zu erfüllen.",
        usage_req : "Aktueller Partner ist Io"
      },
      
      E3 : {
        name : "Bluterwachen",
        desc : "Ein Gemeinschaftstalent mit Mia, das den Ichor-<br>verbrauch reduziert und Talente verbessert, aber<br>die Angriffskraft im Nahkampf senkt.<br><br>Erwachtes Blut, das durch die Adern pulsiert,<br>trägt die Kraft in sich, in dieser trostlosen<br>Welt zu überleben. Durch diesen Effekt erscheint<br>deine Umgebung wie eine Märchenwelt.",
        usage_req : "Aktueller Partner ist Mia"
      },
      
      E4 : {
        name : "Tödliche Woge",
        desc : "Ein Gemeinschaftstalent mit Jack, das die Angriffs-<br>kraft erhöht und den Ausdauerverbrauch senkt, aber<br>auch die Anzahl deiner Regenerationen reduziert.<br><br>Das Gefängnis der Nebel aufrechtzuerhalten bedeutet,<br>sein Leben zu riskieren, um Gefahren abzuwehren.<br>Das reine Ausmaß solch einer Aufgabe löst bei den<br>meisten Wiedergängern Furcht aus.",
        usage_req : "Aktueller Partner ist Jack"
      },
      
      E5 : {
        name : "Vergänglicher Refrain",
        desc : "Ein Gemeinschaftstalent mit Eva, das die Wirksamkeit<br>von Entzug und Talenten verbessert, aber den Ichor-<br>verbrauch erhöht.<br><br>Das Blut eines Wiedergängers tanzt in den Adern, als<br>wäre es inspiriert von einem schönen Lied, das das Herz<br>durchdringt, und blutroter Regen stillt die durstige Seele.",
        usage_req : "Aktueller Partner ist Eva"
      },
      
      
      // # MISC #
      F0 : {
        name : "Heilendes Opfer",
        desc : "Verbraucht deine eigenen LP, um die LP von<br>Begleitern zu regenerieren.<br><br>Für einen Wiedergänger ist der Tod kein Grund<br>zur Furcht mehr. Am beängstigendsten ist der<br>Verlust des Vertrauens anderer und das<br>Schicksal eines einsamen Lebens.",
        usage_req : "LP betragen 2 oder mehr"
      },
      
      F1 : {
        name : "Wohlwollender Segen",
        desc : "Verbraucht eine große Menge deiner LP, um eine<br>große Menge LP deines Partners wiederherzustellen.<br><br>Der entschlossene Wille von jemandem, der an deiner<br>Seite sein Leben riskiert, ist ein Segen, der die<br>Wunden Verbündeter heilen kann.",
        usage_req : "LP betragen 2 oder mehr"
      },
      
      F2 : {
        name : "Auto-Heilen",
        desc : "Du benutzt automatisch &quot;Heilendes Opfer&quot;, wenn dein<br>Partner kritischen Schaden erleidet.<br><br>Die Verwendung verbraucht jedoch im Voraus LP.<br><br>Sich selbst zu opfern, um andere zu retten, ist<br>keine leichte Sache. Das Licht der Erlösung ist<br>die Frucht einer bedeutsamen Beziehung.",
        usage_req : "Demeter Blutcodes<br>LP betragen 2 oder mehr"
      },
      
      F3 : {
        name : "Schutzhilfe",
        desc : "Opfert LP, um deinen Partner zu heilen und<br>zeitweise deine Verteidigung zu stärken.<br><br>Im Gefängnis der Realität kann man<br>nicht allein überleben, und was jetzt<br>schmerzhaft ist, mag sich später als<br>Rettungsleine erweisen, die dich aus<br>einer ernsten Notlage befreit.",
        usage_req : "Astrea Blutcodes<br>LP betragen 2 oder mehr"
      },
      
      F4 : {
        name : "Reinigendes Licht",
        desc : "Für begrenzte Zeit wird sich ein Teil des<br>erlittenen Schadens langsam von selbst heilen.<br><br>Jeder Schmerz erinnert die Wiedergänger an ihr<br>verlorenes Leben. Einerseits ist es ein Segen,<br>denn diese Denkweise stimuliert die Zellen und<br>lässt sie sich selbst heilen."
      },
      
      F5 : {
        name : "Regenerator",
        desc : "Verstärkt die Regenerationsfähigkeiten von dir und<br>deinem Partner, indem die Menge der durch Regeneration<br>wiederhergestellten LP erhöht wird.<br><br>Ein kleiner Unterschied in der Beständigkeit entscheidet<br>viele Kämpfe. Auch ein Gefühl von Stabilität bringt den<br>Sieg näher."
      },
      
      F6 : {
        name : "Gift-Entfernung",
        desc : "Heilt dich und deinen Partner von Gift. Am besten<br>zur Abwehr genutzt, bevor der Effekt wirksam wird.<br><br>Trotz der Unsterblichkeit von Wiedergängern blieben<br>Krankheiten ein unvermeidbares Problem und machten<br>Medizin zu einem der wichtigsten Themen. Heute hängt ihr<br>Leben von Experimenten und unermüdlichem Einsatz ab."
      },
      
      F7 : {
        name : "Paralyse-Entfernung",
        desc : "Heilt dich und deinen Partner von Paralyse. Am besten<br>zur Abwehr genutzt, bevor der Effekt wirksam wird.<br><br>Trotz der Unsterblichkeit von Wiedergängern blieben<br>Krankheiten ein unvermeidbares Problem und machten<br>Medizin zu einem der wichtigsten Themen. Heute hängt ihr<br>Leben von Experimenten und unermüdlichem Einsatz ab."
      },
      
      F8 : {
        name : "Hemmen-Entfernung",
        desc : "Heilt dich und deinen Partner von Hemmen. Am besten<br>zur Abwehr genutzt, bevor der Effekt wirksam wird.<br><br>Trotz der Unsterblichkeit von Wiedergängern blieben<br>Krankheiten ein unvermeidbares Problem und machten<br>Medizin zu einem der wichtigsten Themen. Heute hängt ihr<br>Leben von Experimenten und unermüdlichem Einsatz ab.<br>"
      },
      
      F9 : {
        name : "Langsam-Entfernung",
        desc : "Heilt dich und deinen Partner von Verlangsamung.<br>Kann bei rechtzeitiger Nutzung den Effekt abwehren.<br><br>Trotz der Unsterblichkeit von Wiedergängern blieben<br>Krankheiten ein unvermeidbares Problem und machten<br>Medizin zu einem der wichtigsten Themen. Heute hängt ihr<br>Leben von Experimenten und unermüdlichem Einsatz ab."
      },
      
      F10 : {
        name : "Leck-Entfernung",
        desc : "Heilt dich und deinen Partner von Leck. Am besten<br>zur Abwehr genutzt, bevor der Effekt wirksam wird.<br><br>Trotz der Unsterblichkeit von Wiedergängern blieben<br>Krankheiten ein unvermeidbares Problem und machten<br>Medizin zu einem der wichtigsten Themen. Heute hängt ihr<br>Leben von Experimenten und unermüdlichem Einsatz ab."
      },
      
      F11 : {
        name : "Allheilmittelessenz",
        desc : "Heilt dich und deinen Partner von allen Schwächungen.<br>Kann Schwächungen bei rechtzeitiger Nutzung auch abwehren.<br><br>In ermüdenden Tagen des Kampfes ist es beruhigend<br>für eine erschöpfte Seele, Momente mit guter Laune<br>zu erleben und an das Vertrauen und die Gefühle zu<br>denken, die dich mit deinen Kameraden verbinden."
      },
      
      F12 : {
        name : "Blutopfer",
        desc : "Verbraucht eigene LP, um Ichor zu erlangen.<br><br>Für Wiedergänger, die sehr viel Zeit mit<br>Kämpfen verbringen, ist der Wert von Ichor<br>unbestreitbar. Seine Stärke ist gewiss und<br>es hält Ängste vor dem Aschewerden unter<br>Kontrolle."
      },
      
      F13 : {
        name : "Nicht erinnern",
        desc : "Alle Talente, die zur Benutzung Zeit brauchen,<br>können sofort eingesetzt werden.<br><br>In Notlagen kann es helfen, zu vergessen und<br>von vorn zu beginnen."
      },
      
      F14 : {
        name : "Schwebendes Licht",
        desc : "Erzeugt eine Lichtkugel zu deinen Füßen.<br><br>Im Zeitalter chemischer Leuchtmittel endeten viele<br>Erkundungen frühzeitig, wenn diese aufgebraucht waren.<br><br>Die Möglichkeit stattdessen Talente zu verwenden,<br>vergrößert die Reisedistanz enorm."
      },
      
      F15 : {
        name : "Belebung",
        desc : "Bringt dich zur zuletzt berührten Mistel zurück, ohne Dunst<br>zu verlieren, indem dein Körper willentlich aufgelöst wird.<br><br>Rückzug ist keine Feigheit. In dieser Gefängniswelt<br>ist es wichtig, seine Kämpfe wählen zu können."
      },
      
      F16 : {
        name : "Nachtschrat",
        desc : "Vermindert die von dir gemachten Geräusche,<br>wodurch du nicht so leicht entdeckt wirst.<br><br>Sobald du auch nur die geringste Präsenz hinter dir<br>spürst, dreh dich um und vergewissere dich. Du weißt<br>nie, wer sich im Schatten an dich heranschleicht."
      },
      
      F17 : {
        name : "Nachtnebelschleier",
        desc : "Hüllt deinen Körper in einen Umhang aus nebelartigem<br>Blut, der es Gegnern erschwert, dich zu bemerken.<br><br>Der Nutzer erscheint verschwommen und lässt sich nur<br>schwer verfolgen."
      },
      
      F18 : {
        name : "Beutesucher",
        desc : "Suche nach nicht eingesammelten Gegenständen<br>innerhalb eines gewissen Radius.<br><br>Erschnüffle mit den übermenschlichen Sinnen,<br>die der Hunger eines Wiedergängers mit sich<br>bringt, die schwachen Spuren deines Ziels. "
      },
      
      F19 : {
        name : "Aktive ZEFF",
        desc : "Dein Radar zeigt Feinde innerhalb eines<br>gewissen Radius an.<br><br>Die Unsterblichen sollten den Tod fürchten,<br>wenn sie keine ewige Qualen leiden wollen."
      },
      
      F20 : {
        name : "Schatzsucher",
        desc : "Dein Radar zeigt nicht eingesammelte Gegen-<br>stände innerhalb eines gewissen Radius an.<br><br>Verteile winzige Mengen deines Blutes als<br>Späher. Diese Leistung ist weit jenseits<br>aller Menschlichkeit."
      },
      
      F21 : {
        name : "Preiswahrnehmung",
        desc : "Suche nach nicht eingesammelten Gegenständen<br>auf der aktuellen Karte.<br><br>Erschnüffle mit den übermenschlichen Sinnen,<br>die der ständige Hunger eines Wiedergängers<br>mit sich bringt, die schwachen Spuren deines<br>Ziels. Deine Sammlung muss vollständig sein."
      },
      
      F22 : {
        name : "Durchtrennender Abgrund",
        desc : "Spring hoch und schmettere mit Wucht nieder.<br>Offensiv. Einhandschwert/Hellebarde/Bajonett.<br><br>Spring in die Luft und haue nach unten,<br>als würdest du eine Schlucht meißeln. Der<br>Angriff muss auf die Bewegung des Gegners<br>abgestimmt sein, um das Beste aus ihm<br>herauszuholen."
      },
      
      F23 : {
        name : "Phantomangriff",
        desc : "Weiche wie Nebel, dann schlitze im Sprung.<br>Offensiv. Einhandschwert/Hellebarde/Bajonett.<br><br>Verschwinde im Schatten wie ein Geist, dann<br>sprinte mit einem Kreuzhieb auf das Ziel zu.<br>In Nebelform kann dir nichts zustoßen,<br>greife also furchtlos an."
      },
      
      F24 : {
        name : "Zirkulierender Puls",
        desc : "Entfessle einen Hagel aus Hieben.<br>Offensiv. Einhandschwert/Hellebarde/Bajonett.<br><br>Überwältige den Gegner mit einer wirbelnden<br>Kombo aus fünf Angriffen. Verbessere deine<br>Waffe mit einem Talent, um die Wirksamkeit<br>des Talents massiv zu erhöhen."
      },
      
      F25 : {
        name : "Legionsfolterer",
        desc : "Wirf deine Waffe und lass sie wirbeln.<br>Offensiv. Zweihandschwert/Hammer.<br><br>Wirf deine Waffe vorwärts, damit sie mit der<br>Kraft des Talents durch eine Feindgruppe<br>wirbelt. Der Angriff trifft einen weiten Bereich<br>langsam und sollte daher stets klug eingesetzt<br>werden, selbst bei schwachen Gegnern."
      },
      
      F26 : {
        name : "Salvenrondo",
        desc : "Feuere eine Salve Zielsuchgeschosse ab.<br>Offensiv. Bajonett.<br><br>Komprimiert mit Drehung Ichor in dein<br>Bajonett und feuert vier Kugeln ab, die ihr<br>Ziel suchen. Dieser Angriff erfordert Zeit<br>und muss daher unter den richtigen Umständen<br>eingesetzt werden."
      },
      
      F27 : {
        name : "Dreifach-Annihilator",
        desc : "Entfessle eine Kombo auf ein nahes Ziel.<br>Offensiv. Zweihandschwert/Hammer.<br><br>Benutze Ichor, um deine Muskeln kurz massiv<br>zu stärken und eine schwere Waffe 3 Mal<br>schnell hintereinander zu schwingen. Der<br>Angriff erfolgt schnell und ist im Nahkampf<br>unentbehrlich."
      },
      
      F28 : {
        name : "Drachensatz",
        desc : "Spring für einen Angriff von oben vor.<br>Offensiv. Zweihandschwert/Hammer.<br><br>Spring auf einen entfernten Gegner zu und<br>greife an wie ein Drache, der einem Tiger<br>den Hals bricht. Dieser vernichtende Angriff<br>macht den Benutzer anfällig und erfordert<br>daher Vorsicht."
      },
      
      F29 : {
        name : "Wagensturm",
        desc : "Sprinte wie Nebel vor, entfessle eine Kombo.<br>Offensiv. Hellebarde.<br><br>Löse dich auf und mach einen Ausfallschritt,<br>um mehrmals zuzustechen. Ein guter<br>Kombostarter, da der erste Angriff zu<br>weiteren oder zum Ausweichen führen kann."
      },
      
      F30 : {
        name : "Bewegliche Leere",
        desc : "Sprinte in Nebelform vor.<br><br>Löse deinen Körper kurzfristig auf wie ein<br>Gespenst in der Nacht und sprinte unter<br>Vermeidung aller Angriffe vor."
      },
      
      F31 : {
        name : "Grabstampfer",
        desc : "Stampfe mit deinem Fuß und verursache eine<br>Schockwelle.<br><br>Baue Energie in deinen Beinen auf, stampfe<br>auf und erzeuge eine zerstörerische Energie-<br>welle. Die Kraft erweckt die Toten in der Erde<br>und bringt die Verlorenen passend für einen<br>Folgeangriff ins Wanken."
      },
      
      F32 : {
        name : "Schwalbenschneider",
        desc : "Ein extrem schneller Angriff.<br>Offensiv. Zweihandschwert/Hammer.<br><br>Verleihe deinem Körper eine schnelle Drehung<br>und entfessle einen Schlag, der eine<br>Schwalbe im Flug treffen könnte. Das Tempo<br>ist enorm und lässt dich selbst bei der<br>geringsten Schwäche Schaden zufügen."
      },
      
      F33 : {
        name : "Verschwindende Leere",
        desc : "Werde zu Nebel und weiche Angriffen aus.<br><br>Mit diesem Talent weichst du Gefahren aus,<br>indem du dich streust und über deiner alten<br>Position wieder auftauchst. Dieses subtile<br>und profunde Talent nutzt den Wiedergänger-<br>Lebenszyklus perfekt, lässt sich aber nur<br>schwer meistern."
      },
      
      F34 : {
        name : "Quälender Sprenger",
        desc : "Springe vor und schlage 2 Mal zu.<br>Offensiv. Zweihandschwert/Hammer.<br><br>Springe zu einem Gegner hin und führe 2<br>schwere, schnelle Angriffe aus. Da schwere<br>Waffen langsam sein können, ist eine<br>überwältigende Offensive oft dein bester<br>Verbündeter."
      },
      
      F35 : {
        name : "Schattenangriff",
        desc : "Führe einen schnellen Nahangriff aus.<br>Offensiv. Einhandschwert/Hellebarde/Bajonett.<br><br>Gleite wie ein Schatten vorwärts und führe<br>einen schnellen Angriff aus. Mit dieser<br>Technik lassen sich kleine Lücken gut<br>schließen. Sie eignet sich als Strategie<br>dafür, am Gegner festzukleben."
      },
      
      F36 : {
        name : "Bescheidenes Opfer",
        desc : "Stellt mit einem kleinen Teil deiner LP<br>einen Teil bei deinen Gefährten wieder her.<br>Verbraucht weniger LP als Heilendes Opfer,<br>stellt aber beim Ziel auch weniger LP wieder her.",
        usage_req : "LP betragen 2 oder mehr"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Ichor-Resonanz (erhalten)",
        desc : "Gewährt dir dieselbe Menge Ichor, die dein<br>Partner (nicht ein Spieler) gerade erhält.<br><br>Die Einheit zwischen dir und deinen<br>Gefährten wird zum Blut in deinen Adern, <br>der Kraft in deinem Körper.<br><br>Lässt sich nicht zusammen mit &quot;Ichor-<br>Resonanz (senden)&quot; einsetzen."
      },
      
      F38 : {
        name : "Ichor-Resonanz (senden)",
        desc : "Gewährt deinem Partner dieselbe Menge Ichor,<br>die du gerade erhältst (gilt nicht für Spieler).<br><br>Dein Blut tanzt vor Aufregung und die Reso-<br>nanz in deinem Körper rettet deine Partner.<br><br>Lässt sich nicht zusammen mit &quot;Ichor-<br>Resonanz (erhalten)&quot; einsetzen."
      },
      
      F39 : {
        name : "Gelassene Haltung",
        desc : "Nimm sofort eine Haltung ein, die deinen<br>Geist beruhigt und sämtliche Ausdauer<br>regeneriert.<br>Diese Haltung kann nicht nur deine Zeit<br>für Angriffskombos im Kampf verdoppeln,<br>sondern dich auch von der Schwelle des<br>Todes zurückholen."
      },
      
      F40 : {
        name : "Belebender Ansturm",
        desc : "Stellt bei erfolgreichem Ausweichen während<br>des Effekts Ausdauer wieder her.<br>Selbst die Verlorenen sind nach Angriffen<br>anfällig. Weich ihren Hieben aus, dann kommt<br>deine Chance für einen Gegenangriff."
      },
      
      F41 : {
        name : "Ruhiger Schnitt",
        desc : "Führe einen kaum erkennbaren Angriff aus<br>einer ruhigen Haltung aus. Diese Angriffs-<br>technik ist für Einhandschwerter.<br>Der blitzschnelle Schlag dieser Technik er-<br>zeugt ein Vakuum, das alle Gegner in Reich-<br>weite verletzt.<br>Die Technik erfordert den Einsatz der ganzen<br>Seele und lässt sich nur langsam meistern."
      },
      
      F42 : {
        name : "Kreiselspalter",
        desc : "Spring mit einem Wirbelschlag in die Luft.<br>Diese Angriffstechnik ist für Hellebarden,<br>Einhandschwerter und Bajonette und schützt<br>dich gegen Attacken von allen Seiten.<br>Die Technik ist aber nicht nur ideal, wenn<br>du umzingelt bist, sondern auch um Gegner<br>auf schwer erreichbaren Positionen zu<br>treffen."
      },
      
      F43 : {
        name : "Wilder Sturzflug",
        desc : "Greife Gegner aus der Luft per Abwärts-<br>attacke an. Diese Technik ist für Einhand-<br>schwerter oder Hellebarden und ihr richtiger<br>Einsatz erfordert viel Übung.<br>Das Talent ist ideal, um schnell zu Gegnern<br>aufzuschließen, indem du einfach springst<br>und zu ihrer Position fliegst."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Standhafter Schlag",
        desc : "Führt einen Einzelschlag aus, bei dem Gegner<br>dich kaum ins Wanken bringen können. Diese<br>Technik ist für Zweihandschwerter/Hämmer.<br>Ein beherzter Schlag kann manchmal über Sieg<br>und Niederlage entscheiden, aber wer alles<br>auf eine Karte setzt, kann auch alles<br>verlieren. Setze dieses Talent also mit<br>Bedacht ein."
      },
      
      F45 : {
        name : "Klinge des Usurpators",
        desc : "Schlitze einen Feind auf und regeneriere LP.<br>Diese Technik ist für Hellebarden.<br>Wiedergänger dürsten nicht nur nach Blut,<br>sondern nach Leben. Gib dich ganz deinem<br>Verlangen hin."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Wirknullzeit",
        desc : "Setzt die Abklingzeit für das Talent deines<br>Partners zurück.<br>Solange sein Ichor reicht, kann dein Partner<br>Gegner mit einem mächtigen Talent immer<br>wieder in die Enge treiben."
      },
      
      F47 : {
        name : "Ichor-Regeneration",
        desc : "Stellt Ichor allmählich wieder her, <br>reduziert aber Waffenangriffskraft und Verteidigung.<br><br>Nach einer gewissen Zeit<br>stoppt die Ichor-Wiederherstellung<br>und deine verlorene Kraft kehrt wieder."
      },
      
      F48 : {
        name : "Blitzansturm",
        desc : "Rase blitzschnell auf deine Gegner zu und<br>entfessle einen Handangriff.<br><br>So schließt du augenblicklich zu deiner<br>Beute auf - wie ein Raubtier auf der Jagd.<br><br>Der Angriff verursacht zwar nicht viel<br>Schaden, ist aber so schnell, dass er gegen<br>Waffen einen entscheidenden Vorteil bietet<br>und den Weg zum Sieg eröffnet."
      },
      
      F49 : {
        name : "Fokus-Regeneration",
        desc : "Erhöht die Fokus-Leiste bei Verwendung <br>zum Teil.<br><br>Dieses Talent versetzt dich nicht immer in einen <br>fokussierten Zustand, wähle also den <br>strategisch richtigen Zeitpunkt."
      },
      
      F50 : {
        name : "Gleißender Lauf",
        desc : "Verschießt mächtige Munition, die durch-<br>bohrenden Schaden verursacht. Diese Technik<br>ist für Bajonette.<br>Die Geschosse erreichen augenblicklich ihr<br>Ziel und durchschlagen auf ihrem Weg alle<br>Gegner. Aufgrund der Aufladungszeit eignet<br>sich dieser Angriff jedoch nicht für Ziele<br>in der Nähe, sondern eher für große Gruppen."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "König.-Schl.-Klinge",
        desc : "Ein massenproduziertes, einschneidiges<br>Schwert für Soldaten der Operation<br>Königinnen-Schlächter.<br><br>Entworfen für eine schnelle Herstellung. Der<br>offene Ichor-Leiter verleiht ihm zwar ein grobes<br>Aussehen, aber die feingeschliffene Klinge schneidet<br>mühelos durch das Fleisch der Verlorenen."
      },
      
      A1 : {
        name : "Rohr der Versklavung",
        desc : "Eine einfache, keulenähnliche Waffe.<br><br>Nichts weiter als ein Rohr mit eingebauter <br>Entzugsfunktion, eine grobe Annährung an ein<br>Schwert. Wird vor allem von Wiedergängern<br>verwendet, die anderen untertan sind, und gibt <br>ihnen im Kampf immerhin einen Funken <br>Hoffnung."
      },
      
      A2 : {
        name : "Breitschwert",
        desc : "Ein von der Übergangsregierung<br>massenproduziertes, breites, zweischneidiges<br>Schwert.<br><br>Für pure Kraft konzipiert, kann es, wenn mit<br>dem ganzen Körper geschwungen, selbst riesige<br>Exemplare von Verlorenen niederstrecken. Seine<br>leichte Handhabe macht es in der Welt von Vein<br>sowohl bei Helden als auch bei Schurken beliebt."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : "Einem Katana nachempfundene, gebogene,<br>einschneidige Klinge. Sie wurde von einem <br>Wiedergänger namens Mukuro geschaffen,<br>der ihren Namen eingravierte, welcher <br>&quot;Abweisende Leiche&quot; bedeutet.<br><br>Die Waffe unterscheidet sich von den<br>in Vein üblichen Schwertern und ihre<br>Benutzung erfordert Geschick vom Träger."
      },
      
      A4 : {
        name : "Beständiges Blutrot",
        desc : "Die zuverlässige Seitenwaffe von Louis.<br><br>In die rote Klinge ist ein Spruchtalent<br>eingraviert, und sie durchdringt – wenn mit<br>Ichor verstärkt –  mit einem einzigen Hieb<br>den härtesten Schutz. Sie kommt von <br>demselben Wiedergänger, der Yakumo <br>seine Waffe gegeben hat, und wurde speziell <br>für die Technik von Louis geschaffen."
      },
      
      A5 : {
        name : "Machete",
        desc : "Ein großes Hackmesser aus einem Stück Stahl.<br><br>Es wurde von einer Gruppe wilder Ingenieure <br>geschaffen und kombiniert die Handhabung eines<br>Einhandschwerts mit der schieren Kraft eines<br>Zweihänders. Aufgrund seines Gewichts erfordert<br>sein effizienter Einsatz gewaltige Stärke, daher wird<br>es von kaum jemandem als Waffe verwendet."
      },
      
      A6 : {
        name : "Silberwolf-Klinge",
        desc : "Ein silbernes Einhandschwert der<br>Sicherheitseinheit Cerberus.<br><br>Obwohl es mit einem Talent-Aktivator ausgestattet<br>ist, ist es für eine massenproduzierte Waffe gut<br>ausgeglichen und von herausragender Qualität.<br>Die Eliteeinheit Cerberus wurde nach der Operation<br>Königinnen-Schlächter gebildet und ihre Ausrüstung<br>zeigt in geschickten Händen ihren wahren Wert."
      },
      
      A7 : {
        name : "Feuerklaue",
        desc : "Ein von der Nachfolgerin der Klaue benutztes<br>Langschwert.<br><br>Die Hitze im Inneren hinterlässt blutrote<br>Lichtbögen in der Luft und setzt bei Kontakt alles<br>in Flammen. Es soll nach den Gedanken der<br>Nachfolgerin erschaffen worden sein, aber was<br>war die Absicht dahinter?"
      },
      
      A8 : {
        name : "Eisblut",
        desc : "Die von der Klingenträgerin, einem von<br>Midos Lakaien, benutzte Stichwaffe.<br><br>Ein Aktivator für kalte Talente ist der Länge<br>nach eingelassen und erlaubt die sofortige<br>Erschaffung eines Eisspeers. Ein <br>einzigartiges Stück, das für die Besten von <br>Cerberus kreiert wurde und eine feinfühlige <br>Technik erfordert."
      },
      
      A9 : {
        name : "Abendrot-Schwert",
        desc : "Eine verformte, mit Miasma befleckte<br>Königinnen-Schlächter-Klinge.<br><br>Selbst unorganische Materie ist nicht immun<br>gegen die Korruption der Königin, die den<br>schwarzen Glanz dieser Waffe abgestumpft<br>und ihre Eigenschaften geändert hat. Obwohl<br>niemand sie gern führt, ist diese Waffe sehr effektiv."
      },
      
      A10 : {
        name : "Schwarzer Säbel",
        desc : "Ein pechschwarzes, einschneidiges Schwert.<br><br>Die geschwungene Klinge schneidet mühelos<br>durch Fleisch, und ein geschickter Träger kann die<br>Wirkung maximieren. Jäger in Schwarz achten nicht<br>auf das Gewicht ihrer Waffen, Kraft geht ihnen über<br>alles, deshalb sind geübte Hände ein Muss."
      },
      
      A11 : {
        name : "Henker",
        desc : "Das bevorzugte Schwert von Jack, dem Gruftwächter.<br><br>Die fein geschliffene Klinge nutzt sich nicht ab<br>und ein Schlag damit verursacht tödliche Wunden.<br>Seine Geschichte ist unbekannt, aber es ist<br>wohl eine Spezialversion der Waffen der Jäger<br>in Schwarz. Die gute Pflege der Waffe spricht<br>Bände über den geheimnisvollen Wächter."
      },
      
      A12 : {
        name : "Breitschwert d. Verlorenen",
        desc : "Ein Einhandschwert, benutzt von gefallenen<br>Wiedergängern, die zu Verlorenen wurden. <br><br>Das Miasma hat seine Eigenschaften verändert.<br>Es wurde zum Töten von Verlorenen geschaffen,<br>aber später gegen Wiedergänger eingesetzt.<br>Solche Ironie ist nicht ungewöhnlich in der<br>Welt von Vein."
      },
      
      A13 : {
        name : "Blutrotes Langschwert",
        desc : "Ein Einhandschwert, gefertigt nach einer langen <br>Klinge, die von einem Götterverschlinger mit <br>unbeugsamer Selbstbeherrschung geführt wurde.<br><br>Es enthält einen Talent-Aktivator, der den Träger<br>zu zerfetzenden Wellen befähigt. Diese purpurrote<br>Götterschlächterklinge leuchtet in einem Regen<br>dunkler Blutspritzer hell auf."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Höllenfeuerrohr",
        desc : "Eine vom Höllenfeuer verzerrte keulen-<br>ähnliche Waffe.<br>Dieses Rohr hat nach dem Kontakt mit<br>Miasma und Höllenfeuer eine völlig andere<br>Farbe. Nur, wer die schwersten Prüfungen<br>meistert, darf sich dieser Waffe rühmen."
      },
      
      A15 : {
        name : "Infernoklinge",
        desc : "Ein im Höllenfeuer gehärtetes<br>einschneidiges Schwert.<br><br>Leicht trotz hoher Stärkeskalierung.<br><br>Die blutrote Klinge ist von mächtiger<br>Glut erfüllt, die aufgeladenen Angriffen<br>eine Feuerkomponente verleiht."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Raureifrohr",
        desc : "Eine vom Raureif verzerrte keulen-<br>ähnliche Waffe.<br>Dieses Rohr hat nach dem Kontakt mit<br>Miasma und Raureif eine völlig andere<br>Farbe. Nur, wer die schwersten Prüfungen<br>meistert, darf sich dieser Waffe rühmen."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Donnerrohr",
        desc : "Eine vom Blitz verzerrte keulen-<br>ähnliche Waffe.<br>Dieses Rohr hat nach dem Kontakt mit<br>Miasma und Blitzen eine völlig andere<br>Farbe. Nur, wer die schwersten Prüfungen<br>meistert, darf sich dieser Waffe rühmen."
      },
      
      A18 : {
        name : "Rohr der Allmacht",
        desc : "Eine keulenähnliche Waffe die nur denen<br>verliehen wird, die wahre Stärke beweisen. <br>Wiedergänger von epischer Stärke brauchen<br>keine zusätzlichen Waffen. Diese Waffe ist<br>eine Huldigung an wahre Macht."
      },
      
      A19 : {
        name : "Fulmen-Klinge",
        desc : "Ein vom Blitz galvanisiertes Einhandschwert.<br><br>Schwer, doch mit hoher Verteidigungskraft<br>und hoher Geschicks- & Verstandsskalierung.<br><br>Die in der Klinge verborgene Elektrizität<br>funkelt wunderschön blau und verleiht aufge-<br>ladenen Angriffen eine Blitzkomponente."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "König.-Schl.-Großschwert",
        desc : "Ein massenproduziertes Zweihandschwert für<br>Wiedergänger der Operation Königinnen-<br>Schlächter.<br><br>Die Klinge wurde ursprünglich für den Einsatz<br>gegen den Körper der Königin entworfen und<br>ist damit für den Kampf gegen Verlorene<br>mehr als ausreichend."
      },
      
      B1 : {
        name : "Zweihänder",
        desc : "Eine von der Übergangsregierung<br>massenproduzierte lange Zweihandklinge.<br><br>Sie wurde zum Erlegen großer Exemplare<br>der Verlorenen konzipiert und bietet dem<br>Träger hervorragenden Schutz. Der Einsatz<br>in der Operation Königinnen-Schlächter<br>führte zu technischen Erweiterungen wie<br>dem integrierten Ichor-Leiter."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : "Einem japanischen Großschwert nachempfundene<br>große Klinge. Geschaffen von einem Wiedergänger<br>namens Mukuro, der den Namen darauf eingravierte,<br>welcher &quot;Sensende Leiche&quot; bedeutet.<br><br>Sie wurde für weit ausholende Schwertstreiche<br>entworfen und ist stark genug, bei einem kräftigen<br>Schwung einen Windstoß zu erzeugen."
      },
      
      B3 : {
        name : "Oni-Fluch",
        desc : "Das Schwert, das Yakumo in unzähligen <br>Schlachten gedient hat.<br><br>Hergestellt mit einer anderen Technik als<br>die meisten Waffen in Vein und gebaut, um<br>trotz seiner Größe in der Bewegung weit ausholend<br>geschwungen zu werden. Yakumo erhielt es von<br>dem Wiedergänger, der auch Louis seine Waffe<br>gab, und er hat es weiter seinem Stil angepasst."
      },
      
      B4 : {
        name : "Verformte Klinge",
        desc : "Ein Zweihandschwert mit einer Klinge ähnlich<br>einem verlängerten Zahn.<br><br>Diese seltsame Waffe wurde aus dem Körper<br>eines enorm großen Verlorenen geschaffen und<br>kann ein Talent freisetzen, wenn sie mit voller Kraft<br>geschwungen wird. Sie strahlt eine leichte Wärme<br>aus und soll angeblich nach Blut dürsten."
      },
      
      B5 : {
        name : "Schwarzes Großschwert",
        desc : "Ein Zweihandschwert mit einer schwarzen,<br>einschneidigen Kettenklinge.<br><br>Die lange, geschwungene Waffe wurde zum Abtrennen<br>von Gliedmaßen konzipiert. Jäger in Schwarz achten<br>nicht auf das Gewicht ihrer Waffen, Kraft geht ihnen<br>über alles, deshalb sind geübte Hände ein Muss."
      },
      
      B6 : {
        name : "Silberwolf-Königsklinge",
        desc : "Ein goldenes Zweihandschwert, das Silva<br>benutzte, nachdem er dem Wahn verfiel.<br><br>Es besitzt noch etwas Kraft der Relikte und<br>kann in gerader Linie unheimlich schnell<br>kräftige Hiebe austeilen. Die Schönheit der<br>Waffe verliert sich fast in ihrer Mächtigkeit und<br>gibt dem Träger eine gebietende Aura."
      },
      
      B7 : {
        name : "Urteilsklinge",
        desc : "Ein Zweihandschwert, geschaffen vom wiss-<br>begierigen und verdorbenen Wiedergänger<br>Mido.<br><br>Der interne Transformationsmechanismus<br>erzeugt eine Talent-Klinge und gibt der Waffe<br>eine äußerst zerstörerische Kraft, die wohl für<br>den finalen Kampf gegen Silva gedacht war."
      },
      
      B8 : {
        name : "Abendrot-Großschwert",
        desc : "Ein verformtes, mit Miasma beflecktes<br>Königinnen-Schlächter-Großschwert.<br><br>Selbst unorganische Materie ist nicht immun<br>gegen die Korruption der Königin, die den<br>schwarzen Glanz dieser Waffe abgestumpft und<br>ihre Eigenschaften geändert hat. Obwohl niemand<br>sie gern führt, ist diese Waffe sehr effektiv."
      },
      
      B9 : {
        name : "Zweihänder d. Verlorenen",
        desc : "Ein Zweihandschwert, benutzt von gefallenen<br>Wiedergängern, die zu Verlorenen wurden.<br><br>Das Miasma hat seine Eigenschaften verändert.<br>Es wurde zum Töten von Verlorenen geschaffen,<br>aber später gegen Wiedergänger eingesetzt.<br>Solche Ironie ist nicht ungewöhnlich in der<br>Welt von Vein."
      },
      
      B10 : {
        name : "Silberwolf-Schwert",
        desc : "Ein silbernes Zweihandschwert, benutzt von<br>der Sicherheitseinheit Cerberus.<br><br>Am besten für den Nahkampf geeignet, aber<br>kann sich Gegnern auch schnell mit mächtigen<br>Hieben nähern. Die Eliteeinheit Cerberus wurde<br>nach der Operation Königinnen-Schlächter gebildet<br>und ihre Ausrüstung zeigt in geschickten Händen<br>ihren wahren Wert."
      },
      
      B11 : {
        name : "Gleißendes Großschwert",
        desc : "Ein Zweihandschwert, nach der Riesensäge<br>eines Götterverschlingers gefertigt, der die<br>Bürde des Schicksals trug.<br><br>Mit voller Wucht geschwungen leuchtet es<br>blau und schmettert Gegner mit schrecklicher<br>Kraft nieder. Diese in grelles Licht getauchte<br>Waffe macht mit den Verlorenen kurzen Prozess."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Zorniges Balmung",
        desc : "Im Höllenfeuer gehärtetes Zweihandschwert.<br><br>Macht sein hohes Gewicht mit Angriffs-<br>kraft, Waffenverteidigung und Geschicks-<br>skalierung mehr als wett.<br><br>Die Klinge ist von mächtiger Glut erfüllt,<br>die aufgeladenen Angriffen eine Feuer-<br>komponente verleiht."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Azurnes Großschwert",
        desc : "Ein vom Raureif erfülltes Zweihandschwert.<br><br>Gleicht sein Gewicht mit hoher Waffen-<br>verteidigung und Willenskraftskalierung aus.<br><br>Diese frostweiße Klinge birgt die Macht<br>des absoluten Nullpunkts und verleiht aufge-<br>ladenen Angriffen eine Eiskomponente."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "König.-Schl.-Hellebarde",
        desc : "Eine massenproduzierte Stangenwaffe für<br>Wiedergänger der Operation Königinnen-<br>Schlächter.<br><br>Auf Kraft und einfache Benutzung ausgelegt und<br>erstmals an diejenigen verteilt, die die<br>Verlorenen-Riesen bekämpften."
      },
      
      C1 : {
        name : "Bartaxt",
        desc : "Eine von der Übergangsregierung<br>massenproduzierte lange Stangenwaffe.<br><br>Der Kopf ist so entworfen, dass er bei einem<br>kraftvollen Schwung am effektivsten ist. Waffen<br>der Übergangsregierung wurden zur zivilen<br>Verteidigung aus einfachen Materialien gebaut.<br>Trotzdem können sie die Verlorenen vernichten."
      },
      
      C2 : {
        name : "Pflock",
        desc : "Ein dünner Speer mit spitzem Kopf.<br><br>Er ist länger als die meisten Menschen, aber<br>leicht genug für einen plötzlichen Ausfallschritt.<br>Er wurde von exzentrischen Ingenieuren entworfen,<br>deren Produkte schwer zu handhaben waren, außer<br>dieser Waffe, die aus einer Laune heraus entstand."
      },
      
      C3 : {
        name : "Granatsplitter",
        desc : "Eine Achtung gebietende Stangenwaffe in Rot <br>und Silber, benannt nach einem roten Edelstein.<br><br>Hat einen winzigen Talent-Aktivator, der beim<br>Schwingen Klingen aussendet. Sie wurde <br>geschaffen von einer Sekte Wiedergänger, <br>die sich für Edelleute hält, und ist trotz ihres <br>pompösen Aussehens sehr funktional."
      },
      
      C4 : {
        name : "Dämmerung ",
        desc : "Die von der treuherzigen Io benutzte Stangenwaffe.<br><br>Sie wurde von Murasame angepasst, um ein Talent<br>zu aktivieren, das dem Träger beim Schwingen<br>zusätzlichen Schutz gibt. Wirst du bei der Gestaltung<br>deines Schicksals deine Vergangenheit finden oder<br>eine Zukunft mit Freunden schaffen?"
      },
      
      C5 : {
        name : "Schwarze Hellebarde",
        desc : "Eine Stangenwaffe mit einer pechschwarzen Klinge.<br><br>Der große, sensenartige Kopf wurde zum Köpfen<br>der Verlorenen entworfen. Jäger in Schwarz<br>achten nicht auf das Gewicht ihrer Waffen.<br>Kraft geht ihnen über alles, deshalb sind<br>geübte Hände ein Muss."
      },
      
      C6 : {
        name : "Assassinensichel",
        desc : "Das Werkzeug eines Henkers, der in der<br>Heulenden Grube lebte.<br><br>Es hat einen Talent-Aktivator, der eine Flüssigkeit<br>produziert und beim Schwingen Wassersäulen<br>schießt. Die Verlorenen, die es trugen, sind<br>nur noch Asche, aber die Kraft der Waffe<br>wird an den nächsten Träger weitergegeben."
      },
      
      C7 : {
        name : "Abendrot-Hellebarde",
        desc : "Eine verformte, mit Miasma befleckte<br>Königinnen-Schlächter-Hellebarde.<br><br>Selbst unorganische Materie ist nicht immun<br>gegen die Korruption der Königin, die den<br>schwarzen Glanz dieser Waffe abgestumpft und<br>ihre Eigenschaften geändert hat. Obwohl niemand<br>sie gern führt, ist diese Waffe sehr effektiv."
      },
      
      C8 : {
        name : "Bartaxt der Verlorenen",
        desc : "Eine Stangenwaffe, benutzt von gefallenen<br>Wiedergängern, die zu Verlorenen wurden.<br><br>Das Miasma hat ihre Eigenschaften verändert.<br>Sie wurde zum Töten von Verlorenen geschaffen,<br>aber später gegen Wiedergänger eingesetzt. Solche<br>Ironie ist nicht ungewöhnlich in der Welt von Vein."
      },
      
      C9 : {
        name : "Axt der Vernichtung",
        desc : "Eine zerstörerische Waffe, die einst einem<br>besonders starken Mitglied von Cerberus<br>gehörte.<br><br>Ihre Form änderte sich, als ihr Träger ein<br>Verlorener wurde, und sie erhielt eine<br>schreckliche neue Kraft, die jeden Schutz<br>durchbricht und Gegner völlig zertrennt."
      },
      
      C10 : {
        name : "Silberwolf-Streitaxt",
        desc : "Eine silberne Stangenwaffe der<br>Sicherheitseinheit Cerberus.<br><br>Diese eindrucksvolle Waffe strahlt eine Respekt<br>einflößende Aura aus. Die Eliteeinheit Cerberus<br>wurde nach der Operation Königinnen-Schlächter<br>gebildet und ihre Ausrüstung zeigt in geschickten<br>Händen ihren wahren Wert."
      },
      
      C11 : {
        name : "Himmelblauer Speer",
        desc : "Hellebarde, nach dem Speer eines Götter-<br>verschlingers mit großen Zielen gefertigt.<br>Wenn sie mit voller Kraft geschwungen<br>wird, springt eine Talentklinge aus ihrem<br>Kopf und gewährt dem Träger größere<br>Reichweite. Diese elegante, blaue Waffe<br>hat Götter durchbohrt und wird die<br>Verlorenen in Asche verwandeln."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Blutnebelhellebarde",
        desc : "Eine vom Raureif erfüllte Hellebarde.<br><br>Gleicht ihre niedrige Angriffskraft<br>mit geringem Gewicht und hoher<br>Stärkeskalierung aus.<br><br>Die ewige Kälte in dieser Waffe verleiht<br>aufgeladenen Angriffen eine Eiskomponente."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Blitz-Brionac",
        desc : "Eine vom Blitz galvanisierte Hellebarde.<br><br>Gleicht ihre niedrige Angriffskraft und<br>Waffenverteidigung mit geringem Gewicht<br>und hohem Ichor-Erhalt aus.<br><br>Die in blaues Licht gehüllte Klinge<br>verleiht aufgeladenen Angriffen eine<br>Blitzkomponente."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "König.-Schlächter-Hammer",
        desc : "Massenproduzierter Hammer für Wiedergänger<br>der Operation Königinnen-Schlächter.<br><br>Sollte die Gliedmaßen der Königin brechen,<br>ist aufgrund seines Gewichts aber unhandlich.<br>Sein Einsatz erfordert daher ausgiebiges Training."
      },
      
      D1 : {
        name : "Hammer der Versklavung",
        desc : "Ein einfacher Hammer.<br><br>Nichts weiter als ein Griff mit einem schweren <br>Betonblock. Kaum behandelte Waffe für <br>Wiedergänger. Wird vor allem von Wiedergängern <br>verwendet, die anderen untertan sind und gibt <br>ihnen im Kampf einen Funken Hoffnung."
      },
      
      D2 : {
        name : "Dampfwalzenhammer",
        desc : "Ein von Oliver, der dem Durst erlag und ein<br>Verlorener wurde, benutzter großer Hammer.<br><br>Auch ohne Pflege funktioniert diese Waffe<br>noch einwandfrei und hat dieselbe Kraft wie<br>während der Operation Königinnen-Schlächter.<br>Weggegeben, weil sie als nutzlos galt, gab sie <br>dem Sklaven, der sie erhielt, einen<br>Funken Hoffnung."
      },
      
      D3 : {
        name : "Schwere Axt",
        desc : "Eine von der Übergangsregierung<br>massenproduzierte lange Stangenwaffe.<br><br>Ihre starke Klinge erlaubt keine Präzisionsangriffe,<br>aber verursacht heftige Schnitte. Sie wurde zum<br>Einsatz gegen riesige Verlorene entworfen, aber<br>mangels Werkzeugen in Vein auch zum Abreißen von<br>Gebäuden und Beseitigen von Wildwuchs benutzt."
      },
      
      D4 : {
        name : "Impulsanker",
        desc : "Ein robuster mechanischer Hammer.<br><br>Hat einen Talent-Aktivator, der Hitzewellen<br>abfeuert, die seine Zerstörungskraft erhöhen.<br>Ein Schlag auf den Boden lässt die Erde beben<br>und erzeugt eine Schockwelle. Er ist das<br>Meisterstück einer Gruppe halbverrückter<br>Ingenieure und für einige Wiedergänger ihr<br>lebenslanger Begleiter."
      },
      
      D5 : {
        name : "Gewaltiger Hammer",
        desc : "Ein wuchtiger Hammer, benutzt von <br>Verlorenen, die durch Miasma größer wurden.<br><br>Seine Oberfläche wurde durch dichtes Miasma<br>gehärtet und ein kraftvoller Schwung kann<br>jeden Schutz durchbrechen. Die Suche vieler<br>Sklaven der Wiedergänger nach Blutperlen<br>endet oft mit einer furchtbaren Transfor-<br>mation, nach der sie solche Waffen benutzen."
      },
      
      D6 : {
        name : "Silberwolf-Kriegshammer",
        desc : "Ein silberner Kriegshammer der<br>Sicherheitseinheit Cerberus. <br><br>Der Schwerpunkt ist so gelagert, dass die<br>Waffe trotz ihrer Größe einfach zu handhaben<br>ist. Die Eliteeinheit Cerberus wurde nach der<br>Operation Königinnen-Schlächter gebildet,<br>und ihre Ausrüstung zeigt in geschickten<br>Händen ihren wahren Wert."
      },
      
      D7 : {
        name : "Labrys des Tyrannen",
        desc : "Eine Doppelaxt, die in stumpfem Gold glänzt.<br><br>Sie ist schwerer, als sie aussieht und nur<br>die Stärksten können sie effektiv einsetzen.<br>Die schimmernde Klinge und der Griff sind<br>nicht aus echtem Gold, sondern eine<br>Fälschung, hergestellt zur Geburt eines<br>Tyrannen."
      },
      
      D8 : {
        name : "Abendrot-Hammer",
        desc : "Ein verformter, mit Miasma befleckter<br>Königinnen-Schlächter-Hammer. <br><br>Selbst unorganische Materie ist nicht <br>immun gegen die Korruption der Königin, <br>die den schwarzen Glanz dieser Waffe <br>abgestumpft und ihre Eigenschaften <br>geändert hat. Obwohl niemand sie gern <br>führt, ist diese Waffe sehr effektiv."
      },
      
      D9 : {
        name : "Verbrannter Kriegshammer",
        desc : "Ein Kriegshammer, der sich durch große<br>Flammenhitze verformte und zu einer<br>Abrissbirne wurde, die sich mit<br>schwermütiger Hitze durch Fleisch und<br>Knochen brennt."
      },
      
      D10 : {
        name : "Schwere Axt d. Verlorenen",
        desc : "Eine Axt, benutzt von gefallenen<br>Wiedergängern, die zu Verlorenen wurden. <br><br>Das Miasma hat ihre Eigenschaften verändert. <br>Sie wurde zum Töten von Verlorenen geschaffen,<br>aber später gegen Wiedergänger eingesetzt.<br>Solche Ironie ist nicht ungewöhnlich in der Welt<br>von Vein."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Höllenfeuer-Hammer",
        desc : "Ein im Höllenfeuer gehärteter Kriegshammer.<br><br>Seine hohe Geschickskalierung verstärkt die<br>physische Angriffskraft und den Entzugswert.<br><br>Das Höllenfeuer in dem Metall brennt noch<br>immer und verleiht aufgeladenen Angriffen<br>eine Flammenkomponente."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Schneewehen-Sharur",
        desc : "Ein vom Raureif erfüllter Kriegshammer.<br><br>Trotz etwas leichterem Gewicht optimiert<br>für Verteidigungs- und Stärkeskalierung.<br><br>Die ewige Kälte des absoluten Nullpunkts<br>in dieser Waffe verleiht aufgeladenen<br>Angriffen eine Eiskomponente."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "König.-Schl.-Bajonett",
        desc : "Ein massenproduziertes Bajonett für<br>Wiedergänger der Operation Königinnen-Schlächter.<br><br>Der Talentgenerator ermöglicht effektive Fernangriffe,<br>was für Kämpfer, die den Nahkampf nicht schätzen,<br>ideal ist."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "Das Bajonett, das Mia immer in der Nähe behielt.<br><br>Es wurde leichter gemacht und angepasst, damit<br>selbst seine kleine Besitzerin es frei benutzen<br>konnte. Die Dellen und Kratzer auf der Oberfläche<br>erzählen davon, wie es zwei wichtige Leben<br>beschützt hat. Zum Dank erhielt es den Namen<br>einer Blume."
      },
      
      E2 : {
        name : "Aufstandunterdrücker",
        desc : "Ein Bajonett aus wiederverwerteten<br>Waffenteilen und Schrott.<br><br>Trotz seiner unfertigen Erscheinung funktioniert<br>der Talent-Aktivator reibungslos und attackiert<br>mit sauberer Streuung. Die Waffe wird von<br>Gesetzlosen bevorzugt, und oft sehen sich Personen<br>ihr gegenüber, die mit ihrem Reichtum protzen."
      },
      
      E3 : {
        name : "Bajonett",
        desc : "Ein von der Übergangsregierung<br>massenproduziertes Bajonett mit Sägeblatt.<br><br>Sein Talent-Aktivator schießt Streufeuer<br>über kurze Entfernungen. Es wurde für<br>unausgebildete Nutzer konzipiert, da viele<br>Wiedergänger nicht an der Waffe trainiert sind."
      },
      
      E4 : {
        name : "Rubellitdurchbohrer",
        desc : "Ein Achtung gebietendes Bajonett in Rot und<br>Silber, benannt nach einem roten Edelstein.<br><br>Sein langer, anmutiger Lauf feuert Kugeln,<br>die ihr Ziel zu verfolgen scheinen. Eine Sekte<br>der Wiedergänger hält sich für Edelleute und<br>sie geben ihren Waffen jeglichen Luxus, den<br>sie erübrigen können."
      },
      
      E5 : {
        name : "Silberwolf-Bajonett",
        desc : "Ein silbernes Bajonett, benutzt von<br>der Sicherheitseinheit Cerberus.<br>Die Klingen beiderseits des Laufs wurden für<br>Erstangriffe in hitzigen Nahkämpfen konzipiert.<br>Die Eliteeinheit Cerberus wurde nach der<br>Operation Königinnen-Schlächter gebildet und<br>ihre Ausrüstung zeigt in geschickten Händen<br>ihren wahren Wert."
      },
      
      E6 : {
        name : "Brennendes Desaster",
        desc : "Die Waffe des Kanoniers, einer von Midos Lakaien.<br><br>Besitzt einen Mechanismus, der Feuertalente<br>verstärkt, und schießt glühend heiße Flammen-<br>bögen. Es wurde für einen Schützen mit hoher<br>Talentkompatibilität gebaut und es ist möglich, die<br>Form des geschossenen Feuers zu verändern."
      },
      
      E7 : {
        name : "Abendrot-Bajonett",
        desc : "Ein verformtes, mit Miasma beflecktes<br>Königinnen-Schlächter-Bajonett.<br><br>Selbst unorganische Materie ist nicht immun<br>gegen die Korruption der Königin, die den schwarzen<br>Glanz dieser Waffe abgestumpft und ihre Eigenschaften<br>geändert hat. Obwohl niemand sie gern führt, ist<br>diese Waffe sehr effektiv."
      },
      
      E8 : {
        name : "Schwarzes Bajonett",
        desc : "Ein Bajonett mit schwarzem Lauf und schwarzer Klinge.<br><br>Die gebogene Klinge schneidet selbst das<br>härteste Fleisch und macht Gegner für einen<br>mächtigen Folgeschuss verwundbar. Jäger in<br>Schwarz achten nicht auf das Gewicht ihrer Waffen.<br>Kraft geht ihnen über alles, deshalb sind geübte<br>Hände ein Muss."
      },
      
      E9 : {
        name : "Libertador",
        desc : "Von der Gruftwächterin Eva benutztes Bajonett.<br><br>Es hat einen maßgefertigten Talent-Aktivator, der<br>zielsuchende Kugeln feuert. Die Waffe erhielt Eva<br>von ihrem Partner Jack, und ihre enorme Kraft<br>verdeutlicht seine große Loyalität zu ihr."
      },
      
      E10 : {
        name : "Bajonett der Verlorenen",
        desc : "Ein Bajonett, benutzt von gefallenen<br>Wiedergängern, die zu Verlorenen wurden.<br><br>Das Miasma hat seine Eigenschaften verändert.<br>Es wurde zum Töten von Verlorenen geschaffen,<br>aber später gegen Wiedergänger eingesetzt. Solche<br>Ironie ist nicht ungewöhnlich in der Welt von Vein."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Blutiger Schnee",
        desc : "Ein vom Raureif erfülltes Bajonett.<br><br>Gleicht seine niedrige Angriffskraft und<br>Waffenverteidigung mit geringem Gewicht<br>und hohem Ichor-Erhalt aus.<br><br>Diese eisige Schusswaffe bietet bei aufge-<br>ladenen Angriffen ein mächtiges Schnell-<br>feuer mit Eisprojektilen und eine durch<br>Eis verstärkte Klinge."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Donnerschlag",
        desc : "Ein vom Blitz galvanisiertes Bajonett.<br><br>Es ist leicht und sogar seine Nahkampfangriffe<br>verursachen ziemlichen Schaden.<br><br>Die von violettem Licht erfüllte Waffe<br>bietet bei aufgeladenen Angriffen eine<br>mit Blitzen verstärkte Klinge und ziel-<br>suchende Geschosse."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Nachtklaue",
        desc : "Ein Blutschleier des Ogertyps im<br>für Wiedergänger traditionellen Stil.<br>Der sehr effiziente Entzugsmechanismus<br>erhöht die aus Angriffen erhaltene<br>Ichormenge. Dieses Modell zeichnet sich<br>durch Form und Funktion aus und ist<br>aufgrund seiner begrenzten<br>Produktionsmenge äußerst wertvoll."
      },
      
      A1 : {
        name : "Edles Silber",
        desc : "Ein Blutschleier mit Fledermausflügelumhang.<br>Die Silberlinien für die Knochen enthalten<br>Systeme, die Unterstützungstalente<br>verbessern. Seine Schöpfer haben viel Wert<br>auf Stil gelegt, aber leider sind die<br>meisten Wiedergänger zu sehr mit Überleben<br>beschäftigt, um das zu bemerken."
      },
      
      A2 : {
        name : "GXM-Variante",
        desc : "Ein Blutschleier aus behandeltem Gewebe mit<br>Panzerung. So schützend wie er aussieht und<br>verbessert Unterstützungstalente. Geschaffen<br>von einem früheren Militärausrüster, aber<br>durch die Knappheit von synthetischen Fasern<br>und Legierungen in Vein können ihn nur<br>wenige Wiedergänger tragen."
      },
      
      A3 : {
        name : "Schwarzblut-Erlöser",
        desc : "Ein Blutschleier mit zerfetztem Umhang.<br>Auf den ersten Blick schäbig, aber er<br>verbessert Offensivtalente und Widerstand<br>gegen Statuseffekte. Der Hersteller ist<br>unbekannt. Er ist sensibel eingestellt und<br>der Transformationsmechanismus des<br>rechten Arms ist instabil, wodurch<br>zusätzliche Verstärkung nötig ist."
      },
      
      A4 : {
        name : "König.-Schlächter-Klaue",
        desc : "Ein Blutschleier, benutzt von Truppen der<br>Operation Königinnen-Schlächter. Verbessert<br>alle Talente, aber ist nicht so robust wie<br>gewünscht. Entworfen für die kostengünstige<br>Massenproduktion. Enthält eine Standard-<br>einsatzweste mit einer Entzugsfunktion, um<br>Wiedergänger damit schnell auszurüsten<br>und an die Front zu schicken."
      },
      
      A5 : {
        name : "Blutklaue",
        desc : "Ein Blutschleier des Ogertyps. Von einem<br>Wiedergänger, dessen Durst ihn zum Verlorenen<br>machte. Möglicherweise durch diese<br>Transformation weniger haltbar als andere<br>ihrer Art, aber das wird durch bemerkenswerte<br>Leichtigkeit mehr als wettgemacht. Die<br>gewachsenen Tentakel verdeutlichen den<br>Schrecken, wenn man zum Verlorenen wird."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Ritter des Ruins",
        desc : "Ein vom Höllenfeuer zerfetzter Blutschleier.<br><br>Dieses schwere Stück gewährt seinem Träger<br>hohe Schadensreduktion und Skalierung von<br>Dunkelheit-Talenten.<br><br>Es gibt keine Aufzeichnungen zu diesem Blut-<br>schleier; dieses Rätsel allein deutet aber<br>auf neue Kräfte und Möglichkeiten hin."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Zwielichtklaue",
        desc : "Ein von Donner zerfetzter Blutschleier.<br><br>Sein hohes Gewicht macht er mit Schadens-<br>reduktion und Stärkeskalierung wett.<br> <br>Starke Krieger suchen den Kampf und mit<br>diesem Schleier schaffen sie es bis zum<br>Gipfel der Macht."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Nachtspeer",
        desc : "Ein Blutschleier des Stacheltyps im für<br>Wiedergänger traditionellen Stil. Bietet<br>weniger Beweglichkeit als vergleichbare<br>Modelle, schützt jedoch verlässlich vor<br>allen Schadenstypen. Dieses Modell<br>zeichnet sich durch Form und Funktion<br>aus und ist aufgrund seiner begrenzten<br>Produktionsmenge äußerst wertvoll."
      },
      
      B1 : {
        name : "Rabenanzug",
        desc : "Ein Blutschleier, der stark Rabenflügeln ähnelt.<br><br>Dem mystischen Design entsprechend<br>verstärkt er die Kraft von Offensivtalenten.<br>Ursprünglich als Prototyp für Blutschleier der<br>Nacht-Serie geschaffen, führte eine Verlagerung<br>zu Balance dazu, dass nur dieser eine jemals<br>produziert wurde."
      },
      
      B2 : {
        name : "Winterumhang",
        desc : "Ein Blutschleier in Form von Kleidung zur<br>Erkundung von Polarregionen.<br>Schränkt stark die Beweglichkeit ein, aber bietet<br>soliden Schutz und verbessert Unterstützungstalente.<br>Entworfen für die Suche nach Blutperlen in<br>Bergregionen, was jedoch erfolglos blieb und<br>das Ende für dieses Modell bedeutete."
      },
      
      B3 : {
        name : "Silbergewand",
        desc : "Ein Blutschleier, der einer glänzenden<br>Ritterrüstung ähnelt.<br>Es ist hochresistent gegen durchbohrende<br>und schlitzende Angriffe und wurde von<br>Kunsthandwerkern geschaffen, die menschliche<br>Ästhetik erhalten wollten. Auch Wiedergänger<br>hegen diesen Wunsch."
      },
      
      B4 : {
        name : "König.-Schlächter-Dorn",
        desc : "Ein Blutschleier, benutzt von Truppen der<br>Operation Königinnen-Schlächter.<br>Verbessert alle Talente, aber ist nicht so robust<br>wie gewünscht. Stacheltypen können aus der<br>Entfernung benutzt werden und eignen sich für<br>Scharmützel, aber die Entzugsfunktion machte<br>die Massenproduktion unmöglich."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Anmutige Prominenz",
        desc : "Ein vom Höllenfeuer zerfetzter Blutschleier.<br><br>Besondere Merkmale: leicht, hohe Geschicks-<br>skalierung und Schadensreduktion.<br><br>Dieser Schleier ist aber nicht nur Show,<br>seine Eleganz reflektiert das Streben<br>nach Macht seines Schöpfers."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Eiszeithülle",
        desc : "Ein von Raureif zerfetzter Blutschleier.<br><br>Sein hohes Gewicht macht er mit Schadens-<br>reduktion und Skalierung von Dunkelheit-<br>Talenten wett.<br><br>Dieses würdevolle Kleidungsstück zeugt vom<br>unerschütterlichen Willen, Wiedergänger<br>zu beschützen."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Reißzahn der Nacht",
        desc : "Ein Blutschleier des Hundetyps im für<br>Wiedergänger traditionellen Stil. Verfügt<br>über starke Abwehrkräfte, die ihn<br>zuverlässig in jedem Kampf machen. Dieses<br>Modell zeichnet sich durch Form und Funktion<br>aus und ist aufgrund seiner begrenzten<br>Produktionsmenge äußerst wertvoll."
      },
      
      C1 : {
        name : "Blaue Hunde",
        desc : "Ein Blutschleier, der wie eine einfache<br>Jacke aussieht. <br><br>Nicht sehr widerstandsfähig gegen Elemente,<br>aber hochresistent gegen Statuseffekte.<br>Die niedrigen Kosten und der zu allem passende<br>Stil machen ihn bei Wiedergängern beliebt."
      },
      
      C2 : {
        name : "GXL-Verteidiger",
        desc : "Ein Blutschleier aus behandeltem Gewebe mit<br>Panzerung. Seine Schutzeigenschaften machen<br>ihn zu einer privaten Festung, aber er ist<br>sehr anfällig für Statuseffekte. Geschaffen<br>von einem früheren Militärausrüster, aber<br>durch die Knappheit von synthetischen Fasern<br>und Legierungen in Vein können ihn nur<br>wenige Wiedergänger tragen."
      },
      
      C3 : {
        name : "Bastion des Igels",
        desc : "Ein Blutschleier mit Metallspikes. Bietet<br>weniger Schutz als sein Aussehen vermuten<br>lässt, aber verstärkt Offensivtalente.<br>Gerüchten zufolge auf dem Schwarzmarkt<br>hergestellt. Nicht sehr funktional als<br>gewöhnliche Kleidung, doch sein<br>einschüchterndes Aussehen erfüllt seinen<br>Zweck."
      },
      
      C4 : {
        name : "Weißes Gewand",
        desc : "Ein Blutschleier, der an eine Mönchskutte<br>erinnert. <br><br>Erschwert die Fortbewegung etwas und bietet<br>wenig Schutz, aber verstärkt in hohem Maße<br>Unterstützungstalente. Für gewöhnlich getragen<br>von Wiedergängern einer religiösen Sekte, die<br>eines Tages spurlos verschwand."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Violette Ausrüstung",
        desc : "Ein vom Höllenfeuer zerfetzter Blutschleier.<br><br>Seinen Mangel an Talentskalierung macht er<br>mit geringem Gewicht und hoher Stärke-<br>skalierung wett.<br><br>Träger dieser leichten Blutschleier des<br>Hundetyps rasen wie entfesselte Bestien<br>waghalsig über das Schlachtfeld."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Reißzahn des Morgens",
        desc : "Ein von Donner zerfetzter Blutschleier.<br><br>Sein hohes Gewicht macht er mit Verstands-<br>und Geschicksskalierung sowie der Opti-<br>mierung für Lichttalente wett.<br><br>Angeblich trug der stärkste Wiedergänger einst<br>diesen Schleier.<br>Wer weiß, ob das wahr ist?"
      },
      
      
      // # IVY #
      D0 : {
        name : "Nachtdorn",
        desc : "Ein Blutschleier des Efeutyps im für<br>Wiedergänger traditionellen Stil.<br>Verstärkt die Effekte aller Talente und<br>bietet zuverlässigen Schutz gegen<br>nichtphysische Angriffe. Dieses Modell<br>zeichnet sich durch Form und Funktion<br>aus und ist aufgrund seiner begrenzten<br>Produktionsmenge äußerst wertvoll."
      },
      
      D1 : {
        name : "Elfenbeinornament",
        desc : "Ein mit Silber verzierter Blutschleier.<br><br>Bietet nicht sonderlich viel Schutz, aber<br>verbessert stark die Effizienz von Talenten.<br>Er verleiht der zerstörten Welt von Vein<br>einen Hauch von Schönheit und verkörpert<br>einen Sinn von Ästhetik, den Wiedergänger<br>fast völlig verloren haben."
      },
      
      D2 : {
        name : "GXH-Sturm",
        desc : "Blutschleier gefertigt aus einer Feldjacke<br>mit Entzugsfunktion. Bietet hohen Schutz,<br>ohne die Beweglichkeit einzuschränken und<br>stärkt Offensivtalente. Geschaffen von einem<br>früheren Militärausrüster, aber durch die<br>Knappheit von synthetischen Fasern und<br>Legierungen in Vein können ihn nur wenige<br>Wiedergänger besorgen."
      },
      
      D3 : {
        name : "Gebetstuch",
        desc : "Ein durch kunstvolles Design und intensives<br>Rot gekennzeichneter Blutschleier.<br><br>Bietet erstaunlichen Schutz und verbessert<br>Unterstützungstalente. Sein ursprünglicher<br>Besitzer betete für Erlösung, aber niemand<br>weiß, ob er erhört wurde."
      },
      
      D4 : {
        name : "Selbstmordsporn",
        desc : "Ein Blutschleier, der aussieht wie ein Hals-<br>band aus Dornen. Stärkt enorm die Kraft von<br>Offensivtalenten, aber bietet fast keinen Körper-<br>schutz.<br>Sein Schöpfer war wohl ein verschrobener Ingenieur,<br>der das schnelle Töten des Feindes für die einzig<br>wahre Verteidigung hielt, wenige nutzen ihn gern."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Betörender Dorn",
        desc : "Ein von Raureif zerfetzter Blutschleier.<br><br>Sein hohes Gewicht macht er mit Schadens-<br>reduktion und Geschicksskalierung wett.<br><br>Unter der eleganten Kapuze verbirgt sich<br>der stechende Blick von jemandem, der nach<br>dem Todeskuss und frischem Blut dürstet."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Meisterliche Dornen",
        desc : "Ein von Donner zerfetzter Blutschleier.<br><br>Seinen Mangel an Talentskalierung macht er<br>mit geringem Gewicht und hoher Geschicks-<br>und Willenskraftskalierung wett.<br><br>Angeblich fühlt sich jeder Wiedergänger mit<br>diesem Schleier, als hätte er Flügel."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Erleichterung",
        desc : "Reduziert das Gewicht eines Gegenstands<br>auf Kosten verringerter Basis-Werte."
      },
      
      A1 : {
        name : "Befestigung",
        desc : "Erhöht das Gewicht eines Gegenstands<br>und dessen Basis-Werte."
      },
      
      A2 : {
        name : "Verstärkung",
        desc : "Gewährt Ausrüstung höhere Werte-Skalierung.<br>Reduziert Waffen-/Talentangriffseigensch."
      },
      
      A3 : {
        name : "Talente",
        desc : "Erhöht Angriffskraft einer Waffe & Talent-Effektivität eines<br>Blutschleiers enorm. Reduziert Werte-Skalierung enorm."
      },
      
      A4 : {
        name : "Verschlingen",
        desc : "Verbessert den Entzugswert eines Gegenst.<br>Reduziert Waffen-/Talentangriffseigensch."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Feuer",
        desc : "Erfüllt Ausrüstung mit Feuer. Reduziert<br>Waffen-/Talentangriff & Werte-Skalierung."
      },
      
      B1 : {
        name : "Eis",
        desc : "Erfüllt Ausrüstung mit Eis. Reduziert<br>Waffen-/Talentangriff & Werte-Skalierung."
      },
      
      B2 : {
        name : "Blitz",
        desc : "Erfüllt Gegenst. mit Elektrizität. Reduziert<br>Waffen-/Talentangriff & Werte-Skalierung."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : "Gift",
        desc : "Erzeugt Gegenst., der Gegner bei verringer-<br>ten Talenteigenschaften + Angriff vergiftet."
      },
      
      C1 : {
        name : "Paralyse",
        desc : "Erzeugt Gegenst., der Gegner bei verringer-<br>ten Talenteigensch. und Angriff paralysiert."
      },
      
      C2 : {
        name : "Hemmen",
        desc : "Erzeugt Gegenst., der Gegner bei verringer-<br>ten Talenteigenschaften und Angriff hemmt."
      },
      
      C3 : {
        name : "Langsam",
        desc : "Erzeugt Gegenst., der Gegner bei verringer-<br>ten Talenteigensch. und Angriff verlangsamt."
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
