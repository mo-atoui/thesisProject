"use client"


import React, { useState } from "react";
import "./styles/home.css"
import axios from "axios";
import Image from 'next/image';


export default function home (){
    return (
            <body>

     <div className="header">

<nav>
<Image className="logo" src="/img/logo.png" width={140} height={40} alt="dtg" />
<ul className="nav-links">
    <li><a href="#">popular Places</a></li>
    <li><a href="#">Travel outside</a></li>
    <li><a href="#">Online packages</a></li>
</ul>
<a href="#" className="register-btn"> Register Now</a>

</nav>
<div className="container">
<h1>Find Your Next Stay</h1>
<div className="search-bar">
    <div id="for">
        <div className="location-input">
            <label >Location</label>
            <input type="text" placeholder="Where are you going?" />
        </div>
        <div>
            <label >Check in</label>
            <input type="text" placeholder="Add date" />
        </div>
        <div>
            <label >Check out</label>
            <input type="text" placeholder="Add date" />
        </div>
        <div>
            <label >Guest</label>
            <input type="text" placeholder=" Add Guest" />
        </div>
        <button> <Image  src="/img/search.png" width={20} height={20} alt="dtg" style={{marginTop:5 , marginLeft:7}} /></button>
    </div>
</div>
</div>
  </div>
  <div className="container">
<h2 className="sub-title">Exclusives</h2>
<div className="exclusives">
    <div>
    <Image  src="/img/image-1.png" width={220} height={120} style={{borderRadius:10}} alt="dtg"  />
    <span>
        <h3>London</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-2.png" width={220} height={120} style={{borderRadius:10}} alt="dtg"  />
    <span>
        <h3>Switzerland</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-3.png" width={220} height={120} style={{borderRadius:10}} alt="dtg"  />
    <span>
        <h3>Australia</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-4.png" width={220} height={120} style={{borderRadius:10}} alt="dtg"  />
    <span>
        <h3>France</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-5.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>Amesterdam</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-6.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>Netherlands</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-7.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>New York</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-8.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>Chicago</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-9.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>San Francisco</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    <div>
    <Image  src="/img/image-10.png" width={220} height={120}style={{borderRadius:10}}  alt="dtg"  />
    <span>
        <h3>shanghai</h3>
        <p>starts @ $250</p>
    </span>
    </div>
    
</div>

<h2 className="sub-title">Trending Places</h2>
<div className="tranding">

    <div>
    <Image  src="/img/dubai.png" width={230} height={280}style={{borderRadius:10}}  alt="dtg"  />
    <h3>Dubai</h3>
    </div>
    <div>
    <Image  src="/img/new-york.png" width={230} height={280}style={{borderRadius:10}}  alt="dtg"  />
    <h3>New York</h3>
    </div>
    <div>
    <Image  src="/img/paris.png" width={230} height={280}style={{borderRadius:10}}  alt="dtg"  />
    <h3>Paris</h3>
    </div>
    <div>
    <Image  src="/img/new-delhi.png" width={230} height={280}style={{borderRadius:10}}  alt="dtg"  />
    <h3>New Delhi</h3>
    </div>
    <div>
    <Image  src="/img/new-delhi.png" width={230} height={280}style={{borderRadius:10}}  alt="dtg"  />
    <h3>New Delhi</h3>
    </div>
    
</div>

<div className="cta">
    <h3> Sharing <br /> is Earning Now</h3>
    <p>Great opportunity to make money by <br /> sharing your extra space.</p>
    <a href="" className="cta-btn">know More</a>
</div>

<h2 className="sub-title">Travellers Stories</h2>

<div className="stories">
    <div>
    <Image  src="/img/story-1.png" width={350} height={400}style={{borderRadius:10}}  alt="dtg"  />
    <p>Popular European countries with  a budget of just $10,000</p>
    </div>
    <div>
    <Image  src="/img/story-2.png" width={350} height={400}style={{borderRadius:10}}  alt="dtg"  />
    <p>Popular European countries with  a budget of just $10,000</p>
    </div>
    <div>
    <Image  src="/img/story-3.png" width={350} height={400}style={{borderRadius:10}}  alt="dtg"  />
    <p>Popular European countries with  a budget of just $10,000</p>
    </div>
    
</div>

<a href="#" className="start-btn"> Start making money</a>
 
 <div className="about-msg">
    <h2>About my website</h2>
    <p>
    we believe that travel is more than just visiting new places—it's 
    about creating unforgettable memories,
     experiencing diverse cultures,
     and discovering the beauty of our world. 
     Whether you're seeking a serene beach escape,
      an adventurous mountain trek,
     or an immersive cultural journey, we're here to help you plan the perfect trip.
    </p>
 </div>
  </div>






            </body>
      );
    
    
}