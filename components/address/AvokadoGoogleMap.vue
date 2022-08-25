<template>
  <div id="map" ref="map">

  </div>
</template>

<script>

export default {
  name: "AvokadoGoogleMap",
  data() {
    return {
      currentLocation: {
        lat: 21.492,
        lng: 39.177,
      },
    }
  },
  head() {
    return {
      script: [
        {
          hid: 'maps-googleapis',
          src: `https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCPLiVzsj8jwOdhTEmxlTAcVzJgoCbErJM`,
          callback: this.googleAutocompleteInit,
        },
      ],
    };
  },
  mounted() {
    if (window && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        this.currentLocation.lat = position.coords.latitude;
        this.currentLocation.lng = position.coords.longitude;
      }, () => {

      });

    }
  },
  methods: {
    googleAutocompleteInit() {

      const mapProp = {
        // eslint-disable-next-line no-undef
        center: new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng),
        zoom: 5,
      };
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(document.getElementById("map"), mapProp);
      window.map = map;
    }
  }
}
</script>

<style scoped>

</style>
