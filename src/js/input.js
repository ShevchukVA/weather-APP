import refs from './refs.js';
import './fetchWeatherData.js';
import forecastData from './fetchWeatherData.js';
import dateBlock from './createDateBlock.js';
import oneDayTemplate from './oneDayTemplate';
import backImg from './backgroundImage.js';
import { bookmarks, downloadBookmarks, updateBookmarks } from './bookmarks';
import { cityValidationAddBookmark } from './cityValidation.js';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import templateOneDay from '../handlebars/oneDayOfFiveDay.hbs';
import getObj from './create5dayObj';
import oneHourlyForecast from './../handlebars/oneHourlyForecast.hbs';
import { preloader } from './preloader.js';


export function handleInput() {
  refs.inputRef.addEventListener('submit', e => {
    e.preventDefault();
    preloader();
    const searchValue = e.currentTarget.elements.search.value;
    //Блок з датою, світанком та заходом сонця
    oneDayTemplate(searchValue);
    forecastData.getForecast(searchValue).then(city => {
      if (city['cod'] === '404' || !searchValue) {
        error({ title: 'NOTICE!', text: "Can't show such city!" });
      } else {
        dateBlock(city);
      }
    });

    // Блок з прогнозом погоди на 5 днів
   
    forecastData.getForecastFiveDays(searchValue).then(forecast => {
      
      const objWithWeather = getObj(forecast);
      document.querySelector('.five-day-section__list').innerHTML = '';
      document
        .querySelector('.five-day-section__list')
        .insertAdjacentHTML('beforeend', templateOneDay(objWithWeather));

    // Додавання рандомної картинки на бекграунд

    console.log(
      backImg.getImage(searchValue).then(image => {
        if (image.length === 0) {
          error({ title: 'Sorry!', text: 'The picture is not uploaded!' });
        }
        const randomImage =
          image[Math.floor(Math.random() * image.length)].largeImageURL;
        console.log(
          (refs.weatherBlock.style.backgroundImage = `url(${randomImage})`),
        );
      }),
    );
  });

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
      }
    });
  });
})}
