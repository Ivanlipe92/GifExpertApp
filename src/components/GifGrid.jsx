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
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias similique veniam quis itaque ducimus dicta obcaecati asperiores. Ea eligendi blanditiis ex qui beatae quam deserunt, voluptate inventore error fugit maiores.</h2>
        </>
    )
}

