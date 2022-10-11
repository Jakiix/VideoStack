import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '', //TODO
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=Titanic', options)
	.then(response => response.json())
	.then(data => {
    const list = data.d;

    list.map((item) => {
      const name = item.l;
      const poster = item.i.imageUrl;
      const movie = `<li style="max-width: 50px;max-height: 100px;"><img src="${poster}" <h2>${name}</h2></li>`
      document.querySelector('.movies').innerHTML += movie;
    })
  })
	.catch(err => console.error(err));