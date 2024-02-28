const selector=document.querySelector("#services")
selector.addEventListener("click", (e) => {
    const target=e.target
    if (target.classList.contains("section-services-item")) {
        const id=target.dataset.tab
        const element=document.querySelector(id)
        const parrent=target.closest("ul")
        const active=parrent.querySelector(".active")
        const parrent2=element.closest("ul")
        const active2=parrent2.querySelector(".active")
        active.classList.remove("active")
        target.classList.add("active")
        active2.classList.remove("active")
        element.classList.add("active")
    }
})