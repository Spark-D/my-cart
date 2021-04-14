<template>
  <!-- 배송그룹시작 -->
              <div data-v-7f6b5e24="" class="cartListWrapper"><div data-v-7f6b5e24="" class="cartHeader">
              <div data-v-7f6b5e24="" class="checkboxSet" ><input data-v-7f6b5e24="" id="cart0_0" name="cart0_0" type="checkbox" class="cur_hand" value="0"><label data-v-7f6b5e24="" for="cart0_0" class="cur_hand">
                        {{groupInfo.trNo}}
                        <p data-v-7f6b5e24="" class="branch">
                          
                        </p></label></div><!----></div>
                        
                        <ul data-v-7f6b5e24=""><!----><!---->
                        
                        
                        <!-- 카트 아이템 -->
                        <cart-item
                            v-for="item in groupInfo.omCartList" 
                            :key="item.cartSn"
                            :cartItemInfo="item"
                        ></cart-item>
                        
                        
                        </ul><!----><!----><div data-v-7f6b5e24="" class="cartFooter"><p data-v-7f6b5e24="">
                        0원 +
                        배송비 0원
                        - 할인 0원
                        =
                        <span data-v-7f6b5e24="" class="price"><strong data-v-7f6b5e24="">0</strong>원</span><!----></p><!----></div>
              </div>
                 <!-- 배송그룹 끝        -->
</template>

<script>
import cartItem from "../components/CartItem.vue";
export default {
    name: "CartGroup",
    components: {
        cartItem
    },
    props: {
        groupInfo: {
            type: Object,
            defaultValue: {}
        }
    }
}
</script>

<style>

</style>