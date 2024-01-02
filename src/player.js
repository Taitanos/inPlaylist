import {playlists} from './data/data.module.js'
import {renderPlaylists} from './components/renderPlaylists.module.js';


// render

// render header inPlaylist
const renderHeader = document.createElement('header')
renderHeader.append('inPlaylist')
document.body.append(renderHeader)

// render myPlaylist

const renderMyPlaylist = document.createElement('h2')
renderMyPlaylist.append('My Playlist')
document.body.append(renderMyPlaylist)

// render playlists inPlaylist

renderPlaylists(playlists)