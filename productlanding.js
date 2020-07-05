let nav;

function displayNav() {
    if (nav === undefined) {
        nav = document.getElementById('navBar')
        nav.style.display = 'block'
    } else if (nav !== undefined) {
        nav.style.display = 'none'
        nav = undefined
    }
}