<template>
  <div>
      <v-app-bar
          color="blue darken-3"
          dark
          dense
          class="mb-4 "
          rounded
      >
        <v-toolbar-title class="text-h6 font-weight-bold overline">S S O T R O N </v-toolbar-title>
        <span class=" font-weight-bold overline">&nbsp;- 자재관리시스템</span>
        <v-spacer/>
          <v-btn text><span class="font-weight-bold overline">자재 현황</span></v-btn>
          <v-btn text><span class="font-weight-bold overline">입/출고 내역</span></v-btn>
        <v-spacer/> <v-spacer/> <v-spacer/>

      </v-app-bar>

    <v-card>
      <CustomTable :title="table.title" :headers="table.headers">
      </CustomTable>
    </v-card>
  </div>
</template>

<script>
import CustomTable from "@/components/Table/CustomTable";
export default {
  name: "MaterialsManagement",
  components:{CustomTable,},
  data:function () {
    return{
      table: {
        title:"자재 내역",
        headers: [
          {
            text: '분류',
            align: 'start',
            sortable: false,
            value: 'category',
          },
          {text: '프로젝트', value: 'projectName'},
          {text: '장비 수', value: '-'},
          {text: '품번', value: 'partNumber'},
          {text: '구매번호', value: 'orderNumber'},
          {text: '목록', value: '-'},
          {text: '품목', value: '-'},
          {text: '메이커', value: '-'},
          {text: '입고수량', value: '-'},
          {text: '스페어', value: '-'},
          {text: '가격', value: '-'},
          {text: '금액', value: '-'},
          {text: '기타', value: '-'},
          {text: '구매처', value: '-'},
          {text: '발주일', value: '-'},
          //{text: '발주/인계인', value: '-'},
          {text: '기타', value: '-'},
          {text: '구분', value: '-'},
         // {text: '수량임시', value: '-'},
         // {text: '월', value: '-'},
        ],
      }
    }
  }
}
</script>

<style scoped>

</style>