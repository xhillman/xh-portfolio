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
  const links = document.getElementsByClassName("social-icons");
  for (const link of links) {
    link.addEventListener("mouseenter", function () {
      this.attributes.stroke.value = "var(--xh-white)"
      this.style.scale = "1.1"
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

const canvas = document.getElementById("particle-canvas")
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArr;

// get mouse position
let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) + (canvas.width / 80)
}

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = event.y;
})

// create particles
class Particle {
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    context.fillStyle = "rgb(238, 238, 238, 0.1)"
    context.fill();
  }
  update() {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < mouse.radius + this.size) {
      if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
        this.x += 10;
      }
      if (mouse.x > this.x && this.x > this.size * 10) {
        this.x -= 10;
      }
      if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
        this.y += 10;
      }
      if (mouse.y > this.y && this.y > this.size * 10) {
        this.y -= 10;
      }
    }
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw()
  }
}

const createParticles = () => {
  particlesArr = [];
  let numParticles = (canvas.height * canvas.width) / 55000;
  for (let i = 0; i < numParticles; i++) {
    let size = (Math.random() * 3) + 1;
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
    let directionX = (Math.random() * 1 - 0.5);
    let directionY = (Math.random() * 1 - 0.5);
    let color = "rgb(238, 238, 238, 0.5)"
    particlesArr.push(new Particle(x, y, directionX, directionY, size, color))
  }
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  context.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArr.length; i++) {
    particlesArr[i].update();
  }
}

const setup = () => {
  activateCurrentMenuLink()
  setMenuAnimations()
  setSocialAnimations()
  // activateHamburgerMenu()
}

createParticles();
animateParticles();

window.onload = setup()

