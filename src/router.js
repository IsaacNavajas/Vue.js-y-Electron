import Vue from "vue";
import VueRouter from 'vue-router'
 
import inicio from './components/App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    router:[
    {
        path: '/hol',
        name: 'inici',
        component: inicio,
    }
]

})
export default router