<template>
  <div>
    <main id="content" role="main" class="contentArea on"><form data-v-7f6b5e24="" method="POST" id="orderSheetForm"><input data-v-7f6b5e24="" type="hidden" id="cartSns" name="cartSns"><input data-v-7f6b5e24="" type="hidden" id="pdOdTypCd" name="pdOdTypCd"><input data-v-7f6b5e24="" type="hidden" id="drtPurYn" name="drtPurYn"><input data-v-7f6b5e24="" type="hidden" id="cartDvsCd" name="cartDvsCd" value="01"></form><form data-v-7f6b5e24="" method="POST" id="fixedReqFrm"><input data-v-7f6b5e24="" type="hidden" id="fprdDvCartSns" name="fprdDvCartSns"><input data-v-7f6b5e24="" type="hidden" id="prdTrNo" name="prdTrNo"><input data-v-7f6b5e24="" type="hidden" id="prdLrtrNo" name="prdLrtrNo"><input data-v-7f6b5e24="" type="hidden" id="prdTrGrpCd" name="prdTrGrpCd"></form><div data-v-7f6b5e24="" class="container"><h2 data-v-7f6b5e24="" class="pageTitle">
      장바구니
    </h2><div data-v-7f6b5e24="" class="cartWrap"><div data-v-7f6b5e24="" id="topTabArea" class="cartAffixTab"><div data-v-7f6b5e24="" class="vue-affix affix-top"><div data-v-7f6b5e24="" class="tabWrap default box full">
      <div class="tabArea"><div class="scrollArea">
        <ul>
          <li><a href="#/cart" class="tab active"><span><span>일반<em>(2)</em></span></span></a></li>
          <li><a href="#" class="tab"><span><span>장보기<em></em></span></span></a></li>
          <li><a href="#" class="tab"><span><span>정기배송<em></em></span></span></a></li>
        </ul>
      </div><!----><!----><!----></div>
      <div class="tabContentArea active"></div><div class="tabContentArea"><!----></div><div class="tabContentArea"><!----></div><!----></div></div></div><div data-v-7f6b5e24="" class="cartContents"><!---->
      
      
      <div data-v-7f6b5e24="" class="detailWrap">
        <div data-v-7f6b5e24="" class="itemController">

          <div data-v-7f6b5e24="" class="checkboxController">
            <input data-v-7f6b5e24="" id="checkboxController" type="checkbox" class="cur_hand">
            <label data-v-7f6b5e24="" for="checkboxController" class="cur_hand">전체선택</label>
          </div>
          
          <div data-v-7f6b5e24="" class="deleteBtnGroup">
            <button data-v-7f6b5e24="" type="button" class="deleteCartItems"><span data-v-7f6b5e24="">품절상품삭제</span></button>
            <button data-v-7f6b5e24="" type="button" class="deleteCartItems"><span data-v-7f6b5e24="">선택삭제</span></button>
          </div>
        </div>
        <div data-v-7f6b5e24="" class="cartSlideWrapper nonHolidays active">
          <div data-v-7f6b5e24="" class="cartSlideWrapTitle">
            <button data-v-7f6b5e24="" class="btnToggle"></button></div>
            <div data-v-7f6b5e24="" aria-expanded="true" class="cartSlideWrap"><!----><!---->
            <div data-v-7f6b5e24="" class="cartSlideInnerCont">
              
              <!-- 배송그룹 컴포넌트 -->
              <cart-group 
                  v-for="item in getCartList" 
                  :key="item.trNo"
                  :groupInfo="item">
              </cart-group>
                        
              </div></div></div><div id="target-cart-mbox-loc" class="at-element-marker"></div><!----></div>
                        
                <!-- 금액영역 -->
                <bill></bill>

                </div></div></div></main>
  </div>
</template>

<script>
import cartGroup from '../components/CartGroup.vue';
import bill from '../components/Bill.vue';
import {mapGetters} from 'vuex';


export default {
  name: 'CartView',
  components: {
    cartGroup,
    bill
  },
  created() {
    this.$store.dispatch('FETCH_CART_LIST');
    // this.refresh();
  },
  computed :{
    ...mapGetters({
        getCartList: 'getCartList',
    }),
    
  },
  
}
</script>

