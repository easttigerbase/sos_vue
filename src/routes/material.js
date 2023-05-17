import MaterialView from "@/components/views/MaterialView";
import MaterialsManagement from "@/components/Material/InventoryManagement";

export default [

    {path: '/material',
        component:MaterialView,
    children:[
    {   path:'management',
        component:MaterialsManagement
    }
    ]
    }
]