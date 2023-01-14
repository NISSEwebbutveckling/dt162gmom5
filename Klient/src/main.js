/*
DT162G, moment5 - projekt 
    Nils, 
    nibo1005@student.miun.se

Denna fil kan ses som "ingångstället" (entry point) för applikationen.
Skapar bl.a. en instans av Vue och pekar till vilket HTML-element i index.html som
Vue ska kopplas till.
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
