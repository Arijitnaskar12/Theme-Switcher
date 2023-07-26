import { useState } from "react";
import ColorContext from "./ColorContext";

const defaultStyle={
    color:"black",
    backgroundColor:"white",
    border:"1px solid red",
};
const ColorProvider=(props)=>{
    let[style,setStyle]=useState(defaultStyle);
    return(
        <ColorContext.Provider value={
            {style,
            darkMode:()=>setStyle({...style,
            color:"white",
                        backgroundColor:"black",
                        border:"1px solid blue",
                        fontFamily:"sans-sarif",
                        padding:"10px"
                        }),
             blueMode:()=>setStyle({...style,           
                color:"white",
                backgroundColor:"lightblue",
                border:"1px solid black"
            }),
            whiteMode:()=>setStyle(defaultStyle)
            }}>
            {props.children}
        </ColorContext.Provider>
    )
}
export default ColorProvider;