const menu = document.querySelector('.fa-bars')
const navbarToggle = document.querySelector('.navbar')
const header = document.querySelector('.header')

menu.addEventListener('click', () => {
    navbarToggle.classList.toggle('active')
})

header.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})
console.log(window.scrollY)