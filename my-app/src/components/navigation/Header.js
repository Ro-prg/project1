import React from "react";
import styleHeader from "./Header.module.css";
import LinkButton from "./LinkButton";

const Header = () => {
  return (
    <div className={styleHeader.navHeader}>
        <Button bgColor={myColor}>{myText}</Button>
        <Button bgColor={myColor3}>{myText3}</Button> 
        <Button bgColor={myColor2}>{myText2}</Button> 
    </div>
);
};

export default Header;
