import { response } from "express"

let adminPage = document.querySelector('.body')
let landing = `


<div class="mennu">
<img src="./assets/WhatsApp Image 2020-03-24 at 19.55.29 (1).jpeg" alt="" width="30%">
<h2>Admin DashBoard</h2>
<button>Logout</button>
</div>

<div class="infos">
<div class="big-box">
    <h5 class="tabble">Total Revenue</h5>
 <div class="dashInfo">RWF 231000</div>
</div>
<div class="big-box">
 <h5 class="tabble">Total Customers</h5>
<div class="dashInfo">231000</div>
</div>
<div class="big-box">
 <h5 class="tabble">New Customers</h5>
<div class="dashInfo">231000</div>
</div>
<div class="big-box">
<h5 class="tabble">Total Winners</h5>
<div class="dashInfo">20</div>
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
        <th scope="col">Win date</th>
        
      </tr>
    </thead>
    <tbody id="winnerBody">
      <tr>
        <th scope="row">1</th>
        <td>smith</td>
        <td>smansnds</td>
        <td>34</td>
        <td>02393409234</td>
        <td>email@email.com</td>
        <td>email@email.com</td>
        <td>email@email.com</td>
        <td>12:31:12</td>

      </tr>
      <tr>
        <th scope="row">1</th>
        <td>smith</td>
        <td>smansnds</td>
        <td>34</td>
        <td>02393409234</td>
        <td>email@email.com</td>
        <td>email@email.com</td>
        <td>email@email.com</td>
        <td>12:31:12</td>

      </tr>
      <tr>
        <th scope="row">1</th>
        <td>smith</td>
        <td>smansnds</td>
        <td>34</td>
        <td>02393409234</td>
        <td>email@email.com</td>
        <td>12:31:12</td>

      </tr>
    </tbody>
  </table>
</div>


<div class="llil">

<div >
<button class="submit" onclick="createWin()"> Publish Winner</button>
<button class="submit" onclick="produi()"> Create An Auction</button>

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
        <th scope="col">launch date</th>
        <th scope="col">Action</th>
        
      </tr>
    </thead>
    <tbody id="upcomes">
      <tr>
        <th scope="row">1</th>
        <td>Iphone 30 max</td>
        <td>231</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>
        <td><a href="">cancel Acution</a></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Iphone 30 max</td>
        <td>123</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>
        <td><a href="">cancel Acution</a></td>

      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Iphone 30 max</td>
        <td>123</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>
        <td><a href="">cancel Acution</a></td>

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
        <th scope="col"> date</th>
        
      </tr>
    </thead>
    <tbody id="currentBody">
      <tr>
        <th scope="row">1</th>
        <td>Iphone 30 max</td>
        <td>231</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>

      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Iphone 30 max</td>
        <td>123</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>

      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Iphone 30 max</td>
        <td>123</td>
        <td>12:31:12</td>
        <td>321</td>
        <td>12:31:12</td>

      </tr>
    </tbody>
  </table>
</div>


<h4 class="ter">
Dowload Data
</h4>

<ul class="liist">
<li><a href="">All Users Data</a></li>
<li><a href="">All product Data</a></li>
<li><a href="">All bids Data</a></li>
<li><input type="number" placeholder="Id " class="soso"> <a href="">One Auction Data </a></li>

</ul>



`

let opcomesOne = `
<tr>
<th scope="row">${responseData.id}</th>
<td>${responseData.name}</td>
<td>${responseData.current}</td>
<td>${responseData.starts}</td>
<td>${responseData.target}</td>
<td>${responseData.ends}</td>
<td><a href="">cancel Acution</a></td>
</tr>

`

let currentOne = `
<th scope="row">${responseData.id}</th>
<td>${responseData.name}</td>
<td>${responseData.id}</td>
<td>${responseData.ends}</td>
<td>${calcRevenue}</td>
<td>${calcRevenue.starts}</td>
`

let winnerOne = `
<tr>
  <th scope="row">${responseData.id}</th>
  <td>${responseData.firstname}</td>
  <td>${responseData.secondname}</td>
  <td>${responseData.age}</td>
  <td>${responseData.phone}</td>
  <td>${responseData.email}</td>
  <td>${responseData.product}</td>
  <td>${responseData.bidtime}</td>
  <td>${responseData.date}</td>

</tr>
`
let upcomes = document.querySelector('#upcomes')
let currentBody = document.querySelector('#currentBody')
let winnerBody = document.querySelector('#winnerBody')


let createProd = `
    
<div class="form">
<div class="hold">
    <div class="Close" onclick="admin()">+</div>
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
    <input type="number" required placeholder="Price" class="inputsAdmin" id="pricing">
    <input type="text" required placeholder="Image Link" class="inputsAdmin" id="imageLink"> 
    <button class="submit" onclick="inputsAdminToproducts()">Submit</button>
</div>
`


adminPage.innerHTML = landing

let createWinner = `
 <div class="topper">
       
<div class="hold">
<div class="Close" onclick="admin()">+</div>
</div>
<div class="sign">
<h1>Publish A winner</h1>
<input type="text" required placeholder="Winner Name" class="inputsAdmin" id="winnerName"> 
    <input type="text" required placeholder="Won for" class="inputsAdmin" id="winFor"> 

<input type="text" required placeholder="winning time" class="inputsAdmin" id="winTime">
<input type="text"  placeholder="Picture link" class="inputsAdmin" id="profilePic">


    <button class="submit" onclick="created()"> Publish Winner</button>
</div>
</div>
 </div>

`

let createWin = () => {
    adminPage.innerHTML = createWinner
    
let winnerName = document.querySelector('#winnerName')
let winFor = document.querySelector('#winFor')
let winTime = document.querySelector('#winTime')
let profilePic = document.querySelector('#profilePic')

let postWinner = {
  name: winnerName,
  product : winFor,
  bidTime : winTime,
  picture : profilePic

}

}
let admin = () => {
    adminPage.innerHTML = landing

}

let created = () => {
    adminPage.innerHTML = landing

}

let produi = () => {
    adminPage.innerHTML = createProd
    
let produiName = document.querySelector('#produiName')
let bidTarget = document.querySelector('#bidTarget')
let winnTarget = document.querySelector('#winnTarget')
let launch = document.querySelector('#launch')
let ends = document.querySelector('#ends')
let hour = document.querySelector('#hour')
let pricing = document.querySelector('#pricing')
let imageLink = document.querySelector('#imageLink')

let postProdui = {
  "name": produiName,
	"description": null,
	"starts": launch,
    "ends": ends,
    "status": false,
    "target": bidTarget,
    "hour": hour,
    "price": pricing,
    "winners": winnTarget,
    "picture": imageLink
}

}

