const authBtn = document.getElementById('open-auth-btn')  ///войти 
const openCartBtn = document.getElementById('open-cart-btn') //корзина
const logoutBtn = document.getElementById('logout-btn') //выйти
const modal = document.getElementById('auth-modal') // модальное окно
const closeBtn = modal.querySelectorAll('.close-btn') //выход 
const loginBtn = modal.querySelector('.login-btn') //войти

const openModal = () => {
   modal.classList.add('d-block')
            setTimeout(() => {
            modal.classList.add('show')
        },200)
}
const chechAuth = () => {
    if (JSON.parse(localStorage.getItem('auth')))
    login()
}



const closeModal = () => {
    modal.classList.remove('show')
     setTimeout(() => {
     modal.classList.remove('d-block')
    },200)
}

const login = () => {
    authBtn.classList.add('d-none')
    openCartBtn.classList.remove('d-none')
    logoutBtn.classList.remove('d-none')
    closeModal()
}

const logout = () => {
    authBtn.classList.remove('d-none')
    openCartBtn.classList.add('d-none')
    logoutBtn.classList.add('d-none')
    closeModal()
}

authBtn.addEventListener('click' , openModal)

closeBtn.forEach((btn) => {
    btn.addEventListener('click', closeModal)
})

loginBtn.addEventListener('click', () => {
    const loginInput = modal.querySelector('#login-control')
    const passwordInput = modal.querySelector('#password-control')

    const user = {
        login: loginInput.value,
        password: passwordInput.value
    }
    localStorage.setItem('auth', JSON.stringify(user))

    login()

})

logoutBtn.addEventListener('click', () => {
localStorage.removeItem('auth')

    logout()
})
chechAuth()