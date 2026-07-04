document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("reservation-submission")


    form.addEventListener("submit", event=>{


        // 2. Get the form data
        const formData = new FormData(form);

        const dataObject = Object.fromEntries(formData.entries());

        // 4. Save to localStorage
        localStorage.setItem("User-Data", JSON.stringify(dataObject));

        console.log("Data saved to localStorage!");
    })
})