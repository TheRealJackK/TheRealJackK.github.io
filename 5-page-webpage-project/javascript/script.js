console.log('JS Is Working!')

//* Injecting Header w/ fetch

fetch("/html/header.html")
    .then(response =>{
        return response.text()
    })
    .then(data => {
        document.querySelector("header").innerHTML = data;
    });

//* Injecting Footer w/ fetch

fetch("/html/footer.html")
    .then(response =>{
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

//* Injecting Navbar w/ fetch

fetch("/html/navbar.html")
    .then(response =>{
        return response.text()
    })
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });

//* Redirect for Price Page

function redirect() {
    window.location.href = "enquirypage.html"
}