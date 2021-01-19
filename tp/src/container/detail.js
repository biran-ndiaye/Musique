import React, { Component } from 'react'
import DetailResultVideo from 'component/detail-result-video'

class Detail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            DetailTrackVideos: []
        }
    }

    componentDidMount () {
        this.setState({ DetailTrackVideos: this.props.DetailTrackVideos })
    }

    handleAddCLick () {

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
                        <DetailResultVideo listTracks={this.props.DetailTrackVideos} onClickAdd={this.handleAddCLick} />
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail
