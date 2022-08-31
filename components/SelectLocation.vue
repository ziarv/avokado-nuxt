<template>
  <div
    v-if="!isLoading"
    class="cities-popup" :class="{'cities-popup-hide':location_selected}">
    <h1 class="text-center">Select City</h1>
    <div class="cities">
      <img
        v-for="(location,index) in service_locations" :key="index" :alt="location.city_name_en"
        :src="require('/assets/img/cities/'+location.city_name_en.toLowerCase()+'.jpg')"
        @click="selectLocation(location)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectLocation",
  computed: {
    service_locations() {
      return this.$store.state.home.service_locations;
    },
    location_selected() {
      return this.$store.state.local.location_selected;
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  methods: {
    selectLocation(location) {
      this.$store.commit('local/UPDATE_CITY_ID', location.id);
      this.$store.commit('local/UPDATE_WAREHOUSE_ID', location.warehouse_id);
      this.$store.commit('local/UPDATE_LOCATION_SELECTED', true);
      window.location.reload();
    }
  }

}
</script>
<style scoped>
.cities-popup-hide {
  display: none !important;
}

.cities-popup {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 11111;
  background-color: rgb(255 255 255  / 80%);
}

.cities-popup > h1 {
  align-self: center;
  font-size: 2rem;
  margin-bottom: 15px;
}

.cities {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}


.cities > img {
  margin: auto;
  width: 300px;
  height: 150px;
  /*margin-left: 15px;*/
  cursor: pointer;
}
</style>
