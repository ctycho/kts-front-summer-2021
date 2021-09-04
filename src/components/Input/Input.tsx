import React, { ChangeEvent } from "react";
import classes from './Input.module.css';

type InputProps = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    name: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = (props) => {
    return <input className={classes.search_input} {...props}/>
}


export default Input;