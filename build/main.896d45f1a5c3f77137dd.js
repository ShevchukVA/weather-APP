(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("JBxO"),n("FdtR"),n("0HMw");var a,o,r,i,l,s={keyApi:"4155ac6d3fb539e9f841172aed94674f",getForecast:function(e){var t="?q="+e+"&units=metric&appid="+this.keyApi;return fetch("https://api.openweathermap.org/data/2.5/weather"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastFiveDays:function(e){var t="?q="+e+"&units=metric&appid="+this.keyApi;return fetch("https://api.openweathermap.org/data/2.5/forecast"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastByCurrentPosition:function(e){var t="?lat="+e.lat+"&lon="+e.lon+"&units=metric&appid="+this.keyApi;return fetch("https://api.openweathermap.org/data/2.5/weather"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))},getForecastFiveDaysByCurrentPosition:function(e){var t="?lat="+e.lat+"&lon="+e.lon+"&units=metric&appid="+this.keyApi;return fetch("https://api.openweathermap.org/data/2.5/forecast"+t).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))}},c=(n("WB5j"),function(e,t){var n=t.getHours();0===n&&(n=24),12===n&&(a[r].weatherDay=e.weather[0].icon);var o=("0"+(n+t.getTimezoneOffset()/60)).slice("-2")+":00",i=e.weather[0].icon,l=Math.round(e.main.temp),s=e.main.pressure,c=e.main.humidity,u=e.wind.speed;a[r].time.push({localTime:o,weather:i,temperature:l,pressure:s,humidity:c,wind:u})}),u=function(e){a=[],o=0,r=-1,i=0;var t=e.list;for(var n in t){var s=t[n],u=new Date(1e3*s.dt);i=Math.round(s.main.temp);var m=u.getUTCDate();if(o!==m){o=m,r+=1;var d=u.toLocaleString("en",{weekday:"long"}),f=u.toLocaleString("en",{month:"short"});l=s.weather[0].icon,a.push({currentDay:m,nameOfDay:d,nameOfMonth:f,time:[],min:i,max:i,index:r,weatherDay:l}),c(s,u)}else a[r].min>Math.round(s.main.temp)&&(a[r].min=Math.round(s.main.temp)),a[r].max<Math.round(s.main.temp)&&(a[r].max=Math.round(s.main.temp)),c(s,u)}return a.length=5,a},m=(n("IvQZ"),n("JjHl"),n("4NM0"),n("UW/U")),d=n.n(m),f=n("qIEf"),h=n.n(f);n("IUJq"),n("dghS"),n("tLJb");function p(){h()(".five-day-section__list").not(".slick-initialized").slick({infinite:!1,draggable:!1,prevArrow:h()(".five-day-section-prev__btn"),nextArrow:h()(".five-day-section-next__btn"),slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}}]})}var y,v,g=function(e){document.querySelector(".five-day-section__list").addEventListener("click",(function(t){if(Object.values(t.target.classList).includes("five-day-section__item")){var n=document.querySelector(".item__hour"),a=t.target.dataset.index;n.innerHTML="",n.insertAdjacentHTML("beforeend",d()(e[a].time)),h()(".item__hour").not(".slick-initialized").slick({infinite:!1,draggable:!1,slidesToShow:7,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,infinite:!1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}}]})}}))},_=n("eI3V"),w=n.n(_),b=((y={inputRef:document.querySelector(".input-section__form"),bookmarkRef:document.querySelector(".bookmarks__list"),bookmarkBtnRef:document.querySelector(".input-section__bookmarkBtn"),dataBlockRef:document.querySelector(".data"),fiveDaysListRef:document.querySelector(".five-day-section__list"),oneDaySection:document.querySelector(".one-day-section"),locationName:document.getElementById("locationName"),locationWeather:document.getElementById("locationWeather"),todayTemperature:document.getElementById("todayTemperature"),todayMinTemperature:document.getElementById("todayMinTemperature"),todayMaxTemperature:document.getElementById("todayMaxTemperature"),weatherBlock:document.querySelector(".background-image"),commentTextContent:document.querySelector(".comments__content"),commentTextAuthor:document.querySelector(".comments__author"),monthRef:document.getElementById("currentMonth"),currentTimeRef:document.getElementById("timer"),currentDateRef:document.getElementById("currentDate"),sunriseRef:document.getElementById("sunrise"),sunsetRef:document.getElementById("sunset"),preloaderRef:document.getElementById("preload-img"),mainRef:document.querySelector(".main-section"),moreInfoBtnRef:document.querySelector(".five-day-section__button"),moreInfoRef:document.querySelector(".five-day-section__hourly-list"),todayRef:document.querySelector(".btn-wrap__todayBtn"),moreDaysRef:document.querySelector(".btn-wrap__5dayBtn"),fiveDaysSectionRef:document.querySelector(".five-day-section"),oneDaySectionTableRef:document.querySelector(".one-day-section__table"),commentsSectionRef:document.querySelector(".comments"),closeMoreInfoRef:document.querySelector(".hourly-weather-close"),listHourRef:document.querySelector(".list__hour")}).mainRef=document.getElementsByTagName("main"),y),k=function(){b.preloaderRef.classList.remove("none"),b.weatherBlock.classList.add("none")},S=function(){setTimeout((function(){b.preloaderRef.classList.add("none"),b.weatherBlock.classList.remove("none")}),2e3)},T=function(e){document.querySelector(".five-day-section__list").innerHTML="",document.querySelector(".five-day-section__list").insertAdjacentHTML("beforeend",w()(e)),g(e),S()},R=(n("iPZ8"),n("kypl"),n("pCzD"),n("4owi"),n("/YXa"),n("D/wG"),n("9UJh"),n("WoWj"),n("U00V"),function(e){b.locationWeather.src="https://openweathermap.org/img/wn/"+e.weather[0].icon+"@2x.png",b.locationName.textContent=e.name+", "+e.sys.country,b.todayTemperature.textContent=Math.round(e.main.temp),b.todayMinTemperature.textContent=Math.round(e.main.temp_min),b.todayMaxTemperature.textContent=Math.round(e.main.temp_max)});n("e+qc");var L=function(e){clearInterval(v);var t=new Date(1e3*e.sys.sunrise).getTime()+6e4*new Date(1e3*e.sys.sunrise).getTimezoneOffset()+1e3*e.timezone,n=new Date(t),a=new Date(1e3*e.sys.sunset).getTime()+6e4*new Date(1e3*e.sys.sunset).getTimezoneOffset()+1e3*e.timezone,o=new Date(a);function r(e){return String(e).padStart(2,"0")}function i(){var t=new Date,n=t.getTime()+6e4*t.getTimezoneOffset()+1e3*e.timezone;return new Date(n)}b.currentDateRef.innerHTML=i().getDate()+"<sup>th</sup>"+i().toLocaleString("en",{weekday:"short"}),b.monthRef.innerHTML=i().toLocaleString("en",{month:"long"}),b.sunriseRef.innerHTML=r(n.getHours())+":"+r(n.getMinutes()),b.sunsetRef.innerHTML=r(o.getHours())+":"+r(o.getMinutes()),v=setInterval((function(){b.currentTimeRef.innerHTML=r(i().getHours())+":"+r(i().getMinutes())+":"+r(i().getSeconds())}),1e3)},D=n("QJ3N"),x=(n("bzha"),n("zrP5"),{keyApi:"17975511-a1a75a89facdad63fcb9c5ee1",getImage:function(e){var t="?image_type=photo&orientation=horizontal&q="+e+"&key="+this.keyApi;return fetch("https://pixabay.com/api/"+t).then((function(e){return e.json()})).then((function(e){return e.hits})).catch((function(e){return e}))}}),M=function(e){x.getImage(e).then((function(e){var t=e[Math.floor(Math.random()*e.length)].largeImageURL;b.weatherBlock.style.backgroundImage="url("+t+")"}))};n("uQK7"),n("lmye"),n("Xlt+"),n("Muwe"),n("X5mX");var I=[],q=function(e){return'<li class="bookmarks__item">'+e+'<button class="bookmarkcCloseBtn"></button></li>'},B=function(){if(localStorage.getItem("city"))(I=JSON.parse(localStorage.getItem("city"))).map((function(e){return q(e)})).map((function(e){return b.bookmarkRef.insertAdjacentHTML("beforeend",e)}));var e;I.length>=2&&(e=".bookmarks__list",h()(e).slick({infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1}},{breakpoint:767,settings:{slidesToShow:2,slidesToScroll:1}}]}))},O=function(e){I.includes(e)||(I.push(e),localStorage.setItem("city",JSON.stringify(I)),b.bookmarkRef.insertAdjacentHTML("beforeend",q(e)))};function E(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}b.bookmarkBtnRef.addEventListener("click",(function(){!function(e){s.getForecast(e).then((function(t){"404"!==t.cod&&e?O(e):Object(D.error)({title:"Oh No!",text:"Wrong city!"})}))}(b.inputRef.search.value),b.inputRef.search.value=""})),document.addEventListener("DOMContentLoaded",(function(){B(),b.bookmarkRef.addEventListener("click",(function(e){if(Object.values(e.target.classList).includes("bookmarkcCloseBtn")){e.target.parentElement.remove();var t=e.target.parentElement.textContent;(I=JSON.parse(localStorage.getItem("city"))).map((function(e){if(t===e){var n=I.indexOf(e);I.splice(n,1),localStorage.setItem("city",JSON.stringify(I))}}))}if(Object.values(e.target.classList).includes("bookmarks__item")){k();var n=e.target.textContent;s.getForecast(n).then((function(e){C(e)})),s.getForecastFiveDays(n).then((function(e){var t=u(e);T(t)}))}}))}));var C=function(e){for(var t,n=E(b.bookmarkRef.children);!(t=n()).done;){var a=t.value;a.classList.contains("orange")&&a.classList.remove("orange")}if(R(e),L(e),M(e.name),document.getElementById("cityInput").value=e.name,I.includes(e.name))for(var o,r=E(b.bookmarkRef.children);!(o=r()).done;){var i=o.value;i.textContent===e.name&&i.classList.add("orange")}};b.inputRef.addEventListener("submit",(function(e){e.preventDefault(),k();var t=e.currentTarget.elements.search.value;s.getForecast(t).then((function(e){C(e)})),S(),b.moreDaysRef.addEventListener("click",(function(){s.getForecastFiveDays(t).then((function(e){var t=u(e);T(t),h()(".input-list").not(".slick-initialized").slick({infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1}}]})}))}))}));var W=[{quote:"Just for the record, the weather today is calm and sunny, but the air is full of bullshit.",author:"Chuck Palahniuk"},{quote:"The sun did not shine. It was too wet to play. So we sat in the house. All that cold, cold, wet day.",author:"Dr. Seuss"},{quote:"After three days men grow weary, of a wench, a guest, and weather rainy.",author:"Benjamin Franklin"},{quote:"Gonna be a real frog-strangling turd-floater.",author:"Charles Martin"},{quote:"Weather here in this part of the world is just as moody, just as subjective and disloyal, as people.",author:"Jackie Kay"}];setInterval((function(){var e=Math.floor(Math.random()*W.length);b.commentTextContent.textContent=W[e].quote,b.commentTextAuthor.textContent=W[e].author}),9e3),document.addEventListener("DOMContentLoaded",(function(){b.todayRef.classList.add("ative-btn"),b.moreDaysRef.classList.add("disactive-btn"),b.fiveDaysSectionRef.classList.add("visually-hidden")})),b.todayRef.addEventListener("click",(function(){b.todayRef.classList.remove("disactive-btn"),b.todayRef.classList.add("active-btn"),b.moreDaysRef.classList.remove("active-btn"),b.moreDaysRef.classList.add("disactive-btn"),b.fiveDaysSectionRef.classList.add("visually-hidden"),b.dataBlockRef.classList.remove("visually-hidden"),b.oneDaySectionTableRef.classList.remove("visually-hidden"),b.commentsSectionRef.classList.remove("visually-hidden")})),b.moreDaysRef.addEventListener("click",(function(){b.todayRef.classList.add("disactive-btn"),b.moreDaysRef.classList.remove("disactive-btn"),b.moreDaysRef.classList.add("active-btn"),b.fiveDaysSectionRef.classList.remove("visually-hidden"),b.dataBlockRef.classList.add("visually-hidden"),b.oneDaySectionTableRef.classList.add("visually-hidden"),b.commentsSectionRef.classList.add("visually-hidden")})),b.closeMoreInfoRef.addEventListener("click",(function(){b.closeMoreInfoRef.classList.remove("active-hourly-weather-close"),b.listHourRef.classList.add("visually-hidden")})),new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)})).then((function(e){!function(e){var t=e.lat,n=e.lon;s.getForecastByCurrentPosition({lat:t,lon:n}).then((function(e){C(e)})),S(),b.moreDaysRef.addEventListener("click",(function(){s.getForecastFiveDaysByCurrentPosition({lat:t,lon:n}).then((function(e){var t=u(e);T(t),p()}))}))}({lat:e.coords.latitude,lon:e.coords.longitude}),k()})).catch((function(e){k(),s.getForecast("london").then((function(e){C(e)})),S(),b.moreDaysRef.addEventListener("click",(function(){s.getForecastFiveDays("london").then((function(e){var t=u(e);T(t),p()}))}))}))},"UW/U":function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="timeWeather">\r\n    <p class="timeWeather__time">'+c(typeof(r=null!=(r=u(n,"localTime")||(null!=t?u(t,"localTime"):t))?r:l)===s?r.call(i,{name:"localTime",hash:{},data:o,loc:{start:{line:3,column:33},end:{line:3,column:46}}}):r)+'</p>\r\n    <p class="timeWeather__temp">\r\n        <img src="http://openweathermap.org/img/wn/'+c(typeof(r=null!=(r=u(n,"weather")||(null!=t?u(t,"weather"):t))?r:l)===s?r.call(i,{name:"weather",hash:{},data:o,loc:{start:{line:5,column:51},end:{line:5,column:62}}}):r)+'@2x.png" alt="" class="timeWeather__temp-icon">\r\n        <span class="timeWeather__temperature">\r\n            '+c(typeof(r=null!=(r=u(n,"temperature")||(null!=t?u(t,"temperature"):t))?r:l)===s?r.call(i,{name:"temperature",hash:{},data:o,loc:{start:{line:7,column:12},end:{line:7,column:27}}}):r)+' &#176;</span>\r\n    </p>\r\n    <ul class="timeWeather__data">\r\n        <li class="timeWeather__item">\r\n            <p class="timeWeather__pressure">\r\n                '+c(typeof(r=null!=(r=u(n,"pressure")||(null!=t?u(t,"pressure"):t))?r:l)===s?r.call(i,{name:"pressure",hash:{},data:o,loc:{start:{line:12,column:16},end:{line:12,column:28}}}):r)+'mm</p>\r\n        </li>\r\n        <li class="timeWeather__item">\r\n            <p class="timeWeather__humidity">\r\n                '+c(typeof(r=null!=(r=u(n,"humidity")||(null!=t?u(t,"humidity"):t))?r:l)===s?r.call(i,{name:"humidity",hash:{},data:o,loc:{start:{line:16,column:16},end:{line:16,column:28}}}):r)+'%</p>\r\n        </li>\r\n        <li class="timeWeather__item">\r\n            <p class="timeWeather__wind">\r\n                '+c(typeof(r=null!=(r=u(n,"wind")||(null!=t?u(t,"wind"):t))?r:l)===s?r.call(i,{name:"wind",hash:{},data:o,loc:{start:{line:20,column:16},end:{line:20,column:24}}}):r)+" m/s</p>\r\n        </li>\r\n    </ul>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:24,column:9}}}))?r:""},useData:!0})},eI3V:function(e,t,n){var a=n("mp5j");e.exports=(a.default||a).template({1:function(e,t,n,a,o){var r,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="five-day-section__item" data-index='+c(typeof(r=null!=(r=u(n,"index")||(null!=t?u(t,"index"):t))?r:l)===s?r.call(i,{name:"index",hash:{},data:o,loc:{start:{line:2,column:46},end:{line:2,column:55}}}):r)+'>\r\n    <h3 class="five-day-section__day">'+c(typeof(r=null!=(r=u(n,"nameOfDay")||(null!=t?u(t,"nameOfDay"):t))?r:l)===s?r.call(i,{name:"nameOfDay",hash:{},data:o,loc:{start:{line:3,column:38},end:{line:3,column:51}}}):r)+'</h3>\r\n    <h4 class="five-day-section__date">'+c(typeof(r=null!=(r=u(n,"currentDay")||(null!=t?u(t,"currentDay"):t))?r:l)===s?r.call(i,{name:"currentDay",hash:{},data:o,loc:{start:{line:4,column:39},end:{line:4,column:53}}}):r)+" "+c(typeof(r=null!=(r=u(n,"nameOfMonth")||(null!=t?u(t,"nameOfMonth"):t))?r:l)===s?r.call(i,{name:"nameOfMonth",hash:{},data:o,loc:{start:{line:4,column:54},end:{line:4,column:69}}}):r)+'</h4>\r\n    <img src="http://openweathermap.org/img/wn/'+c(typeof(r=null!=(r=u(n,"weatherDay")||(null!=t?u(t,"weatherDay"):t))?r:l)===s?r.call(i,{name:"weatherDay",hash:{},data:o,loc:{start:{line:5,column:47},end:{line:5,column:61}}}):r)+'@2x.png" alt="" />\r\n    <div class="five-day-section__min-max-container">\r\n        <div>\r\n            <p class="min-max-container__name">min</p>\r\n            <p class="min-max-container__temperature"><span>'+c(typeof(r=null!=(r=u(n,"min")||(null!=t?u(t,"min"):t))?r:l)===s?r.call(i,{name:"min",hash:{},data:o,loc:{start:{line:9,column:60},end:{line:9,column:67}}}):r)+'</span>&deg;</p>\r\n        </div>\r\n        <div>\r\n            <p class="min-max-container__name">max</p>\r\n            <p class="min-max-container__temperature">\r\n                <span id="todayMaxTemperature">'+c(typeof(r=null!=(r=u(n,"max")||(null!=t?u(t,"max"):t))?r:l)===s?r.call(i,{name:"max",hash:{},data:o,loc:{start:{line:14,column:47},end:{line:14,column:54}}}):r)+'</span>&deg;\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <button class="five-day-section__button">more info</button>\r\n    <ul id="five-day-section__hourly-list"></ul>\r\n</li>\r\n'},compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?r:""},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.896d45f1a5c3f77137dd.js.map