function setProjectCardAnimations() {
    const cards = document.getElementsByClassName("project-card");
    for (const card of cards) {
        card.addEventListener("mouseenter", function () {
            for (const card of cards) {
                if (card !== this) {
                    card.classList.add("inactive-project-card");
                }
            }
        })
        card.addEventListener("mouseleave", function () {
            for (const card of cards) {
                card.classList.remove("inactive-project-card");
            }
        })
    }
}

// const cards = document.getElementsByClassName("project-card-overlay")
// console.log(cards)
// for (const card of cards) {
//         card.addEventListener("mouseenter", function () {
//         this.classList.add("active")
//     })
//     card.addEventListener("mouseleave", function () {
//         console.log(this)
//         this.classList.remove("active")
//     })

// }

// setProjectCardAnimations()
