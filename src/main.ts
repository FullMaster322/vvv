import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import About from './views/AboutView.vue'

const routes = [{ path: '/about/:id', name: 'About', component: About, props: true}]

const app = createApp(App)

app.use(router)

app.mount('#app')
