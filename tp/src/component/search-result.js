import React from 'react'

function makeTrack (track, index) {
    return (
        <div className='track' key={index}>
            <img className='trackImg' src={track.src} alt={track.title} />
            <div>
                <h4>{track.title}</h4>
                <div>Style : {track.style}</div>
                <div>Year  : {track.year}</div>
                <a>Detail...</a>
            </div>
        </div>
    )
}
const searchResult = (props) => (
    <div className='tracks'>
        {props.searchTracks.map((track, index) => makeTrack(track, index))}
    </div>
)
export default searchResult
