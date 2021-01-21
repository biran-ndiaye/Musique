import React, { Component } from 'react'
import DetailResultVideo from 'component/detail-result-video'

class Detail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            DetailTrackVideos: []
        }
        this.handleAddCLick = this.handleAddCLick.bind(this)
    }

    handleAddCLick (event) {
        const id = event.target.parentNode.id
        const DetailTrackVideos = this.props.DetailTrackVideos.map((trackVideo, index) => {
            if (index === parseInt(id)) {
                // si c'est faux ajouter dans la BD
                if (!trackVideo.isChecked) {
                    const masterID = this.props.DetailTrack.master_id
                    const track = { playlistId: this.props.playlistId, title: trackVideo.title, uri: trackVideo.uri, masterID: masterID }
                    this.props.PlaylistData.addTrack(track, (result) => {
                        console.log(result)
                    })
                }
                // si c'est vrai ajouter dans la BD
                if (trackVideo.isChecked) {
                    const trackTodelete = { playlistId: this.props.playlistId, uri: trackVideo.uri }
                    this.props.PlaylistData.deleteTrack(trackTodelete, result => {
                        console.log(result)
                    })
                }
                trackVideo.isChecked = !trackVideo.isChecked
            }
            return trackVideo
        })

        this.setState({ DetailTrackVideos: DetailTrackVideos })
    }

    render () {
        return (
            <div className='DetailResultVideo'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <img src={this.props.DetailTrack.cover_image} alt={this.props.DetailTrack.description} />

                            <div className='card-body'>
                                <h5 className='card-title'>{this.props.DetailTrack.title}</h5>
                                <div>
                                    <div>Style : {this.props.DetailTrack.style[0]}</div>
                                    <div>Year  : {this.props.DetailTrack.year}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <h5 className='col-Tracks'>Tracks</h5>
                        <DetailResultVideo listTracks={this.state.DetailTrackVideos.length === 0 ? this.props.DetailTrackVideos : this.state.DetailTrackVideos} onClickAdd={this.handleAddCLick} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail
