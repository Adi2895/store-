import React, { useState, useEffect } from "react";
import image from "./static/front_back.jpg"
export default function Home() {
  const [displayText, setDisplayText] = useState("");

  const Typewriter = () => {
    var speed = 50;
    var text = "Fuull stack Web Developer";

    useEffect(() => {
      let i = 0;
      const typingTimeout = setTimeout(() => {
        const typingInterval = setInterval(() => {
          if (i < text.length) {
            setDisplayText((prevText) => prevText + text.charAt(i));
            i++;
          } else {
            clearInterval(typingInterval);
          }
        }, speed);
      }, 1000); // Delay the typing effect by 1 second (adjust as needed)

      return () => {
        clearTimeout(typingTimeout);
      };
    }, []);
  };

  Typewriter();

  const boxCellStyle = {
    backgroundImage: `url("")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <section id="home" >
        <div style={{backgroundColor:"rgb(229, 218, 218)", }} className="container">
          <div class="box-cell"  >
            <div class="row">
              <div class="col-lg-4 ">
                <div class="content">
                  <div class="shape animated slideInLeft"></div>
                  <h1 style={{color:"black"}}data-animation="animated slideInDown">
                    Anil <strong>Grocery Store</strong>
                    <br />
                   
                  </h1>
                  <div class="slider-button">
                    <a
                      data-animation="animated slideInUp"
                      class="btn btn-theme effect btn-md"
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="content">
                  <img src={image} width="1000px" height="500px" alt="image_of_shop"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
