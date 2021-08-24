import React from 'react'
import { Parallax } from 'react-parallax';
import { useState, useLayoutEffect } from 'react';


const ParallaxComponent = (props) => {

    let windowWidth = window.innerWidth
    

    const [parallaxHeight, setParallaxHeight] = useState(windowWidth / 3.66)

    // setParallaxHeight(document.getElementById("home-background").offsetHeight)



     // dynamically gets the current window size and updates the size variable
    // in the useState function
    function useWindowSize() {

        // useState to set the current size of the window
        const [size, setSize] = useState(0);

        // useLayoutEffect to synchronously update the size variable
        useLayoutEffect(() => {


        function updateSize() {
            setSize(document.querySelector(".home-bg img").offsetHeight);            
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);

        }, []);

        return size;
    }


    function ShowWindowDimensions() {
        const height = useWindowSize();
        useLayoutEffect(() => {
          setParallaxHeight(height)
        })    
      }

    ShowWindowDimensions()



    console.log(parallaxHeight);
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