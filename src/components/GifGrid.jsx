import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs"




export const GifGrid = ({category}) => {
//peticion HTTP


    useEffect( ()=>{
        getGifs(category);
    },[]);
    

    

    return (
        <>
            <h3>{category}</h3>
            
        </>
    )
}

