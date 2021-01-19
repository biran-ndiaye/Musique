import React from 'react'

const NavBar = ({ brand, id, playlistSelect, inputSearch, onClickSearch, onClickBrand }) => (
    <div>
        <nav className='navbar navbar-dark bg-dark justify-content-between' id={id}>
            <div id='brand-select'>
                <div className='navbar-brand' onClick={onClickBrand}>{brand}</div>
                {playlistSelect}
            </div>
            <div id='search'>
                <form>
                    {inputSearch}
                </form>
                <button onClick={onClickSearch} className='btn btn-outline-info my-2 my-sm-0'>Search</button>
            </div>

        </nav>
    </div>
)
export default NavBar
