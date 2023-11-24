// 'use strict';

// vue 
const { createApp } = Vue

createApp({
  data() {
    return {
      title: 'Bonus',
      text: 'testo paragrafo',
      url: 'img/streetart2.jpg',
      pippo: 'color',
    }
  }
}).mount('#app')