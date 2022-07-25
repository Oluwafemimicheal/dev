// Menubar Selector
const btn = document.querySelector('.bar')
const menu = document.querySelector('.menubar-sm')
    // Back to top Selector
const backToTop = document.querySelector('.back-to-top')
let body = document.body
let docElem = document.documentElement
let offset = 100
let scrollPos;
let docHeight;
// Contact-Form Selector
const checkBtn = document.querySelector('.check')
const popup = document.querySelector('.popup-container')
const remove = document.querySelector('.fa-times')
    // preloading
const preload = document.querySelector('.preload')





// Preloading
window.addEventListener('load', function() {
    preload.classList.add('load')
    doneLoading()
});

function doneLoading() {
    setTimeout(() => {
        preload.classList.remove('load')
    }, 1000)
}


// Menubar
function timeout() {
    setTimeout(() => {
        menu.classList.remove('show')
    }, 10000)
};
btn.addEventListener('click', function() {
    menu.classList.toggle('show');
    menu.addEventListener('click', function() {
        menu.classList.remove('show')
    })
    timeout()
})

// Back-To-Top
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight);
if (docHeight != 'undefined') {
    offset = docHeight / 4
}
window.addEventListener('scroll', function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop
    if (scrollPos > offset) {
        backToTop.classList.add('show')
    } else {
        backToTop.classList.remove('show')
    }
})

// ContactForm Popup
checkBtn.addEventListener('click', function() {
    popup.classList.add('display')
})
remove.addEventListener('click', function() {
    popup.classList.remove('display')
})