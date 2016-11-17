import React from 'react';
import Song from './Song';
import {getRoomData, getSongsData} from '../server';

export default class RoomPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentRoomId: this.props.currentRoomId, playlist: {}};
  }

  componentWillMount() {
    this.setState({currentRoomId: this.state.currentRoomId, playlist: this.getRoomPlaylistSongs(this.state.currentRoomId)});
  }

  getRoomPlaylistSongs(roomId) {
    var roomData = getRoomData(parseInt(roomId));
    var songs = [];

    for (var track in roomData.playlists) {
      var songData = getSongsData(parseInt(roomData.playlists[track].trackID));
      songData.likes = roomData.playlists[track].likes;
      songs.push(songData);
    }

    return songs;
  }

  render() {
    var roomPlaylistSongsElements = [];
    for (var song in this.state.playlist) {
      roomPlaylistSongsElements.push(
        <Song song={this.state.playlist[song]} />
      );
    }

    return (
      <table className="table room-playlist">
      <tbody>
        <tr>
          <th>Votes</th>
          <th>Song</th>
          <th>Artist</th>
          <th>Album</th>
        </tr>
        {roomPlaylistSongsElements}
      </tbody>
      </table>
    );
  }

}