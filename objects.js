var playlist = { beatles: "Hard Day's Nigjt"};

function updatePlaylist(playlist, artist, title){
  Object.assign(playlist, {[ artist ]: title })
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  if (delete playlist.artist) {
    return playlist
  }
}