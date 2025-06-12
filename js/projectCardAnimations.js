function setProjectCardAnimations() {
    console.log("loading project card animations...")
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
    console.log("animations loaded!")
}

setProjectCardAnimations()
