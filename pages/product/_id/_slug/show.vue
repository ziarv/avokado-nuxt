<template>
  <div v-if="product.id">
    <section class="mb-5">
      <div
        class="mx-20 flex mt-20 sm:!mt-10 sm:!mt-5 sm:!mx-10 sm:!mx-5 flex-row flex-wrap justify-between sm:!mb-10 sm:!mb-10">
        <div class="product_slider w-[49%] sm:!w-[100%] sm:!w-[100%] h-[100%] relative">
          <div ref="swiper" class="swiper mySwiper_12 mySwiper_5">
            <div class="swiper-wrapper">
              <div class="cards product_slider_1 swiper-slide justify-center">
                <div class="cardse">
                  <img :src="product.images.thumbnail" alt="thumbnail">
                </div>
              </div>
            </div>
            <div class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="fa-solid fa-arrow-left"></i></div>
          </div>
          <!--          <div class="swiper mySwiper_4">-->
          <!--            <div class="swiper-wrapper">-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--              <div class="swiper-slide">-->
          <!--                <img src="@/assets/img/apple.png" alt="image"/>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <div
          class="product_slider_09 px-[12px] py-12 sm:!py-4 sm:!py-4 w-[48%] sm:!w-[100%] sm:!w-[100%] rounded-[20px] bg-[#FFFFFF]">
          <div
            class="product_slider_09_heading flex flex-row flex-wrap justify-between px-[20px] sm:!px-[0px] sm:!px-[0px]">
            <h1
              class="text-[32px] sm:!text-[24px] sm:!text-[26px] sm:!mb-2.5 sm:!mb-2.5 font-['futur-extra'] mb-3">
              {{ product.name }}
              <small class="!text-[18px]"> {{ product.avokadoAttributes.avokado_item_unit }}</small>
            </h1>
            <div class="product_slider_09_heading_icon">

<!--              <img src="@/assets/img/Vector.svg" alt="">-->
<!--              <img src="@/assets/img/share.svg" alt="">-->
            </div>

            <h5 class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[16px] text-[#7CB118] font-bold mb-5">
              {{ product.price_tax_inc }}
              {{ product.currency_symbol.toUpperCase() }}
            </h5>
            <!--            <span class="w-[100%] text-[14px] sm:!text-[12px] sm:!text-[12px] flex text-[#B7B7B7] mb-5"><img-->
            <!--              src="@/assets/img/Star.svg" alt="">-->
            <!--                        <span class="mx-1 text-[#000000]">4.9</span>(200)-->
            <!--                    </span>-->
            <p
v-if="product.availableQuantity > 0"
               class="w-[100%] flex items-center sm:!text-[10px] sm:!text-[10px] mb-5"><img
              src="~/assets/img/circle.svg"
              class="mr-4 sm:!w-[10px] sm:!mr-[0.5rem] sm:!mr-[0.5rem] sm:!w-[10px]" alt="">
              In
              Stock
            </p>
            <!--            <button-->
            <!--              class="bg-[#7CB118] text-[#FFFFFF] py-2 rounded-full px-9 mb-12 sm:!mx-5 sm:!mx-5 sm:!my-1 sm:!my-1 sm:!mb-3 sm:!mb-3">-->
            <!--              Add-->
            <!--              to cart-->
            <!--            </button>-->
            <div class="product_btn sm:!w-[23%]">
              <button
:disabled="qty <= 0" class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]" @click="remove">
                <i class="fa-solid fa-minus"></i></button>
              <input v-model="qty" type="text" class="add_product addShow_product sm:!w-[25px]">
              <button class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]" @click="add">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
            <hr class="w-[100%] mb-7 sm:!mb-3 sm:!mb-3">
            <h4 class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[14px] text-[#000000] font-bold mb-5">
              Quick Overview
            </h4>
            <p class="w-[100%] text-[#838383] text-[16px] sm:!text-[12px] sm:!text-[12px]">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--    <section>-->
    <!--      <div class="mx-20 sm:!mx-10 sm:!mx-5 flex">-->
    <!--        <div class="desci">-->
    <!--          <h1 class="text-[26px] font-['futur-extra'] mb-10 sm:!text-[22px] sm:!text-[22px] sm:!mb-5 sm:!mb-5">-->
    <!--            Description</h1>-->
    <!--          <p class="text-[25px] text-[#838383] sm:!text-[15px] sm:!text-[15px]">Lorem ipsum dolor sit amet,-->
    <!--            consectetur adipiscing elit. Aliquam-->
    <!--            auctor a tellus et sodales.-->
    <!--            Pellentesque vel hendrerit dui. Curabitur molestie lacus eu eros placerat fermentum. Maecenas semper-->
    <!--            nunc turpis, a sagittis urna mattis eget. </p>-->
    <!--          <hr class="mt-10">-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </section>-->

    <!--    <product-section></product-section>-->
    <hr class="m-20 sm:!mt-10 sm:!mb-5 sm:!mx-10 sm:!mt-10 sm:!mb-5 sm:!mx-10">
    <key-values></key-values>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "ProductIndex",
  data() {
    return {
      qty: 0,
      slider: null,
      id: this.$route.params.id
    }
  },
  computed: {
    cart_items() {
      return this.$store.state.cart.cart_items;
    },
    qty_in_cart() {
      if (this.cart_items === undefined || this.cart_items.length <= 0 || !this.product.id) {
        return 0;
      }
      const product = this.cart_items.filter(
        item => item.product_id.toString() === this.product.id.toString()
      )[0];
      return product ? product.quantity : 0;
    },
    product() {
      return this.$store.state.products.single;
    }
  },
  watch: {},
  mounted() {
    this.qty = this.qty_in_cart;
    this.fetchSingleById(this.id)
      .then(() => {
        this.initSlider();
      });
  },
  methods: {
    ...mapActions('products', ['fetchSingleById']),
    ...mapActions('cart', ['removeCartProduct', 'addCartAction']),
    add() {
      this.addCartAction({product_id: this.product.id, qty: 1})
        .then(() => {
          this.qty++;
        });
    },
    async remove() {
      if (this.qty <= 0) {
        return;
      }
      await this.addCartAction({product_id: this.product.id, qty: -1})
        .then(() => {
          this.qty--;
        });
    },
    async initSlider() {
      await this.$nextTick();
      if (this.slider) {
        this.slider.reInit();
        return;
      }
      // eslint-disable-next-line no-new
      this.slider = new Swiper(this.$refs.swiper, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  }
}
</script>

<style scoped>

</style>
