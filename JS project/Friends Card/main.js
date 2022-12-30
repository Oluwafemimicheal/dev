const form = document.getElementById('form')
const cards = document.getElementById('cards')
const main = document.querySelector('.main')
const cardContainer = document.querySelector('.card-container')
const content = document.querySelector('.content')
const date = document.querySelector('#date')

const nameInput = form['name']
const otherName = form['other']
const numberInput = form['number']
const imageUpload = form['image']
const friendType = form['friend']


main.addEventListener('click', () => {
    section.classList.remove('active')
})

// Load window
window.addEventListener('load', () => {
    main.classList.add('active2')
});

//Time
// let time = moment().format('LLL');
// date.innerText = time;


// Navigating
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
    section.classList.remove('active')
})


// Getting info

const friends = JSON.parse(localStorage.getItem('friend')) || []

const addFriends = (name, other, number, image, friendType) => {
    friends.push({
        name,
        other,
        number,
        image,
        friendType
    })
    localStorage.setItem('friend', JSON.stringify(friends))
    return { name, other, number, image, friendType }
}


const createFriendElement = ({ name, other, number, image, friendType }) => {

    const detailCard = document.createElement('div')
    const imageBox = document.createElement('div')
    const img = document.createElement('img')
    const friendName = document.createElement('h1')
    const h2 = document.createElement('h2')
    const text = document.createElement('div')
    const num = document.createElement('span')
    const friendT = document.createElement('p')

    detailCard.classList.add('card')
    imageBox.classList.add('image')
    text.classList.add('text')
    h2.classList.add('h2')

    h2.innerText = `${name} ${other}`
    img.src = image
    friendName.innerText = `${name} ${other}`;
    friendT.innerText = friendType
    num.innerText = number

    detailCard.appendChild(imageBox)
    imageBox.appendChild(img)
    text.append(friendName, friendT, num)
    detailCard.appendChild(text)
    cardContainer.appendChild(detailCard)
    content.appendChild(h2)
}

friends.forEach(createFriendElement)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newFriend = addFriends(
        nameInput.value,
        otherName.value,
        numberInput.value,
        imageUpload.value,
        friendType.value
    );

    createFriendElement(newFriend)

    nameInput.value = ''
    otherName.value = ''
    numberInput.value = ''
    imageUpload.value = ''
    friendType.value = ''
});