<template>
  <div>
    <main id="content" role="main" class="contentArea on">
      <form method="POST" id="orderSheetForm">
        <input type="hidden" id="cartSns" name="cartSns" /><input
          type="hidden"
          id="pdOdTypCd"
          name="pdOdTypCd"
        /><input type="hidden" id="drtPurYn" name="drtPurYn" /><input
          type="hidden"
          id="cartDvsCd"
          name="cartDvsCd"
          value="01"
        />
      </form>
      <form method="POST" id="fixedReqFrm">
        <input type="hidden" id="fprdDvCartSns" name="fprdDvCartSns" /><input
          type="hidden"
          id="prdTrNo"
          name="prdTrNo"
        /><input type="hidden" id="prdLrtrNo" name="prdLrtrNo" /><input
          type="hidden"
          id="prdTrGrpCd"
          name="prdTrGrpCd"
        />
      </form>
      <div class="container">
        <h2 class="pageTitle">
          장바구니
        </h2>
        <div class="cartWrap">
          <div id="topTabArea" class="cartAffixTab">
            <div class="vue-affix affix-top">
              <div class="tabWrap default box full">
                <div class="tabArea">
                  <div class="scrollArea">
                    <ul>
                      <li>
                        <a href="#/cart" class="tab active"
                          ><span
                            ><span>일반<em></em></span></span
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="tab"
                          ><span
                            ><span>장보기<em></em></span></span
                        ></a>
                      </li>
                      <li>
                        <a href="#" class="tab"
                          ><span
                            ><span>정기배송<em></em></span></span
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tabContentArea active"></div>
                <div class="tabContentArea"></div>
                <div class="tabContentArea"></div>
              </div>
            </div>
          </div>
          <div class="cartContents">
            <div class="detailWrap">
              <div class="itemController">
                <div class="checkboxController">
                  <input
                    id="checkboxController"
                    type="checkbox"
                    class="cur_hand"
                  />
                  <label for="checkboxController" class="cur_hand"
                    >전체선택</label
                  >
                </div>

                <div class="deleteBtnGroup">
                  <button
                    type="button"
                    class="deleteCartItems"
                    style="display:none"
                  >
                    <span>품절상품삭제</span>
                  </button>
                  <button type="button" class="deleteCartItems">
                    <span>선택삭제</span>
                  </button>
                </div>
              </div>
              <div class="cartSlideWrapper nonHolidays active">
                <div class="cartSlideWrapTitle">
                  <button class="btnToggle"></button>
                </div>
                <div aria-expanded="true" class="cartSlideWrap">
                  <div class="cartSlideInnerCont">
                    <!-- 배송그룹 컴포넌트 -->
                    <cart-group
                      v-for="item in getCartList"
                      :key="item.trNo"
                      :groupInfo="item"
                      v-on:deleteCart="deleteCart2"
                      @minus="minus2"
                      @add="add2"
                    >
                    </cart-group>
                  </div>
                </div>
              </div>
              <div id="target-cart-mbox-loc" class="at-element-marker"></div>
            </div>

            <!-- 금액영역 -->
            <bill :prodList="onlyProductList"></bill>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import cartGroup from "../components/CartGroup.vue";
import bill from "../components/Bill.vue";
import { mapGetters } from "vuex";
import _ from "lodash";

