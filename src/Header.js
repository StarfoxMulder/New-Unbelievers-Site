import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { displayNum: 10 };
  }

  render() {

    return (
      <div className="Header">
      </div>
    )
  }
}

export default Header;


{/* <div class="container" id="superNav">
 <div class="col-sm-3 col-md-2" id="logoImg">
   <a href="/">
     <img src="./images/logo_transparent.png" />
   </a>
 </div>
 <div class="col-sm-7 col-sm-offset-2 col-md-8 col-md-offset-2" id="imgCarousel">
   <p>
     <a href="/">Continue to unlearn everything you know</a>
   </p>
   <!-- <img src="./images/bkgSuperImg.jfif" /> -->
 </div>
</div>

<nav class="navbar navbar-inverse bluegrey">
 <div class="container">
   <div class="navbar-header offsetHeader">
     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
       aria-expanded="false" aria-controls="navbar">
       <span class="sr-only">Toggle navigation</span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
       <span class="icon-bar"></span>
     </button>
     <a class="navbar-brand" id="UPTitle" href="#">The Unbelievers Podcast</a>
   </div>
   <div id="navbar" class="collapse navbar-collapse">
     <ul class="nav navbar-nav">
       <li id="polls">
         <a href="https://www.cafepress.com/unbelieverspodcast" target="_blank">Store</a>
       </li>
       <li id="soundboardLi">
         <a href="/soundboard">Soundboard</a>
       </li>
       <li id="sosLi">
         <a target="_blank" rel="noopener noreferrer" href="http://www.unbelievablepodcast.com/halloffame">S.o.s.
           hall of fame</a>
       </li>
       <li id="contactLi">
         <a href="/contact">Contact</a>
       </li>
       <li id="unlearnLi">
         <a target="_blank" rel="noopener noreferrer" href="http://unbelievable.wikia.com/wiki/Main_Page">learn to
           unlearn
         </a>
       </li>
     </ul>
   </div>
   <!--/.nav-collapse -->
 </div>
</nav> */}