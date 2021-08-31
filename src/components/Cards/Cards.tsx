import classes from './Cards.module.css';
import React from "react";
import vector from './Vector.svg';

const Cards: React.FC = () => {
    return (
        <div className={classes.grid_items}>
            <div className={classes.content}>
                <div className={classes.kek}>
                    <span className={classes.user_ava}>K</span>
                </div>
                <div className={classes.content_name_info}>
                    <div className={classes.content_repo_name}>kts-school-frontend</div>
                    <div className={classes.content_company}>ktsstudio</div>
                    <div className={classes.content_info}>
                        <img src={vector} className={classes.star} alt="vector"/>
                        <div className={classes.stars_total}>123</div>
                        <div className={classes.last_update}>Updated 21 Jun</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;