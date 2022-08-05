 import React from 'react'
 import "./Banner.css";
 import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
 
 
 function Banner() {
   return (
    <>
     <div className='banner'>
       <div className='banner_info'>
         <h4>
           Enjoy your Vacation with VanPersie Hotels
         </h4>
         <br></br>
         <h1>
           Let us plan you a pefect <span style={{ color: 'white ', fontWeight: 'bold' }}>
             {/* Style will be inherited from the parent element */}
             <Typewriter

               loop
               cursor
               cursorStyle='_.'
               typeSpeed={60}
               deleteSpeed={50}
               delaySpeed={1000}
               words={[' Holidays', 'Weekends!']}

             />
           </span>
         </h1>
         <br>
         </br>
         <button> Explore Now</button>

       </div>
      </div>
      <div className='booking_div'>
        <div className='booking'>
          <div>
            <div className='banner_main_div'>
                <div className='booking_header'>
                  <h4>Arrival Date</h4>

                </div>

            </div>

          </div>


        </div>


       </div>

      </>
     
   )
 }
 
 export default Banner