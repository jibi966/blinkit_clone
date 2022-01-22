let total = 0;
let cart = JSON.parse(localStorage.getItem("cartdata")) || [];
// let totalprice1 =JSON.parse(localStorage.getItem("totalprice"))
// document.getElementById("myCart").innerText = "₹" + totalprice1;

// let pricearr= [];

function displaydata(arr, location) {
  location.innerHTML = null;

  // document.getElementById("myCart").innerText = "₹" + total;
  // document.getElementById("myCart").innerHTML =null;

  arr.forEach((elem, index) => {
    let { cat, image, name, price, wt } = elem;

    let maindiv = document.createElement("div");
    maindiv.id = "sd-maindiv";
    let img = document.createElement("img");
    img.src = image;
    img.style.width = "80%";
    img.style.height = "50%";
    img.addEventListener("click", () => {
      addP(elem);
    });

    let name1 = document.createElement("p");
    name1.textContent = name;

    let weight = document.createElement("p");
    weight.innerText = wt;
    weight.style.color = "#a3a5b6";

    let subdiv = document.createElement("div");
    subdiv.id = "sd-subdiv";

    let price1 = document.createElement("p");
    price1.innerText = `₹ ${price}`;
    price1.style.fontWeight = "bold";
    price1.style.fontSize = "18px";

    let btn = document.createElement("button");
    btn.innerText = "Add To Cart";
    btn.id = "sd-button";
    let count = 1;
    btn.addEventListener("click", function () {
      btn.innerText = count++;
      addtocart(elem);
    });

    subdiv.append(price1, btn);
    maindiv.append(img, name1, weight, subdiv);
    location.append(maindiv);
  });
}
var bill = 0;
function addtocart(elem) {
  cart.push(elem);
  localStorage.setItem("cartdata", JSON.stringify(cart));
  bill += Number(elem.price);
  //console.log("total:", total);
  // pricearr.push(total)

  localStorage.setItem("ttl", JSON.stringify(bill));

  // for(let i=0; i<pricearr.length; i++){
  //
  // }
  //  let ps = JSON.parse(localStorage.getItem("ttl"));
  let ps = JSON.parse(localStorage.getItem("ttl"));
  document.getElementById("myCart").innerText = "₹" + ps;
}

function addP(el) {
  localStorage.setItem("pData", JSON.stringify(el));
  window.location.href = "./addCategory.html";
}

export default displaydata;
