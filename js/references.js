const referencesImages=[{
    url: "/img/graphicdesign/graphic-design1.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design2.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design3.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design4.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design5.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design6.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design7.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design8.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design9.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design10.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design11.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/graphicdesign/graphic-design12.jpg",
    category: "graphic",
    title: "CREATIVE DESIGN",
    text: "Graphic Design",
},
{
    url: "/img/webdesign/web-design1.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design2.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design3.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design4.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design5.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design6.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/webdesign/web-design7.jpg",
    category: "web",
    title: "CREATIVE DESIGN",
    text: "Web Design",
},
{
    url: "/img/wordpress/wordpress1.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress2.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress3.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress4.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress5.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress6.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress7.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress8.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress9.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/wordpress/wordpress10.jpg",
    category: "wordpress",
    title: "CREATIVE DESIGN",
    text: "Wordpress",
},
{
    url: "/img/landingpage/landing-page1.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page2.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page3.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page4.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page5.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page6.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
{
    url: "/img/landingpage/landing-page7.jpg",
    category: "landing",
    title: "CREATIVE DESIGN",
    text: "Landing page",
},
]
function shuffle(referencesImages) {
    let currentIndex=referencesImages.length
    let randomIndex=0
    let temp=0

    while (currentIndex) {
        currentIndex-=1
        randomIndex=Math.floor(Math.random()*currentIndex)
        temp=referencesImages[currentIndex]
        referencesImages[currentIndex]=referencesImages[randomIndex]
        referencesImages[randomIndex]=temp
    }
    return referencesImages
}
const shuffled=shuffle(referencesImages)
let counter=1
let index=12
let array=shuffled.toSpliced(index, shuffled.length-index)
const selectored=document.querySelector("#references-img")
const tabselector=document.querySelector("#references-tab")
const btnselector=document.querySelector(".references-load-btn")
function rendered (selectored, array) { 
    selectored.innerHTML=" "
    selectored.insertAdjacentHTML("beforeend", `${array.map(item => {
    return `<li data-category="${item.category}" class="references-item"> <img src="${item.url}">
     <div class="references-hover-wrapper"> 
     <div class="references-btn"> 
     <button class="references-button chain">
     <i class="fas fa-link our-work-icon"></i></button> 
     <button class="references-button square">
     <i class="far fa-square our-work-icon"></i></button> 
     </div>
     <p class="references-item-title"> ${item.title} </p>
     <p class="references-item-text"> ${item.text} </p> 
     </div> 
     </li> `
}).join("")} `)
}
rendered (selectored, array)
tabselector.addEventListener("click", (e) => {
    const target=e.target
    if (target.classList.contains("section-references-item")) {
        const id=target.id
        const parrent=target.closest("#references-tab")
        const active=parrent.querySelector(".active")
        active.classList.remove("active")
        target.classList.add("active")
        const element=document.querySelector("#references-img")
        let newArray=array.filter(({category}) => category===id)
        if (id==="all") {
            newArray=array
        }
        rendered(element, newArray)
    }
})
btnselector.addEventListener("click", (e) => {
    counter+=1
    index*=counter
    array=shuffled.toSpliced(index, shuffled.length-index)
    const parrent=document.querySelector("#references-img")
    const referencestab=document.querySelector("#references-tab .active")
    const id=referencestab.id
    if (id!=="all") {
        const filtered=array.filter(({category}) => category===id)
        rendered(parrent, filtered)
    }
    if (id==="all") {
        rendered(parrent, array)
    }
    if (counter===3) {
        btnselector.classList.add("hide")
    }
console.log(referencestab)
})