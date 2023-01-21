const authBtn = document.getElementById('open-auth-btn')  ///войти 
const modal = document.getElementById('auth-modal') // модальное окно
const closeBtn = modal.querySelectorAll('.close-btn') //выход 


const openModal = () =>{
    authBtn.addEventListener('click' , () => {
        modal.style.display = 'block'
    
        setTimeout(() =>{
            modal.classList.add('show')
        }, 300)
    })
}

const closeModal = () =>{
    modal.classList.remove('show')
     setTimeout(()=>{
        modal.style.display = 'none'
    }, 300)
}

authBtn.addEventListener('click' , openModal)

closeBtn.forEach((btn) => {
    btn.addEventListener('click', closeModal)
})
