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
  preset_empty : 'Empty Build',
  preset_warn : 'Do you want to load the "%{PRESET_NAME}" preset? Your current build will be overwritten.',
  preset_stop_warning : 'Stop showing this warning',
  preset_submit : 'Submit a Build',
  preset_submit_confirm : 'Do you want to submit a build? You will leave the current page. Please make sure to save your build before proceeding.',
  
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
        name : 'Queenslayer',
        desc : 'Well-balanced for exploration and melee combat, and features high HP and endurance.',
        owner : 'Player'
      },

      A1 : {
        name : 'Fighter',
        desc : 'Boasts endurance for melee combat. Raises abilities based on strength and dexterity.',
        owner : 'Unknown'
      },

      A2 : {
        name : 'Ranger',
        desc : 'This code excels at providing support and defense buffs with Gifts.',
        owner : 'Unknown'
      },
      
      A3 : {
        name : 'Caster',
        desc : 'Specializes in powerful attack-type Gifts that can be used from a distance.',
        owner : 'Unknown'
      },
      
      A4 : {
        name : 'Berserker',
        desc : 'Features high strength and endurance. Its low ichor stock can be offset with heavy armor.',
        owner : 'Oliver Collins'
      },
      
      A5 : {
        name : 'Prometheus',
        desc : 'Well-balanced for combat, but fragile. Its Gifts bolster dodging and parrying.',
        owner : 'Louis'
      },
      
      A6 : {
        name : 'Hunter',
        desc : 'Excels at ranged combat. Features Gifts that support ranged attacks with the bayonet.',
        owner : 'Kevin'
      },
      
      A7 : {
        name : 'Mercury',
        desc : 'Allows for safe exploration with its balanced stats and Gifts related to stamina and haze.',
        owner : 'Coco'
      },
      
      A8 : {
        name : 'Hermes',
        desc : 'Strikes a fine balance between melee attacks and a variety of useful Gifts.',
        owner : 'Davis'
      },
      
      A9 : {
        name : 'Darkseeker',
        desc : 'Features many battle-ready Gifts, specializing in those that deal with venom.',
        owner : 'Nameless Successor'
      },
      
      A10 : {
        name : 'Atlas',
        desc : 'Allows for the use of heavy armor. Great for enduring close quarters combat.',
        owner : 'Yakumo Shinonome'
      },
      
      A11 : {
        name : 'Assassin',
        desc : 'Optimal for melee combat. Features Gifts that are great for surprise attacks.',
        owner : 'Riki'
      },
      
      A12 : {
        name : 'Artemis',
        desc : 'Features high stamina and attack-type Gifts, but suffers from low endurance.',
        owner : 'Mia Karnstein'
      },
      
      A13 : {
        name : 'Isis',
        desc : 'Specializes in ranged combat by overpowering enemies with various ichor attacks.',
        owner : 'Aurora Valentino'
      },
      
      A14 : {
        name : "Queen's Ribcage",
        desc : 'Specializes in ranged attacks and overwhelming enemies with attack-type Gifts.',
        owner : 'Queen'
      },
      
      A15 : {
        name : 'Eos',
        desc : 'Boasts support-type Gifts, high endurance, and plenty of ichor.',
        owner : 'Io'
      },
      
      A16 : {
        name : 'Fionn',
        desc : 'Features high endurance and total weight. Its low ichor can be offset with tough armor.',
        owner : 'Nicola Karnstein'
      },
      
      A17 : {
        name : "Queen's Breath",
        desc : 'Specializes in the used of enhanced Gifts. Supplements its low stats with Gifts.',
        owner : 'Queen'
      },
      
      A18 : {
        name : 'Survivor',
        desc : 'Focuses on dexterity, and boasts Gifts that are useful in battle.',
        owner : 'Carmilla'
      },
      
      A19 : {
        name : 'Dark Knight',
        desc : 'Focuses on high endurance and strength, and features Gifts useful with a halberd.',
        owner : 'Miguel Garcia'
      },
      
      A20 : {
        name : 'Scathach',
        desc : 'Well-balanced for both Gifts and physical attacks. Specializes in fire-based Gifts.',
        owner : 'Emily Su'
      },
      
      A21 : {
        name : "Queen's Claw",
        desc : 'Focuses on overwhelming enemies with both Gifts and physical attacks.',
        owner : 'Queen'
      },
      
      A22 : {
        name : 'Harmonia',
        desc : 'Features excellent Dark Gifts. Is weak to being staggered, but has a high ichor stock.',
        owner : 'Eva Roux'
      },
      
      A23 : {
        name : "Queen's Throat",
        desc : 'Excels at Gift-based combat, and features many support-type Gifts.',
        owner : 'Queen'
      },
      
      A24 : {
        name : 'Heimdall',
        desc : 'Specializes in highly aggressive melee combat, but its weight allowance is extremely low.',
        owner : 'Jack Rutherford'
      },
      
      A25 : {
        name : 'Hephaestus',
        desc : 'Specializes in dexterity-based weapons and uses devious Gifts to toy with the enemy.',
        owner : 'Rin Murasame'
      },
      
      A26 : {
        name : 'Warrior',
        desc : 'Ideal for strength-based fighting styles, and features Gifts that aid in survival.',
        owner : "Murasame's Assistant"
      },
      
      A27 : {
        name : 'Scout',
        desc : 'Excels at Gift-based combat with great drain capabilities. Enables the use of light armor.',
        owner : 'Naomi'
      },
      
      A28 : {
        name : 'Queen',
        desc : 'Specializes in Gifts and boasts a high ichor stock, enabling you to overwhelm the enemy.',
        owner : 'Queen'
      },
      
      A29 : {
        name : 'Hades',
        desc : 'Boasts high attack power based in strength and dexterity. Ideal for using heavy gear.',
        owner : 'Gregorio Silva'
      },
      
      A30 : {
        name : 'Demeter',
        desc : 'Features Gift-based support with its high ichor stock, or high strength-based damage.',
        owner : 'Karen'
      },
      
      A31 : {
        name : 'Ishtar',
        desc : 'Features Gifts that aid in attacking/defending, including Gifts involving self-sacrifice.',
        owner : 'Cruz Silva'
      },
      
      A32 : {
        name : 'Harbinger',
        desc : 'Boasts high power and unique Gifts that can only be used by those with determination.',
        owner : 'Unknown'
      },
      
      A33 : {
        name : 'Astrea',
        desc : 'Provides balance and stability in combat, and features Gifts useful during exploration.',
        owner : 'Mia Karnstein'
      }
    },
    
    
    // # 2. PASSIVE SKILLS #
    passive : {
      // # GENERAL BOOSTS #
      A0 : {
        name : 'Health Boost',
        desc : 'Increases maximum HP.'
      },

      A1 : {
        name : 'Health Stimulant',
        desc : 'Increases maximum HP.'
      },

      A2 : {
        name : 'Stamina Boost',
        desc : 'Increases maximum stamina.'
      },
      
      A3 : {
        name : 'Stamina Stimulant',
        desc : 'Increases maximum stamina.'
      },
      
      A4 : {
        name : 'Sprinter',
        desc : 'Reduces stamina drained by dashing.'
      },
      
      A5 : {
        name : 'Sharpened Fangs',
        desc : 'Increases damage dealt by a special drain performed after a parry/back attack.'
      },
      
      A6 : {
        name : 'Tenacious Fang',
        desc : 'Increases damage dealt by drain attacks performed after a launch attack.'
      },
      
      A7 : {
        name : 'Heroic Fang',
        desc : 'Increases damage dealt by charged drains.'
      },
      
      A8 : {
        name : 'Swift Destruction',
        desc : 'Increases damage dealt in proportion to your mobility.'
      },
      
      A9 : {
        name : 'Survival Instinct',
        desc : 'Boosts Gift abilities, weapon & drain attack power when your HP is below a certain amount.'
      },
      
      A10 : {
        name : 'Savvy Evasion',
        desc : 'Increases the amount of focus gained from dodging attacks.'
      },
      
      A11 : {
        name : 'Resilient Focus',
        desc : 'Increases the amount of focus gained by receiving damage.'
      },
      
      A12 : {
        name : 'Weapon Drain Rating Up',
        desc : 'Increases the drain rating of weapon attacks.'
      },
      
      A13 : {
        name : 'Avarice',
        desc : 'Increases the amount of ichor gained from drain attacks.'
      },

      A14 : {
        name : 'Vow of Ichor',
        desc : 'Reduces max HP to increase the amount of ichor that can be held.'
      },

      A15 : {
        name : 'Max Ichor Boost',
        desc : 'Increases the maximum amount of ichor that can be held.'
      },
      
      A16 : {
        name : 'Increased Gift Speed',
        desc : 'Increases the speed of your Gifts.'
      },
      
      A17 : {
        name : 'Charge Accelerator',
        desc : 'Increases the speed of charged actions.'
      },
      
      A18 : {
        name : 'Debuff Build-Up',
        desc : 'Increases debuff build-up against foes.'
      },
      
      A19 : {
        name : "Revenant's Ambition",
        desc : 'Allows you to equip heavier weapons and Blood Veils.'
      },
      
      A20 : {
        name : 'Opportunism',
        desc : 'Increases weapon damage dealt against enemies with status ailments.'
      },


      // # DEFENSE BOOSTS #
      B0 : {
        name : 'Balance Up',
        desc : 'Increases balance.'
      },

      B1 : {
        name : 'Deft Parry',
        desc : 'Fully restores stamina when you parry an attack.'
      },
      
      B2 : {
        name : 'Guard Drain Rating Up',
        desc : "Increases your drain rating when you guard an enemy's attack."
      },
      
      B3 : {
        name : 'Firm Stand',
        desc : 'Receiving fatal damage when your HP is over a certain amount will leave you with 1 HP.',
        usage_req : 'Atlas Blood Code'
      },
      
      B4 : {
        name : 'Blood Grab',
        desc : "Dodging enemy attacks drains their ichor according to your weapon's drain rating.",
        usage_req : 'Artemis Blood Code'
      },
      
      B5 : {
        name : 'Evasive Snare',
        desc : 'Doding enemy attacks generates projectiles at the cost of ichor that attack the enemy.',
        usage_req : 'Hephaestus Blood Code'
      },
      
      B6 : {
        name : 'Venom Resistance',
        desc : 'Increases venom resistance.'
      },
      
      B7 : {
        name : 'Leak Resistance',
        desc : 'Increases leak resistance.'
      },
      
      B8 : {
        name : 'Stun Resistance',
        desc : 'Increases stun resistance.'
      },
      
      B9 : {
        name : 'Inhibit Resistance',
        desc : 'Increases inhibit resistance.'
      },
      
      B10 : {
        name : 'Slow Resistance',
        desc : 'Increases slow resistance.'
      },


      // # STAT BOOSTS #
      C0 : {
        name : 'Strength Up',
        desc : 'Increases strength.'
      },
      
      C1 : {
        name : 'Dexterity Up',
        desc : 'Increase dexterity.'
      },
      
      C2 : {
        name : 'Mind Up',
        desc : 'Increases mind.'
      },
      
      C3 : {
        name : 'Willpower Up',
        desc : 'Increases willpower.'
      },
      
      C4 : {
        name : 'Vitality Up',
        desc : 'Increases vitality.'
      },
      
      C5 : {
        name : 'Perseverance Up',
        desc : 'Increases fortitude.'
      },
      
      C6 : {
        name : 'Strength/Dexterity Up',
        desc : 'Increases strength and dexterity.'
      },
      
      C7 : {
        name : 'Strength/Willpower Up',
        desc : 'Increases strength and willpower.'
      },

      C8 : {
        name : 'Strength/Vitality Up',
        desc : 'Increases strength and vitality.'
      },
      
      C9 : {
        name : 'Dexterity/Willpower Up',
        desc : 'Increases dexterity and willpower.'
      },
      
      C10 : {
        name : 'Dexterity/Fortitude Up',
        desc : 'Increases dexterity and fortitude.'
      },
      
      C11 : {
        name : 'Mind/Willpower Up',
        desc : 'Increases mind and willpower.'
      },
      
      C12 : {
        name : 'Mind/Vitality Up',
        desc : 'Increases mind and vitality.'
      },
      
      C13 : {
        name : 'Mind/Fortitude Up',
        desc : 'Increases mind and fortitude.'
      },


      // # FOCUS BOOSTS #
      D0 : {
        name : 'Dark Impulse',
        desc : 'Increases the effects of dark Gifts while you are focused.'
      },

      D1 : {
        name : 'Light Impulse',
        desc : 'Increases the effects of light Gifts while you are focused.'
      },
      
      D2 : {
        name : 'Guard Stability',
        desc : 'Reduces stamina consumption from guarding while you are focused.'
      },
      
      D3 : {
        name : 'Focused Guard',
        desc : 'Increases weapon defense against physical attacks while you are focused.'
      },
      
      D4 : {
        name : 'Focused Stamina Usage',
        desc : 'Reduces stamina spent while you are focused.'
      },
      
      D5 : {
        name : 'Maintained Focus',
        desc : 'Reduces the rate at which the focus guage is consumed over time while you are focused.'
      },
      
      D6 : {
        name : 'Focused Carnage',
        desc : 'Reduces the rate at which the focus guage is consumed by attacks while you are focused.'
      },
      
      D7 : {
        name : 'Ichor Strikes',
        desc : 'Reduces the ichor cost of weapon attacks while you are focused.'
      },
      
      D8 : {
        name : 'Ichor Reduction',
        desc : 'Reduces ichor consumption while you are focused.',
        usage_req : "Queen's Throat Blood Code"
      },
      
      D9 : {
        name : 'Drain Boost',
        desc : 'Increases all drain ratings while you are focused.'
      },
      
      D10 : {
        name : 'Focused Gift Speed',
        desc : 'Increases the speed of your Gifts while you are focused.'
      },
      
      D11 : {
        name : 'Blood Buff',
        desc : 'Adds blood damage to your current weapon while you are focused.'
      },
      
      D12 : {
        name : 'Fire Buff',
        desc : 'Adds fire damage to your current weapon while you are focused.'
      },
      
      D13 : {
        name : 'Ice Buff',
        desc : 'Adds ice damage to your current weapon while you are focused.'
      },
      
      D14 : {
        name : 'Lightning Buff',
        desc : 'Adds lightning damage to your current weapon while you are focused.'
      },
      
      D15 : {
        name : 'Venom Buff',
        desc : 'Applies the venom effect to your current weapon while you are focused.'
      },
      
      D16 : {
        name : 'Stun Buff',
        desc : 'Applies the stun effect to your current weapon while you are focused.'
      },
      
      D17 : {
        name : "Goddess's Smile",
        desc : 'Restores HP when you enter a focused state.'
      },


      // # WEAPON MASTERY #
      E0 : {
        name : 'One-handed Sword Mastery',
        desc : 'Increases attack power when equipped with a one-handed sword.'
      },

      E1 : {
        name : 'Two-handed Sword Mastery',
        desc : 'Increases attack power when equipped with a two-handed sword.'
      },
      
      E2 : {
        name : 'Halberd Mastery',
        desc : 'Increases attack power when equipped with a halberd.'
      },
      
      E3 : {
        name : 'Hammer Mastery',
        desc : 'Increases attack power when equipped with a hammer.'
      },
      
      E4 : {
        name : 'Bayonet Mastery',
        desc : 'Increases attack power when equipped with a bayonet.'
      },


      // # MISC #
      F0 : {
        name : 'Regeneration Shift',
        desc : 'Reduces the number of times regeneration can be used, but increases the amount healed.'
      },

      F1 : {
        name : 'Improved Regeneration',
        desc : 'Increases the amount of HP restored by regeneration.'
      },

      F2 : {
        name : 'Augmented Regeneration',
        desc : 'Increases the number of times regeneration can be used.'
      },

      F3 : {
        name : 'Torchbearer',
        desc : 'Restores your regeneration power when your partner reaches zero HP and disperses.',
        usage_req : 'Astrea Blood Code'
      },
      
      F4 : {
        name : 'Life Steal',
        desc : 'Restores HP upon defeating enemies.'
      },
      
      F5 : {
        name : 'Regenerative Drain',
        desc : 'Causes drain attacks to restore HP.'
      },
      
      F6 : {
        name : 'Eternal Blade Dance',
        desc : 'An enhanced version of Blade Dance. Increases power when you dodge enemy attacks.',
        usage_req : 'Prometheus Blood Code'
      },
      
      F7 : {
        name : 'Blood-draining Venom',
        desc : 'Receive ichor when enemies within a certain radius take damage from venom.',
        usage_req : 'Darkseeker Blood Code'
      },
      
      F8 : {
        name : "Revenant's Hunger",
        desc : 'Increases the amount of haze gained from defeating enemies.'
      },
      
      F9 : {
        name : "Revenant's Greed",
        desc : 'Increases the chances of items dropping from defeated enemies.'
      },
      
      F10 : {
        name : "Pioneer's Guidance",
        desc : 'Makes Gifts easier to master.'
      },
      
      F11 : {
        name : 'Fall Damage Reduction',
        desc : 'Reduces damage taken from falling.'
      },
      
      F12 : {
        name : 'Deliverance',
        desc : 'When an ally takes fatal damage, their HP is reduced to 1 and you take the remaining damage.',
        usage_req : 'Ishtar Bloode Code'
      },
      
      F13 : {
        name : 'Tirelessness',
        desc : 'Increases your stamina regeneration rate.'
      },
      
      F14 : {
        name : 'Bolster',
        desc : 'Increases regeneration upon collecting lost haze after dispersal.'
      },
      
      F15 : {
        name : 'Revenant Dagger',
        desc : 'Throws a knife that grants ichor when it strikes a foe.'
      },
      
      F16 : {
        name : 'Complete Attention',
        desc : 'Hitting with a charged drain will grant focus.'
      }
    },


    // # 3. ACTIVE SKILLS #
    active : {
      // # SPELLS #
      A0 : {
        name : 'Sonic Arrow',
        desc : 'Fires a projectile created from ichor.'
      },

      A1 : {
        name : 'Blood Shot',
        desc : 'Fires a large projectile created from the power of blood.'
      },
      
      A2 : {
        name : 'Sanguine Roar',
        desc : 'Generates a projectile of foul blood that flies at the target.'
      },
      
      A3 : {
        name : 'Blazing Roar',
        desc : 'Shoots an intense flame at the target.'
      },
      
      A4 : {
        name : 'Freezing Roar',
        desc : 'Fires a projectile of freezing ice at the target.'
      },
      
      A5 : {
        name : 'Plasma Roar',
        desc : 'Generates a surge of electricity that flies at the target.'
      },
      
      A6 : {
        name : 'Blood Spike',
        desc : 'Fires a projectile of piercing ichor at your target.'
      },
      
      A7 : {
        name : 'Flame Spike',
        desc : 'Fires a projectile of burning flame at your target.'
      },
      
      A8 : {
        name : 'Frost Spike',
        desc : 'Fires a projectile of freezing ice at the target.'
      },
      
      A9 : {
        name : 'Lightning Spike',
        desc : 'Fires a projectile of crackling electricity at your target.'
      },
      
      A10 : {
        name : 'Blood Barrage',
        desc : 'Shoots a series of bloody projectiles that bombard foes in a wide area.'
      },
      
      A11 : {
        name : 'Flame Barrage',
        desc : 'Shoots a series of fiery projectiles that bombard foes in a wide area.'
      },
      
      A12 : {
        name : 'Ice Barrage',
        desc : 'Shoots a series of icy projectiles that bombard foes in a wide area.'
      },
      
      A13 : {
        name : 'Lightning Barrage',
        desc : 'Shoots a series of electric projectiles that bombard foes in a wide area.'
      },
      
      A14 : {
        name : 'Vodnik Mass',
        desc : 'Unleashes concentrated blood to destory foes.'
      },
      
      A15 : {
        name : 'Walpurgis Fire',
        desc : 'Uses fine control over blood flow to unleash a powerful blaze.'
      },
      
      A16 : {
        name : "Baba Yaga's Gaze",
        desc : 'Uses fine control over blood flow to unleash a powerful wave of cold.'
      },
      
      A17 : {
        name : 'Rage of Perkunas',
        desc : 'Uses fine control over blood flow to unleash a powerful shock.'
      },
      
      A18 : {
        name : 'Dusk Edge',
        desc : 'Uses ichor to create a blade of blood and swing it in an arc that sweeps through foes.'
      },
      
      A19 : {
        name : 'Crimson Moon',
        desc : 'Uses ichor to create a blazing blade and swing it in an arc that sweeps through foes.'
      },
      
      A20 : {
        name : 'Aurora Flash',
        desc : 'Uses ichor to create a freezing blade and swing it in an arc that sweeps through foes in front of you.'
      },
      
      A21 : {
        name : "Jupiter's Blade",
        desc : 'Uses ichor to create a blade of lightning and swing it in an arc through foes.'
      },
      
      A22 : {
        name : 'Execution',
        desc : 'Creates a giant sword that falls like a guillotine upon the enemy.'
      },
      
      A23 : {
        name : 'Fire Storm',
        desc : 'Shoots a series of flaming projectiles that stagger the enemy.'
      },
      
      A24 : {
        name : 'Blast Bolt',
        desc : 'Creates and fires a string of projectiles infused with electricity at your target.'
      },
      
      A25 : {
        name : 'Guard of Honor',
        desc : 'Generates a number of ice pillars that unrelentingly bombard the target.'
      },
      
      A26 : {
        name : 'Dancing Blaze',
        desc : 'Fires a ricocheting bullet.'
      },
      
      A27 : {
        name : 'Draconic Stake',
        desc : 'Transforms your blood into a giant stake that pierces the target.'
      },
      
      A28 : {
        name : "Indra's Coil",
        desc : "Fires three powerful blots of lightning at your target's feet."
      },
      
      A29 : {
        name : 'Fourfold Verdict',
        desc : 'Fires an unrelenting barrage of lightning bullets at the target.'
      },
      
      A30 : {
        name : 'Elder Contract',
        desc : 'Causes a pillar of blood to erupt beneath your target.'
      },
      
      A31 : {
        name : 'Ichorous Ice',
        desc : 'Condenses ichor and converts it into powerful ice shards that shoot at the enemy.'
      },
      
      A32 : {
        name : 'Twilight',
        desc : 'Fires a wide laser that pierces through anything in front of you.',
        usage_req : "Queen's Ribcage Blood Code"
      },
      
      A33 : {
        name : 'Fire Lily',
        desc : 'Shoots out a sift blade. A short time after sticking into something, it detonates.'
      },
      
      A34 : {
        name : 'Sand Edge',
        desc : 'Creates a blade of highly pressurized sand from the ground that knocks away foes.'
      },
      
      A35 : {
        name : 'Volatile Storm',
        desc : 'Creates blades of sand that converge on the target and explode.'
      },
      
      A36 : {
        name : 'Arm of Set',
        desc : "Creates an arm of sand at the target's feet that mercilessly crushes the enemy."
      },
      
      A37 : {
        name : 'Sands of Depravity',
        desc : 'Creates a giant sandstorm around your target.'
      },
      
      A38 : {
        name : 'Chaotic Ash',
        desc : 'Fires a draining projectile that robs the target of ichor.'
      },
      
      A39 : {
        name : 'Purging Thorn',
        desc : 'Creates a giant thorn in the air that pierces the target.'
      },
      
      A40 : {
        name : 'Argent Wolf Cross',
        desc : 'Fires a cross-shaped blade of blood at the target.'
      },
      
      A41 : {
        name : 'Shadow Leap',
        desc : 'Releases a shockwave around you, then instantly transports you backward.',
        usage_req : 'Isis Blood Code'
      },
      
      A42 : {
        name : 'Bloody Impact',
        desc : 'Blasts away foes in an area with a shockwave caused by the release of condensed ichor.'
      },
      
      A43 : {
        name : 'Cloak of Winter',
        desc : 'Freezes everything in the vicinity with an arctic blizzard.'
      },
      
      A44 : {
        name : 'Peony Flash',
        desc : 'Sets off a giant explosion that engulfs enemies in the area.',
        usage_req : 'Scathach Blood Code'
      },
      
      A45 : {
        name : "Will-o'-the-Wisp",
        desc : 'Fires a projectile of ichor that arcs to cover your back.'
      },
      
      A46 : {
        name : 'Ember Reversal',
        desc : "Fires a flaming projectile that arcs to cover the user's rear."
      },
      
      A47 : {
        name : 'Desperate Burst',
        desc : 'Deals massive damage to the area around you, but leaves you on the brink of death.'
      },
      
      A48 : {
        name : 'Rose Flame',
        desc : 'Scatters fire bombs that explode after a short time, damaging anything in the area.'
      },


      // # DEBUFFS #
      B0 : {
        name : 'Venomous Shot',
        desc : 'Fires a projectile at your target that inflicts venom.'
      },

      B1 : {
        name : 'Stun Shot',
        desc : 'Fires a projectile at your target that inflicts stun.'
      },
      
      B2 : {
        name : 'Slowing Shot',
        desc : 'Fires a projectile at your target that inflicts slow.'
      },
      
      B3 : {
        name : 'Venomous Web',
        desc : 'Throws down treated ichor to create a trap that poisons foes who step into it.'
      },
      
      B4 : {
        name : 'Stun Web',
        desc : 'Throws down treated ichor to create a trap that stuns foes who step into it.'
      },
      
      B5 : {
        name : 'Slow Web',
        desc : 'Throws down treated ichor to create a trap that slows foes who step into it.'
      },
      
      B6 : {
        name : 'Shock Web',
        desc : 'Manipulates ichor to create a low-power trap at your feet that staggers any assailants.'
      },
      
      B7 : {
        name : 'Flames of Rage',
        desc : 'Manipulates ichor to create a trap at your feet that immolates assailants.'
      },
      
      B8 : {
        name : 'Venom Trap',
        desc : 'Scatters ichor in the area, creating a venom trap that eats at assailants.'
      },
      
      B9 : {
        name : 'Stun Trap',
        desc : 'Scatters ichor in the area, creating a trap that stuns assailants.'
      },
      
      B10 : {
        name : 'Slow Trap',
        desc : 'Scatters ichor in the area, creating a trap that slows assailants.'
      },
      
      B11 : {
        name : 'Frenzied Fire',
        desc : "Fires a projectile that decreases the enemy's focus gauage."
      },


      // # BUFFS #
      C0 : {
        name : 'Blood Weapon',
        desc : "Temporarily adds blood damage to your and your partner's current weapons."
      },

      C1 : {
        name : 'Flame Weapon',
        desc : "Temporarily adds fire damage to your and your partner's current weapons."
      },
      
      C2 : {
        name : 'Frost Weapon',
        desc : "Temporarily adds ice damage to your and your partner's current weapons."
      },
      
      C3 : {
        name : 'Lightning Weapon',
        desc : "Temporarily adds lightning damage to your and your partner's current weapons."
      },
      
      C4 : {
        name : 'Venom Mark',
        desc : 'Temporarily applies the venom effect to your current weapon.'
      },
      
      C5 : {
        name : 'Numbing Mark',
        desc : 'Temporarily applies the stun effect to your current weapon.'
      },
      
      C6 : {
        name : 'Warding Mark',
        desc : 'Temporarily applies the inhibit effect to your current weapon.'
      },
      
      C7 : {
        name : 'Binding Mark',
        desc : 'Temporarily applies the slow effect to your current weapon.'
      },
      
      C8 : {
        name : 'Adrenaline',
        desc : 'Temporarily boosts attack power.'
      },
      
      C9 : {
        name : 'Bridge to Glory',
        desc : 'Temporarily boosts attack power.'
      },
      
      C10 : {
        name : 'Overdrive',
        desc : "Temporarily increases your and your partner's attack. The effect ends when you take damage."
      },
      
      C11 : {
        name : 'Ranged Impact',
        desc : 'Temporarily increases the attack power of shots fired from weapons.'
      },
      
      C12 : {
        name : 'Blow of Madness',
        desc : 'Increases the power of the next attack.'
      },
      
      C13 : {
        name : 'Flashing Fang',
        desc : 'Increases the power of the next attack.'
      },
      
      C14 : {
        name : 'Merciless Reaper',
        desc : "Ignores some of the enemy's physical defense and weapon defense for your next attack."
      },
      
      C15 : {
        name : 'Dark Shout',
        desc : 'Greatly increases the efficiency of dark Gifts for the next attack.'
      },
      
      C16 : {
        name : 'Blade Dance',
        desc : 'Temporarily increases attack power each time you damage an enemy with your weapon.',
        usage_req : 'Prometheus Blood Code'
      },
      
      C17 : {
        name : 'Sacrificial Edge',
        desc : 'Greatly increases attack power, but drains HP over time.',
        usage_req : 'Heimdall Blood Code'
      },
      
      C18 : {
        name : 'Somatic Zeal',
        desc : 'Temporarily increases strength and dexterity.'
      },
      
      C19 : {
        name : 'Cognitive Zeal',
        desc : 'Temporarily increases mind and willpower.'
      },
      
      C20 : {
        name : 'Precision',
        desc : 'Temporarily makes it easier to stagger enemies with your weapon.'
      },
      
      C21 : {
        name : 'Hunting Feast',
        desc : 'Temporarily increases the drain rating of weapon attacks.'
      },
      
      C22 : {
        name : 'Bloodsucking Blades',
        desc : 'Temporarily increases the drain rating of weapon attacks for you and your partner.'
      },
      
      C23 : {
        name : 'Gift Prowess',
        desc : 'Temporarily increases Gift speed for you and your partner.'
      },
      
      C24 : {
        name : 'Gift Extension',
        desc : 'Temporarily lengthens the effects off Gifts used by you and your partner.'
      },
      
      C25 : {
        name : 'Hasten',
        desc : 'Uses the power of ichor to temporarily boost reflexes, enhancing your dodges.'
      },
      
      C26 : {
        name : 'Concentration',
        desc : 'Temporarily reduces stamina consumption. The effect ends when you take damage.'
      },
      
      C27 : {
        name : 'Red Shoes',
        desc : 'Enables you to use HP to perform actions when you have run out of stamina.',
        usage_req : 'Fionn Blood Code'
      },
      
      C28 : {
        name : 'Valiant Heart',
        desc : 'Enhances kinetic vision and reflexes, reducing the stamina cost of dodging.'
      },
      
      C29 : {
        name : 'Morale Boost',
        desc : 'Increases the maximum stamina of you and your partner and fully restores both your stamina.'
      },
      
      C30 : {
        name : 'Time Crunch',
        desc : 'Uses ichor to temporarily speed up charged actions.'
      },
      
      C31 : {
        name : 'Supernatural Blood',
        desc : 'Enables you to sacrifice HP to use Gifts when you have run out of ichor.',
        usage_req : 'Harmonia Blood Code'
      },
      
      C32 : {
        name : 'Impact Wave',
        desc : 'Temporarily adds a shockwave effect to strike attacks that deals additional damage.'
      },

      C33 : {
        name : 'Final Journey',
        desc : 'Immediately restores all HP and increases all abilities, but kills you after some time.',
        usage_req : 'Queenslayer Blood Code'
      },


      // # DEFENSE BUFFS #
      D0 : {
        name : 'Iron Will',
        desc : 'Temporarily reduces damage taken by weaving a barrier into your blood.'
      },

      D1 : {
        name : 'Foulblood Barrier',
        desc : 'Creates a single-use barrier around you and your partner that greatly reduces damage.'
      },
      
      D2 : {
        name : 'Ablative Blood',
        desc : 'Temporarily causes damage taken to be greatly reduced at the cost of ichor.',
        usage_req : 'Eos Blood Code'
      },
      
      D3 : {
        name : 'Juggernaut',
        desc : 'Increases balance and resistance to attacks, but lowers mobility and elemental resistance.',
        usage_req : "Queen's Breath Blood Code"
      },
      
      D4 : {
        name : 'Steady Bulwark',
        desc : 'Temporarily increases weapon defense against physical attacks.'
      },
      
      D5 : {
        name : 'Guard Reversal',
        desc : 'Temporarily enables you to deflect attacks and stagger opponents after guarding.'
      },
      
      D6 : {
        name : 'Crushing Might',
        desc : "Temporarily makes it easier to break an opponent's guard."
      },
      
      D7 : {
        name : 'Guard Stability',
        desc : 'Temporarily reduces the stamina cost of guarding.'
      },
      
      D8 : {
        name : 'Prismatic Veil',
        desc : 'Temporarily increases weapon defense against elemental attacks.'
      },
      
      D9 : {
        name : 'Blood Guard',
        desc : 'Temporarily creates a barrier around you and your partner that boosts blood resistance.'
      },
      
      D10 : {
        name : 'Flame Protection',
        desc : 'Temporarily creates a barrier around you and your partner that boosts fire resistance.'
      },
      
      D11 : {
        name : 'Ice Armor',
        desc : 'Temporarily creates a barrier around you and your partner that boosts ice resistance.'
      },
      
      D12 : {
        name : "Raijin's Veil",
        desc : 'Temporarily creates a barrier around you and your partner that boosts lightning resistance.'
      },
      
      D13 : {
        name : 'Elemental Wall',
        desc : 'Temporarily increases resistance to all elements for you and your partner.'
      },
      
      D14 : {
        name : 'Royal Heart',
        desc : 'Temporarily increases resistance to being staggered.'
      },
      
      D15 : {
        name : 'Dogged Fighter',
        desc : 'Temporarily increases stagger resistance versus enemy attacks.'
      },
      
      D16 : {
        name : 'Perfect Balance',
        desc : 'Greatly increases resistance to staggering for one attack.'
      },
      
      D17 : {
        name : 'Antibody Generation',
        desc : 'Temporarily icreases resistance to all debuffs.'
      },
      
      D18 : {
        name : 'Countermeasure',
        desc : 'For a limited time, dodging enemy attacks generates projectiles that attack the enemy.'
      },
      
      D19 : {
        name : 'Sly Vengeance',
        desc : 'For a limited time, taking damage generates fiery projectiles that attack the enemy.',
        usage_req : "Queen's Claw Blood Code"
      },
      
      D20 : {
        name : 'Feral Tenacity',
        desc : 'Receiving fatal damage when your HP is over a certain amount will leave you with 1 HP.'
      },


      // # COMMUNAL GIFTS #
      E0 : {
        name : 'Reckless Abandon',
        desc : 'A Communal Gift with Louis. Increases attack and alters your evasive movements, at the cost of damage reduction.',
        usage_req : 'Currently partnered with Louis'
      },

      E1 : {
        name : 'Lupinus Vita',
        desc : 'A Communal Gift with Yakumo. Reduces guard STA usage and dodge speed, but increases ATK.',
        usage_req : 'Currently partnered with Yakumo'
      },
      
      E2 : {
        name : 'Conviction Spike',
        desc : 'A Communal Gift with Io. Improves stagger resistance, but reduces drain effectiveness.',
        usage_req : 'Currently partnered with Io'
      },
      
      E3 : {
        name : 'Blood Awakening',
        desc : 'A Communal Gift with Mia. Reduces ichor cost and enhances Gifts, but lowers attack power.',
        usage_req : 'Currently partnered with Mia'
      },
      
      E4 : {
        name : 'Fatal Surge',
        desc : 'A Communal Gift with Jack. Increases ATK and reduces STA usage. Sacrifices regen.',
        usage_req : 'Currently partnered with Jack'
      },
      
      E5 : {
        name : 'Ephemeral Refrain',
        desc : 'A Communal Gift with Eva. Enhances drain and Gift efficacy but increases ichor usage.',
        usage_req : 'Currently partnered with Eva'
      },


      // # MISC #
      F0 : {
        name : 'Restorative Offering',
        desc : 'Spends your own HP to restore the HP of companions.',
        usage_req : 'HP is at 2 or higher'
      },

      F1 : {
        name : 'Sympathetic Boon',
        desc : "Consumes a large amount of your own HP to restore a large amount of your partner's HP.",
        usage_req : 'HP is at 2 or higher'
      },
      
      F2 : {
        name : 'Auto Heal',
        desc : 'Consume HP in advance to automatically use Restorative Offering when your partner takes critical damage.',
        usage_req : 'Demeter Blood Code<br>HP is at 2 or higher'
      },
      
      F3 : {
        name : 'Guardian Aid',
        desc : 'Sacrifices HP to heal your partner and temporarily boost defense.',
        usage_req : 'Astrea Blood Code<br>HP is at 2 or higher'
      },
      
      F4 : {
        name : 'Cleansing Light',
        desc : 'For a limited time, a portion of the damage you take will slowly heal automatically.'
      },
      
      F5 : {
        name : 'Regenerator',
        desc : 'Increases the amount of HP healed by regeneration for both you and your partner.'
      },
      
      F6 : {
        name : 'Venom Removal',
        desc : 'Cures you and your partner of venom. Use to block the effect before being afflicted.'
      },
      
      F7 : {
        name : 'Stun Removal',
        desc : 'Cures you and your partner of stun. Best used to block the effect before being afflicted.'
      },
      
      F8 : {
        name : 'Inhibit Removal',
        desc : 'Cures you and your partner of inhibit. Use to block the effect before being afflicted.'
      },
      
      F9 : {
        name : 'Slow Removal',
        desc : 'Cures you and your partner of slow. Can block the effect if used before being afflicted.'
      },
      
      F10 : {
        name : 'Leak Removal',
        desc : 'Cures you and your partner of leak. Can block the effect if used before being afflicted.'
      },
      
      F11 : {
        name : "Panacea's Essence",
        desc : 'Cures you and your partner of all debuffs, or blocks them if used before being afflicted.'
      },
      
      F12 : {
        name : 'Blood Sacrifice',
        desc : 'Spends your own HP to gain ichor.'
      },
      
      F13 : {
        name : 'Disremember',
        desc : 'All Gifts that require time to use may be used instantaneously.'
      },
      
      F14 : {
        name : 'Floating Light',
        desc : 'Creates a ball of light at your feet.'
      },
      
      F15 : {
        name : 'Vivification',
        desc : 'Returns you to the last mistle touched without losing haze.'
      },
      
      F16 : {
        name : 'Nightstalker',
        desc : 'Reduces the amount of sound you create, making it more difficult to be detected.'
      },
      
      F17 : {
        name : 'Night Fog Veil',
        desc : 'Wraps your body in a cloak of fog-like blood, making it harder to be detected.'
      },
      
      F18 : {
        name : 'Spoils Spotter',
        desc : 'Learn whether or not there are uncollected items within a certain range.'
      },
      
      F19 : {
        name : 'Active IFF',
        desc : 'Enemies within a certain range will appear on your radar.'
      },
      
      F20 : {
        name : 'Treasure Tracker',
        desc : 'Uncollected items within a certain range will appear on your radar.'
      },
      
      F21 : {
        name : 'Prize Perception',
        desc : 'Learn whether or not there are uncollected items on the current map.'
      },
      
      F22 : {
        name : 'Severing Abyss',
        desc : 'Leap and slam down with all your might. An offensive skill performed with One-handed sword/Halberd/Bayonet.'
      },
      
      F23 : {
        name : 'Phantom Assault',
        desc : 'Vanish like mist, then do a jump slash. An offensive skill performed with One-handed sword/Halberd/Bayonet.'
      },
      
      F24 : {
        name : 'Circulating Pulse',
        desc : 'Unleash a barrage of strikes. An offensive skill performed with One-handed sword/Halberd/Bayonet.'
      },
      
      F25 : {
        name : 'Legion Punisher',
        desc : 'Throw your weapon and make it spin. An offensive skill performed with Two-handed sword/Hammer.'
      },
      
      F26 : {
        name : 'Fusillade Rondo',
        desc : 'Fire a barrage of homing bullets. An offensive skill performed with Bayonet.'
      },
      
      F27 : {
        name : 'Triple Annihilator',
        desc : 'Unleash a combo on a nearby target. An offensive skill performed with Two-handed sword/Hammer.'
      },
      
      F28 : {
        name : 'Dragon Lunge',
        desc : 'Dash forward and make a powerful overhead attack. An offensive skill performed with Two-handed sword/Hammer.'
      },
      
      F29 : {
        name : 'Chariot Rush',
        desc : 'Dash forward as mist and unleash a combo. An offensive skill performed with Halberd.'
      },
      
      F30 : {
        name : 'Shifting Hollow',
        desc : 'Dash forward in mist form.'
      },
      
      F31 : {
        name : 'Grave Knocker',
        desc : 'Slam your foot into the ground, causing a shockwave.'
      },
      
      F32 : {
        name : 'Swallow Cutter',
        desc : 'Unleash an extremely fast attack in a blink of an eye. An offensive skill performed with Two-handed sword/Hammer.'
      },
      
      F33 : {
        name : 'Vanishing Hollow',
        desc : 'Dodge attacks by transforming into mist.'
      },
      
      F34 : {
        name : 'Tormenting Blast',
        desc : 'Leap forward and strike twice. An offensive skill performed with Two-handed sword/Hammer.'
      },
      
      F35 : {
        name : 'Shadow Assault',
        desc : 'Perform a fast, short-range charge. An offensive skill performed with One-handed sword/Halberd/Bayonet.'
      }
    },
    
    
    // # 4. WEAPONS #
    weapon : {
      // # ONE-HANDED SWORDS #
      A0 : {
        name : 'Queenslayer Blade',
        desc : 'A mass-produced, single-edged sword supplied to soldiers in Operation Queenslayer.'
      },
      
      A1 : {
        name : 'Pipe of Thralldom',
        desc : 'A simple weapon that consists of a metal pipe with a drain function.'
      },
      
      A2 : {
        name : 'Broadsword',
        desc : 'A wide, double-edged sword mass-produced by the provisional government.'
      },
      
      A3 : {
        name : 'Hanemukuro',
        desc : 'A curved, single-edged blade patterned after a katana. Create by a revenant named Mukuro.'
      },
      
      A4 : {
        name : 'Enduring Crimson',
        desc : "Louis's trusty sidearm."
      },
      
      A5 : {
        name : 'Machete',
        desc : 'A large cleaver seemingly made of a single chunk of steel. Requires great strength.'
      },
      
      A6 : {
        name : 'Argent Wolf Blade',
        desc : 'A silver one-handed sword used by the Security Enforcement Unit Cerberus.'
      },
      
      A7 : {
        name : 'Blazing Claw',
        desc : 'A long blade used by the Successor of the Claw.'
      },
      
      A8 : {
        name : 'Iceblood',
        desc : "The thrusting weapon used by the Blade Bearer, one of Mido's puppets."
      },
      
      A9 : {
        name : 'Sunset Sword',
        desc : 'A warped Queenslayer Blade that has been corroded by miasma.'
      },
      
      A10 : {
        name : 'Black Saber',
        desc : 'A jet-black sword with a single-edge.'
      },
      
      A11 : {
        name : 'Executioner',
        desc : 'The favored sword of Jack, the Crypt Watcher.'
      },
      
      A12 : {
        name : 'Lost Broadsword',
        desc : 'A one-handed sword used by revenants who have fallen and joined the Lost.'
      },
      
      A13 : {
        name : 'Crimson Longsword',
        desc : 'A one-handed sword patterned after a long blade wielded by a devourer of gods with steely self-control.'
      },
      
      // # TWO-HANDED SWORDS #
      B0 : {
        name : 'Queenslayer Greatsword',
        desc : 'A mass-produced two-handed sword provided to revenants in Operation Queenslayer.'
      },
      
      B1 : {
        name : 'Zweihander',
        desc : 'A long, two-handed blade mass-produced by the provisional government.'
      },
      
      B2 : {
        name : 'Nagimukuro',
        desc : 'A large blade patterned after a Japanese great sword. Created by a revenant named Mukuro.'
      },
      
      B3 : {
        name : 'Oni Bane',
        desc : 'The sword that has seen Yakumo through countless battlefields.'
      },
      
      B4 : {
        name : 'Warped Blade',
        desc : 'A two-handed sword with a blade like an extended tooth.'
      },
      
      B5 : {
        name : 'Black Great Sword',
        desc : 'A two-handed sword with a black, single-edged, chain blade.'
      },
      
      B6 : {
        name : "Argent Wolf King's Blade",
        desc : 'A golden two-handed sword wielded by Silva after he turned to frenzy.'
      },
      
      B7 : {
        name : 'Judgement Edge',
        desc : 'A two-handed sword made by the infinitely inquisitive and depraved revenant Mido.'
      },
      
      B8 : {
        name : 'Sunset Great Sword',
        desc : 'A warped Queenslayer Greatsword that has been corroded by miasma.'
      },
      
      B9 : {
        name : 'Lost Zweihander',
        desc : 'A two-handed sword used by revenants who have fallen and joined the Lost.'
      },
      
      B10 : {
        name : 'Argent Wolf Brand',
        desc : 'A silver two-handed sword used by the Security Enforcement Unit Cerberus.'
      },
      
      B11 : {
        name : 'Blanched Greatsword',
        desc : 'A two-handed sword patterned after a giant saw wielded by a devourer of gods.'
      },
      
      
      // # HALBERDS #
      C0 : {
        name : 'Queenslayer Halberd',
        desc : 'A mass-produced pole-arm provided to revenants in Operation Queenslayer.'
      },
      
      C1 : {
        name : 'Bardiche',
        desc : 'A long polearm mass-produced by the provisional government.'
      },
      
      C2 : {
        name : 'Impaler',
        desc : 'A thin spear with a sharp head.'
      },
      
      C3 : {
        name : 'Garnet Splitter',
        desc : 'A dignified red and silver polearm named for a red jewel.'
      },
      
      C4 : {
        name : 'Dammerung',
        desc : 'The polearm used by the innocent Io.'
      },
      
      C5 : {
        name : 'Black Halberd',
        desc : 'A polearm with a jet-black blade.'
      },
      
      C6 : {
        name : "Assassin's Sickle",
        desc : 'The tool of an executioner that dwelled in the Howling Pit.'
      },
      
      C7 : {
        name : 'Sunset Halberd',
        desc : 'A warped Queenslayer Halberd that has been corroded by miasma.'
      },
      
      C8 : {
        name : 'Lost Bardiche',
        desc : 'A polearm used by revenants who have fallen and joined the Lost.'
      },
      
      C9 : {
        name : 'Obliterator Axe',
        desc : 'A destructive weapon once wielded by a particularly strong member of Cerberus.'
      },
      
      C10 : {
        name : 'Argent Wolf Poleaxe',
        desc : 'A silver polearm used by the security Enforcement Unit Cerberus.'
      },
      
      C11 : {
        name : 'Cerulean Spear',
        desc : 'A halberd patterned after a spear wielded by a devourer of gods who held a deep aspiration.'
      },
      
      
      // # HAMMERS #
      D0 : {
        name : 'Queenslayer Hammer',
        desc : 'A mass-produced sledgehammer provided to revenants in Operation Queenslayer.'
      },
      
      D1 : {
        name : 'Hammer of Thralldom',
        desc : 'It is just a haft with a heavy concrete block at the top. Being given minimum treatment to make it a weapon for revenants.'
      },
      
      D2 : {
        name : 'Juggernaut Sledgehammer',
        desc : 'A great hammer used by Oliver, who succumbed to thirst and joined the Lost.'
      },
      
      D3 : {
        name : 'Heavy Axe',
        desc : 'A long polearm mass-produced by the provisional government.'
      },
      
      D4 : {
        name : 'Impulse Anchor',
        desc : 'A sturdily built mechanical hammer. Generates a shockwave when struck on the ground.'
      },
      
      D5 : {
        name : 'Huge Hammer',
        desc : 'A massive hammer used by the Lost who have been enlarged by exposure to miasma.'
      },
      
      D6 : {
        name : 'Argent Wolf Warhammer',
        desc : 'A silver warhammer used by the Security Enforcement Unit Cerberus.'
      },
      
      D7 : {
        name : "Tyrant's Labrys",
        desc : 'A double-bit axe that glitters a dull gold.'
      },
      
      D8 : {
        name : 'Sunset Hammer',
        desc : 'A warped Queenslayer Hammer that has been corroded by miasma.'
      },
      
      D9 : {
        name : 'Burned Warhammer',
        desc : 'A warhammer warped by sustained exposure to intense flames.'
      },
      
      D10 : {
        name : 'Lost Heavy Axe',
        desc : 'An axe used by revenants who have fallen and joined the Lost.'
      },
      
      
      // # BAYONETS #
      E0 : {
        name : 'Queenslayer Bayonet',
        desc : 'A mass-produced bayonet provided to revenants in Operation Queenslayer.'
      },
      
      E1 : {
        name : 'Brodiaea',
        desc : 'The bayonet Mia always kept close at hand.'
      },
      
      E2 : {
        name : 'Riot Breaker',
        desc : 'A bayonet built from salvaged weapon parts and scrap materials.'
      },
      
      E3 : {
        name : 'Bayonet',
        desc : 'A saw-bladed bayonet mass-produced by the provisional government.'
      },
      
      E4 : {
        name : 'Rubellite Piercer',
        desc : 'A dignified red and silver bayonet named for a red jewel.'
      },
      
      E5 : {
        name : 'Argent Wolf Bayonet',
        desc : 'A silver bayonet used by the Security Enforcement Unit Cerberus.'
      },
      
      E6 : {
        name : 'Burning Disaster',
        desc : "The weapon of the Cannoneer, one of Mido's puppets. Sends out sheets of white-hot flame."
      },
      
      E7 : {
        name : 'Sunset Bayonet',
        desc : 'A warped Queenslayer Bayonet that has been corroded by miasma.'
      },
      
      E8 : {
        name : 'Black Bayonet',
        desc : 'A bayonet with a black barrel and blade.'
      },
      
      E9 : {
        name : 'Libertador',
        desc : 'The bayonet used by Eva, the Crypt Watcher.'
      },
      
      E10 : {
        name : 'Lost Bayonet',
        desc : 'A bayonet used by revenants who have fallen and joined the Lost.'
      }
    },
    
    
    // # 5. BLOOD VEILS #
    blood_veil : {
      // # OGRE #
      A0 : {
        name : 'Night Claw',
        desc : 'An Ogre-type Blood Veil with a traditional style for revenants.'
      },
      
      A1 : {
        name : 'Noble Silver',
        desc : 'A Blood Veil with a cloak in the shape of bat wings. Enhances support Gifts.'
      },
      
      A2 : {
        name : 'GXM Variant',
        desc : 'A Blood Veil made of armored plating and treated fabric. Enhances support Gifts.'
      },
      
      A3 : {
        name : 'Blackblood Liberator',
        desc : 'A Blood Veil with a tattered cloak. Offers resistance to status effects.'
      },
      
      A4 : {
        name : 'Queenslayer Claw',
        desc : 'A blood Veil used by forces in Operation Queenslayer. Enhances all types of Gifts.'
      },
      
      A5 : {
        name : 'Venous Claw',
        desc : 'An Ogre-type Blood Veil used by the Lost. Low durability, but extremely lightweight.'
      },
      
      
      // # STINGER #
      B0 : {
        name : 'Night Spear',
        desc : 'A Stinger-type Blood Veil with a traditional style for revenants.'
      },
      
      B1 : {
        name : 'Raven Fatigues',
        desc : 'A Blood Veil that strongly resembles the wings of a raven. Enhances offensive Gifts.'
      },
      
      B2 : {
        name : 'Winter Mantle',
        desc : 'A Blood Veil insulated for exploring polar regions. Greatly enhances support Gifts.'
      },
      
      B3 : {
        name : 'Silver Garb',
        desc : 'A Blood Veil that resembles a suit of armor. Highly resistant to slash/pierce attacks.'
      },
      
      B4 : {
        name : 'Queenslayer Thorn',
        desc : 'A Blood Veil used by forces in Operation Queenslayer. Enhances all types of Gifts.'
      },
      
      
      // # HOUNDS #
      C0 : {
        name : 'Night Fang',
        desc : 'A Hounds-type Blood Veil with a traditional style for revenants.'
      },
      
      C1 : {
        name : 'Blue Hounds',
        desc : 'A Blood Veil that looks like a simple jacket. Highly resistant to status effects.'
      },
      
      C2 : {
        name : 'GXL Defender',
        desc : 'A Blood Veil made of armored plating and treated fabric. Highly resistant to elements.'
      },
      
      C3 : {
        name : 'Hedgehog Fort',
        desc : 'A Blood Veil covered in metal spikes. Increases the power of offensive Gifts.'
      },
      
      C4 : {
        name : 'White Vestment',
        desc : 'A Blood Veil reminiscent of a monastic robe. Greatly enhances support Gifts.'
      },
      
      
      // # IVY #
      D0 : {
        name : 'Night Thorn',
        desc : 'An Ivy-type Blood Veil with a traditional style for revenants.'
      },
      
      D1 : {
        name : 'Ivory Grace',
        desc : 'A Blood Veil ornamented with silver. Greatly increases the efficacy of Gifts.'
      },
      
      D2 : {
        name : 'GXH Assault',
        desc : 'A Blood Veil made from a field coat. Offers high physical protection and mobility.'
      },
      
      D3 : {
        name : 'Prayer Shawl',
        desc : 'A Blood Veil marked by its elaborate design and bold red color. Enhances support Gifts.'
      },
      
      D4 : {
        name : 'Suicide Spur',
        desc : 'A Blood Veil that looks like a collar made of thorns. Greatly enhances offensive Gifts.'
      }
    },
    
    
    // # 6. TRANSFORMATIONS #
    transform : {
      // # PHYSICAL #
      A0 : {
        name : 'Alleviation',
        desc : "Reduces an equipment's weight, at the cost of decreased base stats."
      },
      
      A1 : {
        name : 'Fortification',
        desc : "Increases an equipment's weight while also increasing its base stats."
      },
      
      A2 : {
        name : 'Intensification',
        desc : "Grants an equipment greater stat scaling. Decreases weapon and Gift attack properties."
      },
      
      A3 : {
        name : 'Gifts',
        desc : "Greatly enhances a weapon's attack or a Blood Veil's Gift effectiveness. At the cost of greatly reduced stat scaling."
      },
      
      A4 : {
        name : 'Devour',
        desc : "Enhances an equipment's drain rating. Decreases weapon and Gift attack properties."
      },
      
      
      // # ELEMENTAL #
      B0 : {
        name : 'Fire',
        desc : "Grants an equipment fire properties. Decreases weapon/Gift attack & reduces stat scaling."
      },
      
      B1 : {
        name : 'Ice',
        desc : "Grants an equipment ice properties. Decreases weapon/Gift attack & reduces stat scaling."
      },
      
      B2 : {
        name : 'Lightning',
        desc : "Grants an equipment lightning properties. Decreases weapon/Gift attack & reduces stat scaling."
      },
      
      
      // # AILMENTS #
      C0 : {
        name : 'Venom',
        desc : "Creates equipment that poisons enemies, but has diminished Gift properties and attack."
      },
      
      C1 : {
        name : 'Stun',
        desc : "Creates equipment that stuns enemies, but has diminished Gift properties and attack."
      },
      
      C2 : {
        name : 'Inhibit',
        desc : "Creates equipment that inhibits enemies, but has diminished Gift properties and attack."
      },
      
      C3 : {
        name : 'Slow',
        desc : "Creates equipment that slows enemies, but has diminished Gift properties and attack."
      }
    }
  }
};


// # DO NOT EDIT #
// these are special keys that are language dependent

// mobility key
// converts the translated string into a comparable value
CodeVeinBuilder.status.mobiKey[_lang.mobi.slow]   = 0;
CodeVeinBuilder.status.mobiKey[_lang.mobi.normal] = 1;
CodeVeinBuilder.status.mobiKey[_lang.mobi.quick]  = 2;