export default {
  name: "CartView",
  components: {
    cartGroup,
    bill,
  },
  created() {
    this.refresh();
  },
  computed: {
    ...mapGetters({
      getCartList: "getCartList",
    }),
    onlyProductList() {
      let cartList = [];
      for (let c of this.getCartList) {
        cartList.push(...c.omCartList);
      }
      let prodList = [];
      for (let c of cartList) {
        prodList.push(...c.product);
      }
      for (let c of cartList) {
        for (let p of prodList) {
          if (
            c.spdNo === p.spdNo &&
            c.trNo === p.trNo &&
            c.stimNo === p.stimNo
          ) {
            p.qty = c.odQty;
          }
        }
      }
      return prodList;
    },
  },
  methods: {
    refresh() {
      this.$store.dispatch("FETCH_CART_LIST");
    },
    deleteCart2(cartSn) {
      this.$store.dispatch("DELETE_CART", cartSn);
      this.refresh();
    },
    add2(cart) {
      ++cart.odQty;
      this.updateCart(cart);
    },
    minus2(cart) {
      --cart.odQty;
      this.throttlCart(cart);
    },
    updateCart2(cart) {
      let updateTarget = {};
      updateTarget.cartSn = cart.cartSn;
      updateTarget.odQty = cart.odQty;

      this.$store.dispatch("UPDATE_CART", cart);
    },
    updateCart: _.debounce(function(cart) {
      this.updateCart2(cart);
      console.log("debounce", cart.odQty);
    }, 500),
    throttlCart: _.throttle(function(cart) {
      this.updateCart2(cart);
      console.log("throttle", cart.odQty);
    }, 10000),
  },
};
</script>

