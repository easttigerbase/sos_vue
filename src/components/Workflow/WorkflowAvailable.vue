<template>
  <div class="sheet">
      <ul>
        <li v-for="(item,idx) in items"  :key="idx" >
          <v-btn text link :href="item.href">{{ item.name }}</v-btn>
        </li>
      </ul>
  </div>

</template>

<script>
export default {
  name: "WorkflowAvailable",
  data: function () {
    return{
      items:[
        {
          name: "휴가사용신청서",
          href : "/workflow/draft/"+"VacationApplication"
        }
      ]
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.sheet{
}
li{

}
</style>