import Dishes from "./server.js";
 
import simpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";




 
const galleryEls = document.querySelector('.gallery-recipes'); 
const searchForm = document.querySelector('#search-form')
const newDishes = new Dishes();
searchForm.addEventListener('submit', onSearchFood)

function onSearchFood(e){
    e.preventDefault();
    newDishes.querry = e.currentTarget.elements.searchQuery.value.trim()
    newDishes.findDish().then(response => {
        response.data.results 
        console.log(response.data.results)

         const markupGaleryRecipes = createMarkupGalleryEls(response.data.results)
        galleryEls.insertAdjacentHTML('beforeend', markupGaleryRecipes)
        let lightbox = new SimpleLightbox('.gallery__item', {
           
        });

    })
}
 
function createMarkupGalleryEls(e) {
    return e.map(({image,title }) => {
        return `
          <div class="recipe-card">
         <a class="gallery__item"
        href= "${image}" >
      <div class="wrapper-img"><img src="${image}" alt="img" loading="lazy" /></div>



  

  <div class="recipe-title">"${title}"</div>   

</div>
  `
})
.join('');
}