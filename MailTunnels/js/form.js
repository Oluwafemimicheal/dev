const register = document.querySelector('.register')
const user = document.querySelector('.user')
const password = document.querySelectorAll('.show-password')
const icon = document.querySelectorAll('.icon img')
const form = document.querySelectorAll('form')
const input = document.querySelectorAll('form input')
const message = document.querySelector('.message-popup')
const submit = document.querySelector('#submit')


const Register = () => {
    register.style.display = 'flex'
    user.style.display = 'none'
}
const User = () => {
    user.style.display = 'flex'
    register.style.display = 'none'
}

input.forEach((input) => {
    console.log(input)
})



if (valueOfInput === '' || valueOfInput === null) {
    message.classList.add('failed')
} else {
    icon.forEach((icon) => {
        icon.addEventListener('click', (e) => {
            password.forEach((password) => {
                icon.src = '../image/eye-slash-svgrepo-com.svg'
                password.type = 'text'
                setTimeout(() => {
                    password.type = 'password'
                    icon.src = 'image/eye-svgrepo-com.svg'
                }, 1500)
            })
        })
    })
}


form.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        submit.addEventListener('click', () => {

        })
    })
})


let name = "jinadu oluwafemi"

if (name.length < 8) {
    console.log('try again')
} else {
    console.log('it work')
}