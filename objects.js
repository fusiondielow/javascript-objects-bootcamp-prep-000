var playlist = { beatles: "Hard Day's Nigjt"};

function updatePlaylist(playlist, artist, title){
  Object.assign(playlist, {[ artist]: "name"})
  return playlist
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist
  playlist
}