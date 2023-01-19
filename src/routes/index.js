import VueRouter from "vue-router";
import MaterialsManagement from "@/components/views/InventoryManagement";

export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [
        {
            path: '/',

        }, {
        path: '/material/management',
        component:MaterialsManagement,
    },
    ]
});