<style>
.cartContents[data-v-7f6b5e24] {
    position: relative;
    min-height: 390px;
    margin-top: 40px;
    margin-bottom: 80px;
}
.deleteBtnGroup button.deleteCartItems[data-v-7f6b5e24] {
    float: none;
}
.deleteBtnGroup[data-v-7f6b5e24] {
    float: right;
}
.cartContents .detailWrap[data-v-7f6b5e24] {
    width: 786px;
}
.itemController[data-v-7f6b5e24] {
    float: left;
    width: 100%;
    padding: 0 0 12px;
}
.itemController .checkboxController[data-v-7f6b5e24] {
    float: left;
    font-size: 0;
    line-height: 32px;
    letter-spacing: -.3px;
    color: #333;
}
.itemController .checkboxController input[type=checkbox][data-v-7f6b5e24] {
    margin-right: 10px;
    vertical-align: middle;
}
.itemController .checkboxController label[data-v-7f6b5e24] {
    display: inline-block;
    padding-left: 0;
    font-size: 14px;
    line-height: 32px;
}
#sideArea.cartPriceWing[data-v-7f6b5e24] {
    position: absolute;
    top: 0;
    right: 0;
    width: 298px;
    height: 100%;
    z-index: 5;
}
#sideArea.cartPriceWing .priceWrap[data-v-7f6b5e24] {
    width: 298px;
}
#sideArea.cartPriceWing .priceWrap .inner[data-v-7f6b5e24] {
    width: 100%;
    background: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 24px 20px 20px 20px;
}
#sideArea.cartPriceWing .priceWrap .priceTitle[data-v-7f6b5e24] {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -.06em;
    margin-bottom: 28px;
}
#sideArea.cartPriceWing .priceWrap .priceList[data-v-7f6b5e24] {
    border-bottom: 1px solid #eee;
    padding-bottom: 18px;
}
#sideArea.cartPriceWing .priceWrap .totalPrice[data-v-7f6b5e24] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 17px;
}
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet[data-v-7f6b5e24] {
    margin: 30px -7px -6px -7px;
}
.itemController button.deleteCartItems[data-v-7f6b5e24] {
    float: right;
    height: 32px;
    padding: 0 12px;
    margin-left: 8px;
    font-size: 13px;
    line-height: 32px;
    letter-spacing: -.2px;
    text-align: center;
    color: #333;
    border-radius: 6px;
    border: 1px solid #ddd;
}
.cartListWrapper[data-v-7f6b5e24] {
    border-radius: 10px;
    border: 1px solid #ddd;
    overflow: hidden;
}
.cartListWrapper .cartHeader[data-v-7f6b5e24] {
    height: 53px;
    padding: 0 20px 0 19px;
    border-bottom: 1px solid #eee;
}
.cartListWrapper[data-v-7f6b5e24] {
    border-radius: 10px;
    border: 1px solid #ddd;
    overflow: hidden;
}
.cartListWrapper>ul[data-v-7f6b5e24] {
    display: inline-block;
    width: 100%;
}
.cartListWrapper>ul>li[data-v-7f6b5e24]:first-child {
    border-top: none;
}
.cartListWrapper>ul>li[data-v-7f6b5e24] {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 24px 10px 24px 20px;
    border-top: 1px solid #eee;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.cartListWrapper .hasCheckbox[data-v-7f6b5e24] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    padding-left: 28px;
}
.cartListWrapper .cartQty[data-v-7f6b5e24] {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 140px;
    padding-right: 20px;
    padding-left: 20px;
}
.cartListWrapper .cartAction[data-v-7f6b5e24] {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 24px;
    min-width: 166px;
    text-align: right;
}
.cartListWrapper .cartAction a[data-v-7f6b5e24]:only-child, .cartListWrapper .cartAction button[data-v-7f6b5e24]:not(.deleteItem):only-child {
    margin-right: -3px;
    margin-left: -4px;
}
[data-v-7f6b5e24] .productItem .productThumb {
    height: 80px;
}
.productItem[data-v-7f6b5e24] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.productItem .productData .productTitle[data-v-7f6b5e24] {
    margin-bottom: 5px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: -.3px;
    color: #333;
}
.productItem .productThumb .productStatus[data-v-7f6b5e24] {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -.2px;
    text-align: center;
    color: #fff;
    background-color: rgba(0,0,0,.6);
    z-index: 5;
}
.productItem .productThumb a {
    width: 80px;
    height: 80px;
    background: #e5e5e5;
}
a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    widows: 1;
}
.cartListWrapper .cartHeader .checkboxSet input[type=checkbox]+label[data-v-7f6b5e24], .cartListWrapper .cartHeader h3[data-v-7f6b5e24] {
    display: inline-block;
    font-size: 18px;
    font-weight: 700;
    line-height: 53px;
    letter-spacing: -.5px;
    color: #333;
    vertical-align: middle;
}
.cartListWrapper .cartHeader .checkboxSet input[type=checkbox][data-v-7f6b5e24]:checked {
    border: 0;
    background: #ef2a23 url(//static.lotteon.com/p/order/assets/img/checkbox_on.svg) no-repeat;
    background-size: 100%;
}
.checkboxSet, .radioSet {
    display: inline-block;
    float: left;
}
.cartListWrapper .cartFooter[data-v-7f6b5e24] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 48px;
    padding: 0 20px;
    font-size: 13px;
    line-height: 48px;
    letter-spacing: .2px;
    color: #757575;
    border-top: 1px solid #eee;
    background-color: #fef5f4;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet li .btnOrder[data-v-7f6b5e24] {
    display: block;
    line-height: 52px;
    text-align: center;
    font-size: 18px;
    background: #ef2a23;
    color: #fff;
    border-radius: 6px;
}
#sideArea.cartPriceWing .priceWrap .priceList dl dt[data-v-7f6b5e24] {
    position: relative;
    width: 50%;
    display: table-cell;
    padding-top: 3px;
    font-size: 14px;
    color: #757575;
    line-height: 1.57;
    letter-spacing: -.3px;
    vertical-align: top;
    white-space: normal;
}
#sideArea.cartPriceWing .priceWrap .priceTitle[data-v-7f6b5e24] {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -.06em;
    margin-bottom: 28px;
}
#sideArea.cartPriceWing .priceWrap .totalPrice dd .price[data-v-7f6b5e24] {
    font-size: 28px;
    font-weight: 700;
}
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet li .btnGift[data-v-7f6b5e24] {
    display: block;
    line-height: 34px;
    text-align: center;
    font-size: 13px;
    background: #fff;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 6px;
}
#sideArea.cartPriceWing .priceWrap .priceTitle[data-v-7f6b5e24] {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: -.06em;
    margin-bottom: 28px;
}
</style>