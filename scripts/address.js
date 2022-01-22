function address(){
    return `
    <div id="address">
      <div id="inside_address">
          <h2 id="#address_title">Add New Delivery Address</h2>
          <h4>Please enter the accurate address, it will help us to serve you better </h4>
          <label for="">Area/Locality</label><br>
          <input type="text"  id="area">
          <hr>
          <div id="address_info">
              <div id="name">
                  <label for="">Name</label><br>
                  <select  id="title">
                      <option value="">Title</option>
                      <option value="">Mr</option>
                      <option value="">Mrs</option>
                  </select>
                  <input type="text"  id="First_last">
              </div>
              <div id="flat">
                  <label for="">Flat/House No</label><br>
                  <input type="text" name="" id="flat_no">
              </div>
              <div id="street">
                  <label for="">Street/society</label><br>
                  <input type="text" name="" id="street_no">
              </div>
              <div id="home_office_other">
                  <input type="radio" name="" id="">&nbsp;&nbsp;<label for="">Home</label>
                  <input type="radio" name="" id=""><label for="">office</label>&nbsp;&nbsp;
                  <input type="radio" name="" id=""><label for="">other</label>&nbsp;&nbsp;
              </div>
              <div id="continue_cancel">
                  <button id="continue_btn">Continue</button>
                  <button id="cancel_btn">cancel</button>
              </div>
          </div>
      </div>
    </div>`
}
export default address;