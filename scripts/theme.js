const header = document.querySelector(".header")
const main = document.querySelector(".main")
const footer = document.querySelector(".footer")
const menu1 = document.querySelector("#menu")
const links = document.querySelectorAll(".nav__link")
const logo = document.querySelectorAll(".logo")

let color = '';
let navColor = '';


if (localStorage.getItem('bg-color') !== null) {
    color = localStorage.getItem('bg-color')
    header.style.background = color
    footer.style.background = color

}
if (localStorage.getItem('link-color') !== null) {
    navColor = localStorage.getItem('link-color')
    links.forEach((el) => {
        el.style.color = navColor

    })

}

function choiceDark() {
            header.style.background = "black"
            header.style.transition = "0.3s ease-out 0.5s"
            main.style.background = "lightgrey"
            main.style.transition = "0.3s ease-out 0.5s"
            footer.style.background = "black"
            footer.style.transition = "0.3s ease-out 0.5s"
            menu1.style.background = "grey"
            menu1.style.transition = "0.3s ease-out 0.5s"

            links.forEach((el) => {
                el.style.color = "lightgrey"
                el.style.transition = "0.3s ease-out 0.5s"

            })
            logo.forEach((el) => {
                el.style.color = "lightgrey"
                el.style.transition = "0.3s ease-out 0.5s"
            })
            localStorage.setItem("bg-color", "black")
            localStorage.setItem('link-color', 'lightgrey')

        }
function choiceLight() {
            header.style.background = ""
            header.style.transition = "0.3s ease-out 0.5s"
            main.style.background = ""
            main.style.transition = "0.3s ease-out 0.5s"
            footer.style.background = ""
            footer.style.transition = "0.3s ease-out 0.5s"
            menu1.style.background = ""
            menu1.style.transition = "0.3s ease-out 0.5s"

            links.forEach((el) => {
                el.style.color = ""
                el.style.transition = "0.3s ease-out 0.5s"
            })
            logo.forEach((el) => {
                el.style.color = ""
                el.style.transition = "0.3s ease-out 0.5s"
            })
            localStorage.setItem("bg-color", "White")
            localStorage.setItem('link-color', 'black')
        }
    