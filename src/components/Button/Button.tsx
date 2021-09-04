import classes from "./Button.module.css";
import React from "react";

type BtnProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
}

const Button: React.FC<BtnProps> = (props) => {
    return (
        <button className={classes.search_btn} {...props}>
            {props.children}
        </button>
    )
}

export default Button;