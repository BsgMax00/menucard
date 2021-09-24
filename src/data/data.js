export const PRODUCTS_DATA = [
    {name: "cola", price: 1 },
    {name: "water", price: 1, note: "plat of bruisend"},
    {name: "bier", price: 1, size: 25},
    {name: "bier groot", price: 1, size: 33},
    {name: "wijn", price: 2, note:"rood, wit of rosé"},
    {name: "cava", price: 3},
];

export const CATEGORIES_DATA = [
    {
        name: "fris",
        products: [
            {name: "cola", price: 1},
            {name: "water", price: 1, note: "plat of bruisend"},
        ]
    },
    {
        name: "alcohol",
        products: [
            {name: "bier", price: 1, size: 25},
            {name: "bier groot", price: 1, size: 33},
            {name: "wijn", price: 2, note: "rood, wit of rosé"},
            {name: "cava", price: 3},
        ]
    },
    {
        name: "eten",
        products: [
            {name: "chips", price: 1, note: "paprika of zout"},
            {name: "olijven", price: 2, note: "mix zwart en groen"},
            {name: "kaas", price: 4, note: "mix jonge en oude blokjes"}
        ]
    }

];
