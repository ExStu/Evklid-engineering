new Accordion('.accordion-list',{
  collapsible: 'true',
  duration: '500',
  elementClass: 'accordion',
  triggerClass: 'accordion__btn',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

const container = document.querySelector(".container")
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  
});

let tabsBtn = document.querySelectorAll('.workflow__step');
let tabsItem = document.querySelectorAll('.workflow-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('workflow__step--active')});
    e.currentTarget.classList.add('workflow__step--active');

    tabsItem.forEach(function(element){ element.classList.remove('workflow-content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('workflow-content--active');
  });
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

}
)

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

let searchBtn = document.querySelector('.search__btn');
let searchForm = document.querySelector('.header__search__form');
let searchClose = document.querySelector('.search__close');

searchBtn.addEventListener('click',

function() {

  searchForm.classList.toggle('active');
  searchBtn.classList.remove('active');

});

searchClose.addEventListener('click',

function() {

  searchForm.classList.remove('active');
  searchBtn.classList.add('active');
  event.preventDefault();

})
