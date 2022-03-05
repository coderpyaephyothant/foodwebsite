let menuTag = document.querySelector('#menu-bars');
let navbarTag = document.querySelector(".navbar");
let searchTag = document.querySelector("#search-icon");
let formtag = document.querySelector("#search-form");
let closeTag = document.querySelector("#close");

menuTag.addEventListener("click",()=>{
    menuTag.classList.toggle("fa-times");
    navbarTag.classList.toggle("active2");
})

window.onscroll = () => {

    navbarTag.classList.remove("active2");
    // menuTag.classList.remove("fa-times")

    let section = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header .navbar a')
    // console.log( section,navlinks);

    
    section.forEach(sec => { /* sec is the parameter for each section such as home... dishes..about...etc */
      let top = window.scrollY;
      // console.log('this is scrollY',top)
      let height = sec.offsetHeight;
      let offset = sec.offsetTop-150;
      let idd = sec.getAttribute("id");
      if (top >= offset && top < height + offset) {
        navlinks.forEach(link => {
          link.classList.remove("active");
          document.querySelector('header .navbar a[href*='+idd+']').classList.add("active"); /* note that for classList add formula */
          console.log(idd)
        });
      }
    });
}

searchTag.addEventListener("click", ()=> {
    formtag.classList.toggle("active3")
})

closeTag.addEventListener("click", ()=> {
    formtag.classList.remove("active3")
})

var swiper = new Swiper(".home-slider", {
    spaceBetween: 130,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });
  let loaderTag = document.querySelector('.loader-container');
  const loader = () => {
    loaderTag.classList.add("fade-out");
  }

  const fadeOut = () => {
    setInterval(loader, 2000);
  }

  window.onload = fadeOut;