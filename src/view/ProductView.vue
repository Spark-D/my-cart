<template>
  <div id="productView">
    <div data-v-56d83c02="" id="mainLayout" class="wrap" watchmallno="1" ppupmallno="1">
    <div id="skipNav"><a href="#content">본문 바로가기</a></div><!---->
    <nav role="navigation"></nav>
    <div class="dimContainer innerContent"></div>
    <main id="content" role="main" class="contentArea on">
    <div data-v-56d83c02="" class="productWrap wideArea"></div>
    <div data-v-56d83c02="" class="moduleContentArea">
    <ol data-v-0587c011="" data-v-56d83c02="" class="breadcrumb"><li data-v-0587c011=""><span data-v-0587c011="" href=""> 홈 </span></li><li data-v-0587c011="">
    <a data-v-0587c011="" href="//www.lotteon.com/p/display/shop/seltDpShop/20523"> 뷰티넘버원 </a></li><li data-v-0587c011=""><span data-v-0587c011="" href=""> 스킨케어 </span></li></ol><div data-v-49839855="" data-v-56d83c02="" class="tabProductList bTypeTemplate slide basic2 withThumb"><!----><div data-v-49839855="" class="tabArea"><div data-v-49839855="" class="swiperNavWrap" style="display: none;"><div data-v-49839855="" slot="button-prev" class="swiper-button-prev"></div><div data-v-49839855="" slot="button-next" class="swiper-button-next"></div></div><!----></div><!----><div data-v-49839855="" class="productTabContent"><!----><!----><!----><!----><!----></div></div>
    
    <div data-v-56d83c02="" class="productContent"><div data-v-56d83c02="" class="sortListArea">
      <div data-v-56d83c02="" class="total"> 총 <span data-v-56d83c02="">999+</span> 개 </div>
      <div data-v-56d83c02="" class="rightSet"><div data-v-56d83c02="" class="boradCheckList"><ul data-v-56d83c02=""><li data-v-56d83c02="" value="01" selected="selected"><input data-v-56d83c02="" id="01" type="radio" name="selectBoard" checked="checked" value="01"><label data-v-56d83c02="" for="01">판매량순</label></li><li data-v-56d83c02="" value="02"><input data-v-56d83c02="" id="02" type="radio" name="selectBoard" value="02"><label data-v-56d83c02="" for="02">최근 등록순</label></li><li data-v-56d83c02="" value="03"><input data-v-56d83c02="" id="03" type="radio" name="selectBoard" value="03"><label data-v-56d83c02="" for="03">낮은 가격순</label></li><li data-v-56d83c02="" value="04"><input data-v-56d83c02="" id="04" type="radio" name="selectBoard" value="04"><label data-v-56d83c02="" for="04">높은 가격순</label></li></ul></div><div data-v-514147e2="" data-v-56d83c02="" dir="auto" class="v-select is-input-thin vs--single vs--unsearchable" style="width: 140px;"><div class="vs__dropdown-toggle"><div class="vs__selected-options"><span class="vs__selected"> 60개씩 보기  <!----></span> <label data-v-514147e2="" for="vs__search" class="blind">search</label><input data-v-514147e2="" id="vs__search" readonly="readonly" aria-label="Search for option" role="combobox" type="search" autocomplete="off" class="vs__search"><span data-v-514147e2="" class="vs__placeholder"></span></div> <div class="vs__actions"><button type="button" title="Clear selection" class="vs__clear" style="display: none;"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10"><path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z"></path></svg></button> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" role="presentation" class="vs__open-indicator"><path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z"></path></svg> <div class="vs__spinner" style="display: none;">Loading...</div></div></div> <!----></div></div></div>
      <!-- 상품목록 -->
      <div data-v-867a9d34="" data-v-56d83c02="" class="productList"><!---->
        <div data-v-867a9d34="" class="scroll-wrap dataItem item5">
          <div data-v-867a9d34="" class="list-wrap">
            <ul data-v-867a9d34="" >
              <product 
                  v-for="item in getProdList" 
                  :key="item.pdNo"
                  :productInfo="item">
              </product>
            </ul>
          </div>
        </div>
      </div>
      <!-- 페이징 -->
      <!--
      <div data-v-35e7960e="" data-v-56d83c02="" class="paginationWrap wide">
        <div data-v-35e7960e="" class="pagination">
          <a data-v-35e7960e="" href="#" class="prev off"><span data-v-35e7960e="" class="hiddenTxt">이전</span></a>
          <a data-v-35e7960e="" @click.prevent="changePage(1)" class="active">1</a>
          <a data-v-35e7960e=""  @click.prevent="changePage(2)" class="">2 </a>
          <a data-v-35e7960e=""  @click.prevent="changePage(3)" class="">3 </a>
          <a data-v-35e7960e=""  @click.prevent="changePage(4)" class="">4 </a>
          <a data-v-35e7960e=""  @click.prevent="changePage(5)" class="">5 </a>
          <a data-v-35e7960e=""  @click.prevent="changePage(6)" class="">6 </a>
          <span data-v-35e7960e="" class="skip">...</span>
          <a data-v-35e7960e=""  class="">8</a>
          <a data-v-35e7960e="" href="#" class="next"><span data-v-35e7960e="" class="hiddenTxt">다음</span></a>
        </div>
      </div>
      -->
    </div>
    </div>
    </main> 
    </div>
  </div>
</template>

<script>
import product from '../components/Product.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'ProductView',
  components: {
    product
  },
  data(){
    return{
      // productList: [],
      // pageNo: "1",
      // totalPageCnt : 1
    }
  },
  created() {
    console.log("created");
    this.$store.dispatch('FETCH_PRODUCT_LIST');
    // this.refresh();
  },
  methods: {
    refresh(){
      this.$store.dispatch('FETCH_PRODUCT_LIST');
    },
    changePage(pageNo){
      console.log(pageNo);
      this.$store.commit('SET_PAGE_NO', pageNo);
      // this.refresh();
    }
  },
  computed :{
    ...mapGetters({
        getProdList : 'getProdList'
    }),
  }
}
</script>

<style>

</style>