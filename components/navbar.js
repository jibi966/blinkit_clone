function navbar() {
  return ` <div id="mainNav">
    <div id="logo">
      <img 
        src="https://blinkit.com/1c8186839103f6756f36889c7e73a799.svg"
        alt=""
      />
    </div>
    <div id="location">
      <img
        src="https://cdn.grofers.com/assets/ui/out_for_delivery_icon.png"
        alt=""
      />
      <div id="locName"></div>
    </div>
    <div id="searchbox">
      <button id="sbtn">
        <i class="material-icons">search</i>
      </button>
      <input type="text" id="search" />
    </div>
    <div id="cat1">
      <a href="../category.html">categories</a>
    </div>
    <div id="cat2">
      <a>login</a>
    </div>
    <div id="cat3">
      <a>profile</a>
    </div>

    <div id="mycart">
      <span class="material-icons carticon">shopping_cart</span>
      <span id="myCart">my cart</span>
    </div>
  </div>
  <div id="sugBox"></div>
  <!--         dropdown                  -->
  <div id="myDropdown" class="dropdown-content">
    <h2>my account</h2>
    <p id="localName"></p>
    <li>my orders</li>
    <li>saved address</li>
    <li>my wallet ₹0</li>
    <li>faq's</li>
    <li>log out</li>
    <div id="qr">
      <img
        src="https://blinkit.com/16d25a2a463302cf78682e3e3c694122.svg"
        alt=""
      />
      <p>
        <b> scan the qr code and download blinkit app</b>
      </p>
    </div>
  </div>
  <!--         dropdown                  -->

  <div id="sideCart">
    <div id="openClose">
      <div><h2>my cart</h2></div>
      <div><button id="closeCart">X</button></div>
    </div>
    <div id="cartEmptyImg">
      <img
        src="https://cdn.grofers.com/assets/ui/empty_states/emp_empty_cart.png"
        alt=""
      />
      <h3>you don't have any items in your cart</h3>
      <p>your favourite items are just a click away</p>
      <button>start shopping</button>
    </div>
    <div id="subcart">
      <h2>delivery in 7 minutes</h2>
      <p>from Super Store - Bengaluru Kormangala ES22</p>
      <img
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,h=88/layout-engine/2021-12/blinkit-cart-banner.png"
        alt=""
      />
    </div>
    <div id="zz"></div>
    <div id="bill">
      <h2>bill details</h2>
      <p id="totalBill"></p>
      <p>convenience & safety fee: ₹5</p>
      <button id="billed"> <a style="color:white;font-weight:bold" href="../address.html"> proceed to pay </a></button>
    </div>
    <!-- cart items appending div -->
  </div>
  <div id="login">
    <div id="phoneHead"><h2>Phone Number Verification</h2></div>
    <div id="dialPad">
      <h3 id="changeToOtp">Enter your phone number to Login/Sign up</h3>
      <input
        id="cusNum"
        type="number"
        placeholder="Enter Phone Number"
        required
      />
      <input id="cusOTP" type="number" placeholder="Enter OTP" required />
      <br />
      <br />
      <button id="getOtp"><b> NEXT</b></button>
      <p id="timerOTP"></p>
    </div>
  </div>`;
}

export default navbar;
