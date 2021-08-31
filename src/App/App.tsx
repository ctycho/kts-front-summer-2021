import './App.css';
import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
// import Button from '@components/Button';
import Cards from "../components/Cards/Cards";
import getReposByOrg from "../root/root"

const App: React.FC = () => {
  getReposByOrg();
  return (
      <>
        <SearchBar/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </>
  );
};

export default App;