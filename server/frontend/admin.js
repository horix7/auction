

const  url = "https://afternoon-journey-05524.herokuapp.com/"
let App = document.querySelector(".body")
let allProData = []




let loginBack = () => {
  let address = 'api/v1/auth/signin'
  
      let login = `
      <div class="form">
      <div class="sign-in">
          <h1>Admin Login</h1>
              <input type="text" required placeholder="User Name" class="inputsAdmin"  id="loginName"> 
          <input type="password" required placeholder="Your Password" class="inputsAdmin" id="loginPass"> 
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
    subLog.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`

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
  
            AdminEntry()
  
        }
  
  }
  
  }

  loginBack()
  

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
  + minutes  + " " + " :  " + seconds  + " " + " : " + millSec + '';
  
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById(id).innerHTML = "expired"
    updateStatus(id)
    AdminEntry()

  }
}, 10);
}


let adminCount = (id,date, hour) => {

  let dateToDo = [date, hour].join(' ')

  let countDownDate = new Date(dateToDo).getTime();
  
  
  let x = setInterval(function() {
  
    let now = new Date().getTime();
  
    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    let millSec =  Math.floor(distance % 1000) ;
  
  
    document.getElementById(id).innerHTML =  millSec   + " "  +" : " + seconds    + " " + " : "
    + minutes  + " " + " :  " +  hours + " " + " : " + days + '';
    
    if (distance <= 0) {
      clearInterval(x);
    document.getElementById(id).innerHTML = "expired"
    }
  }, 10);
  }
  


  let winningDate = (id,mill) => {
    var time = new Date(parseInt(mill)).getTime();
    var date = new Date(time);
    let x = setInterval(function() {
      document.getElementById(id).innerHTML =  date.toString()
      
    }, 10);
    

  }


let prduiDz = () => {
  let address=`api/v1/idz`
  
  fetch( url + address, {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'no-cache',
    headers: {
        'Authorization': localStorage.tokenAuth

    }
  }).then(results => results.json())
  .then(response => {
    response.data.forEach(n => {
      updateWinnes(n)
    })

  })

}

