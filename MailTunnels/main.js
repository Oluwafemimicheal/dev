const menu = document.querySelector('.bars')
const navbarToggle = document.querySelector('.navbar')
const header = document.querySelector('.header')
const active = document.querySelector('.active')

menu.addEventListener('click', () => {
    navbarToggle.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scroll', window.scrollY > 80)
})