import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../components/NotFound.vue'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: "/:notFound",
            component: NotFound,
        },
        
    ]
})

export default router