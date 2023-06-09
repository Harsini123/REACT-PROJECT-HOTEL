const menu = [
    {
      id: 1,
      title: 'DOSA',
      category: 'FEAST',
      price: 90.00,
      img: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: `A dose, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice`,
    },
    {
      id: 2,
      title: 'Idli',
      category: 'FEAST',
      price: 60.00,
      img: 'https://images.pexels.com/photos/8312083/pexels-photo-8312083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      desc: `Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.`,
    },
    {
      id: 3,
      title: 'Chappathi',
      category: 'FEAST',
      price: 80.00,
      img: 'https://kitchenmai.com/wp-content/uploads/2019/08/667FFE06-6931-4CFF-955C-73F1DF7B65A0-e1565209301325-500x500.jpeg',
      desc: `Chapatis are one of the most common forms of wheat bread, a staple food in the Indian subcontinent.`,
    },
    {
      id: 4,
      title: 'Butter Naan',
      category: 'FEAST',
      price: 90.00,
      img: 'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg',
      desc: `One of the popular flat breads of Asian origin, is the Naan that is made with a leavened dough.`,
    },
    {
      id: 5,
      title: 'Mutton Biryani',
      category: 'FEAST',
      price: 175.00,
      img: 'https://c.ndtvimg.com/2019-02/45dlkeqo_mutton-biryani_625x300_27_February_19.jpg',
      desc: `Biryani  is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.`,
    },
    {
      id: 6,
      title: 'Chicken Biryani',
      category: 'FEAST',
      price: 100.00,
      img: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
      desc: `Biryani  is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.`,
    },
    {
      id: 7,
      title: 'Fish Biryani',
      category: 'FEAST',
      price: 150.00,
      img: 'https://c.ndtvimg.com/2022-02/ceg29dsg_fish-biryani_625x300_16_February_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      desc: `Biryani  is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.`,
    },
    {
      id: 8,
      title: 'Chicken Noodles',
      category: 'FEAST',
      price: 100.00,
      img: 'https://i.ytimg.com/vi/MhzBUy-JOCE/maxresdefault.jpg',
      desc: `Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces. Made in Chinese Hakka Style!.`,
    },
    {
      id: 9,
      title: 'Chicken Fried Rice',
      category: 'FEAST',
      price: 110.00,
      img: 'https://christieathome.com/wp-content/uploads/2022/04/Chinese-Chicken-Fried-Rice-5.jpg',
      desc: `Chicken fried rice is a take-out classic and an easy weeknight meal! This easy recipe is made on the stovetop with chicken, eggs, onions, carrots, peas`,
    },
    {
      id: 10,
      title: 'Red Sauce Pasta',
      category: 'FEAST',
      price: 120.00,
      img: 'https://static.toiimg.com/photo/93068647.cms',
      desc: ` Red sauce pasta is a dish made with pasta, tomatoes, bell peppers, onions, garlic & herbs..`,
    },
    {
      id: 11,
      title: 'ICECREAM',
      category: 'DESSERTS',
      price: 50.00,
      img: 'https://media.istockphoto.com/id/936205852/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=gcPTroDVPNSlCS45BkqEG-6-REnKFEzboBpuX8O3lY4=',
      desc: `Ice cream is a frozen dessert, typically made from milk or cream and flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.`,
    },
    {
      id: 12,
      title: 'Strawberry Shortcake',
      category: 'DESSERTS',
      price: 90.00,
      img: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts-500x500.jpg',
      desc: `These strawberry shortcakes are one of our favorite easy summer desserts!`,
    },
    {
      id: 13,
      title: 'Fruit Juices',
      category: 'JUICES',
      price: 70.00,
      img: 'https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg',
      desc: `Having a healthy juice made with green leafy veggies & fruits in the morning is a great way to start the day! `,
    },
    {
      id: 14,
      title: 'ButterscMilkshake',
      category: 'JUICES',
      price: 60.00,
      img: 'https://tastesofhomemade.com/wp-content/uploads/2022/04/Butterscotch-Milkshake-10.jpg',
      desc: `This Butterscotch Milkshake is a trip down memory lane with a creamy vanilla base and a butterscotch sauce that tastes like Grandma's candy jar.`,
    },
    {
      id: 15,
      title: 'Lime Mocktail',
      category: 'JUICES',
      price: 80.00,
      img: 'https://www.gonnawantseconds.com/wp-content/uploads/2018/04/Lime-Rickey-10.jpg',
      desc: ` Lime Mocktail is a refreshing non-alcoholic Summer mocktail made with  lime, and carbonated mineral water.`,
    },
    {
      id: 17,
      title: 'Blue Mojito',
      category: 'JUICES',
      price: 75.00,
      img: 'https://ampmstore.in/wp-content/uploads/2018/08/bluemojito.jpg',
      desc: ` A mojito is a traditional Cuban cocktail that combines five ingredients: white rum, sugar, lime juice, soda water, and mint`,
    },
    {
        id: 16,
        title: 'Ice Cake',
        category: 'DESSERTS',
        price: 65.00,
        img: 'https://perfectpicturebooks.files.wordpress.com/2014/06/63c33-snickers_brownie_ice_cream_cake5.png',
        desc: `  You won't believe how easy it is to make an Ice Cream Cake! Filled with hot fudge and Oreos, this homemade version is a show-stopper.`,
      },
      {
        id: 18,
        title: 'Chocolate Oreo Shake',
        category: 'JUICES',
        price: 80.00,
        img: 'https://juicenmore.in/wp-content/uploads/2020/09/Chocolate-Oreo-Shake-1.jpg',
        desc: `This thick Oreo Milkshake is a classic, easy recipe that everyone loves and is made with just 4 ingredients. `,
      },
      {
        id: 19,
        title: 'Banana Smoothie',
        category: 'JUICES',
        price: 65.00,
        img: 'https://detoxinista.com/wp-content/uploads/2019/06/peanut-butter-banana-smoothie.jpg',
        desc: ` A Banana Smoothie that is healthy, delicious and filling smoothie made with ripe bananas, coconut milk and flavored with cinnamon powder.`,
      },
      {
        id: 20,
        title: 'Falooda',
        category: 'DESSERTS',
        price: 50.00,
        img: 'https://kfoods.com/images1/newrecipeicon/faluda-ice-cream_12142.jpg',
        desc: ` A popular Indian summer dessert drink, falooda recipe or faluda is made with various layered elements like milk, ice cream, and rose syrup.`,
      },

  ];
  export default menu;