
//variables
const searchBarWrapperItem = document.querySelector('.search-wrapper');
const magnifyItem = document.querySelector('.magnify');

//here I added an eventListener to give the code functionality
magnifyItem.addEventListener('click', ()=>{
    searchBarWrapperItem.classList.toggle('active');
});



