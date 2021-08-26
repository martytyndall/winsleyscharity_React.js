import React from 'react'
import { Parallax } from 'react-parallax';


const ParallaxComponent = (props) => {

    let windowWidth = window.innerWidth
    

    



    return (
        <Parallax    
            style={{
                height: windowWidth / 4
            }}
            strength={200}
            id="home-bg"
            className="home-bg"
            bgImage={props.image}
            bgImageStyle={{
                height: 'auto',       
                width: '100%'
            }}               
            >               
        </Parallax>
    );
}
 
export default ParallaxComponent;