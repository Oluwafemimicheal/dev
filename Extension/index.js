let url = []
const input = document.getElementById('input')
const btn = document.getElementById('save')
const ul = document.querySelector('.ul')
const deleteBtn = document.getElementById('delete')
const tabBtn = document.getElementById('tab')
const pop = document.querySelector('.pop')

setInterval(() => {
    pop.style.display = 'none'
}, 5000)

const urlFromLocalStorage = JSON.parse(localStorage.getItem('url'))
if (urlFromLocalStorage) {
    url = urlFromLocalStorage
    list(url)
}

function list(link) {
    let listItem = ''
    for (let i = 0; i < link.length; i++) {
        listItem += `
        <li>
        <a  target='_blank' href='${link[i]} '>
        ${link[i]} 
        </a>
        </li>
        `
    }
    ul.innerHTML = listItem
}

btn.onclick = () => {
    url.push(input.value)
    input.value = ''

    list(url)
}

tabBtn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        url.push(tabs[0].url)
        localStorage.setItem('url', JSON.stringify(url))
        list(url)

    })
}

deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear()
    url = []
    list(url)
})