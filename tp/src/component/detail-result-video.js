import React from 'react'

function makeLi (track, index, onClickAdd) {
    return (
        <li className='list-group-item LitracksResult' key={index}>
            <div>{track.title}</div>
            <div id={index} onClick={onClickAdd}>
                {!track.isChecked ? <i className='fa fa-plus' /> : <i className='fa fa-check' />}
            </div>
        </li>
    )
}
const DetailResultVideo = ({ listTracks, onClickAdd }) => (
    <ul className='list-group'>
        {listTracks.map((track, index) => makeLi(track, index, onClickAdd))}
    </ul>
)
export default DetailResultVideo
