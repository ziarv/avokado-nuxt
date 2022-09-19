<template>
  <div>
    <section v-if="product.id">
      <div
        class="mx-20 flex mt-20 sm:!mt-4 sm:!mt-5 sm:!mx-5 sm:!mx-5 flex-row flex-wrap justify-between sm:!mb-10 sm:!mb-10">
        <div class="product_slider w-[49%] sm:!w-[100%] sm:!w-[100%] h-[100%] relative">
          <div ref="swiper" class="swiper mySwiper_12 mySwiper_5">
            <div class="swiper-wrapper">
              <div class="cards product_slider_1 swiper-slide justify-center">
                <div class="cardse_sec_main">
                  <div class="cardse_first">
                  </div>
                  <div class="cardse_sec">
                  </div>
                </div>
                <div class="cardse">
                  <img :src="product.images.thumbnail" alt="thumbnail">
                </div>
              </div>

            </div>
            <div class="swiper-button-next"><i class="fa-solid fa-arrow-right"></i></div>
            <div class="swiper-button-prev"><i class="fa-solid fa-arrow-left"></i></div>
          </div>
        </div>
        <div
          class="product_slider_09 px-[12px] py-12 sm:!py-4 sm:!py-4 w-[48%] sm:!w-[100%] sm:!w-[100%] rounded-[20px] bg-[#FFFFFF]">
          <div
            class="product_slider_09_heading flex flex-row flex-wrap justify-between px-[20px] sm:!px-[0px] sm:!px-[0px]">
            <h1 class="text-[32px] sm:!text-[24px] sm:!text-[26px] sm:!mb-2.5 sm:!mb-2.5 font-['futur-extra'] mb-5">
              {{ product.name }}
              <small class="!text-[18px]"> {{ product.avokadoAttributes.avokado_item_unit }}</small>
            </h1>
            <div class="product_slider_09_heading_icon">
              <!--              <img src="@/assets/img/heart_dil.svg" alt="">-->
              <!--              <img src="@/assets/img/share.svg" alt="">-->
            </div>
            <h5 v-if="product.priceDiscountedIncTax" class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[16px] text-[#7CB118] font-bold mb-5">
                <span class="line-through">
             {{ product.price_tax_inc }} {{ product.currency_symbol.toUpperCase() }} </span> -
              {{ product.priceDiscountedIncTax }}
              {{ product.currency_symbol.toUpperCase() }}
            </h5>
            <h5 v-else class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[16px] text-[#7CB118] font-bold mb-5">
              {{ product.price_tax_inc }}
              {{ product.currency_symbol.toUpperCase() }}
            </h5>
            <p
              v-if="product.availableQuantity > 0"
              class="w-[100%] flex items-center sm:!text-[10px] sm:!text-[10px] mb-5"><img
              src="~/assets/img/circle.svg"
              class="mr-4 sm:!w-[10px] sm:!mr-[0.5rem] sm:!mr-[0.5rem] sm:!w-[10px]" alt="">
              In Stock
            </p>
            <div class="product_btn sm:!w-[23%]">
              <button
                :disabled="qty_in_cart <= 0" class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]"
                @click="remove">
                <i class="fa-solid fa-minus"></i></button>
              <input v-model="qty_in_cart" type="text" class="add_product addShow_product sm:!w-[25px]">
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
        <div class="show">
          <h1 class="text-[32px] sm:!text-[24px] sm:!text-[26px] sm:!mb-2.5 sm:!mb-2.5 font-['futur-extra'] mb-5">
            {{ product.name }}
          </h1>
          <div class="product_slider_09_heading_icon">

          </div>
          <h5 v-if="product.priceDiscountedIncTax" class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[16px] text-[#7CB118] font-bold mb-5">
                <span class="line-through">
             {{ product.price_tax_inc }} {{ product.currency_symbol.toUpperCase() }} </span> -
            {{ product.priceDiscountedIncTax }}
            {{ product.currency_symbol.toUpperCase() }}
          </h5>
          <h5 v-else class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[16px] text-[#7CB118] font-bold mb-5">
            {{ product.price_tax_inc }}
            {{ product.currency_symbol.toUpperCase() }}
          </h5>
          <p
            v-if="product.availableQuantity > 0"
            class="w-[100%] flex items-center sm:!text-[10px] sm:!text-[10px] mb-5"><img
            src="~/assets/img/circle.svg"
            class="mr-4 sm:!w-[10px] sm:!mr-[0.5rem] sm:!mr-[0.5rem] sm:!w-[10px]" alt="">
            In
            Stock</p>
          <div class="product_btn sm:!w-[23%]">
            <button
              :disabled="qty <= 0" class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]"
              @click="remove">
              <i class="fa-solid fa-minus"></i></button>
            <input v-model="qty" type="text" class="add_product addShow_product sm:!w-[25px]">
            <button class="add_product addShow_product sm:!text-[12px] sm:!py-[0px] sm:!px-[5px]" @click="add">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <!-- <hr class="w-[100%] mb-7 sm:!mb-3 sm:!mb-3"> -->
        <div>
          <h4
            class="w-[100%] text-[22px] sm:!text-[14px] sm:!text-[14px] text-[#000000] font-bold mb-5 situation">
            Overview
          </h4>
        </div>

        <div
          class="product_slider_boot situation_heandle px-[12px] py-12 sm:!py-4 sm:!py-4 w-[48%] sm:!w-[100%] sm:!w-[100%] rounded-[20px] bg-[#FFFFFF]">
          <div
            class="product_slider_09_heading flex flex-row flex-wrap justify-between px-[20px] sm:!px-[0px] sm:!px-[0px]">
            <p class="w-[100%] text-[#838383] text-[16px] sm:!text-[12px] sm:!text-[12px]">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  name: "ShowProduct",
  data() {
    return {
      qty: 0,
      slider: null,
      id: isNaN(this.$route.params.id) ? this.$route.query.pid : this.$route.params.id
    }
  },
  async fetch() {
    await this.fetchSingleById({id: this.id, context: this})
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        }
      ]
    };
  }
  ,
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
  }
  ,
  watch: {}
  ,
  mounted() {
    this.qty = this.qty_in_cart;
    // this.fetchSingleById(this.id)
    //   .then(() => {
    this.initSlider();
    // });
  },
  methods: {
    ...mapActions('products', ['fetchSingleById']),
    ...mapActions('cart', ['removeCartProduct', 'addCartAction']),
    add() {
      if (this.qty_in_cart.toString() === this.product.availableQuantity.toString()) {
        this.$toast.warning(this.$t("messages.quantity_not_available"));
        return false;
      }
      if (parseInt(this.qty_in_cart) >= parseInt(this.product.max_allowed_qty)) {
        this.$toast.warning("Maximum Allowed Quantity for purchase is " + this.product.max_allowed_qty);
        return false;
      }
      this.addCartAction({product_id: this.product.id, qty: 1})
        .then(() => {
          this.qty++;
        });
    },
    async remove() {
      if (this.qty_in_cart <= 0) {
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
