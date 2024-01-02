import {renderPlaylistHeader} from './header/renderHeaderPlaylist.module.js';
import {renderPlaylistTracks} from './tracks/renderPlaylistTracks.module.js';

export function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderPlaylistTracks(playlistForRendering.tracks)
}