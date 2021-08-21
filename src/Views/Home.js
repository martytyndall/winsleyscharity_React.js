import Image from "../Assets/Images/cropped-DSC_3837mod1.jpg";
import { Parallax, Background } from 'react-parallax';
import { useState, useLayoutEffect, componentDidMount } from 'react';




const Home = () => {



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
        <div className="container home-container">
            <Parallax
                id="home-bg"
                className="home-bg"
                bgImage={Image}
                bgImageStyle={{         
                    height: 'auto',       
                    width: '100%'
                }}
                renderLayer={percentage => (
                    <div
                        className='bg-overlay'
                        style={{
                            position: 'absolute',
                            background: `rgba(140, 138, 134, ${percentage * 0.75})`,
                            // left: '50%',
                            // top: '50%',
                            width: '100%',
                            height: '100%',
                            // height: parallaxHeight,
                        }}
                    />
                )}
                >
                <div style={{
                    height: parallaxHeight - 126,
                    }}
                />
                <h1 className="home-title">Home</h1>
            </Parallax>
        </div>
       
    );
}
 
export default Home;