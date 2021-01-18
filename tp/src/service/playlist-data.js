
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
}
export default PlaylistData
