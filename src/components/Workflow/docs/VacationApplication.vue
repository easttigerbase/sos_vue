<template>
  <table class="" style=" width: 1200px;  table-layout : fixed;" >
    <tr class="">
      <td  colspan="2" style="">
        <div class="d-flex borderNode" style="">
          <div class="ob col-2" >제목</div>
          <div class="col-10">휴가신청서</div>
        </div>
      </td>
    </tr>
    <tr></tr>
    <tr >
      <td colspan="1" >
        <div class="d-flex borderNode" style="">
          <div class="ob col-4" >신청자</div>
          <div class="col-8">신동호</div>
        </div>
      </td>
      <td colspan="1" >
        <div class="d-flex borderNode" style="">
          <div class="col-4 ob">신청일자</div>
          <div class="col-8">2023.01.27</div>
        </div>
      </td>
    </tr>

    <tr class=" ">
      <td colspan="1" class="  ">
        <div class="d-flex borderNode" style="">
          <div class="col-4 ob">휴가구분</div>
          <div class="col-8 flex"><v-combobox class="align-center" style="height: 20px; width: 140px" dense v-model="selectedVacation" :items="vacationItems" ></v-combobox></div>
        </div>
      </td>
      <td colspan="1" >
        <div class="d-flex borderNode" style="">
          <div class="col-4 ob">잔여연차</div>
          <div class="col-8">16일</div>
        </div>
      </td>
    </tr>
    <tr class="" style="">
      <td colspan="1" class=" ">
        <div class="d-flex">
          <TimePicker  pickerLabel="시작일"></TimePicker>
          <TimePicker  pickerLabel="종료일"></TimePicker>
        </div>
      </td>
      <td colspan="1" class="">
        <div class="d-flex borderNode" style="">
          <div class="col-4 ob">기간</div>
          <div class="col-8">3일</div>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import TimePicker from "@/components/TimePicker";
export default {
  name: "VacationApplication",
  components: {TimePicker},
  data: () => ({
    vacationItems:['연차','공가','병가'],
    selectedVacation:'연차'
  }),
}
</script>

<style scoped>
 td{

}
 .borderNode{
   border: 1px solid #dcdcdc;
 }
 tr{

 }
 table{
  border-spacing: 15px;
  empty-cells: hide;
   border-collapse: separate;
}
 .ob{
   background-color: #efefef;
   border: 1px solid #dcdcdc;
 }
</style>