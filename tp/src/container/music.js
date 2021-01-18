import React, { Component } from 'react'

import NavBar from 'component/navbar'
import PlaylistSelect from 'component/playlist-select'
import SearchInput from 'component/search-input'
import SearchResult from 'component/search-result'
import PlaylistData from 'service/playlist-data'
import MusicData from 'service/music-data'
import Playlist from 'container/playlist'
import '../css/style.css'

class Music extends Component {
    constructor (props) {
        super(props)
        this.musicData = new MusicData('nAInmfZIKtAGWSZLxRKUMavQpUoDysrUimFRhhXF')
        this.state = {
            renderComponent: 'playlist',
            playlist: [],
            selectedPlaylistID: 1,
            searchValue: '',
            tracks: [],
            searchResult: []
        }
        this.handleInputSearchChange = this.handleInputSearchChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
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

    handleSearch () {
        if (this.state.searchValue !== '') {
            this.musicData.search({ query: this.state.searchValue }, result => {
                this.setState({ searchResult: result.results, searchValue: '', renderComponent: 'search' })
            })
        }
    }

    // afficher les composants
    renderPlayList () {
        return (
            <Playlist tracks={this.state.tracks} />
        )
    }

    renderSearchResult () {
        return (
            <SearchResult searchTracks={this.state.searchResult} id='tracks' />
        )
    }

    renderDetail () {

    }

    componentToRender () {
        switch (this.state.renderComponent) {
        case 'detail':
            return this.renderDetail()
        case 'search':
            return this.renderSearchResult()
        default:
            return this.renderPlayList()
        }
    }

    render () {
        return (
            <div>
                <NavBar
                    brand='Music'
                    id='navBarMusic'
                    playlistSelect={<PlaylistSelect name='playlist' id='playlist' options={this.state.playlist} />}
                    inputSearch={<SearchInput id='search' name='search' placeholder='search track...' onChange={this.handleInputSearchChange} />}
                    onClickSearch={this.handleSearch}
                />
                {this.componentToRender()}
            </div>

        )
    }
}
export default Music
