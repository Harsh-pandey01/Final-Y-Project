import { createContext, useState , useContext, useEffect } from "react";

const HamburgurContext = createContext(null)

export const useHamburgur = () => useContext(HamburgurContext)

export const HamburgurContextProvider = ({children}) => {

    const [isHamburgur , setHamburgur] = useState(window?.innerWidth < 900 ? true : false)

    console.log(isHamburgur);

    useEffect(()=>{
        window.addEventListener('resize' ,(e)=>{
            if(e?.target?.innerWidth < 900) setHamburgur(true)
            else setHamburgur(false)
        })
    },[])

    return <HamburgurContext.Provider value={[isHamburgur , setHamburgur]} >
        {children}
    </HamburgurContext.Provider>
}
