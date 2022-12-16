import React, {useState} from "react";


const LinkButton = ({bgColor, textColor, children}) => {
    return <button style={{backgroundColor: bgColor, color: textColor}}>{children}</button>
};

export default LinkButton