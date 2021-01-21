
class PlaylistData {
    static getAll (resultCallback) {
        fetch('http://localhost:8080/playlist', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                resultCallback(responseObject)
            })
    }

    static getTracks (playlistID, resultCallback) {
        fetch('http://localhost:8080/playlist/' + playlistID, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                resultCallback(responseObject)
            })
    }

    static addTrack (track, resultCallback) {
        fetch('http://localhost:8080/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(track)
        })
            .then(response => response.json())
            .then(responseObject => {
                resultCallback(responseObject)
            })
    }

    static deleteTrack (track, resultCallback) {
        console.log(track)
        const url = 'http://localhost:8080/playlist'
        fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(track)
        })
            .then(response => response.json())
            .then(responseObject => {
                resultCallback(responseObject)
            })
    }
}
export default PlaylistData
