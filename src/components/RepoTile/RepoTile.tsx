import {RepoItem} from "../../store/GitHubStore/types";
import React from "react";
import Cards from "@components/RepoTile/Cards";

type RepoTileProps = {
    RepoItem: RepoItem[];
}

const RepoTile: React.FC<RepoTileProps> = ({RepoItem}) => {
    const [indexCard, setIndexCard] = React.useState<RepoItem | null>(null);
    return (
        <div>
            {RepoItem.map((item) => {
                const handleOnClickCard = () => {
                    setIndexCard(item);
                };
                return (
                <Cards key={item.id} RepoItem={item} onClick={handleOnClickCard}/>
                );
            })}
        </div>
    )

}

export default RepoTile;