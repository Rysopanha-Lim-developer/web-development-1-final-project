const toggler = document.getElementById("toggler");
const miniList = [...document.querySelectorAll("#mini-list")]

toggler.addEventListener("click", ()=>{
    toggler.classList.toggle("spin")
    miniList.forEach(element => {
        element.classList.toggle("shown")
    });
})