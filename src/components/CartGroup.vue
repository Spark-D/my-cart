<template>
  <!-- 배송그룹시작 -->
  <div data-v-7f6b5e24="" class="cartListWrapper">
    <div data-v-7f6b5e24="" class="cartHeader">
      <div data-v-7f6b5e24="" class="checkboxSet">
        <input
          data-v-7f6b5e24=""
          id="cart0_0"
          name="cart0_0"
          type="checkbox"
          class="cur_hand"
          :value="groupInfo.trNo"
          @click="grpCheckMthd"
          :checked="groupInfo.checked"
        /><label data-v-7f6b5e24="" for="cart0_0" class="cur_hand">
          {{ groupInfo.trNo }}
          <p data-v-7f6b5e24="" class="branch"></p
        ></label>
      </div>
      <!---->
    </div>

    <ul data-v-7f6b5e24="">
      <!----><!---->

      <!-- 카트 아이템 -->
      <cart-item
        v-for="item in groupInfo.omCartList"
        :key="item.cartSn"
        :cartItemInfo="item"
        v-on:test="test2"
        @minusQty="minus"
        @addQty="add"
        @itemCheck="itemCheck"
      ></cart-item>
    </ul>
    <!----><!---->
    <div data-v-7f6b5e24="" class="cartFooter">
      <p data-v-7f6b5e24="">
        {{ setComma(total) }}원 + 배송비 0원 - 할인 0원 =
        <span data-v-7f6b5e24="" class="price"
          ><strong data-v-7f6b5e24="">{{ setComma(total) }}</strong
          >원</span
        ><!---->
      </p>
      <!---->
    </div>
  </div>
  <!-- 배송그룹 끝        -->
</template>

<script>
import cartItem from "../components/CartItem.vue";
import { computedMixin } from "../mixins/index.js";
export default {
  name: "CartGroup",
  components: {
    cartItem,
  },
  props: {
    groupInfo: {
      type: Object,
      defaultValue: {},
    },
  },
  mixins: [computedMixin],
  methods: {
    test2(cartSn) {
      this.$emit("deleteCart", cartSn);
    },
    minus(cart) {
      this.$emit("minus", cart);
    },
    add(cart) {
      this.$emit("add", cart);
    },
    itemCheck(cart) {
      // console.log(cartSn);
      this.$emit("itemChecking", cart);
    },
    grpCheckMthd(e) {
      // console.log("group check", e.target.value, e.target.checked);
      this.$emit("grpCheck", e.target.value, e.target.checked);
    },
  },
  computed: {
    total() {
      const arr = JSON.parse(JSON.stringify(this.groupInfo.omCartList));
      let total = 0;
      // console.log(...arr);
      for (const p in arr) {
        // console.log(p);
        if (arr[p].checked) {
          total += arr[p].product.slPrc * arr[p].odQty;
        }
      }
      return total;
    },
  },
};
</script>

<style></style>
