import WorkflowView from "@/components/views/WorkflowView";
import WorkflowMain from "@/components/Workflow/WorkflowMain";
import WorkflowDraft from "@/components/Workflow/WorkflowDraft";
import WorkflowAvailable from "@/components/Workflow/WorkflowAvailable";

export default [
    {
        path: '/workflow',
            component:WorkflowView,
        children:[
        {
            path: 'main',
            component: WorkflowMain
        },{
            path:'draft/:id',
            component: WorkflowDraft, props: true
        },
            {
                path: 'available',
                component : WorkflowAvailable
            }
        ]
    }
]