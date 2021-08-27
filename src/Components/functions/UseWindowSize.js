import { useState, useLayoutEffect, } from 'react';



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

 
export default useWindowSize;