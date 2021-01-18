import React, { Component } from 'react'

import NavBar from 'component/navbar'
import PlaylistSelect from 'component/playlist-select'
import SearchInput from 'component/search-input'
import PlaylistData from 'service/playlist-data'
import Playlist from 'container/playlist'
import '../css/style.css'

class Music extends Component {
    constructor (props) {
        super(props)
        this.state = {
            playlist: [],
            selectedPlaylistID: 1,
            searchValue: '',
            tracks: []
        }
        this.handleInputSearchChange = this.handleInputSearchChange.bind(this)
    }

    componentDidMount () {
        PlaylistData.getAll(result => {
            this.setState({ playlist: result })
        })
        PlaylistData.getTracks(this.state.selectedPlaylistID, result => {
            this.setState({ tracks: result })
        })
    }

    // gestionnaire des evenements
    handleInputSearchChange (event) {
        this.setState({ searchValue: event.target.value })
    }

    render () {
        return (
            <div>
                <NavBar
                    brand='Music'
                    id='navBarMusic'
                    playlistSelect={<PlaylistSelect name='playlist' id='playlist' options={this.state.playlist} />}
                    inputSearch={<SearchInput id='search' name='search' placeholder='search track...' onChange={this.handleInputSearchChange} />}
                />
                <Playlist tracks={this.state.tracks} />
            </div>

        )
    }
}
export default Music
