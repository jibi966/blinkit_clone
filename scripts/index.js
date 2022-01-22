// adding footer
import footer from "../components/footer.js";
let display = document.querySelector("#footer_display");
display.innerHTML = footer();

// adding navbar

import navbar from "../components/navbar.js";
document.getElementById("NAVBAR").innerHTML = navbar();

navigator.geolocation.getCurrentPosition(success, error);
function success(position) {
  loc(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Please Allow To Access Location");
  let place = document.createElement("h2");
  place.innerText = "Please Allow To Access Location";
  document.getElementById("locName").append(place);
}

document.getElementById("logo").addEventListener("click", logo);
function logo() {
  window.location.href = "index.html";
}

async function loc(lat, lon) {
  let response = await fetch(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=da1de6ea55bd1a35ca6697fad73464ab`
  );
  let data = await response.json();
  console.log("data:", data[0].name, data[0].state);
  let place = document.createElement("p");
  place.innerText = data[0].name + "-" + data[0].state;
  let head = document.createElement("h2");
  head.innerText = "Delivery in 14 minutes";
  document.getElementById("locName").append(head, place);
}

document.getElementById("search").addEventListener("click", f);
function f() {
  if (document.getElementById("sugBox").style.display == "block") {
    document.getElementById("sugBox").style.display = "none";
  } else {
    document.getElementById("sugBox").style.display = "block";
    document.getElementById("myDropdown").style.display = "none";
  }

  let data = [
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3889a.jpg",
      title: "Vegetables",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403799a.jpg",
      title: "Pulses",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/456322a.jpg",
      title: "Soft Drinks",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/427620a.jpg",
      title: "Soda",
    },
    {
      image:
        "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/403174a.jpg",
      title: "Energy drink",
    },
  ];

  append(data);
}

function append(data) {
  document.getElementById("sugBox").innerHTML = "";
  data.forEach((elem) => {
    let { title, image } = elem;
    let div = document.createElement("div");

    let head = document.createElement("a");
    if (title == "Vegetables") {
      head.href = "vegetable_fruits.html";
    } else if (title == "Pulses") {
      head.href = "grocery.html";
    } else if (title == "Soft Drinks") {
      head.href = "colddrink.html";
    } else if (title == "Soda") {
      head.href = "colddrink.html";
    } else if (title == "Energy drink") {
      head.href = "colddrink.html";
    }

    head.innerText = title;
    let img = document.createElement("img");
    img.src = image;
    div.append(head, img);

    document.getElementById("sugBox").append(div);
  });
}

// function grow() {
//   window.location.href = "vegetable_fruits.html";
// }

document.getElementById("mycart").addEventListener("click", getCartPage);
let tog = document.getElementById("sideCart");
//   function getCartPage() {
//     if(tog.style.display == "none"){
//         tog.style.display= "inline"
//     }
//     else if(tog.style.display == "inline"){
//       tog.style.display= "inline"
//     }
//   }
function getCartPage() {
  if (tog.style.display == "none") {
    tog.style.display = "block";
  } else {
    tog.style.display = "none";
  }
}

//   document.getElementById("closeCart").addEventListener("click", closeCartPage);
//   let togglecart =   document.getElementById("sideCart")
//   function closeCartPage() {

// document.getElementById("sideCart").style.display = "none";
//   }

document.getElementById("cat2").addEventListener("click", loginForm);

function loginForm() {
  document.getElementById("cat3").style.display = "none";
  document.getElementById("cusOTP").style.display = "none";
  document.getElementById("login").style.display = "block";
  document.getElementById("mainNav").style.opacity = "0.1";
  document.getElementById("sugBox").style.opacity = "0.1";
  document.getElementById("sideCart").style.opacity = "0.1";
  document.getElementById("sideCart").style.opacity = "0.1";
  // container_byOm
}
document.getElementById("getOtp").addEventListener("click", getOTP);
function getOTP() {
  let u = document.getElementById("cusNum").value;
  localStorage.setItem("userName", JSON.stringify(u));
  document.getElementById("cusNum").style.display = "none";
  document.getElementById("cusOTP").style.display = "inline";
  document.getElementById("changeToOtp").innerText = "Enter OTP";
  document.getElementById("getOtp").innerText = "Done";
  var timeLeft = 10;
  var elem = document.getElementById("timerOTP");
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      elem.innerText = "Resend OTP";
    } else {
      elem.innerText = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }
  document.getElementById("getOtp").addEventListener("click", doneOTP);
}
var lc;
function doneOTP() {
  lc = JSON.parse(localStorage.getItem("userName"));
  document.getElementById("localName").innerText = lc;
  document.getElementById("login").style.display = "none";
  document.getElementById("mainNav").style.opacity = "1";
  document.getElementById("sugBox").style.opacity = "1";
  document.getElementById("sideCart").style.opacity = "1";
  // document.getElementById("cat2").innerText = "profile";
  document.getElementById("cat2").style.display = "none";
  document.getElementById("cat3").style.display = "block";
  document.getElementById("cat3").addEventListener("click", () => {
    document.getElementById("login").style.display = "none";
    document.getElementById("mainNav").style.opacity = "1";
    document.getElementById("sugBox").style.opacity = "1";
    document.getElementById("sideCart").style.opacity = "1";
    if (document.getElementById("myDropdown").style.display == "none") {
      document.getElementById("myDropdown").style.display = "block";
      document.getElementById("sugBox").style.display = "none";
    } else {
      document.getElementById("myDropdown").style.display = "none";
    }
  });
}

//   let cartArr = [
//     {
//       cat: "veg",
//       image:
//         "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/421703a.jpg",
//       name: "Ginger (Adrak)",
//       price: "10",
//       wt: "250 g",
//     },
//     {
//       cat: "veg",
//       image:
//         "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/438111a.jpg",
//       name: "Fenugreek (Methi) - Fresh",
//       price: "6",
//       wt: "250 g",
//     },
//     {
//       cat: "veg",
//       image:
//         "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
//       name: "Green Capsicum",
//       price: "19",
//       wt: "250 g",
//     },
//     {
//       cat: "veg",
//       image:
//         "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
//       name: "Green Capsicum",
//       price: "19",
//       wt: "250 g",
//     },
//     {
//       cat: "veg",
//       image:
//         "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/3888a.jpg",
//       name: "Green Capsicum",
//       price: "19",
//       wt: "250 g",
//     },
//   ];

let cartArr = JSON.parse(localStorage.getItem("cartdata")) || [];
// let total =0
// for(let i=0 ;i<cartArr.length; i++){
//     total += Number(cartArr[i].price);
// }
// console.log('total:', total)
// localStorage.setItem("Total",JSON.stringify(total))

// console.log('cartArr:', cartArr)

if (cartArr.length != 0) {
  document.getElementById("subcart").style.display = "inline";
  document.getElementById("zz").style.display = "inline";
} else {
  document.getElementById("cartEmptyImg").style.display = "block";
  document.getElementById("billed").style.opacity = "0.1";
}

displayCart(cartArr);
function displayCart(cartArr) {
  document.getElementById("zz").innerHTML = null;
  var billTotal = 0;
  cartArr.map((el, index) => {
    billTotal += Number(el.price);
    let mainDiv = document.createElement("div");
    mainDiv.style.display = "flex";
    let imgdiv = document.createElement("div");
    let img = document.createElement("img");
    img.style.width = "100px";
    img.style.height = "100px";
    img.src = el.image;
    imgdiv.append(img);

    let pDiv = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = el.name;
    let pr = document.createElement("p");
    pr.innerText = "₹" + el.price;
    let wt = document.createElement("p");
    wt.innerText = el.wt;
    pDiv.append(p, pr, wt);

    let btn = document.createElement("button");
    btn.innerText = "Remove Items";

    btn.id = "removebtn";

    btn.addEventListener("click", function () {
      remove(index);
      console.log("index:", index);
    });

    document.getElementById("totalBill").innerText =
      "bill total:" + " " + "₹" + billTotal;
    mainDiv.append(imgdiv, pDiv, btn);

    document.getElementById("zz").append(mainDiv);
  });
  localStorage.setItem("ttl", JSON.stringify(billTotal));
  // let x = JSON.parse(localStorage.getItem("Total"));
  // document.getElementById("myCart").innerText = "₹" + x;
  let ps = JSON.parse(localStorage.getItem("ttl"));
  document.getElementById("myCart").innerText = "₹" + ps;
}
function remove(index) {
  cartArr.splice(index, 1);
  localStorage.setItem("cartdata1", JSON.stringify(cartArr));
  displayCart(cartArr);
}

// document.getElementById("billed").addEventListener("click", () => {
//   window.location.href = "address.html";
// });

// omprakash scripts starts from here

import veg_data from "./vegData.js";
let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
// let div = document.createElement('div');

let veg_arr = await veg_data(); //data call
console.log(veg_arr[0].image);
let main_div = document.getElementById("main_img_div_byOm");
var t = 0;
let count = 0;
veg_arr.map((ele, ind) => {
  //  console.log('image:', ele.image.value)
  let cart_div_byOm = document.createElement("div");
  cart_div_byOm.id = "cart_div_byOm";
  t += Number(ele.price);
  localStorage.setItem("ttl", JSON.stringify(t));
  let img_div_byOm = document.createElement("div");
  img_div_byOm.id = "img_div_byOm";
  let img = document.createElement("img");
  img.src = ele.image;
  img.id = "img_byOm";

  //cart div
  let div1 = document.createElement("div");
  div1.id = "btn_byOm";
  // div1.style.background="skyblue";

  let mbtn = document.createElement("button");
  mbtn.innerText = "-";
  mbtn.id = "minusBtn_byOm";
  // mbtn.style.background ="blue";

  let btn = document.createElement("button");
  btn.innerText = "+";
  btn.id = "mainBtn_byOm";
  btn.style.background = "white";

  let pbtn = document.createElement("button");
  pbtn.innerText = "+";
  pbtn.id = "plusBtn_byOm";
  // pbtn.style.background = 'red'

  div1.append(mbtn, btn, pbtn);
  cart_div_byOm.append(img, div1);

  let name = document.createElement("p");
  name.innerText = ele.name;
  name.id = "h3_byOm";

  let wt = document.createElement("p");
  wt.innerText = ele.wt;
  wt.id = "h5_byOm";

  let price = document.createElement("p");
  price.innerHTML = `&#x20B9;${ele.price}`;

  img_div_byOm.append(cart_div_byOm, name, wt, price);
  main_div.append(img_div_byOm);
  //buttons functionality
  btn.addEventListener("click", () => {
    if (btn.innerText == "+") {
      addTo_cart(ele);
      div1.style.background = "yellow";
      btn.style.background = "yellow";
      pbtn.style.background = "yellow";
      mbtn.style.background = "yellow";
      btn.innerText = 1;
      pbtn.style.display = "inline-block";
      mbtn.style.display = "inline-block";
    }
  });
  mbtn.addEventListener("click", () => {
    if (btn.innerText < 2) {
      btn.innerText = "+";
      btn.style.background = "white";
      // btn.style.shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"

      div1.style.background = "white";

      pbtn.style.display = "none";
      mbtn.style.display = "none";
    } else {
      div1.style.background = "yellow";
      btn.innerText = +btn.innerText - +1;
    }
  });
  pbtn.addEventListener("click", () => {
    btn.innerText = +btn.innerText + +1;
  });
});
//end

function addTo_cart(ele) {
  cart.push(ele);
  localStorage.setItem("cartdata", JSON.stringify(cart));
}

// slider functionality

import slider_imageArr_byOm from "./images.js";

let sliderDiv = document.getElementById("sliderDiv_byOm");

//    calling image array
let images = await slider_imageArr_byOm();

let img = document.createElement("img");

img.id = "slider-image_byOm";

let n = images.length - 1;
//6th image of image arr is displayed on landing page aS first image
let i = 6;
// appending first image that should be shown when page loaded
img.src = images[i];
sliderDiv.append(img);

slideShow();
function slideShow() {
  setInterval(function () {
    if (i === 0) {
      i = n;
    }
    img.src = images[i];
    sliderDiv.append(img);
    i--;
  }, 3000);
}

//grocery data

import groceryData from "./grocery.js";
let gros_arr = await groceryData(); //data call
console.log(gros_arr);
console.log(gros_arr[7].image);
let gros_div = document.getElementById("grocery_div_byOm");

count = 0;
gros_arr.map((ele) => {
  //  console.log('image:', ele.image.value)
  let cart_div_byOm = document.createElement("div");
  cart_div_byOm.id = "cart_div_byOm";

  let img_div_byOm = document.createElement("div");
  img_div_byOm.id = "img_div_byOm";
  let img = document.createElement("img");
  img.src = ele.image;
  img.id = "img_byOm";

  //cart div
  let div1 = document.createElement("div");
  div1.id = "btn_byOm";
  // div1.style.background="skyblue";

  let mbtn = document.createElement("button");
  mbtn.innerText = "-";
  mbtn.id = "minusBtn_byOm";
  // mbtn.style.background ="blue";

  let btn = document.createElement("button");
  btn.innerText = "+";
  btn.id = "mainBtn_byOm";
  btn.style.background = "white";

  let pbtn = document.createElement("button");
  pbtn.innerText = "+";
  pbtn.id = "plusBtn_byOm";
  // pbtn.style.background = 'red'

  div1.append(mbtn, btn, pbtn);
  cart_div_byOm.append(img, div1);

  let name = document.createElement("p");
  name.innerText = ele.name;
  name.id = "h3_byOm";

  let wt = document.createElement("p");
  wt.innerText = ele.wt;
  wt.id = "h5_byOm";

  let price = document.createElement("p");
  price.innerHTML = `${ele.price}`;

  img_div_byOm.append(cart_div_byOm, name, wt, price);
  gros_div.append(img_div_byOm);
  //buttons functionality
  btn.addEventListener("click", () => {
    if (btn.innerText == "+") {
      div1.style.background = "yellow";
      btn.style.background = "yellow";
      pbtn.style.background = "yellow";
      mbtn.style.background = "yellow";
      btn.innerText = 1;
      pbtn.style.display = "inline-block";
      mbtn.style.display = "inline-block";
    }
  });
  mbtn.addEventListener("click", () => {
    if (btn.innerText < 2) {
      btn.innerText = "+";
      btn.style.background = "white";
      // btn.style.shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"

      div1.style.background = "white";

      pbtn.style.display = "none";
      mbtn.style.display = "none";
    } else {
      div1.style.background = "yellow";

      btn.innerText = +btn.innerText - +1;
    }
  });
  pbtn.addEventListener("click", () => {
    btn.innerText = +btn.innerText + +1;
  });
});

//cold drink data

import { cold_drink } from "./data.js";

let drink = await cold_drink(); //data call
console.log("cold_drink:", cold_drink);
// console.log(gros_arr[7].image);
let cold_drink_div = document.getElementById("cold_drink_div_byOm");

count = 0;
drink.map((ele) => {
  //  console.log('image:', ele.image.value)
  let cart_div_byOm = document.createElement("div");
  cart_div_byOm.id = "cart_div_byOm";

  let img_div_byOm = document.createElement("div");
  img_div_byOm.id = "img_div_byOm";
  let img = document.createElement("img");
  img.src = ele.image;
  img.id = "img_byOm";

  //cart div
  let div1 = document.createElement("div");
  div1.id = "btn_byOm";
  // div1.style.background="skyblue";

  let mbtn = document.createElement("button");
  mbtn.innerText = "-";
  mbtn.id = "minusBtn_byOm";
  // mbtn.style.background ="blue";

  let btn = document.createElement("button");
  btn.innerText = "+";
  btn.id = "mainBtn_byOm";
  btn.style.background = "white";

  let pbtn = document.createElement("button");
  pbtn.innerText = "+";
  pbtn.id = "plusBtn_byOm";
  // pbtn.style.background = 'red'

  div1.append(mbtn, btn, pbtn);
  cart_div_byOm.append(img, div1);

  let name = document.createElement("p");
  name.innerText = ele.name;
  name.id = "h3_byOm";

  let wt = document.createElement("p");
  wt.innerText = ele.wt;
  wt.id = "h5_byOm";

  let price = document.createElement("p");
  price.innerHTML = `&#x20B9;${ele.price}`;

  img_div_byOm.append(cart_div_byOm, name, wt, price);
  cold_drink_div.append(img_div_byOm);

  //buttons functionality
  btn.addEventListener("click", () => {
    if (btn.innerText == "+") {
      div1.style.background = "yellow";
      btn.style.background = "yellow";
      pbtn.style.background = "yellow";
      mbtn.style.background = "yellow";
      btn.innerText = 1;
      pbtn.style.display = "inline-block";
      mbtn.style.display = "inline-block";
    }
  });
  mbtn.addEventListener("click", () => {
    if (btn.innerText < 2) {
      btn.innerText = "+";
      btn.style.background = "white";
      // btn.style.shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"

      div1.style.background = "white";

      pbtn.style.display = "none";
      mbtn.style.display = "none";
    } else {
      div1.style.background = "yellow";

      btn.innerText = +btn.innerText - +1;
    }
  });
  pbtn.addEventListener("click", () => {
    btn.innerText = +btn.innerText + +1;
  });
});

//personal care
import { personalCare_data } from "./data.js";

let pcArr = await personalCare_data(); //data call
console.log("pcArr:", pcArr);
// console.log(gros_arr[7].image);
let pc_div = document.getElementById("pc_div_byOm");

count = 0;
pcArr.map((ele) => {
  //  console.log('image:', ele.image.value)
  let cart_div_byOm = document.createElement("div");
  cart_div_byOm.id = "cart_div_byOm";

  let img_div_byOm = document.createElement("div");
  img_div_byOm.id = "img_div_byOm";
  let img = document.createElement("img");
  img.src = ele.image;
  img.id = "img_byOm";

  //cart div
  let div1 = document.createElement("div");
  div1.id = "btn_byOm";
  // div1.style.background="skyblue";

  let mbtn = document.createElement("button");
  mbtn.innerText = "-";
  mbtn.id = "minusBtn_byOm";
  // mbtn.style.background ="blue";

  let btn = document.createElement("button");
  btn.innerText = "+";
  btn.id = "mainBtn_byOm";
  btn.style.background = "white";

  let pbtn = document.createElement("button");
  pbtn.innerText = "+";
  pbtn.id = "plusBtn_byOm";
  // pbtn.style.background = 'red'

  div1.append(mbtn, btn, pbtn);
  cart_div_byOm.append(img, div1);

  let name = document.createElement("p");
  name.innerText = ele.name;
  name.id = "h3_byOm";

  let wt = document.createElement("p");
  wt.innerText = ele.wt;
  wt.id = "h5_byOm";

  let price = document.createElement("p");
  price.innerHTML = `&#x20B9;${ele.price}`;

  img_div_byOm.append(cart_div_byOm, name, wt, price);
  pc_div.append(img_div_byOm);

  //buttons functionality
  btn.addEventListener("click", () => {
    if (btn.innerText == "+") {
      div1.style.background = "yellow";
      btn.style.background = "yellow";
      pbtn.style.background = "yellow";
      mbtn.style.background = "yellow";
      btn.innerText = 1;
      pbtn.style.display = "inline-block";
      mbtn.style.display = "inline-block";
    }
  });
  mbtn.addEventListener("click", () => {
    if (btn.innerText < 2) {
      btn.innerText = "+";
      btn.style.background = "white";
      // btn.style.shadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px;"

      div1.style.background = "white";

      pbtn.style.display = "none";
      mbtn.style.display = "none";
    } else {
      div1.style.background = "yellow";

      btn.innerText = +btn.innerText - +1;
    }
  });
  pbtn.addEventListener("click", () => {
    btn.innerText = +btn.innerText + +1;
  });
});
