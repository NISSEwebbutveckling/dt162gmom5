//Skapar routes i denna fil, importerar komponenter.
/*
DT162G, moment5 projekt
//Nils, 
//nibo1005@student.miun.se
*/

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicsView from '../views/MusicsView.vue'
import GuestView from '../views/GuestView.vue'
import InfoView from "../views/InfoView.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),

    //Skapar routes.
    routes: [{
            path: '/',
            //Namnet på vyn spelar mindre roll här.
            name: 'start',
            component: HomeView
        },
        {
            path: '/musics',
            name: 'musics',
            component: MusicsView
        },
        {
            path: '/info',
            name: 'info',
            component: InfoView
        },
        {
            path: '/guest',
            name: 'guest',
            component: GuestView
        },
    ]
})

export default router
