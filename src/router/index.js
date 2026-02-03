// 1 step: import the router link into our app
import { createRouter, createWebHashHistory } from 'vue-router';
/**
 * 2 step: Importing our components that should be used in routes. The @ means the 'src' dir. 
 * What the @ means is defined in vite.config.js file.
 */
import About from '@/About.vue';
import Home from '@/Home.vue';

/**
 * 3 step: now we add our routes for our app. For each route we must add an object, with some options.
 */
const routes = [
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
];

/**
 * 4 step: set up our router. We use the above imported createRouter() and createWebHashHisto-ry()
 */
const router = createRouter({

    /**
     * Here we set up history mode. This can either create web history or web hash history.
     * Web history will use real urls, when we navigate through pages. If we go to About page, the
     * url will be '/about'.
     * Web hash history will use # in url. If we go to About page, the url will be '/#/about'.
     */
    history: createWebHashHistory(),

    /**
     * This here is routes: routes.
     * The first routes is a property name.
     * The second routes is our routes object from above, that contains all the routes defined by us.
     */
    routes

});

/**
 * 5 step: here we export our router variable, so it can be imported on other pages too...
 */
export default router;
