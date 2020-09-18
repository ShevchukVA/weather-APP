import refs from './refs';
import {cityValidationAddBookmark} from './cityValidation.js';
import {getCarusel, getCaruselHours} from './slick-carus.js';

export let bookmarks = [];

const exampleTemplate = bookmark => {
  return `<li class="bookmarks__item">${bookmark}<button class="bookmarkcCloseBtn"></button></li>`;
};

export const downloadBookmarks = () => {
  if (localStorage.getItem('city')) {
    bookmarks = JSON.parse(localStorage.getItem('city'));
    const bookmarksTemplate = bookmarks
      .map(bookmark => exampleTemplate(bookmark))
      .map(item => refs.bookmarkRef.insertAdjacentHTML('beforeend', item));
      if(bookmarks.length >= 1){
        getCarusel('.bookmarks__list');
      }
  }
};

export const updateBookmarks = city => {
  if (!bookmarks.includes(city)) {
    bookmarks.push(city);
    localStorage.setItem('city', JSON.stringify(bookmarks));
    refs.bookmarkRef.insertAdjacentHTML('beforeend', exampleTemplate(city));
  };
  getCarusel('.bookmarks__list');
}


refs.bookmarkBtnRef.addEventListener('click', () => {
  const searchValue = refs.inputRef.search.value;
  cityValidationAddBookmark(searchValue);
  refs.inputRef.search.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  downloadBookmarks();
  refs.bookmarkRef.addEventListener('click', e => {
    if (Object.values(e.target.classList).includes('bookmarkcCloseBtn')) {
      e.target.parentElement.remove();
      const value = e.target.parentElement.textContent;
      bookmarks = JSON.parse(localStorage.getItem('city'));
      bookmarks.map(el=>{
        if(value === el){
          const index = bookmarks.indexOf(el);
        bookmarks.splice(index, 1);
        localStorage.setItem('city', JSON.stringify(bookmarks));
               }
      });
  };
});
})