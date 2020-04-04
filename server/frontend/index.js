const  url = "https://afternoon-journey-05524.herokuapp.com/"

let App = document.querySelector(".body")
let allProData = []



let shareWolrd =() => {
    let share = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="displayProducts()">+</div>
</div>
<div class="sign-in">
    <h1 class="pay">Share The Product </h1>
    
<a href="https://www.facebook.com/sharer/sharer.php?u=horix7.github.io/auction/server/frontend/" class="fa fa-facebook"></a>
<a href="#" class="fa fa-twitter"></a>

   </div>
</div>
`




App.innerHTML = share
}

let displayCounter = (id, date, hour) => {

    let dateToDo = [date, hour].join(' ')

  let countDownDate = new Date(dateToDo).getTime();
  
  let x = setInterval(function() {
  
    // Get today's date and time
    let now = new Date().getTime();
  
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let millSec =  Math.floor(distance % 1000) ;

  
    // Display the result in the element with id="demo"
    document.getElementById(id).innerHTML = days  + " "  +" : " + hours  + " " + " : "
    + minutes  + " " + " :  " + seconds  + " " + " : " + millSec + 'ms';
    
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById(id).innerHTML = "EXPIRED";
      updateStatus(id)
      displayProducts()
    }
  }, 10);
  }



let updateStatus = (id) => {
    let address=`api/v1/status/${id}`

    fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
    })
    .then(results => results.json())
    .then(done => {
        console.log(done)
    })
}

let updateOff  = (id) => {
    let address=`api/v1/offside/${id}`

    fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
    })
    .then(results => results.json())
    .then(done => {
        console.log(done)
    })
}





let adminCount = (id,date, hour) => {

    let dateToDo = [date, hour].join(' ')
  
    let countDownDate = new Date(dateToDo).getTime();
    
    
    let x = setInterval(function() {
    
      let now = new Date().getTime();
    
      let distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    
      document.getElementById(id).innerHTML ="Deadline: " +  hours + "hours"
      
      if (distance <= 0) {
        clearInterval(x);

      document.getElementById(id).innerHTML = "expired"
      updateOff(id)
      displayProducts()
      }
    }, 10);
    }
    
  





let produiBack = () => {
let address = 'api/v1/userpro'
let  displayElement;


App.innerHTML += `<div class="midz">
<div>
 
 <div class="loader"></div>
</div>
</div>
</div>`

fetch( url+address ,{
    method: 'GET', 
    credentials: 'same-origin',
    cache: 'no-cache',
    headers: {
        'Authorization': localStorage.tokenAuth
    }
  } )
.then(res =>{ return res.json()})
.then(response =>  {
    console.log(response)

    let active = []
    let inactive = []


     responseData = response.data

      if(responseData !== undefined) {
        responseData.forEach(x => {
            if(x.status == 'true') {
                active.push(x)
            } else if (x.status == 'false'){
                inactive.push(x)
            }
        })
      }

        let inactivePro = []
     let deadlineCalc = '23 hours'

     let dataCounter = 20 
     setInterval(() => {
         return dataCounter++
     }, 1000);
     inactive.forEach(element => {
         
let intrestedBef = `
        <div>
        
        
<h2 class="alive2" id=${element.id}>${displayCounter(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
 <img src=${element.picture} class="imagi" alt="" width="100%">
    <h2 class="alive"> ${element.name}</h2>

    <div class="action">
        <div><button class="unclick interest">Interested</button></div>
                    <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareWolrd()"   >Share</button>

                    <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
    <p class="mess">Fastest Bidder Winns</p>
    </div>
    
</div>
        </div>

`
console.log(typeof element.picture)

inactivePro.push(intrestedBef)
allProData.push(element)
         
     });

     activeElement = []

     active.forEach(each => {
         console.log(each)
        let bidNow = `
        <div>
        <h2 class="alive2" id=${each.id}>${adminCount(each.id,each.ends, each.description)}</h2>

        <div class="product">
        <h2 class="dead">Current Auction</h2>
        <img   src=${each.picture}  class="imagi"   alt="Image Loading" width="100%">
        <h5 class="alive"> ${each.name}</h5>
        <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
        </div>
        <div class="action">
        <button class="bidBtn" onclick="bidPro(${each.id})">Bid Now</button>
            <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
        <p class="mess">Fastest Bidder Winns</p>
        </div>
        </div>
        </div>

        `

        activeElement.push(bidNow)
allProData.push(each)

     })


  

     

let products = `
<button class="out" onclick="landing()">Log Out </button>
<h1 class="auction-head"> Auction </h1>
<div class="products" id="products">


  </div>

<h1 class="auction-head"> More </h1>
<div class="products" id="products2">


  </div>
</div>

`
displayElement = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)

let displayProducts = () => {
    App.innerHTML = products
}

displayProducts()
let productsDiv = document.querySelector('#products')

displayElement.forEach(n => {
    productsDiv.innerHTML += n
})

})
  .catch ( error =>  console.log('Request failed', error) );

  
}


let moreItems = () => {
    let address = 'api/v1/uninterested'
    let  displayMore = [];
    
    console.log(App)
    App.innerHTML += `<div class="midz">
<div>
 
 <div class="loader"></div>
</div>
</div>
</div>`

    fetch( url+address ,{
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
        // body: JSON.stringify(post),
        headers: {
            // 'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
      } )
      .then( results => results.json())
      .then(resopnse => {
        console.log(resopnse)

        let active = []
        let inactive = []
    
    
         responseData = resopnse.data
            responseData.forEach(x => {
                    if(x.status == 'true') {
                        active.push(x)
                    } else if (x.status == 'false'){
                        inactive.push(x)
                    }

            })

            
    let inactivePro = []
    deadlineCalc = '32 Minutes'
    inactive.forEach(element => {
        
let intrestedBef = `
<div>
<h2 class="alive2" id=${element.id}>${displayCounter(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
<img src=${element.picture} class="imagi" alt="Image Loading" width="100%">
   <h2 class="alive"> ${element.name}</h2>

   <div class="action">
       <div><button class="interest" onclick="claimIntreset(${element.id})">Am interested</button></div>
                   <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareWolrd()"   >Share</button>
        
                   <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
   <p class="mess">Fastest Bidder Winns</p>
   </div>
   
</div>
</div>



`




allProData.push(element)

inactivePro.push(intrestedBef)
        
    });

    activeElement = []

    active.forEach(each => {
       let bidNow = `
       <div>
       <h2 class="alive2" id=${each.id}>${adminCount(each.id,each.ends, each.description)}</h2>

       <div class="product">
       <h2 class="dead">Current Auction</h2>
       <img  src=${each.picture}  class="imagi"  alt="Image Loading" width="100%">
       <h5 class="alive"> ${each.name}</h5>
       <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
       </div>
       <div class="action">
       <button class="bidBtn" onclick="bidPro(${each.id})">Bid Now</button>
           <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
       <p class="mess">Fastest Bidder Winns</p>
       </div>
       </div>
       </div>

       `

       activeElement.push(bidNow)
allProData.push(each)

    })

    displayMore = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)

            
            let productsDiv = document.querySelector('#products2')

            displayMore.forEach(n => {
               if(n !== null) {
                productsDiv.innerHTML += n
               }
            })
                    

      }).catch(err => console.log(err))
}




let bidPro = (id) => {
    let address = 'api/v1/bid'
    console.log(id)

    App.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`
    
    let postForBid = {
        productid: id,
        time: Date.now()
    }

    
    fetch( url + address , {
        method: 'POST', 
        credentials: 'same-origin',
        cache: 'no-cache',
        body: JSON.stringify(postForBid),
        headers: {
            'Content-Type':'application/json',
            'Authorization': localStorage.tokenAuth
        }
    })
    .then(results =>results.json())
    .then(done => {
        let infoPro = allProData.filter(n => n.id == id)
        let pay = `
        <div class="form">
        <div class="hold">
            <div class="Close" id="closePay" onclick="displayProducts()">+</div>
        </div>
        <div class="sign-in">
            <h1 class="pay">Pay To Finish The Bid</h1>
            <h3 class="pay">Bidding For: <span>${infoPro[0].name}</span></h3>
            <h4 class="pay">Paying For: <span>${infoPro[0].price} rwf</span></h4>
            <div class="mtn">Pay With MTN  Mobile Money</div>
                <input type="text" required placeholder="Phone Number" class="login" id="payer"> 
            <button class="submit">Pay</button>
        </div>
        </div>
        `
        App.innerHTML = pay

    }).catch(err => console.log(err))
    
}



let claimIntreset = (elementId) => {
let address = 'api/v1/interest'


    App.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`

let productId = {
    productid: elementId
}


fetch( url + address , {
    method: 'POST', 
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(productId),
    headers: {
        'Content-Type':'application/json',
        'Authorization': localStorage.tokenAuth
    }
})
.then(results =>results.json())
.then(done => {

    produiBack()
    moreItems()

    
})

}




let loginBack = () => {
let address = 'api/v1/auth/signin'

    let login = `
    <div class="form">
    <div class="hold">
        <div class="Close" onclick="landing()">+</div>
    </div>
    <div class="sign-in">
        <h1>Login</h1>
            <input type="text" required placeholder="User Name" class="login"  id="loginName"> 
        <input type="password" required placeholder="Your Password" class="login" id="loginPass"> 
        <button class="submit" id="loginSub"> Login</button>
       </div>      
  </div>
  <div id="err"  class="error"> 
    
  </div>
 
`
// let loginPage = () => {postLogin
    App.innerHTML = login
    
let loginName = document.querySelector('#loginName')
let loginPass = document.querySelector('#loginPass')
let subLog = document.querySelector('#loginSub')
let erroMessage = document.querySelector('#err')




subLog.onclick = async () => {
    subLog.innerHTML = ` <i class="fa fa-spinner fa-spin"></i>`
    let loginInfo = {
        "email": loginName.value,
        "password": loginPass.value
    }


    console.log(loginInfo)

let results = await fetch(url+address, {
    method: 'POST',
    credentials: 'same-origin',
    cache: 'no-cache',
    body: JSON.stringify(loginInfo),
    headers: {
        'Content-Type':'application/json'
    }
  })

  let done = await results.json()
  subLog.innerHTML = `Login`

  console.log(done)
      if(done.status >= 400 ) {
          console.log(done)
          erroMessage.style.visibility =  'visible'
          erroMessage.innerHTML = done.error
          erroMessage.style.animationName =  'erroror';

          setTimeout(() => {
          erroMessage.style.visibility =  'hidden'
          erroMessage.style.animationName =  'none';
          }, 5000)

      } else {
          localStorage.setItem("tokenAuth", done.data[0].token)

          console.log( done.data[0].token)
          console.log(done)
          produiBack()
          moreItems()

      }

}

}

let loginConnected = () => loginBack()









let signUpBack = () => {
    let address = 'api/v1/auth/signup'
    
    let signUp = ` 
    <div class="form">
   <div class="hold">
       <div class="Close" onclick="landing()">+</div>
   </div>
   <div class="sign-in">
       <h1>Join Now </h1>
       <input type="text" required placeholder="Your Names" class="login" id="names"> 
       <input type="text" required placeholder="User Name" class="login" id="userName">
       <div class="mtn2">Your Current age </div>
       <input type="number" required placeholder="Your Age" class="login" id="date">
       <input type="number" required placeholder="Your Phone" class="login" id="phoneNumber"> 
       <input type="text" required placeholder="Your Email" class="login" id="email"> 
       <input type="password" required placeholder="Your Password" class="login" id="pass"> 
       <button class="submit" id="signSub" >Sign Up</button>
      </div>
   </div>

   <div id="err"  class="error"> 
    
   </div>

   `

    App.innerHTML = signUp
   
    
    let email = document.querySelector('#email')
    let names = document.querySelector('#names')
    let userName = document.querySelector('#userName')
    let date = document.querySelector('#date')
    let phoneNumber = document.querySelector('#phoneNumber')
    let pass = document.querySelector('#pass')



   
        
    let subLog = document.querySelector('#signSub')
    let erroMessage = document.querySelector('#err')
    
    
    
    
    subLog.onclick = async () => {
    subLog.innerHTML = ` <i class="fa fa-spinner fa-spin"></i>`

        let postData = {
            "firstname": names.value,
            "secondname": userName.value,
            "email": email.value,
            "password": pass.value,
            "address": address.value,
            "phone": phoneNumber.value,
            "age": 	date.value,
    }

    
    
        console.log(postData)
    
    let results = await fetch(url+address, {
        method: 'POST',
        credentials: 'same-origin',
        cache: 'no-cache',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type':'application/json',
        }
      })
    
      let done = await results.json()
      subLog.innerHTML = `Sign Up`
    
      console.log(done)
          if(done.status >= 400 ) {
              console.log(done)
              erroMessage.style.visibility =  'visible'
              erroMessage.innerHTML = done.message || done.error
              erroMessage.style.animationName =  'erroror';
    
              setTimeout(() => {
              erroMessage.style.visibility =  'hidden'
              erroMessage.style.animationName =  'none';
              }, 10000)
    
          } else {
              console.log(done.data, 'hear now')
              localStorage.setItem('tokenAuth', done.data[0].token)
            produiBack()
            moreItems()
        }
    
    }
    
    }


    let siginUpConnect = () => signUpBack()




let displayProducts = () => {
    produiBack()
    moreItems()
}




let landingPage = `
<div class="bg">
<nav>
<img class="hide iimg" src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="Image Loading" width="70px">
<div></div>
<button class="headbtn blue join hide" id="register" onclick="signUpBack()">Join Now</button>
<button class="headbtn blue hide left full" id="login" onclick="loginBack()"> Log In</button>

<img class="nnew" src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="Image Loading" width="100px">
    <button class="headbtn blue nnew" id="login" onclick="loginBack()"> Log In</button>
    <button class="headbtn blue nnew" id="register" onclick="signUpBack()">Join Now</button>
    
</nav>
<div class="header">
    
<div class="description">
    <h1>WELCOME TO YOUR ALU RWANDA DIGITAL AUCTION MARKETPLACE</h1>
    <p>Where The Fastest Bidder Wins, Not The Highest, Richest or Smartest </p>
    <div class="note2">Every Milliseconds Counts
    </div>
    <button class="btn" onclick="signUpBack()">Join Now</button>
</div>
<div class="secondHead">
<img class="img" src="./assets/auction.png" alt="Image Loading" width="80%">


</div>
</div>
</div>

<div class="mid">

<div class="note">“No one knows exactly what and where the treasure is hiding. Only the constant fortune seeker finds it. keep believing and
    searching until you get it.” – Benedict Okolie
    </div>
<div class="notice">
    <img src="./assets/sad person.jpg" alt="Image Loading" width="100%">
    <p>Are you in need of something but cannot afford it? Now is your chance!   </p>
</div>
<p class="warn">
    Note: Fortune Auction is a <span>LEGALLY REGISTERED</span> business at the Rwanda Development Board. See Legal Document page below
</p>

<div class="people">
   
    <img src="./assets/Smartphone users.jpeg" width="80%" alt="Image Loading">
    <p>Here, you could get what you want at the most ridiculously
        insane bidding price. If you’re the fastest bidder to pay for it.
        We Auction Products at a crazy bidding price for the fastest
        bidder who pays first to claim it.</p>
</div>


<p class="cont">
    We Only Exist To Serve And Connect You The Fortune Seeker To Treasure;
Regardless Of Your Income, Background Or Status <br></p>

<div class="cont white">  <button onclick="signUpBack()"> Join Now</button> <span>It’s Free to be a Member</span>
</div>
<div class="descr">
   <img src="./assets/1200px-Icon-not-under18.svg.png" width="50px" alt="Image Loading">
    <h2>UNDER AGE 18 IS NOT ALLOWED TO BID</h2>
</div>
<div>
    <h1 class="play">How To Win </h1>
    <div class="game">
        <div class="box">
            <i></i>
            <img src="./assets/Registration Icon.png" alt="Image Loading" srcset="" width="50px">
            <h4 class="one">Step 1</h4>
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
   <img src="./assets/user-login-icon-png-4.png" alt="Image Loading" srcset="" width="50px">

            <h4 class="two">Step 2</h4>
            <p>During Auction
                Day, login to your
                account & wait for
                the final
                countdown to start
                bidding. Ensure to
                have money in your
                Mobile Money
                Account
                
                </p>
        </div>

        <div class="box">
            <i></i>
    <img src="./assets/Bidding with Mobile Money.PNG" alt="Image Loading" srcset="" width="50px">

            <h4 class="three">Step 3</h4>
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
    <img src="./assets/Winner Icon.png" alt="Image Loading" srcset="" width="50px">

            <h4 class="four">Step 4</h4>
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
    <img src="./assets/Phone Call Icon.png" alt="Image Loading" srcset="" width="50px">

            <h4 class="five">Step 5</h4>
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
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="Image Loading">
        <h4>Benedict OKOLIE</h4>
    </div>
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="Image Loading">
        <h4>Morris MWITI</h4>
    </div>
    <div class="bx">
        <img class="profile" src="./assets/my picture.jpg" width="200px" alt="Image Loading">
        <h4>Jules Hirwa</h4>
    </div>

</div>
</div>
 
<h1 class="play"> Auction </h1>

<div class="products"  id="frontpro" onload="frontDisplayPros()"> 

  </div>
</div>

<p class="warn2">
Note: When you bid for a product by paying for it, we <span> DO NOT REFUND.</span>  Be the fastest bidder to win at our bidding price,
because <span> YOUR GAIN </span>  is more than the <span>BIDDING PRICE.</span>
</p>

<h1 class="play"> Current Winners </h1>
<div class="prof"  id="wiin">

</div>

<footer>
<div class="fot">
    <h4>Conditions</h4>
    <a href="#" onclick="displayInfo()">Terms And Conditions</a>
    <a href="#" onclick="displayInfo()">Non-Refund Policy</a>
    <a href="#"onclick="displayInfo()">Privacy & Cookie Policy</a>
   
</div>
<div class="fot">
    <h4>Contact Us</h4>
    <a href="#" onclick="">Email: customercare@fortuneauction.com</a>
    <a href="#" onclick="">Call Us: 078000000</a>

</div>
<div class="fot">
    <h4>Documentation</h4>
    <a href="#" onclick="">FAQ</a>
    <a href="#" onclick="">Legal Document</a>

</div>
</footer>

<div class="foot">
Copyright © 2020
<span> Address: 4th Floor Kigali Height West Wing</span>

</div>


<div id="myModal" class="modal" onload="popup()">

  <div class="modal-content" >
    <span class="close" onclick="closeBan()">&times;</span>
    <h1 class="attention"> ATTENTION! ATTENTION!! ATTENTION! ! !</h1>

    <p class="attention2">Fortune Auction is establish to auction sponsored valuable
    products to our esteem users. However, due to the coronavirus
    pandemic & country lockdown. We will temporally auction
    sponsored funds to support students welfare.
    </p>

    <p class="attention3"> Note: After the lockdown, we will resume auctioning sponsored products </p>

    <div class="attention4"> 
    <img src="./assets/410b2019-7501-483a-a461-b50de6a78ca6-img_9273-2.jpg" alt="" width="100px">
    <button class="midBtn" onclick="shareSec()">SHARE NOW TO HELP OTHERS IN NEED.</button>
  <img src="./assets/brown-leather-wallet-with-lots-money_68708-304.jpg" alt=""  width="100px">
    </div>
  </div>

</div>

<script>
    


</script>
`

setTimeout( () => {
    document.getElementById("myModal").style.display = 'block'
    }, 4000)

let closeBan = () => {
    document.getElementById("myModal").style.display = 'none'
}



let slideIndex = 1;

let plusDivs = (n) =>{
  showDivs(slideIndex += n);
}

let  showDivs = (n) => {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


let notAuthed = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="landing()">+</div>
</div>
<div class="sign-in">
    <h1 class="pay">Your Not Signed In </h1>
    <button class="submit" onclick="loginBack()">Login</button>
    <button class="submit" onclick="signUpBack()">SignUp</button>

   </div>
</div>
`
// App.innerHTML = landingPage



// let Interested = (e) => {
//     console.log(e)
//     let interest = document.querySelector(`.interest`)
    
//     interest.innerHTML = "intrested"
//     interest.style.backgroundColor = 'orange'
// }



let frontDisplayPros = () => {
    let address = 'api/v1/frontpro'
    let diplayIn = document.getElementById('frontpro')

    diplayIn.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`

    fetch(url + address , {
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
    })
    .then(results => results.json())
    .then(resopnse => {
       
        console.log(resopnse)

        let active = []
        let inactive = []
    
    
         responseData = resopnse.data
            responseData.forEach(x => {
                    if(x.status == 'true') {
                        active.push(x)
                    } else if (x.status == 'false'){
                        inactive.push(x)
                    }

            })

            
    let inactivePro = []
    deadlineCalc = '32 Minutes'
    inactive.forEach(element => {
        
let intrestedBef = `
<div>
<h2 class="alive2" id=${element.id}>${displayCounter(element.id, element.starts, element.hour)}</h2>

<div class="product">
<h2 class="dead2">Upcoming Soon</h2>
<img src=${element.picture} class="imagi" alt="Image Loading" width="100%">
   <h2 class="alive"> ${element.name}</h2>

   <div class="action">
       <div><button class="interest" onclick="notAuth()">Am interested</button></div>
                   <h4 class="need"><span class="num">${element.target}</span> <span class="reds">People Needed</span> For sponsoship</h4>
       <button class="share"  onclick="shareSec()"   >Share</button>
        
                   <h5>Bidding  Price <span class="blues"> ${element.price} Rwf</span></h3>
   <p class="mess">Fastest Bidder Winns</p>
   </div>
   
</div>
</div>



`




allProData.push(element)

inactivePro.push(intrestedBef)
        
    });

    activeElement = []

    active.forEach(each => {
       let bidNow = `
       <div>
       <h2 class="alive2">Deadline: ${deadlineCalc}</h2>

       <div class="product">
       <h2 class="dead">Current Auction</h2>
       <img  src=${each.picture}  class="imagi"  alt="Image Loading" width="100%">
       <h5 class="alive"> ${each.name}</h5>
       <div class="action"><h4 class="need">For <span class="num">${each.winner}</span> <span class="reds">Top</span>Winners</h4>
       </div>
       <div class="action">
       <button class="bidBtn" onclick="notAuth()">Bid Now</button>
           <h5>Bidding  Price <span class="blues"> ${each.price} Rwf</span></h3>
       <p class="mess">Fastest Bidder Winns</p>
       </div>
       </div>
       </div>

       `

       activeElement.push(bidNow)
allProData.push(each)

    })

    let displayMore = [...inactivePro, ...activeElement].sort( () => Math.random() - 0.5)
     diplayIn.innerHTML = null

    displayMore.forEach( n => {
        diplayIn.innerHTML += n
    })        
        
    })
}



let displayFrontWinners = () =>  {
    let address = 'api/v1/frontwin'
    let diplayIn = document.querySelector('#wiin')
    diplayIn.innerHTML = `<div class="midz">
    <div>
     
     <div class="loader"></div>
    </div>
    </div>
    </div>`
    fetch(url + address , {
        method: 'GET', 
        credentials: 'same-origin',
        cache: 'no-cache',
    })
    .then(results => results.json())
    .then(response => {

        console.log(response)
        diplayIn.innerHTML = null

        response.data.forEach( data => {
    let oneBox = `         
    <div class="bx1">
    <img class="profile" src=${data.picture} width="200px" alt="">
    <h4>${data.name}</h4>
    <h5>${data.bidtime}</h5>
    <p>${data.product}</p>
    </div>
`

diplayIn.innerHTML +=  oneBox

        })
    })
}








let landing = () => {

    App.innerHTML = landingPage

frontDisplayPros()
displayFrontWinners()

}

landing()

// let loginToproducts= () => {
//     App.innerHTML = products
// }

let notAuth = () => {
    App.innerHTML = notAuthed
}



let shareSec =() => {
    let share = `
    
<div class="notSigned">
        
<div class="hold">
    <div class="Close" id="closePay" onclick="landing()">+</div>
</div>
<div class="sign-in">
    <h1 class="pay">Share The Product </h1>
    
<a href="https://www.facebook.com/sharer/sharer.php?u=horix7.github.io/auction/server/frontend/" class="fa fa-facebook"></a>
<a href="https://twitter.com/intent/horix7.github.io/auction/server/frontend/" class="fa fa-twitter"></a>
<a  href="whatsapp://send?text=horix7.github.io/auction/server/frontend/" data-action="share/whatsapp/share" class="fa fa-whatsapp" style="font-size:48px;color:green"></a>

   </div>
</div>
`

App.innerHTML = share
}




let displayInfo = (heading) => {
    
    let insertData = `

  <div class="mido">
  <div class="hold">
  <div class="close1" onclick="landing()">+</div>
  </div>

  <img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="100px">
  <h1>terms And Conditions</h1>
  <p>Information will be here ....</p>
  </div>

   
    `

    App.innerHTML = insertData
}









