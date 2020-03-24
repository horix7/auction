let App = document.querySelector('.body')
console.log(App)

let pay = `
<div class="form">
<div class="hold">
    <div class="Close" id="closePay" onclick="displayProducts()">+</div>
</div>
<div class="sign-in">
    <h1 class="pay">Pay To Finish The Bid</h1>
    <h3 class="pay">Bidding For: <span>BMW brand New Car </span></h3>
    <h4 class="pay">Paying For: <span>500 rwf</span></h4>
    <div class="mtn">Pay With MTN  Mobile Money</div>
        <input type="text" required placeholder="Phone Number" class="login" id="payer"> 
    <button class="submit">Pay</button>
   </div>
</div>
`

let products = `
<button class="out" onclick="landing()">Log Out </button>
<h1 class="auction-head"> Auction </h1>
<div class="products">

  <div class="product">
      <h2 class="dead">DeadLine <span>20:12:123:132</span></h2>
      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">
          <button class="bidBtn" onclick="payment()">Bid Now</button>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
  <div class="product">
      <h2 class="dead">DeadLine <span>20:12:123:132</span></h2>
      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">
          <button class="bidBtn" onclick="payment()">Bid Now</button>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
  <div class="product">
      <h2 class="alive">Upcoming <span>20:12:123:132</span></h2>
      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">

          <button class="interest" onclick="Interested()">Am Interested</button>
                      <h4 class="need"><span class="num">340</span> <span class="reds">People Needed</span> For sponsoship</h4>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
  <div class="product">
      <h2 class="alive">Upcoming <span>20:12:123:132</span></h2>
      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">

          <button class="interest" onclick="Interested()">Am Interested</button>
                      <h4  class="need" ><span class="num">340</span> <span class="reds">People Needed</span> For sponsoship</h4>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
  <div class="product">
      <h2 class="dead">DeadLine <span>20:12:123:132</span></h2>

      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">
          <button class="bidBtn" onclick="payment()">Bid Now</button>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
  <div class="product">
      <h2 class="dead">DeadLine <span>20:12:123:132</span></h2>
      <img src="./assets/volkswagon passat image.jpg" alt="" width="100%">
      <div class="action">
          <button class="bidBtn" onclick="payment()">Bid Now</button>
          <h3>Bidding  Price<br> <span class="blues"> 500 Rwf</span></h3>
      <p class="mess">Fastest Bidder Winns</p>
      </div>
  </div>
</div>


`

