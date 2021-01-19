import React from 'react'

function optionBuider (option, index) {
    return <option key={index} value={option.id}>{option.title}</option>
}
const PlaylistSelect = ({ name, id, options, onClickSelect }) => (
    <div>
        <select onClick={onClickSelect} className='custom-select' name={name} id={id}>
            {options.map((option, index) => optionBuider(option, index))}
        </select>
    </div>
)
export default PlaylistSelect
