import React from 'react';
import './Search.css'; 
// import searchIcon from './src/assets/icons/search.png';

const SearchBar = ({onSearch}) => {
  return (
    <div className="search-bar">
            {/* <img src={searchIcon} alt="Ícone de busca" className="search-icon" /> */}
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Procurar tarefa"
      />
      
    </div>
  );
};

export default SearchBar;
