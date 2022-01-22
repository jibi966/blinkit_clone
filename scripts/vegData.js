async function veg_data(){
            let veg_arr = [
                
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg",
                name: "Coriander Bunch",
                price: "4",
                wt: "100 g",
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3881a.jpg",
                name: "Local Carrot (Gajar)",
                price: "15",
                wt: "500 g",
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391306a.jpg",
                name: "Onion 1 kg",
                price: "39",
                wt: "500 g",
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/423735a.jpg",
                name: "Green Chilli",
                price: "6",
                wt: "100 g",    
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3923a.jpg",
                name: "Green Peas",
                price: "12",
                wt: "250 g",   
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421703a.jpg",
                name: "Ginger (Adrak)",
                price: "10",
                wt: "250 g",
            },
            {
                cat: "veg",
              
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438111a.jpg",
                name: "Fenugreek (Methi) - Fresh",
                price: "6",
                wt: "250 g"     ,
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
                name: "Green Capsicum",
                price: "19",
                wt: "250 g"     ,
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470636a.jpg",
                name: "Banana",
                price: "21",
                wt: "3 units"  ,   
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/10088a.jpg",
                name: "Cucumber (Kheera)",
                price: "19",
                wt: "500 g - 600 g"   ,  
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439699a.jpg",
                name: "Lemon",
                price: "13",
                wt: "250 g - 300 g"  ,   
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391305a.jpg",
                name: "Potato",
                price: "23",
                wt: "1 kg"   ,  
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369742a.jpg",
                name: "Broccoli",
                price: "30",
                wt: "1 unit (300 - 400g)",
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421744a.jpg",
                name: "Spring Onion",
                price: "12",
                wt: "150g - 200g",     
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421747a.jpg",
                name: "Radish",
                price: "12",
                wt: "500 g",
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/95031a.jpg",
                name: "Garlic (Lehsun)",
                price: "13",
                wt: "200 g",     
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/394525a.jpg",
                name: "Kiwi",
                price: "44",
                wt: "3 units"   ,  
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/17643a.jpg",
                name: "Curry Leaves",
                price: "10",
                wt: "100 g"     ,
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4967a.jpg",
                name: "Sapota (Chikoo)",
                price: "28",
                wt: "500 g"     ,
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443547a.jpg",
                name: "Raw Papaya",
                price: "21",
                wt: "1 unit "    ,
            },

            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/317559a.jpg",
                name: "Pomegranate (Anaar)",
                price: "97",
                wt: "4 units (720g - 800g)"  ,  
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4943a.jpg",
                name: "Brown-Coconut (Nariyal)",
                price: "39",
                wt: "1 unit",  
            },
            {
                cat: "veg",
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/311059a.jpg",
                name: "Royal Gala Apple Imported",
                price: "115",
                wt: "4 units (500g - 700g)",    
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/425780a.jpg",
                name: "Pointed Gourd (Parval)",
                price: "30",
                wt: "250 g",    
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/137816a.jpg",
                name: "Baby Corn - Packet",
                price: "30",
                wt: "250 g",
            },
            {
                cat: "veg",
            
                image: " https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445281a.jpg",
                name: "Sprouts Green Moong",
                price: "18",
                wt: "1 unit (150 - 160g)",
            },
            {
             
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/326343a.jpg",
                name: "Yam (Jimikand)",
                price: "9",
                wt: "250 g"    ,
            },
            {
                cat: "veg",
              
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/447623a.jpg",
                name: "Baby Onion (Sirka Pyaz)",
                price: "14",
                wt: "250 g",    
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/161571a.jpg",
                name: "Black Grapes",
                price: "87",
                wt: "500 g",    
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/16405a.jpg",
                name: "Raw Banana (Plantains)",
                price: "23",
                wt: "6 units",
            },
            {
                cat: "veg",
                
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443551a.jpg",
                name: "Lotus Stem (Kamal Kakri)",
                price: "17",
                wt: "250 g" ,   
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/455721a.jpg",
                name: "Red Globe Grapes - Packet",
                price: "111",
                wt: "250 g",    
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/440229a.jpg",
                name: "Cherry Tomato",
                price: "70",
                wt: "200 g"  ,  
            },
            {
             
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/189822a.jpg",
                name: "Pineapple",
                price: "54",
                wt: "1 Pineapple (1kg - 1.4kg)",
                    
            },
            {
                cat: "veg",
              
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/5855a.jpg",
                name: "Lemongrass",
                price: "14",
                wt: "100 g",    
            },
            {
              
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/369752a.jpg",
                name: "Kiran Watermelon",
                price: "132",
                wt: "1 unit (1.5kg - 2.7kg)",
                
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/190315a.jpg",
                name: "Fuji Apple - Regular",
                price: "174",
                wt: "4 unit (600 - 800g)"  ,  
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/462106a.jpg",
                name: "Red Delicious Apple",
                price: "174",
                wt: "4 unit (400 - 600g)",
                
            },
            {
               
                cat: "fruits",
                image: " https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470485a.jpg",
                name: " Shimla Special",
                price: "25",
                wt: "1 unit",    
            },
            {
               
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/470483a.jpg",
                name: "Orange - imported",
                price: "28",
                wt: "1 unit",    
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/300635a.jpg",
                name: "Red & Yellow Capsicum",
                price: "102",
                wt: "2 units",    
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/362127a.jpg",
                name: "Blueberry imported - packet",
                price: "220",
                wt: "125g",
                
            },
            {
                
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/197963a.jpg",
                name: "Guava",
                price: "61",
                wt: "1kg",    
            },
            {
                cat: "veg",
               
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/445396a.jpg",
                name: "Cauliflower ( Gobhi )  - Fresh ",
                price: "61",
                wt: "1kg",    
            },
            {
                cat: "veg",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3918a.jpg",
                name: "spinach Bunch",
                price: "9",
                wt: "1 unit",    
            },
            {
              
                cat: "fruits",
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/189821a.jpg",
                name: "Papaya",
                price: "34",
                wt: "1 unit approx. 1kg",    
            },
            {
                cat: "veg",
              
                image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/4916a.jpg",
                name: "French Beans",
                price: "39",
                wt: "250g",    
            }
            ];
    return veg_arr;

    }

    export default veg_data;