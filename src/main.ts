import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import About from './views/FilmInfo.vue'

const routes = [{ path: '/film/:id', name: 'Film', component: Film, props: true}]

const app = createApp(App)

app.use(router)

app.mount('#app')
