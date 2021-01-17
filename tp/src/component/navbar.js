import React from 'react'

const NavBar = (props) => (
    <div>
        <nav class='navbar navbar-dark bg-primary justify-content-between' id={props.id}>
            <div>
                <div class='navbar-brand'>{props.brand}</div>
                {props.playlistSelect}
            </div>

            <form>
                {props.inputSearch}
            </form>
            <button class='btn btn-outline-success my-2 my-sm-0'>Search</button>
        </nav>
    </div>
)
export default NavBar
