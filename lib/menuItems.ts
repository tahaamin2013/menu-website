export type Size = {
  size: string;
  calories: number;
  price: string;
  size2: string;
};
export type Product = {
  name: string;
  image: string;
  link: string;
  sizes?: Size[];
  size?: string;
  calories?: number;
  price?: string;
};
export type SubItem = { category: string; products: Product[] };
export type Item = {
  name: string;
  image: string;
  link: string;
  subItems: SubItem[];
};
export type Category = { category: string; items: Item[] };

export const Menu: Category[] = [
  // Drinks
  {
    category: "Drinks",
    items: [
      {
        name: "Hot Coffees",
        image: "/hot cofee.avif",
        link: "hot-coffees",
        subItems: [
          {
            category: "Brewed Coffees",
            products: [
              {
                name: "Veranda Blend® Clover Vertica™",
                image: "/to.avif",
                link: "veranda-blend-clover-vertica",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.35",
                    calories: 10,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 10,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.65",
                    calories: 10,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 10,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Featured Medium Roast Pike Place® Roast",
                image: "/to.avif",
                link: "featured-medium-roast-pike-place-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.35",
                    calories: 10,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 10,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.65",
                    calories: 10,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 10,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Starbucks Odyssey Blend® Clover Vertica™",
                image: "/Starbucks Odyssey Blend® Clover Vertica™.avif",
                link: "starbucks-0dyssey-blend-clover-vertica",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.35",
                    calories: 10,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 10,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.65",
                    calories: 10,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 10,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Featured Decaf Roast Decaf Pike Place® Roast",
                image: "/to.avif",
                link: "featured-decaf-roast-decaf-pike-place-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.35",
                    calories: 10,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 10,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.65",
                    calories: 10,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 10,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Caffè Misto",
                image: "/Caffè Misto.avif",
                link: "cffe-misto",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.15",
                    calories: 50,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.25",
                    calories: 80,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.45",
                    calories: 110,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.65",
                    calories: 130,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Featured Blonde Roast",
                image: "/to.avif",
                link: "featured-blonde-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.35",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.40",
                    calories: 5,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.85",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 5,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Featured Dark Roast Caffè Verona®",
                image: "/Starbucks Odyssey Blend® Clover Vertica™.avif",
                link: "featured-dark-roast-caffè-verona",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.45",
                    calories: 10,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 15,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 20,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 25,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Featured Dark Roast",
                image: "/Featured Dark Roast.avif",
                link: "featured-dark-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.25",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 5,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.85",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 5,
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Americanos",
            products: [
              {
                name: "Caffè Americano",
                image: "/to.avif",
                link: "caffe-americano",
                sizes: [
                  {
                    size: "Short",
                    calories: 5,
                    price: "$3.35",
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    calories: 10,
                    price: "$3.45",
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    calories: 15,
                    price: "$3.65",
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    calories: 15,
                    price: "$3.85",
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },

          {
            category: "Cappuccinos",
            products: [
              {
                name: "Cappuccino",
                image: "/Cappuccino.avif",
                link: "cappuccino",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.35",
                    calories: 70,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.45",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.95",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.45",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Espresso Shots",
            products: [
              {
                name: "Espresso",
                image: "/Espresso.avif",
                link: "espresso",
                sizes: [
                  {
                    size: "Solo",
                    price: "$2.45",
                    calories: 5,
                    size2: "0.75 fl oz",
                  },
                  {
                    size: "Doppio",
                    price: "$2.95",
                    calories: 10,
                    size2: "1.5 fl oz",
                  },
                  {
                    size: "Triple",
                    price: "$3.45",
                    calories: 15,
                    size2: "2.25 fl oz",
                  },
                  {
                    size: "Quad",
                    price: "$3.95",
                    calories: 20,
                    size2: "3 fl oz",
                  },
                ],
              },
              {
                name: "Espresso Con Panna",
                image: "/Espresso Con Panna.avif",
                link: "espresso-con-panna",
                sizes: [
                  {
                    size: "Solo",
                    price: "$2.45",
                    calories: 30,
                    size2: "0.75 fl oz",
                  },
                  {
                    size: "Doppio",
                    price: "$2.95",
                    calories: 35,
                    size2: "1.5 fl oz",
                  },
                  {
                    size: "Triple",
                    price: "$3.45",
                    calories: 40,
                    size2: "2.25 fl oz",
                  },
                  {
                    size: "Quad",
                    price: "$3.95",
                    calories: 45,
                    size2: "3 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Flat Whites",
            products: [
              {
                name: "Flat White",
                image: "/Flat White.avif",
                link: "flat-white",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 110,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 170,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 220,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.85",
                    calories: 290,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Honey Almondmilk Flat White",
                image: "/Honey Almondmilk Flat White.avif",
                link: "honey-almondmilk-flat-white",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.15",
                    calories: 80,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 120,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 170,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Lattes",
            products: [
              {
                name: "Lavender Oatmilk Latte",
                image: "/Lavender Oatmilk Latte.avif",
                link: "/lavender-oatmilk-latte",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.15",
                    calories: 110,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 180,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 260,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 320,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Oleato™ Caffé Latte with Oatmilk",
                image: "/Oleato™ Caffé Latte with Oatmilk.avif",
                link: "oleato-caffé-latte-with-oatmilk",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.35",
                    calories: 210,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 270,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 330,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 410,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Caffè Latte",
                image: "/Caffè Latte.avif",
                link: "caffè-latte",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.35",
                    calories: 100,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.45",
                    calories: 150,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.95",
                    calories: 190,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.45",
                    calories: 250,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Cinnamon Dolce Latte",
                image: "/Cinnamon Dolce Latte.avif",
                link: "cinnamon-dolce-latte",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.15",
                    calories: 190,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 270,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 340,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 420,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Starbucks® Blonde Vanilla Latte",
                image: "/Starbucks® Blonde Vanilla Latte.avif",
                link: "starbucks-blonde-vanilla-latte",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.15",
                    calories: 130,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 200,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 250,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 320,
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Macchiatos",
            products: [
              {
                name: "Caramel Macchiato",
                image: "/Caramel Macchiato.avif",
                link: "caramel-macchiato",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 120,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 250,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.65",
                    calories: 310,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "Espresso Macchiato",
                image: "/Espresso Macchiato.avif",
                sizes: [
                  {
                    size: "Solo",
                    price: "$3.05",
                    calories: 10,
                    size2: "0.75 fl oz",
                  },
                  {
                    size: "Doppio",
                    price: "$3.35",
                    calories: 15,
                    size2: "1.5 fl oz",
                  },
                  {
                    size: "Triple",
                    price: "$3.55",
                    calories: 20,
                    size2: "2.25 fl oz",
                  },
                  {
                    size: "Quad",
                    price: "$3.95",
                    calories: 25,
                    size2: "3 fl oz",
                  },
                ],
                link: "espresso-macchiato",
              },
            ],
          },
          {
            category: "Mochas",
            products: [
              {
                name: "Caffè Mocha",
                image: "/Caffè Mocha.avif",
                link: "caffè-mocha",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 200,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 290,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.65",
                    calories: 450,
                    size2: "20 fl oz",
                  },
                ],
              },
              {
                name: "White Chocolate Mocha",
                image: "/White Chocolate Mocha.avif",
                link: "white-chocolate-mocha",
                sizes: [
                  {
                    size: "Short",
                    price: "$5.15",
                    calories: 230,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 290,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 390,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 480,
                    size2: "20 fl oz",
                  },
                ],
              },
            ],
          },
          {
            category: "Coffee Travelers",
            products: [
              {
                name: "Coffee Traveler - Veranda Blend®",
                image: "/Box.avif",
                link: "coffee-traveler-veranda-blend",
                sizes: [
                  {
                    size: "Short",
                    price: "$20.00",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                ],
              },
              {
                name: "Coffee Traveler - Dark Roast",
                image: "/Box.avif",
                link: "Coffee-Traveler-Dark-Roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$20.00",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                ],
              },
              {
                name: "Coffee Traveler - Pike Place® Roast",
                image: "/Box.avif",
                link: "coffee-traveler-pike place-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$20.00",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                ],
              },
              {
                name: "Coffee Traveler - Decaf Pike Place® Roast",
                image: "/Box.avif",
                link: "coffee-traveler-decaf-pike-place-roast",
                sizes: [
                  {
                    size: "Short",
                    price: "$20.00",
                    calories: 5,
                    size2: "8 fl oz",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Cold Coffees",
        image: "/Vanilla Sweet Cream Cold Brew.avif",
        link: "cold-coffees",
        subItems: [
          {
            category: "Cold Brews",
            products: [
              {
                name: "White Chocolate Macadamia Cream Cold Brew",
                image: "/White Chocolate Macadamia Cream Cold Brew.avif",
                link: "white-chocolate-macadamia-cream-cold-brew",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 160,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 230,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 270,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 320,
                    size2: "30 fl oz",
                  },
                ],
              },
              {
                name: "Salted Caramel Cream Cold Brew",
                image: "/Salted Caramel Cream Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 240,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 270,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 300,
                    size2: "30 fl oz",
                  },
                ],
                link: "salted-caramel-cream-cold-brew",
              },
              {
                name: "chocolate cream cold brew",
                image: "/Chocolate Cream Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 250,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 300,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 320,
                    size2: "30 fl oz",
                  },
                ],
                link: "chocolate-cream-cold-brew",
              },
              {
                name: "Vanilla Sweet Cream Cold Brew",
                image: "/Vanilla Sweet Cream Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 90,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 110,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.45",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.75",
                    calories: 220,
                    size2: "30 fl oz",
                  },
                ],
                link: "vanilla-sweet-cream-cold-brew",
              },
              {
                name: "Starbucks® Cold Brew Coffee",
                image: "/Starbucks® Cold Brew Coffee.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.25",
                    calories: 5,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.75",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.95",
                    calories: 5,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.25",
                    calories: 5,
                    size2: "30 fl oz",
                  },
                ],
                link: "starbucks-cold-brew-coffee",
              },
            ],
          },
          {
            category: "Nitro Cold Brews",
            products: [
              {
                name: "Cinnamon Caramel Cream Nitro Cold Brew",
                image: "/Cinnamon Caramel Cream Nitro Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 180,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 260,
                    size2: "16 fl oz",
                  },
                ],
                link: "cinnamon-caramel-cream-nitro-cold-brew",
              },
              {
                name: "Nitro Cold Brew",
                image: "/Nitro Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 5,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                ],
                link: "nitro-cold-brew",
              },
              {
                name: "Vanilla Sweet Cream Nitro Cold Brew",
                image: "/Vanilla Sweet Cream Nitro Cold Brew.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.75",
                    calories: 70,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 70,
                    size2: "16 fl oz",
                  },
                ],
                link: "vanilla-sweet-cream-nitro-cold-brew",
              },
            ],
          },
          {
            category: "Iced Americano",
            products: [
              {
                name: "Iced Caffè Americano",
                image: "/Iced Caffè Americano.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 10,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.95",
                    calories: 15,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.25",
                    calories: 15,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-caffè-americano",
              },
            ],
          },
          {
            category: "Iced Coffees",
            products: [
              {
                name: "Starbucks® Iced Coffee Blend",
                image: "/12.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.45",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 5,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 5,
                    size2: "30 fl oz",
                  },
                ],
                link: "starbucks-iced-coffee-blend",
              },
              {
                name: "Starbucks® Iced Coffee Blend Clover Vertica™",
                image: "/12.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.45",
                    calories: 5,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 5,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 5,
                    size2: "30 fl oz",
                  },
                ],
                link: "starbucks-iced-coffee-blend-clover-vertica",
              },
              {
                name: "Iced Espresso",
                image: "/Iced Espresso.avif",
                sizes: [
                  {
                    size: "Solo",
                    price: "$2.95",
                    calories: 5,
                    size2: "0.75 fl oz",
                  },
                  {
                    size: "Doppio",
                    price: "$3.25",
                    calories: 10,
                    size2: "1.5 fl oz",
                  },
                  {
                    size: "Triple",
                    price: "$3.45",
                    calories: 15,
                    size2: "2.25 fl oz",
                  },
                  {
                    size: "Quad",
                    price: "$3.85",
                    calories: 20,
                    size2: "3 fl oz",
                  },
                ],
                link: "iced-espresso",
              },
            ],
          },
          {
            category: "Iced Shaken Espresso",
            products: [
              {
                name: "Iced Hazelnut Oatmilk Shaken Espresso",
                image: "/Iced Hazelnut Oatmilk Shaken Espresso.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.25",
                    calories: 150,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.75",
                    calories: 220,
                    size2: "24 fl oz",
                  },
                ],
                link: "iced-hazelnut-oatmilk-shaken-espresso",
              },
              {
                name: "Iced Brown Sugar Oatmilk Shaken Espresso",
                image: "/Iced Brown Sugar Oatmilk Shaken Espresso.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.25",
                    calories: 120,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.75",
                    calories: 190,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-brown-sugar-oatmilk-shaken-espresso",
              },
              {
                name: "Oleato Golden Foam™ Iced Shaken Espresso with Toffeenut",
                image:
                  "/Oleato Golden Foam™ Iced Shaken Espresso with Toffeenut.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.95",
                    calories: 310,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$7.45",
                    calories: 360,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$8.25",
                    calories: 420,
                    size2: "20 fl oz",
                  },
                ],
                link: "oleato-golden-foam-iced-shaken-espresso-with-offeenut",
              },
              {
                name: "Iced Shaken Espresso",
                image: "/Iced Shaken Espresso.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 80,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.45",
                    calories: 100,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.25",
                    calories: 160,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-shaken-espresso",
              },
            ],
          },
          {
            category: "Iced Flat White",
            products: [
              {
                name: "Iced Flat White",
                image: "/Iced Flat White.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 150,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 220,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-flat-white",
              },
              {
                name: "Iced Honey Almondmilk Flat White",
                image: "/Iced Honey Almondmilk Flat White.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-honey-almondmilk-flat-white",
              },
            ],
          },
          {
            category: "Iced Lattes",
            products: [
              {
                name: "Iced Lavender Oatmilk Latte",
                image: "/Iced Lavender Oatmilk Latte.jpg",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 160,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 210,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 290,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-lavender-oatmilk-latte",
              },
              {
                name: "Iced Starbucks® Blonde Vanilla Latte",
                image: "/Iced Starbucks® Blonde Vanilla Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 190,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 270,
                    size2: "20 fl oz",
                  },
                ],
                link: "lced-starbucks-blonde-vanilla-latte",
              },
              {
                name: "Iced Caffè Latte",
                image: "/Iced Caffè Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.45",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.95",
                    calories: 130,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.45",
                    calories: 180,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-caffè-latte",
              },
              {
                name: "Iced Cinnamon Dolce Latte",
                image: "/Iced Cinnamon Dolce Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 240,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 300,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 420,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-cinnamon-dolce-latte",
              },
            ],
          },
          {
            category: "Iced Macchiatos",
            products: [
              {
                name: "Iced Caramel Macchiato",
                image: "/Iced Caramel Macchiato.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 180,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 250,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 350,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-caramel-macchiato",
              },
            ],
          },
          {
            category: "Iced Mochas",
            products: [
              {
                name: "Iced White Chocolate Mocha",
                image: "/Iced White Chocolate Mocha.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 290,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 390,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 25,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-white-chocolate-mocha",
              },
              {
                name: "Iced Caffè Mocha",
                image: "/Iced Caffè Mocha.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 350,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 450,
                    size2: "20 fl oz",
                  },
                ],
                link: "iced-caffè-mocha",
              },
            ],
          },
        ],
      },
      {
        name: "Starbucks Refreshers® Beverages",
        image: "/Strawberry Açaí Lemonade Starbucks Refreshers® Beverage.avif",
        link: "starbucks-refreshers-beverages",
        subItems: [
          {
            category: "Seasonal Exclusives",
            products: [
              {
                name: "Summer-Berry Lemonade Starbucks Refreshers® Beverage",
                image:
                  "/Summer-Berry Lemonade Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.75",
                    calories: 160,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.25",
                    calories: 240,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$7.45",
                    calories: 290,
                    size2: "30 fl oz",
                  },
                ],
                link: "summer-berry-lemonade-starbucks refreshers-beverage",
              },
              {
                name: "Summer Skies Drink Starbucks Refreshers® Beverage",
                image:
                  "/Summer Skies Drink Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.75",
                    calories: 150,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.25",
                    calories: 220,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$7.45",
                    calories: 280,
                    size2: "30 fl oz",
                  },
                ],
                link: "summer-skies-drink-starbucks-refreshers-beverage",
              },
              {
                name: "Summer-Berry Starbucks Refreshers® Beverage",
                image: "/Summer-Berry Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.75",
                    calories: 70,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.25",
                    calories: 110,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.75",
                    calories: 160,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.95",
                    calories: 190,
                    size2: "30 fl oz",
                  },
                ],
                link: "summer-berry-starbucks-refreshers-beverage",
              },
            ],
          },
          {
            category: "Lemonades and Frozen",
            products: [
              {
                name: "Strawberry Açaí Lemonade Starbucks Refreshers® Beverage",
                image:
                  "/Strawberry Açaí Lemonade Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.25",
                    calories: 290,
                    size2: "30 fl oz",
                  },
                ],
                link: "strawberry-açaí-lemonade-starbucks-refreshers-beverage",
              },
              {
                name: "Frozen Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage",
                image:
                  "/Frozen Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.25",
                    calories: 290,
                    size2: "30 fl oz",
                  },
                ],
                link: "frozen-mango-dragonfruit-lemonade-starbucks-refreshers-beverage",
              },
              {
                name: "Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage",
                image:
                  "/Frozen Pineapple Passionfruit Lemonade Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.75",
                    calories: 120,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.25",
                    calories: 160,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 220,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.75",
                    calories: 270,
                    size2: "30 fl oz",
                  },
                ],
                link: "frozen-pineapple-passionfruit-lemonade-starbucks-refreshers-beverage",
              },
              {
                name: "Frozen Strawberry Açaí Lemonade Starbucks Refreshers® Beverage",
                image:
                  "/Frozen Strawberry Açaí Lemonade Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.75",
                    calories: 120,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.25",
                    calories: 160,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.75",
                    calories: 250,
                    size2: "30 fl oz",
                  },
                ],
                link: "frozen-strawberry-açaí-lemonade-starbucks-refreshers-beverage",
              },
            ],
          },
          {
            category: "Coconutmilk Collection",
            products: [
              {
                name: "Pink Drink Starbucks Refreshers® Beverage",
                image: "/Pink Drink Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.25",
                    calories: 270,
                    size2: "30 fl oz",
                  },
                ],
                link: "pink-drink-starbucks-refreshers-reverage",
              },
              {
                name: "Dragon Drink® Starbucks Refreshers® Beverage",
                image: "/Dragon Drink® Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 130,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 190,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.25",
                    calories: 270,
                    size2: "30 fl oz",
                  },
                ],
                link: "dragon-drink-starbucks-refreshers-beverage",
              },
              {
                name: "Paradise Drink Starbucks Refreshers® Beverage",
                image: "/Paradise Drink Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.75",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$6.25",
                    calories: 270,
                    size2: "30 fl oz",
                  },
                ],
                link: "paradise-drink-starbucks-refreshers-beverage",
              },
              {
                name: "Dragon Drink® Starbucks Refreshers® Beverage with Oleato Golden Foam™",
                image:
                  "/Dragon Drink® Starbucks Refreshers® Beverage with Oleato Golden Foam™.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.95",
                    calories: 340,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$7.45",
                    calories: 380,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.65",
                    calories: 440,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$7.95",
                    calories: 510,
                    size2: "30 fl oz",
                  },
                ],
                link: "dragon-drink-starbucks-refreshers-beverage-with-oleato-golden-foam",
              },
              {
                name: "Paradise Drink Starbucks Refreshers® Beverage with Oleato Golden Foam™",
                image:
                  "/Paradise Drink Starbucks Refreshers® Beverage with Oleato Golden Foam™.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.95",
                    calories: 340,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$7.45",
                    calories: 390,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.65",
                    calories: 440,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$7.95",
                    calories: 510,
                    size2: "30 fl oz",
                  },
                ],
                link: "paradise-drink-starbucks-refreshers-beverage-with-oleato-golden-foam",
              },
            ],
          },
          {
            category: "Classics",
            products: [
              {
                name: "Strawberry Açaí Starbucks Refreshers® Beverage",
                image: "/Strawberry Açaí Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 80,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 100,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 140,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 190,
                    size2: "30 fl oz",
                  },
                ],
                link: "strawberry-açaí-starbucks-refreshers-beverage",
              },
              {
                name: "Mango Dragonfruit Starbucks Refreshers® Beverage",
                image: "/Mango Dragonfruit Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 70,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 90,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 130,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 180,
                    size2: "30 fl oz",
                  },
                ],
                link: "mango-dragonfruit-tarbucks-Refreshers-Beverage",
              },
              {
                name: "Pineapple Passionfruit Starbucks Refreshers® Beverage",
                image:
                  "/Pineapple Passionfruit Starbucks Refreshers® Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 100,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 140,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.95",
                    calories: 190,
                    size2: "30 fl oz",
                  },
                ],
                link: "pineapple-passionfruit-starbucks-refreshers-beverage",
              },
            ],
          },
        ],
      },
      {
        name: "Frappuccino® Blended Beverages",
        image:
          "/Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage.avif",
        link: "frappuccino-blended-beverages",
        subItems: [
          {
            category: "Coffee Frappuccino®",
            products: [
              {
                name: "Mocha Cookie Crumble Frappuccino®",
                image: "/Mocha Cookie Crumble Frappuccino®.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 350,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 480,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 590,
                    size2: "20 fl oz",
                  },
                ],
                link: "mocha-cookie-crumble-frappuccino",
              },
              {
                name: "caramel ribbon crunch frappuccino® blended Beverage",
                image:
                  "/Caramel Ribbon Crunch Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 330,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 470,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.45",
                    calories: 570,
                    size2: "20 fl oz",
                  },
                ],
                link: "caramel-ribbon-crunch-frappuccino-blende-beverage",
              },
              {
                name: "Espresso Frappuccino® Blended Beverage",
                image: "/Espresso Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.00",
                    calories: 140,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.50",
                    calories: 210,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.00",
                    calories: 290,
                    size2: "20 fl oz",
                  },
                ],
                link: "espresso-frappuccino-Blended-Beverage",
              },
              {
                name: "Coffee Frappuccino® Blended Beverage",
                image: "/Coffee Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 160,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 230,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 310,
                    size2: "20 fl oz",
                  },
                ],
                link: "Coffee-Frappuccino-Blended-Beverage",
              },
              {
                name: "Caffè Vanilla Frappuccino® Blended Beverage",
                image: "/Caffè Vanilla Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 280,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 410,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 510,
                    size2: "20 fl oz",
                  },
                ],
                link: "Caffè-Vanilla-Frappuccino-Blended-Beverage",
              },
              {
                name: "Caramel Frappuccino® Blended Beverage",
                image: "/Caramel Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.95",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.45",
                    calories: 380,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.85",
                    calories: 470,
                    size2: "20 fl oz",
                  },
                ],
                link: "Caramel-Frappuccino-Blended-Beverage",
              },
              {
                name: "Mocha Frappuccino® Blended Beverage",
                image: "/Mocha Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.95",
                    calories: 250,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.45",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.85",
                    calories: 470,
                    size2: "20 fl oz",
                  },
                ],
                link: "Mocha-Frappuccino-Blended-Beverage",
              },
              {
                name: "Java Chip Frappuccino® Blended Beverage",
                image: "/Java Chip Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.95",
                    calories: 320,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.45",
                    calories: 440,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.85",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                ],
                link: "Java-Chip-Frappuccino-Blended-Beverage",
              },
              {
                name: "White Chocolate Mocha Frappuccino® Blended Beverage",
                image:
                  "/White Chocolate Mocha Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.95",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.45",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.85",
                    calories: 460,
                    size2: "20 fl oz",
                  },
                ],
                link: "White-Chocolate-Mocha-Frappuccino-Blended-Beverage",
              },
            ],
          },
          {
            category: "Creme Frappuccino®",
            products: [
              {
                name: "Lavender Crème Frappuccino® Blended Beverage",
                image: "/Lavender Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.75",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.25",
                    calories: 450,
                    size2: "20 fl oz",
                  },
                ],
                link: "Lavender-Creme-Frappuccino-Blended-Beverage",
              },
              {
                name: "Chocolate Cookie Crumble Crème Frappuccino®",
                image: "/Chocolate Cookie Crumble Crème Frappuccino®.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 330,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.75",
                    calories: 460,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.25",
                    calories: 560,
                    size2: "20 fl oz",
                  },
                ],
                link: "Chocolate-Cookie-Crumble-Creme-Frappuccino",
              },
              {
                name: "Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage",
                image:
                  "/Caramel Ribbon Crunch Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 300,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.75",
                    calories: 420,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.25",
                    calories: 510,
                    size2: "20 fl oz",
                  },
                ],
                link: "Caramel-Ribbon-Crunch-Creme-Frappuccino-Blended-Beverage",
              },
              {
                name: "Strawberry Crème Frappuccino® Blended Beverage",
                image: "/Strawberry Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.95",
                    calories: 250,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.45",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.85",
                    calories: 460,
                    size2: "20 fl oz",
                  },
                ],
                link: "Strawberry-Creme-Frappuccino-Blended-Beverage",
              },
              {
                name: "Chai Crème Frappuccino®",
                image: "/Chai Crème Frappuccino®.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.25",
                    calories: 230,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$6.65",
                    calories: 340,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.95",
                    calories: 420,
                    size2: "20 fl oz",
                  },
                ],
                link: "Chai-Creme-Frappuccino",
              },
              {
                name: "Double Chocolaty Chip Crème Frappuccino® Blended Beverage",
                image:
                  "/Double Chocolaty Chip Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 410,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 510,
                    size2: "20 fl oz",
                  },
                ],
                link: "Double-Chocolaty-Chip-Creme-Frappuccino-Blended-Beverage",
              },
              {
                name: "Matcha Crème Frappuccino® Blended Beverage",
                image: "/Matcha Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 300,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 420,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 520,
                    size2: "20 fl oz",
                  },
                ],
                link: "Matcha-Creme-Frappuccino-Blended-Beverage",
              },
              {
                name: "Vanilla Bean Crème Frappuccino® Blended Crème",
                image: "/Vanilla Bean Crème Frappuccino® Blended Crème.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 260,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 380,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 470,
                    size2: "20 fl oz",
                  },
                ],
                link: "Vanilla-Bean-Crème-Frappuccino-Blended-Crème",
              },
              {
                name: "White Chocolate Crème Frappuccino® Blended Beverage",
                image:
                  "/White Chocolate Crème Frappuccino® Blended Beverage.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 240,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 350,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 400,
                    size2: "20 fl oz",
                  },
                ],
                link: "White-Chocolate-Crème-Frappuccino-Blended-Beverage",
              },
            ],
          },
        ],
      },
      {
        name: "Iced Tea and Lemonade",
        image: "/Iced Tea and Lemonade.avif",
        link: "iced-tea-and-lemonade",
        subItems: [
          {
            category: "Iced Black Teas",
            products: [
              {
                name: "Iced Black Tea",
                image: "/Iced Black Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.45",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Tea-and-Lemonade",
              },
              {
                name: "Iced Black Tea Lemonade",
                image: "/Iced Black Tea Lemonade.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.45",
                    calories: 35,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 50,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.95",
                    calories: 70,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.45",
                    calories: 90,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Black-Tea-Lemonade",
              },
              {
                name: "Iced Royal English Breakfast Tea Latte",
                image: "/Iced Royal English Breakfast Tea Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Royal-English-Breakfast-Tea-Latte",
              },
              {
                name: "Iced London Fog Latte",
                image: "/Iced London Fog Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 100,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 140,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 210,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-London-Fog-Latte",
              },
            ],
          },
          {
            category: "Iced Chai Teas",
            products: [
              {
                name: "Iced Chai Latte",
                image: "/Iced Chai Tea Latte.jpg",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 180,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 240,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 350,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Chai-Tea-Latte",
              },
              {
                name: "Iced Chai Tea Latte with Oleato Golden Foam™",
                image: "/Iced Chai Tea Latte with Oleato Golden Foam™.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.75",
                    calories: 430,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$7.25",
                    calories: 510,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.75",
                    calories: 630,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Chai-Tea-Latte-with-Oleato-Golden-Foam",
              },
            ],
          },
          {
            category: "Iced Green Teas",
            products: [
              {
                name: "Iced Lavender Cream Oatmilk Matcha",
                image: "/Iced Lavender Cream Oatmilk Matcha.jpg",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.45",
                    calories: 300,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.95",
                    calories: 360,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.75",
                    calories: 480,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Lavender-Cream-Oatmilk-Matcha",
              },
              {
                name: "Iced Peach Green Tea",
                image: "/Iced Peach Green Tea.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 45,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.25",
                    calories: 60,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 90,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 120,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Peach-Green-Tea",
              },
              {
                name: "Iced Peach Green Tea Lemonade",
                image: "/Iced Peach Green Tea Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 60,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.45",
                    calories: 80,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.95",
                    calories: 130,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$5.45",
                    calories: 170,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Peach-Green-Tea-Lemonade",
              },
              {
                name: "Iced Matcha Tea Latte",
                image: "/Iced Matcha Tea Latte.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 140,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 200,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.95",
                    calories: 280,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Matcha-Tea-Latte",
              },
              {
                name: "Iced Green Tea",
                image: "/Iced Green Tea.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.75",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.45",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "Ice- Green-Tea",
              },
              {
                name: "Iced Green Tea Lemonade",
                image: "/Iced Green Tea Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 35,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.25",
                    calories: 50,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 70,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 90,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Green-Tea-Lemonade",
              },
              {
                name: "Iced Matcha Lemonade",
                image: "/Iced Matcha Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 90,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.25",
                    calories: 120,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 170,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 220,
                    size2: "20 fl oz",
                  },
                ],
                link: "ced-Matcha-Lemonade",
              },
              {
                name: "Iced Matcha Tea Latte with Oleato Golden Foam™",
                image: "/Iced Matcha Tea Latte with Oleato Golden Foam™.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$6.75",
                    calories: 340,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$7.25",
                    calories: 410,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$7.75",
                    calories: 490,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Matcha-Tea-Latte-with-Oleato-Golden-Foam",
              },
            ],
          },
          {
            category: "Iced Herbal Teas",
            products: [
              {
                name: "Iced Passion Tango® Tea",
                image: "/Iced Passion Tango® Tea.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.45",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.75",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 0,
                    size2: "24 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.45",
                    calories: 0,
                    size2: "30 fl oz",
                  },
                ],
                link: "Iced Passion TangoTea",
              },
              {
                name: "Iced Passion Tango® Tea Lemonade",
                image: "/Iced Passion Tango® Tea Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 35,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.25",
                    calories: 50,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.75",
                    calories: 70,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 90,
                    size2: "20 fl oz",
                  },
                ],
                link: "Iced-Passion-Tango-Tea-Lemonade",
              },
            ],
          },
          {
            category: "Lemonades",
            products: [
              {
                name: "Lemonade",
                image: "/Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.25",
                    calories: 80,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.65",
                    calories: 120,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 160,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Trenta",
                    price: "$4.95",
                    calories: 200,
                    size2: "20 fl oz",
                  },
                  {
                    size: "Kids",
                    price: "$2.75",
                    calories: 80,
                    size2: "12 fl oz",
                  },
                ],
                link: "Lemonade",
              },
              {
                name: "Blended Strawberry Lemonade",
                image: "/Blended Strawberry Lemonade.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$5.25",
                    calories: 130,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.65",
                    calories: 190,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$6.25",
                    calories: 260,
                    size2: "24 fl oz",
                  },
                ],
                link: "Blended-Strawberry-Lemonade",
              },
            ],
          },
        ],
      },
      {
        name: "Hot Teas",
        image: "/Hot Teas.avif",
        link: "hot-teas",
        subItems: [
          {
            category: "Chai Teas",
            products: [
              {
                name: "Chai Latte",
                image: "/Chai Tea Latte.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 120,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 240,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.65",
                    calories: 310,
                    size2: "20 fl oz",
                  },
                ],
                link: "Hot-Teas",
              },
              {
                name: "Chai Tea",
                image: "/Chai Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "Chai-Tea",
              },
            ],
          },
          {
            category: "Black Teas",
            products: [
              {
                name: "Earl Grey Tea",
                image: "/Earl Grey Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "Black-Teas",
              },
              {
                name: "Royal English Breakfast Tea",
                image: "/Royal English Breakfast Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "Royal-English-Breakfast-Tea",
              },
              {
                name: "Royal English breakfast latte",
                image: "/Royal English breakfast tea latte.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 80,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 110,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 150,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.65",
                    calories: 190,
                    size2: "20 fl oz",
                  },
                ],
                link: "royal-english-breakfast-latte",
              },
            ],
          },
          {
            category: "Green Teas",
            products: [
              {
                name: "Emperors Clouds and Mist",
                image: "/Emperor’s Clouds & Mist®.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Matcha Latte",
                image: "/Matcha Tea Latte.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$4.85",
                    calories: 110,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.25",
                    calories: 240,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.65",
                    calories: 320,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Honey Citrus Mint Tea",
                image: "/Honey Citrus Mint Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$3.65",
                    calories: 70,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.75",
                    calories: 90,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.25",
                    calories: 130,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.25",
                    calories: 150,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Herbal Teas",
            products: [
              {
                name: "Mint Majesty",
                image: "/Chai Tea.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 0,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.85",
                    calories: 0,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Milk, Juice & More",
        image: "/Milk, Juice & More.avif",
        link: "milk-juice-and-more",
        subItems: [
          {
            category: "Hot Chocolates",
            products: [
              {
                name: "Hot Chocolate",
                image: "/Hot Chocolate.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$2.95",
                    calories: 190,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$3.85",
                    calories: 190,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 280,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.65",
                    calories: 370,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.95",
                    calories: 450,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "White Hot Chocolate",
                image: "/White Hot Chocolate.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$3.75",
                    calories: 200,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$4.65",
                    calories: 200,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 300,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 400,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 490,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Juice",
            products: [
              {
                name: "Caramel Apple Spice",
                image: "/Caramel Apple Spice.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$3.85",
                    calories: 220,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$4.65",
                    calories: 220,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$4.75",
                    calories: 310,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$5.45",
                    calories: 380,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$5.75",
                    calories: 460,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Steamed Apple Juice",
                image: "/Steamed Apple Juice.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$2.45",
                    calories: 120,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 120,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 170,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.45",
                    calories: 220,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.75",
                    calories: 280,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Milk & Steamers",
            products: [
              {
                name: "Cold Milk",
                image: "/Cold Milk.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$3.65",
                    calories: 200,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.85",
                    calories: 260,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 370,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Steamed Milk",
                image: "/Steamed Milk.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$2.65",
                    calories: 100,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$3.55",
                    calories: 100,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.65",
                    calories: 160,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$3.85",
                    calories: 200,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$3.95",
                    calories: 250,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Vanilla Crème",
                image: "/Vanilla Crème.avif",
                sizes: [
                  {
                    size: "Kids",
                    price: "$2.95",
                    calories: 180,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Short",
                    price: "$3.85",
                    calories: 190,
                    size2: "8 fl oz",
                  },
                  {
                    size: "Tall",
                    price: "$3.95",
                    calories: 280,
                    size2: "12 fl oz",
                  },
                  {
                    size: "Grande",
                    price: "$4.65",
                    calories: 350,
                    size2: "16 fl oz",
                  },
                  {
                    size: "Venti",
                    price: "$4.95",
                    calories: 430,
                    size2: "20 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Bottled Beverages",
        image: "/Bottled Beverages.avif",
        link: "bottled-beverages",
        subItems: [
          {
            category: "Water and Sparkling",
            products: [
              {
                name: "Spindrift® Lemon Sparkling Water",
                image: "/Spindrift® Lemon Sparkling Water.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$2.75",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Spindrift® Raspberry Lime Sparkling Water",
                image: "/Spindrift® Raspberry Lime Sparkling Water.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$2.75",
                    calories: 9,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Spindrift® Grapefruit Sparkling Water",
                image: "/Spindrift® Grapefruit Sparkling Water.jpg",
                sizes: [
                  {
                    size: "Tall",
                    price: "$2.75",
                    calories: 15,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Ethos® Bottled Water",
                image: "/Ethos® Bottled Water.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$2.75",
                    calories: 0,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Protein and Milk",
            products: [
              {
                name: "Koia® Cacao Bean Protein Shake",
                image: "/Koia® Cacao Bean Protein Shake.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Koia® Vanilla Bean Protein Shake",
                image: "/Koia® Vanilla Bean Protein Shake.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.95",
                    calories: 190,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Horizon® Chocolate Organic Milk",
                image: "/Horizon® Chocolate Organic Milk.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.85",
                    calories: 0,
                    size2: "8 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Horizon® Organic Lowfat Milk Box",
                image: "/Horizon® Organic Lowfat Milk Box.avif",
                sizes: [
                  {
                    size: "Short",
                    price: "$2.75",
                    calories: 170,
                    size2: "8 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Juice",
            products: [
              {
                name: "Evolution Fresh® Organic Defense Up®",
                image: "/Evolution Fresh® Organic Defense Up®.avif",
                sizes: [
                  {
                    size: "11 fl oz",
                    price: "$5.25",
                    calories: 170,
                    size2: "11 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Evolution Fresh® Orange",
                image: "/Evolution Fresh® Orange.avif",
                sizes: [
                  {
                    size: "11 fl oz",
                    price: "$4.25",
                    calories: 170,
                    size2: "11 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Evolution Fresh® Organic Super Fruit Greens",
                image: "/Evolution Fresh® Organic Super Fruit Greens.avif",
                sizes: [
                  {
                    size: "11 fl oz",
                    price: "$5.25",
                    calories: 180,
                    size2: "11 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Tree Top Apple Juice Box",
                image: "/Tree Top Apple Juice Box.avif",
                sizes: [
                  {
                    size: "8-Packaged",
                    price: "$2.65",
                    calories: 120,
                    size2: "8 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Starbucks™ Baya Energy Raspberry Lime",
                image: "/Starbucks™ Baya Energy Raspberry Lime.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$2.95",
                    calories: 170,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
          {
            category: "Kombucha",
            products: [
              {
                name: "Brew DR. Island Mango Kombucha",
                image: "/Brew DR. Island Mango Kombucha.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.25",
                    calories: 70,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
              {
                name: "Brew DR. Superberry Kombucha",
                image: "/Brew DR. Superberry Kombucha.avif",
                sizes: [
                  {
                    size: "Tall",
                    price: "$4.25",
                    calories: 50,
                    size2: "12 fl oz",
                  },
                ],
                link: "",
              },
            ],
          },
        ],
      },
    ],
  },

  // Foods
  {
    category: "Foods",
    items: [
      {
        name: "Hot Breakfast",
        image: "/Double-Smoked Bacon, Cheddar & Egg Sandwich.avif",
        link: "hot-breakfast",
        subItems: [
          {
            category: "Breakfast Sandwiches & Wraps",
            products: [
              {
                name: "Chicken, Maple Butter & Egg Sandwich",
                image: "/Chicken, Maple Butter & Egg Sandwich.avif",
                calories: 450,
                price: "$6.45",
                link: "",
              },
              {
                name: "Bacon, Sausage & Egg Wrap",
                image: "/Bacon, Sausage & Egg Wrap.avif",
                calories: 640,
                price: "$7.25",
                link: "",
              },
              {
                name: "Impossible Breakfast sandwich",
                image: "/Impossible™ Breakfast Sandwich.avif",
                calories: 420,
                price: "$6.45",
                link: "",
              },
              {
                name: "Bacon, Gouda & Egg Sandwich",
                image: "/Bacon, Gouda & Egg Sandwich.avif",
                calories: 360,
                price: "$6.25",
                link: "",
              },
              {
                name: "Double-Smoked Bacon, Cheddar & Egg Sandwich",
                image: "/Double-Smoked Bacon, Cheddar & Egg Sandwich.avif",
                calories: 500,
                price: "$6.45",
                link: "",
              },
              {
                name: "Turkey Bacon, Cheddar & Egg White Sandwich",
                image: "/Turkey Bacon, Cheddar & Egg White Sandwich.avif",
                calories: 230,
                price: "$5.65",
                link: "",
              },
              {
                name: "Sausage, Cheddar & Egg Sandwich",
                image: "/Sausage, Cheddar & Egg Sandwich.avif",
                calories: 480,
                price: "$5.65",
                link: "",
              },
              {
                name: "Spinach, Feta & Egg White Wrap",
                image: "/Spinach, Feta & Egg White Wrap.avif",
                calories: 290,
                price: "$5.95",
                link: "",
              },
              {
                name: "Avocado Spread",
                image: "/Avocado Spread.avif",
                calories: 90,
                price: "$1.45",
                link: "",
              },
            ],
          },
          {
            category: "Bakes & Egg Bites",
            products: [
              {
                name: "Potato, Cheddar & Chive Bakes",
                image: "/Potato, Cheddar & Chive Bakes.avif",
                calories: 210,
                price: "$4.95",
                link: "",
              },
              {
                name: "Kale & Mushroom Egg Bites",
                image: "/Kale & Mushroom Egg Bites.avif",
                calories: 230,
                price: "$5.95",
                link: "",
              },
              {
                name: "Bacon & Gruyere Egg Bites",
                image: "/Bacon & Gruyère Egg Bites.avif",
                calories: 300,
                price: "$5.95",
                link: "",
              },
              {
                name: "Egg White & Roasted Red Pepper Egg Bites",
                image: "/Egg White & Roasted Red Pepper Egg Bites.avif",
                calories: 170,
                price: "$5.95",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Oatmeal & Yogurt",
        image: "/Oatmeal & Yogurt.avif",
        link: "oatmeal-and-yogurt",
        subItems: [
          {
            category: "Oatmeal & Yogurt",
            products: [
              {
                name: "Rolled & Steel-Cut Oatmeal",
                image: "/Oatmeal & Yogurt.avif",
                calories: 160,
                price: "$4.65",
                link: "",
              },
              {
                name: "Berry Trio Parfait",
                image: "/Berry Trio Parfait.avif",
                calories: 240,
                price: "$4.25",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Bakery",
        image: "/Pineapple Cloud Cake.avif",
        link: "bakery",
        subItems: [
          {
            category: "Bagels",
            products: [
              {
                name: "Plain Bagel",
                image: "/Plain Bagel.avif",
                calories: 290,
                price: "$3.25",
                link: "",
              },
              {
                name: "Everything Bagel",
                image: "/Everything Bagel.avif",
                calories: 290,
                price: "$3.25",
                link: "",
              },
              {
                name: "Avocado Spread",
                image: "/Avocado Spread.avif",
                calories: 90,
                price: "$1.45",
                link: "",
              },
            ],
          },
          {
            category: "Cake Pops",
            products: [
              {
                name: "Orange Cream Cake Pop",
                image: "/Orange Cream Cake Pop.avif",
                calories: 140,
                price: "$4.25",
                link: "",
              },
              {
                name: "Cookies & Cream Cake Pop",
                image: "/Cookies & Cream Cake Pop.avif",
                calories: 140,
                price: "$3.95",
                link: "",
              },
              {
                name: "Birthday Cake Pop",
                image: "/Birthday Cake Pop.avif",
                calories: 160,
                price: "$3.95",
                link: "",
              },
              {
                name: "Chocolate Cake Pop",
                image: "/Chocolate Cake Pop.avif",
                calories: 150,
                price: "$3.95",
                link: "",
              },
            ],
          },
          {
            category: "Cookies, Brownies & Bars",
            products: [
              {
                name: "Double Chocolate Brownie",
                image: "/Double Chocolate Brownie.avif",
                calories: 480,
                price: "$4.25",
                link: "",
              },
              {
                name: "Chocolate Chip Cookie",
                image: "/Chocolate Chip Cookie.avif",
                calories: 370,
                price: "$2.95",
                link: "",
              },
              {
                name: "Marshmallow Dream Bar",
                image: "/Marshmallow Dream Bar.avif",
                calories: 230,
                price: "$2.50",
                link: "",
              },
            ],
          },
          {
            category: "Croissants",
            products: [
              {
                name: "Ham & Swiss Croissant",
                image: "/Ham & Swiss Croissant.avif",
                calories: 320,
                price: "$4.95",
                link: "",
              },
              {
                name: "Butter Croissant",
                image: "/Butter Croissant.avif",
                calories: 250,
                price: "$3.65",
                link: "",
              },
              {
                name: "Chocolate Croissant",
                image: "/Chocolate Croissant.avif",
                calories: 300,
                price: "$3.95",
                link: "",
              },
            ],
          },
          {
            category: "Loaves, Cakes & Buns",
            products: [
              {
                name: "Pineapple Cloud Cake",
                image: "/Pineapple Cloud Cake.avif",
                calories: 240,
                price: "$3.65",
                link: "",
              },
              {
                name: "Cinnamon Coffee Cake",
                image: "/Cinnamon Coffee Cake.avif",
                calories: 380,
                price: "$3.95",
                link: "",
              },
              {
                name: "Iced Lemon Loaf",
                image: "/Iced Lemon Loaf.avif",
                calories: 450,
                price: "$4.25",
                link: "",
              },
              {
                name: "Banana Walnut & Pecan Loaf",
                image: "/Banana Walnut & Pecan Loaf.avif",
                calories: 410,
                price: "$4.25",
                link: "",
              },
              {
                name: "Pumpkin & Pepita Loaf",
                image: "/Pumpkin & Pepita Loaf.avif",
                calories: 390,
                price: "$4.25",
                link: "",
              },
            ],
          },
          {
            category: "Danishes & Doughnuts",
            products: [
              {
                name: "Vanilla Bean Custard Danish",
                image: "/Vanilla Bean Custard Danish.avif",
                calories: 230,
                price: "$4.70",
                link: "",
              },
              {
                name: "Glazed Doughnut",
                image: "/Glazed Doughnut.avif",
                calories: 440,
                price: "$3.25",
                link: "",
              },
              {
                name: "Cheese Danish",
                image: "/Cheese Danish.avif",
                calories: 290,
                price: "$3.65",
                link: "",
              },
              {
                name: "Blueberry Scone",
                image: "/Blueberry Scone.avif",
                calories: 410,
                price: "$3.45",
                link: "",
              },
              {
                name: "Petite Vanilla Bean Scone",
                image: "/Petite Vanilla Bean Scone.avif",
                calories: 130,
                price: "$2.25",
                link: "",
              },
              {
                name: "Blueberry Muffin",
                image: "/Blueberry Muffin.avif",
                calories: 330,
                price: "$3.65",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Lunch",
        image: "/Tomato & Mozzarella on Focaccia.avif",
        link: "lunch",
        subItems: [
          {
            category: "Warm Sandwiches",
            products: [
              {
                name: "Crispy Grilled Cheese on Sourdough",
                image: "/Crispy Grilled Cheese on Sourdough.avif",
                calories: 520,
                price: "$7.45",
                link: "",
              },
              {
                name: "Ham & Swiss on Baguette",
                image: "/Ham & Swiss on Baguette.avif",
                calories: 500,
                price: "$7.85",
                link: "",
              },
              {
                name: "Turkey, Provolone & Pesto on Ciabatta",
                image: "/Turkey, Provolone & Pesto on Ciabatta.avif",
                calories: 520,
                price: "$7.45",
                link: "",
              },
              {
                name: "Tomato & Mozzarella on Facoccia",
                image: "/Tomato & Mozzarella on Focaccia.avif",
                calories: 360,
                price: "$6.95",
                link: "",
              },
              {
                name: "Avocado Spread",
                image: "/Avocado Spread.avif",
                calories: 90,
                price: "$1.45",
                link: "",
              },
            ],
          },
          {
            category: "Protein Boxes",
            products: [
              {
                name: "Eggs & Cheddar Protein Box",
                image: "/Eggs & Cheddar Protein Box.avif",
                calories: 460,
                price: "$6.95",
                link: "",
              },
              {
                name: "PB&J Protein Box",
                image: "/PB&J Protein Box.avif",
                calories: 520,
                price: "$6.75",
                link: "",
              },
              {
                name: "Cheese & Fruit Protein Box",
                image: "/Cheese & Fruit Protein Box.avif",
                calories: 470,
                price: "$6.75",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Snacks & Sweets",
        image: "/Snacks & Sweets.avif",
        link: "snacks-and-sweets",
        subItems: [
          {
            category: "Biscotti & Cookies",
            products: [
              {
                name: "Madeleines",
                image: "/Madeleines.avif",
                calories: 220,
                price: "$2.45",
                link: "",
              },
              {
                name: "Vanilla Biscotti with Almonds",
                image: "/Vanilla Biscotti with Almonds.avif",
                calories: 200,
                price: "$1.95",
                link: "",
              },
            ],
          },
          {
            category: "Chocolates & Candy",
            products: [
              {
                name: "Salted Almond Chocolate Bites",
                image: "/Salted Almond Chocolate Bites.avif",
                calories: 300,
                price: "$2.75",
                link: "",
              },
              {
                name: "Dark Chocolate Covered Espresso Beans",
                image: "/Dark Chocolate Covered Espresso Beans.avif",
                calories: 260,
                price: "$3.50",
                link: "",
              },
            ],
          },
          {
            category: "Fruit & Nuts",
            products: [
              {
                name: "SkinnyDipped Lemon Bliss Almonds",
                image: "/SkinnyDipped Lemon Bliss Almonds.avif",
                calories: 170,
                price: "$2.95",
                link: "",
              },
              {
                name: "Skinny Dipped Dark Chocolate Cocoa Almonds",
                image: "/SkinnyDipped Dark Chocolate Cocoa Almonds.avif",
                calories: 170,
                price: "$2.95",
                link: "",
              },
              {
                name: "Peter Rabbit™ Organics Strawberry Banana",
                image: "/Peter Rabbit™ Organics Strawberry Banana.avif",
                calories: 80,
                price: "$2.25",
                link: "",
              },
            ],
          },
          {
            category: "Gum & Mints",
            products: [
              {
                name: "Spearmint Gum",
                image: "/Spearmint Gum.avif",
                calories: 0,
                price: "$2.50",
                link: "",
              },
            ],
          },
          {
            category: "Popcorn & Chips",
            products: [
              {
                name: "Siete Sea Salt Kettle Cooked Potato Chips",
                image: "/Siete Sea Salt Kettle Cooked Potato Chips.avif",
                calories: 210,
                price: "$2.55",
                link: "",
              },
              {
                name: "Starbucks Butter Popcorn",
                image: "/Starbucks Butter Popcorn.avif",
                calories: 150,
                price: "$1.50",
                link: "",
              },
              {
                name: "Perfectly Salted Chips",
                image: "/Perfectly Salted Chips.avif",
                calories: 280,
                price: "$1.75",
                link: "",
              },
            ],
          },
          {
            category: "Meat & Cheese",
            products: [
              {
                name: "String Cheese",
                image: "/String Cheese.jpg",
                calories: 0,
                price: "$2.25",
                link: "",
              },
            ],
          },
          {
            category: "Snack Bars",
            products: [
              {
                name: "Perfect Bar® - Dark Chocolate Chip Peanut Butter",
                image: "/Perfect Bar® - Dark Chocolate Chip Peanut Butter.avif",
                calories: 320,
                price: "$3.95",
                link: "",
              },
              {
                name: "Perfect Bar® Peanut Butter",
                image: "/SPerfect Bar® Peanut Butter.avif",
                calories: 330,
                price: "$3.95",
                link: "",
              },
              {
                name: "KIND® Salted Caramel & Dark Chocolate Nut Bar",
                image: "/KIND® Salted Caramel & Dark Chocolate Nut Bar.avif",
                calories: 200,
                price: "$2.25",
                link: "",
              },
            ],
          },
          {
            category: "Spreads",
            products: [
              {
                name: "Avocado Spread",
                image: "/Avocado Spread.avif",
                calories: 90,
                price: "$1.45",
                link: "",
              },
            ],
          },
        ],
      },
    ],
  },

  // At Home Coffee
  {
    category: "At Home Coffee",
    items: [
      {
        name: "Whole Bean",
        image: "/Whole Bean.avif",
        link: "whole-bean",
        subItems: [
          {
            category: "Blonde Roast",
            products: [
              {
                name: "Starbucks® Green Apron Blend™",
                image: "/Starbucks® Green Apron Blend™.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "VIA® Veranda Blend™",
                image: "/VIA® Veranda Blend™.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Starbucks® Blonde Espresso Roast",
                image: "/Starbucks® Blonde Espresso Roast.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
            ],
          },
          {
            category: "Medium Roast",
            products: [
              {
                name: "Starbucks Sirens Blend",
                image: "/Starbucks Siren’s Blend™.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Guatemala Antigua",
                image: "/Guatemala Antigua.avif",
                size: "1lb",
                price: "$14.95",
                link: "",
              },
              {
                name: "Pike Place® Roast",
                image: "/Pike Place® Roast.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Organic Yukon Blend®",
                image: "/Organic Yukon Blend®.avif",
                size: "1lb",
                price: "$14.95",
                link: "",
              },
              {
                name: "Starbucks Odyssey Blend® 2024",
                image: "/Starbucks Odyssey Blend® 2024.avif",
                size: "1lb",
                price: "$15.95",
                link: "",
              },
            ],
          },
          {
            category: "Dark Roast",
            products: [
              {
                name: "Starbucks® Anniversary Blend 2024",
                image: "/Starbucks® Anniversary Blend 2024.avif",
                size: "1lb",
                price: "$15.95",
                link: "",
              },
              {
                name: "Decaf Sumatra",
                image: "/Decaf Sumatra.avif",
                size: "1lb",
                price: "$14.95",
                link: "",
              },
              {
                name: "Caffè Verona®",
                image: "/Caffè Verona®.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Espresso Roast",
                image: "/Espresso Roast.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Italian Roast",
                image: "/Italian Roast.avif",
                size: "1lb",
                price: "$13.95",
                link: "",
              },
              {
                name: "Komodo Dragon Blend®",
                image: "/Komodo Dragon Blend®.avif",
                size: "1lb",
                price: "$14.95",
                link: "",
              },
              {
                name: "Sumatra",
                image: "/Sumatra.avif",
                size: "1lb",
                price: "$14.95",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "VIA® Instant",
        image: "/VIA® Instant.avif",
        link: "via-instant",
        subItems: [
          {
            category: "Flavored",
            products: [
              {
                name: "VIA® Sweetened Iced Coffee",
                image: "/VIA® Sweetened Iced Coffee.avif",
                price: "$7.95",
                link: "",
              },
            ],
          },
          {
            category: "Blonde Roast",
            products: [
              {
                name: "VIA® Veranda Blend™",
                image: "/VIA® Veranda Blend™.avif",
                price: "$11.95",
                link: "",
              },
            ],
          },
          {
            category: "Medium Roast",
            products: [
              {
                name: "Starbucks VIA® Instant Pike Place® Roast",
                image: "/Starbucks VIA® Instant Pike Place® Roast.avif",
                price: "$11.95",
                link: "",
              },
            ],
          },
          {
            category: "Dark Roast",
            products: [
              {
                name: "VIA® Italian Roast",
                image: "/VIA® Italian Roast.avif",
                price: "$11.95",
                link: "",
              },
              {
                name: "VIA® Decaf Italian Roast",
                image: "/VIA® Decaf Italian Roast.avif",
                price: "$12.95",
                link: "",
              },
            ],
          },
        ],
      },
    ],
  },

  // Merchandise
  {
    category: "Merchandise",
    items: [
      {
        name: "Cold Cups",
        image: "/Cold Cups.avif",
        link: "cold-cups",
        subItems: [
          {
            category: "Cold Cups",
            products: [
              {
                name: "White Siren Bling Plastic Cold Cup - 16 fl oz",
                image: "/White Siren Bling Plastic Cold Cup - 16 fl oz.avif",
                price: "$19.95",
                link: "",
              },
              {
                name: "White Siren Bling Plastic Cold Cup - 24 fl oz",
                image: "/White Siren Bling Plastic Cold Cup - 24 fl oz.avif",
                price: "$22.95",
                link: "",
              },
              {
                name: "UV Color - Changing Plastic Reusable Cold Cup with straw - 24 fl oz",
                image:
                  "/UV Color-Changing Plastic Reusable Cold Cup with Straw - 24 fl oz.avif",
                price: "$4.95",
                link: "",
              },
              {
                name: "Sky Blue Soft - Touch Stainless - Steel Vacuum Cold Cup - 24 fl oz",
                image:
                  "/Sky Blue Soft-Touch Stainless-Steel Vacuum Cold Cup - 24 fl oz.avif",
                price: "$59.95",
                link: "",
              },
              {
                name: "Multicolor Plastic Reusable Cold Cup with Dome Lid, 5-Pack - 24 fl oz",
                image:
                  "/Multicolor Plastic Reusable Cold Cup with Dome Lid, 5-Pack - 24 fl oz.avif",
                price: "$22.95",
                link: "",
              },
              {
                name: "Plastic Reusable Cold Cup with Lid & Straw - 24 fl oz",
                image:
                  "/Plastic Reusable Cold Cup with Lid & Straw - 24 fl oz.avif",
                price: "$3.00",
                link: "",
              },
              {
                name: "Siren Logo Plastic Cold Cup - 24 fl oz",
                image: "/Siren Logo Plastic Cold Cup - 24 fl oz.avif",
                price: "$14.95",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Tumblers",
        image: "/Tumblers.avif",
        link: "tumblers",
        subItems: [
          {
            category: "Tumblers",
            products: [
              {
                name: "Siren Logo Plastic Hot Cup - 16 fl oz",
                image: "/Tumblers.avif",
                price: "$2.00",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Mugs",
        image: "/Mugs.avif",
        link: "mugs",
        subItems: [
          {
            category: "Mugs",
            products: [
              {
                name: "Glass Mug - 16 fl oz",
                image: "/Mugs.avif",
                price: "$16.95",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Water Bottles",
        image: "/Water Bottles.avif",
        link: "water-bottles",
        subItems: [
          {
            category: "Water Bottles",
            products: [
              {
                name: "Twist to Sip Stainless-Steel Water Bottle - 20 fl oz",
                image: "/Water Bottles.avif",
                price: "$32.95",
                link: "",
              },
            ],
          },
        ],
      },
      {
        name: "Other",
        image: "/Other.avif",
        link: "other",
        subItems: [
          {
            category: "Other",
            products: [
              {
                name: "French Press",
                image: "/Other.avif",
                price: "$24.95",
                link: "",
              },
              {
                name: "Pour Over",
                image: "/Pour Over.avif",
                price: "$17.95",
                link: "",
              },
              {
                name: "Small Shopping Bag",
                image: "/Small Shopping Bag.avif",
                price: "$0.00",
                link: "",
              },
            ],
          },
        ],
      },
    ],
  },
];