prduiDz()
let updateWinnes = (id) => {
  let address=`api/v1/choose/${id}`

  fetch( url + address, {
    method: 'POST',
    credentials: 'same-origin',
    cache: 'no-cache',
    headers: {
        'Content-Type':'application/json',
        'Authorization': localStorage.tokenAuth

    }
  })
  .then(resul => resul.json())
  .then(done =>{
    console.log(done)
  })

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



let landing = `


<div class="mennu">
<img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="30%">
<h2>Admin DashBoard</h2>
<button onclick="loginBack()">Logout</button>
</div>

<div class="infos">
<div class="big-box">
    <h5 class="tabble">Total Revenue</h5>
 <div class="dashInfo">RWF 0</div>
</div>
<div class="big-box">
 <h5 class="tabble">Total Customers</h5>
<div class="dashInfo">${localStorage.userNum}</div>
</div>
<div class="big-box">
 <h5 class="tabble">New Customers</h5>
<div class="dashInfo">${localStorage.userNum}</div>
</div>
<div class="big-box">
<h5 class="tabble">Total Winners</h5>
<div class="dashInfo">${localStorage.winnNum}</div>
</div>
</div>


<div class="wid">

<h5 class="tabble"> Winners</h5>

<div class="table-responsive">
<table class="table  table-dark">
    <thead class="thead-red">
      <tr>
        <th scope="col">#</th>
        <th scope="col">name</th>
        <th scope="col">username</th>
        <th scope="col">age</th>
        <th scope="col">phone Number</th>
        <th scope="col">email</th>
        <th scope="col">Product</th>
        <th scope="col">Bid Time</th>
        
      </tr>
    </thead>
    <tbody id="winnerBody">
     
    </tbody>
  </table>
</div>


<div class="llil">

<div >
<button class="submit" onclick="winnPub()"> Publish Winner</button>
<button class="submit" onclick="created()"> Create An Auction</button>
<button class="submit" onclick="AdminEntry()"> Refresh Data</button>

</div>


<h5 class="tabble"> Upcoming Auctions</h5>
</div>

<div class="table-responsive">
<table class="table table-bordered table-striped">
    <thead class="thead-red">
      <tr>
        <th scope="col">#</th>
        <th scope="col">product</th>
        <th scope="col">interested</th>
        <th scope="col">launch time</th>
        <th scope="col">target</th>
        <th scope="col">Lasting date</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody id="upcomes">
    
      </tr>
    </tbody>
  </table>
</div>


<h5 class="tabble"> Current Auctions</h5>

<div class="table-responsive">
<table class="table table-bordered table-striped">
    <thead class="thead-red">
      <tr>
        <th scope="col">#</th>
        <th scope="col">product</th>
        <th scope="col">bids</th>
        <th scope="col">dead line</th>
        <th scope="col">revenue</th>
      </tr>
    </thead>
    <tbody id="currentBody">
   
    </tbody>
  </table>
</div>


<h4 class="ter">
Dowload Data
</h4>

<ul class="liist">
<li><a href="#" onclick="getAllUsers()">All Users Data</a></li>
<li><a href="#" onclick="getAllProz()">All product Data</a></li>
<li><a href="#" onclick="getAllBids()">All bids Data</a></li>

</ul>



`





let AdminEntry = () => {
  App.innerHTML = landing



  let WinnersInfo = () => {
    let address = 'api/v1/winners'
    
    fetch(url+address, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      cache: 'no-cache',
      // body: JSON.stringify(post),
      headers: {
          // 'Content-Type':'application/json',
          'Authorization': localStorage.tokenAuth
      }
    
    })

    .then( results => results.json())
    .then( res => {
      localStorage.setItem('winnNum', res.data.length)

      let allWinners = []
            res.data.forEach(responseData => {
              let winnerOne = `
              <tr>
                <th scope="row">${responseData.id}</th>
                <td>${responseData.firstname}</td>
                <td>${responseData.secondname}</td>
                <td>${responseData.age}</td>
                <td>${responseData.phone}</td>
                <td>${responseData.email}</td>
                <td>${responseData.product}</td>
                <td id=${responseData.id} >${winningDate(responseData.id,responseData.time)}</td>
  
              </tr>
  `
              allWinners.push(winnerOne)

            });

            allWinners.forEach( n => {
                  let winnerBody = document.querySelector('#winnerBody')
                  winnerBody.innerHTML += n 

            })
    })
  }


  WinnersInfo()

  let currentInfo = () => {
    let address = 'api/v1/active'

    App.innerHTML = ` <div class="midz">
  <div>
   <h1 id="action">Loading Action ... </h1>
   <div class="loader"></div>
  </div>
  </div>
  </div>  ` 
    fetch(url+address, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      cache: 'no-cache',
      // body: JSON.stringify(post),
      headers: {
          // 'Content-Type':'application/json',
          'Authorization': localStorage.tokenAuth
      }
    
    })

    .then( results => results.json())
    .then( res => {

      let currents = []
            res.data.forEach(responseData => {
                      let calcRevenue = 0    
              let currentOne = `
              <th scope="row">${responseData.id}</th>
              <td>${responseData.name}</td>
              <td>${responseData.bids}</td>
              <td id=${responseData.id}>${adminCount(responseData.id,responseData.ends, responseData.description)}</td>
              <td>${calcRevenue} Rwf</td>
              `
              currents.push(currentOne)

            });

            currents.forEach( n => {
                    let currentBody = document.querySelector('#currentBody')
                    currentBody.innerHTML += n 
                  
            })
    })
  }

  
  
  
  let upcomesInfo = () => {
    let address = 'api/v1/inactive'

    
    App.innerHTML = ` <div class="midz">
  <div>
   <h1 id="action">Loading Action ... </h1>
   <div class="loader"></div>
  </div>
  </div>
  </div>  ` 

    fetch(url+address, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin',
      cache: 'no-cache',
      // body: JSON.stringify(post),
      headers: {
          // 'Content-Type':'application/json',
          'Authorization': localStorage.tokenAuth
      }
    
    })

    .then( results => results.json())
    .then( res => {

      let upcomez = []
            res.data.forEach(responseData => {
                      let opcomesOne = `
                      <tr>
                      <th scope="row">${responseData.id}</th>
                      <td>${responseData.name}</td>
                      <td>${responseData.current}</td>
                      <td id=${responseData.id}>${displayCounter(responseData.id, responseData.starts, responseData.hour)}</td>
                      <td>${responseData.target}</td>
                      <td>${responseData.ends}</td>
                      <td><a href="#" onclick="deleteAuction(${responseData.id})">cancel Acution</a></td>
                      </tr>

                      `


              upcomez.push(opcomesOne)

            });

            upcomez.forEach( n => {
                    let upkomes = document.querySelector('#upcomes')
                    upkomes.innerHTML += n 
                  
            })
    })
  }
  currentInfo()

  upcomesInfo()
  App.innerHTML = landing
  prduiDz()
}




let deleteAuction = (id) => {
  let address = `api/v1/cancel/${id}`

  fetch(url+ address, {
      method: 'POST',
      credentials: 'same-origin',
      cache: 'no-cache',
      headers: {
        'Authorization': localStorage.tokenAuth,
          'Content-Type':'application/json',
      } 
  })
  .then(results => results.json())
  .then(done => {
    console.log(done)
    AdminEntry()

  })
}





let createProd = `
    
<div class="form">
<div class="hold">
    <div class="Close" onclick="AdminEntry()">+</div>
</div>
<div class="sign-in">
    <h1>Create Product </h1>
    <input type="text" required placeholder="Produc Name" class="inputsAdmin" id="produiName"> 
    
    <input type="number" required placeholder="Bid Target" class="inputsAdmin" id="bidTarget">
    <input type="number" required placeholder=" winners" class="inputsAdmin" id="winnTarget">

    <div class="mtn2">Launching Date </div>
    <input type="date" required  class="inputsAdmin " id="launch">
    <div class="mtn2 ">Ending Date </div>
    <input type="date" required  class="inputsAdmin rg " id="ends"> 

    <div class="mtn2">Starting Hour </div>
    <input type="time" required  class="inputsAdmin " id="hour">
    <div class="mtn2">Ending Hour </div>
    <input type="time" required  class="inputsAdmin " id="hour2">
    <input type="number" required placeholder="Price" class="inputsAdmin" id="pricing">
    <input type="text" required placeholder="Image Link" class="inputsAdmin" id="imageLink"> 
    <button class="submit" onclick="produi()">Submit</button>
</div>
`



