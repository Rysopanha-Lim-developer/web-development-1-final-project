const form = document.getElementById("reservation-submission")


form.addEventListener("submit", event=>{

    // 1. Stop the page from reloading
    event.preventDefault();

    // 2. Get the raw data
    const formData = new FormData(form);

    // 3. Convert to a plain object (This makes it JSON-friendly)
    const dataObject = Object.fromEntries(formData.entries());

    // 4. Save to localStorage
    sessionStorage.removeItem("User-Data", JSON.stringify(dataObject));

    console.log("Data saved to localStorage!");
})