import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/home/Home'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            redirect: "/table",
            children:[
                {
                    path: "/table",
                    component:() => import ("@/components/views/home/main/detail/table.vue")
                },
                {
                    path: "/form",
                    component:() => import ("@/components/views/home/main/detail/form")
                }
            ]
        }
    ]
})
