const more_setting = document.querySelector(".log-sign")
const link = document.querySelector(".more_sett")
const delete_stting = document.querySelector(".account-icon")

console.log(delete_stting);


link.addEventListener("click", ()=>{
    // more_setting.style.transition = "2s"
    more_setting.classList.toggle("active")
})

