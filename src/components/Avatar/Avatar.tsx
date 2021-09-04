import React from "react";
import classes from "./Avatar.module.css";

type AvatarProps = {
    avatarUrl: string;
    alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatarUrl , alt}) => {
    return (
        <div className={classes.avatar}>
            <img className={classes.ava} src={avatarUrl} alt={alt}/>
        </div>
    )
}

export default Avatar;