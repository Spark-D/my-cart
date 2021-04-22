<template>
  <!-- 상품컴포넌트 시작 -->
  <li class="col-3 withProduct hasDelete">
    <div class="cartProduct order-1 hasCheckbox">
      <input
        id="cartProduct1_1"
        type="checkbox"
        name="cartProduct1cs224302745"
        area-title="아이르 선택"
        class="cur_hand"
        :disabled="cartItemInfo.product[0].slPrc ? false : true"
      /><label for="cartProduct1_1" class="blind"
        >울트라 훼이셜 크림 125ml</label
      >
      <div class="productItem">
        <div class="productThumb">
          <a
            :href="
              `//www.lotteon.com/p/product/${cartItemInfo.product[0].spdNo}?sitmNo=${cartItemInfo.product[0].sitmNo}&amp;dp_infw_cd=SCT&amp;entryPoint=mysel&amp;mall_no=1`
            "
          >
            <img
              :src="
                `https://contents.lotteon.com/itemimage/_v090000/LE/12/04/36/90/04/_1/22/34/70/90/8/${cartItemInfo.product[0].sitmNo}_M.jpg/dims/resizemc/100x100`
              "
              alt="울트라 훼이셜 크림 125ml"/></a
          ><!---->
        </div>
        <div class="productData">
          <p class="productFlag"></p>
          <a
            :href="
              `//www.lotteon.com/p/product/${cartItemInfo.product[0].spdNo}?sitmNo=${cartItemInfo.product[0].sitmNo}&amp;dp_infw_cd=SCT&amp;entryPoint=mysel&amp;mall_no=1`
            "
          >
            <p class="productTitle">
              <strong style="-webkit-text-stroke: medium;">{{
                cartItemInfo.product[0].brdNm
              }}</strong>
              {{ cartItemInfo.product[0].spdNm }} <br />[{{
                cartItemInfo.cartSn
              }}]<br />
              [{{ cartItemInfo.product[0].trNo }}]
            </p></a
          >
          <div class="productOption">
            <span class="original">단일상품</span>
            <ul></ul>
            <!-- <button class="moreView">
              옵션 더 보기
            </button> -->
          </div>
          <p class="productDeliveryInfo">
            {{ cartItemInfo.product[0].estmtDlvTxt }}
          </p>
          <!----><!----><!---->
        </div>
      </div>
    </div>
    <!---->
    <div class="cartQty order-2">
      <div class="spinnerBox">
        <button
          class="minus"
          :class="{ disabled: cartItemInfo.odQty <= 1 }"
          :disabled="cartItemInfo.odQty <= 1"
          v-on:click="$emit('minusQty', cartItemInfo)"
        >
          -
        </button>
        <div class="number">
          <input
            type="number"
            id="number_00"
            max="3"
            :value="cartItemInfo.odQty"
          /><label for="number_00" class="blind"></label>
        </div>
        <button class="plus" @click="$emit('addQty', cartItemInfo)">+</button>
      </div>
      <button
        data-v-48f42559=""
        data-v-29682b0a=""
        class="cartWish sizeMini alignLeft wishGray"
      >
        <span data-v-48f42559="" class="inner"
          ><!---->
          <div
            data-v-29682b0a=""
            class="lottieObject"
            data-v-48f42559=""
            style="width: 22px; height: 22px;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 22"
              width="22"
              height="22"
              preserveAspectRatio="xMidYMid meet"
              style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
            >
              <defs>
                <clipPath id="__lottie_element_54">
                  <rect width="22" height="22" x="0" y="0"></rect>
                </clipPath>
              </defs>
              <g clip-path="url(#__lottie_element_54)">
                <g
                  transform="matrix(1,0,0,1,-198.92599487304688,-119.0570068359375)"
                  opacity="1"
                  style="display: block;"
                >
                  <g
                    opacity="1"
                    transform="matrix(1,0,0,1,209.92599487304688,130.2169952392578)"
                  >
                    <path
                      fill="rgb(153,153,153)"
                      fill-opacity="1"
                      d=" M3.2130000591278076,-6.874000072479248 C2.0739998817443848,-6.874000072479248 0.9819999933242798,-6.373000144958496 0.1770000010728836,-5.480999946594238 C0.1770000010728836,-5.480999946594238 0.0010000000474974513,-5.28000020980835 0.0010000000474974513,-5.28000020980835 C0.0010000000474974513,-5.28000020980835 -0.17599999904632568,-5.480999946594238 -0.17599999904632568,-5.480999946594238 C-0.9800000190734863,-6.373000144958496 -2.072999954223633,-6.874000072479248 -3.2119998931884766,-6.874000072479248 C-4.35099983215332,-6.874000072479248 -5.442999839782715,-6.373000144958496 -6.248000144958496,-5.480999946594238 C-7.083000183105469,-4.544000148773193 -7.5,-3.3239998817443848 -7.5,-2.1029999256134033 C-7.5,-0.8830000162124634 -7.083000183105469,0.33799999952316284 -6.248000144958496,1.2740000486373901 C-6.248000144958496,1.2740000486373901 -2.1760001182556152,5.611999988555908 -2.1760001182556152,5.611999988555908 C-2.132999897003174,5.6579999923706055 -2.0889999866485596,5.702000141143799 -2.0429999828338623,5.744999885559082 C-0.8410000205039978,6.874000072479248 1.0490000247955322,6.814000129699707 2.177000045776367,5.611999988555908 C2.177000045776367,5.611999988555908 6.249000072479248,1.2740000486373901 6.249000072479248,1.2740000486373901 C7.083000183105469,0.3370000123977661 7.5,-0.8830000162124634 7.5,-2.1029999256134033 C7.5,-3.3239998817443848 7.083000183105469,-4.544000148773193 6.249000072479248,-5.480999946594238 C5.445000171661377,-6.373000144958496 4.3520002365112305,-6.874000072479248 3.2130000591278076,-6.874000072479248z M5.447000026702881,0.5220000147819519 C5.447000026702881,0.5220000147819519 1.3760000467300415,4.859000205993652 1.3760000467300415,4.859000205993652 C1.031000018119812,5.22599983215332 0.5640000104904175,5.436999797821045 0.05999999865889549,5.453000068664551 C-0.45100000500679016,5.4730000495910645 -0.9229999780654907,5.288000106811523 -1.2910000085830688,4.942999839782715 C-1.2910000085830688,4.942999839782715 -5.426000118255615,0.5429999828338623 -5.426000118255615,0.5429999828338623 C-6.7270002365112305,-0.9160000085830688 -6.7270002365112305,-3.2909998893737793 -5.431000232696533,-4.744999885559082 C-4.831999778747559,-5.4079999923706055 -4.044000148773193,-5.7729997634887695 -3.2119998931884766,-5.7729997634887695 C-2.380000114440918,-5.7729997634887695 -1.5920000076293945,-5.4079999923706055 -1.003000020980835,-4.75600004196167 C-1.003000020980835,-4.75600004196167 0.0010000000474974513,-3.6110000610351562 0.0010000000474974513,-3.6110000610351562 C0.0010000000474974513,-3.6110000610351562 0.9940000176429749,-4.74399995803833 0.9940000176429749,-4.74399995803833 C2.193000078201294,-6.072000026702881 4.241000175476074,-6.065999984741211 5.426000118255615,-4.75 C6.724999904632568,-3.2909998893737793 6.724999904632568,-0.9150000214576721 5.447000026702881,0.5220000147819519z"
                    ></path>
                  </g>
                </g>
                <g style="display: none;">
                  <g><path></path></g>
                </g>
              </g>
            </svg>
          </div>
          <!----><!----></span
        >
      </button>
    </div>
    <div class="cartPrice order-3">
      <!---->
      <p class="currentPrice">
        <span style="display: none;">
          <img
            src="//static.lotteon.com/p/order/assets/img/s_loading.gif"
            class="s_loading"/></span
        ><strong>{{
          cartItemInfo.product[0].slPrc
            ? setComma(cartItemInfo.product[0].slPrc * cartItemInfo.odQty)
            : 0
        }}</strong
        >원
      </p>
      <p class="priceInfo" style="display: none;"></p>
      <a href="#none" class="couponChange" style="display:none">
        할인변경
      </a>
      <div class="btnWrap" style="display: none;">
        <button data-v-b41647a4="" class="hasIcon util sizeFull alignLeft">
          <span data-v-b41647a4="" class="inner"
            ><span data-v-b41647a4="" class="icon cart"></span
            ><span data-v-b41647a4="" class=""> 정기배송 담기 </span
            ><!----></span
          >
        </button>
      </div>
    </div>
    <!---->
    <div class="cartPrice order-3" style="display: none;">
      <button type="button" class="buttonCartProduct">
        <span class="icon"></span>
        다시 담기
      </button>
    </div>
    <button
      type="button"
      class="deleteItem"
      v-on:click="deleteCart(cartItemInfo.cartSn)"
    >
      <span class="blind">삭제하기</span>
    </button>
  </li>

  <!--상품 컴포넌트끝-->
</template>

<script>
import { computedMixin } from "../mixins/index.js";
export default {
  name: "CartItem",
  props: {
    cartItemInfo: {
      type: Object,
      defaultValue: {},
    },
  },
  mixins: [computedMixin],
  methods: {
    deleteCart(cartSn) {
      this.$emit("test", cartSn);
    },
  },
};
</script>

<style>
li {
  text-align: -webkit-match-parent;
}
</style>
