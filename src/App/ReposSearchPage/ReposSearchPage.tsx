import React, { useState } from "react";
import classes from './ReposSearchPage.module.css';
import { RepoItem } from "../../store/GitHubStore/types";
import getReposByOrg from "../../root/root"
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import SearchIcon from "@components/SearchIcon";
import RepoTile from "@components/RepoTile";


const ReposSearchPage: React.FC = () => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState('');
    const [listRepositories, setListRepositories] = useState<RepoItem[]>([]);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleOnClick = () => {
        getReposByOrg(inputValue).then((res) => {
            if (res.success) {
                setLoading((prev) => !prev);
                setListRepositories(res.data);
            } else {
                setLoading((prev) => !prev);
                setListRepositories([]);
            }
        });
    }
    return (
        <>
          <div className={classes.search_grid}>
              <Input
                  onChange={handleOnChange}
                  type="search"
                  name="p"
                  placeholder="Введите название организации"/>
              <Button
                  onClick={handleOnClick}
                  disabled={isLoading}>
                  <SearchIcon currentColor={"white"} />
              </Button>
          </div>
          <RepoTile RepoItem={listRepositories} />
        </>
    );
};

export default ReposSearchPage;
