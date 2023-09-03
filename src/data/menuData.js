const menuData = [
  {
    section: "Salades",items: [
      { name: "Zeewier Salade", price: "€ 5.50" },
      { name: "Sake Butso", price: "€ 9.00" },
      { name: "Scampi Salade", price: "€ 9.00" },
      { name: "Zalm Avocado Salade", price: "€ 10.50" },
      { name: "Kanikama Salade (Krab)", price: "€ 9.00" },
      { name: "Mango Avocado Salade", price: "€ 8.00" },
    ],
  },
  {
    section: "Teriyaki",
    items: [{ name: "soep1", description: "tasty", price: "€ 10" }],
  },
  {
    section: "Combo",
    items: [
      {
        name: "Worldcup Speciaal",
        description:
          "World cup combo\n8 Dragon eys, 4 california, 4 pikante, 4 Kamikaze\n2 Drinks\nLoempia veggie",
        price: "€ 25",
      },
    ],
  },
  {
    section: "Soep",
    items: [
      {
        name: "Kip Soep",
        description: "kip,groenten, bouillon, noedels",
        price: "€ 5.50",
      },
      {
        name: "Groenten Soep",
        description: "Courgette, Brocoli, wortels, bonen",
        price: "€ 5",
      },
      { name: "Miso Soep", description: "miso,tofu, zeewier", price: "€ 5.50" },
      {
        name: "Wantan Soep (Varken) met noedels",
        description: "4wantan, groenten",
        price: "€ 7",
      },
      {
        name: "Tom Yam",
        description: "Zeevruchten,citroengras, limoenblaadjes, groenten",
        price: "€ 8",
      },
    ],
  },
  {
    section: "Dimsum",
    items: [
      { name: "Bonito Dimsum (kip)", price: "€ 7.00" },
      { name: "Edamame", price: "€ 5.00" },
      { name: "Dimsum Scampi", price: "€ 12.50" },
      { name: "Dimsum Kip", price: "€ 11.00" },
      { name: "Dimsum Veggie", price: "€ 5.50" },
      { name: "Dimsum Mix", price: "€ 13.00" },
    ],
  },
  {
    section: "Loempia",
    items: [
      { name: "Samosa Veggie", description: "(2 stuks)", price: "€ 5.00" },
      { name: "Loempia Kip", description: "(3 stuks)", price: "€ 6.00" },
      { name: "Loempia Veggie", description: "(6 Stuks)", price: "€ 5.00" },
    ],
  },
  {
    section: "Gyoza (Fried)",
    items: [
      { name: "Gyoza Mix (kip en scampi)", price: "€ 14.00" },
      { name: "Gyoza Bonito (kip)", price: "€ 13.00" },
      { name: "Gyoza Veggie", price: "€ 11.00" },
    ],
  },
  {
    section: "Tempura",
    items: [
      { name: "Tempura Scampi", price: "€ 14.00" },
      { name: "ZeeVruchten Tempura", price: "€ 15.00" },
      { name: "Zalm Crispy met Groenten", price: "€ 12.00" },
      {
        name: "Tempura Veggie",
        description: "Courgette, Aardapel, Aubergine",
        price: "€ 10.00",
      },
      {
        name: "Tempura Mix",
        description: "3 Scampi, Aubergine, Courgette, Aardapel",
        price: "€ 12.00",
      },
      { name: "Kip Crispy met Groenten", price: "€ 11.00" },
    ],
  },
  {
    section: "Yakitori",
    items: [
      {
        name: "Yakitori Zeevruchten (2 stuks met rijst en zeewier)",
        price: "€ 8.00",
      },
      { name: "Yakitori Kip (2 stuks met rijst en Zeewier)", price: "€ 8.00" },
    ],
  },
  {
    section: "Kinder Menu",
    items: [
      { name: "Kinder Noedels met Kip", price: "€ 6.00" },
      { name: "Curryworst met Frieten", price: "€ 6.50" },
      { name: "Vis-Sticks met Frieten", price: "€ 6.50" },
      { name: "Kinder Rijst met kip", price: "€ 6.00" },
      { name: "Mini KipFilet met Frieten", price: "€ 6.50" },
    ],
  },
  {
    section: "Sushi Combo",
    items: [
      {
        name: "Beginners Combo",
        description: "4 California, 4 kamikaze, 8 pikante roll",
        price: "€ 15.50",
      },
      {
        name: "Lovers Combo",
        description: "4 california, 4 kamikaze, 4 nigiri, 8 pikante roll",
        price: "€ 18.00",
      },
      {
        name: "Hoso Combo",
        description: "24 Hoso mix (Krab, Tamago, avocado en komkommer)",
        price: "€ 18.00",
      },
      {
        name: "Non-Vis Combo",
        description:
          "4 california, 4 tempura scampi, 4 tempu. kip, 6 dragon eyes kip",
        price: "€ 20.00",
      },
    ],
  },
  {
    section: "Special Combo",
    items: [
      {
        name: "Tonijn Combo",
        description: "(16 stuks) 4 in/out, 4 kamikaze, 4 nigiri, 4 sashimi",
        price: "€ 20.00",
      },
      {
        name: "Zalm/Tonijn Combo",
        description: "(16 stuks) 8 in/out, 4 nigiri, 4 sashimi",
        price: "€ 19.00",
      },
      {
        name: "Gefrituured Combo",
        description: "(32 stuks) Gefrituured Mix – Zalm, scampi en avocado",
        price: "€ 26.00",
      },
      {
        name: "Veggie Combo",
        description: "(24 stuks) Veggie in/out, Dragon Eyes Avocado",
        price: "€ 24.00",
      },
      {
        name: "Zalm Combo",
        description: "(16 stuks) 4 in/out , 4 kamikaze, 4 nigiri, 4 sashimi",
        price: "€ 18.00",
      },
    ],
  },
  {
    section: "Menu Boot",
    items: [
      {
        name: "Boni Maki Boot (2 person)",
        description:
          "44 Stuks - 4 california, 4 maki tempura, 4 pikante in/out, 8 leafy Boni, 4 maki zalm, 4 maki tona, 4 kamikaze zalm, 4 kamikaze tuna, 8 dragon eyes",
        price: "€ 50.00",
      },
      {
        name: "Boni Zalm Boot (2 person)",
        description:
          "40 Stuks - 4 Sashimi, 4 Nigiri, 8 kamikaze Zalm, 4 Maki Zalm, 4 california, 8 leafy Boni, 8 Dragon Eyes",
        price: "€ 45.00",
      },
      {
        name: "Bonito Boot (1 person)",
        description:
          "32 stuks - 4 nigiri, 4 sashimi, 4 pikante in/out, 4 california, 4 maki tempura, 4 kamikaze zalm, 8 dragon eyes",
        price: "€ 32.00",
      },
      {
        name: "Boni Boot (2 person)",
        description:
          "42 Stuks - 4 nigiri, 6 sashimi, 4 pikante in/out, 4 california, 4 maki tempura, 4 leafy Boni, 4 maki zalm, 4 maki tona, 8 dragon eyes",
        price: "€ 45.00",
      },
      {
        name: "Boni Deluxe (3 person)",
        description:
          "63 Stuks - 6 Nigiri Zalm/Tuna, 6 Sashimi Zalm/Tuna, 3 Sashimi Ebi, 4 Maki Zalm, 4 Maki Tuna, 4 Kamikaze Zalm, 4 pikante in/out, 4 california, 4 maki tempura, 8 leafy Boni, 16 dragon eyes",
        price: "€ 65.00",
      },
      {
        name: "Sushi Boot (1 person)",
        description:
          "28 stuks – 4 nigiri, 4 sashimi, 4 pikante in/out, 4 california, 4 maki tempura, 8 dragon eyes",
        price: "€ 27.00",
      },
      {
        name: "Boni Titanic (4 person)",
        description:
          "108 Stuks - 8 Nigiri Zalm/Tuna, 8 Sashimi Zalm/Tuna, 4 Sashimi Ebi, , 8 Maki Zalm, 8 Maki Tuna, 8 Kamikaze Zalm, 8 pikante in/out, 8 california, 8 maki tempura, 8 leafy Boni, 32 dragon eyes",
        price: "€ 99.00",
      },
      {
        name: "Titanic Deluxe (5-6 person)",
        description:
          "148 Stuks - 12 Nigiri Zalm/Tuna, 12 Sashimi Zalm/Tuna, 6 Sashimi Ebi, 6 Sashimi Zeebars, 12 Maki Zalm, 12 Maki Tuna, 8 Kamikaze Zalm, 12 pikante in/out, 8 california, 12 maki tempura, 16 leafy Boni, 32 dragon eye",
        price: "€ 140.00",
      },
    ],
  },
  {
    section: "Gefrituurd Roll",
    items: [
      { name: "Dragon Eyes Tonijn", price: "€ 7.00" },
      { name: "Dragon Eyes Scampi", price: "€ 7.00" },
      { name: "Dragon Eyes Avocado", price: "€ 6.00" },
      { name: "Dragon Eyes Kip", price: "€ 7.00" },
      { name: "Dragon Eyes Zalm", price: "€ 7.00" },
    ],
  },
  {
    section: "Maki Rolls",
    items: [
      {
        name: "Kamikaze Tuna",
        description: "(Tuna, tempura, avocado)",
        price: "€ 8.00",
      },
      {
        name: "Tempura Maki",
        description: "(Tempura Scampi, komkommer)",
        price: "€ 8.00",
      },
      {
        name: "Kip Tempura",
        description: "(Tempura kip, avocado)",
        price: "€ 7.50",
      },
      {
        name: "New York",
        description: "(Tempura Scampi, Avocado, krab, komkomer)",
        price: "€ 8.50",
      },
      {
        name: "Kamikaze Zalm",
        description: "(Zalm, tempura, avocado)",
        price: "€ 7.50",
      },
    ],
  },
  {
    section: "Special In/Out Rolls",
    items: [
      { name: "Tuna Avocado", price: "€ 8.50" },
      { name: "California Zalm", price: "€ 8.00" },
      { name: "California Scampi", price: "€ 8.50" },
      { name: "California Krab", price: "€ 8.50" },
      { name: "California Avocado", price: "€ 7.00" },
      { name: "California Mango", price: "€ 7.00" },
      {
        name: "Sexy Rolls",
        description:
          "Pikante Krokante Scampi getopt met paling, avocado en masago",
        price: "€ 12.00",
      },
      {
        name: "Dragon Roll",
        description: "Pikante tonijn getopt met Zalm, en tonijn",
        price: "€ 11.50",
      },
      {
        name: "Double Zalm Roll",
        description: "Pikante Zalm getopt met Zalm",
        price: "€ 10.50",
      },
      {
        name: "Green Rainbow",
        description: "California getopt met avocado",
        price: "€ 10.50",
      },
      {
        name: "Lion King",
        description: "California getopt met Zalm",
        price: "€ 11.50",
      },
      {
        name: "Lucky Roll",
        description: "Krokante Scampit getopt met avocado en ebi",
        price: "€ 12.50",
      },
      { name: "California Tonijn", price: "€ 8.50" },
      { name: "Zalm Avocado", price: "€ 7.50" },
      {
        name: "Rainbow Roll",
        description: "California getopt met avocado, tuna, zalm",
        price: "€ 11.50",
      },
      {
        name: "Crunchy Roll",
        description: "Krokante Scampi getopt met tempura crispy",
        price: "€ 10.00",
      },
      {
        name: "Leafy Boni Zalm",
        description: "Pikante Zalm getopt met avocado",
        price: "€ 10.50",
      },
      {
        name: "Leafy Boni Tuna",
        description: "Pikante Tonijn getopt met avocado",
        price: "€ 11.50",
      },
    ],
  },

  {
    section: "Drinks",
    items: [
      { name: "Kirin Bier", price: "€ 3.50" },
      { name: "Water (50 cl)", price: "€ 2.00" },
      { name: "Fanta", price: "€ 1.70" },
      { name: "Cola", price: "€ 1.70" },
      { name: "Cola Zero", price: "€ 1.70" },
      { name: "Sprite", price: "€ 1.70" },
      { name: "Singha", price: "€ 3.50" },
      { name: "Asahi", price: "€ 3.50" },
      { name: "Rose fles", price: "€ 15.00" },
      { name: "Cava fles", price: "€ 25.00" },
      { name: "Huiswijn Wit", price: "€ 15.00" },
      { name: "Stella", price: "€ 2.00" },
      { name: "Jupiler", price: "€ 2.00" },
    ],
  },
];

