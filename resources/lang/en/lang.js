// # ENGLISH TRANSLATION
// Language file for the entire application which can be used for translations.
window._lang = {
  // general placeholders
  na : 'N/A', // English abbreviation for "Not Available"; Japanese typically use "なし" (so use your equiv.)
  none : '(None)',
  
  
  // titles/labels
  weapon : 'Weapon',
  blood_veil : 'Blood Veil',
  transform : 'Transform',
  blood_code : 'Blood Code',
  gift_type : 'Gift Type',
  passive : 'Passive',
  active : 'Active',
  options : 'Options',
  code_owner : 'Code Owner',
  origin : 'Learned from: ',
  companion_rank : 'Companion Rank',
  rv_mastery : 'Rv Mastery',
  exclusive : 'Exclusive',
  dlc : 'DLC',
  
  
  // modal
  modal_ok : 'OK',
  modal_close : 'Close',
  modal_title_default : 'Popup',
  
  
  // preset selector
  preset_default : 'Select a Preset Build',
  preset_windows : 'Load Preset?'
  preset_empty : 'Empty Build',
  preset_random : 'Random Build',
  preset_warn : 'Do you want to load the "%{PRESET_NAME}" build? Your current build will be overwritten.',
  preset_stop_warning : 'Stop showing this warning',
  preset_submit : 'Submit a Build',
  preset_submit_confirm : 'Do you want to submit a build? You will leave the current page. Please make sure to save your build before proceeding.',
  preset_author : 'Author',
  preset_origin : 'Source',
  preset_desc : 'Description',
  
  // preset groups
  preset_group : {
    initial : 'Default',
    '1h' : 'One-handed Sword',
    '2h' : 'Two-handed Sword',
    halberd : 'Halberd',
    hammer : 'Hammer',
    bayonet : 'Bayonet',
    light_gifts : 'Light Gifts',
    dark_gifts : 'Dark Gifts',
    debuff : 'Debuffs',
    misc : 'Miscellaneous'
  },
  
  
  // language selector
  lang_select : 'Language',
  submit_translation : 'Submit a Translation',
  submit_translation_confirm : 'Do you want to submit a translation? You will leave the current page. Please make sure to save your build before proceeding.',
  
  
  // save build
  save_build : 'Save Build',
  save_build_desc : 'Copy the URL or Code for your build to save it or share it with others online.',
  copy_url : 'Copy URL',
  copy_code : 'Copy Code',
  copy_success : 'Copied!',
  
  // load build
  load_build : 'Load Build',
  load_build_label : 'Build URL/Code',
  load_build_desc : 'Paste your Build URL or Code into the textarea below and click the "Load Build" button to load the build. Please note that this will overwrite your current build.',
  load_build_error : 'Please insert a build URL or Code to load a build.',

  
  // stats
  status : 'Status',
  lv : 'Level',
  hp : 'HP',
  sta : 'Stamina',
  ichor : 'Ichor',
  str : 'Strength',
  dex : 'Dexterity',
  mnd : 'Mind',
  wil : 'Willpower',
  vit : 'Vitality',
  for : 'Fortitude',
  
  
  // weight
  weight : 'Weight',
  total_weight : 'Total Weight',
  weight_limit : 'Weight Limit',
  
  
  // attack stats
  attack : 'Attack',
  drain_attack : 'Drain Attack',
  physical : 'Physical', // weapon damage
  base : 'Base', // base damage
  scaling : 'Scaling', // damage from scaling
  drain_rating : 'Drain Rating',
  
  
  // defense stats
  defense : 'Defense',
  stamina_reduction : 'Stamina Reduction',
  balance : 'Balance',
  base_balance : 'Base Balance',
  
  
  // resistances
  status_effects : 'Status Effects',
  resistances : 'Resistances',
  venom : 'Venom',
  stun : 'Stun',
  inhibit : 'Inhibit',
  slow : 'Slow',
  leak : 'Leak',
  
  
  // misc menu options
  passive_effect : 'Passive Effects',
  on : 'On',
  off : 'Off',
  hint : 'Read Hint',
  
  
  // info group titles (stuff shown in the bottom info window when hovering over an item/skill)
  stat_scaling : 'Stat Scaling',
  required_stats : 'Required Stats',
  
  
  // mobility
  mobility : 'Mobility',
  mobi : {
    base : 'Base Mobility', // label for blood code mobility type (also used in the status display)
    slow : 'Slow',
    normal : 'Normal',
    quick : 'Quick'
  },

  
  // skill tree
  // used for actives, but is also used for passives (dunno know why, but I included it anyway to be identical to the game)
  tree : {
    title : 'Tree',
    dark : 'Dark',
    light : 'Light',
    skill : 'Skill'
  },
  
  // weapon names/tooltips for weapon icons next to tree: skill
  '1h' : 'One-handed Sword',
  '2h' : 'Two-handed Sword',
  halberd : 'Halberd',
  hammer : 'Hammer',
  bayonet : 'Bayonet',
  
  
  // attack attributes
  attr : {
    // physical (mainly for weapons, but also present on some actives)
    slash : 'Slash',
    crush : 'Crush',
    pierce : 'Pierce',
    
    // elemental (typically used in magic, but can be present on enchan- *ahem* transformed weapons)
    blood : 'Blood',
    fire : 'Fire',
    ice : 'Ice',
    lightning : 'Lightning'
  },
  
  
  // gift stats
  gift : 'Gift', // singular
  gifts : 'Gifts', // plural
  
  ichor_cost : 'Ichor Cost',
  cooldown : 'Cooldown',
   seconds : 'sec.', // displayed after the cooldown number
  physical : 'Attack Type',
  elemental : 'Non-Physical',
  usage_req : 'Usage Requirements',
  
  
  // removal (of skills/equipment)
  remove : 'Remove',
  remove_desc : 'Remove the currently equipped skill or equipment.',
  
  
  // equip error
  equip_error : 'You do not meet the requirements to use one or more Gifts/Items you have equipped.',
  
  
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
        name : "Queenslayer",
        desc : "Your own blood code, which was thought to be lost <br>in the fight with the Queen long ago.<br><br>The old feelings inside still speak to you.<br>This time you must ensure a lasting peace.<br><br>This code is well-balanced for exploration and melee <br>combat, and features high HP and endurance.",
        owner : "Player"
      },

      A1 : {
        name : "Fighter",
        desc : "The blood code of a warrior who wields a sword longer <br>than they are tall. <br><br>It holds the will of one who risked their lives using every <br>ounce of strength they had in Operation Queenslayer. <br><br>This code boasts endurance for fighting in close quarters.<br>Raises abilities based on strength and dexterity.",
        owner : "Unknown"
      },

      A2 : {
        name : "Ranger",
        desc : "The blood code of a revenant who danced nimbly <br>across the battlefield. <br><br>It holds the will of one who rescued those living in <br>fear of the Lost and who hunted for blood beads to <br>share with others.<br><br>This code excels at providing support and defense <br>buffs with Gifts.",
        owner : "Unknown"
      },
      
      A3 : {
        name : "Caster",
        desc : "The blood code of a revenant who turns drained blood <br>into overwhelming power.<br><br>It holds the will of one who cleverly used complex gifts <br>to destroy hordes of the Lost.<br><br>This code specializes in powerful attack-type Gifts that <br>can be used from a distance.",
        owner : "Unknown"
      },
      
      A4 : {
        name : "Berserker",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds the steel will of one who atoned for past <br>mistakes and battled to the end through the agony of <br>thirst in order to save others.<br><br>This code features high strength and endurance, and <br>its low ichor stock can be offset with heavy armor.",
        owner : "Oliver Collins"
      },
      
      A5 : {
        name : "Prometheus",
        desc : "A blood code received from Louis.<br>It holds his will, built up and hardened by overcoming <br>countless hardships in the name of the salvation of <br>revenants.<br><br>This code is well-balanced for combat but is somewhat <br>fragile. Its Gifts bolster dodging and parrying.",
        owner : "Louis"
      },
      
      A6 : {
        name : "Hunter",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds a will that somehow remained full of hope <br>despite being used as a pawn and enduring through <br>day after hellish day.<br><br>This code excels at ranged combat, and features <br>Gifts that support ranged attacks with the bayonet.",
        owner : "Kevin"
      },
      
      A7 : {
        name : "Mercury",
        desc : "A blood code received from Coco. <br>It holds her fighting will that pushes aside the fear of <br>frenzy and battle in order to travel the ruined world, <br>searching for the materials to rebuild civilization.<br><br>This code allows for safe exploration with its balanced <br>stats and Gifts related to stamina and haze.",
        owner : "Coco"
      },
      
      A8 : {
        name : "Hermes",
        desc : "A blood code received from Davis. <br>It holds his steadfast will to chase after a ray of hope <br>amidst despair and plunge into danger so that new <br>hope may be found.<br><br>Strikes a fine balance between melee attacks and a <br>variety of useful Gifts.",
        owner : "Davis"
      },
      
      A9 : {
        name : "Darkseeker",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds a bitter will to hold tight to duty, seeking to <br>preserve its value even as that value seems to fade.<br><br>This code features many battle-ready Gifts, <br>specializing in those that deal with venom.",
        owner : "Nameless Successor"
      },
      
      A10 : {
        name : "Atlas",
        desc : "A blood code received from Yakumo. <br>It holds his fervent willingness to risk his life fighting <br>to protect those dear to him.<br><br>This code allows for the use of heavy armor, making <br>it excellent for enduring combat in close quarters. <br>It also features Gifts useful for standing up against <br>powerful threats.",
        owner : "Yakumo Shinonome"
      },
      
      A11 : {
        name : "Assassin",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds a determined will to survive in a chaotic <br>world in order to gain freedom.<br><br>This code is optimal for melee combat, and features <br>Gifts that are great for surprise attacks.",
        owner : "Riki"
      },
      
      A12 : {
        name : "Artemis",
        desc : "A blood code received from Mia. <br>It holds a dauntless will to strive to overcome a cruel <br>fate and liberate those who suffer.<br><br>This code has high stamina and attack-type Gifts, but <br>suffers from low endurance. It also features Gifts that <br>boost drain abilities.",
        owner : "Mia Karnstein"
      },
      
      A13 : {
        name : "Isis",
        desc : "A blood code received from Aurora. <br><br>It holds her resolute will to defend and free one who <br>chose to suffer so that revenants could live in peace.<br><br>This code specializes in ranged combat by <br>overpowering enemies with various ichor attacks.",
        owner : "Aurora Valentino"
      },
      
      A14 : {
        name : "Queen's Ribcage",
        desc : "A blood code with some of the Queen's power received <br>from Aurora's relic. <br><br>It creates a disturbing feeling that gnaws from within, but <br>provides dizzying power that rushes through the blood.<br><br>This code specializes in ranged attacks and overwhelming <br>enemies with a variety of attack-type Gifts.",
        owner : "Queen"
      },
      
      A15 : {
        name : "Eos",
        desc : "A blood code received from Io. <br><br>It holds her firm will to stand up and make personal <br>choices rather than simply being an Attendant.<br><br>This code boasts support-type Gifts, high endurance, <br>and plenty of ichor.",
        owner : "Io"
      },
      
      A16 : {
        name : "Fionn",
        desc : "A blood code received from Nicola. <br>It holds his kindhearted will to endure the torment of <br>battling himself so that those he cherishes can live in <br>a more peaceful world.<br><br>This code features high endurance and total weight, <br>making it good for melee combat. Its low ichor stock <br>can be offset with tough armor.",
        owner : "Nicola Karnstein"
      },
      
      A17 : {
        name : "Queen's Breath",
        desc : "A blood code with some of the Queen's power received <br>from Nicola's relic. <br>It creates a disturbing feeling that gnaws from within, but <br>provides dizzying power that rushes through the blood.<br><br>This code specializes in battle styles that utilize enhanced <br>Gifts. It supplements its low stats with Gifts.",
        owner : "Queen"
      },
      
      A18 : {
        name : "Survivor",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds the sturdy will to risk one's life in fighting <br>for the next generation's chance at a future.<br><br>This code focuses on dexterity and boasts Gifts that <br>are useful in battle.",
        owner : "Carmilla"
      },
      
      A19 : {
        name : "Dark Knight",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds a tragic will that was subject to inhumane <br>experiments before becoming Mido's puppet and <br>finally, one of the Lost.<br><br>This gift focuses on high endurance and strength, <br>also features Gifts effective when used with a halberd.",
        owner : "Miguel Garcia"
      },
      
      A20 : {
        name : "Scathach",
        desc : "A blood code received from Emily. <br><br>It holds her powerful will that took the place of her <br>sleeping comrades and fought on in their defense.<br><br>This gift is well-balanced for both Gifts and physical <br>attacks especially specialized in fire-based Gifts.",
        owner : "Emily Su"
      },
      
      A21 : {
        name : "Queen's Claw",
        desc : "A blood code with some of the Queen's power received <br>from Emily's relic. <br><br>It creates a disturbing feeling that gnaws from within, but <br>provides dizzying power that rushes through the blood.<br><br>This code enables you to control the battlefield by <br>overwhelming enemies with both Gifts and physical attacks.",
        owner : "Queen"
      },
      
      A22 : {
        name : "Harmonia",
        desc : "A blood code received from Eva. <br><br>It holds her will to pay back and dedicate her life to the <br>one who saved her from being a slave.<br><br>This code improves focus bonuses and features <br>excellent Dark Gifts. It is weak to being staggered, but <br>supplies ample amounts of ichor.",
        owner : "Eva Roux"
      },
      
      A23 : {
        name : "Queen's Throat",
        desc : "A blood code with some of the Queen's power received <br>from Eva's relic. <br><br>It creates a disturbing feeling that gnaws from within, but <br>provides dizzying power that rushes through the blood.<br><br>This code excels at Gift-based combat and features many <br>support-type Gifts.",
        owner : "Queen"
      },
      
      A24 : {
        name : "Heimdall",
        desc : "A blood code received from Jack. <br><br>It holds his do-or-die will to sacrifice everything for duty <br>and to preserve balance.<br><br>This code specializes in highly aggressive melee combat, <br>but its weight allowance is extremely low.",
        owner : "Jack Rutherford"
      },
      
      A25 : {
        name : "Hephaestus",
        desc : "A blood code received from Murasame. <br>It holds her passionate will to support allies who throw <br>themselves into difficult battles and watch over them <br>with a smile when they come home.<br><br>This code focuses specializes in dexterity-based <br>weapons, and uses devious Gifts to toy with the enemy.",
        owner : "Rin Murasame"
      },
      
      A26 : {
        name : "Warrior",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds the proud will of a veteran warrior who kept <br>swinging their weapon until the very end.<br><br>This code is ideal for fighting styles focusing on <br>strength, and provides Gifts that aid in survival.",
        owner : "Murasame's Assistant"
      },
      
      A27 : {
        name : "Scout",
        desc : "A blood code inherited from a repaired Vestige core. <br>It holds a loving will to put away one's own desires <br>and live for the sake of those one cherishes.<br><br>This code excels at Gift-based combat with great drain <br>capabilities, and allows for the use of light armor, <br>enabling you to quickly maneuver the battlefield.",
        owner : "Naomi"
      },
      
      A28 : {
        name : "Queen",
        desc : "A blood code born from gathering all the relics and <br>becoming the Queen. <br><br>The will it holds does not contain any hint of rage or <br>sorrow. It is made from pure loneliness. <br><br>This code specializes in Gifts and boasts a high ichor <br>stock, enabling you to overwhelm the enemy.",
        owner : "Queen"
      },
      
      A29 : {
        name : "Hades",
        desc : "A blood code received from Silva. <br>It holds his determined will to give up everything end <br>endure total isolation to save humanity's future.<br><br>This code boasts high attack power taken from both <br>strength and dexterity, and is ideal for using heavy <br>equipment.",
        owner : "Gregorio Silva"
      },
      
      A30 : {
        name : "Demeter",
        desc : "A blood code received from Karen. <br>It holds her merciful will to sacrifice herself for those <br>who suffer the torment of thirst and carry the burden <br>of sins caused by a cruel fate.<br><br>This code allows for Gift-based support with its high <br>ichor stock. It can also output high strength-based <br>damage in combat.",
        owner : "Karen"
      },
      
      A31 : {
        name : "Ishtar",
        desc : "A blood code inherited from Cruz's repaired Vestige core. <br>It holds her determined will to eliminate a menace and <br>save the weak from the days when Project QUEEN first <br>started.<br><br>This code features Gifts that aid in both attacking and <br>defending, and has some unique Gifts that involve self-sacrifice.",
        owner : "Cruz Silva"
      },
      
      A32 : {
        name : "Harbinger",
        desc : "The blood code of one who had a heart that boiled with <br>secret ambitions and arose as a revenant.<br>It is filled with the inexorable will to crush all others with <br>your unearthly might and be known to all in Vein, Gaol of <br>the Mists. <br><br>It holds unique Gifts that can only be used by those with <br>determination.",
        owner : "Unknown"
      },
      
      A33 : {
        name : "Astrea",
        desc : "A blood code that appeared as a manifestation of Mia's <br>wish for happiness.<br><br>It is filled with a desire to provide relief for weary <br>comrades who have thankfully returned from the field.<br><br>This code provides balance and stability in combat, <br>and features Gifts useful during exploration.",
        owner : "Mia Karnstein"
      },
      
      // Hellfire Knight DLC
      A34 : {
        name : "Asclepius",
        desc : "A stamina and HP-focused blood code inherited from<br>the repaired Vestige core of Valerio, Jack's former partner.<br><br>It holds the resolute will to support and protect all.<br><br>Though this code does not have many options for direct combat,<br>it greatly aids survival with its high HP and stamina.",
        owner : "Valerio"
      },
      
      A35 : {
        name : "Achilles",
        desc : "A blood code with high dexterity and stamina<br>inherited from a repaired Vestige core.<br><br>It holds the unyielding will to blaze across<br>countless battlefields.<br><br>This code's wealth of stamina, light weaponry,<br>and speedy attacks are ideal for putting on the<br>pressure in head-to-head combat.",
        owner : "Unknown"
      },
      
      A36 : {
        name : "Surt",
        desc : "A blood code claimed from a horror sealed<br>deep in the depths.<br><br>The radiance of a blazing inferno within still dazzles<br>after its long slumber, filling one's body with a fearsome<br>might that pulverizes all who dare come near.<br><br>With high strength, fortitude, and a great store of stamina,<br>this blood code makes for dynamic battles.",
        owner : "Hellfire Knight"
      },
      
      // Frozen Empress DLC
      A37 : {
        name : "Pollux",
        desc : "A strength and HP-focused blood code inherited from<br>a repaired Vestige core.<br><br>It holds the will of a kindhearted warrior who fought<br>side by side with friends.<br><br>This code excels in meeting enemy attacks with strong<br>defense and durability, then dishing out powerful blows in return.",
        owner : "Unknown"
      },
      
      A38 : {
        name : "Ymir",
        desc : "A blood code claimed from a horror sealed<br>deep in the depths.<br><br>The shimmer of frozen blossoms within glitters as it did<br>before its long slumber, sharpening one's keen eye for<br>the perfect opportunity to annihilate all in one fell swoop.<br><br>This code boasts high willpower and vitality,<br>enhancing both the HP and the power of dark Gifts.",
        owner : "Frozen Empress"
      },
      
      // Lord of Thunder DLC
      A39 : {
        name : "Perseus",
        desc : "A blood code with high willpower and mind inherited<br>from a repaired Vestige core.<br><br>It holds the will of a clever warrior who held many a <br>battle in the palm of their hand.<br><br>Boasting powerful Gifts and plenty of ichor, this code<br>is built to annihilate foes one after another.",
        owner : "Unknown"
      },
      
      A40 : {
        name : "Váli",
        desc : "A blood code claimed from a horror sealed<br>deep in the depths.<br><br>The flash of cracking thunderclaps within is no duller<br>from its long slumber, granting one the power to strengthen<br>oneself at will and trample all in one's path.<br><br>With high dexterity and mind, this code specializes<br>in a wide selection of light Gifts that support battle<br>with enhancements.",
        owner : "Lord of Thunder"
      },
      
      A41 : {
        name : "Orion",
        desc : "A blood code with high willpower and dexterity<br>inherited from a repaired Vestige core.<br><br>It holds the will of a gifted sharpshooter who once<br>danced across the battlefield with elegance.<br><br>This code is optimized for ranged combat, and its<br>high willpower grants great attack power to gunfire rounds.",
        owner : "Unknown"
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : "Health Boost",
        desc : "Increases maximum HP."
      },

      A1 : {
        name : "Health Stimulant",
        desc : "Increases maximum HP."
      },

      A2 : {
        name : "Stamina Boost",
        desc : "Increases maximum stamina."
      },
      
      A3 : {
        name : "Stamina Stimulant",
        desc : "Increases maximum stamina."
      },
      
      A4 : {
        name : "Sprinter",
        desc : "Reduces stamina drained by dashing."
      },
      
      A5 : {
        name : "Sharpened Fangs",
        desc : "Increases damage dealt by a special drain performed <br>after a parry/back attack."
      },
      
      A6 : {
        name : "Tenacious Fang",
        desc : "Increases damage dealt by drain attacks performed after <br>a launch attack."
      },
      
      A7 : {
        name : "Heroic Fang",
        desc : "Increases damage dealt by charged drains."
      },
      
      A8 : {
        name : "Swift Destruction",
        desc : "Increases damage dealt in proportion to your mobility."
      },
      
      A9 : {
        name : "Survival Instinct",
        desc : "Boosts Gift abilities, weapon & drain attack power when <br>your HP is below a certain amount."
      },
      
      A10 : {
        name : "Savvy Evasion",
        desc : "Increases the amount of focus gained from dodging <br>attacks."
      },
      
      A11 : {
        name : "Resilient Focus",
        desc : "Increases the amount of focus gained by receiving <br>damage."
      },
      
      A12 : {
        name : "Weapon Drain Rating Up",
        desc : "Increases the drain rating of weapon attacks."
      },
      
      A13 : {
        name : "Avarice",
        desc : "Increases the amount of ichor gained from drain attacks."
      },

      A14 : {
        name : "Vow of Ichor",
        desc : "Reduces maximum HP to increase the amount of ichor <br>that can be held."
      },

      A15 : {
        name : "Max Ichor Boost",
        desc : "Increases the maximum amount of ichor that can be held."
      },
      
      A16 : {
        name : "Increased Gift Speed",
        desc : "Increases the speed of your Gifts."
      },
      
      A17 : {
        name : "Charge Accelerator",
        desc : "Increases the speed of charged actions."
      },
      
      A18 : {
        name : "Debuff Build-Up",
        desc : "Increases debuff build-up against foes."
      },
      
      A19 : {
        name : "Revenant's Ambition",
        desc : "Allows you to equip heavier weapons and Blood Veils."
      },
      
      A20 : {
        name : "Opportunism",
        desc : "Increases weapon damage dealt against enemies with <br>status ailments."
      },
      
      // Lord of Thunder DLC
      A21 : {
        name : "Rush of Blood",
        desc : "Greatly increases max ichor limit, but greatly<br>lowers Gift power and stamina recovery rate."
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : "Balance Up",
        desc : "Increases balance."
      },

      B1 : {
        name : "Deft Parry",
        desc : "Fully restores stamina when you parry an attack."
      },
      
      B2 : {
        name : "Guard Drain Rating Up",
        desc : "Increases your drain rating when you guard an enemy's <br>attack."
      },
      
      B3 : {
        name : "Firm Stand",
        desc : "Receiving fatal damage when your HP is over a certain <br>amount will leave you with 1 HP.",
        usage_req : "Atlas Blood Codes"
      },
      
      B4 : {
        name : "Blood Grab",
        desc : "Dodging enemy attacks drains their ichor according to <br>your weapon's drain rating.",
        usage_req : "Artemis Blood Codes"
      },
      
      B5 : {
        name : "Evasive Snare",
        desc : "Dodging enemy attacks generates projectiles at the <br>cost of ichor that attack the enemy.",
        usage_req : "Hephaestus Blood Codes"
      },
      
      B6 : {
        name : "Venom Resistance",
        desc : "Increases venom resistance."
      },
            
      B7 : {
        name : "Stun Resistance",
        desc : "Increases stun resistance."
      },
      
      B8 : {
        name : "Inhibit Resistance",
        desc : "Increases inhibit resistance."
      },
      
      B9 : {
        name : "Slow Resistance",
        desc : "Increases slow resistance."
      },
      
      B10 : {
        name : "Leak Resistance",
        desc : "Increases leak resistance."
      },


      // # STAT BOOSTS #
      C0 : {
        name : "Strength Up",
        desc : "Increases strength."
      },
      
      C1 : {
        name : "Dexterity Up",
        desc : "Increases dexterity."
      },
      
      C2 : {
        name : "Mind Up",
        desc : "Increases mind."
      },
      
      C3 : {
        name : "Willpower Up",
        desc : "Increases willpower."
      },
      
      C4 : {
        name : "Vitality Up",
        desc : "Increases vitality."
      },
      
      C5 : {
        name : "Fortitude Up",
        desc : "Increases fortitude."
      },
      
      C6 : {
        name : "Strength/Dexterity Up",
        desc : "Increases strength and dexterity."
      },
      
      C7 : {
        name : "Strength/Willpower Up",
        desc : "Increases strength and willpower."
      },

      C8 : {
        name : "Strength/Vitality Up",
        desc : "Increases strength and vitality."
      },
      
      C9 : {
        name : "Dexterity/Willpower Up",
        desc : "Increases dexterity and willpower."
      },
      
      C10 : {
        name : "Dexterity/Fortitude Up",
        desc : "Increases dexterity and fortitude."
      },
      
      C11 : {
        name : "Mind/Willpower Up",
        desc : "Increases mind and willpower."
      },
      
      C12 : {
        name : "Mind/Vitality Up",
        desc : "Increases mind and vitality."
      },
      
      C13 : {
        name : "Mind/Fortitude Up",
        desc : "Increases mind and fortitude."
      },

      // Hellfire Knight DLC
      C14 : {
        name : "Strength/Fortitude Up",
        desc : "Increases strength and fortitude."
      },
      
      // Frozen Empress DLC
      C15 : {
        name : "Willpower/Vitality Up",
        desc : "Increases willpower and vitality."
      },
      
      // Lord of Thunder DLC
      C16 : {
        name : "Dexterity/Mind Up",
        desc : "Increases dexterity and mind."
      },
      

      // # FOCUS BOOSTS #
      D0 : {
        name : '<span style="font-family:GEZFont;"></span> Dark Impulse',
        desc : "Increases the effects of dark Gifts while you are focused."
      },

      D1 : {
        name : '<span style="font-family:GEZFont;"></span> Light Impulse',
        desc : "Increases the effect of light Gifts while you are focused."
      },
      
      D2 : {
        name : '<span style="font-family:GEZFont;"></span> Guard Stability',
        desc : "Reduces stamina consumption from guarding while you <br>are focused."
      },
      
      D3 : {
        name : '<span style="font-family:GEZFont;"></span> Focused Guard',
        desc : "Increases weapon defense against physical attacks while <br>you are focused."
      },
      
      D4 : {
        name : '<span style="font-family:GEZFont;"></span> Focused Stamina Usage',
        desc : "Reduces stamina spent while you are focused."
      },
      
      D5 : {
        name : '<span style="font-family:GEZFont;"></span> Maintained Focus',
        desc : "Reduces the rate at which the focus gauge is consumed <br>over time while you are focused."
      },
      
      D6 : {
        name : '<span style="font-family:GEZFont;"></span> Focused Carnage',
        desc : "Reduces the rate at which the focus gauge is consumed <br>by attacks while you are focused."
      },
      
      D7 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor Strikes',
        desc : "Reduces the ichor cost of weapon attacks while you are <br>focused."
      },
      
      D8 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor Reduction',
        desc : "Reduces ichor consumption while you are focused.",
        usage_req : "Queen's Throat Blood Codes"
      },
      
      D9 : {
        name : '<span style="font-family:GEZFont;"></span> Drain Boost',
        desc : "Increases all drain ratings while you are focused."
      },
      
      D10 : {
        name : '<span style="font-family:GEZFont;"></span> Focused Gift Speed',
        desc : "Increases the speed of your Gifts while you are focused."
      },
      
      D11 : {
        name : '<span style="font-family:GEZFont;"></span> Blood Buff',
        desc : "Adds blood damage to your current weapon while you <br>are focused."
      },
      
      D12 : {
        name : '<span style="font-family:GEZFont;"></span> Fire Buff',
        desc : "Adds fire damage to your current weapon while you are <br>focused."
      },
      
      D13 : {
        name : '<span style="font-family:GEZFont;"></span> Ice Buff',
        desc : "Adds ice damage to your current weapon while you are <br>focused."
      },
      
      D14 : {
        name : '<span style="font-family:GEZFont;"></span> Lightning Buff',
        desc : "Adds lightning damage to your current weapon while you <br>are focused."
      },
      
      D15 : {
        name : '<span style="font-family:GEZFont;"></span> Venom Buff',
        desc : "Applies the venom effect to your current weapon while <br>you are focused."
      },
      
      D16 : {
        name : '<span style="font-family:GEZFont;"></span> Stun Buff',
        desc : "Applies the stun effect to your current weapon while <br>you are focused."
      },
      
      D17 : {
        name : '<span style="font-family:GEZFont;"></span> Goddess&#39;s Smile',
        desc : "Restores HP when you enter a focused state."
      },
      
      // Frozen Empress DLC
      D18 : {
        name : '<span style="font-family:GEZFont;"></span> Ichor Focus',
        desc : "Restores ichor when you enter a focused state."
      },
      
      // Lord of Thunder DLC
      D19 : {
        name : '<span style="font-family:GEZFont;"></span> All Stats Up',
        desc : "Increases all stats while you are focused."
      },
      
      D20 : {
        name : '<span style="font-family:GEZFont;"></span> Stopping Power',
        desc : "Increases the extent enemies lose balance from<br>your bayonet shots while you are focused."
      },


      // # WEAPON MASTERY #
      E0 : {
        name : "One-handed Sword Mastery",
        desc : "Increases attack power when equipped with a one-handed sword."
      },

      E1 : {
        name : "Two-handed Sword Mastery",
        desc : "Increases attack power when equipped with a two-handed sword."
      },
      
      E2 : {
        name : "Halberd Mastery",
        desc : "Increases attack power when equipped with a halberd."
      },
      
      E3 : {
        name : "Hammer Mastery",
        desc : "Increases attack power when equipped with a hammer."
      },
      
      E4 : {
        name : "Bayonet Mastery",
        desc : "Increases attack power when equipped with a bayonet."
      },


      // # MISC #
      F0 : {
        name : "Regeneration Shift",
        desc : "Reduces the number of times regeneration can be used, <br>but increases the amount healed."
      },

      F1 : {
        name : "Improved Regeneration",
        desc : "Increases the amount of HP restored by<br>regeneration ability."
      },

      F2 : {
        name : "Augmented Regeneration",
        desc : "Increases the number of times regeneration can be used."
      },

      F3 : {
        name : "Torchbearer",
        desc : "Restores your regeneration power when your partner <br>reaches zero HP and disperses.",
        usage_req : "Astrea Blood Codes"
      },
      
      F4 : {
        name : "Life Steal",
        desc : "Restores HP upon defeating enemies."
      },
      
      F5 : {
        name : "Regenerative Drain",
        desc : "Causes drain attacks to restore HP."
      },
      
      F6 : {
        name : "Eternal Blade Dance",
        desc : "An enhanced version of Blade Dance. Increases attack <br>power when you dodge enemy attacks.",
        usage_req : "Prometheus Blood Codes"
      },
      
      F7 : {
        name : "Blood-draining Venom",
        desc : "Receive ichor when enemies within a certain radius take <br>damage from venom.",
        usage_req : "Darkseeker Blood Codes"
      },
      
      F8 : {
        name : "Revenant's Hunger",
        desc : "Increases the amount of haze gained from defeating enemies."
      },
      
      F9 : {
        name : "Revenant's Greed",
        desc : "Increases the chances of items dropping from defeated <br>enemies."
      },
      
      F10 : {
        name : "Pioneer's Guidance",
        desc : "Makes Gifts easier to master."
      },
      
      F11 : {
        name : "Fall Damage Reduction",
        desc : "Reduces damage taken from falling."
      },
      
      F12 : {
        name : "Deliverance",
        desc : "When an ally takes fatal damage, their HP is reduced to 1 <br>and you take the remaining damage. <br><br>This effect only activates if you have 2 or more HP. <br>The damage you receive cannot reduce your HP to 0.",
        usage_req : "Ishtar Blood Codes"
      },
      
      F13 : {
        name : "Tirelessness",
        desc : "Increases your stamina regeneration rate."
      },
      
      F14 : {
        name : "Bolster",
        desc : "Increases regeneration upon collecting lost haze after <br>dispersal."
      },
      
      F15 : {
        name : "Revenant Dagger",
        desc : "Throws a knife that grants ichor when it strikes a foe."
      },
      
      F16 : {
        name : "Complete Attention",
        desc : "Hitting with a charged drain will grant focus."
      },
      
      F17 : {
        name : "Charisma",
        desc : "Increases your partner's stats (does not apply to player)."
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : "Sonic Arrow",
        desc : "Fires a projectile created from ichor.<br><br>A single volley is not very impressive, <br>but it shows its worth against groups of foes."
      },

      A1 : {
        name : "Blood Shot",
        desc : "Fires a large projectile created from the power of blood. <br><br>This improved version of Sonic Arrow delivers far greater <br>impact."
      },
      
      A2 : {
        name : "Sanguine Roar",
        desc : "Generates a projectile of foul blood that flies at the target.<br><br>A direct hit tears through the flesh and leaves a wound <br>that continues to gnaw at the victim in pain."
      },
      
      A3 : {
        name : "Blazing Roar",
        desc : "Shoots an intense flame at the target.<br><br>It is said that those struck by this attack are burned <br>so completely that all they leave behind is a shadow."
      },
      
      A4 : {
        name : "Freezing Roar",
        desc : "Fires a projectile of freezing ice at the target.<br><br>A direct hit saps the heat from the victim, stopping <br>their thoughts and clouding their judgment."
      },
      
      A5 : {
        name : "Plasma Roar",
        desc : "Generates a surge of electricity that flies at the target.<br><br>A direct hit boils the blood of the victim, creating <br>intense pain."
      },
      
      A6 : {
        name : "Blood Spike",
        desc : "Fires a projectile of piercing ichor at the target.<br><br>The force created is highly concentrated and smashes <br>through foes like a cannonball."
      },
      
      A7 : {
        name : "Flame Spike",
        desc : "Fires a projectile of burning flame at the target.<br><br>The force created is highly concentrated and smashes <br>through foes like a cannonball."
      },
      
      A8 : {
        name : "Frost Spike",
        desc : "Fires a projectile of freezing ice at the target.<br><br>The force created is highly concentrated and smashes <br>through foes like a cannonball."
      },
      
      A9 : {
        name : "Lightning Spike",
        desc : "Fires a projectile of crackling electricity at the target.<br><br>The force created is highly concentrated and smashes <br>through foes like a cannonball."
      },
      
      A10 : {
        name : "Blood Barrage",
        desc : "Shoots a series of bloody projectiles that bombard foes <br>in a wide area.<br><br>While this skill lacks power, the continuous rapid fire <br>makes it ideal for suppressing the enemy."
      },
      
      A11 : {
        name : "Flame Barrage",
        desc : "Shoots a series of fiery projectiles that bombard foes <br>in a wide area.<br><br>While this skill lacks power, the continuous rapid fire <br>makes it ideal for suppressing the enemy."
      },
      
      A12 : {
        name : "Ice Barrage",
        desc : "Shoots a series of icy projectiles that bombard foes <br>in a wide area.<br><br>While this skill lacks power, the continuous rapid fire <br>makes it ideal for suppressing the enemy."
      },
      
      A13 : {
        name : "Lightning Barrage",
        desc : "Shoots a series of electric projectiles that bombard foes <br>in a wide area.<br><br>While this skill lacks power, the continuous rapid fire <br>makes it ideal for suppressing the enemy."
      },
      
      A14 : {
        name : "Vodnik Mass",
        desc : "Releases concentrated blood to destroy foes.<br><br>The cursed blood of the dead damns its victims to hell."
      },
      
      A15 : {
        name : "Walpurgis Fire",
        desc : "Uses fine control over blood flow to release a powerful <br>blaze.<br><br>Revenants without faith in their strength should not use <br>advanced techniques. The power will collapse in on an <br>unwitting user and destroy them."
      },
      
      A16 : {
        name : "Baba Yaga's Gaze",
        desc : "Uses fine control over blood flow to release a powerful <br>wave of cold.<br><br>Someone who disperses while part of the body is frozen <br>cannot regenerate that part until it thaws. This flaw is <br>sometimes exploited for interrogation."
      },
      
      A17 : {
        name : "Rage of Perkunas",
        desc : "Uses fine control over blood flow to release a powerful <br>shock.<br><br>Death is the only escape from the wrath of an angry god."
      },
      
      A18 : {
        name : "Dusk Edge",
        desc : "Uses ichor to create a blade of blood and swing it in <br>an arc that sweeps through foes in front of you.<br><br>A line of blood is traced through the twilit sky, <br>transforming into a deadly blade that destroys the <br>opposition."
      },
      
      A19 : {
        name : "Crimson Moon",
        desc : "Uses ichor to create a blazing blade and swing it in <br>an arc that sweeps through foes in front of you.<br><br>A red moon hangs ominously in the night sky. It is <br>said that any who witness it will be visited by grave <br>misfortune."
      },
      
      A20 : {
        name : "Aurora Flash",
        desc : "Uses ichor to create a freezing blade and swing it in <br>an arc that sweeps through foes in front of you.<br><br>A line of blood in the air blinks into a sword of ice. <br>The light dances across it like a prism, distracting foes <br>whose blood soon stains it."
      },
      
      A21 : {
        name : "Jupiter's Blade",
        desc : "Uses ichor to create a blade of lightning and swing it <br>in an arc through foes in front of you.<br><br>When the victim opens their eyes after being blinded <br>by the flash, they realize they are already dead."
      },
      
      A22 : {
        name : "Execution",
        desc : "Creates a giant sword from your indomitable will <br>that falls like a guillotine upon the enemy.<br><br>An undeniable truth dawns on those who face <br>this blade. <br><br>It would be simpler to accept it than to continue <br>to struggle."
      },
      
      A23 : {
        name : "Fire Storm",
        desc : "Shoots a series of flaming projectiles that stagger the <br>enemy.<br><br>Although the individual bullets don't pack much power, <br>their sheer volume is enough to overwhelm even the <br>sturdiest of foes."
      },
      
      A24 : {
        name : "Blast Bolt",
        desc : "Creates and fires a string of projectiles infused with <br>electricity at your target.<br><br>The flashing bolt digs into the earth, and no armor <br>can stop it from going all the way to the bone."
      },
      
      A25 : {
        name : "Guard of Honor",
        desc : "Generates a number of ice pillars that unrelentingly <br>bombard the target.<br><br>When one side can attack again and again with a single <br>action and the other has to dodge those attacks without <br>fail, the winner is clear."
      },
      
      A26 : {
        name : "Dancing Blaze",
        desc : "Fires a ricocheting bullet.<br><br>No one knows which way a bullet might bounce, but <br>they can be useful in catching unpredictable foes."
      },
      
      A27 : {
        name : "Draconic Stake",
        desc : "Transforms your blood into a giant stake that pierces <br>the target.<br><br>This technique is both quick and powerful. Those who <br>fall to its bite are said to be sent directly to the fires <br>of the underworld."
      },
      
      A28 : {
        name : "Indra's Coil",
        desc : "Fires three powerful bolts of lightning at your target's <br>feet.<br><br>This technique instantly vaporizes the blood of those <br>unfortunate enough to receive a direct hit, and they <br>are exploded from within."
      },
      
      A29 : {
        name : "Fourfold Verdict",
        desc : "Fires an unrelenting barrage of lightning bullets at <br>the target.<br><br>Those found guilty in divine eyes can never escape <br>their punishment. This Gift cannot be used again <br>until that holy anger has abated."
      },
      
      A30 : {
        name : "Elder Contract",
        desc : "Shoots concentrated blood into the ground that causes <br>a pillar of blood to erupt beneath your target.<br><br>While this potent Gift is difficult to learn when used <br>properly, it is a valuable ally."
      },
      
      A31 : {
        name : "Ichorous Ice",
        desc : "Condenses ichor and converts it into powerful ice shards <br>that shoot at the enemy.<br><br>The amount of energy this Gift requires puts a large <br>burden on the revenant using it, making it impossible to <br>use without a relic as a catalyst."
      },
      
      A32 : {
        name : "Twilight",
        desc : "Fires a wide laser that pierces through anything in front <br>of you.<br><br>When the light vanishes, not even a speck of dust <br>remains. Everything is disintegrated.",
        usage_req : "Queen's Ribcage Blood Codes"
      },
      
      A33 : {
        name : "Fire Lily",
        desc : "Shoots out a swift blade. A short time after sticking into <br>something, it detonates.<br><br>Foes are not the only targets for this technique. <br>Experienced users will send blades into walls or the floor <br>to act as traps."
      },
      
      A34 : {
        name : "Sand Edge",
        desc : "Creates a blade of highly-pressurized sand from the <br>ground that knocks away foes.<br><br>This peculiar technique erodes the ground with ichor <br>and creates a blade from sand-like particles. Due to <br>the difficulty of quickly altering a substance, a high <br>degree of skill is required to use this Gift."
      },
      
      A35 : {
        name : "Volatile Storm",
        desc : "Creates blades of sand that converge on the target and <br>explode.<br><br>This huge explosion is induced by focusing multiple <br>sources of pressure on a single point. Attempting to <br>escape such a sandstorm would be extremely difficult, <br>to say the least."
      },
      
      A36 : {
        name : "Arm of Set",
        desc : "Creates an arm of sand at the target's feet that <br>mercilessly crushes the enemy.<br><br>There is no escaping the grasp of this sand trap, its <br>multiple layers of compressed sand make it harder <br>than steel and physically impossible to destroy."
      },
      
      A37 : {
        name : "Sands of Depravity",
        desc : "Creates a giant sandstorm around your target.<br><br>Veterans of the battlefield know to never let their guard <br>down, for there is no telling what blood-starved evil has <br>its sights set on you at any moment."
      },
      
      A38 : {
        name : "Chaotic Ash",
        desc : "Fires a draining projectile that robs the target of ichor.<br><br>The weak are blood that become the flesh of the <br>powerful. It is not theft, it is simply the use of a <br>resource for the future of revenant kind."
      },
      
      A39 : {
        name : "Purging Thorn",
        desc : "Creates a giant thorn in the air that pierces the target.<br><br>Countless revenants have died to these spikes in battle, <br>and the dread they inspire is still as fresh as ever."
      },
      
      A40 : {
        name : "Argent Wolf Cross",
        desc : "Fires a cross-shaped blade of blood at the target.<br><br>An assault technique once used by the leader of the <br>Argent Wolves, the blood cross is said to represent a <br>prayer for the fallen. It is ironic, then, that such a Gift <br>would be so coldly efficient at silencing its target by <br>rending them into four pieces."
      },
      
      A41 : {
        name : "Shadow Leap",
        desc : "Releases a shockwave around you, then instantly <br>transports you backward.<br><br>This Gift works by dispersing the body and <br>reassembling it immediately.",
        usage_req : "Isis Blood Codes"
      },
      
      A42 : {
        name : "Bloody Impact",
        desc : "Blasts away foes in an area with a shockwave caused <br>by the sudden release of condensed ichor.<br><br>Damage is not this Gift's strong suit, but it can be <br>used to open or close distance and, when combined <br>with use of terrain, can turn a battle around."
      },
      
      A43 : {
        name : "Cloak of Winter",
        desc : "Freezes everything in the vicinity with an arctic blizzard.<br><br>No foe can stand against the cold and wind this creates. <br>All are knocked aside and left helpless."
      },
      
      A44 : {
        name : "Peony Flash",
        desc : "Sets off a giant explosion that engulfs enemies in the area.<br><br>Few people can escape a sudden, nearby explosion <br>unscathed, particularly when they've been drawn close to <br>the point of origin.",
        usage_req : "Scathach Blood Codes"
      },
      
      A45 : {
        name : "Will-o'-the-Wisp",
        desc : "Fires a projectile of ichor that arcs to cover your back.<br><br>While this Gift does little damage, the confusion it <br>creates makes it highly valuable."
      },
      
      A46 : {
        name : "Ember Reversal",
        desc  : "Fires a flaming projectile that arcs to cover the user's <br>rear.<br><br>This Gift takes almost no time to prepare, so by the <br>time the enemy sees the flame, they are already on <br>fire."
      },
      
      A47 : {
        name : "Desperate Burst",
        desc : "A risky Gift that unleashes an enormous amount of <br>energy stored within you, dealing massive damage to <br>the area around you while leaving you on the brink of <br>death.<br><br>Such a technique can only be used by revenants who <br>have conquered the fear of dying. The grim spectacle <br>haunts all who witness it."
      },
      
      A48 : {
        name : "Rose Flame",
        desc : "Scatters fire bombs that explode after a short time, <br>damaging anything in the area.<br><br>When surrounded with no path of escape, the only <br>thing you can do is pray you can come up with <br>something. It is a situation you should try to avoid."
      },
      
      // Hellfire Knight DLC
      A49 : {
        name : "Homing Hellfire",
        desc : "Unleashes an ominous vortex of flame that pursues<br>the target.<br><br>The fiery whirlwind pursues its target as if it has<br>a mind of its own, and the targeted Lost is swallowed<br>up in flames, with no means of escape."
      },
      
      A50 : {
        name : "Dancing Fireblade",
        desc : "Summons a fiery blade that spins around your body. <br><br>A blade of fire spins around the user at high speed,<br>slicing all who approach without mercy."
      },
      
      // Frozen Empress DLC
      A51 : {
        name : "Hoarfrost Stream",
        desc : "Shoots freezing beams of light in all directions,<br>sweeping down any foes in their way. <br><br>The hoarfrost stream freezes all it touches, stretching<br>out in all directions from the user and encircling<br>oncoming assailants in the chilling grasp of death.<br><br>As a technique taken from the Empress's blood code<br>and developed from her power, this Gift takes a<br>heavy toll on its user."
      },
      
      A52 : {
        name : "Frost Turret",
        desc : "Creates a frozen condensed mass that periodically<br>shoots out ice shards. <br><br>Though the ice shards shot are far from fatal,<br>the accumulated damage is a big step toward victory."
      },
      
      // Lord of Thunder DLC
      A53 : {
        name : "Meteor Crush",
        desc : "Creates burning boulders above your head and rains<br>them down on the enemy like a meteor shower. <br><br>The boulders raining down may only look like a meteor<br>shower, but there are very few Lost who would be able<br>to take a fiery boulder falling on them and still stand."
      },
      
      A54 : {
        name : "Frost Wave",
        desc : "Calls forth a frigid cold that spreads across the ground. <br><br>Those who approach with hostility will have their<br>advance stayed by this chilling wave."
      },
      
      A55 : {
        name : "Field of Thirst",
        desc : "Creates a field that periodically drains ichor from<br>foes inside it. <br><br>The field enables you to drain ichor from the Lost<br>without even approaching them.<br><br>Even a slight amount of ichor can mean the difference<br>between life and death. This trap is ideal when trying<br>to turn the tide of battle with Gifts."
      },
      
      A56 : {
        name : "Thunderbolt Impact",
        desc : "Spring up from the ground before landing in an<br>explosion of lightning. <br><br>Although the attack requires time to focus lightning<br>into the user's fist, the resulting power is overwhelming.<br><br>This Gift employs the Lord of Thunder's lightning,<br>which courses through the user's body and can turn<br>a lesser revenant to ash in an instant."
      },


      // # DEBUFFS #
      B0 : {
        name : "Venomous Shot",
        desc : "Fires a projectile at your target that inflicts venom.<br><br>This bullet strikes from the shadows, creating panic in <br>its victim as it robs them of their health upon impact."
      },

      B1 : {
        name : "Stun Shot",
        desc : "Fires a projectile at your target that inflicts stun.<br><br>This bullet strikes from the shadows, creating panic in <br>its victim as it robs them of their freedom upon impact."
      },
      
      B2 : {
        name : "Slowing Shot",
        desc : "Fires a projectile at your target that inflicts slow.<br><br>This bullet strikes from the shadows, creating panic in <br>its victim as it robs them of their mobility upon impact."
      },
      
      B3 : {
        name : "Venomous Web",
        desc : "Throws down treated ichor to create a trap that poisons <br>foes who step into it.<br><br>The technique detects the blood of assailants and <br>affects only opponents of the user."
      },
      
      B4 : {
        name : "Stun Web",
        desc : "Throws down treated ichor to create a trap that stuns <br>foes who step into it.<br><br>All Gifts were created with survival in mind. When a <br>large threat appears, use this power and run without <br>looking back."
      },
      
      B5 : {
        name : "Slow Web",
        desc : "Throws down treated ichor to create a trap that slows <br>the movement of foes who step into it.<br><br>Skilled revenants can force their will into ichor and have <br>the clear imagination to guide it. The first step to power <br>is a self-understanding."
      },
      
      B6 : {
        name : "Shock Web",
        desc : "Manipulates ichor to create a low-power trap at your <br>feet that staggers any assailants.<br><br>Deception is most effective when executed quickly and <br>completely. Even a small splinter of suspicion lodged in <br>the heart can breed untold fear and restlessness."
      },
      
      B7 : {
        name : "Flames of Rage",
        desc : "Manipulates ichor to create a trap at your feet that <br>immolates assailants with a sheet of fire.<br><br>The need to reduce the Lost to ash has resulted in <br>many experiments. Even burning the creatures <br>repeatedly as they revived did not achieve success."
      },
      
      B8 : {
        name : "Venom Trap",
        desc : "Scatters ichor in the area, creating a venom trap that <br>eats at assailants.<br><br>The Security Enforcement Unit Cerberus has invented <br>a variety of Gifts, many of them with indirect effects."
      },
      
      B9 : {
        name : "Stun Trap",
        desc : "Scatters ichor in the area, creating a trap that stuns <br>assailants.<br><br>The Security Enforcement Unit Cerberus has invented <br>a variety of Gifts, many of them with indirect effects."
      },
      
      B10 : {
        name : "Slow Trap",
        desc : "Scatters ichor in the area, creating a trap that slows <br>assailants.<br><br>The Security Enforcement Unit Cerberus has invented <br>a variety of Gifts, many of them with indirect effects."
      },
      
      B11 : {
        name : "Frenzied Fire",
        desc : "Fires a projectile that decreases the enemy's focus <br>gauge.<br><br>Doors do not open for those who stand idly and wait. <br>Go forth and open them yourself."
      },


      // # BUFFS #
      C0 : {
        name : "Blood Weapon",
        desc : "Temporarily adds blood damage to your and your partner's <br>current weapons.<br><br>For revenants, blood is a source of nourishment, the armor <br>that protects them from threats, and a sturdy blade that <br>can cut through obstacles. All revenants seek to master <br>blood."
      },

      C1 : {
        name : "Flame Weapon",
        desc : "Temporarily adds fire damage to your and your partner's <br>current weapons.<br><br>Wounds caused by burning blades are slow to heal, even <br>for revenants."
      },
      
      C2 : {
        name : "Frost Weapon",
        desc : "Temporarily adds ice damage to your and your partner's <br>current weapons.<br><br>By instantly freezing a wound, dispersal is slowed, letting <br>the enemy relish their pain."
      },

      C3 : {
        name : "Lightning Weapon",
        desc : "Temporarily adds lightning damage to your and your <br>partner's current weapons.<br><br>This Gift is a wonderful ally and a dreadful enemy. <br><br>Never forget that what you use may also be used <br>against you."
      },

      C4 : {
        name : "Venom Mark",
        desc : "Temporarily applies the venom effect to your current <br>weapon.<br><br>A strike delivers a toxin that destroys from within. <br>Doom is certain, but the terror has only begun."
      },

      C5 : {
        name : "Numbing Mark",
        desc : "Temporarily applies the stun effect to your current <br>weapon.<br><br>Senses are present, but freedom is stolen. How do <br>you deal with a victim whose face is warped by <br>terror? Everything is in the hands of the one who <br>carved that mark."
      },

      C6 : {
        name : "Warding Mark",
        desc : "Temporarily applies the inhibit effect to your current <br>weapon.<br><br>The ability to seal Gifts is highly significant. When <br>backed into a corner, who knows what a mouse <br>might do?"
      },

      C7 : {
        name : "Binding Mark",
        desc : "Temporarily applies the slow effect to your current <br>weapon.<br><br>Victims hit with this effect are overcome with a <br>sense of fatigue as the blood in their body becomes <br>heavy, causing their movements to become sluggish <br>and creating dangerous openings."
      },

      C8 : {
        name : "Adrenaline",
        desc : "Temporarily boosts attack power.<br><br>To destroy the horrors that have invaded the world, <br>humanity needed power that surpassed the imagination. <br>Soon, Gifts became the light of hope that continues to <br>illuminate the path forward for all revenants."
      },

      C9 : {
        name : "Bridge to Glory",
        desc : "Temporarily increases attack power.<br><br>The undying Lost gain strength as they drink the blood <br>of the living.<br>Wisdom, skill, and experience are the keys to surviving <br>the prison that is this world."
      },

      C10 : {
        name : "Overdrive",
        desc : "Temporarily increases your and your partner's attack. <br>The effect ends when you take damage.<br><br>This ability truly shines when used for a preemptive <br>strike against an opponent."
      },

      C11 : {
        name : "Ranged Impact",
        desc : "Temporarily increases the attack power of shots fired <br>from weapons.<br><br>In the course of living through battle after heated <br>battle, using energy efficiently becomes more and <br>more important. Picking off foes from a distance is <br>one excellent method of accomplishing this."
      },

      C12 : {
        name : "Blow of Madness",
        desc : "Increases the power of the next attack.<br><br>Unconsciously breaking the fetters that hold the body <br>back and generating strength that goes beyond <br>psychological barriers is ahuman impossibility, but a <br>fine trick for a revenant."
      },

      C13 : {
        name : "Flashing Fang",
        desc : "Increases the power of the next attack.<br><br>A sudden rush of strength can be gained by condensing <br>ichor and then releasing it at just the right moment."
      },

      C14 : {
        name : "Merciless Reaper",
        desc : "Ignores some of the enemy's physical defense and <br>weapon defense for your next attack.<br><br>No matter how thick your armor, the sting of this <br>blade cannot be avoided. It is like the reaper's scythe, <br>delivering death to all, regardless of circumstance."
      },

      C15 : {
        name : "Dark Shout",
        desc : "Greatly increases the efficiency of dark Gifts for the next <br>attack.<br><br>A battle cry restores the will to succeed and calls forth <br>the strength to overcome challenges."
      },

      C16 : {
        name : "Blade Dance",
        desc : "Temporarily increases attack power each time you <br>damage an enemy with your weapon.<br><br>If you don't watch for a way out, you can get caught <br>up in plans that cause mutual destruction.",
        usage_req : "Prometheus Blood Codes"
      },
      
      C17 : {
        name : "Sacrificial Edge",
        desc : "Greatly increases attack power, but drains HP over <br>time. The effect ends when HP has been reduced to 1.<br><br>Power beyond imagination comes at a price, but only <br>those willing to pay it are assured victory.",
        usage_req : "Heimdall Blood Codes"
      },
      
      C18 : {
        name : "Somatic Zeal",
        desc : "Temporarily increases strength and dexterity.<br><br>The boost of offensive power this Gift provides <br>makes it popular among revenants."
      },
      
      C19 : {
        name : "Cognitive Zeal",
        desc : "Temporarily increases mind and willpower. <br><br>The boost to Gifts this technique provides <br>makes it popular among revenants."
      },
      
      C20 : {
        name : "Precision",
        desc : "Temporarily makes it easier to stagger enemies with <br>your weapon.<br><br>A tiny gap can alter a battle completely. By creating <br>such a gap, you can give yourself an opportunity to <br>ensure your survival."
      },
      
      C21 : {
        name : "Hunting Feast",
        desc : "Temporarily increases the drain rating of weapon attacks.<br><br>The role of Gifts in battle is overwhelmingly important. <br>By securing a steady supply of ichor, effectiveness<br>increases exponentially."
      },
      
      C22 : {
        name : "Bloodsucking Blades",
        desc : "Temporarily increases the drain rating of weapon attacks <br>for you and your partner.<br><br>This Gift improves the efficiency of drain mechanisms <br>built into weapons."
      },
      
      C23 : {
        name : "Gift Prowess",
        desc : "Temporarily increases Gift speed for you and your partner.<br><br>Experienced revenants who have survived long enough <br>can unleash a multitude of Gifts in moments as they <br>make their way through battle."
      },
      
      C24 : {
        name : "Gift Extension",
        desc : "Temporarily lengthens the effects of Gifts used by you <br>and your partner.<br><br>It may seem like a slight difference, but a few ripples <br>can grow to turn the tide of battle."
      },
      
      C25 : {
        name : "Hasten",
        desc : "Uses the power of ichor to temporarily boost reflexes, <br>enhancing your dodges.<br><br>This technique uses a large amount of ichor and is <br>difficult to learn, but the power it provides cannot be <br>denied."
      },
      
      C26 : {
        name : "Concentration",
        desc : "Temporarily reduces stamina consumption. The effect <br>ends when you take damage.<br><br>This ability truly shines when used for a preemptive <br>strike against an opponent."
      },
      
      C27 : {
        name : "Red Shoes",
        desc : "Enables you to use HP to perform actions when you have <br>run out of stamina.<br><br>Those who would push beyond their limits in desperation <br>end up as heroes or fools.<br>To seek true bravery, one must abandon some degree of <br>reason.",
        usage_req : "Fionn Blood Codes"
      },
      
      C28 : {
        name : "Valiant Heart",
        desc : "Enhances kinetic vision and reflexes, reducing the <br>stamina cost of dodging.<br><br>No matter how great the threat, swift judgment and <br>footwork can minimize the danger."
      },
      
      C29 : {
        name : "Morale Boost",
        desc : "Increases the maximum stamina of you and your partner <br>and fully restores both your stamina.<br><br>Revenants must stay alert at all times in order to react to <br>subtle changes in the environment. For creatures who are <br>not allowed to rest, this technique could be called the <br>greatest possible necessity."
      },
      
      C30 : {
        name : "Time Crunch",
        desc : "Uses ichor to temporarily speed up charged actions.<br><br>A time advantage is an enormous benefit in battle. <br>A single attack can spell out victory in blood."
      },
      
      C31 : {
        name : "Supernatural Blood",
        desc : "Enables you to sacrifice HP to use Gifts when you have <br>run out of ichor.<br><br>A revenant's intellect, especially regarding the use of <br>powerful Gifts, can mesmerize the mind. If you would <br>sacrifice your flesh and blood in such a pursuit, take <br>care not to bring about your own ruin.",
        usage_req : "Harmonia Blood Codes"
      },
      
      C32 : {
        name : "Impact Wave",
        desc : "Temporarily adds a shockwave effect to strike attacks <br>that deals additional damage.<br><br>This Gift requires some talent to acquire, but it provides <br>a real boon."
      },

      C33 : {
        name : "Final Journey",
        desc : "Sends your regenerative power into a frenzy that leads <br>to death. Immediately restores all HP and increases all <br>abilities, but kills you after a certain amount of time <br>elapses.<br><br>Revenants are nearly immortal, but dispersing comes <br>with a heavy price. Be sure you grab something that is <br>worth the cost.",
        usage_req : "Queenslayer Blood Codes"
      },

      C34 : {
        name : "Vigorous Zeal",
        desc : "Temporarily increases fortitude and vitality.<br><br>Though revenants may return from death again and<br>again, with high HP and a large store of stamina,<br>they won't have to fear facing it."
      },

      // Frozen Empress DLC
      C35 : {
        name : "Offensive Order",
        desc : "Temporarily lowers your defense and increases attack<br>power for both you and your partner. <br><br>Sacrificing your own safety enables you to boost your<br>allies' attack power in an instant."
      },

      // Lord of Thunder DLC
      C36 : {
        name : "Ichor Efficiency",
        desc : "Reduces the ichor cost of weapon attacks for a limited time.<br><br>There are those who watch their ichor while fighting and<br>those who do not, but one thing is for certain: one stays<br>alive longer than the other."
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : "Iron Will",
        desc : "Temporarily reduces damage taken by weaving a barrier <br>into your blood.<br><br>Avoiding even the smallest of wounds can greatly <br>increase your chances for survival."
      },

      D1 : {
        name : "Foulblood Barrier",
        desc : "Creates a barrier that greatly reduces damage to you <br>and your partner from one attack by condensing ichor <br>to its absolute limit.<br><br>Even a temporary shield can provide a psychological <br>edge that leads to victory."
      },
      
      D2 : {
        name : "Ablative Blood",
        desc : "Temporarily causes damage taken to be greatly reduced <br>at the cost of ichor.<br><br>The user must remember that ichor is what is keeping <br>them alive. Death awaits one who forgets to find a line <br>of retreat.",
        usage_req : "Eos Blood Codes"
      },
      
      D3 : {
        name : "Juggernaut",
        desc : "Increases balance and resistance against direct attacks, <br>but lowers mobility and elemental resistance.<br><br>This Gift removes one weakness and creates another, <br>making it hard to know when to use. However, it is a <br>powerful tool when used effectively.",
        usage_req : "Queen's Breath Blood Codes"
      },
      
      D4 : {
        name : "Steady Bulwark",
        desc : "Temporarily increases weapon defense against physical <br>attacks.<br><br>Fighting back frenzied revenants is not easy. The <br>Security Enforcement Unit Cerberus has relied on a <br>solid defense that they turn into strength to prevail <br>against them."
      },
      
      D5 : {
        name : "Guard Reversal",
        desc : "Temporarily grants the ability to deflect attacks and <br>stagger opponents upon successfully guarding.<br><br>Blocking a foe's attack and then following with a blow <br>of your own while they are open may seem like a plain <br>strategy, but it remains an effective one."
      },
      
      D6 : {
        name : "Crushing Might",
        desc : "Temporarily makes it easier to break an opponent's guard.<br><br>Do not fear an enemy who spends too much energy in <br>defense. The unwavering blade will cut a way to victory."
      },
      
      D7 : {
        name : "Guard Stability",
        desc : "Temporarily reduces the stamina cost of guarding.<br><br>When defenses are crushed, the battle is as good as <br>finished. As long as your defense is sound, the fight <br>goes on."
      },
      
      D8 : {
        name : "Prismatic Veil",
        desc : "Temporarily increases weapon defense against elemental <br>attacks.<br><br>Fighting back frenzied revenants is not easy. The Security <br>Enforcement Unit Cerberus has relied on a solid defense <br>that they turn into strength to prevail against them."
      },
      
      D9 : {
        name : "Blood Guard",
        desc : "Temporarily creates a barrier around you and your partner <br>that dulls the power of blood, boosting your resistance.<br><br>Ichor changes its properties according to the strength of <br>the user's will. Turning it into a barrier is a simple task."
      },
      
      D10 : {
        name : "Flame Protection",
        desc : "Temporarily creates a barrier around you and your partner <br>that dulls the power of fire, boosting your resistance.<br><br>The field draws the power from flames and abates damage <br>from heat."
      },
      
      D11 : {
        name : "Ice Armor",
        desc : "Temporarily creates a barrier around you and your partner <br>that dulls the power of ice, boosting your resistance.<br><br>The numbing field inhibits the power to chill and abates <br>damage from cold."
      },
      
      D12 : {
        name : "Raijin's Veil",
        desc : "Temporarily creates a barrier around you and your partner <br>that dulls the power of lightning, boosting your resistance.<br><br>Any revenant who joins the Lost still remembers all of <br>their Gifts and uses them without mercy on their former <br>fellows, so countermeasures had to be developed."
      },
      
      D13 : {
        name : "Elemental Wall",
        desc : "Temporarily increases resistance to all elements for you <br>and your partner.<br><br>A skilled warrior is prepared to adjust to any situation. <br>Excess pride will drag you to an early grave."
      },
      
      D14 : {
        name : "Royal Heart",
        desc : "Temporarily increases resistance to being staggered.<br><br>Amidst the swirling chaos of battle, a steady mind is <br>what makes or breaks a revenant. When it is lost, so is <br>any hope for the future."
      },
      
      D15 : {
        name : "Dogged Fighter",
        desc : "Temporarily increases stagger resistance versus <br>enemy attacks.<br><br>Only warriors with the tenacity to keep pushing <br>through any attack will survive in this world."
      },
      
      D16 : {
        name : "Perfect Balance",
        desc : "Greatly increases resistance to staggering for one attack.<br><br>Lunging forward without fear is a sure step toward the <br>future."
      },
      
      D17 : {
        name : "Antibody Generation",
        desc : "Temporarily increases resistance to all debuffs.<br><br>It goes without saying that status effects pose a serious <br>threat to any user of Gifts. A lapse in preparation could <br>quickly lead to being reduced to ash."
      },
      
      D18 : {
        name : "Countermeasure",
        desc : "For a limited time, dodging enemy attacks generates <br>projectiles that attack the enemy when touched.<br><br>The courage to step forward without hesitation is <br>important, but the danger of doing so is very real."
      },
      
      D19 : {
        name : "Sly Vengeance",
        desc : "For a limited time, taking damage generates fiery <br>projectiles that attack the enemy when touched.<br><br>Flames of anger prevent further attacks, and for the <br>revenants who use them, they are flames of salvation.",
        usage_req : "Queen's Claw Blood Codes"
      },
      
      D20 : {
        name : "Feral Tenacity",
        desc : "After using this Gift, receiving fatal damage when your <br>HP is over a certain amount will instead leave you with <br>1 HP. This effect is only triggered once.<br><br>Hold onto your courage, no matter the danger. As long <br>as you cling to life, the possibilities are limitless."
      },
      
      // Frozen Empress DLC
      D21 : {
        name : "Sturdy Body",
        desc : "Lowers your Gift effectiveness while temporarily<br>increasing your max HP. <br><br>How to use the large amount of HP obtained from<br>this Gift is up to your discretion."
      },
      
      D22 : {
        name : "Circular Guard",
        desc : "Allows you to guard from all sides, rather than<br>only the front.<br><br>Now you have nothing to fear, no matter where<br>your foes are. Keep in mind, however, that fortune<br>does not smile upon those who only defend."
      },

      D23 : {
        name : "Defensive Order",
        desc : "Temporarily lowers your attack power and increases<br>defense for both you and your partner. <br><br>Sacrificing your own safety enables you to boost your<br>allies' defenses in an instant."
      },

      // # COMMUNAL GIFTS #
      E0 : {
        name : "Reckless Abandon",
        desc : "A communal Gift with Louis that increases attack and <br>alters your evasive movements, at the cost of damage <br>reduction.<br><br>This Gift transforms the revenant thirst for blood into <br>a strength, increasing your risk of joining the Lost with <br>even a single misstep. It is difficult to maintain such a <br>path without powerful resolve.",
        usage_req : "Currently partnered with Louis"
      },

      E1 : {
        name : "Lupinus Vita",
        desc : "A Communal Gift with Yakumo that reduces stamina <br>consumed by guarding and enhances your first attack <br>after guarding based on the number of attacks you've <br>guarded, but also reduces dodge speed. <br><br>The drive to defend and support comrades gives the <br>blood new vigor. Obstacles will crumble when you <br>strike at them with the weight of responsibility.",
        usage_req : "Currently partnered with Yakumo"
      },
      
      E2 : {
        name : "Conviction Spike",
        desc : "A Communal Gift with Io that improves resistance to <br>staggering, but reduces drain effectiveness.<br><br>A strong will that has taken root causes slumbering <br>power to stir for the sole purpose that one's calling <br>may be fulfilled.",
        usage_req : "Currently partnered with Io"
      },
      
      E3 : {
        name : "Blood Awakening",
        desc : "A Communal Gift with Mia that reduces ichor costs and <br>increases Gift effectiveness, but lowers melee attack <br>power.<br><br>Awoken blood coursing through the veins carries with it <br>the strength to survive in this desolate world. Under its <br>effect, your surroundings begin to appear as though you<br>have wandered into a fairy tale.",
        usage_req : "Currently partnered with Mia"
      },
      
      E4 : {
        name : "Fatal Surge",
        desc : "A Communal Gift with Jack that increases attack power <br>and reduces stamina consumption, but also reduces <br>the number of times you can regenerate.<br><br>Maintaining the Gaol of the Mists means risking one's <br>life and holding back danger. The very scale of such a <br>task plants seeds of fear in most revenants.",
        usage_req : "Currently partnered with Jack"
      },
      
      E5 : {
        name : "Ephemeral Refrain",
        desc : "A Communal Gift with Eva that enhances drain and Gift <br>efficacy, but increases ichor consumption.<br><br>A revenant's blood dances in the veins, as if inspired by <br>a beautiful song that pierces the heart, and crimson rain <br>quenches the thirsty soul.",
        usage_req : "Currently partnered with Eva"
      },


      // # MISC #
      F0 : {
        name : "Restorative Offering",
        desc : "Spends your own HP to restore the HP of companions.<br><br>For a revenant, death is no longer something to fear. <br>The most frightening thing is losing the bonds of trust <br>that bind you to others and being forced to live a <br>solitary life.",
        usage_req : "HP is at 2 or higher"
      },

      F1 : {
        name : "Sympathetic Boon",
        desc : "Consumes a large amount of your own HP to restore <br>a large amount of your partner's HP.<br><br>The determined will of someone who risks their life at <br>your side is a blessing that can heal allies' wounds.",
        usage_req : "HP is at 2 or higher"
      },
      
      F2 : {
        name : "Auto Heal",
        desc : "You will automatically use Restorative Offering when your <br>partner takes critical damage. <br><br>However, it will consume HP in advance.<br><br>Sacrificing yourself to save others is not something that is <br>easily done. <br>The light of salvation is the fruit of a meaningful relationship.",
        usage_req : "Demeter Blood Codes<br>HP is at 2 or higher"
      },
      
      F3 : {
        name : "Guardian Aid",
        desc : "Sacrifices HP to heal your partner and temporarily boost <br>your defense.<br><br>One cannot survive the prison of reality alone, and what <br>is painful now may later prove to be a lifeline that guides <br>you out of a dire situation.",
        usage_req : "Astrea Blood Codes<br>HP is at 2 or higher"
      },
      
      F4 : {
        name : "Cleansing Light",
        desc : "For a limited time, a portion of the damage you take <br>will slowly heal automatically.<br><br>All pain reminds revenants of the life they have lost. <br>From one point of view, it is a blessing. It is that <br>method of thinking that stimulates cells, causing them <br>to repair themselves."
      },
      
      F5 : {
        name : "Regenerator",
        desc : "Boosts the regenerative abilities of you and your partner, <br>increasing the amount of HP healed by regeneration.<br><br>A slight difference in endurance determines the outcome <br>of many fights. A sense of stability also brings victory <br>closer."
      },
      
      F6 : {
        name : "Venom Removal",
        desc : "Cures you and your partner of venom. <br>Use to block the effect before being afflicted.<br><br>Despite the undying nature of revenants, disease <br>was still a problem that could not be avoided, and <br>medicine became a prime issue. <br>Today, their lives depend on trial and error, as well <br>as untiring effort."
      },
      
      F7 : {
        name : "Stun Removal",
        desc : "Cures you and your partner of stun. <br>Best used to block the effect before being afflicted.<br><br>Despite the undying nature of revenants, disease <br>was still a problem that could not be avoided, and <br>medicine became a prime issue. <br>Today, their lives depend on trial and error, as well <br>as untiring effort."
      },
      
      F8 : {
        name : "Inhibit Removal",
        desc : "Cures you and your partner of inhibit. <br>Use to block the effect before being afflicted.<br><br>Despite the undying nature of revenants, disease <br>was still a problem that could not be avoided, and <br>medicine became a prime issue. <br>Today, their lives depend on trial and error, as well <br>as untiring effort."
      },
      
      F9 : {
        name : "Slow Removal",
        desc : "Cures you and your partner of slow. <br>Can block the effect if used before being afflicted.<br><br>Despite the undying nature of revenants, disease <br>was still a problem that could not be avoided, and <br>medicine became a prime issue. <br>Today, their lives depend on trial and error, as well <br>as untiring effort."
      },
      
      F10 : {
        name : "Leak Removal",
        desc : "Cures you and your partner of leak. <br>Can block the effect if used before being afflicted.<br><br>Despite the undying nature of revenants, disease <br>was still a problem that could not be avoided, and <br>medicine became a prime issue. <br>Today, their lives depend on trial and error, as well <br>as untiring effort."
      },
      
      F11 : {
        name : "Panacea's Essence",
        desc : "Cures you and your partner of all debuffs.<br>Can also block debuffs if used before being afflicted.<br><br>Through exhausting days of battle, it soothes a <br>weary heart to have moments of humor and to <br>remember the bonds of trust and emotion you <br>share with your comrades."
      },
      
      F12 : {
        name : "Blood Sacrifice",
        desc : "Spends your own HP to gain ichor.<br><br>For revenants that spend so much time in combat, the <br>value of ichor is unquestionable. Its strength is certain, <br>keeping fears of being turned to ash at bay."
      },
      
      F13 : {
        name : "Disremember",
        desc : "All Gifts that require time to use may be used <br>instantaneously.<br><br>In dire straits, it can be best to forget and then <br>start again from the beginning."
      },
      
      F14 : {
        name : "Floating Light",
        desc : "Creates a ball of light at your feet.<br><br>In the age of chemical lights, many explorations <br>were cut short when gear had been exhausted. <br><br>Being able to use Gifts instead greatly expands <br>the range of possible travel."
      },
      
      F15 : {
        name : "Vivification",
        desc : "Returns you to the last mistle touched without losing haze <br>by intentionally causing your body to disperse.<br><br>Retreat is not cowardice. Being able to choose your fights <br>is important in this prison world."
      },
      
      F16 : {
        name : "Nightstalker",
        desc : "Reduces the amount of sound you create, making it more <br>difficult to be detected.<br><br>If you sense even the faintest presence behind you, turn <br>around and make sure. You never know who might be <br>creeping toward you through the shadows."
      },
      
      F17 : {
        name : "Night Fog Veil",
        desc : "Wraps your body in a cloak of fog-like blood, making it <br>harder for enemies to notice you.<br><br>The user appears hazy, making them difficult to track."
      },
      
      F18 : {
        name : "Spoils Spotter",
        desc : "Learn whether or not there are uncollected items within <br>a certain range. <br><br>Sniff out the faint traces of your target using the <br>superhuman senses provided by a revenant's hunger."
      },
      
      F19 : {
        name : "Active IFF",
        desc : "Enemies within a certain range will appear on your radar. <br><br>Those who are immortal should fear death all the more, <br>if they do not wish to savor torment everlasting."
      },
      
      F20 : {
        name : "Treasure Tracker",
        desc : "An uncollected item within a certain range will appear on <br>your radar. <br><br>Disperse tiny amounts of your own blood to act as scouts. <br>Such a feat is well outside the realm of humanity."
      },
      
      F21 : {
        name : "Prize Perception",
        desc : "Learn whether or not there are uncollected items on the <br>current map. <br><br>Sniff out the faint traces of your target using the <br>superhuman senses provided by a revenant's ceaseless <br>hunger. Your collection must be complete."
      },
      
      F22 : {
        name : "Severing Abyss",
        desc : "Leap and slam down with all your might.<br>An offensive skill performed with One-handed sword/Halberd/Bayonet. <br><br>Jump up into the air and cut down as though you are carving a <br>dark chasm. <br><br>Taking advantage of the movement before and after the attack <br>is difficult, so it must be timed with the enemy's movements."
      },
      
      F23 : {
        name : "Phantom Assault",
        desc : "Vanish like mist, then do a jump slash.<br>An offensive skill performed with One-handed sword/Halberd/Bayonet. <br><br>Disappear like a ghost into the shadows, then dash toward the target <br>to perform a crossing slash. <br><br>You cannot be harmed while in mist form, which allows you to attack <br>without fear."
      },
      
      F24 : {
        name : "Circulating Pulse",
        desc : "Unleash a barrage of strikes.<br>An offensive skill performed with One-handed sword/Halberd/Bayonet. <br><br>Overwhelm your foe with a swirling combo of five attacks. <br><br>Applying a Gift to your weapon before this will greatly enhance this <br>Gift's potency."
      },
      
      F25 : {
        name : "Legion Punisher",
        desc : "Throw your weapon and make it spin.<br>An offensive skill performed with Two-handed sword/Hammer. <br><br>Throw your weapon forward, then use the Gift's power to cause <br>it to spin, sweeping through groups of foes. <br><br>While this attack hits a wide area, it also takes time to deliver, <br>so it must be used wisely, even against weaker enemies."
      },
      
      F26 : {
        name : "Fusillade Rondo",
        desc : "Fire a barrage of homing bullets.<br>An offensive skill performed with Bayonet. <br><br>Uses rotation to compress ichor into your bayonet, then <br>fires four bullets that hunt down their target. <br><br>This attack takes time to perform, so it must be used in <br>the right circumstances."
      },
      
      F27 : {
        name : "Triple Annihilator",
        desc : "Unleash a combo on a nearby target.<br>An offensive skill performed with Two-handed sword/Hammer. <br><br>Utilize ichor to greatly augment your muscles for a brief moment <br>and swing a heavy weapon three times in rapid succession.<br><br>This attack comes out quickly, making it indispensable in close <br>quarters."
      },
      
      F28 : {
        name : "Dragon Lunge",
        desc : "Dash forward and make a powerful overhead attack.<br>An offensive skill performed with Two-handed sword/Hammer. <br><br>Leap forward at a distant foe, then relentlessly attack <br>like a dragon trying to break a tiger's neck. <br><br>This attack is devastating but leaves the user vulnerable.<br>Beware of counterattacks when using this attack."
      },
      
      F29 : {
        name : "Chariot Rush",
        desc : "Dash forward as mist and unleash a combo.<br>An offensive skill performed with Halberd. <br><br>Disperse and lunge forward, initiating a series of strikes <br>with a thrust. <br><br>The first attack can lead to other attacks or a dodge, <br>making this a good combo starter."
      },
      
      F30 : {
        name : "Shifting Hollow",
        desc : "Dash forward in mist form. <br><br>Momentarily disperse your body like a ghost haunting the <br>night and dash forward, avoiding all attacks in the process."
      },
      
      F31 : {
        name : "Grave Knocker",
        desc : "Slam your foot into the ground, causing a shockwave. <br><br>Build energy in your legs, then strike the ground to send <br>out a destructive wave of energy. <br><br>The force is enough to wake the dead resting in the earth <br>and stagger the Lost for a follow-up attack."
      },
      
      F32 : {
        name : "Swallow Cutter",
        desc : "Unleash an extremely fast attack in a blink of an eye.<br>An offensive skill performed with Two-handed sword/Hammer. <br><br>Twist your body in one swift instant, unleashing a sudden strike <br>that could hit a swallow in mid-flight. <br><br>The speed is unheard of for a heavy weapon, allowing you to <br>inflict damage when offered the slightest opening."
      },
      
      F33 : {
        name : "Vanishing Hollow",
        desc : "Dodge attacks by transforming into mist. <br><br>This Gift allows you to evade danger by dispersing and <br>reappearing above your previous position. <br><br>This subtle but groundbreaking Gift uses the revenant <br>life cycle to supreme effect, but mastering it is difficult."
      },
      
      F34 : {
        name : "Tormenting Blast",
        desc : "Leap forward and strike twice.<br>An offensive skill performed with Two-handed sword/Hammer. <br><br>Jump toward the foe and deliver two heavy, swift attacks. <br><br>Heavy weaponry can be sluggish, so an overwhelming offense <br>can often be your greatest ally."
      },
      
      F35 : {
        name : "Shadow Assault",
        desc : "Perform a fast, short-range charge.<br>An offensive skill performed with One-handed sword/Halberd/Bayonet. <br><br>Glide forward like a shadow and deliver a quick attack. <br><br>This technique is excellent for closing short gaps and is well suited <br>for those whose strategy involves sticking to their opponents."
      },

      F36 : {
        name : "Modest Offering",
        desc : "Spends a small amount of your own HP to restore<br>a small amount of your companion's.<br><br>Though this Gift consumes less HP than Restorative<br>Offering, it will also restore less to the target.",
        usage_req : "HP is at 2 or higher"
      },
      
      // Hellfire Knight DLC
      F37 : {
        name : "Ichor Resonance (Receive)",
        desc : 'Grants you the same amount of ichor as your partner<br>(not the player) when they gain ichor. <br><br>The unity between you and your companions<br>becomes the blood in your veins, the very power<br>coursing through your body.<br><br>Cannot be used with "Ichor Resonance (Send)".'
      },
      
      F38 : {
        name : "Ichor Resonance (Send)",
        desc : 'Grants your partner the same amount of ichor<br>as you when you gain ichor (does not apply to <br>player).<br><br>Your blood dances with a strange excitement.<br>The resonance within your body will be your<br>comrades&#39; salvation.<br><br>Cannot be used with "Ichor Resonance (Receive)".'
      },
      
      F39 : {
        name : "Serene Stance",
        desc : "Immediately take up a stance that calms your mind<br>and restores all stamina. <br><br>This stance can not only double your combo attack<br>time during battle, but also save you from the brink of death."
      },
      
      F40 : {
        name : "Invigorating Rush",
        desc : "Restores stamina when you successfully dodge enemy<br>attacks while the effect is active. <br><br>Even the Lost are vulnerable after attacking. If you can<br>evade their strikes, the chance for a counterattack will<br>appear right before your eyes."
      },
      
      F41 : {
        name : "Tranquil Slice",
        desc : "Perform an unperceivable attack from a still stance.<br>An offensive skill performed with a one-handed sword. <br><br>This instantaneous slash creates a vacuum blade that<br>slices through all enemies within range.<br><br>The technique demands the entire soul of its user,<br>and can only be mastered with time."
      },
      
      F42 : {
        name : "Circular Cleaver",
        desc : "Leap while performing a spinning slash. An offensive<br>skill performed with a one-handed sword/halberd/bayonet. <br><br>This technique covers you on all sides while slicing<br>through nearby enemies. <br><br>Aside from its obvious use when foes are closing<br>in all around you, the attack can also strike enemies<br>whose positions are otherwise difficult to pin down."
      },
      
      F43 : {
        name : "Savage Dive",
        desc : "Launch an assault from midair and mow down the<br>enemy. An offensive skill performed with a<br>one-handed sword/halberd. <br><br>The battle techniques of the knight monarch require<br>training to use proficiently. This Gift excels at closing<br>distance with your foe by enabling you to leap into<br>the air and fly toward them."
      },
      
      // Frozen Empress DLC
      F44 : {
        name : "Steadfast Strike",
        desc : "Delivers a single strike that is highly resistant to<br>staggering. An offensive skill performed with<br>a two-handed sword/hammer. <br><br>A singular strike that knows no fear can single-handedly<br>turn the tide of battle and claim victory. However,<br>disregard for one's own life can equally turn all to naught,<br>creating a fine line that must be walked with wisdom."
      },
      
      F45 : {
        name : "Usurper's Blade",
        desc : "Slash at an enemy and recover HP. An offensive skill<br>performed with a halberd. <br><br>By their nature, revenants thirst not only for blood<br>but for life itself. Give in to your desires."
      },
      
      // Lord of Thunder DLC
      F46 : {
        name : "Zero Recast",
        desc : "Resets your partner's Gift cooldown time. <br><br>As long as their ichor allows, your companion will be<br>able to corner foes by using a powerful Gift again and<br>again without waiting."
      },
      
      F47 : {
        name : "Ichor Regeneration",
        desc : "Gradually restores ichor in exchange for a decrease<br>in weapon attack power and defense.<br><br>However, after a certain amount of time passes,<br>ichor restoration will stop and your lost power will<br>return to you."
      },
      
      F48 : {
        name : "Lightning Charge",
        desc : "Rush toward foes at lightning speed and unleash<br>a palm strike.<br><br>Close in on your prey in an instant, like a ravenous<br>beast on the hunt.<br><br>The attack itself does not deal a great amount of damage,<br>but the speed at which it allows you to move opens the<br>way to a decisive victory against any weapon."
      },
      
      F49 : {
        name : "Focus Recovery",
        desc : "Partially increases the focus gauge upon use.<br><br>This Gift may not always send you into a focused state,<br>so it is important to choose the right timing to fit your strategy."
      },
      
      F50 : {
        name : "Radiant Barrel",
        desc : "Shoots powerful projectiles that deal piercing damage. An offensive skill performed with a bayonet. <br><br>The projectiles shot will instantly reach their target and tear through all opponents along their trajectory.<br><br>However, due to the time it takes for the energy to coalesce, this technique is not effective against nearby enemies, but rather against large groups."
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : "Queenslayer Blade",
        desc : "A mass-produced, single-edged sword supplied to soldiers in Operation Queenslayer. Designed to be built as quickly as possible, the ichor conductor is uncovered, giving it a rough appearance, but its finely honed blade cuts through Lost flesh with ease."
      },
      
      A1 : {
        name : "Pipe of Thralldom",
        desc : "A simple club-like weapon. It is just a pipe with a drain function built in, making it a very rough approximation of a sword. It is primarily used by revenants who are subjugated to others, and provides a faint glimmer of hope in combat."
      },
      
      A2 : {
        name : "Broadsword",
        desc : "A wide, double-edged sword mass-produced by the provisional government. Designed for sheer power, if swung with the entire body, it can bring down even giant specimens of the Lost. Its ease of use makes it a common sight in the hands of both heroes and villains in the world of Vein."
      },
      
      A3 : {
        name : "Hanemukuro",
        desc : 'A curved, single-edged blade patterned after a katana. It was created by a revenant named Mukuro, who also engraved its name, which means "Spurning Corpse," onto the blade. The weapon differs from swords ordinarily seen in Vein, and getting the most out of it requires skill from the wielder.'
      },
      
      A4 : {
        name : "Enduring Crimson",
        desc : "Louis's trusty sidearm. Its red blade is engraved with a spell-like Gift and, when fueled with ichor, can cut through the toughest defenses with a single stroke. It was received from the same revenant that gave Yakumo his own weapon and was built by dedicated hands with Louis's technique in mind."
      },
      
      A5 : {
        name : "Machete",
        desc : "A large cleaver seemingly made of a single chunk of steel. Created in a shop by a wild group of engineers, it was designed to combine the handling of a one-handed sword with the sheer power of a two-handed sword. However, it requires great strength to use effectively due to its massive weight, and as such, few actually use the weapon."
      },
      
      A6 : {
        name : "Argent Wolf Blade",
        desc : "A silver one-handed sword used by the Security Enforcement Unit Cerberus. Though it has a Gift trigger, it is balanced well and of superior quality for a mass-produced weapon. Cerberus is an elite, highly-trained force formed after Operation Queenslayer, and their equipment shows its true worth when used by skilled hands."
      },
      
      A7 : {
        name : "Blazing Claw",
        desc : "A long blade used by the Successor of the Claw. The heat inside causes it to leave crimson arcs in the air and sets whatever it strikes ablaze. It is said to be a creation born of the Successor's thoughts, but what was the intention behind it?"
      },
      
      A8 : {
        name : "Iceblood",
        desc : "The thrusting weapon used by the Blade Bearer, one of Mido's puppets. A trigger for cold-type Gifts is inlaid along its length, allowing it to instantly generate a spear of ice. It is a unique item made for Cerberus's very best that requires delicate technique to wield properly."
      },
      
      A9 : {
        name : "Sunset Sword",
        desc : "A warped Queenslayer Blade that has been corroded by miasma. Even inorganic matter is not immune to the Queen's corruption, which has tarnished this weapon's black gleam and altered its properties. However, while there are none who wield it without hesitation, its effectiveness cannot be disputed."
      },
      
      A10 : {
        name : "Black Saber",
        desc : "A jet-black sword with a single-edge. Its curved blade was made to slash through flesh, and a skilled wielder can maximize its effect. Hunters in Black pay no mind to the weight of their weaponry, and seek power above all, so trained hands are a must."
      },
      
      A11 : {
        name : "Executioner",
        desc : "The favored sword of Jack, the Crypt Watcher. Its finely sharpened blade shows no sign of wear, and a single lunge with it leaves fatal wounds. Its history is unknown, but it is likely a custom version of the weapons used by the Hunters in Black, and the care it has been given speaks volumes about the secretive Watcher."
      },
      
      A12 : {
        name : "Lost Broadsword",
        desc : "A one-handed sword used by revenants who have fallen and joined the Lost. Time spent in the miasma has altered its properties. It was made to slay the Lost but later fed on the blood of revenants. Such irony is all too common in the world of Veil."
      },
      
      A13 : {
        name : "Crimson Longsword",
        desc : "A one-handed sword patterned after a long blade wielded by a devourer of gods with steely self-control. It contains a Gift trigger that enables the wielder to fire slashing waves. This godslayer's crimson blade shines brightly against a backdrop of dark sprays of blood."
      },
      
      // Hellfire Knight DLC
      A14 : {
        name : "Hellfire Pipe",
        desc : "A club-like weapon warped by hellfire. <br><br>This pipe was exposed to miasma and bathed in hellfire, causing it to change color. Only those who have overcome the most grueling of trials may obtain it."
      },
      
      A15 : {
        name : "Inferno Blade",
        desc : "A single-edged sword scorched by hellfire.<br><br>Even with high strength scaling, it is still very light.<br><br>The crimson-burned blade houses a powerful flame that imbues the weapon's charged attacks with fire."
      },
      
      // Frozen Empress DLC
      A16 : {
        name : "Hoarfrost Pipe",
        desc : "A club-like weapon warped by hoarfrost. <br><br>This pipe was exposed to miasma and bathed in hoarfrost, causing it to change color. Only those who have overcome the most grueling of trials may obtain it."
      },
      
      // Lord of Thunder DLC
      A17 : {
        name : "Thunderbolt Pipe",
        desc : "A club-like weapon warped by a thunderbolt. <br><br>This pipe was exposed to miasma and struck by a thunderbolt, causing it to change color. Only those who have overcome the most grueling of trials may obtain it."
      },
      
      A18 : {
        name : "Pipe of the Unrivaled",
        desc : "A club-like weapon bestowed only upon those who desire to become the greatest. <br><br>A revenant unequalled in power has no need for additional weaponry; this weapon only exists to venerate the mighty."
      },
      
      A19 : {
        name : "Fulmen Blade",
        desc : "A one-handed sword galvanized by a thunderbolt.<br><br>It is heavy, but it features high defensive power, as well as high dexterity and mind scaling.<br><br>The blue electricity hidden within this blade twinkles beautifully and imbues the weapon's charged attacks with lightning."
      },
      
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : "Queenslayer Greatsword",
        desc : "A mass-produced two-handed sword provided to revenants in Operation Queenslayer. This blade was designed for use against the Queen's body, which makes it more than adequate for slicing through the Lost."
      },
      
      B1 : {
        name : "Zweihander",
        desc : "A long, two-handed blade mass-produced by the provisional government. Designed for slaying larger Lost specimens, it is highly durable and provides its bearer with a great deal of protection. Feedback from Operation Queenslayer led to technological upgrades such as a single-unit, internally-mounted ichor conductor."
      },
      
      B2 : {
        name : "Nagimukuro",
        desc : 'A large blade patterned after a Japanese great sword. It was created by a revenant named Mukuro, who also engraved its name, which means "Scything Corpse," is written on the blade. Designed for wide, sweeping cuts, it is strong enough to send out a gust of wind when swung with force.'
      },
      
      B3 : {
        name : "Oni Bane",
        desc : "The sword that has seen Yakumo through countless battlefields. Made with a different technique from most weapons in the world of Vein, it was built to be swung wide while moving, despite its large size. Yakumo received it from the same revenant who gave Louis his weapon, and he has further customized it to fit his style."
      },
      
      B4 : {
        name : "Warped Blade",
        desc : "A two-handed sword with a blade like an extended tooth. Made from the body of a tremendous specimen of the Lost, this strange weapon has the power to unleash something like a Gift when swung with maximum power. It holds a slight warmth and is rumored to itch for the taste of blood."
      },
      
      B5 : {
        name : "Black Great Sword",
        desc : "A two-handed sword with a black, single-edged, chain blade. This long, curved weapon was designed to sever the limbs of foes. Hunters in Black pay no mind to the weight of their weaponry and seek power above all, so trained hands are a must."
      },
      
      B6 : {
        name : "Argent Wolf King's Blade",
        desc : "A golden two-handed sword wielded by Silva after he turned to frenzy. It retains some of the power connected to the relics, and can deliver powerful strikes in a straight line with terrifying speed. Its design suggests beauty nearly swallowed by sheer might and gives its bearer an imperious aura."
      },
      
      B7 : {
        name : "Judgment Edge",
        desc : "A two-handed sword made by the infinitely inquisitive and depraved revenant Mido. Its internal transformation mechanism can generate a high-output Gift blade, giving it exceeding destructive power that was likely meant for a final showdown against Silva."
      },
      
      B8 : {
        name : "Sunset Great Sword",
        desc : "A warped Queenslayer Greatsword that has been corroded by miasma. Even inorganic matter is not immune to the Queen's corruption, which has tarnished this weapon's black gleam and altered its properties. However, while there are none who wield it without hesitation, its effectiveness cannot be disputed."
      },
      
      B9 : {
        name : "Lost Zweihander",
        desc : "A two-handed sword used by revenants who have fallen and joined the Lost. Time spent in the miasma has altered its properties. It was made to slay the Lost but later fed on the blood of revenants. Such irony is all too common in the world of Vein."
      },
      
      B10 : {
        name : "Argent Wolf Brand",
        desc : "A silver two-handed sword used by the Security Enforcement Unit Cerberus. It is best suited for close assaults, but can also quickly close in on foes with powerful slashes. Cerberus is an elite, highly-trained force formed after Operation Queenslayer, and their equipment shows its true worth when used by skilled hands."
      },
      
      B11 : {
        name : "Blanched Greatsword",
        desc : "A two-handed sword patterned after a giant saw wielded by a devourer of gods who bore the weight of destiny. Swinging it at full strength will cause it to glow blue and slam down with terrible force. This weapon wreathed in blinding light will make short work of the Lost."
      },
      
      // Hellfire Knight DLC
      B12 : {
        name : "Wrathful Balmung",
        desc : "A two-handed sword scorched by hellfire.<br><br>Though heavy, it excels in attack power and weapon defense, while also boasting high dexterity scaling.<br><br>The burnt blade still retains the heat from the flame, imbuing charged attacks with fire."
      },
      
      // Frozen Empress DLC
      B13 : {
        name : "Azure Greatsword",
        desc : "A two-handed sword chilled by hoarfrost.<br><br>Though heavy, it features high weapon defense and willpower scaling.<br><br>This white-frosted blade holds the power of absolute zero within, which imbues its charged attacks with ice."
      },
      
      
      // # HALBERDS #
      C0 : {
        name : "Queenslayer Halberd",
        desc : "A mass-produced polearm provided to revenants in Operation Queenslayer. Built for power and ease of use, those fighting Lost giants were the first to receive new models."
      },
      
      C1 : {
        name : "Bardiche",
        desc : "A long polearm mass-produced by the provisional government. The design of the head means it is effective when swung with enough force. Provisional government weapons are built with civilian defense in mind, so while they appear plain and use common materials, they are perfectly capable of destroying the Lost."
      },
      
      C2 : {
        name : "Impaler",
        desc : "A thin spear with a sharp head. Its length exceeds the height of the average person, but it is light enough for sudden lunges. It was made by eccentric engineers whose products were all awkward to handle, save this weapon, which was made on a whim."
      },
      
      C3 : {
        name : "Garnet Splitter",
        desc : "A dignified red and silver polearm named for a red jewel. It houses a miniature Gift trigger that sends out sweeping blades when swung. Created by a sect of revenants who think of themselves as the new nobility, it is highly functional in spite of its ostentatious appearance."
      },
      
      C4 : {
        name : "Dammerung ",
        desc : "The polearm used by the innocent Io. It has been customized by Murasame to activate a Gift that provides the wielder with additional protection when swung. As you carve out your destiny, will you find your own past, or will you hope of creating a future with friends?"
      },
      
      C5 : {
        name : "Black Halberd",
        desc : "A polearm with a jet-black blade. Its large, scythe-like head was designed to reap the heads of the Lost. Hunters in Black pay no mind to the weight of their weaponry and seek power above all, so trained hands are a must."
      },
      
      C6 : {
        name : "Assassin's Sickle",
        desc : "The tool of an executioner that dwelled in the Howling Pit. It carries a Gift trigger that can produce liquid, and can fire out columns of water when swung. The Lost who bore it has been reduced to ash, but its power remains and is passed to the next bearer, like a final grip on life."
      },
      
      C7 : {
        name : "Sunset Halberd",
        desc : "A warped Queenslayer Halberd that has been corroded by miasma. Even inorganic matter is not immune to the Queen's corruption, which has tarnished this weapon's black gleam and altered its properties. However, while there are none who wield it without hesitation, its effectiveness cannot be disputed."
      },
      
      C8 : {
        name : "Lost Bardiche",
        desc : "A polearm used by revenants who have fallen and joined the Lost. Time spent in the miasma has altered its properties. It was made to slay the Lost, but later fed on the blood of revenants. Such irony is all too common in the world of Veil."
      },
      
      C9 : {
        name : "Obliterator Axe",
        desc : "A destructive weapon once wielded by a particularly strong member of Cerberus. Its form changed when its bearer became one of the Lost, supplying it with a dreadful new power that allows it to smash through defenses and cut through foes completely."
      },
      
      C10 : {
        name : "Argent Wolf Poleaxe",
        desc : "A silver polearm used by the Security Enforcement Unit Cerberus. It is a formidable weapon that emits an authoritative aura. Cerberus is an elite, highly-trained force formed after Operation Queenslayer, and their equipment shows its true worth when used by skilled hands."
      },
      
      C11 : {
        name : "Cerulean Spear",
        desc : "A halberd patterned after a spear wielded by a devourer of gods who held a deep aspiration. When swung at full force, a Gift blade springs from the head, allowing the user to attack with even greater reach. This elegant blue weapon has pierced gods, and will reduce the Lost to ash."
      },
      
      // Frozen Empress DLC
      C12 : {
        name : "Blood Mist Halberd",
        desc : "A halberd chilled by hoarfrost.<br><br>It balances its low attack power with light weight and high strength scaling.<br><br>The unceasing cold contained within the weapon imbues its charged attacks with ice."
      },
      
      // Lord of Thunder DLC
      C13 : {
        name : "Lightning Brionac",
        desc : "A halberd galvanized by a thunderbolt.<br><br>Though its attack power and weapon defense are low, it is lightweight and increases ichor gain.<br><br>The electric blade is cloaked in a bluish light that imbues its charged attacks with lightning."
      },
      
      
      // # HAMMERS #
      D0 : {
        name : "Queenslayer Hammer",
        desc : "A mass-produced sledgehammer provided to revenants in Operation Queenslayer. Designed to crack the Queen's limbs, the pursuit of power has left it unwieldy, and proper use takes a great deal of training."
      },
      
      D1 : {
        name : "Hammer of Thralldom",
        desc : "A primitive, hammer-like weapon. It is just a haft with a heavy concrete block at the top. Being given minimum treatment to make it a weapon for revenants. It is primarily used by revenants who are subjugated to others, and provides a faint glimmer of hope in combat."
      },
      
      D2 : {
        name : "Juggernaut Sledgehammer",
        desc : "A great hammer used by Oliver, who succumbed to thirst and joined the Lost. Though it has not been maintained, it still functions perfectly well as a weapon and holds all the power it had during Operation Queenslayer. Given away because it was thought useless, it provided a small ray of hope to the thrall who received it."
      },
      
      D3 : {
        name : "Heavy Axe",
        desc : "A long polearm mass-produced by the provisional government. Its thick blade is not made for precision attacks, but it delivers heavy slashes. It was designed for slaying Lost giants, but the lack of tools in the harsh world of Vein means it is also used to demolish old buildings and clear vegetation."
      },
      
      D4 : {
        name : "Impulse Anchor",
        desc : "A sturdily built mechanical hammer. It contains a Gift trigger that fires waves of heat from its exhaust port, multiplying its crushing power. Striking the ground like this shakes the earth and generates a shockwave. It is the masterwork of a group of half-mad engineers, and some revenants make it their lifelong partner."
      },
      
      D5 : {
        name : "Huge Hammer",
        desc : "A massive hammer used by the Lost who have been enlarged by exposure to miasma. Its face has been hardened by exposure to thick miasma, and a full-power swing can smash through anyone's guard. No few revenant thralls sent out in search of blood beads end up suffering a terrible transformation and holding such weapons."
      },
      
      D6 : {
        name : "Argent Wolf Warhammer",
        desc : "A silver warhammer used by the Security Enforcement Unit Cerberus. Its center of gravity is set at a point that lets the user swing the weapon freely, despite its size. Cerberus is an elite, highly-trained force formed after Operation Queenslayer, and their equipment shows its true worth when used by skilled hands."
      },
      
      D7 : {
        name : "Tyrant's Labrys",
        desc : "A double-bit axe that glitters a dull gold. Even heavier than it appears, only the very strong can wield it effectively. The shining blade and handle are not real gold, but forgery created with the birth of a tyrant."
      },
      
      D8 : {
        name : "Sunset Hammer",
        desc : "A warped Queenslayer Hammer that has been corroded by miasma. Even inorganic matter is not immune to the Queen's corruption, which has tarnished this weapon's black gleam and altered its properties. However, while there are none who wield it without hesitation, its effectiveness cannot be disputed."
      },
      
      D9 : {
        name : "Burned Warhammer",
        desc : "A warhammer warped by sustained exposure to intense flames. Turning it into a wrecking ball that smashes flesh and bone, even while it turns it to cinders with a mournful heat."
      },
      
      D10 : {
        name : "Lost Heavy Axe",
        desc : "An axe used by revenants who have fallen and joined the Lost. Time spent in the miasma has altered its properties. It was made to slay the Lost, but later fed on the blood of revenants. Such irony is all too common in the world of Veil."
      },
      
      // Hellfire Knight DLC
      D11 : {
        name : "Hellfire Hammer",
        desc : "A warhammer scorched by hellfire.<br><br>Its dexterity scaling is especially high, greatly enhancing physical attack power and drain rating.<br><br>The hellfire trapped in the metal burns as hot as ever, imbuing charged attacks with fire."
      },
      
      // Frozen Empress DLC
      D12 : {
        name : "Snowdrift Sharur",
        desc : "A warhammer chilled by hoarfrost.<br><br>It specializes in defense and strength scaling, while featuring a slightly lighter weight.<br><br>This weapon houses the frigid chill of absolute zero, which imbues its charged attacks with ice."
      },
      
      
      // # BAYONETS #
      E0 : {
        name : "Queenslayer Bayonet",
        desc : "A mass-produced bayonet provided to revenants in Operation Queenslayer. Its Gift generator allows for effective long-ranged attacks, making it popular among fighters uncomfortable in a melee."
      },
      
      E1 : {
        name : "Brodiaea",
        desc : "The bayonet Mia always kept close at hand. It has been lightened and customized so that even its small-framed owner could use it freely. The dents and scratches across its surface tell the story of how it has protected two important lives. It was given the name of a flower as a sign of thanks."
      },
      
      E2 : {
        name : "Riot Breaker",
        desc : "A bayonet built from salvaged weapon parts and scrap materials. Despite its rough appearance, its Gift trigger operates smoothly, sending out attacks in a clean spread. It is a preferred weapon among outlaws and those who flaunt their wealth often find themselves in its sights."
      },
      
      E3 : {
        name : "Bayonet",
        desc : "A saw-bladed bayonet mass-produced by the provisional government. Its Gift trigger can fire short-range blasts that cover an area. Many revenants have no formal weapons training, so it was designed to be effective even in unskilled hands."
      },
      
      E4 : {
        name : "Rubellite Piercer",
        desc : "A dignified red and silver bayonet named for a red jewel. Its long, graceful barrel fires bullets that seem to chase after their targets. One sect of revenants think of themselves as the nobility, and their weaponry deserves whatever luxury they can provide it."
      },
      
      E5 : {
        name : "Argent Wolf Bayonet",
        desc : "A silver bayonet used by the Security Enforcement Unit Cerberus. The blades on either side of the barrel were made for initial charges into intense, close-range fights. Cerberus is an elite, highly-trained force formed after Operation Queenslayer, and their equipment shows its true worth when used by skilled hands."
      },
      
      E6 : {
        name : "Burning Disaster",
        desc : "The weapon of the Cannoneer, one of Mido's puppets. It houses a mechanism that amplifies fire Gifts, and sends out sheets of white-hot flame. It was built for a gunner with high Gift compatibility and allows the user to adjust the shape of the fire it shoots out."
      },
      
      E7 : {
        name : "Sunset Bayonet",
        desc : "A warped Queenslayer Bayonet that has been corroded by miasma. Even inorganic matter is not immune to the Queen's corruption, which has tarnished this weapon's black gleam and altered its properties. However, while there are none who wield it without hesitation, its effectiveness cannot be disputed."
      },
      
      E8 : {
        name : "Black Bayonet",
        desc : "A bayonet with a black barrel and blade. Its curved edge can cut through even the toughest flesh, and open foes up for a fierce follow-up shot. Hunters in Black pay no mind to the weight of their weaponry, and seek power above all, so trained hands are a must."
      },
      
      E9 : {
        name : "Libertador",
        desc : "The bayonet used by Eva, the Crypt Watcher. It has a custom Gift trigger that fires seeking bullets. The weapon was given to Eva by her partner Jack, and its tremendous power illustrates the depth of his loyalty to her."
      },
      
      E10 : {
        name : "Lost Bayonet",
        desc : "A bayonet used by revenants who have fallen and joined the Lost. Time spent in the miasma has altered its properties. It was made to slay the Lost but later fed on the blood of revenants. Such irony is all too common in the world of Veil."
      },
      
      // Frozen Empress DLC
      E11 : {
        name : "Bloody Snow",
        desc : "A bayonet chilled by hoarfrost.<br><br>It offsets its low attack power and weapon defense with a light weight and increased ichor gain.<br><br>The gun is infused with a deep chill, and when performing charged attacks, it fires powerful ice rounds in rapid succession, while the blade gains ice properties."
      },
      
      // Lord of Thunder DLC
      E12 : {
        name : "Thunderbolt",
        desc : "A bayonet galvanized by a thunderbolt.<br><br>It is light, and even melee attacks can deal a fair amount of damage.<br><br>A mysterious purple lightning permeates the gun, which both imbues the blade with lightning and converts its rounds to guided projectiles during charged attacks."
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : "Night Claw",
        desc : "An Ogre-type Blood Veil <br>with a traditional style for revenants. <br><br>Its drain mechanism is very efficient, increasing the <br>amount of ichor gained from attacks. <br><br>This model excels in both form and function, and is<br>highly prized due to its limited production run."
      },
      
      A1 : {
        name : "Noble Silver",
        desc : "A Blood Veil with a cloak in the shape of bat wings. <br><br>The silver lines that mark the bones contain systems <br>that enhance support Gifts. <br><br>Its creators placed a lot of emphasis on style, but sadly, <br>most revenants are too concerned with survival to notice."
      },
      
      A2 : {
        name : "GXM Variant",
        desc : "A Blood Veil made of armored plating and treated fabric. <br><br>It is as protective as it looks and includes functions that <br>enhance support Gifts. <br><br>It was created by a former military manufacturer, but the <br>scarcity of synthetic fibers and alloys in Vein means few <br>revenants are able to don it."
      },
      
      A3 : {
        name : "Blackblood Liberator",
        desc : "A Blood Veil with a tattered cloak.<br>It appears shabby at first glance, but it enhances <br>offensive Gifts and resistance to status effects. <br><br>The manufacturer is unknown. It is tuned to be <br>sensitive, and the right arm transformation <br>mechanism is unstable, so additional reinforcement <br>is needed."
      },
      
      A4 : {
        name : "Queenslayer Claw",
        desc : "A Blood Veil used by forces deployed in Operation Queenslayer. <br><br>It enhances all types of Gifts, but is not as robust as desired. <br><br>It was designed for low-cost mass production, so it was built <br>around a stock tactical vest with an added drain function so <br>that revenants could be quickly equipped and sent to the front <br>lines."
      },
      
      A5 : {
        name : "Venous Claw",
        desc : "An Ogre-type Blood Veil collected from a revenant <br>whose thirst drove them to become one of the Lost. <br>Possibly due to this transformation, it is less durable <br>than others of its kind, but more than compensates <br>by being remarkably light.<br><br>The tentacles it has sprouted illustrate clearly the <br>horror of becoming Lost."
      },
      
      // Hellfire Knight DLC
      A6 : {
        name : "Ruinous Chevalier",
        desc : "A Blood Veil tattered by hellfire.<br><br>Though this garment is heavy, it grants its wearer<br>high damage reduction and scaling for dark Gifts.<br><br>No records of this Blood Veil remain in history;<br>however, this very mystery suggests new power<br>and possibilities hidden inside."
      },
      
      // Lord of Thunder DLC
      A7 : {
        name : "Twilight Claw",
        desc : "A Blood Veil tattered by a roaring thunderbolt.<br><br>Its heavy weight is balanced with high damage<br>reduction and high strength scaling.<br><br>Warriors who have attained great strength still seek conflict,<br>reaching for the peak of power with this veil."
      },
      
      
      // # STINGER #
      B0 : {
        name : "Night Spear",
        desc : "A Stinger-type Blood Veil <br>with a traditional style for revenants. <br><br>Offers less mobility than competitors of the same type, <br>but is a solid guard against all types of damage.<br><br>This model excels in both form and function and is <br>highly prized due to its limited production run."
      },
      
      B1 : {
        name : "Raven Fatigues",
        desc : "A Blood Veil that strongly resembles the wings of a raven. <br><br>As its mystical design implies, it enhances the power of <br>offensive Gifts. <br><br>Originally created as a prototype for Night-series Blood <br>Veils, a shift toward balance meant that this was the only <br>one ever produced."
      },
      
      B2 : {
        name : "Winter Mantle",
        desc : "A Blood Veil in the form of an outfit for exploring polar <br>regions. <br><br>It severely hampers mobility, but offers solid protection <br>and greatly enhances support Gifts. <br><br>Originally designed for mountain expeditions in search<br>of blood beads that turned out fruitless, this model was <br>left to the wayside."
      },
      
      B3 : {
        name : "Silver Garb",
        desc : "A Blood Veil that resembles a gleaming suit of armor <br>worn by knights. <br><br>Highly resistant to slashing and piercing attacks. <br><br>Designed by artisans who wanted to preserve the<br>human sense of beauty. Many revenants hold that <br>same desire."
      },
      
      B4 : {
        name : "Queenslayer Thorn",
        desc : "A Blood Veil used by forces in Operation Queenslayer. <br><br>It enhances all types of Gifts but is not as robust as desired. <br><br>Stinger-types can be used at range and are well-suited for <br>skirmishes, but the complicated drain mechanism meant <br>mass production was not a possibility."
      },
      
      // Hellfire Knight DLC
      B5 : {
        name : "Graceful Prominence",
        desc : "A Blood Veil tattered by hellfire.<br><br>Its special features include a light weight,<br>high dexterity scaling, and high damage reduction.<br><br>This beautiful veil was not made simply to be showy;<br>however, its elegance is a reflection of its creator's pursuit of power."
      },
      
      // Frozen Empress DLC
      B6 : {
        name : "Subzero Shroud",
        desc : "A Blood Veil tattered by hoarfrost.<br><br>To offset its heavy weight, it excels in<br>damage reduction and dark Gift scaling.<br><br>The solemn and dignified appearance of this garment<br>is the mark of an unshakeable will to protect revenant life."
      },
      
      
      // # HOUNDS #
      C0 : {
        name : "Night Fang",
        desc : "A Hounds-type Blood Veil <br>with a traditional style for revenants.<br><br>It boasts strong defensive capabilities, making it <br>reliable on any battlefield. <br><br>This model excels in both form and function and is <br>highly prized due to its limited production run."
      },
      
      C1 : {
        name : "Blue Hounds",
        desc : "A Blood Veil that looks like a simple jacket. <br><br>While it is not especially resistant to elements, it <br>offers a high level of resistance to status effects. <br><br>Its low cost and style that goes well with anything <br>makeit popular among revenants."
      },
      
      C2 : {
        name : "GXL Defender",
        desc : "A Blood Veil made of armored plating and treated fabric. <br><br>While its protective qualities make it like a private <br>fortress, it is surprisingly vulnerable to status effects. <br><br>It was created by a former military manufacturer, but the <br>scarcity of synthetic fibers and alloys in Vein means few<br>revenants are able to don it."
      },
      
      C3 : {
        name : "Hedgehog Fort",
        desc : "A Blood Veil covered in metal spikes.<br><br>It is less protective than it appears, but increases the <br>power of offensive Gifts.<br><br>Rumored to be created by black market manufacturers. <br>It is not very functional as ordinary clothing, but its <br>intimidating appearance certainly works for its intended<br>purpose."
      },
      
      C4 : {
        name : "White Vestment",
        desc : "A Blood Veil reminiscent of a monastic robe.<br><br>While it impedes movement somewhat and offers little <br>defense, it greatly increases the effectiveness of support <br>Gifts. <br><br>It was commonly worn by a sect of religious revenants, <br>but one day they all vanished without a word."
      },
      
      // Hellfire Knight DLC
      C5 : {
        name : "Violet Gear",
        desc : "A Blood Veil tattered by hellfire.<br><br>What it lacks in Gift scaling, it makes up for in its<br>incredibly light weight and high strength scaling.<br><br>Having finally acquired light weight, bearers of Hounds-type<br>Blood Veils will be like beasts unleashed into the wild,<br>tearing through battlefields with reckless abandon."
      },
      
      // Lord of Thunder DLC
      C6 : {
        name : "Daybreak Thunderfang",
        desc : "A Blood Veil tattered by a roaring thunderbolt.<br><br>Though heavy, it excels in dexterity and mind scaling,<br>and is optimized for light Gifts.<br><br>Rumor has it that the strongest revenant of the past had<br>once used this veil, but there's no telling how true that really is."
      },
      
      
      // # IVY #
      D0 : {
        name : "Night Thorn",
        desc : "An Ivy-type Blood Veil <br>with a traditional style for revenants. <br><br>Enhances the effects of all Gift types and provides <br>stable defenses against non-physical attacks. <br><br>This model excels in both form and function and is <br>highly prized due to its limited production run."
      },
      
      D1 : {
        name : "Ivory Grace",
        desc : "A Blood Veil ornamented with silver.<br><br>While not especially protective, it strongly increases <br>the efficacy of Gifts. <br><br>It is an item that seeks to provide a touch of beauty <br>to the ruined world of Vein and embodies a sense of <br>aesthetics that revenants are close to losing entirely."
      },
      
      D2 : {
        name : "GXH Assault",
        desc : "A Blood Veil made from a field coat equipped with a <br>drain function. <br><br>It is highly protective without sacrificing <br>maneuverability and also enhances offensive Gifts. <br><br>It was created by a former military manufacturer, but <br>the scarcity of synthetic fibers and alloys in this Vein <br>means only a few revenants were able to obtain it."
      },
      
      D3 : {
        name : "Prayer Shawl",
        desc : "A Blood Veil marked by its elaborate design and bold <br>red color. <br><br>It is surprisingly protective, and enhances the <br>effectiveness of support Gifts. <br><br>Its original owner prayed for salvation, but none know <br>if an answer came."
      },
      
      D4 : {
        name : "Suicide Spur",
        desc : "A Blood Veil that looks like a collar made of thorns. <br><br>Greatly enhances the power of offensive Gifts, but <br>offers next to no physical defense. <br><br>It is rumored that its maker was a twisted engineer <br>who fully believed that the only real defense is killing <br>the enemy first, so few use it willingly."
      },
      
      // Frozen Empress DLC
      D5 : {
        name : "Bewitching Thorn",
        desc : "A Blood Veil tattered by hoarfrost.<br><br>For its heavy weight, it offers damage reduction<br>and very high dexterity scaling.<br><br>Under the elegant hood hides the glinting stare<br>of one who yearns for the kiss of death,<br>the sweet taste of fresh blood."
      },
      
      // Lord of Thunder DLC
      D6 : {
        name : "Master Spines",
        desc : "A Blood Veil tattered by a roaring thunderbolt.<br><br>What it lacks in Gift scaling, it makes up for in its<br>light weight and high dexterity and willpower scaling.<br><br>It is said that any revenant who dons this veil will feel<br>as if they've sprouted wings."
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : "Alleviation",
        desc : "Reduces an equipment's weight, <br>at the cost of decreased base stats."
      },
      
      A1 : {
        name : "Fortification",
        desc : "Increases an equipment's weight <br>while also increasing its base stats."
      },
      
      A2 : {
        name : "Intensification",
        desc : "Grants an equipment greater stat scaling.<br>Decreases weapon and Gift attack properties."
      },
      
      A3 : {
        name : "Gifts",
        desc : "Greatly enhances a weapon's attack or a Blood Veil's Gift effectiveness. <br>At the cost of greatly reduced stat scaling."
      },
      
      A4 : {
        name : "Devour",
        desc : "Enhances an equipment's drain rating. <br>Decreases weapon and Gift attack properties."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : "Fire",
        desc : "Grants an equipment fire properties. <br>Decreases weapon/Gift attack & reduces stat scaling."
      },
      
      B1 : {
        name : "Ice",
        desc : "Grants an equipment ice properties. <br>Decreases weapon/Gift attack & reduces stat scaling."
      },
      
      B2 : {
        name : "Lightning",
        desc : "Grants an equipment lightning properties. <br>Decreases weapon/Gift attack & reduces stat scaling."
      },

      
      // # AILMENTS #
      C0 : {
        name : "Venom",
        desc : "Creates equipment that poisons enemies, <br>but has diminished Gift properties and attack."
      },
      
      C1 : {
        name : "Stun",
        desc : "Creates equipment that stuns enemies, <br>but has diminished Gift properties and attack."
      },
      
      C2 : {
        name : "Inhibit",
        desc : "Creates equipment that inhibits enemies, <br>but has diminished Gift properties and attack."
      },
      
      C3 : {
        name : "Slow",
        desc : "Creates equipment that slows enemies, <br>but has diminished Gift properties and attack."
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
