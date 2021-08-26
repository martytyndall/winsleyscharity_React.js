import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useLayoutEffect, } from 'react';
import { Link } from 'react-router-dom';
import TopNavStyles from '../Assets/css/TopNav.module.css'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const display = TopNavStyles.display
  const hidden = TopNavStyles.hidden



  // useState functions to show/hide the mobile and desktop nav menus
  const [mobileNavVisibility, setMobileNavVisibility] = useState(display)
  const [desktopNavVisibility, setDesktopNavVisibility] = useState(hidden)

  // dynamically gets the current window size and updates the size variable
  // in the useState function
  function useWindowSize() {

    // useState to set the current size of the window
    const [size, setSize] = useState(0);

    // useLayoutEffect to synchronously update the size variable
    useLayoutEffect(() => {


      function updateSize() {
        setSize(window.innerWidth);
        
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);

    }, []);

    return size;
  }

  function ShowWindowDimensions() {
    const width = useWindowSize();
    useLayoutEffect(() => {
      if(width > 992){
        setMobileNavVisibility(hidden)
        setDesktopNavVisibility(display)
      } else {
        setMobileNavVisibility(display)
        setDesktopNavVisibility(hidden)

      }
    })    
  }

  ShowWindowDimensions()
  

  return (
    <div>
      <div className={mobileNavVisibility} id={TopNavStyles.mobileNav}>
        <Button className="nav-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem className={TopNavStyles.linkButtonResponsive} onClick={handleClose}><Link to='/'>Home</Link></MenuItem>
          <MenuItem className={TopNavStyles.linkButtonResponsive} onClick={handleClose}><Link to='/latest'>Latest News</Link></MenuItem>
          <MenuItem className={TopNavStyles.linkButtonResponsive} onClick={handleClose}><Link to='/staff'>Staff</Link></MenuItem>
          <MenuItem className={TopNavStyles.linkButtonResponsive} onClick={handleClose}><Link to='/history'>History</Link></MenuItem>
          <MenuItem className={TopNavStyles.linkButtonResponsive} onClick={handleClose}><Link to='/contact'>Contact</Link></MenuItem>
        </Menu>
      </div>
      

      <div className={desktopNavVisibility} id={TopNavStyles.deskTopNav}>

        <Button
          className={TopNavStyles.linkButton}
          variant="contained" 
          color="primary" 
        >
          <Link to="/">Home</Link>
        </Button>

        <Button
          className={TopNavStyles.linkButton}
          variant="contained" 
          color="primary" 
        >
          <Link to="/latest">Latest</Link>
        </Button>

        <Button
          className={TopNavStyles.linkButton}
          variant="contained" 
          color="primary" 
        >
          <Link to="/staff">Staff</Link>
        </Button>

        <Button
          className={TopNavStyles.linkButton}
          variant="contained" 
          color="primary" 
        >
          <Link to="/history">History</Link>
        </Button>

        <Button
          className={TopNavStyles.linkButton}
          variant="contained" 
          color="primary" 
        >
          <Link to="/contact">Contact</Link>
        </Button>
      </div>

    </div>
    
    
  );
}

