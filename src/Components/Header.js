import React from 'react'
import Brand from './Brand'
import TopNav from './TopNav'
import HeaderStyles from '../Assets/css/HeaderStyles.module.css'

const Header = () => {
    return (
        <header className={HeaderStyles.appHeader}>
            <div className={HeaderStyles.header}>
                <div className={HeaderStyles.brand}>
                    <Brand />
                </div>
                <div className={HeaderStyles.topNav}>
                    <TopNav />
                </div>                                
            </div>
                       
      </header>
    );
}
 
export default Header;