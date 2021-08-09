// listen for the DOMContentLoaded event, then bind our function
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('hamburger').addEventListener('click', (e) => {
        document.querySelector('header nav').classList.toggle('active')
    })
})
