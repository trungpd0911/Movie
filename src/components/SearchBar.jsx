import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBar = ({ searchValue, handleChange, filterMovie }) => {

    console.log(searchValue);

    return (
        <div className="search">
            <input type="text" placeholder='search for movie....' name='movie' value={searchValue} onChange={handleChange} />
            <AiOutlineSearch size='24px'
                onClick={filterMovie}
                style={{
                    cursor: "pointer",
                }} />
        </div>
    )
}

export default SearchBar