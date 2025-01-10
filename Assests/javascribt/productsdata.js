const products = {
  1: {
    title: "The Epic of Gilgamesh",

    price: 11,
    stock: 5,
    description: "An ancient heroic adventure about friendship and immortality.",
    sold: 8,
    img_src: "./Assests/images/the-epic-of-gilgamesh.jpg",
    category: "fantasy",
    Availability: true,
  },
  2: {
    title: "Nostromo",

    price: 8,
    stock: 7,
    description: "A gripping tale of greed, colonialism, and revolution.",
    sold: 5,
    img_src: "./Assests/images/nostromo.jpg",
    category: "horror",
    Availability: true,
  },
  3: {
    title: "Things Fall Apart",

    price: 10,
    stock: 3,
    description: "A powerful story of tradition and change in a Nigerian village.",
    sold: 6,
    img_src: "./Assests/images/things-fall-apart.jpg",
    category: "drama",
    Availability: true,
  },
  4: {
    title: "Pride and Prejudice",

    price: 9,
    stock: 4,
    description: "A witty and romantic tale of love and societal expectations.",
    sold: 2,
    img_src: "./Assests/images/pride-and-prejudice.jpg",
    category: "drama",
    Availability: true,
  },
  5: {
    title: "Crime and Punishment",

    price: 14,
    stock: 6,
    description: "A psychological exploration of guilt and redemption.",
    sold: 4,
    img_src: "./Assests/images/crime-and-punishment.jpg",
    category: "drama",
    Availability: true,
  },
  6: {
    title: "Invisible Man",

    price: 13,
    stock: 3,
    description: "A powerful story of racial identity and social invisibility.",
    sold: 7,
    img_src: "./Assests/images/invisible-man.jpg",
    category: "drama",
    Availability: true,
  },
  7: {
    title: "Gypsy Ballads",

    price: 6,
    stock: 8,
    description: "Simple yet evocative poetry that introduces young readers to Spanish folklore.",
    sold: 4,
    img_src: "./Assests/images/gypsy-ballads.jpg",
    category: "kids",
    Availability: true,
  },
  8: {
    title: "Medea",

    price: 12,
    stock: 2,
    description: "A tragic Greek play about betrayal and revenge.",
    sold: 9,
    img_src: "./Assests/images/medea.jpg",
    category: "horror",
    Availability: true,
  },
  9: {
    title: "One Thousand and One Nights",

    price: 7,
    stock: 5,
    description: "A magical anthology of Middle Eastern folklore featuring Aladdin and Ali Baba.",
    sold: 6,
    img_src: "./Assests/images/one-thousand-and-one-nights.jpg",
    category: "fantasy",
    Availability: true,
  },
  10: {
    title: "Fairy Tales",

    price: 10,
    stock: 9,
    description: "A timeless collection of enchanting tales like The Little Mermaid and The Ugly Duckling.",
    sold: 3,
    img_src: "./Assests/images/fairy-tales.jpg",
    category: "kids",
    Availability: true,
  },
  11: {
    title: "Njál's Saga",

    price: 8,
    stock: 4,
    description: "Exciting Icelandic sagas about bravery, family, and adventure.",
    sold: 7,
    img_src: "./Assests/images/njals-saga.jpg",
    category: "kids",
    Availability: true,
  },
  12: {
    title: "The Iliad",

    price: 12,
    stock: 6,
    description: "An epic tale of Greek heroes and mythical battles during the Trojan War.",
    sold: 5,
    img_src: "./Assests/images/the-iliad-of-homer.jpg",
    category: "kids",
    Availability: true,
  },
  13: {
    title: "Madame Bovary",

    price: 9,
    stock: 7,
    description: "A tragic story of romantic idealism and societal constraints.",
    sold: 4,
    img_src: "./Assests/images/madame-bovary.jpg",
    category: "drama",
    Availability: true,
  },
  14: {
    title: "Absalom, Absalom!",

    price: 11,
    stock: 3,
    description: "A complex Southern Gothic tale of family and history.",
    sold: 6,
    img_src: "./Assests/images/absalom-absalom.jpg",
    category: "drama",
    Availability: true,
  },

  15: {
    title: "The Divine Comedy",

    price: 14,
    stock: 2,
    description: "A poetic journey through Hell, Purgatory, and Heaven.",
    sold: 8,
    img_src: "./Assests/images/the-divine-comedy.jpg",
    category: "fantasy",
    Availability: true,
  },
  16: {
    title: "Fairy Tales",

    price: 7,
    stock: 5,
    description: "A timeless collection of enchanting tales like The Little Mermaid and The Ugly Duckling.",
    sold: 6,
    img_src: "./Assests/images/fairy-tales.jpg",
    category: "fantasy",
    Availability: true,
  },
  17: {
    title: "The Sound and the Fury",

    price: 13,
    stock: 4,
    description: "A groundbreaking novel of a Southern family’s decline.",
    sold: 7,
    img_src: "./Assests/images/the-sound-and-the-fury.jpg",
    category: "drama",
    Availability: true,
  },
  18: {
    title: "Great Expectations",

    price: 9,
    stock: 3,
    description: "A classic coming-of-age story about ambition, love, and redemption.",
    sold: 5,
    img_src: "./Assests/images/great-expectations.jpg",
    category: "drama",
    Availability: true,
  },
  19: {
    title: "The Brothers Karamazov",

    price: 14,
    stock: 6,
    description: "A profound novel of faith, family, and morality.",
    sold: 4,
    img_src: "./Assests/images/the-brothers-karamazov.jpg",
    category: "drama",
    Availability: true,
  },
  20: {
    title: "The devil to pay",

    price: 11,
    stock: 8,
    description: "A vibrant collection of tales from medieval Italy.",
    sold: 3,
    img_src: "./Assests/images/the-devil-to-pay-in-the-backlands.jpg",
    category: "comedy",
    Availability: true,
  },
  21: {
    title: "Don Quijote De La Mancha",

    price: 10,
    stock: 4,
    description: "A comedic and poignant tale of a delusional knight and his squire.",
    sold: 5,
    img_src: "./Assests/images/don-quijote-de-la-mancha.jpg",
    category: "comedy",
    Availability: true,
  },
  22: {
    title: "Jacques the Fatalist",

    price: 7,
    stock: 5,
    description: "A witty, philosophical novel questioning fate and free will.",
    sold: 6,
    img_src: "./Assests/images/jacques-the-fatalist.jpg",
    category: "comedy",
    Availability: true,
  },
  23: {
    title: "The Canterbury Tales",

    price: 13,
    stock: 3,
    description: "A colorful collection of stories told by pilgrims on a journey.",
    sold: 7,
    img_src: "./Assests/images/the-canterbury-tales.jpg",
    category: "comedy",
    Availability: true,
  },
};
export { products };
