<template>
  <div data-v-7f6b5e24="" id="sideArea" class="cartPriceWing">
    <div data-v-7f6b5e24="" class="priceWrap vue-affix affix-top">
      <div data-v-7f6b5e24="" class="inner">
        <div data-v-7f6b5e24="" class="priceTitle">
          결제예정금액
        </div>
        <div data-v-7f6b5e24="" class="priceList">
          <dl data-v-7f6b5e24="">
            <dt data-v-7f6b5e24="">
              상품금액
            </dt>
            <dd data-v-7f6b5e24="">
              {{ setComma(prodPrice) }}<span data-v-7f6b5e24="">원</span>
            </dd>
          </dl>
          <dl data-v-7f6b5e24="">
            <dt data-v-7f6b5e24="">배송비</dt>
            <dd data-v-7f6b5e24="">
              <!---->0<span data-v-7f6b5e24="">원</span>
            </dd>
          </dl>
          <dl data-v-7f6b5e24="">
            <dt data-v-7f6b5e24="">
              상품할인금액
            </dt>
            <dd data-v-7f6b5e24="">
              <!----><!---->0<span data-v-7f6b5e24="">원</span>
            </dd>
          </dl>
        </div>
        <dl data-v-7f6b5e24="" class="totalPrice">
          <dt data-v-7f6b5e24="">
            총
            <span data-v-7f6b5e24="" class="colorPrimary">{{ prodCnt }}</span
            >건
          </dt>
          <dd data-v-7f6b5e24="" class="price">
            <!---->
            <strong data-v-7f6b5e24="" class="price colorPrimary">{{
              setComma(prodPrice)
            }}</strong>
            <span data-v-7f6b5e24="" class="won colorPrimary">원</span>
          </dd>
        </dl>
        <ul data-v-7f6b5e24="" class="cartBtnSet">
          <li data-v-7f6b5e24="">
            <a data-v-7f6b5e24="" href="#none" class="btnOrder">주문하기</a>
          </li>
          <li data-v-7f6b5e24="">
            <a
              data-v-7f6b5e24=""
              href="#none"
              class="btnGift"
              style="display:none"
              >선물하기</a
            >
          </li>
        </ul>
        <!---->
      </div>
    </div>
  </div>
</template>

<script>
import { computedMixin } from "../mixins/index.js";
export default {
  name: "Bill",
  props: {
    prodList: {
      type: Array,
      defaultValue: [],
    },
  },
  mixins: [computedMixin],
  computed: {
    prodPrice() {
      let price = 0;
      for (let p of this.prodList) {
        price += p.slPrc * p.qty;
      }
      return price;
    },
    prodCnt() {
      return this.prodList.length;
    },
  },
};
</script>

<style>
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
  text-align: -webkit-left;
}
</style>
