const menu = document.querySelector('.bars')
const navbarToggle = document.querySelector('.navbar')
const header = document.querySelector('.header')
const active = document.querySelector('.active')
const li = document.querySelectorAll('ul li a')
const body = document.querySelector('.navbar')
const animate = document.querySelectorAll('.animate')
menu.addEventListener('click', () => {
    navbarToggle.classList.add('active')
})
li.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarToggle.classList.remove('active')
    })
})

body.addEventListener('click', () => {
    navbarToggle.classList.remove('active')
})

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scroll', window.scrollY > 80)
})