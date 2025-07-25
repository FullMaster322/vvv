import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import About from './views/AboutView.vue'
import Person from './views/Person.vue'

const routes = [{ path: '/about/:id', name: 'About', component: About, props: true}]

const personRoutes = [{ path: '/person/:id', name: 'Person', component: Person, props: true}]

const app = createApp(App)

app.use(router)

app.mount('#app')