export default menuData;

export const ItemNames = [
  "Zeewier Salade",
  "Sake Butso",
  "Scampi Salade",
  "Zalm Avocado Salade",
  "Kanikama Salade (Krab)",
  "Mango Avocado Salade",
  "soep1",
  "Worldcup Speciaal",
  "Kip Soep",
  "Groenten Soep",
  "Miso Soep",
  "Wantan Soep (Varken) met noedels",
  "Tom Yam",
  "Bonito Dimsum (kip)",
  "Edamame",
  "Dimsum Scampi",
  "Dimsum Kip",
  "Dimsum Veggie",
  "Dimsum Mix",
  "Samosa Veggie",
  "Loempia Kip",
  "Loempia Veggie",
  "Gyoza Mix (kip en scampi)",
  "Gyoza Bonito (kip)",
  "Gyoza Veggie",
  "Tempura Scampi",
  "ZeeVruchten Tempura",
  "Zalm Crispy met Groenten",
  "Tempura Veggie",
  "Tempura Mix",
  "Kip Crispy met Groenten",
  "Yakitori Zeevruchten (2 stuks met rijst en zeewier)",
  "Yakitori Kip (2 stuks met rijst en Zeewier)",
  "Kinder Noedels met Kip",
  "Curryworst met Frieten",
  "Vis-Sticks met Frieten",
  "Kinder Rijst met kip",
  "Mini KipFilet met Frieten",
  "Beginners Combo",
  "Lovers Combo",
  "Hoso Combo",
  "Non-Vis Combo",
  "Tonijn Combo",
  "Zalm/Tonijn Combo",
  "Gefrituured Combo",
  "Veggie Combo",
  "Zalm Combo",
  "Boni Maki Boot (2 person)",
  "Boni Zalm Boot (2 person)",
  "Bonito Boot (1 person)",
  "Boni Boot (2 person)",
  "Boni Deluxe (3 person)",
  "Sushi Boot (1 person)",
  "Boni Titanic (4 person)",
  "Titanic Deluxe (5-6 person)",
  "Dragon Eyes Tonijn",
  "Dragon Eyes Scampi",
  "Dragon Eyes Avocado",
  "Dragon Eyes Kip",
  "Dragon Eyes Zalm",
  "Kamikaze Tuna",
  "Tempura Maki",
  "Kip Tempura",
  "New York",
  "Kamikaze Zalm",
  "Tuna Avocado",
  "California Zalm",
  "California Scampi",
  "California Krab",
  "California Avocado",
  "California Mango",
  "Sexy Rolls",
  "Dragon Roll",
  "Double Zalm Roll",
  "Green Rainbow",
  "Lion King",
  "Lucky Roll",
  "California Tonijn",
  "Zalm Avocado",
  "Rainbow Roll",
  "Crunchy Roll",
  "Leafy Boni Zalm",
  "Leafy Boni Tuna",
  "Kirin Bier",
  "Water (50 cl)",
  "Fanta",
  "Cola",
  "Cola Zero",
  "Sprite",
  "Singha",
  "Asahi",
  "Rose fles",
  "Cava fles",
  "Huiswijn Wit",
  "Stella",
  "Jupiler",
];
