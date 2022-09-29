import { useEffect, useState } from "react";

function Preloader() {

        const [loader, setLoader] = useState('on');
        const body = document.querySelector("body");
        
        useEffect(() =>{
          setTimeout(() =>{
            setLoader('false');
            body.classList.remove("hidden");
          },500);
          
        },[]);
    
        return loader;
    
}

export default Preloader;