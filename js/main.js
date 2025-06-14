// sidebar menu controller
const menuItems = document.getElementsByClassName('menu-item')

// menu item activation styling
const setMenuAnimations = () => {
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
}

// set active page menu item
const activateCurrentMenuLink = () => {
  let pagePath = window.location.pathname
  if (pagePath === "/") {
    pagePath = "home"
  } else {
    pagePath = pagePath.split("").slice(1, pagePath.length).join("")
  }
  const menuItem = document.getElementById(`${pagePath}-link`)
  menuItem.classList.add('active-menu-item')
}

// social link hover animation
const setSocialAnimations = () => {
  const links = document.getElementsByClassName("icon-tabler");
  for (const link of links) {
    link.addEventListener("mouseenter", function () {
      this.attributes.stroke.value = "var(--xh-white)"
      this.style.scale = "1.2"
    })
    link.addEventListener("mouseleave", function () {
      this.attributes.stroke.value = "var(--xh-light-gray)"
      this.style.scale = "1"
    })
  }
}

const activateHamburgerMenu = () => {
  const openBtn = document.getElementById("open-menu")
  const closeBtn = document.getElementById("close-menu")
  const sidebar = document.getElementById("sidebar")
  console.log(sidebar)
  openBtn.addEventListener("click", function () {
    this.style.visibility = "hidden"
    closeBtn.style.visibility = "visible"
    sidebar.style.display = "flex"
    
  })
  closeBtn.addEventListener("click", function () {
    this.style.visibility = "hidden"
    openBtn.style.visibility = "visible"


    sidebar.style.display = "none"
  })
}

const setup = () => {
  activateCurrentMenuLink()
  setMenuAnimations()
  setSocialAnimations()
  // activateHamburgerMenu()
}

window.onload = setup()

