const mobMenu = document.querySelector('.mob-menu')
const btnOpen = document.querySelector('.menu-open-btn')
const btnClose = document.querySelector('.menu-close-btn')

btnOpen.addEventListener('click', () => {
    mobMenu.classList.add('is-open')
})
btnClose.addEventListener('click', () => {
    mobMenu.classList.remove('is-open')
})

const menuLink = document.querySelectorAll('.menu-link')
menuLink.forEach((elem) => {
    elem.addEventListener('click', () => {
        mobMenu.classList.remove('is-open')
    })
})