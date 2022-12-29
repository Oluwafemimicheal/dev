const form = document.getElementById('form')
const cards = document.getElementById('cards')
const main = document.querySelector('.main')
const cardContainer = document.querySelector('.card-container')
const content = document.querySelector('.content')
const check = document.querySelector('#no')
    // Load window
window.addEventListener('load', () => {
    main.classList.add('active2')
        // Navigating
})
const section = document.querySelector('.List')
const list = document.getElementById('friend')

const Add = document.getElementById('card')
const card = document.querySelector('.add')

list.addEventListener('click', () => {
    section.classList.toggle('active')
})

Add.addEventListener('click', () => {
    card.classList.add('active1')
    main.classList.remove('active2')
})
cards.addEventListener('click', () => {
    main.classList.add('active2')
    card.classList.remove('active1')
})


// Getting info

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const upload = document.getElementById('upload')
    const firstName = document.getElementById('first-name')
    const otherName = document.getElementById('other-name')
    const number = document.getElementById('number')

    let first = firstName.value
    let image = upload.value
    let other = otherName.value
    let numb = number.value

    const h2 = document.createElement('h2')
    h2.classList.add('h2')
    h2.innerText = `${first} ${other}`

    const detailCard = document.createElement('div')
    detailCard.classList.add('card')

    const imageBox = document.createElement('div')
    imageBox.classList.add('image')
    imageBox.insert = image

    const img = document.createElement('img')
    img.src = image

    detailCard.appendChild(imageBox)
    imageBox.appendChild(img)

    const text = document.createElement('div')
    text.classList.add('text')

    const name = document.createElement('h1')
    name.innerText = first
    const friend = document.createElement('p')
    friend.innerText = other
    const num = document.createElement('span')
    num.innerText = numb

    text.appendChild(name)
    text.appendChild(friend)
    text.appendChild(num)
    detailCard.appendChild(text)


    cardContainer.appendChild(detailCard)
    content.appendChild(h2)

    saveLocal(cardContainer, content);


    function saveLocal(cards, friend) {
        //check --- hey do i already have thing in there
        let card;
        if (localStorage.getItem(cardContainer, content) === null) {
            card = [];
        } else {
            card = JSON.parse(localStorage.getItem(cards, friend));
        }

        card.push(cardContainer, friend);
        localStorage.setItem(cardContainer, content, JSON.stringify(card));
    }

    firstName.value = ''
    upload.value = ''
    otherName.value = ''
    number.value = ''
})