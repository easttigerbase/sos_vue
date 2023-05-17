import VueRouter from "vue-router";

import workflow from "@/routes/workflow";
import material from "@/routes/material";
import CelebrateInvitation from "@/components/views/CelebrateInvitation";
export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [
        {
            path: '/gi',
        },
        {
          path:'/invitation/ssotron'  ,
            component:CelebrateInvitation
        },
        ...material,
        ...workflow,
    ]
});