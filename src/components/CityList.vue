<template>
  <div class="citylist">
        <div class="mui-content content-padding">
            <div class="input_box">
                <div class="search_box">
                    <span class="mui-icon mui-icon-search search1"></span>
                    <input type="text" name="" id="searchCity" class="text_city" value="" placeholder="输入城市名、拼音或首字母查询" />
                    <span class="mui-icon mui-icon-closeempty cuo"></span>
                </div>
            </div>
            <!-- 定位城市 -->
            <div class="lbs">
                <div class="city_list_tit" style="display: none">当前城市</div>
                <ul class="mui-table-view" style="overflow: hidden;display: none">
                    <li class="mui-table-view-cell table-list">
                    <a id="lbs_position" vcode='110100' vname='北京' onclick="EventHander.onCityClick(event,this)" >
                        <img class="dw_position" src="img/lbsPic.png" />
                        <span class="lbs_city">定位中...</span>
                    </a>
                    </li>
                </ul>
            </div>

           <!-- 最近使用城市 -->
            <div class="visit_city">
                <div class="city_list_tit" id="nearest_visit_city_title">最近访问城市</div>
                <ul id="nearest_visit_city" style="overflow: hidden;">

                </ul>
            </div>

            <div class="city_list_tit" id="listTitle" city="城市列表" province="选择省市">选择省市</div>
            <ul class="mui-table-view" id="first">
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: 'citylist',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods () {

  },
  created () {
      // 一般情况下
      this.$http.get(''
       ).then((response) => {
         console.log(response.body)
       }).catch(function(response) {
         console.log(response)
       })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../node_modules/muiv3/dist/css/mui.min.css";
@import "../scss/citylist.scss";

</style>
