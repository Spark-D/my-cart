<template>
  <div id="sideArea" class="cartPriceWing">
    <div class="priceWrap vue-affix affix-top">
      <div class="inner">
        <div class="priceTitle">
          결제예정금액
        </div>
        <div class="priceList">
          <dl>
            <dt>
              상품금액
            </dt>
            <dd>{{ setComma(prodPrice) }}<span>원</span></dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd><!---->0<span>원</span></dd>
          </dl>
          <dl>
            <dt>
              상품할인금액
            </dt>
            <dd><!----><!---->0<span>원</span></dd>
          </dl>
        </div>
        <dl class="totalPrice">
          <dt>
            총
            <span class="colorPrimary">{{ prodCnt }}</span
            >건
          </dt>
          <dd class="price">
            <!---->
            <strong class="price colorPrimary">{{
              setComma(prodPrice)
            }}</strong>
            <span class="won colorPrimary">원</span>
          </dd>
        </dl>
        <ul class="cartBtnSet">
          <li>
            <a href="#none" class="btnOrder">주문하기</a>
          </li>
          <li>
            <a href="#none" class="btnGift" style="display:none">선물하기</a>
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
        // console.log(p.checked);
        if (p.checked) {
          price += p.slPrc * p.odQty;
        }
      }
      return price;
    },
    prodCnt() {
      let size = 0;
      for (let p of this.prodList) {
        // console.log(p.checked);
        if (p.checked) {
          ++size;
        }
      }
      return size;
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
#sideArea.cartPriceWing .priceWrap .totalPrice dd {
  text-align: right;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
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
#sideArea.cartPriceWing .priceWrap .priceList dl {
  display: table;
  table-layout: fixed;
  width: 100%;
  margin-top: 12px;
  margin-bottom: 0;
  line-height: normal;
}
#sideArea.cartPriceWing .priceWrap .priceList dl dd {
  font-size: 16px;
  width: 50%;
  display: table-cell;
  position: relative;
  text-align: right;
  font-weight: 700;
  word-break: break-all;
  vertical-align: top;
  line-height: 1.57;
}
#sideArea.cartPriceWing .priceWrap .priceList {
  border-bottom: 1px solid #eee;
  padding-bottom: 18px;
}
</style>
