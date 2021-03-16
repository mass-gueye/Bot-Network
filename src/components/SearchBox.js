import React from 'react'
// import { robots } from '../bot'
const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input type="search" onChange={searchChange} name="search" className="pa3 ba b--green bg-lightest-blue" id="search" placeholder="search robot" />
        </div>
    )
}

export default SearchBox
