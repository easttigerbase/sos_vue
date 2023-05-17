<template>
  <div>
    <ProcessList></ProcessList>
    <RecentDocsList></RecentDocsList>
  </div>
</template>

<script>
import RecentDocsList from "@/components/Workflow/components/RecentDocsList";
import ProcessList from "@/components/Workflow/components/ProcessList";
export default {
  name: "WorkflowMain",
  components: {ProcessList, RecentDocsList}
}
</script>

<style scoped>

</style>