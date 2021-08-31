import classes from './SearchBar.module.css';
import search from './search.svg';
import React from "react";

const SearchBar: React.FC = () => {
    return (
      <div className={classes.search_grid}>
          <input type="search" name="p" className={classes.search_input} placeholder="Введите название организации"/>
          <button className={classes.search_btn}>
              <img src={search} alt="search"/>
          </button>
      </div>
    );
};

export default SearchBar;
