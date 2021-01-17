import React from 'react'

function optionBuider (option, index) {
    return <option key={index} value={option}>{option}</option>
}
const PlaylistSelect = ({ name, id, options, onClick }) => {
    <div>
        <select onClick={onClick} className='custom-select' name={name} id={id}>
            {options.map((option, index) => optionBuider(option, index))}
        </select>
    </div>
}
export default PlaylistSelect
