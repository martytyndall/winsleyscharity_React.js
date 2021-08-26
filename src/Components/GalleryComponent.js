import React from 'react';
import image1 from "../Assets/Images/IMG_2981-2.jpg"
import image2 from "../Assets/Images/IMG_2980.jpg"
import image3 from "../Assets/Images/IMG_6830-e1548674905164.jpg"
import image4 from "../Assets/Images/S7A9956.jpg"
import image5 from "../Assets/Images/WinsleySq.jpg"
import GalleryStyles from "../Assets/css/GalleryStyles.module.css"



const GalleryComponent = () => {
    return (
        <div className={GalleryStyles.galleryContainer}>
            <div className={GalleryStyles.galleryContainerTop}>
                <div className={GalleryStyles.galleryItemsTop} id="gallery-item1">
                    <img src={image1} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsTop} id="gallery-item2">
                    <img src={image2} alt="" />
                </div>
                
                
            </div>

            <div className={GalleryStyles.galleryContainerBottom}>

                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item3">
                    <img src={image3} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item4">
                    <img src={image4} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item5">
                    <img src={image5} alt="" />
                </div>

            </div>
        </div>

    );
}
 
export default GalleryComponent;
