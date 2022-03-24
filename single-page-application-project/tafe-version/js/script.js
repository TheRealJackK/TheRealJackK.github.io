// One page function
    //  |
    //  V
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

    // Display one page at a time
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

// Active Menu
    //  |
    //  V
    // Detect the click event on the ID
    document.getElementById("mostpop").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
    // Detect the click event on the ID
    document.getElementById("40k").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
    // Detect the click event on the ID
    document.getElementById("aos").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
    // Detect the click event on the ID
    document.getElementById("m-e").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
    // Detect the click event on the ID
    document.getElementById("b-l").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
    // Detect the click event on the ID
    document.getElementById("r-b").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('nav-link')) {
        // Add background to show active link
        this.classList.add('bg-danger')
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
    }
})
    // Removes all active links
    // Detect the click event on the ID
    document.getElementById("home").addEventListener('click', function () {
        // Checks to see if nav class is applied
        if (this.classList.contains('navbar-brand')) {
        // Removes background from other links
        document.getElementById("mostpop").classList.remove('bg-danger')
        document.getElementById("40k").classList.remove('bg-danger')
        document.getElementById("aos").classList.remove('bg-danger')
        document.getElementById("m-e").classList.remove('bg-danger')
        document.getElementById("b-l").classList.remove('bg-danger')
        document.getElementById("r-b").classList.remove('bg-danger')
    }
})
          
// Community Redirect
function redirect() {
    window.location.href = "https://www.warhammer-community.com"
}

function cartConfirm() {
    alert("Added to Cart")
}