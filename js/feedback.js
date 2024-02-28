let findex = 0
let interval=null
const elements = document.querySelectorAll(".section-feedback-item")
const felements = ["#Laura", "#Magda", "#Vicky", "#Hasan"]
const fselector = document.querySelector(".section-feedback-wrapper")
fselector.addEventListener("click", (e) => {
    const target = e.target
    clearInterval(interval)
    interval=createInterval()
    if (target.classList.contains("section-feedback-item") ||
        target.classList.contains("section-feedback-img")) {
        const id = target.closest("li").dataset.carusel
        findex=felements.findIndex(item => item===id)
        const elem = document.querySelector(id)
        const active = elem.closest("ul").querySelector(".active")
        active.classList.remove("active")
        elem.classList.add("active")
    }
    if (target.classList.contains("section-feedback-btn") ||
        target.classList.contains("arrow")) {
        if ((target.id === "left" || target.id==="arrow-left")) {
            const activelem = document.querySelector(felements[findex])
            activelem.classList.remove("active")
            findex=findex?findex-=1:elements.length-1
            const element = document.querySelector(felements[findex])
            element.classList.add("active")
        }
        if ((target.id === "right" || target.id==="arrow-right")) {
            const activelem = document.querySelector(felements[findex])
            activelem.classList.remove("active")
            findex=(findex===elements.length-1)?0:findex+=1
            const element = document.querySelector(felements[findex])
            element.classList.add("active")
        }
     /*   if (!findex && target.id === "left") {
            console.log(findex)
            const activelem = document.querySelector(felements[findex])
            activelem.classList.remove("active")
            findex = elements.length - 1
            const element = document.querySelector(felements[findex])
            element.classList.add("active")
        }
        */
    }
})
interval=createInterval()
function createInterval(){
    return setInterval(() => {
        const activelem = document.querySelector(felements[findex])
        activelem.classList.remove("active")
        findex=(findex===elements.length-1)?0:findex+=1
        const element = document.querySelector(felements[findex])
        element.classList.add("active")
    }, 4000, )
}