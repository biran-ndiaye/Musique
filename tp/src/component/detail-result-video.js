import React from 'react'

function makeLi (track, index) {
    return (
        <li className='list-group-item LitracksResult' key={index}>
            <div>{track.title}</div>
            <div>
                {!track.isChecked ? <i className='fa fa-plus' /> : <i className='fa fa-check' />}
            </div>
        </li>
    )
}
const DetailResultVideo = ({ listTracks, isChecked }) => (
    <ul className='list-group'>
        {listTracks.map((track, index) => makeLi(track, index, isChecked))}
    </ul>
)
export default DetailResultVideo
