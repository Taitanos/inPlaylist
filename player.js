// data
const playlist1 = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './assets/images/hip_hop_hits.png',
    info: {
        tracksCount: 4,
        totalTracksDurationInSeconds: 733,
    },
    tracks: [
        {
            coverImageUrl: './assets/images/Eminem_-_Rap_God.png',
            artistName: 'Eminem',
            title: 'Rap Goad',
            fileUrl: './assets/musics/Eminem_-_Rap_God.mp3',
            isHot: false,
        },
        {
            coverImageUrl: './assets/images/50_cent_-_in_da_club.png',
            artistName: '50 Cent',
            title: 'In da Club',
            fileUrl: './assets/musics/50_cent_-_in_da_club.mp3',
            isHot: false,
        },
        {
            coverImageUrl: './assets/images/Dmx_X_Gon\'_-_Give_It_To_Ya.png',
            artistName: 'Dmx_X_Gon\'',
            title: 'Give It To Ya',
            fileUrl: './assets/musics/Dmx_X_Gon\'_-_Give_It_To_Ya.mp3',
            isHot: false,
        },
        {
            coverImageUrl: './assets/images/eminem_50cent_-_you_dont_know.png',
            artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
            title: 'You Don\'t Know',
            fileUrl: './assets/musics/eminem_50cent_-_you_dont_know.mp3',
            isHot: false,
        },
    ]
}


// render inPlaylist

// render header inPlaylist
const renderHeader = document.createElement('header')
renderHeader.innerText = 'inPlaylist'
document.body.append(renderHeader)

// render myPlaylist

const renderMyPlaylist = document.createElement('div')
renderMyPlaylist.innerText = 'My Playlist'
document.body.append(renderMyPlaylist)

// render playlist inPlaylist

renderPlaylist (playlist1)

function renderPlaylist(playlistForRendering) {

    renderPlaylistHeader(playlistForRendering)
    renderTrack(playlistForRendering.tracks[0])
    renderTrack(playlistForRendering.tracks[1])
    renderTrack(playlistForRendering.tracks[2])
    renderTrack(playlistForRendering.tracks[3])

}

function renderPlaylistHeader(inputPlaylistForRendering){

    const playlistHeaderElement = document.createElement('div')


    const playlistImageElement = document.createElement('img')
    playlistImageElement.src = inputPlaylistForRendering.coverImageUrl
    playlistHeaderElement.append(playlistImageElement)

    const playlistTitleElement = document.createElement('h2')
    playlistTitleElement.append(inputPlaylistForRendering.title)
    playlistHeaderElement.append(playlistTitleElement)

    document.body.append(playlistHeaderElement)
}

function renderTrack(inputTrackForRendering){
    const trackElement = document.createElement('div')
    trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title)

    const coverElement = document.createElement('img')
    coverElement.src = inputTrackForRendering.coverImageUrl
    trackElement.append(coverElement)

    const playerElement = document.createElement('audio')
    playerElement.src = inputTrackForRendering.fileUrl
    playerElement.controls = true
    trackElement.append(playerElement)

    document.body.append(trackElement)
}