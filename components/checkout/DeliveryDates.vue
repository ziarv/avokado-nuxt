<template>
  <div>
    <section>
      <div class="mx-20 flex flex-row flex-wrap sm:!mx-10 sm:!mx-10">
        <div class="delivery_schedule flex flex-row flex-wrap w-full">
          <h1 class="w-full text-[32px] font-['futur-extra'] my-5 sm:!text-[16px]">
            {{ $t('pages.checkout.delivery_schedule') }}</h1>
          <div class="delivery_schedule_btn flex w-full">
            <button
              class="slot_none rounded-md mr-5 bg-[#7CB118] text-[#FFFFFF] py-[15px] px-[50px] sm:!px-[19px] sm:!text-[14px]"
              @click="showDeliverDates">
              {{ $t('pages.checkout.select_delivery_schedule') }}
            </button>
          </div>
          <p v-if="selectedTimeObject" class="mt-5 font-bold">{{ selectedTimeObject.shift_day }}
            {{ selectedTimeObject.shift_date }}
            ({{ selectedTimeObject.start_time_formated }} - {{ selectedTimeObject.end_time_formated }})</p>
        </div>
      </div>
    </section>
    <div class="side_bar_back" :class="{side_bar_id_block:popupShow}" @click="showDeliverDates"></div>
    <aside id="side_bar_date" :class="{side_bar_id_block:popupShow}" class="w-64" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-6 bg-gray-50 bg-[#FFFFFF]">
        <div class="cros" @click="showDeliverDates"><img src="@/assets/img/cross.svg" alt=""></div>
        <div class="side-bar-heading">
          <img src="@/assets/img/calender.svg" alt="">
          <h1> {{ $t('pages.checkout.select_date') }}</h1>
        </div>
        <div class="overflow_auto">
          <div class="overflow_auto_1">
            <button>Select</button>
            <button v-for="(date, index) in delivery_datetime" :key="index" @click="selectDeliveryDate(date,$event)">
              {{ date.date }} <br> {{ date.day }}
            </button>
          </div>
        </div>
        <div v-if="shifts.length > 0" class="overflow_hide">
          <div class="side-bar-heading">
            <img src="@/assets/img/watch.svg" alt="">
            <h1>Select Time</h1>
          </div>
          <ul class="changes_sidebar">
            <li v-for="(shift, index) in shifts" :key="index">
              <a
                href="javascript:void(0)" class="flex items-center p-2 text-base font-normal"
                @click="selectDeliveryTime(shift,$event)">
                <span class="ml-3">{{ shift.start_time_formated }} - {{ shift.end_time_formated }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "DeliveryDates",
  data() {
    return {
      popupShow: false,
      selectedDate: null,
      selectedTime: null,
      selectedTimeObject: null,
      shifts: []
    };
  },
  computed: {
    delivery_datetime() {
      return this.$store.state.checkout.deliveryDatesAndTime;
    }
  },
  watch: {
    delivery_datetime(dates) {
      if (dates.length > 0 && dates[0].date) {
        this.selectedTimeObject = dates[0].shifts[0];
        this.$emit('deliverySelected', {
          data: dates[0].date,
          time: dates[0].shifts[0].fk_shift_id,
        });
      }
    }
  },
  mounted() {
    this.fetchDeliveryDatesAndTime()
  },
  methods: {
    ...mapActions('checkout', ['fetchDeliveryDatesAndTime']),
    showDeliverDates() {
      this.popupShow = !this.popupShow;
      document.body.classList.toggle('overflow_hide')
    },
    async selectDeliveryDate(date, event) {
      this.shifts = date.shifts;
      this.selectedDate = date.date;
      const buttons = document.querySelectorAll('.overflow_auto_1 > button');
      await buttons.forEach((btn) => {
        btn.classList.remove('changes_sidebar_li');
      });
      event.target.classList.toggle('changes_sidebar_li');
    },
    async selectDeliveryTime(time, event) {
      this.selectedTimeObject = time;
      this.selectedTime = time.fk_shift_id;

      const items = document.querySelectorAll('.changes_sidebar > li > a');
      await items.forEach((item) => {
        item.classList.remove('changes_sidebar_li');
      });
      if (event.target.tagName === 'A') {
        event.target.classList.toggle('changes_sidebar_li');
      }
      this.$emit('deliverySelected', {
        data: this.selectedDate,
        time: this.selectedTime,
      });
      this.showDeliverDates();
      document.body.classList.remove('overflow_hide')
    }
  }
}
</script>

<style scoped>

</style>
