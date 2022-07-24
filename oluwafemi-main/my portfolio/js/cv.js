const message = document.querySelector('.message-container')
const btn = document.querySelector('.btn')
const preload = document.querySelector('.preload')

function notShow() {
    setTimeout(() => {
        message.classList.remove('show')
    }, 3000)
}

btn.addEventListener('click', function() {
    message.classList.add('show')
    notShow()
})
message.addEventListener('click', function() {
    message.classList.remove('show')
})

// Preloading
window.addEventListener('load', function() {
    preload.classList.add('load')
    doneLoading()
})

function doneLoading() {
    setTimeout(() => {
        preload.classList.remove('load')
    }, 2000)
}