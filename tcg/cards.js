if (!window.cards)
  window.cards = [
    {
      code: "ven1",
      name: "Master Ventus",
      rarity: "Promo",
      attribute: "Speed",
      cp: 16,
      strength: 5,
      defense: 9,
      champTotal: 30,
      text: "Your “Aero” sleights have split. (Round down odd number values.)",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "tera1",
      name: "Master Terra",
      rarity: "Promo",
      attribute: "Power",
      cp: 10,
      strength: 6,
      defense: 14,
      champTotal: 30,
      text: "Terra’s attacks have Piercing.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "aqua1",
      name: "Master Aqua",
      rarity: "Promo",
      attribute: "Magic",
      cp: 12,
      strength: 4,
      defense: 14,
      champTotal: 30,
      text: "When one of your “Blizzard” forms expires, draw a card.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "sora1",
      name: "Sora, At Level 1 Again",
      rarity: "Promo",
      attribute: "Speed",
      cp: 12,
      strength: 4,
      defense: 14,
      champTotal: 30,
      text: "Your sleights that total 3 or less have piercing.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "riku1",
      name: "Riku, Dark Scion",
      rarity: "Promo",
      attribute: "Power",
      cp: 12,
      strength: 5,
      defense: 13,
      champTotal: 30,
      text: "“Dark” sleights you use that are not clashed deal 1 extra damage.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "kai1",
      name: "Kairi, Left Behind",
      rarity: "Promo",
      attribute: "Magic",
      cp: 14,
      strength: 3,
      defense: 13,
      champTotal: 30,
      text: "When you draw a card, if Kairi is in your back row, your active champion heals 1.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "grav1",
      name: "Gravitas, Misery Incarnate",
      rarity: "Promo",
      attribute: "Speed",
      cp: 13,
      strength: 4,
      defense: 13,
      champTotal: 30,
      text: "At each player’s build phase, if their active champion has less than 13 defense, that champion takes 1 damage.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "temp1",
      name: "Temporius, Eternity Crafter",
      rarity: "Promo",
      attribute: "Magic",
      cp: 17,
      strength: 3,
      defense: 10,
      champTotal: 30,
      text: "When Temporius deals damage with an attack, the attacked player discards a card.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "art1",
      name: "Artis, Remnant Artificer",
      rarity: "Promo",
      attribute: "Power",
      cp: 8,
      strength: 6,
      defense: 16,
      champTotal: 30,
      text: "When you clash with a 0 cost card, Artis heals 2.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "aqua2",
      name: "Aqua, Headmaster",
      rarity: "Champion",
      attribute: "Magic",
      cp: 14,
      strength: 3,
      defense: 15,
      champTotal: 32,
      text: "When you draw a card, each of your backrow champions heal 1.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "salv1",
      name: "Salvare, Brash Conquerer",
      rarity: "Champion",
      attribute: "Power",
      cp: 11,
      strength: 5,
      defense: 16,
      champTotal: 32,
      text: "When you play a card in your provision zone, Any sleight you use this turn gains piercing.",
      cardType: "Champion",
      specialText: "",
      specialType: "",
    },
    {
      code: "fir",
      name: "Fire",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Sleights deal 1 extra damage.",
      specialType: "Form",
    },
    {
      code: "daf",
      name: "Dark Fire",
      rarity: "UC Odd",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Your opponent discards a card.",
      specialType: "Clash",
    },
    {
      code: "bli",
      name: "Blizzard",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Clash Sleights value increases by 1.",
      specialType: "Form",
    },
    {
      code: "dab",
      name: "Dark Blizzard",
      rarity: "UC Odd",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "increase the Clash value by 1.",
      specialType: "Clash",
    },
    {
      code: "thu",
      name: "Thunder",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Piercing",
      cardType: "Command",
      specialText: "Champion attacks deal 2 extra damage.",
      specialType: "Form",
    },
    {
      code: "dat",
      name: "Dark Thunder",
      rarity: "UC Odd",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "deal 3 damage to the opponent’s active champion.",
      specialType: "Clash",
    },
    {
      code: "com",
      name: "Combo Plus",
      rarity: "UC Even",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Split",
      cardType: "Command",
      specialText: "Another card in the sleight gains split.",
      specialType: "Sleight",
    },
    {
      code: "win",
      name: "Wind Raid",
      rarity: "UC Odd",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Piercing",
      cardType: "Command",
      specialText: "Deal 2 damage to a champion on your opponent’s back row.",
      specialType: "Clash",
    },
    {
      code: "dad",
      name: "Dark Dive",
      rarity: "Rare 6-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "When your active champion’s defense would hit 0, instead it becomes 1.",
      specialType: "Form",
    },
    {
      code: "bar",
      name: "Barrier",
      rarity: "UC Even",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Defending",
      cardType: "Command",
      specialText:
        "When your active champion’s defense would hit 0, instead it becomes 1.",
      specialType: "Form",
    },
    {
      code: "pro",
      name: "Protect",
      rarity: "all 1-9",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Defending",
      cardType: "Command",
      specialText: "Your active champion heals 2.",
      specialType: "Clash",
    },
    {
      code: "cur",
      name: "Cure",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Healing",
      cardType: "Command",
      specialText: "A champion on your back row heals 2.",
      specialType: "Sleight",
    },
    {
      code: "coa",
      name: "Cover Ally",
      rarity: "all 1-9",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Healing",
      cardType: "Command",
      specialText: "Your backrow champions each heal 2.",
      specialType: "Clash",
    },
    {
      code: "son",
      name: "Sonic Blade",
      rarity: "all 1-9",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "deal 2 damage to the opponent’s active champion.",
      specialType: "Sleight",
    },
    {
      code: "ear",
      name: "Earth",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Increase Sleight value by 1.",
      specialType: "Sleight",
    },
    {
      code: "aer",
      name: "Aero",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "reduce incoming damage by 2.",
      specialType: "Form",
    },
    {
      code: "tpb",
      name: "Triple Blizzaga",
      rarity: "Rare 6-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "deal 2 damage to each of the opponent’s backrow champions.",
      specialType: "Sleight",
    },
    {
      code: "gra",
      name: "Gravity",
      rarity: "UC Even",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If the clash fails, your active champion takes 3 less damage.",
      specialType: "Clash",
    },
    {
      code: "dor",
      name: "Dodge Roll",
      rarity: "all 1-9",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "On your next turn, you may rotate your Champions before damage.",
      specialType: "Form",
    },
    {
      code: "bre",
      name: "Breach",
      rarity: "all 1-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Piercing",
      cardType: "Command",
      specialText: "Another card in the sleight gains piercing.",
      specialType: "Sleight",
    },
    {
      code: "cha",
      name: "Charge",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Defending",
      cardType: "Command",
      specialText: "Draw a card.",
      specialType: "Clash",
    },
    {
      code: "cle",
      name: "Cleanse",
      rarity: "all 1-9",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Shuffle your discard into your deck.",
      specialType: "Clash",
    },
    {
      code: "gua",
      name: "Guard",
      rarity: "all 1-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Defending",
      cardType: "Command",
      specialText: "Another card in the clash gains Defending.",
      specialType: "Clash",
    },
    {
      code: "str",
      name: "Strike Raid",
      rarity: "all 1-9",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If the clash fails, deal 2 to the opponent’s active champion.",
      specialType: "Clash",
    },
    {
      code: "quh",
      name: "Quick Hit",
      rarity: "UC Odd",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Piercing",
      cardType: "Command",
      specialText:
        "If this card was used in a Piercing Sleight with other commands, draw a card.",
      specialType: "Clash",
    },
    {
      code: "dar",
      name: "Dark Raid",
      rarity: "Rare 6+ Even",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "Split",
      cardType: "Command",
      specialText:
        "If other “dark” cards are in the clash, remove the lowest value from the incoming sleight.",
      specialType: "Clash",
    },
    {
      code: "wrp",
      name: "Warp",
      rarity: "Rare 6+ Even",
      attribute: "Magic",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "When you rotate your Champions, draw a card.",
      specialType: "Form",
    },
    {
      code: "zan",
      name: "Zantetsuken",
      rarity: "Rare 6-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If every card in the sleight is a Power card and there are atleast 2 cards, the sleight gains Piercing.",
      specialType: "Sleight",
    },
    {
      code: "gaia",
      name: "Gaia Belt",
      rarity: 0,
      attribute: "",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Item",
      specialText: "Power champions deal 2 more damage with attacks.",
      specialType: "Item",
    },
    {
      code: "proc",
      name: "Protect Chain",
      rarity: 0,
      attribute: "",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Item",
      specialText: "Your active champion takes 1 less damage.",
      specialType: "Item",
    },
    {
      code: "noex",
      name: "No Exp",
      rarity: 0,
      attribute: "",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Item",
      specialText:
        "Your champion’s strength is 1. Draw an additional card in your draw step.",
      specialType: "Item",
    },
    {
      code: "morn",
      name: "Morningstar",
      rarity: 0,
      attribute: "",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Item",
      specialText: "Whenever you draw a card, your active champion heals 1",
      specialType: "Item",
    },
    {
      code: "eai",
      name: "Earth Impact",
      rarity: "UC Odd",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If another “Earth” command is in the sleight, increase Sleight value by 1.",
      specialType: "Sleight",
    },
    {
      code: "ars",
      name: "Ars Solem",
      rarity: "Rare 6-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If another “Ars” command is in the sleight, the sleight gains Piercing.",
      specialType: "Sleight",
    },
    {
      code: "ara",
      name: "Ars Arcanum",
      rarity: "Rare 6+ Even",
      attribute: "Speed",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText:
        "If another “Ars” command is in the sleight, the sleight gains Split.",
      specialType: "Sleight",
    },
    {
      code: "sac",
      name: "Sacrifice",
      rarity: "Rare 6-9",
      attribute: "Power",
      cp: "",
      strength: "",
      defense: "",
      champTotal: 0,
      text: "",
      cardType: "Command",
      specialText: "Both active champions take 5 damage.",
      specialType: "Sleight",
    },
  ];