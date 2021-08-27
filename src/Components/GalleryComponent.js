import React from 'react';
import image1 from "../Assets/Images/IMG_2981-2.jpg"
import image2 from "../Assets/Images/IMG_2980.jpg"
import image3 from "../Assets/Images/IMG_6830-e1548674905164.jpg"
import image4 from "../Assets/Images/S7A9956.jpg"
import image5 from "../Assets/Images/WinsleySq.jpg"
import GalleryStyles from "../Assets/css/GalleryStyles.module.css"
import useWindowSize from './functions/UseWindowSize';
import { useState, useLayoutEffect } from 'react';



const GalleryComponent = () => {

    // useState functions to show/hide the mobile and desktop nav menus
    const [topRowWidth, setTopRowWidth] = useState(200)
    const [topRowHeight, setTopRowHeight] = useState(200)
    const [bottomRowWidth, setBottomRowWidth] = useState(132)
    const [bottomRowHeight, setBottomRowHeight] = useState(132)

    function ShowWindowDimensions() {
        const width = useWindowSize();
        useLayoutEffect(() => {
            console.log(width);

            if(width <= 768){
                setTopRowWidth(100)
                setTopRowHeight(100)
                setBottomRowWidth(65)
                setBottomRowHeight(65)
            } else if(width <= 992){
                setTopRowWidth(150)
                setTopRowHeight(150)
                setBottomRowWidth(99)
                setBottomRowHeight(99)
            } else if(width <= 1224){
                setTopRowWidth(200)
                setTopRowHeight(200)
                setBottomRowWidth(132)
                setBottomRowHeight(132)
            } else if(width <= 1824){
                setTopRowWidth(250)
                setTopRowHeight(250)
                setBottomRowWidth(165)
                setBottomRowHeight(165)
            } else {
                setTopRowWidth(100)
                setTopRowHeight(100)
                setBottomRowWidth(65)
                setBottomRowHeight(65)

            }
        })  
    }

    ShowWindowDimensions()


    return (
        <div className={GalleryStyles.galleryContainer}>
            <div className={GalleryStyles.galleryContainerTop}>
                <div className={GalleryStyles.galleryItemsTop} id="gallery-item1">
                    <img
                        width = {topRowWidth}
                        height={topRowHeight}
                        src={image1} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsTop} id="gallery-item2">
                    <img
                        width={topRowWidth}
                        height={topRowHeight}
                        src={image2} alt="" />
                </div>
                
                
            </div>

            <div className={GalleryStyles.galleryContainerBottom}>

                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item3">
                    <img
                        width={bottomRowWidth}
                        height={bottomRowHeight}
                        src={image3} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item4">
                    <img
                        width={bottomRowWidth}
                        height={bottomRowHeight}
                        src={image4} alt="" />
                </div>
                <div className={GalleryStyles.galleryItemsBottom} id="gallery-item5">
                    <img
                        width={bottomRowWidth}
                        height={bottomRowHeight}
                        src={image5} alt="" />
                </div>

            </div>
        </div>

    );
}
 
export default GalleryComponent;
