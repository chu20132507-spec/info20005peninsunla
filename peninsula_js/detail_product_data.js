//detail pages data storing helper 
const products = {

    carrot1: {
        category: "juice",
        unit: "bottle",
        name: "CARROT #1",
        price: "$8.50",
        rating: 1.0,
        reviewCount: 1,
        size: "350ml",
        ingredients: "CARROT & ORANGE",
        detailImage: "../image/detailcarrot1.png",
        shopImage: "../image/Peninsula_Carrot1B.jpg",
        description: "Loaded with betacarotene, a precursor for retinol production in cells, this beauty juice promotes radiant, glowing, healthy skin. Profound doses of vitamin C bring additional support for collagen production to strengthen the skin and protect against photoaging and hyperpigmentation.",
        recommendations: ["carrot2", "hydrate"],
        reviews: [
            {
                rating: 1,
                user: "Reina",
                date: "April 9, 2026",
                text: "Spiractin from acnemedsrx"
            }
        ]
    },

    carrot2: {
        category: "juice",
        unit: "bottle",
        name: "CARROT #2",
        price: "$8.50",
        rating: 3.0,
        reviewCount: 11,
        size: "350ml",
        ingredients: "CARROT, GREEN APPLE, LEMON",
        detailImage: "../image/detailcarrot2.png",
        shopImage: "../image/Peninsula_Carrot2B.jpg",
        description: "An immunity booster via rich doses of flavanoids and phytochemicals. Apple and carrot deliver quercetin and pectin, renowned for anti-oxidative, anti-inflammatory effects and linked to lowering cholesterol and disease prevention.",
        recommendations: ["carrot1", "hydrate"],
        reviews: [
            {
                rating: 3,
                user: "Darcy",
                date: "April 15, 2026",
                text: "does kali muscle do steroids"
            },
            {
                rating: 3,
                user: "Fiona",
                date: "April 17, 2026",
                text: "Supplement stacks bodybuilding"
            },
            {
                rating: 3,
                user: "Clifford",
                date: "April 21, 2026",
                text: "Craps bets"
            }
        ]
    },

    hydrate: {
        category: "juice",
        unit: "bottle",
        name: "HYDRATE",
        price: "$8.50",
        rating: 3.0,
        reviewCount: 4,
        size: "350ml",
        ingredients: "PINEAPPLE JUICE, APPLE, COCONUT WATER",
        detailImage: "../image/detailhydrate.png",
        shopImage: "../image/Peninsula_Hydrate.jpg",
        description: "Strategically designed for hydration and anti-inflammation. A tropical blend of coconut water and pineapple brings flavour, whilst medicinal bromelain promotes healing, assists digestion and is linked with reductions in joint pain.",
        recommendations: ["carrot1", "carrot2"],
        reviews: [
            {
                rating: 3,
                user: "maria46re",
                date: "February 26, 2026",
                text: "The promotions page is clean and easy to understand at first glance."
            },
            {
                rating: 3,
                user: "Nigel",
                date: "March 12, 2026",
                text: "hard rock casino miami"
            },
            {
                rating: 3,
                user: "Faustino",
                date: "March 27, 2026",
                text: "Best anavar brand"
            }
        ]
    },

    beet: {
        category: "juice",
        unit: "bottle",
        name: "BEET",
        price: "$7.00",
        rating: null,
        reviewCount: 0,
        size: "350ml",
        ingredients: "BEETROOT, APPLE, LEMON, GINGER",
        detailImage: "../image/detailbeet.png",
        shopImage: "../image/Peninsula_BeetB.jpg",
        description: "In contrast to our CLEANSE RANGE of BEET, this juice is gentler on the palate. Beets are not only the richest source of betaine, a liver detoxifier, they are also methylators. Methylators attach themselves to toxins such as carcinogens which in turn elevates the liver's function to remove them. Ginger delivers a powerful anti-inflammatory fix, whilst lemon aids in decalcification of cells, joints and cardiovascular system.",
        recommendations: ["blackLemonade"],
        reviews: []
    },

    blackLemonade: {
        category: "juice",
        unit: "bottle",
        name: "BLACK LEMONADE",
        price: "$8.50",
        rating: 2.0,
        reviewCount: 15,
        size: "350ml",
        ingredients: "APPLE, LEMON, CHARCOAL",
        detailImage: "../image/detailblack.png",
        shopImage: "../image/Peninsula_BlackLemonade.jpg",
        description: "Our biggest detoxifier. Local apple and the decalcifying power of lemon is combined with activated charcoal to selectively neutralise toxins, adsorb metabolic waste and foreign chemicals. The use of charcoal brings stability to cholesterol, improves the function of essential organs and is linked to increased lifespan.",
        recommendations: ["beet"],
        reviews: [
            {
                rating: 2,
                user: "Joycelyn",
                date: "May 6, 2025",
                text: "Sweet blog! I found it while searching on Yahoo News."
            },
            {
                rating: 2,
                user: "Errol",
                date: "May 10, 2025",
                text: "Hello there, just became aware of your blog through Google."
            },
            {
                rating: 1,
                user: "Curt",
                date: "June 25, 2025",
                text: "Hi there to all, how is the whole thing."
            },
            {
                rating: 3,
                user: "Alfie",
                date: "June 25, 2025",
                text: "I am actually happy to read this website posts."
            }
        ]
    },

    cleanse1: {
        category: "cleanse",
        unit: "day",
        name: "CLEANSE #1",
        price: "$65.00",
        rating: 2.5,
        reviewCount: 19936,
        size: "7 x 350ml + 1 x 50ml shot",
        ingredients: "GREEN #2 x2, CARROT #1 x2, HYDRATE, BEET, CELERY, GINGER SHOT",
        detailImage: "../image/detailcleanse1.png",
        shopImage: "../image/Peninsula_Cleanse1.jpg",
        description: "A complete cleansing package designed to support detoxification and digestive health.",
        recommendations: ["cleanse2", "cleanse3"],
        reviews: [
            {
                rating: 2,
                user: "Rigoberto",
                date: "November 11, 2024",
                text: "Hi! Do you know if they make any plugins to assist with SEO? I'm trying to get my website to rank for some targeted keywords but I'm not seeing very good gains. If you know of any please share."
            },
            {
                rating: 4,
                user: "Arletha",
                date: "November 14, 2024",
                text: "Hi! Do you know if they make any plugins to assist with Search Engine Optimization? I'm trying to get my website to rank for some targeted keywords but I'm not seeing very good results."
            },
            {
                rating: 3,
                user: "Honey",
                date: "December 4, 2024",
                text: "May I just say what a comfort to discover someone who really understands what they're discussing over the internet."
            },
            {
                rating: 3,
                user: "stick and poke",
                date: "December 4, 2024",
                text: "Great article. I will be facing a few of these issues as well."
            }
        ]
    },

    cleanse2: {
        category: "cleanse",
        unit: "day",
        name: "CLEANSE #2",
        price: "$65.00",
        rating: 3.0,
        reviewCount: 1,
        size: "7 x 350ml + 1 x 50ml shot",
        ingredients: "CARROT #2 x2, GREEN #3 x2, GREEN #1, RECOVERY, BLACK LEMONADE, TURMERIC SHOT",
        detailImage: "../image/detailcleanse2.png",
        shopImage: "../image/Peninsula_Cleanse2.jpg",
        description: "A balanced cleanse package combining juices rich in antioxidants and hydration support.",
        recommendations: ["cleanse1", "cleanse3"],
        reviews: [
            {
                rating: 3,
                user: "Vallie",
                date: "March 27, 2026",
                text: "Side effects of women taking steroids"
            }
        ]
    },

    cleanse3: {
        category: "cleanse",
        unit: "day",
        name: "CLEANSE #3",
        price: "$65.00",
        rating: null,
        reviewCount: 0,
        size: "7 x 350ml + 1 x 50ml shot",
        ingredients: "CARROT #1, BEET, GREEN #3 x2, RECOVERY, RAINBOW x2, GINGER SHOT",
        detailImage: "../image/detailcleanse3.png",
        shopImage: "../image/Peninsula_Cleanse3.jpg",
        description: "A cleanse package focused on recovery, detoxification and nutrient replenishment.",
        recommendations: ["cleanse1", "cleanse2"],
        reviews: []
    }

};