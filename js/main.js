search.addEventListener("click", function () {
    modal.classList.remove('hidden')
})

modalclose.addEventListener("click", function () {
    modal.classList.add('hidden')
})

var sidebtn = document.getElementById("sidebtn")
var closebtn = document.getElementById("closebtn")

sidebtn.addEventListener("click", function () {
    sidebar.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closebtn.addEventListener("click", function () {
    sidebar.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener("click", function () {
    sidebar.classList.add('hidden')
    overlay.classList.add('hidden')
})

var carousel = document.getElementById("carousel")
var thumbnails = document.getElementsByClassName("thumbnail")
var dots = document.getElementsByClassName("dot")
var indicator = document.getElementById("indicator")
var previousIndex = 0
var thisIndex = 0

function navigateTo() {
    thisIndex += 1

    // carousel.style.transform = `translate(-${thisIndex * imageWidth}px)`
    console.log()

    if (thisIndex === thumbnails.length) {
        thisIndex = 0
    }

    main.src = thumbnails[thisIndex].src

    dots[thisIndex].classList.add("active")
    dots[previousIndex].classList.remove("active")

    previousIndex = thisIndex
}

setInterval(navigateTo, 5000)


var topbtn = document.getElementById("topbtn")

window.addEventListener("scroll", function () {
    var sct = document.documentElement.scrollTop

    if (sct > 200) {
        topbtn.classList.remove('invisible')
    } else {
        topbtn.classList.add('invisible')
    }
})

topbtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0
})


