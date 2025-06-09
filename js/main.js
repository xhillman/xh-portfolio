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
  console.log("raw", pagePath, typeof(pagePath))
  if (pagePath === "/") {
    pagePath = "home"
  } else {
      pagePath = pagePath.split("").slice(1, pagePath.length).join("")
  }

  const menuItem = document.getElementById(`${pagePath}-link`)

  console.log("path", pagePath)
  menuItem.classList.add('active-menu-item')
}

// const shadeText = () => {
//   const content = document.getElementById("content").firstChild()
//   content.classList.remove("content-hidden")
//   content.classList.add("content-visible")
// }




const setup = () => {
  activateCurrentMenuLink()
  setMenuAnimations()
  // shadeText()
}

window.onload = setup()