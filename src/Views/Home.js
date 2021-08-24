import React from 'react'
import Image1 from "../Assets/Images/cropped-DSC_3837mod1.jpg";
import Image2 from "../Assets/Images/Winsleys.jpg";
// import { Parallax } from 'react-parallax';
// import { useState, useLayoutEffect } from 'react';
import Parallax from "../Components/ParallaxComponent";




const Home = () => {
    return (
        <div className="container home-container">
            <Parallax image={Image1}/>
            {/* <Parallax    
                style={{
                    height: windowWidth / 4
                }}
                strength={200}
                id="home-bg"
                className="home-bg"
                bgImage={Image1}
                bgImageStyle={{
                    height: 'auto',       
                    width: '100%'
                }}               
                >               
            </Parallax> */}

            <h1 className="page-title">Home</h1>

            <div className="container home-content-container">
                <div className="home-thumbnail">
                    <img src={Image2} alt="" />
                </div>
                <div className="home-content">
                    <h3>About Us</h3>
                    <p>
                        The Almshouse Charity of Arthur Winsley and others is a registered Charity and a member of the Almshouse Association and of the Housing Ombudsman Scheme.
                        <br /><br />
                        The Charity is administered by seven Trustees, and managed on a day-to-day basis by the Clerk to the Trustees, who is also the General Manager. They are assisted by the Maintenance Assistant who also acts as the first point of contact for residents.
                        <br /><br />
                        Originally, there were just twelve Almshouses, for ‘Twelve Ancient Men, that have lived well, and fallen into decay’. Wives were originally evicted on the death of their husband. Needless to say, this is not the case today!
                        <br /><br />
                        Over the years, the Almshouses have been added to as a result of a number of bequests and endowments. Although there were once 88, there are now 80 as a result of improvements, resulting in the merging of some properties in order to offer a better standard of accommodation.
                    </p>                
                </div>
                
            </div>
            <br />
            
        </div>
        
        
       
    );
}
 
export default Home;