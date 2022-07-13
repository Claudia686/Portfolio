const hanburgerbutton = document.getElementById('hanburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hanburgerButton.addEventListener('click',toggleButton)
    