var playlist = { beatles: "Hard Day's Nigjt"};

function updatePlaylist(playlist, artist, title){
  Object.assign(playlist, {[ artist]: "name"})
  return playlist
}

function removeFromPlaylist(title, artist){
  delete playlist.title, artist;
}