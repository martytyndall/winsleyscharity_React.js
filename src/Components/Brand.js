import React from 'react'
import { Link } from "react-router-dom";

const Brand = () => {
    return (
        <div className="brand">
            <Link to="/">
                <h1 id="title">Winsley's Charity</h1>
            </Link>
            
            <h5>Providing Quality Almshouse Accommodation in Colchester</h5>
        </div>
        
    );
}
 
export default Brand;