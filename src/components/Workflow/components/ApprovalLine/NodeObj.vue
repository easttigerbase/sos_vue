<template>
  <div class="basicText basicCard" style="width: 100px;  margin:8px; border-collapse: collapse;">
    <div class="basicBlue node"  style="color: white">
      <span>{{ item.process }}</span>
    </div>
    <div class="node">
      <span>{{item.name}}</span>
    </div>
    <div class="node">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NodeObj",
  props:{
    item:Object,
  }
}
</script>

<style scoped>
  .node{
    height:30px; text-align:center; border:1px solid #DCDCDC;
    align-items: center;
    position: relative;
    justify-content: center;
    vertical-align: middle;
  }
</style>