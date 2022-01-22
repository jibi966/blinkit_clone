let veg_data = () => {
    let veg_arr = [
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg",
        name: "Coriander Bunch",
        price: "4",
        wt: "100 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3881a.jpg",
        name: "Local Carrot (Gajar)",
        price: "15",
        wt: "500 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391306a.jpg",
        name: "Onion 1 kg",
        price: "39",
        wt: "500 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423735a.jpg",
        name: "Green Chilli",
        price: "6",
        wt: "100 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3923a.jpg",
        name: "Green Peas",
        price: "12",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421703a.jpg",
        name: "Ginger (Adrak)",
        price: "10",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438111a.jpg",
        name: "Fenugreek (Methi) - Fresh",
        price: "6",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
        name: "Green Capsicum",
        price: "19",
        wt: "250 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470636a.jpg",
        name: "Banana",
        price: "21",
        wt: "3 units",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10088a.jpg",
        name: "Cucumber (Kheera)",
        price: "19",
        wt: "500 g - 600 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439699a.jpg",
        name: "Lemon",
        price: "13",
        wt: "250 g - 300 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391305a.jpg",
        name: "Potato",
        price: "23",
        wt: "1 kg",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
        name: "Broccoli",
        price: "30",
        wt: "1 unit (300 - 400g)",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421744a.jpg",
        name: "Spring Onion",
        price: "12",
        wt: "150g - 200g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421747a.jpg",
        name: "Radish",
        price: "12",
        wt: "500 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/95031a.jpg",
        name: "Garlic (Lehsun)",
        price: "13",
        wt: "200 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394525a.jpg",
        name: "Kiwi",
        price: "44",
        wt: "3 units",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/17643a.jpg",
        name: "Curry Leaves",
        price: "10",
        wt: "100 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4967a.jpg",
        name: "Sapota (Chikoo)",
        price: "28",
        wt: "500 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443547a.jpg",
        name: "Raw Papaya",
        price: "21",
        wt: "1 unit ",
      },
  
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/317559a.jpg",
        name: "Pomegranate (Anaar)",
        price: "97",
        wt: "4 units (720g - 800g)",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4943a.jpg",
        name: "Brown-Coconut (Nariyal)",
        price: "39",
        wt: "1 unit",
      },
      {
        cat: "veg",
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/311059a.jpg",
        name: "Royal Gala Apple Imported",
        price: "115",
        wt: "4 units (500g - 700g)",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425780a.jpg",
        name: "Pointed Gourd (Parval)",
        price: "30",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/137816a.jpg",
        name: "Baby Corn - Packet",
        price: "30",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          " https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
        name: "Sprouts Green Moong",
        price: "18",
        wt: "1 unit (150 - 160g)",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/326343a.jpg",
        name: "Yam (Jimikand)",
        price: "9",
        wt: "250 g",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/447623a.jpg",
        name: "Baby Onion (Sirka Pyaz)",
        price: "14",
        wt: "250 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/161571a.jpg",
        name: "Black Grapes",
        price: "87",
        wt: "500 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/16405a.jpg",
        name: "Raw Banana (Plantains)",
        price: "23",
        wt: "6 units",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443551a.jpg",
        name: "Lotus Stem (Kamal Kakri)",
        price: "17",
        wt: "250 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/455721a.jpg",
        name: "Red Globe Grapes - Packet",
        price: "111",
        wt: "250 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440229a.jpg",
        name: "Cherry Tomato",
        price: "70",
        wt: "200 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/189822a.jpg",
        name: "Pineapple",
        price: "54",
        wt: "1 Pineapple (1kg - 1.4kg)",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/5855a.jpg",
        name: "Lemongrass",
        price: "14",
        wt: "100 g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369752a.jpg",
        name: "Kiran Watermelon",
        price: "132",
        wt: "1 unit (1.5kg - 2.7kg)",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/190315a.jpg",
        name: "Fuji Apple - Regular",
        price: "174",
        wt: "4 unit (600 - 800g)",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/462106a.jpg",
        name: "Red Delicious Apple",
        price: "174",
        wt: "4 unit (400 - 600g)",
      },
      {
        cat: "fruits",
        image:
          " https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470485a.jpg",
        name: " Shimla Special",
        price: "25",
        wt: "1 unit",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470483a.jpg",
        name: "Orange - imported",
        price: "28",
        wt: "1 unit",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300635a.jpg",
        name: "Red & Yellow Capsicum",
        price: "102",
        wt: "2 units",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/362127a.jpg",
        name: "Blueberry imported - packet",
        price: "220",
        wt: "125g",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/197963a.jpg",
        name: "Guava",
        price: "61",
        wt: "1kg",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445396a.jpg",
        name: "Cauliflower ( Gobhi )  - Fresh ",
        price: "61",
        wt: "1kg",
      },
      {
        cat: "veg",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3918a.jpg",
        name: "spinach Bunch",
        price: "9",
        wt: "1 unit",
      },
      {
        cat: "fruits",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/189821a.jpg",
        name: "Papaya",
        price: "34",
        wt: "1 unit approx. 1kg",
      },
      {
        cat: "veg",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4916a.jpg",
        name: "French Beans",
        price: "39",
        wt: "250g",
      },
    ];
    return veg_arr;
  };
  
  let cold_drink = () => {
    let juice_data = [
      // soft drink.............0-18
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/45655a.jpg",
        name: "Red bull Energy drink",
        wt: "250 ml",
        price: "110",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/314a.jpg",
        name: "Thums up",
        wt: "750 ml",
        price: "38",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/15286a.jpg",
        name: "coca cola zero",
        wt: "300 ml",
        price: "38",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/402639a.jpg",
        name: "Budwiser",
        wt: "330 ml",
        price: "56",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/415875a.jpg",
        name: "Hoegarden",
        wt: "330 ml ",
        price: "75",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/18314a.jpg",
        name: "coca cola soft drink",
        wt: "500 ml",
        price: "88",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300a.jpg",
        name: "mirinda soft drink",
        wt: "750 ml",
        price: "36",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/307a.jpg",
        name: "pepsi soft drink",
        wt: "750 ml",
        price: "36",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/456320a.jpg",
        name: "coolberg Ginger Non-alchoholic",
        wt: "330 ml",
        price: "68",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/456322a.jpg",
        name: "coolberg Malt Non-alchoholic",
        wt: "330 ml",
        price: "68",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/45655a.jpg",
        name: "Red bull Energy drink",
        wt: "250 ml",
        price: "110",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/314a.jpg",
        name: "Thums up",
        wt: "750 ml",
        price: "38",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/15286a.jpg",
        name: "coca cola zero",
        wt: "300 ml",
        price: "38",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/402639a.jpg",
        name: "Budwiser",
        wt: "330 ml",
        price: "56",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/415875a.jpg",
        name: "Hoegarden",
        wt: "330 ml ",
        price: "75",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/18314a.jpg",
        name: "coca cola soft drink",
        wt: "500 ml",
        price: "88",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300a.jpg",
        name: "mirinda soft drink",
        wt: "750 ml",
        price: "36",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/307a.jpg",
        name: "pepsi soft drink",
        wt: "750 ml",
        price: "36",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/456320a.jpg",
        name: "coolberg Ginger Non-alchoholic",
        wt: "330 ml",
        price: "68",
      },
      {
        cat: "soft",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/456322a.jpg",
        name: "coolberg Malt Non-alchoholic",
        wt: "330 ml",
        price: "68",
      },
      // Fruit juice.....19-38
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427007a.jpg",
        name: "Mazaa mango fruit drink",
        wt: "150 ml",
        price: "100",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135928a.jpg",
        name: "B Natural Mixed Fruit",
        wt: "1 L",
        price: "88",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/376a.jpg",
        name: "Tropicana 100 % orange juice",
        wt: "weight",
        price: "65",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/62221a.jpg",
        name: "Real fruit powel apple",
        wt: "1L",
        price: "91",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/304a.jpg",
        name: "Paper Boat aam panna",
        wt: "250 ml",
        price: "24",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394941a.jpg",
        name: "GHD coconut water",
        wt: "200 ml",
        price: "22",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427007a.jpg",
        name: "Mazaa mango fruit drink",
        wt: "150 ml",
        price: "100",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135928a.jpg",
        name: "B Natural Mixed Fruit",
        wt: "1 L",
        price: "88",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/376a.jpg",
        name: "Tropicana 100 % orange juice",
        wt: "weight",
        price: "85",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/62221a.jpg",
        name: "Real fruit powel apple",
        wt: "1L",
        price: "91",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/304a.jpg",
        name: "Paper Boat aam panna",
        wt: "250 ml",
        price: "24",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394941a.jpg",
        name: "GHD coconut water",
        wt: "200 ml",
        price: "22",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427007a.jpg",
        name: "Mazaa mango fruit drink",
        wt: "150 ml",
        price: "100",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135928a.jpg",
        name: "B Natural Mixed Fruit",
        wt: "1 L",
        price: "88",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/376a.jpg",
        name: "Tropicana 100 % orange juice",
        wt: "weight",
        price: "65",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/62221a.jpg",
        name: "Real fruit powel apple",
        wt: "1L",
        price: "91",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/304a.jpg",
        name: "Paper Boat aam panna",
        wt: "250 ml",
        price: "24",
      },
      {
        cat: "juice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394941a.jpg",
        name: "GHD coconut water",
        wt: "200 ml",
        price: "22",
      },
      // soda &mixture.........39-49
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/316a.jpg",
        name: "Indian Tonic Water",
        wt: "300 ml",
        price: "50",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427620a.jpg",
        name: "Jimmy cocktail sex on the beach",
        wt: "250 ml",
        price: "88",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/34354a.jpg",
        name: "Bisleri soda",
        wt: "750 ml",
        price: "14",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/122997a.jpg",
        name: "Kinley club soda",
        wt: "weight",
        price: "88",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/316a.jpg",
        name: "Indian Tonic Water",
        wt: "300 ml",
        price: "50",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427620a.jpg",
        name: "Jimmy cocktail sex on the beach",
        wt: "250 ml",
        price: "88",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/34354a.jpg",
        name: "Bisleri soda",
        wt: "750 ml",
        price: "14",
      },
      {
        cat: "soda",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/122997a.jpg",
        name: "Kinley club soda",
        wt: "weight",
        price: "9",
      },
      // energy drink......50-60
  
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403174a.jpg",
        name: "Monster energy drink",
        wt: "350 ml",
        price: "100",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3032a.jpg",
        name: "Gatorade orage flavour",
        wt: "500 ml",
        price: "50",
      },
      {
        cat: "energyDrink",
        image:
          "uhttps://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/377a.jpgrl",
        name: "Gatorade Blue Bolt",
        wt: "500 ml",
        price: "50",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477354a.jpg",
        name: "ocean Natural Energy",
        wt: "250 ml",
        price: "70",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/374687a.jpg",
        name: "string Energy drink",
        wt: "250 ml",
        price: "20",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403174a.jpg",
        name: "Monster energy drink",
        wt: "350 ml",
        price: "100",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3032a.jpg",
        name: "Gatorade orage flavour",
        wt: "500 ml",
        price: "50",
      },
      {
        cat: "energyDrink",
        image:
          "uhttps://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/377a.jpgrl",
        name: "Gatorade Blue Bolt",
        wt: "500 ml",
        price: "50",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477354a.jpg",
        name: "ocean Natural Energy",
        wt: "250 ml",
        price: "70",
      },
      {
        cat: "energyDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/374687a.jpg",
        name: "string Energy drink",
        wt: "250 ml",
        price: "20",
      },
      // Herbal drink.....61-67
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/53703a.jpg",
        name: "Patanjali Aloe vera juice",
        wt: "1 L",
        price: "200",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10519a.jpg",
        name: "Patanjali Amla Juice",
        wt: "1 L",
        price: "130",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/429705a.jpg",
        name: "Baidyanath Rich in vitamin c",
        wt: "250 ml",
        price: "70",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/429705a.jpg",
        name: "Baidyanath Rich in vitamin c",
        wt: "250 ml",
        price: "80",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/53703a.jpg",
        name: "Patanjali Aloe vera juice",
        wt: "1 L",
        price: "200",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10519a.jpg",
        name: "Patanjali Amla Juice",
        wt: "1 L",
        price: "130",
      },
      {
        cat: "herbalDrink",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/429705a.jpg",
        name: "Baidyanath Rich in vitamin c",
        wt: "1 l",
        price: "110",
      },
      // water..cubes..68-74
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/319a.jpg",
        name: "Himalayan Natural Mineral Water",
        wt: "1 l",
        price: "63",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/280986a.jpg",
        name: "ocean crispy apple flavour",
        wt: "500 ml",
        price: "48",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/21699a.jpg",
        name: "Bisleri medica mineral water",
        wt: "1 l ",
        price: "39",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/246209a.jpg",
        name: "ocean pink Guava flavour",
        wt: "500 ml",
        price: "48",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/280986a.jpg",
        name: "ocean crispy apple flavour",
        wt: "500 ml",
        price: "48",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/21699a.jpg",
        name: "Bisleri medica mineral water",
        wt: "1 l ",
        price: "39",
      },
      {
        cat: "water",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/246209a.jpg",
        name: "ocean pink Guava flavour",
        wt: "500 ml",
        price: "48",
      },
    ];
    return juice_data;
  };
  
  let personalCare_data = () => {
    let personalCare_arr = [
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/19481a.jpg",
        name: "Pears Moisturising with Glycerine Pure & Gentle",
        price: "173",
        wt: "3x125 g",
      },
  
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/210452a.jpg",
        name: "Godrej N0. 1 Keser Milk Cream Bath Soap",
        price: "96",
        wt: "5x100 g",
      },
  
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/368056a.jpg",
        name: "Godrej N0.1 Sandal & Turmeric Soap",
        price: "152",
        wt: "4x150 g",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/127687a.jpg",
        name: "Lux Jasmine & Vitamin E For Glowing Skin Beauty",
        price: "149",
        wt: "3x150 g",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389061a.jpg",
        name: "Medimix Classic 18-Herb with Natural Oils Soap",
        price: "171",
        wt: "5x125 g",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/241035a.jpg",
        name: "Cinthol Original Bath Soap -Pack of *",
        price: "295",
        wt: "8x100 g",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445815a.jpg",
        name: "Dove Cream Beauty Bathing Soap 3x125",
        price: "197",
        wt: "3x125 g",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/252553a.jpg",
        name: "Savlon Moisture Shield Germ Protection Liquid",
        price: "96",
        wt: "750 ml",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/365718a.jpg",
        name: "Dettol Liquid Refill - Skincare Moisturizing Handwash",
        price: "99",
        wt: "750 ml",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/382612a.jpg",
        name: "Palmolive Body Wash Aroma Morning Tonic",
        price: "375",
        wt: "750 ml",
      },
      {
        cat: "soaps",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/468908a.jpg",
        name: "Wow Skin Science Lemon & Pine Foaming Body Wash",
        price: "306",
        wt: "250 ml",
      },
  
      {
        cat: "haircare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/23888a.jpg",
        name: "Head & Shoulders Anti Hairfall Anti Dandruff",
        price: "454",
        wt: "650 ml",
      },
      {
        cat: "haircare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10632a.jpg",
        name: "Sunsilk Stunning Black Shine, With Amla+Oil",
        price: "444",
        wt: "650 ml",
      },
      {
        cat: "haircare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/18623a.jpg",
        name: "Bajaj Almond Drops ",
        price: "266",
        wt: "500 ml",
      },
      {
        cat: "haircare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/409629a.jpg",
        name: "Parachute Advansed Aloe Vera Enriched Coconut",
        price: "189",
        wt: "400 ml",
      },
      {
        cat: "haircare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/469409a.jpg",
        name: "Wow Skin Science Red Onion Black Seed Oil Hair",
        price: "499",
        wt: "200 ml",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/174098a.jpg",
        name: "Vaseline Intensive Care Deep Moisture Body Lotion",
        price: "400",
        wt: "650 ml",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/174098a.jpg",
        name: "Nivea Cocoa Nourish Body Lotion",
        price: "270",
        wt: "400 ml",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/34035a.jpg",
        name: "yardley English Lavender Perfumed Talc",
        price: "185",
        wt: "250 g",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39022a.jpg",
        name: "Pond's Dreamflower Fragrant Talc",
        price: "297",
        wt: "400 g",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/18499a.jpg",
        name: "Emami Fair and Handsome 7 Days Radiance Face",
        price: "115",
        wt: "60 g",
      },
      {
        cat: "skincare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/24380a.jpg",
        name: "Olay Age Protect Face Craeam",
        price: "308",
        wt: " 50g",
      },
  
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300716a.jpg",
        name: "Colgate Strawberry Baby Toothpaste",
        price: "45",
        wt: "40 g",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/92728a.jpg",
        name: "Sensodyne Fresh Gel Sensive Toothpaste",
        price: "210",
        wt: "150 g",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/92728a.jpg",
        name: "Oral-B Vitality 100 White Cross Electric Toothbrush",
        price: "1599",
        wt: "1 unit ",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425781a.jpg",
        name: "Colgate Zig-Zag Charcoal Manual Brush",
        price: "99",
        wt: "4 unit",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/68312a.jpg",
        name: "Colgate MaxFresh Plax Antibacterial Fresh Mint",
        price: "243",
        wt: "500 ml",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10650a.jpg",
        name: "listerine Cavity Fighter Mouthwash",
        price: "146",
        wt: "250 ml",
      },
      {
        cat: "oralcare",
  
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/240049a.jpg",
        name: "Colgate Pain Out - Dental Gel ",
        price: "150",
        wt: "10 g",
      },
    ];
    return personalCare_arr;
  };
  
  let grocery = () => {
    let grocery_data = [
      // pulses....
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name: "Basic Arhar dal",
        wt: "1 kg",
        price: "102",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438122a.jpg",
        name: "Tata sampann Arhar dal",
        wt: "1 kg",
        price: "145",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name: "Grocery Arhar dal",
        wt: "1 kg",
        price: "117",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39493a.jpg",
        name: "Basic Arhar dal",
        wt: "1 kg",
        price: "102",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389661a.jpg",
        name: "GMC Arhar dal",
        wt: "1 kg",
        price: "136",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name: "Basic Arhar dal",
        wt: "1 kg",
        price: "102",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438122a.jpg",
        name: "Tata sampann Arhar dal",
        wt: "1 kg",
        price: "145",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name: "Grocery Arhar dal",
        wt: "1 kg",
        price: "117",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39493a.jpg",
        name: "Basic Arhar dal",
        wt: "1 kg",
        price: "102",
      },
      {
        cat: "pulses",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389661a.jpg",
        name: "GMC Arhar dal",
        wt: "1 kg",
        price: "136",
      },
      //  Atta....
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/68483a.jpg",
        name: "Aashirbad whole wheat atta",
        wt: "10 kg",
        price: "390",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/380156a.jpg",
        name: "Fortune chakki fresh Atta",
        wt: "5 kg",
        price: "169",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14244a.jpg",
        name: "samrat whole wheat atta",
        wt: "10 kg",
        price: "337",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/388638a.jpg",
        name: "chakki fresh Atta",
        wt: "5 kg",
        price: "153",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/139883a.jpg",
        name: "satyam sooji",
        wt: "500 g",
        price: "33",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/68483a.jpg",
        name: "Aashirbad whole wheat atta",
        wt: "10 kg",
        price: "390",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/380156a.jpg",
        name: "Fortune chakki fresh Atta",
        wt: "5 kg",
        price: "169",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14244a.jpg",
        name: "samrat whole wheat atta",
        wt: "10 kg",
        price: "337",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/388638a.jpg",
        name: "chakki fresh Atta",
        wt: "5 kg",
        price: "153",
      },
      {
        cat: "Atta",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/139883a.jpg",
        name: "satyam sooji",
        wt: "500 g",
        price: "33",
      },
      // Rice
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391805a.jpg",
        name: "Fortune hamesha basmati rice",
        wt: "5 kg",
        price: "311",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35769a.jpg",
        name: "Fortune Biriyani special rice",
        wt: "1 kg",
        price: "118",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/124532a.jpg",
        name: "Fortune rozana basmati rice",
        wt: "5 kg",
        price: "358",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135907a.jpg",
        name: "Fortune basmati rice",
        wt: "5 kg",
        price: "402",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390040a.jpg",
        name: "GMC biriyani basmati rice",
        wt: "1 kg",
        price: "103",
      },
  
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391805a.jpg",
        name: "Fortune hamesha basmati rice",
        wt: "5 kg",
        price: "311",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35769a.jpg",
        name: "Fortune Biriyani special rice",
        wt: "1 kg",
        price: "118",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/124532a.jpg",
        name: "Fortune rozana basmati rice",
        wt: "5 kg",
        price: "358",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135907a.jpg",
        name: "Fortune basmati rice",
        wt: "5 kg",
        price: "402",
      },
      {
        cat: "Rice",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390040a.jpg",
        name: "GMC biriyani basmati rice",
        wt: "1 kg",
        price: "103",
      },
      // Dry............
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389717a.jpg",
        name: "GMC American Almonds",
        wt: "200 gm",
        price: "177",
      },
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439931a.jpg",
        name: "Grocery Almond",
        wt: "500 kg",
        price: "415",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477257a.jpg",
        name: "Tata sampann almond",
        wt: "500 kg",
        price: "534",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389713a.jpg",
        name: "GMC cashews",
        wt: "200 gm",
        price: "212",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443309a.jpg",
        name: "Happilo freshly oven cashews",
        wt: "1 kg",
        price: "103",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389717a.jpg",
        name: "GMC American Almonds",
        wt: "200 gm",
        price: "177",
      },
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439931a.jpg",
        name: "Grocery Almond",
        wt: "500 kg",
        price: "415",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477257a.jpg",
        name: "Tata sampann almond",
        wt: "500 kg",
        price: "534",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389713a.jpg",
        name: "GMC cashews",
        wt: "200 gm",
        price: "212",
      },
  
      {
        cat: "Dry",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443309a.jpg",
        name: "Happilo freshly oven cashews",
        wt: "1 kg",
        price: "103",
      },
      //  oil
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14626a.jpg",
        name: "Fortune sunlight oil",
        wt: "5 l",
        price: "779",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg",
        name: "Fortune sunlight refine oil",
        wt: "1 l",
        price: "149",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/60164a.jpg",
        name: "Liberty sunflower oil",
        wt: "1 l",
        price: "143",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14634a.jpg",
        name: "Liberty sunflower oil",
        wt: " 5 l",
        price: "768",
      },
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/359885a.jpg",
        name: "sweeker refine oil",
        wt: "15 kg",
        price: "2217",
      },
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14626a.jpg",
        name: "Fortune sunlight oil",
        wt: "5 l",
        price: "779",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg",
        name: "Fortune sunlight refine oil",
        wt: "1 l",
        price: "149",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/60164a.jpg",
        name: "Liberty sunflower oil",
        wt: "1 l",
        price: "143",
      },
  
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14634a.jpg",
        name: "Liberty sunflower oil",
        wt: " 5 l",
        price: "768",
      },
      {
        cat: "oil",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/359885a.jpg",
        name: "sweeker refine oil",
        wt: "15 kg",
        price: "2217",
      },
      // ghee...
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/368376a.jpg",
        name: "Balaji classic pure ghee",
        wt: "1 l",
        price: "374",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/11329a.jpg",
        name: "govardhan cow ghee",
        wt: "500 ml",
        price: "286",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35951a.jpg",
        name: "govardhan cow ghee",
        wt: "2 l",
        price: "1151",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/131933a.jpg",
        name: "Amul cow ghee",
        wt: "15 kg",
        price: "2217",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/368376a.jpg",
        name: "Balaji classic pure ghee",
        wt: "1 l",
        price: "374",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/11329a.jpg",
        name: "govardhan cow ghee",
        wt: "500 ml",
        price: "286",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35951a.jpg",
        name: "govardhan cow ghee",
        wt: "2 l",
        price: "1151",
      },
      {
        cat: "ghee",
        image:
          "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/131933a.jpg",
        name: "Amul cow ghee",
        wt: "15 kg",
        price: "2217",
      },
    ];
  
    return grocery_data;
  };
  
  export { veg_data, cold_drink, personalCare_data, grocery };
  