let createWinner = `
 <div class="topper">
       
<div class="hold">
<div class="Close" onclick="AdminEntry()">+</div>
</div>
<div class="sign">
<h1>Publish A winner</h1>
<input type="text" required placeholder="Winner Name" class="inputsAdmin" id="winnerName"> 
    <input type="text" required placeholder="Won for" class="inputsAdmin" id="winFor"> 

<input type="text" required placeholder="winning time" class="inputsAdmin" id="winTime">
<input type="text"  placeholder="Picture link" class="inputsAdmin" id="profilePic">


    <button class="submit" onclick="createWin()"> Publish Winner</button>
</div>
</div>
 </div>

`

let winnPub = () => {
  App.innerHTML = createWinner

}

let createWin = () => {
    let address = 'api/v1/publish'
let winnerName = document.querySelector('#winnerName')
let winFor = document.querySelector('#winFor')
let winTime = document.querySelector('#winTime')
let profilePic = document.querySelector('#profilePic')

document.querySelector('.submit').innerHTML = `<i class="fa fa-spinner fa-spin"></i>`


let postWinner = {
  name: winnerName.value,
  product : winFor.value,
  bidTime : winTime.value,
  picture : profilePic.value

}


fetch( url+address, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin',
  cache: 'no-cache',
  body: JSON.stringify(postWinner),
  headers: {
      'Content-Type':'application/json',
      'Authorization': localStorage.tokenAuth
  }
})
.then(results => results.json())
.then(done => AdminEntry())

}
let admin = () => {
    App.innerHTML = landing

}

let created = () => {
    App.innerHTML = createProd


}

let produi = () => {

    let address = 'api/v1/product'
    
let produiName = document.querySelector('#produiName')
let bidTarget = document.querySelector('#bidTarget')
let winnTarget = document.querySelector('#winnTarget')
let launch = document.querySelector('#launch')
let ends = document.querySelector('#ends')
let hour = document.querySelector('#hour')
let hour2 = document.querySelector('#hour2')

let pricing = document.querySelector('#pricing')
let imageLink = document.querySelector('#imageLink')


console.log(hour.value)
let postProdui = {
  "name": produiName.value,
	"description": null,
	"starts": launch.value,
    "ends": ends.value,
    "status": false,
    "target": bidTarget.value,
    "hour": hour.value,
    "price": pricing.value,
    "winners": winnTarget.value,
    "picture": imageLink.value,
    "description": hour2.value
}

document.querySelector('.submit').innerHTML = `<i class="fa fa-spinner fa-spin"></i>`

fetch(url+address, {
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  credentials: 'same-origin',
  cache: 'no-cache',
  body: JSON.stringify(postProdui),
  headers: {
      'Content-Type':'application/json',
      'Authorization': localStorage.tokenAuth
  }

})

.then( results => results.json())
.then(done => {
  document.querySelector('.submit').innerHTML = `Done`

  AdminEntry()
})

}


let getAllUsers = () => {
  let address = 'api/v1/allusers'
  let before = App.innerHTML

  App.innerHTML = `<div class="midz">
  <div>
   
   <div class="loader"></div>
  </div>
  </div>
  </div>`


  fetch(url+address, {
          method: 'GET', 
          credentials: 'same-origin',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
              'Authorization': localStorage.tokenAuth
          }
  })
  .then(data => data.json())
  .then(results => {
    console.log(results.data)
    localStorage.setItem('userNum', results.data.length)

    alert(JSON.stringify(results.data))
    App.innerHTML = before
  })
}





let getAllProz = () => {
  let address = 'api/v1/product'
  let before = App.innerHTML

  App.innerHTML = `<div class="midz">
  <div>
   
   <div class="loader"></div>
  </div>
  </div>
  </div>`


  fetch(url+address, {
          method: 'GET', 
          credentials: 'same-origin',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
              'Authorization': localStorage.tokenAuth
          }
  })
  .then(data => data.json())
  .then(results => {
    alert(JSON.stringify(results.data))
    App.innerHTML = before

  })
}




let getAllBids = () => {
  let address = 'api/v1/allbids'
  let before = App.innerHTML

  App.innerHTML = `<div class="midz">
  <div>
   
   <div class="loader"></div>
  </div>
  </div>
  </div>`


  fetch(url+address, {
      
          method: 'GET', 
          credentials: 'same-origin',
          cache: 'no-cache',
          headers: {
              'Content-Type':'application/json',
              'Authorization': localStorage.tokenAuth
          }
  })
  .then(data => data.json())
  .then(results => {
    alert(JSON.stringify(results.data))
    App.innerHTML = before

  })
}




