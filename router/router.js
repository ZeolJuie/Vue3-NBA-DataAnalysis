import { createRouter,createWebHistory } from "vue-router";
import TeamDetail from '../src/components/Team-Detail.vue';
import HomePage from '../src/components/Home-Page.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/home',
            component:HomePage,
        },
        {
            path:'/team-details',
            component:TeamDetail
        }
    ]
})
export default router;