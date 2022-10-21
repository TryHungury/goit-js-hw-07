import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery')
// console.log("🚀galleryRef", galleryRef);

// const createUlRef = `<ul class = gallery_list> </ul>`;
// galleryRef.insertAdjacentHTML('beforeend', createUlRef);

// const ulRef = document.querySelector('.gallery_list')
// console.log("🚀ulRef", ulRef)

const instance = basicLightbox.create(
    `<img class = 'modal__img' src="#" width="1240">`
)

const makeItemMarkup = (galleryItems) => {
    const imgMarkup = galleryItems.map(({preview, original, description})=>{
      return `<div class = gallery__item>
      <a class = gallery__link href = "${original}">
      <img src="${preview}" alt="${description}" data-source="${original}" class = gallery__image>
      </img></a></div>` 
    })
    // console.log("🚀liMarkup", imgMarkup)
    
    return imgMarkup;
}

galleryRef.insertAdjacentHTML('afterbegin', makeItemMarkup(galleryItems).join(''))
// console.log("🚀makeItemMarkup", makeItemMarkup(galleryItems))
// console.log(galleryItems);

const clickOnImg = (e) => {
    e.preventDefault();

    if(e.target.nodeName !== 'IMG') {
        return;
    }
    
    const originalRef = e.target.dataset.source;

    instance.show()
    const modalImgRef = document.querySelector('.modal__img')
    modalImgRef.src = originalRef
    
    // console.log("🚀modalImgRef", modalImgRef)
    // console.log("🚀originalRef", originalRef)
}

galleryRef.addEventListener('click', clickOnImg);

