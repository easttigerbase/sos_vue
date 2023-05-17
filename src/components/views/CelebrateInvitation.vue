<template>

    <!--<v-container fluid style="text-align: center; height: 2600px; background-size: cover;  top: 0; left: 0;padding: 0; margin: 0;" :style="{'background-image': 'url(' + require('../../assets/ssotron-001.png') + ')' }" >
      -->
  <v-container  fluid style=" text-align:center; background-color : whitesmoke; margin: 0; padding: 0; margin-top: 2px;">

    <video preload="metadata" :src="require('../../assets/_ssovieo.mp4#t=0.5')" style="width: 100%;"  controls autoplay playsinline />

    <!--<img :src="require('../../assets/title.png')" style="width: 100%;" />-->

   <div class="ma-4 pa-4"  >
     <div class="textBold" >늘 아낌없는 응원을 해주시는 </div>
     <div class="textBold">귀하의 덕택으로 </div>
     <br>
     <div class="textBold" >드디어 에스에스 오트론이</div>
     <div class="textBold"> 신 공장과 함께</div>
     <div class="textBold" >대망의 청라시대를 열게 되었습니다.</div>
     <br>
     <div class="textBold" >이에 귀하를 모시고</div>
     <div  class="textBold">뜻 깊은 시간을 갖고자 합니다.</div>
     <br>
     <div class="textBold" >부디 참석해 주시어</div>
     <div class="textBold">응원과 조언 부탁 드립니다.</div>
     <br>
     <div class="textBold" >감사합니다.</div>
     <div class="textBoldBIG"  >대표 신계철 올림</div>
   </div>
    <v-carousel hide-delimiters class="mt-6 mb-6">
      <v-carousel-item
          :src="require('../../assets/sso2.jpeg')"
          contain
      ></v-carousel-item>
      <v-carousel-item
          :src="require('../../assets/sso5.jpeg')"
          contain
      ></v-carousel-item>
      <v-carousel-item
          :src="require('../../assets/sso3.jpeg')"
          contain
      ></v-carousel-item>
      <v-carousel-item
          :src="require('../../assets/sso4.jpeg')"
          contain
      ></v-carousel-item>
    </v-carousel>
    <div class=" textBold"  >일 시 : 2023년 6월 9일 금요일 오후 5시</div>
    <div class="textBold" style="margin-bottom: 10px" >장 소 : 인천광역시 서구 파랑482번 39 </div>
    <div class="textBold"  >문 의 : 032-519-5490 / 010-8573-6108</div>
    <br>


       <v-btn  @click="goMap" text >카카오지도 보기</v-btn>

 <div style="display: flex;   justify-content: center;">
   <div  id="map" style="width: 70vw;  height: 300px;" ></div>
 </div>


 </v-container>
</template>

<script>

export default {
 name: "CelebrateInvitation",
 mounted() {
   if(window.kakao && window.kakao.maps){
     this.loadMap();
   }else{
     this.loadScript();
   }
 },
  metaInfo: {
    // title 입력하기
    title: '에스에스오트론 청라 준공식',

    // meta tag 입력하기
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: "og:url", content: 'http://tigerbase.io' },
      { property: "og:title", content: '에스에스오트론 청라공장 준공식' },
      { property: "og:type", content: 'website' },
      { property: "og:image", content: 'http://tigerbase.io/logo.png' },
      { property: "og:description", content: '2023년 6월 9일 오후 5시' }
    ]
  },
 data(){
   return{
     maps:null,
     datePicker:"2023-06-09",
   }
 },
 methods:{
   customFormatHeader(){
     return "2023년 06월 09일 17시" ;
   },
   goMap(){
     window.open("https://map.kakao.com/link/map/에스에스오트론,37.524131634801726,126.65609172916658");
   },

   loadScript(){
     const script = document.createElement("script");
     script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=6cb00fc89ec1a9a52fda41c2ca901e78&autoload=false"
     script.onload=()=> window.kakao.maps.load(this.loadMap)
     document.head.appendChild(script)
   },
   loadMap(){
     const map = document.getElementById("map");


     const mapOption = {
       center: new window.kakao.maps.LatLng(37.524131634801726,  126.65609172916658 ), // 지도의 중심좌표
       level: 7, // 지도의 확대 레벨,
       marker: new window.kakao.maps.Marker()
     };

     const maps = new window.kakao.maps.Map(map, mapOption);
     const markerPosition  = new window.kakao.maps.LatLng(37.524131634801726,  126.65609172916658);
     const marker = new window.kakao.maps.Marker({
       position: markerPosition
     });
     maps.setDraggable(false);
     maps.setZoomable(false);

     marker.setMap( maps);



     var zoomControl = new window.kakao.maps.ZoomControl();
     maps.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

   },

 },



}
</script>

<style scoped>
.text{
  text-align: center;
  font-family: 'eulyoo', serif;
  font-size: 5vw;
  color: #222222;
  line-height: 1.5;
  margin-bottom: 18px;
}
.textBold{
  text-align: center;
  font-family: 'eulyoo-bold', serif;
  font-size: 5vw;
  color: #222222;
  line-height: 1.5;
  margin-bottom: 18px;
}

.textBoldBIG{
  text-align: center;
  font-family: 'eulyoo-bold', serif;
  font-size: 6vw;
  color: #222222;
  line-height: 1.5;
  margin-top: 15px;
}
@font-face {
  font-family: 'eulyoo';
  src: url('../../assets/styles/font/Eulyoo1945-Regular.ttf');
}

@font-face {
  font-family: 'eulyoo-bold';
  src: url('../../assets/styles/font/Eulyoo1945-SemiBold.ttf');
}


</style>