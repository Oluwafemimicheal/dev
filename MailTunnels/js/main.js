const menu = document.querySelector('.bars')
const navbarToggle = document.querySelector('.navbar')
const header = document.querySelector('.header')
const active = document.querySelector('.active')
const li = document.querySelectorAll('ul li a')
const body = document.querySelector('.navbar')
const animate = document.querySelectorAll('.animate')




menu.addEventListener('click', () => {
    if (navbarToggle.classList.toggle('active')) {
        menu.innerText = 'close'
    } else {
        menu.innerText = 'menu'
    }
})


li.forEach((btn) => {
    btn.addEventListener('click', () => {
        navbarToggle.classList.remove('active')
        menu.innerText = 'menu'
    })
})

body.addEventListener('click', () => {
    navbarToggle.classList.remove('active')
    menu.innerText = 'menu'
})

window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scroll', window.scrollY > 80)
})

const observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

animate.forEach((el) => observe.observe(el))