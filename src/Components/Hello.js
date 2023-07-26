import React, { useContext } from 'react';
import ColorContext from '../Context/ColorContext';
function Hello() {
    let{style,darkMode,blueMode,whiteMode}=useContext(ColorContext);
    console.log(style);
  return (
    <div>
    <div style={{
        color:style.color,
        backgroundColor:style.backgroundColor,
        border:style.border,
        padding:style.padding
    }}>
    <h1>
        Hello!how everything is going on?
    </h1>
    <p>
        lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore,
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore,
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.,
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
    <button onClick={whiteMode}>White Mode</button>
    <button onClick={darkMode}>Dark Mode</button>
    <button onClick={blueMode}>Blue Mode</button>
    </div>
  )
}

export default Hello;