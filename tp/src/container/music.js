import React, { Component } from 'react'

import NavBar from 'component/navbar'
import PlaylistSelect from 'component/playlist-select'
import SearchInput from 'component/search-input'
import PlaylistData from 'service/playlist-data'
import '../css/style.css'

class Music extends Component {
    constructor (props) {
        super(props)
        this.state = {
            playlist: []
        }
    }

    componentDidMount () {
        PlaylistData.getAll(result => {
            this.setState({ playlist: result })
        })
    }

    render () {
        return (
            <NavBar
                brand='Music'
                id='navBarMusic'
                playlistSelect={<PlaylistSelect name='playlist' id='playlist' options={this.state.playlist} />}
                inputSearch={<SearchInput id='search' name='search' placeholder='search track...' />}
            />
        )
    }
}
export default Music
