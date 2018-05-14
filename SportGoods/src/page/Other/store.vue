<template>
    <div class="store-map">
        <h1 style="margin: 15px auto; margin-left: 20px;">CONTACT US</h1>
        <h3 style=" margin-left: 20px;">线下实体店</h3>
        <p style="margin: 10px auto; font-size: 14px; margin-left: 20px;">全国旗舰总店</p>
        <div id="container" style="width:100%; height:300px; margin: 0 auto;"></div>  
        <p style="color: black; margin: 15px 0px 15px 20px;margin-left: 20px;font-size: 16px;"><b>地址：河南省郑州市郑东新区会展中心</b></p>
        <p style="color: black;margin: 15px 0px 15px 20px;margin-left: 20px;font-size: 16px;"><b>电话：0371-123456</b></p>
    </div>
</template>

<script>
import Header from "/common/header.vue";
import Footer from "/common/footer.vue";
import AMap from 'AMap'
var map

export default {
  components: {
    "y-header": Header,
    "y-footer": Footer
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init: function() {
      map = new AMap.Map("container", {
        center: [ 113.7272071838 ,34.7686209510],
        resizeEnable: true,
        zoom: 10
      });
      AMap.plugin(["AMap.ToolBar", "AMap.Scale"], function() {
        map.addControl(new AMap.ToolBar());
        map.addControl(new AMap.Scale());
      });
    }
  }
};
</script>
<style  scoped>
.store-map {
  width: 900px;
  margin: 100px auto;
  text-align: left;
  border: 1px solid gray;
  box-shadow: 0 0 8px gray;
  color: black;
  border-radius: 5px;
}
@media screen and (max-width: 1000px) {
  .store-map {
    width: 80%;
    margin: 50px auto;
  }
}
</style>