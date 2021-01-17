import React from 'react'

const SearchInput = ({ id, name, placeholder }) => (
    <input type='search' name={name} id={id} placeholder={placeholder} class='form-control mr-sm-2' aria-label='Search' />

)
export default SearchInput
