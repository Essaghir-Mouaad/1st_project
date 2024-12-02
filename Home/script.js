const more_setting = document.querySelector(".log-sign")
const link = document.querySelector(".more_sett")
const delete_stting = document.querySelector(".account-icon")


link.addEventListener("click", ()=>{
    more_setting.classList.toggle("active")
})


//This code for the  scrolling part otherwise {when we scroll two links up the page hidden}

let lastScrollTop = 0; 
const navLinks = document.querySelector('.separate'); 

window.addEventListener('scroll', () => {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(currentScrollTop);
    
  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    navLinks.classList.add('hidden');
    
  } else {
    // Scrolling up
    navLinks.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Ensure we don't get negative values
});

