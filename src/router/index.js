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
            component: Home,
            meta: {
                title: 'Kezdőlap'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                title: 'Projektek'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Elérhetőség'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'Rólam'
            }
        },
        {
            path: "/:notFound",
            component: NotFound,
            meta: {
                title: '404',
                hideNavigation: true
            }
        },
    ]
})

router.beforeEach((to, _) => {
    document.title = "Portfolio | " + to.meta?.title ?? 'Portfolio'
})

export default router