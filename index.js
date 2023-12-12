// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        {title: 'Front'},
        {title: 'Back'},
        {title: 'DevOps'},
    ],
}


// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);

let technologiesSelectElement = document.createElement('select');
let technologiesOption0Element = document.createElement('option');
technologiesOption0Element.append(info.technologies[0].title);
let technologiesOption1Element = document.createElement('option');
technologiesOption1Element.append(info.technologies[1].title);
let technologiesOption2Element = document.createElement('option');
technologiesOption2Element.append(info.technologies[2].title);
technologiesSelectElement.append(technologiesOption0Element, technologiesOption1Element, technologiesOption2Element);
document.body.append(technologiesSelectElement);