import Image from "../Assets/Images/cropped-DSC_3837mod1.jpg";
import { Parallax } from 'react-parallax';
import { useState } from 'react';



const Home = () => {

    let windowWidth = window.innerWidth

    const [backgroundSize, setBackgroundSize] = useState(0)

    function getBackgroundSize(){
        let imageHeight = document.getElementById("home-background").clientHeight
        console.log(imageHeight);
    }

    getBackgroundSize()

    return (
        <div className="container">
            
            <Parallax
                id="home-background"
                className="home-background"
                bgImage={Image}
                bgImageAlt="Winsley Square image"
                width={windowWidth}
                renderLayer={percentage => (
                    <div className="background-overlay"
                        style={{                            
                            position: 'absolute',
                            background: `rgba(102, 102, 102, ${percentage * 1})`,                            
                            width: 2000,
                            height: 400,
                        }}
                    />
                )}
                >
                <h1>Home</h1>
            </Parallax>

        </div>
       
    );
}
 
export default Home;