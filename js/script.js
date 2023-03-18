//Menu Button
const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');

menu.addEventListener("click", () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

//Search Bar
const searchBar = document.querySelector('#search-icon');
const searchField = document.querySelector('header .search-bar');

searchBar.addEventListener("click", () => {
    searchField.classList.toggle('active');
});

//Theme Toggler
const themeToggler = document.querySelector('.theme-toggler');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    const color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

//onScroll Window
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  searchField.classList.remove('active');
  themeToggler.classList.remove('active');
}

//Homepage Swiper
var swiper = new Swiper(".home-slider", {
  grabCursor:true,
  loop:true,
  autoHeight:true,
  autoplay: {
      delay:5000,
      disableOnInteraction: false,
  }
});

//TOP 10 Trending on Anime Swiper
var swiper = new Swiper(".anime-slider", {
  slidesPerView: 5,
  grabCursor:true,
  loop:true,
  autoHeight: true,
  spaceBetween: 0,
  breakpoints: {
  0: {
      slidesPerView: 2,
  },
  650: {
      slidesPerView: 3,
  },
  960: {
      slidesPerView: 3,
  },
  1300: {
      slidesPerView: 4,
  },
  1610: {
      slidesPerView: 5,
  }
  },
});

//Popular Anime on Philippines Slider
var swiper = new Swiper(".popular-slider", {
  slidesPerView: 5,
  grabCursor:true,
  loop:true,
  autoHeight: true,
  spaceBetween: 0,
  breakpoints: {
  0: {
      slidesPerView: 2,
  },
  650: {
      slidesPerView: 3,
  },
  960: {
      slidesPerView: 3,
  },
  1300: {
      slidesPerView: 4,
  },
  1610: {
      slidesPerView: 5,
  }
  },
});

//Others you might like Swiper
var swiper = new Swiper(".others-slider", {
  slidesPerView: 5,
  grabCursor:true,
  loop:true,
  autoHeight: true,
  spaceBetween: 0,
  breakpoints: {
  0: {
      slidesPerView: 2,
  },
  650: {
      slidesPerView: 3,
  },
  960: {
      slidesPerView: 3,
  },
  1300: {
      slidesPerView: 4,
  },
  1610: {
      slidesPerView: 5,
  }
  },
});