<style>
.cartListWrapper .cartQty:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background-color: #eee;
}
.cartContents {
  position: relative;
  min-height: 390px;
  margin-top: 40px;
  margin-bottom: 80px;
}
.deleteBtnGroup button.deleteCartItems {
  float: none;
}
.deleteBtnGroup {
  float: right;
}
.cartContents .detailWrap {
  width: 786px;
}
.itemController {
  float: left;
  width: 100%;
  padding: 0 0 12px;
}
.itemController .checkboxController {
  float: left;
  font-size: 0;
  line-height: 32px;
  letter-spacing: -0.3px;
  color: #333;
}
.itemController .checkboxController input[type="checkbox"] {
  margin-right: 10px;
  vertical-align: middle;
}
.itemController .checkboxController label {
  display: inline-block;
  padding-left: 0;
  font-size: 14px;
  line-height: 32px;
}
#sideArea.cartPriceWing {
  position: absolute;
  top: 0;
  right: 0;
  width: 298px;
  height: 100%;
  z-index: 5;
}
#sideArea.cartPriceWing .priceWrap {
  width: 298px;
}
#sideArea.cartPriceWing .priceWrap .inner {
  width: 100%;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 24px 20px 20px 20px;
}
#sideArea.cartPriceWing .priceWrap .priceTitle {
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.06em;
  margin-bottom: 28px;
}
#sideArea.cartPriceWing .priceWrap .priceList {
  border-bottom: 1px solid #eee;
  padding-bottom: 18px;
}
#sideArea.cartPriceWing .priceWrap .totalPrice {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 17px;
}
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet {
  margin: 30px -7px -6px -7px;
}
.itemController button.deleteCartItems {
  float: right;
  height: 32px;
  padding: 0 12px;
  margin-left: 8px;
  font-size: 13px;
  line-height: 32px;
  letter-spacing: -0.2px;
  text-align: center;
  color: #333;
  border-radius: 6px;
  border: 1px solid #ddd;
}
.cartListWrapper {
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
}
.cartListWrapper .cartHeader {
  height: 53px;
  padding: 0 20px 0 19px;
  border-bottom: 1px solid #eee;
}
.cartListWrapper {
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
}
.cartListWrapper > ul {
  display: inline-block;
  width: 100%;
}
.cartListWrapper > ul > li:first-child {
  border-top: none;
}
.cartListWrapper > ul > li {
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
.cartListWrapper .hasCheckbox {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  padding-left: 28px;
}
.cartListWrapper [class*="cartProduct"] {
  width: 100%;
}
.cartListWrapper .cartQty {
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
.cartListWrapper .cartAction {
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
.cartListWrapper .cartAction a:only-child,
.cartListWrapper .cartAction button:not(.deleteItem):only-child {
  margin-right: -3px;
  margin-left: -4px;
}
.productItem .productThumb {
  height: 80px;
}
.productItem {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.productItem .productData .productTitle {
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: -0.3px;
  color: #333;
}
.productItem .productThumb .productStatus {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.2px;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
}
.productItem .productThumb a {
  width: 80px;
  height: 80px;
  background: #e5e5e5;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
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
.cartListWrapper .cartHeader .checkboxSet input[type="checkbox"] + label,
.cartListWrapper .cartHeader h3 {
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  line-height: 53px;
  letter-spacing: -0.5px;
  color: #333;
  vertical-align: middle;
}
.cartListWrapper .cartHeader .checkboxSet input[type="checkbox"]:checked {
  border: 0;
  background: #ef2a23
    url(//static.lotteon.com/p/order/assets/img/checkbox_on.svg) no-repeat;
  background-size: 100%;
}
.checkboxSet,
.radioSet {
  display: inline-block;
  float: left;
}
.cartListWrapper .cartFooter {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 48px;
  padding: 0 20px;
  font-size: 13px;
  line-height: 48px;
  letter-spacing: 0.2px;
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
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet li .btnOrder {
  display: block;
  line-height: 52px;
  text-align: center;
  font-size: 18px;
  background: #ef2a23;
  color: #fff;
  border-radius: 6px;
}
#sideArea.cartPriceWing .priceWrap .priceList dl dt {
  position: relative;
  width: 50%;
  display: table-cell;
  padding-top: 3px;
  font-size: 14px;
  color: #757575;
  line-height: 1.57;
  letter-spacing: -0.3px;
  vertical-align: top;
  white-space: normal;
}
#sideArea.cartPriceWing .priceWrap .priceTitle {
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.06em;
  margin-bottom: 28px;
}
#sideArea.cartPriceWing .priceWrap .totalPrice dd .price {
  font-size: 28px;
  font-weight: 700;
}
#sideArea.cartPriceWing .priceWrap ul.cartBtnSet li .btnGift {
  display: block;
  line-height: 34px;
  text-align: center;
  font-size: 13px;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 6px;
}
#sideArea.cartPriceWing .priceWrap .priceTitle {
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.06em;
  margin-bottom: 28px;
}
.cartListWrapper .cartPrice {
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
  min-width: 166px;
  text-align: center;
}
.cartListWrapper .cartPrice:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  background-color: #eee;
}
.cartListWrapper .cartPrice {
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
  min-width: 166px;
}
.cartListWrapper .cartPrice .currentPrice {
  display: inline-block;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: -0.3px;
  color: #333;
  text-align: center;
}
.cartListWrapper strong {
  font-weight: 700;
}
.cartListWrapper .cartQty {
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
.cartListWrapper > ul > li button.deleteItem {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 22px;
  min-width: 22px;
  height: 22px;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
  background-image: url(//static.lotteon.com/p/order/assets/img/icon_delete-item_new.svg);
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
  *overflow: visible;
}
#sideArea.cartPriceWing .priceWrap .priceList dl dt {
  position: relative;
  width: 50%;
  display: table-cell;
  padding-top: 3px;
  font-size: 14px;
  color: #757575;
  line-height: 1.57;
  letter-spacing: -0.3px;
  vertical-align: top;
  white-space: normal;
  /* text-align: left; */
}
.productItem .productData .productDeliveryInfo {
  margin-top: 6px;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.3px;
  color: #4185ed;
}
.productItem .productData .productOption {
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: -0.3px;
  color: #757575;
}
.productItem .productData .productTitle {
  margin-bottom: 5px;
  font-size: 15px;
  line-height: 1.47;
  letter-spacing: -0.3px;
  color: #333;
}
.pagination a[data-v-35e7960e],
.pagination button[data-v-35e7960e],
.pagination span[data-v-35e7960e] {
  display: inline-block;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  color: #999;
  line-height: 27px;
  margin: 0 2px;
  text-indent: 8px;
}
.cartListWrapper + .cartListWrapper:not(.noHeader) {
  margin-top: 25px;
}
</style>
