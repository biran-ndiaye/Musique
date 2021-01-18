import React from 'react'

const NavBar = (props) => (
    <div>
        <nav className='navbar navbar-dark bg-dark justify-content-between' id={props.id}>
            <div id='brand-select'>
                <div className='navbar-brand'>{props.brand}</div>
                {props.playlistSelect}
            </div>
            <div id='search'>
                <form>
                    {props.inputSearch}
                </form>
                <button onClick={props.onClickSearch} className='btn btn-outline-info my-2 my-sm-0'>Search</button>
            </div>

        </nav>
    </div>
)
export default NavBar
