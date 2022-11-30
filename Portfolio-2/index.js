window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('navbar', window.scrollY > 600)
})