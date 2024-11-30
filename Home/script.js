const search_bar = document.querySelectorAll(".search-section")

search_bar.forEach(element => {
    element.addEventListener("click", ()=>{
        search_bar.style.backgroundColor = "green"
    })
});
