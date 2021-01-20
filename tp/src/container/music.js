import React, { Component } from 'react'

import NavBar from 'component/navbar'
import PlaylistSelect from 'component/playlist-select'
import SearchInput from 'component/search-input'
import SearchResult from 'component/search-result'
import LoadingSpinner from 'component/loading-spinner'
import PlaylistData from 'service/playlist-data'
import MusicData from 'service/music-data'
import Playlist from 'container/playlist'
import Detail from 'container/detail'
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
            searchResult: [],
            loading: false,
            DetailTrackVideos: [],
            indexDetail: 0
        }
        this.handleInputSearchChange = this.handleInputSearchChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleDetail = this.handleDetail.bind(this)
        this.handleOnClickSelect = this.handleOnClickSelect.bind(this)
        this.handleBrandClick = this.handleBrandClick.bind(this)
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
            this.setState({ loading: true }, () => {
                this.musicData.search({ query: this.state.searchValue }, result => {
                    this.setState({ searchResult: result.results, renderComponent: 'search', loading: false })
                })
            })
        }
    }

    handleDetail (event) {
        event.preventDefault()
        this.setState({ renderComponent: 'detail', indexDetail: event.target.parentNode.id })
        fetch(this.state.searchResult[this.state.indexDetail].resource_url, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ DetailTrackVideos: responseObject.videos })
            })
    }

    handleOnClickSelect (event) {
        this.setState({ selectedPlaylistID: parseInt(event.target.value) })
        PlaylistData.getTracks(parseInt(event.target.value), result => {
            this.setState({ tracks: result })
        })
    }

    handleBrandClick () {
        this.setState({ renderComponent: 'playlist' })
    }

    // afficher les composants
    renderPlayList () {
        return (
            <Playlist tracks={this.state.tracks} />
        )
    }

    renderSearchResult () {
        return (
            <SearchResult
                searchTracks={this.state.searchResult}
                id='tracks'
                onClickLink={this.handleDetail}
            />
        )
    }

    renderDetail () {
        return (
            <Detail
                DetailTrack={this.state.searchResult[this.state.indexDetail]}
                DetailTrackVideos={this.state.DetailTrackVideos}
                playlistId={this.state.selectedPlaylistID}
                PlaylistData={PlaylistData}
                renderComponent={this.state.renderComponent}
            />
        )
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
                    playlistSelect={<PlaylistSelect name='playlist' id='playlist' options={this.state.playlist} onClickSelect={this.handleOnClickSelect} />}
                    inputSearch={<SearchInput id='search' name='search' placeholder='search track...' onChange={this.handleInputSearchChange} />}
                    onClickSearch={this.handleSearch}
                    onClickBrand={this.handleBrandClick}
                />
                {this.state.loading ? <LoadingSpinner /> : (this.componentToRender())}
            </div>

        )
    }
}
export default Music
