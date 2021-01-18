import React from 'react'

function makeTrack (track, index) {
    return (
        <div className='track' key={index}>
            <img className='trackImg' src={track.cover_image} alt={track.title} />
            <div>
                <h4>{track.title}</h4>
                <div>Style : {track.style[0]}</div>
                <div>Year  : {track.year}</div>
                <a href='#'>Detail...</a>
            </div>
        </div>
    )
}
const SearchResult = ({ searchTracks, id }) => (
    <div className='tracks' id={id}>
        {searchTracks.map((track, index) => makeTrack(track, index))}
    </div>
)
export default SearchResult