let signUp = ` 
 <div class="form">
<div class="hold">
    <div class="Close" onclick="landing()">+</div>
</div>
<div class="sign-in">
    <h1>Join Now </h1>
    <input type="text" required placeholder="First Name" class="login"> 
    <input type="text" required placeholder="Second Name" class="login"> 
    <input type="text" required placeholder="Your Email" class="login"> 
    <input type="password" required placeholder="Your Password" class="login"> 
    <button class="submit" onclick="loginToproducts()">Sign Up</button>
   </div>
</div>
`
let login = `
<div class="form">
    <div class="hold">
        <div class="Close" onclick="landing()">+</div>
    </div>
    <div class="sign-in">
        <h1>Login</h1>
            <input type="text" required placeholder="Your Email" class="login"> 
        <input type="text" required placeholder="Your Password" class="login"> 
        <button class="submit" onclick="loginToproducts()"> Login</button>
       </div>
  </div>
`
let landingPage = `
<div class="bg">
<nav>
    <img src="" alt="">
    <button class="headbtn blue" id="login" onclick="loginPage()"> Log In</button>
    <button class="headbtn orange" id="register" onclick="registerPage()">Join Now</button>
    
</nav>
<div class="header">
    
<div class="description">
    <h1>WELCOME TO YOUR TRUSTED DIGITAL AUCTION MARKETPLACE</h1>
    <p>Where The Fastest Bidder Wins, Not The Highest, Richest or Smartest </p>
    <div class="note2">Every Milliseconds Counts
    </div>
    <button class="btn" onclick="registerPage()">Join Now</button>
</div>
<div class="secondHead">
<img class="img" src="./assets/auction.png" alt="" width="80%">
<div class="note img">“No one knows exactly what and where the treasure is hiding. Only the constant fortune seeker finds it. keep believing and
    searching until you get it.” – Benedict Okolie
    </div>

</div>
</div>
</div>

<div class="mid">
<div class="notice">
    <img src="./assets/sad person.jpg" alt="" width="100%">
    <p>Are you in need of something but cannot afford it? Now is your chance!   </p>
</div>

<div class="people">
   
    <img src="./assets/Smartphone users.jpeg" width="80%" alt="">
    <p>Here, you could get what you want at the most ridiculously
        insane bidding price. If you’re the fastest bidder to pay for it.
        We Auction Products at a crazy bidding price for the fastest
        bidder who pays first to claim it.</p>
</div>

<p class="warn">
    Note: Fortune Auction is a <span>LEGALLY REGISTERED</span> business at the Rwanda Development Board. See Legal Document page below
</p>

<p class="cont">
    We Only Exist To Serve And Connect You The Fortune Seeker To Treasure;
Regardless Of Your Income, Background Or Status <br> <button onclick="registerPage()"> Join Now</button> <span>It’s Free to be a Member</span>
</p>
<div class="descr">
   <img src="./assets/1200px-Icon-not-under18.svg.png" width="50px" alt="">
    <h2>UNDER AGE 18 IS NOT ALLOWED TO BID</h2>
</div>
<div>
    <h1 class="play">How To Win </h1>
    <div class="game">
        <div class="box">
            <i></i>
            <h4>Step 1</h4>
            <p>Register for
                Free to be a
                Member. And
                click “I’m
                Interested” On
                1 or all the
                product of your
                choice.
                </p>
        </div>

        <div class="box">
            <i></i>
            <h4>Step 2</h4>
            <p>During Auction
                Day, login to your
                account & wait for
                the final
                countdown to start
                bidding. Ensure to
                have money your
                Mobile Money
                Account
                
                </p>
        </div>

        <div class="box">
            <i></i>
            <h4>Step 3</h4>
            <p>To Complete Your
                bid, pay for the
                product(s) at the
                giving bidding price
                using MTN Mobile
                Money.
                REMEMBER TO BE
                THE FASTEST!
                </p>
        </div>

        <div class="box">
            <i></i>
            <h4>Step 4</h4>
            <p>After the auction
                deadline, we
                announce the
                winner(s) in 20
                minutes via our
                website. Make
                sure to check.
                
                </p>
        </div>

         <div class="box">
            <i></i>
            <h4>Step 5</h4>
            <p>We call the winner(s)
                to confirm their
                identity and they
                come and pick their
                item or we ship it to
                their location; which
                includes a shipping
                fee.
                
                </p>
        </div>
    </div>
</div>
<h1 class="play">TEAM</h1>
<div class="prof">
    
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="">
        <h4>Benedict OKOLIE</h4>
    </div>
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="">
        <h4>Morris MWITI</h4>
    </div>
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="">
        <h4>Jules Hirwa</h4>
    </div>

</div>
</div>
<p class="warn2">
Note: When you bid for a product by paying for it, we <span> DO NOT REFUND.</span>  Be the fastest bidder to win at our bidding price,
because <span> YOUR GAIN </span>  is more than the <span>BIDDING PRICE.</span>
</p>

<footer>
<div class="fot">
    <h4>Conditions</h4>
    <a href="">Terms And Conditions</a>
    <a href="">Non-Refund Policy</a>
    <a href="">Privacy & Cookie Policy</a>
   
</div>
<div class="fot">
    <h4>Contact Us</h4>
    <a href="">Email: customercare@fortuneauction.com</a>
    <a href="">Call Us: 078000000</a>

</div>
<div class="fot">
    <h4>Documentation</h4>
    <a href="">FAQ</a>
    <a href="">Legal Document</a>

</div>
</footer>

<div class="foot">
Copyright © 2020
<span> Address: 4th Floor Kigali Height West Wing</span>

</div>
`
App.innerHTML = landingPage

let bidd = document.querySelector('.bidBtn')

let payment = () => {
    App.innerHTML = pay
}

let Interested = (e) => {
    console.log(e)
    let interest = document.querySelector(`.interest`)
    
    interest.innerHTML = "intrested"
    interest.style.backgroundColor = 'orange'
}


let displayProducts = () => {
    App.innerHTML = products
}


let loginPage = () => {
    App.innerHTML = login
}

let registerPage  = () => {
    App.innerHTML = signUp
}

let landing = () => {
    App.innerHTML = landingPage
}

let loginToproducts= () => {
    App.innerHTML = products
}