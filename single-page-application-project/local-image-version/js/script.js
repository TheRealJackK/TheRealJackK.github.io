// One page function

// Make only homepage display on page load
window.onload = function hidePagesLoad() {
    let page1 = document.getElementById("page1")
    let page2 = document.getElementById("page2")
    let page3 = document.getElementById("page3")
    let page4 = document.getElementById("page4")
    let page5 = document.getElementById("page5")
    let page6 = document.getElementById("page6")
    let page7 = document.getElementById("page7")

    page1.style.display = "block"
    page2.style.display = "none"
    page3.style.display = "none"
    page4.style.display = "none"
    page5.style.display = "none"
    page6.style.display = "none"
    page7.style.display = "none"
}

function showPage(pageId) {
    // Hide all pages
    let pages = document.getElementsByClassName("pages")
    console.log("hiding pages")
    for (let page of pages) {
        page.style.display = "none"
    }

    // Show page with page id
    let pageToShow = document.getElementById(pageId)
    console.log("showing page")
    pageToShow.style.display = "block"
}

// Community Redirect
function redirect() {
    window.location.href = "https://www.warhammer-community.com"
}

function cartConfirm() {
    alert("Added to Cart")
}

// //* Injecting Header w/ fetch

// fetch("html/header.html")
//     .then(response =>{
//         return response.text()
//     })
//     .then(data => {
//         document.querySelector("header").innerHTML = data;
//     });

// //* Injecting Footer w/ fetch

// fetch("html/footer.html")
//     .then(response =>{
//         return response.text()
//     })
//     .then(data => {
//         document.querySelector("footer").innerHTML = data;
//     });