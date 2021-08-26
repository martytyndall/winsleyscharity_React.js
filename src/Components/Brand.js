import React from 'react'
import { Link } from "react-router-dom";
import BrandStyles from "../Assets/css/BrandStyles.module.css"

const Brand = () => {
    return (
        <div className={BrandStyles.brand}>
            <Link to="/">
                <h1 className={BrandStyles.brandTitle}>Winsley's Charity</h1>
            </Link>
            
            <h5 className={BrandStyles.brandSubTitle}>Providing Quality Almshouse Accommodation in Colchester</h5>
        </div>
        
    );
}
 
export default Brand;