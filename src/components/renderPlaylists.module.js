import {renderPlaylist} from './playlist/renderPlaylist.module.js';

export function renderPlaylists (inputPlaylists) {
    for (let i = 0; i < inputPlaylists.length; i++) {
        const playlist = inputPlaylists[i]
        renderPlaylist(playlist)
    }
}