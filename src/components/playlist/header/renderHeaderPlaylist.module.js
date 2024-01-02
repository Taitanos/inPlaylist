export function renderPlaylistHeader(inputPlaylistForRendering){
    renderPlaylistHeaderCover(inputPlaylistForRendering);
    renderPlaylistHeaderTitle(inputPlaylistForRendering);
}

function renderPlaylistHeaderCover(inputPlaylistForRendering) {
    const playlistImageElement = document.createElement('img')
    playlistImageElement.src = inputPlaylistForRendering.coverImageUrl
    document.body.append(playlistImageElement)
}

function renderPlaylistHeaderTitle(inputPlaylistForRendering) {
    const playlistTitleElement = document.createElement('h2')
    playlistTitleElement.append(inputPlaylistForRendering.title)
    document.body.append(playlistTitleElement)
}