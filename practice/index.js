const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
})