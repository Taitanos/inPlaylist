export function renderTrack(inputTrackForRendering){
    const trackElement = document.createElement('div')

    const coverElement = document.createElement('img')
    coverElement.src = inputTrackForRendering.coverImageUrl

    const trackTitleElement = document.createElement('div')

    if (inputTrackForRendering.isHot) {
        trackTitleElement.append('🔥')
    }
    trackTitleElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title)

    const audioElement = document.createElement('audio')
    audioElement.src = inputTrackForRendering.fileUrl
    audioElement.controls = true

    trackElement.append(trackTitleElement, coverElement, audioElement)

    document.body.append(trackElement)
}