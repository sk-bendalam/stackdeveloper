import React from 'react'
import Main from '../main/Main';
import './Navbar.css';
import Diamond from '../../../images/Business-Meeting.jpg';
function Navbar() {
    return (
      
      <div className=" height">
      <div className="mx-auto bg-color height1 border1 width1">
      <nav class="navbar navbar-expand-lg navbar-dark bg-transperant py-4 px-5  ">
      <a class="navbar-brand mx-5" href="#">STACK DEVELOPER</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse mx-auto" id="navbarText">
        <ul class="navbar-nav navbar-brand menum menuw align-items-center justify-content-around">
          <li class="nav-item  ">
            <a class="nav-link text-white" href="#">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Services</a>
          </li>
          <li class="nav-item">
          <a class="nav-link text-white" href="#">Contact</a>
        </li>
        </ul>
        <span className="d-flex align-items-center justify-content-around bg-white height2 width2 px-4 mx-4">
    <i className="material-icons my-3 h-icon">phone_enabled</i>
      <p className="mx-3 display">Have any Questions?<br/><strong >+91-888-888-0091</strong></p>
      <button className="button bg-primary" type="submit">Get a quote</button>
    </span>
      
      </div>
    </nav>
    <div className="image-container">
    <img className="image" src={Diamond} alt="Logo"/>
    <div class="text">
    <pre className="text-white">           BEST IT SOLUTION PROVIDER</pre>
    <div class="d">IT Solutions<br/>
    For Business.</div>
    <div className="d-flex mx-3 my-3">
    <button className="button bg-primary d-flex align-items-center justify-content-around px-4 py-3 mx-5 my-5 " type="submit">Get in Touch<span class="material-icons mx-2 py-1 px-2">
    arrow_forward
    </span></button>
    <button className="button bg-transparent border d-flex align-items-center justify-content-around px-4 py-2 mx-5 my-5 " type="submit">About Us<span class="material-icons mx-2 py-1 px-2">
    arrow_forward
    </span></button></div>
    </div>
    </div>
    </div>
      <div className="bg-white mx-auto bg-color height1 width1"></div></div>
    )
}

export default Navbar
