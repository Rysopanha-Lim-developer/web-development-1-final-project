document.addEventListener("DOMContentLoaded", () =>{
    
    if(window.location.pathname.includes("reservation_heng.html")){
        
        const reservationForm = document.getElementById("reservation-submission")

        reservationForm.addEventListener("submit", event=>{

            // 1. Get the form data
            const formData = new FormData(reservationForm);

            const dataObject = Object.fromEntries(formData.entries());

            // 2. Save to localStorage and sessionStorage
            sessionStorage.setItem("User-Data", JSON.stringify(dataObject));
            localStorage.setItem("User-Data", JSON.stringify(dataObject));

            console.log("Data has been saved to localStorage");
        })
    }
    else if(window.location.pathname.includes("login.html")){

        const loginForm = document.getElementById("login-submission")

        const adminName = ["Lim_Rysopanha", "Rith_Lyheng", "Ban_Monynet", "Sok_Piseth", "Kimhak", "Khemarin"]

        const passwordForAllAdmin = "TNAOT168168"

        loginForm.addEventListener("submit", event=>{
            event.preventDefault()

            const loginData = new FormData(loginForm)
            const loginObj = Object.fromEntries(loginData.entries())
            console.log(loginObj)

            if((adminName.includes(loginObj.username) && loginObj.password === "TNAOT168168")&& loginObj.admin){
                window.location.href = "admin.html"
            }
            else{
                window.location.href = "home_seth_ren.html"
            }
        })
    }
})