import classes from './Cards.module.css';
import React from "react";
import StarIcon from "@components/StarIcon/StarIcon";
import {RepoItem} from "../../../store/GitHubStore/types";
import Avatar from "@components/Avatar";

type CardsProps = {
    RepoItem: RepoItem;
    onClick: () => void;
}

const Cards: React.FC<CardsProps> = ({ RepoItem}, onClick) => {
    const getDate = (updated_at: string) => {
        const date = new Date(updated_at);
        if (date.getDate() < 10) {
            return `0${date.getDate()}  ${date.toLocaleString(
                'default',
                { month: 'short' })}`;
        } else {
            return `${date.getDate()}  ${date.toLocaleString(
                'default',
                { month: 'short' })}`;
        }
    };
    return (
        <div className={classes.grid_items}>
            <div className={classes.content} onClick={onClick}>
                <Avatar avatarUrl={RepoItem.owner.avatar_url} alt={'avatar'}/>
                <div className={classes.content_name_info}>
                    <div className={classes.content_repo_name}>{RepoItem.name}</div>
                    <div className={classes.content_company}>{RepoItem.owner.login}</div>
                    <div className={classes.content_info}>
                        <StarIcon currentColor={"#FF9432"} />
                        <div className={classes.stars_total}>{RepoItem.stargazers_count}</div>
                        <div className={classes.last_update}>Updated  {getDate(RepoItem.updated_at)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;