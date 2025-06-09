
// sidebar menu controller

const menuItems = document.getElementsByClassName('menu-item')

// menu item activation styling

for (const item of menuItems) {
  item.addEventListener('click', 
    function () {
      for (const item of menuItems) {
        item.classList.remove('active-menu-item')
      }
      this.classList.add('active-menu-item')
    }
  )
}

