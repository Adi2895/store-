import React from 'react'
import logo from "./static/Anil_photo for visa.jpeg"
export default function Intro() {
  return (
    <>
      
      <p className='container content-justify' style={{fontSize:"1.4rem", textAlign:"left" }}>
        <h3 className='mb-3' style={{color:"#fba2a2"}}> Let me introduce myself:</h3>
        <div className="row justify-content-center text-align-center image-container">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <img className='myImage' src={logo} alt="myImage"/>
            </div>
          <div  className="col-lg-9 col-md-8 col-sm-12 description">
            <p style={{color:"black"}}>Welcome to Manoj Grocery Store, where a decade of commitment meets quality and convenience. For over 10 years, we've proudly served our community as the go-to grocery store. Our journey has been shaped by our dedication to providing you with the finest products, friendly service, and a commitment to the well-being of our neighborhood. Join us in celebrating more than a decade of being your trusted grocery destination."
          </p></div>
        </div>
        </p>
      <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
            
    </>
  )
}
