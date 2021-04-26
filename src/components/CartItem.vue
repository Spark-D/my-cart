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
        :disabled="compCartItemInfo.product.slPrc ? false : true"
        @change="checkItem(compCartItemInfo)"
        :checked="compCartItemInfo.checked"
      /><label for="cartProduct1_1" class="blind"
        >울트라 훼이셜 크림 125ml</label
      >
      <div class="productItem">
        <div class="productThumb">
          <a
            :href="
              `//www.lotteon.com/p/product/${compCartItemInfo.product.spdNo}?sitmNo=${compCartItemInfo.product.sitmNo}&amp;dp_infw_cd=SCT&amp;entryPoint=mysel&amp;mall_no=1`
            "
          >
            <img
              :src="
                `https://contents.lotteon.com/itemimage/_v090000/LE/12/04/36/90/04/_1/22/34/70/90/8/${compCartItemInfo.product.sitmNo}_M.jpg/dims/resizemc/100x100`
              "
              alt="울트라 훼이셜 크림 125ml"
          /></a>
        </div>
        <div class="productData">
          <p class="productFlag"></p>
          <a
            :href="
              `//www.lotteon.com/p/product/${compCartItemInfo.product.spdNo}?sitmNo=${compCartItemInfo.product.sitmNo}&amp;dp_infw_cd=SCT&amp;entryPoint=mysel&amp;mall_no=1`
            "
          >
            <p class="productTitle">
              <strong>{{ compCartItemInfo.product.brdNm }}</strong>
              {{ compCartItemInfo.product.spdNm }}
              <!-- [{{
                compCartItemInfo.cartSn
              }}]<br />
              [{{ compCartItemInfo.product.trNo }}] -->
            </p></a
          >
          <div class="productOption">
            <span
              class="original"
              style="color: red;"
              v-if="compCartItemInfo.product.returnCode != '200'"
              >품절</span
            >
            <ul></ul>
            <!-- <button class="moreView">
              옵션 더 보기
            </button> -->
          </div>
          <p class="productDeliveryInfo">
            {{ compCartItemInfo.product.estmtDlvTxt }}
          </p>
        </div>
      </div>
    </div>

    <div class="cartQty order-2">
      <div class="spinnerBox">
        <button
          class="minus"
          :class="{ disabled: compCartItemInfo.odQty <= 1 }"
          :disabled="compCartItemInfo.odQty <= 1"
          v-on:click="$emit('minusQty', compCartItemInfo)"
        >
          -
        </button>
        <div class="number">
          <input
            type="number"
            id="number_00"
            max="3"
            :value="compCartItemInfo.odQty"
          /><label for="number_00" class="blind"></label>
        </div>
        <button class="plus" @click="$emit('addQty', compCartItemInfo)">
          +
        </button>
      </div>
    </div>
    <div class="cartPrice order-3">
      <p class="currentPrice">
        <span style="display: none;">
          <img
            src="//static.lotteon.com/p/order/assets/img/s_loading.gif"
            class="s_loading"/></span
        ><strong>{{
          compCartItemInfo.product.slPrc
            ? setComma(compCartItemInfo.product.slPrc * compCartItemInfo.odQty)
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
            ><span data-v-b41647a4="" class=""> 정기배송 담기 </span></span
          >
        </button>
      </div>
    </div>

    <div class="cartPrice order-3" style="display: none;">
      <button type="button" class="buttonCartProduct">
        <span class="icon"></span>
        다시 담기
      </button>
    </div>
    <button
      type="button"
      class="deleteItem"
      v-on:click="deleteCart(compCartItemInfo.cartSn)"
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
    checkItem(cart) {
      // console.log(cartSn);
      this.$emit("itemCheck", cart);
    },
  },
  computed: {
    compCartItemInfo() {
      return this.cartItemInfo;
    },
  },
};
</script>

<style>
li {
  text-align: -webkit-match-parent;
}
</style>
