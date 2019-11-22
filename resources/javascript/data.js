// # DATA FOR SKILLS, ITEMS, ETC. #
/*------------------------------
* 1. BLOOD CODES
* 2. PASSIVE SKILLS
* 3. ACTIVE SKILLS
* 4. WEAPONS
* 5. BLOOD VEILS
* 6. TRANSFORMATIONS
* 7. DATA SETUP
*------------------------------*/


// # 1. BLOOD CODES #
CodeVeinBuilder.data.blood_code = {
  A0 : { // Queenslayer
    image : 'queenslayer',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 8,
      dex : 9,
      mnd : 7,
      wil : 6,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A1 : { // Fighter
    image : 'fighter',

    mobility : _lang.mobi.normal,
    weight : 120,

    stats : {
      str : 8,
      dex : 7,
      mnd : 5,
      wil : 4,
      vit : 3,
      for : 3
    },

    ichor : {
      min : 16,
      max : 36
    }
  },

  A2 : { // Ranger
    image : 'ranger',

    mobility : _lang.mobi.quick,
    weight : 70,

    stats : {
      str : 5,
      dex : 8,
      mnd : 4,
      wil : 5,
      vit : 3,
      for : 5
    },

    ichor : {
      min : 16,
      max : 36
    }
  },
  
  A3 : { // Caster
    image : 'caster',

    mobility : _lang.mobi.normal,
    weight : 98,

    stats : {
      str : 4,
      dex : 5,
      mnd : 7,
      wil : 8,
      vit : 2,
      for : 2
    },

    ichor : {
      min : 30,
      max : 54
    }
  },
  
  A4 : { // Berserker
    image : 'berserker',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 9,
      dex : 3,
      mnd : 4,
      wil : 4,
      vit : 8,
      for : 8
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A5 : { // Prometheus
    image : 'prometheus',

    mobility : _lang.mobi.normal,
    weight : 103,

    stats : {
      str : 8,
      dex : 8,
      mnd : 6,
      wil : 6,
      vit : 6,
      for : 9
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A6 : { // Hunter
    image : 'hunter',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 7,
      mnd : 6,
      wil : 8,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A7 : { // Mercury
    image : 'mercury',

    mobility : _lang.mobi.normal,
    weight : 95,

    stats : {
      str : 7,
      dex : 8,
      mnd : 6,
      wil : 6,
      vit : 5,
      for : 6
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A8 : { // Hermes
    image : 'hermes',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 7,
      dex : 5,
      mnd : 8,
      wil : 5,
      vit : 6,
      for : 6
    },

    ichor : {
      min : 24,
      max : 50
    }
  },
  
  A9 : { // Darkseeker
    image : 'darkseeker',

    mobility : _lang.mobi.normal,
    weight : 105,

    stats : {
      str : 4,
      dex : 7,
      mnd : 8,
      wil : 8,
      vit : 3,
      for : 3
    },

    ichor : {
      min : 24,
      max : 50
    }
  },
  
  A10 : { // Atlas
    image : 'atlas',

    mobility : _lang.mobi.slow,
    weight : 247,

    stats : {
      str : 10,
      dex : 4,
      mnd : 4,
      wil : 5,
      vit : 10,
      for : 6
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A11 : { // Assassin
    image : 'assassin',

    mobility : _lang.mobi.quick,
    weight : 58,

    stats : {
      str : 6,
      dex : 8,
      mnd : 4,
      wil : 6,
      vit : 5,
      for : 8
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A12 : { // Artemis
    image : 'artemis',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 3,
      dex : 8,
      mnd : 6,
      wil : 9,
      vit : 6,
      for : 7
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A13 : { // Isis
    image : 'isis',

    mobility : _lang.mobi.slow,
    weight : 249,

    stats : {
      str : 5,
      dex : 7,
      mnd : 8,
      wil : 8,
      vit : 6,
      for : 6
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A14 : { // Queen's Ribcage
    image : 'queens-ribcage',

    mobility : _lang.mobi.normal,
    weight : 105,

    stats : {
      str : 4,
      dex : 6,
      mnd : 8,
      wil : 9,
      vit : 2,
      for : 3
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A15 : { // Eos
    image : 'eos',

    mobility : _lang.mobi.normal,
    weight : 98,

    stats : {
      str : 7,
      dex : 5,
      mnd : 10,
      wil : 6,
      vit : 9,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A16 : { // Fionn
    image : 'fionn',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 9,
      dex : 5,
      mnd : 7,
      wil : 4,
      vit : 7,
      for : 6
    },

    ichor : {
      min : 14,
      max : 34
    }
  },
  
  A17 : { // Queen's Breath
    image : 'queens-breath',

    mobility : _lang.mobi.normal,
    weight : 95,

    stats : {
      str : 9,
      dex : 4,
      mnd : 9,
      wil : 4,
      vit : 6,
      for : 4
    },

    ichor : {
      min : 28,
      max : 60
    }
  },
  
  A18 : { // Survivor
    image : 'survivor',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 9,
      mnd : 6,
      wil : 4,
      vit : 5,
      for : 7
    },

    ichor : {
      min : 24,
      max : 48
    }
  },
  
  A19 : { // Dark Knight
    image : 'dark-knight',

    mobility : _lang.mobi.normal,
    weight : 102,

    stats : {
      str : 9,
      dex : 7,
      mnd : 5,
      wil : 5,
      vit : 6,
      for : 4
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A20 : { // Scathach
    image : 'scathach',

    mobility : _lang.mobi.normal,
    weight : 99,

    stats : {
      str : 6,
      dex : 8,
      mnd : 7,
      wil : 7,
      vit : 5,
      for : 7
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A21 : { // Queen's Claw
    image : 'queens-claw',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 8,
      dex : 9,
      mnd : 6,
      wil : 8,
      vit : 2,
      for : 5
    },

    ichor : {
      min : 30,
      max : 50
    }
  },
  
  A22 : { // Harmonia
    image : 'harmonia',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 3,
      dex : 5,
      mnd : 7,
      wil : 10,
      vit : 5,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A23 : { // Queen's Throat
    image : 'queens-throat',

    mobility : _lang.mobi.quick,
    weight : 63,

    stats : {
      str : 3,
      dex : 3,
      mnd : 10,
      wil : 9,
      vit : 3,
      for : 4
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A24 : { // Heimdall
    image : 'heimdall',

    mobility : _lang.mobi.quick,
    weight : 55,

    stats : {
      str : 6,
      dex : 10,
      mnd : 6,
      wil : 6,
      vit : 5,
      for : 10
    },

    ichor : {
      min : 16,
      max : 40
    }
  },
  
  A25 : { // Hephaestus
    image : 'hephaestus',

    mobility : _lang.mobi.normal,
    weight : 80,

    stats : {
      str : 5,
      dex : 9,
      mnd : 5,
      wil : 8,
      vit : 7,
      for : 6
    },

    ichor : {
      min : 20,
      max : 40
    }
  },
  
  A26 : { // Warrior
    image : 'warrior',

    mobility : _lang.mobi.slow,
    weight : 245,

    stats : {
      str : 10,
      dex : 6,
      mnd : 5,
      wil : 7,
      vit : 7,
      for : 2
    },

    ichor : {
      min : 10,
      max : 30
    }
  },
  
  A27 : { // Scout
    image : 'scout',

    mobility : _lang.mobi.quick,
    weight : 60,

    stats : {
      str : 6,
      dex : 9,
      mnd : 7,
      wil : 6,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 24,
      max : 44
    }
  },
  
  A28 : { // Queen
    image : 'queen',

    mobility : _lang.mobi.normal,
    weight : 103,

    stats : {
      str : 6,
      dex : 5,
      mnd : 9,
      wil : 9,
      vit : 6,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A29 : { // Hades
    image : 'hades',

    mobility : _lang.mobi.slow,
    weight : 250,

    stats : {
      str : 10,
      dex : 7,
      mnd : 5,
      wil : 5,
      vit : 6,
      for : 7
    },

    ichor : {
      min : 14,
      max : 40
    }
  },
  
  A30 : { // Demeter
    image : 'demeter',

    mobility : _lang.mobi.normal,
    weight : 99,

    stats : {
      str : 9,
      dex : 4,
      mnd : 9,
      wil : 6,
      vit : 8,
      for : 2
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A31 : { // Ishtar
    image : 'ishtar',

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 8,
      dex : 5,
      mnd : 9,
      wil : 7,
      vit : 5,
      for : 10
    },

    ichor : {
      min : 30,
      max : 60
    }
  },
  
  A32 : { // Harbinger
    image : 'harbinger',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 100,

    stats : {
      str : 6,
      dex : 5,
      mnd : 4,
      wil : 5,
      vit : 9,
      for : 8
    },

    ichor : {
      min : 20,
      max : 44
    }
  },
  
  A33 : { // Astrea
    image : 'astrea',
    dlc : 1,

    mobility : _lang.mobi.normal,
    weight : 85,

    stats : {
      str : 5,
      dex : 6,
      mnd : 7,
      wil : 7,
      vit : 4,
      for : 5
    },

    ichor : {
      min : 30,
      max : 60
    }
  }
};


// # 2. PASSIVE SKILLS #
// Group A = General Boosts
// Group B = Defense Boosts
// Group C = Stat Boosts
// Group D = Focus Boosts
// Group E = Weapon Mastery
// Group F = Misc
CodeVeinBuilder.data.passive = {
  // # GENERAL BOOSTS #
  A0 : { // Health Boost
    image : 'health-boost',
    tree : _lang.tree.light,
    origin : 'A1'
  },

  A1 : { // Health Stimulant
    image : 'health-stimulant',
    tree : _lang.tree.light,
    origin : 'A26'
  },

  A2 : { // Stamina Boost
    image : 'stamina-boost',
    tree : _lang.tree.light,
    origin : 'A2'
  },
  
  A3 : { // Stamina Stimulant
    image : 'stamina-stimulant',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  A4 : { // Sprinter
    image : 'sprinter',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  A5 : { // Sharpened Fangs
    image : 'sharpened-fangs',
    tree : _lang.tree.dark,
    origin : 'A11'
  },
  
  A6 : { // Tenacious Fang
    image : 'tenacious-fang',
    tree : _lang.tree.light,
    origin : 'rvm101'
  },
  
  A7 : { // Heroic Fang
    image : 'heroic-fang',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  A8 : { // Swift Destruction
    image : 'swift-destruction',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  A9 : { // Survival Instinct
    image : 'survival-instinct',
    tree : _lang.tree.dark,
    origin : 'A29'
  },
  
  A10 : { // Savvy Evasion
    image : 'savvy-evasion',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  A11 : { // Resilient Focus
    image : 'resilient-focus',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  A12 : { // Weapon Drain Rating Up
    image : 'weapon-drain-rating-up',
    tree : _lang.tree.dark,
    origin : 'A3'
  },
  
  A13 : { // Avarice
    image : 'avarice',
    tree : _lang.tree.light,
    origin : 'A25'
  },

  A14 : { // Vow of Ichor
    image : 'vow-of-ichor',
    tree : _lang.tree.dark,
    origin : 'A13',
    
    ichor : {
      min : 6,
      max : 6
    }
  },

  A15 : { // Mac Ichor Boost
    image : 'max-ichor-boost',
    tree : _lang.tree.dark,
    origin : 'A22',

    ichor : {
      min : 4,
      max : 4
    }
  },
  
  A16 : { // Increased Gift Speed
    image : 'increased-gift-speed',
    tree : _lang.tree.light,
    origin : 'A21'
  },
  
  A17 : { // Charge Accelerator
    image : 'charge-accelerator',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  A18 : { // Debuff Build-Up
    image : 'debuff-build-up',
    tree : _lang.tree.light,
    origin : 'rvm111'
  },
  
  A19 : { // Revenant's Ambition
    image : 'revenants-ambition',
    tree : _lang.tree.light,
    origin : 'A17',
    
    inc_max_weight : 1.30
  },
  
  A20 : { // Opportunism
    image : 'opportunism',
    tree : _lang.tree.dark,
    origin : 'rvm116'
  },
  
  
  // # DEFENSE BOOSTS #
  B0 : { // Balance Up
    image : 'balance-up',
    tree : _lang.tree.light,
    origin : 'A4'
  },
  
  B1 : { // Deft Parry
    image : 'deft-parry',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  B2 : { // Guard Drain Rating Up
    image : 'guard-drain-rating-up',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  B3 : { // Firm Stand
    image : 'firm-stand',
    tree : _lang.tree.light,
    origin : 'A10',
    blood_code_req : 'A10' // Atlas
  },
  
  B4 : { // Blood Grab
    image : 'blood-grab',
    tree : _lang.tree.dark,
    origin : 'A12',
    blood_code_req : 'A12' // Artemis
  },
  
  B5 : { // Evasive Snare
    image : 'evasive-snare',
    tree : _lang.tree.dark,
    origin : 'A25',
    blood_code_req : 'A25' // Hephaestus
  },
  
  B6 : { // Venom Resistance
    image : 'venom-resistance',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  B7 : { // Leak Resistance
    image : 'leak-resistance',
    tree : _lang.tree.light,
    origin : 'A18'
  },
  
  B8 : { // Stun Resistance
    image : 'stun-resistance',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  B9 : { // Inhibit Resistance
    image : 'inhibit-resistance',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  B10 : { // Slow Resistance
    image : 'slow-resistance',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  
  // # STAT BOOSTS #
  C0 : { // Strength Up
    image : 'strength-up',
    tree : _lang.tree.light,
    origin : 'A8',

    stats : {
      str : 1
    }
  },
  
  C1 : { // Dexterity Up
    image : 'dexterity-up',
    tree : _lang.tree.light,
    origin : 'A6',
    
    stats : {
      dex : 1
    }
  },
  
  C2 : { // Mind Up
    image : 'mind-up',
    tree : _lang.tree.light,
    origin : 'A31',
    
    stats : {
      mnd : 1
    }
  },
  
  C3 : { // Willpower Up
    image : 'willpower-up',
    tree : _lang.tree.light,
    origin : 'A28',
    
    stats : {
      wil : 1
    }
  },
  
  C4 : { // Vitality Up
    image : 'vitality-up',
    tree : _lang.tree.light,
    origin : 'A18',
    
    stats : {
      vit : 1
    }
  },
  
  C5 : { // Perseverance Up
    image : 'perseverance-up',
    tree : _lang.tree.light,
    origin : 'A16',
    
    stats : {
      for : 1
    }
  },
  
  C6 : { // Strength/Dexterity Up
    image : 'strength-dexterity-up',
    tree : _lang.tree.light,
    origin : 'A5',
    
    stats : {
      str : 1,
      dex : 1
    }
  },
  
  C7 : { // Strength/Willpower Up
    image : 'strength-willpower-up',
    tree : _lang.tree.light,
    origin : 'A20',
    
    stats : {
      str : 1,
      wil : 1
    }
  },

  C8 : { // Strength/Vitality Up
    image : 'strength-vitality-up',
    tree : _lang.tree.light,
    origin : 'A10',

    stats : {
      str : 1,
      vit : 1
    }
  },
  
  C9 : { // Dexterity/Willpower Up
    image : 'dexterity-willpower-up',
    tree : _lang.tree.light,
    origin : 'A12',
    
    stats : {
      dex : 1,
      wil : 1
    }
  },
  
  C10 : { // Dexterity/Fortitude Up
    image : 'dexterity-fortitude-up',
    tree : _lang.tree.light,
    origin : 'A24',
    
    stats : {
      dex : 1,
      for : 1
    }
  },
  
  C11 : { // Mind/Willpower Up
    image : 'mind-willpower-up',
    tree : _lang.tree.light,
    origin : 'A22',
    
    stats : {
      mnd : 1,
      wil : 1
    }
  },
  
  C12 : { // Mind/Vitality Up
    image : 'mind-vitality-up',
    tree : _lang.tree.light,
    origin : 'A15',
    
    stats : {
      mnd : 1,
      vit : 1
    }
  },
  
  C13 : { // Mind/Fortitude Up
    image : 'mind-fortitude-up',
    tree : _lang.tree.light,
    origin : 'A30',
    
    stats : {
      mnd : 1,
      for : 1
    }
  },
  
  
  // # FOCUS BOOSTS #
  D0 : { // Dark Impulse
    image : 'dark-impulse',
    tree : _lang.tree.dark,
    origin : 'A3'
  },
  
  D1 : { // Light Impulse
    image : 'light-impulse',
    tree : _lang.tree.light,
    origin : 'A31'
  },
  
  D2 : { // Guard Stability
    image : 'guard-stability',
    tree : _lang.tree.light,
    origin : 'A2'
  },
  
  D3 : { // Focused Guard
    image : 'focused-guard',
    tree : _lang.tree.light,
    origin : 'A16'
  },
  
  D4 : { // Focused Stamina Usage
    image : 'focused-stamina-usage',
    tree : _lang.tree.light,
    origin : 'A1'
  },
  
  D5 : { // Maintained Focus
    image : 'maintained-focus',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  D6 : { // Focused Carnage
    image : 'focused-carnage',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  D7 : { // Ichor Strikes
    image : 'ichor-strikes',
    tree : _lang.tree.light,
    origin : 'A6'
  },
  
  D8 : { // Ichor Reduction
    image : 'ichor-reduction',
    tree : _lang.tree.dark,
    origin : 'A23',
    blood_code_req : 'A23' // Queen's Throat
  },
  
  D9 : { // Drain Boost
    image : 'drain-boost',
    tree : _lang.tree.light,
    origin : 'A0'
  },
  
  D10 : { // Focused Gift Speed
    image : 'focused-gift-speed',
    tree : _lang.tree.dark,
    origin : 'A12'
  },
  
  D11 : { // Blood Buff
    image : 'blood-buff',
    tree : _lang.tree.dark,
    origin : 'rvm104'
  },
  
  D12 : { // Fire Buff
    image : 'fire-buff',
    tree : _lang.tree.dark,
    origin : 'A20'
  },
  
  D13 : { // Ice Buff
    image : 'ice-buff',
    tree : _lang.tree.dark,
    origin : 'rvm102'
  },
  
  D14 : { // Lightning Buff
    image : 'lightning-buff',
    tree : _lang.tree.dark,
    origin : 'rvm103'
  },
  
  D15 : { // Venom Buff
    image : 'venom-buff',
    tree : _lang.tree.dark,
    origin : 'A9'
  },
  
  D16 : { // Stun Buff
    image : 'stun-buff',
    tree : _lang.tree.dark,
    origin : 'A27'
  },
  
  D17 : { // Goddess's Smile
    image : 'goddess-smile',
    tree : _lang.tree.light,
    origin : 'A31'
  },
  
  
  // # WEAPON MASTERY #
  E0 : { // One-handed Sword Mastery
    image : 'one-handed-sword-mastery',
    tree : _lang.tree.light,
    origin : 'A5'
  },
  
  E1 : { // Two-handed Sword Mastery
    image : 'two-handed-sword-mastery',
    tree : _lang.tree.light,
    origin : 'A10'
  },
  
  E2 : { // Halberd Mastery
    image : 'halberd-mastery',
    tree : _lang.tree.light,
    origin : 'A19'
  },
  
  E3 : { // Hammer Mastery
    image : 'hammer-mastery',
    tree : _lang.tree.light,
    origin : 'A16'
  },
  
  E4 : { // Bayonet Mastery
    image : 'bayonet-mastery',
    tree : _lang.tree.light,
    origin : 'A12'
  },
  
  
  // # MISC #
  F0 : { // Regeneration Shift
    image : 'regeneration-shift',
    tree : _lang.tree.light,
    origin : 'A24'
  },
  
  F1 : { // Improved Regeneration
    image : 'improved-regeneration',
    tree : _lang.tree.light,
    origin : 'A26'
  },
  
  F2 : { // Augmented Regeneration
    image : 'augmented-regeneration',
    tree : _lang.tree.light,
    origin : 'A27'
  },
  
  F3 : { // Torchbearer
    image : 'torchbearer',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,
    blood_code_req : 'A33' // Astrea
  },
  
  F4 : { // Life Steal
    image : 'life-steal',
    tree : _lang.tree.dark,
    origin : 'A18'
  },
  
  F5 : { // Regenerative Drain
    image : 'regenerative-drain',
    tree : _lang.tree.dark,
    origin : 'A29'
  },
  
  F6 : { // Eternal Blade Dance
    image : 'eternal-blade-dance',
    tree : _lang.tree.light,
    origin : 'A5',
    blood_code_req : 'A5' // Prometheus
  },
  
  F7 : { // Blood-draining Venom
    image : 'blood-draining-venom',
    tree : _lang.tree.dark,
    origin : 'A9',
    blood_code_req : 'A9' // Darkseeker
  },
  
  F8 : { // Revenant's Hunger
    image : 'revenants-hunger',
    tree : _lang.tree.light,
    origin : 'A7'
  },
  
  F9 : { // Revenant's Greed
    image : 'revenants-greed',
    tree : _lang.tree.light,
    origin : 'A8'
  },
  
  F10 : { // Pioneer's Guidance
    image : 'pioneers-guidance',
    tree : _lang.tree.light,
    origin : 'A25'
  },
  
  F11 : { // Fall Damage Reduction
    image : 'fall-damage-reduction',
    tree : _lang.tree.dark,
    origin : 'A9'
  },
  
  F12 : { // Deliverance
    image : 'deliverance',
    tree : _lang.tree.light,
    origin : 'A31',
    blood_code_req : 'A31' // Ishtar
  },
  
  F13 : { // Tirelessness
    image : 'tirelessness',
    tree : _lang.tree.light,
    origin : 'rvm115'
  },
  
  F14 : { // Bolster
    image : 'bolster',
    tree : _lang.tree.light,
    origin : 'rvm113'
  },
  
  F15 : { // Revenant Dagger
    image : 'revenant-dagger',
    tree : _lang.tree.dark,
    origin : 'rvm117'
  },
  
  F16 : { // Complete Attention
    image : 'complete-attention',
    tree : _lang.tree.light,
    origin : 'rvm114'
  }
};


// # 3. ACTIVE SKILLS #
// Group A = Spells
// Group B = Debuffs
// Group C = Buffs
// Group D = Defense Buffs
// Group E = Communal Gifts
// Group F = Misc
CodeVeinBuilder.data.active = {
  // # SPELLS #
  A0 : { // Sonic Arrow
    image : 'sonic-arrow',
    tree : _lang.tree.dark,
    origin : 'A2',

    ichor_cost : 1,
    cooldown : 2,
    physical : _lang.attr.pierce
  },

  A1 : { // Blood Shot
    image : 'blood-shot',
    tree : _lang.tree.dark,
    origin : 'A3',

    required : {
      wil : 5
    },

    ichor_cost : 2,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood,
  },
  
  A2 : { // Sanguine Roar
    image : 'sanguine-roar',
    tree : _lang.tree.dark,
    origin : 'A9',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A3 : { // Blazing Roar
    image : 'blazing-roar',
    tree : _lang.tree.dark,
    origin : 'A3',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A4 : { // Freezing Roar
    image : 'freezing-roar',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A5 : { // Plasma Roar
    image : 'plasma-roar',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A6 : { // Blood Spike
    image : 'blood-spike',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A7 : { // Flame Spike
    image : 'flame-spike',
    tree : _lang.tree.light,
    origin : 'A6',
    
    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A8 : { // Frost Spike
    image : 'frost-spike',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A9 : { // Lightning Spike
    image : 'lightning-spike',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    required : {
      mnd : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A10 : { // Blood Barrage
    image : 'blood-barrage',
    tree : _lang.tree.light,
    origin : 'A27',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A11 : { // Flame Barrage
    image : 'flame-barrage',
    tree : _lang.tree.light,
    origin : 'rvm112',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A12 : { // Ice Barrage
    image : 'ice-barrage',
    tree : _lang.tree.light,
    origin : 'A16',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A13 : { // Lightning Barrage
    image : 'lightning-barrage',
    tree : _lang.tree.light,
    origin : 'rvm105',

    required : {
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A14 : { // Vodnik Mass
    image : 'vodnik-mass',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A15 : { // Walpurgis Fire
    image : 'walpurgis-fire',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A16 : { // Baba Yaga's Gaze
    image : 'baba-yagas-gaze',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A17 : { // Rage of Perkunas
    image : 'rage-of-perkunas',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      wil : 9
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A18 : { // Dusk Edge
    image : 'dusk-edge',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A19 : { // Crimson Moon
    image : 'crimson-moon',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.fire
  },
  
  A20 : { // Aurora Flash
    image : 'aurora-flash',
    tree : _lang.tree.dark,
    origin : 'A17',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.ice
  },
  
  A21 : { // Jupiter's Blade
    image : 'jupiters-blade',
    tree : _lang.tree.dark,
    origin : 'rvm107',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.lightning
  },
  
  A22 : { // Execution
    image : 'execution',
    tree : _lang.tree.dark,
    origin : 'A29',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A23 : { // Fire Storm
    image : 'fire-storm',
    tree : _lang.tree.dark,
    origin : 'A5',

    required : {
      wil : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A24 : { // Blast Bolt
    image : 'blast-bolt',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.lightning
  },
  
  A25 : { // Guard of Honor
    image : 'guard-of-honor',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A26 : { // Dancing Blaze
    image : 'dancing-blaze',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 2,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A27 : { // Draconic Stake
    image : 'draconic-stake',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 8,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A28 : { // Indra's Coil
    image : 'indras-coil',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A29 : { // Fourfold Verdict
    image : 'fourfold-verdict',
    tree : _lang.tree.dark,
    origin : 'A13',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning
  },
  
  A30 : { // Elder Contract
    image : 'elder-contract',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A31 : { // Ichorous Ice
    image : 'ichorous-ice',
    tree : _lang.tree.dark,
    origin : 'A14',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.ice
  },
  
  A32 : { // Twilight
    image : 'twilight',
    tree : _lang.tree.dark,
    origin : 'A14',

    ichor_cost : 10,
    cooldown : 20,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.lightning,
    blood_code_req : 'A14' // Queen's Ribcage
  },
  
  A33 : { // Fire Lily
    image : 'fire-lily',
    tree : _lang.tree.dark,
    origin : 'A21',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 3,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A34 : { // Sand Edge
    image : 'sand-edge',
    tree : _lang.tree.dark,
    origin : 'A22',
    
    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 6,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A35 : { // Volatile Storm
    image : 'volatile-storm',
    tree : _lang.tree.dark,
    origin : 'A22',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 7,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A36 : { // Arm of Set
    image : 'arm-of-set',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      wil : 7
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  A37 : { // Sands of Depravity
    image : 'sands-of-depravity',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      wil : 7
    },

    ichor_cost : 8,
    cooldown : 10,
    physical : _lang.attr.slash
  },
  
  A38 : { // Chaotic Ash
    image : 'chaotic-ash',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 1,
    cooldown : 30
  },
  
  A39 : { // Purging Thorn
    image : 'purging-thorn',
    tree : _lang.tree.dark,
    origin : 'A28',

    required : {
      mnd : 7,
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 30,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A40 : { // Argent Wolf Cross
    image : 'argent-wolf-cross',
    tree : _lang.tree.dark,
    origin : 'A29',

    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 2,
    physical : _lang.attr.slash,
    elemental : _lang.attr.blood
  },
  
  A41 : { // Shadow Leap
    image : 'shadow-leap',
    tree : _lang.tree.dark,
    origin : 'A13',
    
    ichor_cost : 3,
    cooldown : 2,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood,
    blood_code_req : 'A13' // Isis
  },
  
  A42 : { // Bloody Impact
    image : 'bloody-impact',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 6,
    cooldown : 8,
    physical : _lang.attr.crush,
    elemental : _lang.attr.blood
  },
  
  A43 : { // Cloak of Winter
    image : 'cloak-of-winter',
    tree : _lang.tree.light,
    origin : 'A17',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.ice
  },
  
  A44 : { // Peony Flash
    image : 'peony-flash',
    tree : _lang.tree.dark,
    origin : 'A20',

    ichor_cost : 5,
    cooldown : 10,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire,
    blood_code_req : 'A20' // Scathach
  },
  
  A45 : { // Will-o'-the-Wisp
    image : 'will-o-the-wisp',
    tree : _lang.tree.dark,
    origin : 'A27',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 1,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.blood
  },
  
  A46 : { // Ember Reversal
    image : 'ember-reversal',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 1,
    physical : _lang.attr.pierce,
    elemental : _lang.attr.fire
  },
  
  A47 : { // Desperate Burst
    image : 'desperate-burst',
    tree : _lang.tree.dark,
    origin : 'A32',
    dlc : 1,

    ichor_cost : 20,
    cooldown : 30,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  A48 : { // Rose Flame
    image : 'rose-flame',
    tree : _lang.tree.dark,
    origin : 'A21',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  
  // # DEBUFFS #
  B0 : { // Venomous Shot
    image : 'venomous-shot',
    tree : _lang.tree.dark,
    origin : 'A9',
    
    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B1 : { // Stun Shot
    image : 'stun-shot',
    tree : _lang.tree.dark,
    origin : 'rvm106',
    
    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B2 : { // Slowing Shot
    image : 'slowing-shot',
    tree : _lang.tree.dark,
    origin : 'A27',

    required : {
      wil : 5
    },

    ichor_cost : 3,
    cooldown : 8,
    physical : _lang.attr.pierce
  },
  
  B3 : { // Venomous Web
    image : 'venomous-web',
    tree : _lang.tree.dark,
    origin : 'rvm108',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B4 : { // Stun Web
    image : 'stun-web',
    tree : _lang.tree.dark,
    origin : 'rvm109',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B5 : { // Slow Web
    image : 'slow-web',
    tree : _lang.tree.dark,
    origin : 'rvm110',

    required : {
      dex : 4,
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 5,
    physical : _lang.attr.pierce
  },
  
  B6 : { // Shock Web
    image : 'shock-web',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 3,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  B7 : { // Flames of Rage
    image : 'flames-of-rage',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  B8 : { // Venom Trap
    image : 'venom-trap',
    tree : _lang.tree.dark,
    origin : 'A9',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B9 : { // Stun Trap
    image : 'stun-trap',
    tree : _lang.tree.dark,
    origin : 'A11',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B10 : { // Slow Trap
    image : 'slow-trap',
    tree : _lang.tree.dark,
    origin : 'A27',
    
    required : {
      wil : 5
    },

    ichor_cost : 6,
    cooldown : 20,
    physical : _lang.attr.pierce
  },
  
  B11 : { // Frenzied Fire
    image : 'frenzied-fire',
    tree : _lang.tree.dark,
    origin : 'A0',

    ichor_cost : 4,
    cooldown : 2
  },
  
  
  // # BUFFS #
  C0 : { // Blood Weapon
    image : 'blood-weapon',
    tree : _lang.tree.light,
    origin : 'A19',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.blood
  },
  
  C1 : { // Flame Weapon
    image : 'flame-weapon',
    tree : _lang.tree.light,
    origin : 'A5',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.fire
  },
  
  C2 : { // Frost Weapon
    image : 'frost-weapon',
    tree : _lang.tree.light,
    origin : 'A16',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.ice
  },
  
  C3 : { // Lightning Weapon
    image : 'lightning-weapon',
    tree : _lang.tree.light,
    origin : 'A7',
    
    required : {
      mnd : 4
    },

    ichor_cost : 5,
    cooldown : 5,
    elemental : _lang.attr.lightning
  },
  
  C4 : { // Venom Mark
    image : 'venom-mark',
    tree : _lang.tree.dark,
    origin : 'A2',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C5 : { // Numbing Mark
    image : 'numbing-mark',
    tree : _lang.tree.dark,
    origin : 'A11',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C6 : { // Warding Mark
    image : 'warding-mark',
    tree : _lang.tree.dark,
    origin : 'A5',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C7 : { // Binding Mark
    image : 'binding-mark',
    tree : _lang.tree.dark,
    origin : 'A6',

    required : {
      dex : 5
    },

    ichor_cost : 4,
    cooldown : 30
  },
  
  C8 : { // Adrenaline
    image : 'adrenaline',
    tree : _lang.tree.light,
    origin : 'A1',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C9 : { // Bridge to Glory
    image : 'bridge-to-glory',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 8
    },

    ichor_cost : 5,
    cooldown : 10
  },
  
  C10 : { // Overdrive
    image : 'overdrive',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 5,
    cooldown : 10
  },
  
  C11 : { // Ranged Impact
    image : 'ranged-impact',
    tree : _lang.tree.light,
    origin : 'A6',

    required : {
      dex : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C12 : { // Blow of Madness
    image : 'blow-of-madness',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 15
  },
  
  C13 : { // Flashing Fang
    image : 'flashing-fang',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      str : 9
    },

    ichor_cost : 6,
    cooldown : 20
  },
  
  C14 : { // Merciless Reaper
    image : 'merciless-reaper',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C15 : { // Dark Shout
    image : 'dark-shout',
    tree : _lang.tree.dark,
    origin : 'A23',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 4,
    cooldown : 2
  },
  
  C16 : { // Blade Dance
    image : 'blade-dance',
    tree : _lang.tree.light,
    origin : 'A5',

    ichor_cost : 10,
    cooldown : 15,
    blood_code_req : 'A5' // Prometheus
  },
  
  C17 : { // Sacrificial Edge
    image : 'sacrificial-edge',
    tree : _lang.tree.dark,
    origin : 'A24',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A24' // Heimdall
  },
  
  C18 : { // Somatic Zeal
    image : 'somatic-zeal',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C19 : { // Cognitive Zeal
    image : 'cognitive-zeal',
    tree : _lang.tree.light,
    origin : 'cor5',

    required : {
      mnd : 4,
      wil : 4
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  C20 : { // Precision
    image : 'precision',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      str : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C21 : { // Hunting Feast
    image : 'hunting-feast',
    tree : _lang.tree.light,
    origin : 'A6',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C22 : { // Bloodsucking Blades
    image : 'bloodsucking-blades',
    tree : _lang.tree.dark,
    origin : 'A12',

    required : {
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C23 : { // Gift Prowess
    image : 'gift-prowess',
    tree : _lang.tree.dark,
    origin : 'A22',

    required : {
      mnd : 5,
      wil : 7
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  C24 : { // Gift Extension
    image : 'gift-extension',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 8,
    cooldown : 30
  },
  
  C25 : { // Hasten
    image : 'hasten',
    tree : _lang.tree.light,
    origin : 'A5',

    required : {
      dex : 5,
      mnd : 4
    },

    ichor_cost : 10,
    cooldown : 60
  },
  
  C26 : { // Concentration
    image : 'concentration',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  C27 : { // Red Shoes
    image : 'red-shoes',
    tree : _lang.tree.light,
    origin : 'A16',

    ichor_cost : 10,
    cooldown : 5,
    blood_code_req : 'A16' // Fionn
  },
  
  C28 : { // Valiant Heart
    image : 'valiant-heart',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C29 : { // Morale Boost
    image : 'morale-boost',
    tree : _lang.tree.light,
    origin : 'A24',

    required : {
      dex : 7,
      mnd : 4,
      for : 7
    },

    ichor_cost : 6,
    cooldown : 30
  },
  
  C30 : { // Time Crunch
    image : 'time-crunch',
    tree : _lang.tree.dark,
    origin : 'A20',

    required : {
      dex : 5,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  C31 : { // Supernatural Blood
    image : 'supernatural-blood',
    tree : _lang.tree.dark,
    origin : 'A22',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A22' // Harmonia
  },
  
  C32 : { // Impact Wave
    image : 'impact-wave',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      str : 7,
      vit : 7
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush
  },
  
  C33 : { // Final Journey
    image : 'final-journey',
    tree : _lang.tree.light,
    origin : 'A0',
    
    ichor_cost : 10,
    cooldown : '0',
    blood_code_req : 'A0' // Queenslayer
  },
  
  
  // # DEFENSE BUFFS #
  D0 : { // Iron Will
    image : 'iron-will',
    tree : _lang.tree.light,
    origin : 'A4',
    
    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D1 : { // Foulblood Barrier
    image : 'foulblood-barrier',
    tree : _lang.tree.light,
    origin : 'A10',
    
    required : {
      mnd : 4,
      vit : 7,
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D2 : { // Ablative Blood
    image : 'ablative-blood',
    tree : _lang.tree.light,
    origin : 'A15',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A15' // Eos
  },
  
  D3 : { // Juggernaut
    image : 'juggernaut',
    tree : _lang.tree.light,
    origin : 'A17',

    ichor_cost : 6,
    cooldown : 30,
    blood_code_req : 'A17' // Queen's Breath
  },
  
  D4 : { // Steady Bulwark
    image : 'steady-bulwark',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 15
  },
  
  D5 : { // Guard Reversal
    image : 'guard-reversal',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      vit : 7
    },

    ichor_cost : 4,
    cooldown : 2
  },
  
  D6 : { // Crushing Might
    image : 'crushing-might',
    tree : _lang.tree.light,
    origin : 'A16',

    required : {
      str : 7
    },

    ichor_cost : 4,
    cooldown : 5
  },
  
  D7 : { // Guard Stability
    image : 'guard-stability',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D8 : { // Prismatic Veil
    image : 'prismatic-veil',
    tree : _lang.tree.light,
    origin : 'A30',

    required : {
      mnd : 6,
      vit : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  D9 : { // Blood Guard
    image : 'blood-guard',
    tree : _lang.tree.light,
    origin : 'A1',

    ichor_cost : 4,
    cooldown : 5
  },
  
  D10 : { // Flame Protection
    image : 'flame-protection',
    tree : _lang.tree.light,
    origin : 'A19',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.fire
  },
  
  D11 : { // Ice Armor
    image : 'ice-armor',
    tree : _lang.tree.light,
    origin : 'A12',

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.ice
  },
  
  D12 : { // Raijin's Veil
    image : 'raijins-veil',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 4,
    cooldown : 5,
    elemental : _lang.attr.lightning
  },
  
  D13 : { // Elemental Wall
    image : 'elemental-wall',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D14 : { // Royal Heart
    image : 'royal-heart',
    tree : _lang.tree.light,
    origin : 'A4',

    required : {
      for : 5
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  D15 : { // Dogged Fighter
    image : 'dogged-fighter',
    tree : _lang.tree.light,
    origin : 'A10',

    required : {
      vit : 7
    },

    ichor_cost : 5,
    cooldown : 30
  },
  
  D16 : { // Perfect Balance
    image : 'perfect-balance',
    tree : _lang.tree.light,
    origin : 'A26',

    required : {
      wil : 5
    },

    ichor_cost : 4,
    cooldown : 10
  },
  
  D17 : { // Antibody Generation
    image : 'antibody-generation',
    tree : _lang.tree.light,
    origin : 'A15',
    
    required : {
      mnd : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  D18 : { // Countermeasure
    image : 'countermeasure',
    tree : _lang.tree.dark,
    origin : 'A25',

    required : {
      dex : 7,
      wil : 5
    },

    ichor_cost : 5,
    cooldown : 5,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire
  },
  
  D19 : { // Sly Vengeance
    image : 'sly-vengeance',
    tree : _lang.tree.dark,
    origin : 'A21',

    ichor_cost : 10,
    cooldown : 30,
    physical : _lang.attr.crush,
    elemental : _lang.attr.fire,
    blood_code_req : 'A21' // Queen's Claw
  },
  
  D20 : { // Feral Tenacity
    image : 'feral-tenacity',
    tree : _lang.tree.light,
    origin : 'A26',

    required : {
      wil : 7
    },

    ichor_cost : 10,
    cooldown : 30
  },
  
  
  // # COMMUNAL GIFTS #
  E0 : { // Reckless Abandon
    image : 'reckless-abandon',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E1 : { // Lipinus Vita
    image : 'lupinus-vita',
    tree : _lang.tree.light,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E2 : { // Conviction Spike
    image : 'conviction-spike',
    tree : _lang.tree.light,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E3 : { // Blood Awakening
    image : 'blood-awakening',
    tree : _lang.tree.light,

    ichor_cost : 24,
    cooldown : 30
  },
  
  E4 : { // Fatal Surge
    image : 'fatal-surge',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  E5 : { // Ephemeral Refrain
    image : 'ephemeral-refrain',
    tree : _lang.tree.dark,

    ichor_cost : 20,
    cooldown : 30
  },
  
  
  // # MISC #
  F0 : { // Restorative Offering
    image : 'restorative-offering',
    tree : _lang.tree.light,

    ichor_cost : 2,
    cooldown : 15
  },
  
  F1 : { // Sympathetic Boon
    image : 'sympathetic-boon',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },
    
    ichor_cost : 2,
    cooldown : 15
  },
  
  F2 : { // Auto Heal
    image : 'auto-heal',
    tree : _lang.tree.light,
    origin : 'A30',

    ichor_cost : 10,
    cooldown : 30,
    blood_code_req : 'A30' // Demeter
  },
  
  F3 : { // Guardian Aid
    image : 'guardian-aid',
    tree : _lang.tree.light,
    origin : 'A33',
    dlc : 1,

    ichor_cost : 2,
    cooldown : 15,
    blood_code_req : 'A33' // Astrea
  },
  
  F4 : { // Cleansing Light
    image : 'cleansing-light',
    tree : _lang.tree.light,
    origin : 'A0',

    required : {
      mnd : 5,
      vit : 6
    },

    ichor_cost : 10,
    cooldown : 10
  },
  
  F5 : { // Regenerator
    image : 'regenerator',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 5,
    cooldown : 5
  },
  
  F6 : { // Venom Removal
    image : 'venom-removal',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F7 : { // Stun Removal
    image : 'stun-removal',
    tree : _lang.tree.light,
    origin : 'A8',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F8 : { // Inhibit Removal
    image : 'inhibit-removal',
    tree : _lang.tree.light,
    origin : 'A25',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F9 : { // Slow Removal
    image : 'slow-removal',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F10 : { // Leak Removal
    image : 'leak-removal',
    tree : _lang.tree.light,
    origin : 'A18',

    required : {
      mnd : 4
    },

    ichor_cost : 2,
    cooldown : 2
  },
  
  F11 : { // Panacea's Essence
    image : 'panaceas-essence',
    tree : _lang.tree.light,
    origin : 'A15',

    required : {
      mnd : 7
    },

    ichor_cost : 3,
    cooldown : 5
  },
  
  F12 : { // Blood Sacrifice
    image : 'blood-sacrifice',
    tree : _lang.tree.dark,
    origin : 'A6',

    required : {
      wil : 5
    },

    ichor_cost : '0',
    cooldown : 2
  },
  
  F13 : { // Disremember
    image : 'disremember',
    tree : _lang.tree.light,
    origin : 'A30',

    required : {
      mnd : 5,
      wil : 5
    },

    ichor_cost : 10,
    cooldown : 90
  },
  
  F14 : { // Floating Light
    image : 'floating-light',
    tree : _lang.tree.light,
    origin : 'A8',

    ichor_cost : 1,
    cooldown : 2
  },
  
  F15 : { // Vivification
    image : 'vivification',
    tree : _lang.tree.light,
    origin : 'A7',

    required : {
      mnd : 4
    },

    ichor_cost : 10,
    cooldown : 5
  },
  
  F16 : { // Nightstalker
    image : 'nightstalker',
    tree : _lang.tree.light,
    origin : 'A11',

    required : {
      dex : 5,
      for : 5
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  F17 : { // Night Fog Veil
    image : 'night-fog-veil',
    tree : _lang.tree.light,
    origin : 'A24',

    required : {
      dex : 7,
      wil : 4,
      for : 7
    },

    ichor_cost : 6,
    cooldown : 5
  },
  
  F18 : { // Spoils Spotter
    image : 'spoils-spotter',
    tree : _lang.tree.light,
    origin : 'A2',

    ichor_cost : 2,
    cooldown : 5
  },
  
  F19 : { // Active IFF
    image : 'active-iff',
    tree : _lang.tree.light,
    origin : 'A6',

    ichor_cost : 1,
    cooldown : 5
  },
  
  F20 : { // Treasure Tracker
    image : 'treasure-tracker',
    tree : _lang.tree.light,
    origin : 'A18',

    ichor_cost : 2,
    cooldown : 5
  },
  
  F21 : { // Prize Perception
    image : 'prize-perception',
    tree : _lang.tree.light,
    origin : 'A27',

    ichor_cost : 4,
    cooldown : 5
  },
  
  F22 : { // Severing Abyss
    image : 'severing-abyss',
    tree : _lang.tree.skill,
    origin : 'A24',
    
    weapon_req : ['A', 'C', 'E'], // letter refers to weapon group (see weapon list)
    
    ichor_cost : 6,
    cooldown : 15
  },
  
  F23 : { // Phantom Assault
    image : 'phantom-assault',
    tree : _lang.tree.skill,
    origin : 'A5',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 3,
    cooldown : 8
  },
  
  F24 : { // Circulating Pulse
    image : 'circulating-pulse',
    tree : _lang.tree.skill,
    origin : 'A0',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 3,
    cooldown : 6
  },
  
  F25 : { // Legion Punisher
    image : 'legion-punisher',
    tree : _lang.tree.skill,
    origin : 'A17',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F26 : { // Fusillade Rondo
    image : 'fusillade-rondo',
    tree : _lang.tree.skill,
    origin : 'A12',

    weapon_req : ['E'],

    ichor_cost : 7,
    cooldown : 8
  },
  
  F27 : { // Triple Annihilator
    image : 'triple-annihilator',
    tree : _lang.tree.skill,
    origin : 'A1',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F28 : { // Dragon Lunge
    image : 'dragon-lunge',
    tree : _lang.tree.skill,
    origin : 'A4',

    weapon_req : ['B', 'D'],

    ichor_cost : 6,
    cooldown : 15
  },
  
  F29 : { // Chariot Rush
    image : 'chariot-rush',
    tree : _lang.tree.skill,
    origin : 'A19',

    weapon_req : ['C'],

    ichor_cost : 4,
    cooldown : 9
  },
  
  F30 : { // Shifting Hollow
    image : 'shifting-hollow',
    tree : _lang.tree.skill,
    origin : 'A2',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 1,
    cooldown : '0.5'
  },
  
  F31 : { // Grave Knocker
    image : 'grave-knocker',
    tree : _lang.tree.skill,
    origin : 'A16',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 3,
    cooldown : 5
  },
  
  F32 : { // Swallow Cutter
    image : 'swallow-cutter',
    tree : _lang.tree.skill,
    origin : 'A8',

    weapon_req : ['B', 'D'],

    ichor_cost : 5,
    cooldown : 10
  },
  
  F33 : { // Vanishing Hollow
    image : 'vanishing-hollow',
    tree : _lang.tree.skill,
    origin : 'A25',

    weapon_req : ['A', 'B', 'C', 'D', 'E'],

    ichor_cost : 2,
    cooldown : 5
  },
  
  F34 : { // Tormenting Blast
    image : 'tormenting-blast',
    tree : _lang.tree.skill,
    origin : 'A10',

    weapon_req : ['B', 'D'],

    ichor_cost : 6,
    cooldown : 6
  },
  
  F35 : { // Shadow Assault
    image : 'shadow-assault',
    tree : _lang.tree.skill,
    origin : 'A11',

    weapon_req : ['A', 'C', 'E'],

    ichor_cost : 4,
    cooldown : 6
  }
};


// # 4. WEAPONS #
// Group A = One-handed Swords
// Group B = Two-handed Swords
// Group C = Halberds
// Group D = Hammers
// Group E = Bayonets
CodeVeinBuilder.data.weapon = {
  // # ONE-HANDED SWORDS #
  A0 : { // Queenslayer Blade
    image : 'queenslayer-blade',
    
    weight : 35,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },

  A1 : { // Pipe of Thralldom
    image : 'pipe-of-thralldom',
    
    weight : 5,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  A2 : { // Broadsword
    image : 'broadsword',
    
    weight : 43,

    scaling : {
      str : 6,
      dex : 5
    },

    required : {
      str : 4
    }
  },
  
  A3 : { // Hanemukuro
    image : 'hanemukuro',
    
    weight : 32,

    scaling : {
      str : 5,
      dex : 8
    },

    required : {
      str : 3,
      dex : 6
    }
  },
  
  A4 : { // Enduring Crimson
    image : 'enduring-crimson',
    
    weight : 34,

    scaling : {
      str : 7,
      dex : 7
    },

    required : {
      str : 5,
      dex : 5
    }
  },
  
  A5 : { // Machete
    image : 'machete',
    
    weight : 46,

    scaling : {
      str : 7,
      dex : 5
    },

    required : {
      str : 5,
      dex : 3
    }
  },
  
  A6 : { // Argent Wolf Blade
    image : 'argent-wolf-blade',
    
    weight : 35,

    scaling : {
      str : 5,
      dex : 5,
      mnd : 2,
      wil : 3
    },

    required : {
      str : 3,
      dex : 3
    }
  },
  
  A7 : { // Blazing Claw
    image : 'blazing-claw',
    
    weight : 28,

    scaling : {
      str : 5,
      dex : 9,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 3,
      dex : 7,
      mnd : 3,
      wil : 5
    }
  },
  
  A8 : { // Iceblood
    image : 'iceblood',
    
    weight : 17,

    scaling : {
      str : 6,
      dex : 8,
      mnd : 7,
      wil : 5
    },

    required : {
      str : 4,
      dex : 6,
      mnd : 5,
      wil : 3
    }
  },
  
  A9 : { // Sunset Sword
    image : 'sunset-sword',
    
    weight : 30,

    scaling : {
      str : 5,
      dex : 4
    },

    required : {
      str : 3
    }
  },
  
  A10 : { // Black Saber
    image : 'black-saber',
    
    weight : 48,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  A11 : { // Executioner
    image : 'executioner',
    
    weight : 38,

    scaling : {
      str : 6,
      dex : 9,
      mnd : 5,
      wil : 5
    },

    required : {
      str : 4,
      dex : 7,
      mnd : 3,
      wil : 3
    }
  },
  
  A12 : { // Lost Broadsword
    image : 'lost-broadsword',
    
    weight : 40,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4,
      dex : 3
    }
  },
  
  A13 : { // Crimson Longsword
    image : 'crimson-longsword',
    dlc : 1,
    
    weight : 30,

    scaling : {
      str : 5,
      dex : 5,
      mnd : 5,
      wil : 6
    },

    required : {
      str : 3,
      dex : 3,
      mnd : 3,
      wil : 4
    }
  },
  
  
  // # TWO-HANDED SWORDS #
  B0 : { // Queenslayer Greatsword
    image : 'queenslayer-greatsword',
    
    weight : 73,

    scaling : {
      str : 7,
      dex : 4
    },

    required : {
      str : 5
    }
  },
  
  B1 : { // Zweihander
    image : 'zweihander',
    
    weight : 87,

    scaling : {
      str : 7,
      dex : 2
    },

    required : {
      str : 5
    }
  },
  
  B2 : { // Nagimukuro
    image : 'nagimukuro',
    
    weight : 75,

    scaling : {
      str : 6,
      dex : 7
    },

    required : {
      str : 4,
      dex : 5
    }
  },
  
  B3 : { // Oni Bane
    image : 'oni-bane',
    
    weight : 78,

    scaling : {
      str : 9,
      dex : 1
    },

    required : {
      str : 7
    }
  },
  
  B4 : { // Warped Blade
    image : 'warped-blade',
    
    weight : 72,

    scaling : {
      str : 7,
      dex : 4,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 5
    }
  },
  
  B5 : { // Black Great Sword
    image : 'black-great-sword',
    
    weight : 70,

    scaling : {
      str : 8,
      dex : 3,
      mnd : 4,
      wil : 5
    },

    required : {
      str : 6,
      wil : 3
    }
  },
  
  B6 : { // Argent Wolf King's Blade
    image : 'argent-wolf-kings-blade',
    
    weight : 88,

    scaling : {
      str : 9,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 7,
      mnd : 3
    }
  },
  
  B7 : { // Judgement Edge
    image : 'judgement-edge',
    
    weight : 86,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  B8 : { // Sunset Great Sword
    image : 'sunset-great-sword',
    
    weight : 65,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4
    }
  },
  
  B9 : { // Lost Zweihander
    image : 'lost-zweihander',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 3
    },

    required : {
      str : 4
    }
  },
  
  B10 : { // Argent Wolf Brand
    image : 'argent-wolf-brand',
    
    weight : 82,

    scaling : {
      str : 9,
      dex : 1
    },

    required : {
      str : 7
    }
  },
  
  B11 : { // Blanched Greatsword
    image : 'blanched-greatsword',
    dlc : 1,
    
    weight : 90,

    scaling : {
      str : 9
    },

    required : {
      str : 7
    }
  },
  
  
  // # HALBERDS #
  C0 : { // Queenslayer Halberd
    image : 'queenslayer-halberd',
    
    weight : 60,

    scaling : {
      str : 5,
      dex : 5
    },

    required : {
      str : 3,
      dex : 3
    }
  },
  
  C1 : { // Bardiche
    image : 'bardiche',
    
    weight : 52,

    scaling : {
      str : 6,
      dex : 6
    },

    required : {
      str : 4,
      dex : 4
    }
  },
  
  C2 : { // Impaler
    image : 'impaler',
    
    weight : 47,

    scaling : {
      str : 4,
      dex : 7
    },

    required : {
      dex : 5
    }
  },
  
  C3 : { // Garnet Splitter
    image : 'garnet-splitter',
    
    weight : 54,

    scaling : {
      str : 5,
      dex : 8,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 3,
      dex : 6,
      mnd : 3
    }
  },
  
  C4 : { // Dammerung
    image : 'dammerung',
    
    weight : 57,

    scaling : {
      str : 7,
      dex : 5,
      mnd : 6,
      wil : 4,
      vit : 0,
      for : 0
    },

    required : {
      str : 5,
      dex : 3,
      mnd : 4
    }
  },
  
  C5 : { // Black Halberd
    image : 'black-halberd',
    
    weight : 48,

    scaling : {
      str : 3,
      dex : 9,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 1,
      dex : 7,
      mnd : 3
    }
  },
  
  C6 : { // Assassin's Sickle
    image : 'assassins-sickle',
    
    weight : 42,

    scaling : {
      str : 5,
      dex : 9,
      mnd : 4,
      wil : 6
    },

    required : {
      str : 3,
      dex : 7,
      wil : 4
    }
  },
  
  C7 : { // Sunset Halberd
    image : 'sunset-halberd',
    
    weight : 58,

    scaling : {
      str : 4,
      dex : 5
    },

    required : {
      dex : 3
    }
  },
  
  C8 : { // Lost Bardiche
    image : 'lost-bardiche',
    
    weight : 50,

    scaling : {
      str : 5,
      dex : 4
    },

    required : {
      str : 3
    }
  },
  
  C9 : { // Obliterator Axe
    image : 'obliterator-axe',
    
    weight : 70,

    scaling : {
      str : 9,
      dex : 3
    },

    required : {
      str : 7
    }
  },
  
  C10 : { // Argent Wolf Poleaxe
    image : 'argent-wolf-poleaxe',
    
    weight : 66,

    scaling : {
      str : 1,
      dex : 9
    },

    required : {
      dex : 7
    }
  },
  
  C11 : { // Cerulean Spear
    image : 'cerulean-spear',
    dlc : 1,
    
    weight : 45,

    scaling : {
      str : 5,
      dex : 4,
      mnd : 5,
      wil : 6
    },

    required : {
      str : 3,
      mnd : 3,
      wil : 4
    }
  },
  
  
  // # HAMMERS #
  D0 : { // Queenslayer Hammer
    image : 'queenslayer-hammer',
    
    weight : 74,

    scaling : {
      str : 8,
      dex : 3
    },

    required : {
      str : 6
    }
  },
  
  D1 : { // Hammer of Thralldom
    image : 'hammer-of-thralldom',
    
    weight : 95,

    scaling : {
      str : 8,
      dex : 3
    },

    required : {
      str : 6
    }
  },
  
  D2 : { // Juggernaut Sledgehammer
    image : 'juggernaut-sledgehammer',
    
    weight : 76,

    scaling : {
      str : 9,
      dex : 4
    },

    required : {
      str : 7
    }
  },
  
  D3 : { // Heavy Axe
    image : 'heavy-axe',
    
    weight : 55,

    scaling : {
      str : 7,
      dex : 1
    },

    required : {
      str : 5
    }
  },
  
  D4 : { // Impulse Anchor
    image : 'impulse-anchor',
    
    weight : 78,

    scaling : {
      str : 6,
      dex : 2
    },

    required : {
      str : 4
    }
  },
  
  D5 : { // Huge Hammer
    image : 'huge-hammer',
    
    weight : 87,

    scaling : {
      str : 9,
      dex : 3
    },

    required : {
      str : 7
    }
  },
  
  D6 : { // Argent Wolf Warhammer
    image : 'argent-wolf-warhammer',
    
    weight : 84,

    scaling : {
      str : 9,
      dex : 5
    },

    required : {
      str : 7,
      dex : 3
    }
  },
  
  D7 : { // Tyrant's Labrys
    image : 'tyrants-labrys',
    
    weight : 58,

    scaling : {
      str : 9,
      dex : 4,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 7
    }
  },
  
  D8 : { // Sunset Hammer
    image : 'sunset-hammer',
    
    weight : 68,

    scaling : {
      str : 6,
      dex : 4
    },

    required : {
      str : 4
    }
  },
  
  D9 : { // Burned Warhammer
    image : 'burned-warhammer',
    
    weight : 72,

    scaling : {
      str : 8,
      dex : 3,
      mnd : 5,
      wil : 4
    },

    required : {
      str : 6,
      mnd : 3
    }
  },
  
  D10 : { // Lost Heavy Axe
    image : 'lost-heavy-axe',
    
    weight : 50,

    scaling : {
      str : 9,
      dex : 5
    },

    required : {
      str : 7,
      dex : 3
    }
  },
  
  
  // # BAYONETS #
  E0 : { // Queenslayer Bayonet
    image : 'queenslayer-bayonet',
    
    weight : 15,

    scaling : {
      dex : 9,
      mnd : 6,
      wil : 7
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  E1 : { // Brodiaea
    image : 'brodiaea',
    
    weight : 10,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 7
    },

    required : {
      dex : 6,
      mnd : 3,
      wil : 5
    }
  },
  
  E2 : { // Riot Breaker
    image : 'riot-breaker',
    
    weight : 22,

    scaling : {
      str : 7,
      dex : 6,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 4,
      dex : 3,
      mnd : 3,
      wil : 5
    }
  },
  
  E3 : { // Bayonet
    image : 'bayonet',
    
    weight : 14,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 8
    },

    required : {
      dex : 5,
      mnd : 3,
      wil : 6
    }
  },
  
  E4 : { // Rubellite Piercer
    image : 'rubellite-piercer',
    
    weight : 18,

    scaling : {
      dex : 9,
      mnd : 6,
      wil : 6
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  E5 : { // Argent Wolf Bayonet
    image : 'argent-wolf-bayonet',
    
    weight : 27,

    scaling : {
      dex : 7,
      mnd : 3,
      wil : 8
    },

    required : {
      dex : 5,
      wil : 6
    }
  },
  
  E6 : { // Burning Disaster
    image : 'burning-disaster',
    
    weight : 33,

    scaling : {
      str : 8,
      dex : 9,
      mnd : 7,
      wil : 2
    },

    required : {
      str : 6,
      dex : 7,
      mnd : 5
    }
  },
  
  E7 : { // Sunset Bayonet
    image : 'sunset-bayonet',
    
    weight : 8,

    scaling : {
      dex : 6,
      mnd : 5,
      wil : 3
    },

    required : {
      dex : 3,
      wil : 3
    }
  },
  
  E8 : { // Black Bayonet
    image : 'black-bayonet',
    
    weight : 24,

    scaling : {
      dex : 8,
      mnd : 3,
      wil : 8
    },

    required : {
      dex : 6,
      wil : 6
    }
  },
  
  E9 : { // Libertador
    image : 'libertador',
    
    weight : 20,

    scaling : {
      dex : 6,
      mnd : 7,
      wil : 7
    },

    required : {
      dex : 4,
      mnd : 5,
      wil : 5
    }
  },
  
  E10 : { // Lost Bayonet
    image : 'lost-bayonet',
    
    weight : 11,

    scaling : {
      dex : 5,
      mnd : 3,
      wil : 5
    },

    required : {
      wil : 3
    }
  }
};


// # 5. BLOOD VEILS #
// Group A = Orge (claw)
// Group B = Stinger (tail)
// Group C = Hounds
// Group D = Ivy
CodeVeinBuilder.data.blood_veil = {
  // # OGRE #
  A0 : { // Night Claw
    image : 'night-claw',
    
    weight : 30,

    scaling : {
      dex : 9,
      mnd : 5,
      wil : 5
    },

    required : {
      dex : 4,
      mnd : 3,
      wil : 3
    }
  },
  
  A1 : { // Noble Silver
    image : 'noble-silver',
    
    weight : 22,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 9,
      wil : 3
    },

    required : {
      mnd : 7
    }
  },

  A2 : { // GXM Variant
    image : 'gxm-variant',
    
    weight : 63,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 6,
      wil : 3
    },

    required : {
      str : 4,
      mnd : 4
    }
  },
  
  A3 : { // Blackblood Liberator
    image : 'blackblood-liberator',
    
    weight : 49,

    scaling : {
      str : 3,
      mnd : 4,
      wil : 9
    },

    required : {
      wil : 7
    }
  },
  
  A4 : { // Queenslayer Claw
    image : 'queenslayer-claw',
    
    weight : 55,

    scaling : {
      dex : 5,
      mnd : 6,
      wil : 6
    },

    required : {
      dex : 3,
      mnd : 4,
      wil : 4
    }
  },
  
  A5 : { // Venous Claw
    image : 'venous-claw',
    dlc : 1,
    
    weight : 18,

    scaling : {
      str : 5,
      dex : 8,
      mnd : 6,
      wil : 8
    },

    required : {
      str : 3,
      dex : 6,
      mnd : 4,
      wil : 6
    }
  },
  
  
  // # STINGER #
  B0 : { // Night Spear
    image : 'night-spear',
    
    weight : 65,

    scaling : {
      str : 2,
      dex : 6,
      mnd : 6,
      wil : 4
    },

    required : {
      dex : 4,
      mnd : 4
    }
  },
  
  B1 : { // Raven Fatigues
    image : 'raven-fatigues',
    
    weight : 38,

    scaling : {
      str : 5,
      dex : 2,
      mnd : 4,
      wil : 8
    },

    required : {
      str : 3,
      wil : 8
    }
  },
  
  B2 : { // Winter Mantle
    image : 'winter-mantle',
    
    weight : 74,

    scaling : {
      str : 1,
      dex : 4,
      mnd : 8,
      wil : 4
    },

    required : {
      mnd : 6
    }
  },
  
  B3 : { // Silver Garb
    image : 'silver-garb',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 6,
      wil : 3
    },

    required : {
      str : 4,
      mnd : 4
    }
  },
  
  B4 : { // Queenslayer Thorn
    image : 'queenslayer-thorn',
    
    weight : 47,

    scaling : {
      str : 3,
      dex : 2,
      mnd : 6,
      wil : 4
    },

    required : {
      mnd : 4
    }
  },
  
  
  // # HOUNDS #
  C0 : { // Night Fang
    image : 'night-fang',
    
    weight : 60,

    scaling : {
      str : 6,
      dex : 1,
      mnd : 4,
      wil : 4
    },

    required : {
      str : 4
    }
  },
  
  C1 : { // Blue Hounds
    image : 'blue-hounds',
    
    weight : 53,

    scaling : {
      dex : 6,
      mnd : 5,
      wil : 5
    },

    required : {
      dex : 4,
      mnd : 3,
      wil : 3
    }
  },
  
  C2 : { // GXL Defender
    image : 'gxl-defender',
    
    weight : 88,

    scaling : {
      str : 2,
      dex : 7,
      mnd : 6,
      wil : 3
    },

    required : {
      dex : 5,
      mnd : 4
    }
  },
  
  C3 : { // Hedgehog Fort
    image : 'hedgehog-fort',
    
    weight : 80,

    scaling : {
      str : 6,
      dex : 3,
      mnd : 5,
      wil : 8
    },

    required : {
      str : 4,
      mnd : 3,
      wil : 6
    }
  },
  
  C4 : { // 
    image : 'white-vestment',
    
    weight : 65,

    scaling : {
      dex : 5,
      mnd : 8,
      wil : 5
    },

    required : {
      dex : 3,
      mnd : 6,
      wil : 3
    }
  },
  
  
  // # IVY #
  D0 : { // Night Thorn
    image : 'night-thorn',
    
    weight : 24,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 6,
      wil : 6
    },

    required : {
      mnd : 4,
      wil : 4
    }
  },
  
  D1 : { // Ivory Grace
    image : 'ivory-grace',
    
    weight : 12,

    scaling : {
      dex : 5,
      mnd : 8,
      wil : 8
    },

    required : {
      dex : 3,
      mnd : 6,
      wil : 6
    }
  },
  
  D2 : { // GXH Assault
    image : 'gxh-assault',
    
    weight : 40,

    scaling : {
      str : 7,
      dex : 1,
      mnd : 5,
      wil : 7
    },

    required : {
      str : 5,
      mnd : 3,
      wil : 5
    }
  },
  
  D3 : { // Prayer Shawl
    image : 'prayer-shawl',
    
    weight : 48,

    scaling : {
      str : 4,
      dex : 4,
      mnd : 6,
      wil : 3
    },

    required : {
      mnd : 4
    }
  },
  
  D4 : { // Suicide Spur
    image : 'suicide-spur',
    
    weight : 35,

    scaling : {
      str : 4,
      dex : 2,
      mnd : 6,
      wil : 9
    },

    required : {
      mnd : 4,
      wil : 7
    }
  }
};


// # 6. TRANSFORMATIONS #
// Group A = Physical (affects weight, damage, etc..)
// Group B = Elemental
// Group C = Ailments
CodeVeinBuilder.data.transform = {
  // # PHYSICAL #
  A0 : { // Alleviation
    image : 'alleviation',
    dec_weight : 1.25
  },

  A1 : { // Fortification
    image : 'fortification',
    inc_weight : {
      weapon : 1.15,
      blood_veil : 1.10
    }
  },
  
  A2 : { // Intensification
    image : 'intensification'
  },

  A3 : { // Gifts
    image : 'gifts'
  },
  
  A4 : { // Devour
    image : 'devour'
  },

  
  // # ELEMENTAL #
  B0 : { // Fire
    image : 'fire'
  },

  B1 : { // Ice
    image : 'ice'
  },

  B2 : { // Lightning
    image : 'lightning'
  },
  
  
  // # AILMENTS #
  C0 : { // Venom
    image : 'venom'
  },

  C1 : { // Stun
    image : 'stun'
  },
  
  C2 : { // Inhibit
    image : 'inhibit'
  },

  C3 : { // Slow
    image : 'slow'
  }
};


// # 7. DATA SETUP #
// Sets up default values and properties that are located in _lang.data
(function () {
  var i, k, data, lang, scaling;
  
  for (i in CodeVeinBuilder.data) {
    if (i != 'dummy') { // ignore dummy data
      for (k in CodeVeinBuilder.data[i]) {
        data = CodeVeinBuilder.data[i][k];
        lang = _lang.data[i][k];
        
        if (lang.name) data.name = lang.name;
        if (lang.desc) data.desc = lang.desc;
        if (lang.owner) data.owner = lang.owner;
        if (lang.usage_req) data.usage_req = lang.usage_req;
        
        // apply 0 stat scaling for comparisons
        if (/weapon|blood_veil/.test(i)) {
          scaling = data.scaling;
          
          if (!scaling.str) scaling.str = 0;
          if (!scaling.dex) scaling.dex = 0;
          if (!scaling.mnd) scaling.mnd = 0;
          if (!scaling.wil) scaling.wil = 0;
          if (!scaling.vit) scaling.vit = 0;
          if (!scaling.for) scaling.for = 0;
        }
      }
    }
  }
}());