/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    async redirects() {
        return [
   
{
  source: '/americano-caffe',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/americano-cafe',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/caffe-american',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/cafe-americano',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/americano',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/americano-caffe',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/caffe-americano-coffee',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/caffe-americano-beverage',
  destination: '/caffe-americano',
  permanent: true,
},
{
  source: '/americano-caffe-drink',
  destination: '/caffe-americano',
  permanent: true,
},


{
  source: '/espresso-coffee',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/coffee-espresso',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/espresso-drink',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/drink-espresso',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/espresso-beverage',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/beverage-espresso',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/espresso-menu',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/menu-espresso',
  destination: '/espresso',
  permanent: true,
},
{
  source: '/espresso-special',
  destination: '/espresso',
  permanent: true,
},

{
  source: '/con-panna',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/panna-con-espresso',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/espresso-panna',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/panna-espresso',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/con-panna-espresso',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/espresso-con-panna-coffee',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/espresso-panna-drink',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/panna-espresso-beverage',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/espresso-con-panna-menu',
  destination: '/espresso-con-panna',
  permanent: true,
},
{
  source: '/con-panna-espresso-special',
  destination: '/espresso-con-panna',
  permanent: true,
},


{
  source: '/cappuccino-coffee',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/coffee-cappuccino',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/cappuccino-drink',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/drink-cappuccino',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/cappuccino-beverage',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/beverage-cappuccino',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/cappuccino-menu',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/menu-cappuccino',
  destination: '/cappuccino',
  permanent: true,
},
{
  source: '/cappuccino-special',
  destination: '/cappuccino',
  permanent: true,
},

{
  source: '/mocha-caffe',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/mocha-coffee',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/caffe-mocha-drink',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/drink-caffe-mocha',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/caffe-mocha-beverage',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/beverage-caffe-mocha',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/caffe-mocha-menu',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/menu-caffe-mocha',
  destination: '/caffe-mocha',
  permanent: true,
},
{
  source: '/caffe-mocha-special',
  destination: '/caffe-mocha',
  permanent: true,
},

{
  source: '/white-chocolate',
  destination: '/white-chocolate-mocha',
  permanent: true,
          },
{
  source: '/white-mocha',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/mocha-white-chocolate',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/chocolate-white-mocha',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/white-chocolate-coffee',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/coffee-white-chocolate',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/white-chocolate-drink',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/drink-white-chocolate',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/white-chocolate-beverage',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/beverage-white-chocolate',
  destination: '/white-chocolate-mocha',
  permanent: true,
},
{
  source: '/white-chocolate-menu',
  destination: '/white-chocolate-mocha',
  permanent: true,
},


{
  source: '/latte-caffe',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/latte-coffee',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/caffe-latte-drink',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/drink-caffe-latte',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/caffe-latte-beverage',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/beverage-caffe-latte',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/caffe-latte-menu',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/menu-caffe-latte',
  destination: '/caffe-latte',
  permanent: true,
},
{
  source: '/caffe-latte-special',
  destination: '/caffe-latte',
  permanent: true,
},

{
  source: '/macchiato',
  destination: '/caramel-macchiato',
  permanent: true,
          },
{
  source: '/macchiato-caramel',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/caramel-coffee',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/macchiato-caramel-drink',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/drink-caramel-macchiato',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/caramel-macchiato-beverage',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/beverage-caramel-macchiato',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/caramel-macchiato-menu',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/menu-caramel-macchiato',
  destination: '/caramel-macchiato',
  permanent: true,
},
{
  source: '/caramel-macchiato-special',
  destination: '/caramel-macchiato',
  permanent: true,
},

{
  source: '/macchiato-espresso',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/espresso-macchiato-coffee',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/macchiato-coffee-espresso',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/coffee-macchiato-espresso',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/espresso-macchiato-drink',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/macchiato-espresso-beverage',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/beverage-espresso-macchiato',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/espresso-macchiato-menu',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/espresso-macchiato-special',
  destination: '/espresso-macchiato',
  permanent: true,
},
{
  source: '/misto',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/misto-caffe',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/misto-coffee',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/caffe-misto-drink',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/drink-caffe-misto',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/caffe-misto-beverage',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/beverage-caffe-misto',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/caffe-misto-menu',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/menu-caffe-misto',
  destination: '/caffe-misto',
  permanent: true,
},
{
  source: '/caffe-misto-special',
  destination: '/caffe-misto',
  permanent: true,
},

{
  source: '/white-flat',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/flat-white-coffee',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/coffee-flat-white',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/flat-white-drink',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/drink-flat-white',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/flat-white-beverage',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/beverage-flat-white',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/flat-white-menu',
  destination: '/flat-white',
  permanent: true,
},
{
  source: '/menu-flat-white',
  destination: '/flat-white',
  permanent: true,
},

{
  source: '/srens-blend',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/siren-blend',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/sirens-blend',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/starbucks-blend',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/siren-blend-starbucks',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/blended-sirens',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/siren-starbucks-blend',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/blend-sirens',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/blend-sirens-starbucks',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},
{
  source: '/starbucks-blend-sirens',
  destination: '/starbucks-sirens-blend',
  permanent: true,
},


{
  source: '/chai-latte-iced',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/chai-iced-latte',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/iced-latte-chai',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/latte-chai-iced',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/iced-latte-chai',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/chai-latte-ice',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/ice-chai-latte',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/iced-chai',
  destination: '/iced-chai-latte',
  permanent: true,
},
{
  source: '/chai-iced',
  destination: '/iced-chai-latte',
  permanent: true,
},

{
  source: '/mocha-cookie-crumble',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/cookie-crumble-mocha-frappuccino',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/mocha-crumble-frappuccino',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/cookie-crumble-frappuccino-mocha',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/frappuccino-mocha-cookie-crumble',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/mocha-crumble-cookie-frappuccino',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/crumble-mocha-frappuccino',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/frappuccino-cookie-crumble-mocha',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/mocha-frappuccino-cookie-crumble',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},
{
  source: '/cookie-mocha-frappuccino-crumble',
  destination: '/mocha-cookie-crumble-frappuccino',
  permanent: true,
},

{
  source: '/breakfast-sandwich-impossible',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/impossible-sandwich',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/sandwich-impossible-breakfast',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/breakfast-impossible-sandwich',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/impossible-breakfast',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/breakfast-sandwich',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/impossible-sandwich-breakfast',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/sandwich-breakfast-impossible',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},
{
  source: '/breakfast-sandwich-impossible',
  destination: '/impossible-breakfast-sandwich',
  permanent: true,
},

{
  source: '/fruit-cheese-protein-box',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/protein-box-cheese-fruit',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/cheese-protein-box-fruit',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/fruit-protein-box-cheese',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/box-cheese-fruit-protein',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/protein-fruit-cheese-box',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/cheese-protein-fruit-box',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/fruit-box-cheese-protein',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},
{
  source: '/box-fruit-protein-cheese',
  destination: '/cheese-and-fruit-protein-box',
  permanent: true,
},

{
  source: '/chocolate-covered-espresso-beans',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/espresso-beans-dark-chocolate',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/dark-espresso-beans-chocolate',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/covered-espresso-beans-dark-chocolate',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/espresso-beans-chocolate-dark',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/dark-chocolate-espresso-beans',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/beans-dark-chocolate-espresso',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/chocolate-espresso-beans-dark',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/beans-chocolate-dark-espresso',
  destination: '/dark-chocolate-covered-espresso-beans',
  permanent: true,
},
{
  source: '/brown-sugar-oatmilk-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/shaken-espresso-brown-sugar-oatmilk',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/oatmilk-brown-sugar-iced-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/iced-espresso-brown-sugar-oatmilk',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/shaken-iced-brown-sugar-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/brown-sugar-iced-oatmilk-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/espresso-oatmilk-shaken-brown-sugar',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/oatmilk-shaken-brown-sugar-iced-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},
{
  source: '/iced-shaken-brown-sugar-oatmilk-espresso',
  destination: '/iced-brown-sugar-oatmilk-shaken-espresso',
  permanent: true,
},

{
  source: '/hot-white-chocolate',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/chocolate-hot-white',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/hot-chocolate-white',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/white-chocolate-hot',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/chocolate-white-hot',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/white-hot-choco',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/choco-white-hot',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/hot-choco-white',
  destination: '/white-hot-chocolate',
  permanent: true,
},
{
  source: '/white-choco-hot',
  destination: '/white-hot-chocolate',
  permanent: true,
},


{
  source: '/java-chip-frappuccino',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/chip-frappuccino-java',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/blended-java-chip-frappuccino',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/frappuccino-java-chip',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/beverage-java-chip-frappuccino',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/frappuccino-blended-java-chip',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/java-frappuccino-chip',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/blended-beverage-java-chip-frappuccino',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},
{
  source: '/chip-frappuccino-blended-java',
  destination: '/java-chip-frappuccino-blended-beverage',
  permanent: true,
},

{
  source: '/passion-tango-tea-iced',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/tango-tea-iced-passion',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/iced-tea-passion-tango',
  destination: '/iced-passion-tango-tea',
  permanent: true,
          },
{
  source: '/passion-tango',
  destination: '/iced-passion-tango-tea',
  permanent: true,
          },
{
  source: '/passion-iced-tango-tea',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/tango-iced-tea-passion',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/iced-tea-tango-passion',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/tea-iced-passion-tango',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/tango-passion-tea-iced',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},
{
  source: '/passion-tango-iced-tea',
  destination: '/iced-passion-tango-tea',
  permanent: true,
          },
{
  source: '/iced-passion-tango',
  destination: '/iced-passion-tango-tea',
  permanent: true,
},

{
  source: '/dragonfruit-mango-refreshers',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/starbucks-refreshers-mango-dragonfruit',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/refreshers-dragonfruit-mango',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/mango-refreshers-dragonfruit',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/dragonfruit-refreshers-mango',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/refreshers-starbucks-mango-dragonfruit',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/mango-starbucks-refreshers-dragonfruit',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/dragonfruit-mango-starbucks-refreshers',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/starbucks-mango-dragonfruit-refreshers',
  destination: '/mango-dragonfruit-starbucks-refreshers-beverage',
  permanent: true,
},

{
  source: '/berry-lemonade-refreshers-summer',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/starbucks-refreshers-summer-berry-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/refreshers-berry-summer-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/lemonade-summer-berry-refreshers',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/berry-refreshers-summer-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/refreshers-starbucks-summer-berry-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/summer-refreshers-berry-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/lemonade-refreshers-summer-berry',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},
{
  source: '/berry-summer-refreshers-lemonade',
  destination: '/summer-berry-lemonade-starbucks-refreshers-beverage',
  permanent: true,
},

        ]
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withContentlayer({ ...nextConfig }); 