//Resoponsive interaction

document.addEventListener('DOMContentLoaded', () => {

    const currentWindow = window.location.pathname

    console.log(currentWindow)

    try{
        if(currentWindow.includes("home_seth_ren.html")){
            const displayData = JSON.parse(sessionStorage.getItem("User-Data"))

            window.alert(`Greeting Mr/Mrs ${displayData.name}, Your table has been reserved.`)

            sessionStorage.removeItem("User-Data")
        }
        else if(!currentWindow.includes("home_seth_ren.html")){
            throw new Error("There is no new reservation yet.");
            
        }
    }
    catch(error){   
        console.log(error)
    }

    //list toggle
    const toggler = document.getElementById("toggler");
    const miniList = [...document.querySelectorAll("#mini-list")]

    toggler.addEventListener("click", ()=>{
        toggler.classList.toggle("spin")
        miniList.forEach(element => {
            element.classList.toggle("shown")
        });
    })

    
    const navbarDropper = document.getElementById("nav-dropper")
    const navbarRetracker = document.getElementById("nav-retract")
    const navbar = document.getElementById("nav-bar")
    const header = document.getElementById("header")

    navbarDropper.addEventListener("click", ()=>{
        header.classList.add("dropdown")
        navbar.removeAttribute('inert')
        navbar.classList.add('show')
        navbarDropper.classList.add('close')
        navbarRetracker.classList.add('open')
    })
    navbarRetracker.addEventListener("click", ()=>{
        header.classList.remove("dropdown")
        navbar.setAttribute('inert', '')
        navbar.classList.remove('show')
        navbarDropper.classList.remove('close')
        navbarRetracker.classList.remove('open')
    })

});