import React from 'react'
import Image1 from "../Assets/Images/cropped-DSC_3837mod1.jpg";
import Image2 from "../Assets/Images/Winsleys.jpg";
import GalleryComponent from '../Components/GalleryComponent';
import Parallax from "../Components/ParallaxComponent";
import Styles from "../Assets/css/HomeStyles.module.css"


const Home = () => {
    return (
        <div className={Styles.homeContainer}>
            <Parallax image={Image1}/>
            

            <h1 className="pageTitle">Home</h1>

            <div className={Styles.containerTop}>                
                <div className={Styles.about} id="homeContent">
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

                <div className={Styles.thumbnail} id="homeThumbnail">
                    <img src={Image2} alt="" />
                </div>
                
            </div>

            <br />

            <div className={Styles.containerBottom}>                
                <div className={Styles.gallery}>
                    <GalleryComponent />
                </div>
                <div className={Styles.accommodation}>
                    <h3>Accommodation</h3>
                    <p>Our properties are of varying ages and the Trustees aim to continue to maintain these to a high standard making improvements to modernise where practical and affordable.

There is a mix of accommodation, including one and two bedroom houses, bungalows and flats. Residents use their own furniture to equip their property to their own taste.

Residents pay no rent but are required to make a fixed monthly contribution to maintenance and heating costs (WMC). This is set by the Trustees and is subject to an annual review each November.

All homes have emergency alarms with pull cords monitored by the General Manager, Maintenance Supervisor and Helpline.Winsley Square

The site provides beautiful outdoor lawns which has benches and a picnic area so that residents can enjoy the pleasant weather outdoors. There is also very limited parking available.</p>
                </div>
            </div>


            



            
        </div>
        
        
       
    );
}
 
export default Home;