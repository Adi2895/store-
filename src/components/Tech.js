import React from 'react'
import "../App.css"
import I from "./static/ist.jpeg"
import II from "./static/2nd.jpeg"
import III from "./static/3rd.jpeg"
import IV from "./static/4th.jpeg"
import V from "./static/5th.jpeg"
import VI from "./static/6th.jpeg"
export default function Tech(props) {
    

    return (
        <>

        
        <div ref ={props.tech} className='container' style={{backgroundColor:""}}>
            <h1 className="" style={{ fontSize: "3rem", fontFamily:"Alkatra", color:"black" }}>Our Products</h1>
            <p className='container' style={{ fontSize: "1.4rem", textAlign:"left", marginBottom:"40px" }}>
            
            
             
             <br/>
             <div className='container row d-flex'>
            
            <div className='container container-for-frontendimg col-md-4 col-lg-4 col-sm-12 grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2" srcSet={I}  alt=""/>
             </div>

             <div className='container container-for-frontendimg col-md-4 col-lg-4 col-sm-12 grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2"  srcSet={II}  alt=""/>
             </div>

             <div className='container container-for-frontendimg col-md-4 col-lg-4 col-sm-12 grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2"  srcSet={III}  alt=""/>
             </div>

               </div>
             <br/>


             <div className='container row d-flex'>
            
            <div className='container container-for-frontendimg col-md-4 col-lg-4  grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2"  srcSet={IV}alt=""/>
             </div>

             <div className='container container-for-frontendimg col-md-4 col-lg-4  grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2"  srcSet={V}  alt=""/>
             </div>

             <div className='container container-for-frontendimg col-md-4 col-lg-4  grow mb-2'>
             <img height="290px" width="280px" className="frontend-img mb-2"  srcSet={VI} alt=""/>
             </div>

               </div>
             
          
            </p>
        </div>


          
            <hr style={{ border: "dotted 6px rgb(253, 230, 230)", width:"10%", borderTop:"none", margin:"150px auto", }}/>
            
        </>
    )
}
