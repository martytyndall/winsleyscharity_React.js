import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useLayoutEffect } from 'react';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [mobileNavVisibility, setMobileNavVisibility] = useState("show")
  const [desktopNavVisibility, setDesktopNavVisibility] = useState("hidden")

  function useWindowSize() {
    const [size, setSize] = useState(0);
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
      if(width > 768){
        setMobileNavVisibility("hidden")
        setDesktopNavVisibility("show")
      } else {
        setMobileNavVisibility("show")
        setDesktopNavVisibility("hidden")

      }
    })    
  }

  ShowWindowDimensions()
  

  return (
    <div>
      <div className={mobileNavVisibility} id="mobile-nav">
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
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Latest News</MenuItem>
          <MenuItem onClick={handleClose}>Staff</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </div>
      

      <div className={desktopNavVisibility} id="desktop-nav">
        <Button
          id="link-button"
          variant="contained" 
          color="primary" 
          href="/"
        >
        Home
        </Button>
        <Button
          id="link-button"
          variant="contained" 
          color="primary" 
          href="/latest"
        >
        Latest
        </Button>
        <Button
          id="link-button"
          variant="contained" 
          color="primary" 
          href="/staff"
        >
        staff
        </Button>
        <Button
          id="link-button"
          variant="contained" 
          color="primary" 
          href="/contact"
        >
        Contact
        </Button>
      </div>

    </div>
    
    
  );
}

