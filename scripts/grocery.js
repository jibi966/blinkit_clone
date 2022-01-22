async function groceryData(){
    let groceryArr = [
     // pulses....
    {
       cat:"pulses",
       image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
       name:"Basic Arhar dal",
       wt:"1 kg",
       price:"102"
    },
    {
        cat:"pulses",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438122a.jpg",
        name:"Tata sampann Arhar dal",
        wt:"1 kg",
        price:"145"
    },
    {
        cat:"pulses",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name:"Grocery Arhar dal",
        wt:"1 kg",
        price:"117"
    },
    {
        cat:"pulses",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39493a.jpg",
        name:"Basic Arhar dal",
        wt:"1 kg",
        price:"102"
    },
    {
        cat:"pulses",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389661a.jpg",
        name:"GMC Arhar dal",
        wt:"1 kg",
        price:"136"
    },
    {
        cat:"pulses",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
        name:"Basic Arhar dal",
        wt:"1 kg",
        price:"102"
     },
     {
         cat:"pulses",
         image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438122a.jpg",
         name:"Tata sampann Arhar dal",
         wt:"1 kg",
         price:"145"
     },
     {
         cat:"pulses",
         image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
         name:"Grocery Arhar dal",
         wt:"1 kg",
         price:"117"
     },
     {
         cat:"pulses",
         image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/39493a.jpg",
         name:"Basic Arhar dal",
         wt:"1 kg",
         price:"102"
     },
     {
         cat:"pulses",
         image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389661a.jpg",
         name:"GMC Arhar dal",
         wt:"1 kg",
         price:"136"
     },
    //  Atta....
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/68483a.jpg",
        name:"Aashirbad whole wheat atta",
        wt:"10 kg",
        price:"390"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/380156a.jpg",
        name:"Fortune chakki fresh Atta",
        wt:"5 kg",
        price:"169"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14244a.jpg",
        name:"samrat whole wheat atta",
        wt:"10 kg",
        price:"337"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/388638a.jpg",
        name:"chakki fresh Atta",
        wt:"5 kg",
        price:"153"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/139883a.jpg",
        name:"satyam sooji",
        wt:"500 g",
        price:"33"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/68483a.jpg",
        name:"Aashirbad whole wheat atta",
        wt:"10 kg",
        price:"390"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/380156a.jpg",
        name:"Fortune chakki fresh Atta",
        wt:"5 kg",
        price:"169"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14244a.jpg",
        name:"samrat whole wheat atta",
        wt:"10 kg",
        price:"337"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/388638a.jpg",
        name:"chakki fresh Atta",
        wt:"5 kg",
        price:"153"
    },
    {
        cat:"Atta",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/139883a.jpg",
        name:"satyam sooji",
        wt:"500 g",
        price:"33"
    },
    // Rice
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391805a.jpg",
        name:"Fortune hamesha basmati rice",
        wt:"5 kg",
        price:"311"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35769a.jpg",
        name:"Fortune Biriyani special rice",
        wt:"1 kg",
        price:"118"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/124532a.jpg",
        name:"Fortune rozana basmati rice",
        wt:"5 kg",
        price:"358"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135907a.jpg",
        name:"Fortune basmati rice",
        wt:"5 kg",
        price:"402"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390040a.jpg",
        name:"GMC biriyani basmati rice",
        wt:"1 kg",
        price:"103"
    },

    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/391805a.jpg",
        name:"Fortune hamesha basmati rice",
        wt:"5 kg",
        price:"311"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35769a.jpg",
        name:"Fortune Biriyani special rice",
        wt:"1 kg",
        price:"118"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/124532a.jpg",
        name:"Fortune rozana basmati rice",
        wt:"5 kg",
        price:"358"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/135907a.jpg",
        name:"Fortune basmati rice",
        wt:"5 kg",
        price:"402"
    },
    {
        cat:"Rice",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/390040a.jpg",
        name:"GMC biriyani basmati rice",
        wt:"1 kg",
        price:"103"
    },
    // Dry............
    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389717a.jpg",
        name:"GMC American Almonds",
        wt:"200 gm",
        price:"177"
    },
    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439931a.jpg",
        name:"Grocery Almond",
        wt:"500 kg",
        price:"415"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477257a.jpg",
        name:"Tata sampann almond",
        wt:"500 kg",
        price:"534"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389713a.jpg",
        name:"GMC cashews",
        wt:"200 gm",
        price:"212"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443309a.jpg",
        name:"Happilo freshly oven cashews",
        wt:"1 kg",
        price:"103"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389717a.jpg",
        name:"GMC American Almonds",
        wt:"200 gm",
        price:"177"
    },
    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/439931a.jpg",
        name:"Grocery Almond",
        wt:"500 kg",
        price:"415"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/477257a.jpg",
        name:"Tata sampann almond",
        wt:"500 kg",
        price:"534"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/389713a.jpg",
        name:"GMC cashews",
        wt:"200 gm",
        price:"212"
    },

    {
        cat:"Dry",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/443309a.jpg",
        name:"Happilo freshly oven cashews",
        wt:"1 kg",
        price:"103"
    },
    //  oil

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14626a.jpg",
        name:"Fortune sunlight oil",
        wt:"5 l",
        price:"779"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg",
        name:"Fortune sunlight refine oil",
        wt:"1 l",
        price:"149"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/60164a.jpg",
        name:"Liberty sunflower oil",
        wt:"1 l",
        price:"143"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14634a.jpg",
        name:"Liberty sunflower oil",
        wt:" 5 l",
        price:"768"
    },
    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/359885a.jpg",
        name:"sweeker refine oil",
        wt:"15 kg",
        price:"2217"
    },
    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14626a.jpg",
        name:"Fortune sunlight oil",
        wt:"5 l",
        price:"779"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/43a.jpg",
        name:"Fortune sunlight refine oil",
        wt:"1 l",
        price:"149"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/60164a.jpg",
        name:"Liberty sunflower oil",
        wt:"1 l",
        price:"143"
    },

    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/14634a.jpg",
        name:"Liberty sunflower oil",
        wt:" 5 l",
        price:"768"
    },
    {
        cat:"oil",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/359885a.jpg",
        name:"sweeker refine oil",
        wt:"15 kg",
        price:"2217"
    },
    // ghee...
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/368376a.jpg",
        name:"Balaji classic pure ghee",
        wt:"1 l",
        price:"374"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/11329a.jpg",
        name:"govardhan cow ghee",
        wt:"500 ml",
        price:"286"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35951a.jpg",
        name:"govardhan cow ghee",
        wt:"2 l",
        price:"1151"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/131933a.jpg",
        name:"Amul cow ghee",
        wt:"15 kg",
        price:"2217"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/368376a.jpg",
        name:"Balaji classic pure ghee",
        wt:"1 l",
        price:"374"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/11329a.jpg",
        name:"govardhan cow ghee",
        wt:"500 ml",
        price:"286"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/35951a.jpg",
        name:"govardhan cow ghee",
        wt:"2 l",
        price:"1151"
    },
    {
        cat:"ghee",
        image:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/131933a.jpg",
        name:"Amul cow ghee",
        wt:"15 kg",
        price:"2217"
    },    
    ]
    return groceryArr;
}
export default groceryData;