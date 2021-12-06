import { createApp } from 'vue';

import './assets/css/reset.css';
import './assets/scss/generic.scss';

import BaseContainer from './components/UI/BaseContainer.vue';
import BaseCard from './components/UI/BaseCard.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-container', BaseContainer);
app.component('base-card', BaseCard);

app.mount('#app');
