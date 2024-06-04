import { useEffect, useRef } from "react";

export function useOutsideClick(handler, ListenCapturing = true){
    const ref=useRef();

    useEffect(function(){
      function handleClick(e){
        if(ref.current && !ref.current.contains(e.target)){ console.log('clicked outside');handler();}
      }
      document.addEventListener('click', handleClick,ListenCapturing);
      return () => document.removeEventListener('click', handleClick,ListenCapturing)
    },[handler,ListenCapturing]);
    return ref; 
}