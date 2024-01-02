import {renderTrack} from './track/renderTrack.module.js';

export function renderPlaylistTracks(tracks) {
    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        renderTrack(track);
    }
}