import React from 'react'

function makeTrack (track, index, onClickLink) {
    return (
        <div className='track' key={index}>
            <img className='trackImg' src={track.cover_image} alt={track.title} />
            <div id={index}>
                <h5>{track.title}</h5>
                <div>Style : {track.style[0]}</div>
                <div>Year  : {track.year}</div>
                <a href='tracks/details' onClick={onClickLink}>Detail...</a>
            </div>
        </div>
    )
}
const SearchResult = ({ searchTracks, onClickLink, id }) => (
    <div className='tracks' id={id}>
        {searchTracks.map((track, index) => makeTrack(track, index, onClickLink))}
    </div>
)
export default SearchResult
