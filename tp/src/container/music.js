import React, { Component } from 'react'

import NavBar from 'component/navbar'
import PlaylistSelect from 'component/playlist-select'
import SearchInput from 'component/search-input'
import '../css/style.css'
class Music extends Component {
    constructor (props) {
        super(props)
        this.state = {
            playlist: []
        }
    }

    componentDidMount () {
        this.setState({ playlist: [{ id: 1, title: 'pop' }, { id: 2, title: 'hip/hop' }, { id: 3, title: 'jazz' }] })
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
