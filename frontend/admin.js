
let adminPage = document.querySelector('.body')
let landing = `
      
<div class="dash">
<div class="menu">
    <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="">
 <button class="pox">Bids</button>
 <button class="pox">Auctions</button>
 <button class="pox">Users</button>
</div>

<div class="info">
    
 <div class="infos">
     <div class="big-box">
         <h4 class="dashnfo">Total Revenue</h4>
      <h1 class="dashInfo">231000</h1>
     </div>
     <div class="big-box">
      <h4 class="dashnfo">Total Customers</h4>
   <h1 class="dashInfo">231000</h1>
  </div>
  <div class="big-box">
      <h4 class="dashnfo">New Customers</h4>
   <h1 class="dashInfo">231000</h1>
  </div>
  <div class="big-box">
     <h4 class="dashnfo">Total Winners</h4>
  <h1 class="dashInfo">20</h1>
</div>
 </div>

 <div class="winners">
     <div class="winnerHead">
         <div> Winner </div>
         <div> Phone </div>
         <div> Bid Tme </div>
         <div> Winn for </div>
     </div>

     <div class="winner">
         <div> Benedict Okolie </div>
         <div> 019213934 </div>
         <div> 23:32:12 </div>
         <div> mercedenz benz  </div>
     </div>

       <div class="winner">
         <div> Moise okolie </div>
         <div> 019213934 </div>
         <div> 23:32:12 </div>
         <div> mercedenz benz  </div>
     </div>
 </div>

<div class="sign">
 <h1>Publish A winner</h1>
     <div class="grid-two"><input type="text" required placeholder="Winner Name" class="login"> 
         <input type="text" required placeholder="Won for" class="login"> </div>
 <div class="grid-two">
     <input type="text" required placeholder="winning time" class="login">
     <input type="text"  placeholder="Picture link" class="login">
     </div>
     <div class="grid-two">
         <button class="submit" onclick="created()"> Publish Winner</button>
     </div>
</div>

<div class="sign">
 <div class="grid-two">
     <button class="create" onclick="produi()"> Create An Auction <span>+</span></button>
    </div>
</div>


<h4 class="sign"> Upcoming Auctions</h4>
<div class="winners">
 <div class="productHead">
     <div> Product </div>
     <div> launching </div>
     <div> interested </div>
     <div> Bid Target </div>
     <div> launch time </div>
     <div> Actions </div>


 </div>

 <div class="produi">
     <div> Benedict Okolie </div>
     <div> 019213934 </div>
     <div> 23:32:12 </div>
     <div> mercedenz benz  </div>
     <div> mercedenz benz  </div>
 <div> <button>cancel Auction</button> <br> <a href="" class="rg">Dowload Data</a></div>


 </div>

   <div class="produi">
     <div> Moise okolie </div>
     <div> mercedenz benz  </div>
     <div> 019213934 </div>
     <div> 23:32:12 </div>
     <div> mercedenz benz  </div>
 <div> <button>cancel Auction</button> <br> <a href="" class="rg">Dowload Data</a></div>

 </div>
</div>

<h4 class="sign"> Current Auctions</h4>
<div class="winners">
 <div class="productHead">
     <div> Product </div>
     <div> bids </div>
     <div> deadline </div>
     <div> Revenue </div>
     <div> date </div>
     <div> Actions </div>

 </div>

 <div class="produi">
     <div> Benedict Okolie </div>
     <div> 019213934 </div>
     <div> 23:32:12 </div>
     <div> mercedenz benz  </div>
     <div> mercedenz benz  </div>
 <div>  <br> <a href="" class="rg">Dowload Data</a></div>


 </div>

   <div class="produi">
     <div> Moise okolie </div>
     <div> mercedenz benz  </div>
     <div> 019213934 </div>
     <div> 23:32:12 </div>
     <div> mercedenz benz  </div>
 <div>  <br> <a href="" class="rg">Dowload Data</a></div>

 </div>
</div>





<h2 class="sign">Customers</h2>
<div class="grid-two flo"><input type="text" placeholder="Search" > <button>Search</button></div>
<div class="winners">
<div class="userHead">
   <div> Full Name </div>
   <div> User Name </div>
   <div> Email </div>
   <div> Phone Number </div>
   <div> Age </div>
   <div> Registered Date  </div>
   <div> Action  </div>


</div>

<div class="useri">
   <div> Benedict Okolie </div>
   <div> 019213934 </div>
   <div> 23:32:12 </div>
   <div> mercedenz benz  </div>
   <div> mercedenz benz  </div>
   <div> mercedenz benz  </div>
 <div> <button>Delete</button> <br> <a href="" class="rg">Dowload Data</a></div>


</div>

 <div class="useri">
   <div> Moise okolie </div>
   <div> mercedenz benz  </div>
   <div> 019213934 </div>
   <div> 23:32:12 </div>
   <div> mercedenz benz  </div>
   <div> mercedenz benz  </div>
   <div> <button>Delete</button> <br> <a href="" class="rg">Dowload Data</a></div>

</div>
</div>



</div>
</div>
`

let createProd = `
    
<div class="form">
<div class="hold">
    <div class="Close" onclick="admin()">+</div>
</div>
<div class="sign-in">
    <h1>Create Product </h1>
    <input type="text" required placeholder="Produc Name" class="login"> 
    <input type="number" required placeholder="Bid Target" class="login">
    <div class="grid-two">
    <div><div class="mtn2">Launching Date </div>
    <input type="date" required  class="login left"></div>
    <div><div class="mtn2 wes">Ending Date </div>
    <input type="date" required  class="login rg wes"> </div>
    </div>
    <div class="grid-two"><input type="number" required placeholder="Price" class="login"> </div>
    <input type="text" required placeholder="Image Link" class="login"> 
    <button class="submit" onclick="loginToproducts()">Submit</button>
   </div>
</div>
`
adminPage.innerHTML = landing

let admin = () => {
    adminPage.innerHTML = landing

}

let created = () => {
    adminPage.innerHTML = landing

}

let produi = () => {
    adminPage.innerHTML = createProd
}

