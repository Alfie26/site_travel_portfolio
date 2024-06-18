const wrapper = document.querySelector('.wrapper');
const btnpopup = document.querySelector('.btnLogin-popup')
const iconClose = document.querySelector('.icon-close');
const iconClose1 = document.querySelector('.icon-close1');

btnpopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup')
})

btnpopup.addEventListener('click', ()=> {
  wrapperS.classList.remove('active-popup')
})

iconClose.addEventListener('click', ()=> {
  wrapperS.classList.remove('active-popup')

})

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup')

})



const wrapperS = document.querySelector('.search-wrapper');
const search = document.querySelector('.search')


search.addEventListener('click', ()=> {
  wrapperS.classList.add('active-popup')
})

search.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup')
})

iconClose1.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup')
})

iconClose1.addEventListener('click', ()=> {
  wrapperS.classList.remove('active-popup')
})




