const newsImgs=[{
    url: "/img/news/img1.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img2.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img3.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img4.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img5.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img6.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img7.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
},
{
    url: "/img/news/img8.jpg",
    date: new Date().getDate(),
    month: new Date().getMonth(),
    title: "Amazing Blog Post",
    createdBy: "admin",
    comments: Math.floor(Math.random()*100)
}]
const months=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const newssel=document.querySelector("#news-list") 
    newssel.insertAdjacentHTML("beforeend", `${newsImgs.map(item => {
    return `<li class="section-news-item"> <img src="${item.url}">
     <h6 class="section-news-title"> ${item.title} </h6>
     <div class="section-news-date-wrapper">
     <p class="section-news-date"> ${item.date} </p>
     <p class="section-news-date"> ${months[item.month]} </p>
     </div>
     <div class="section-news-text-wrapper">
     <p class="section-news-subtitle">By ${item.createdBy}</p>
     <p class="section-news-subtitle"> | </p>
     <p class="section-news-subtitle">${item.comments} comments</p>
     </div>
     </li> `
    }).join("")} `)
