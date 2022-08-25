<template>
  <div id="map" ref="map" style="width:100%;height:400px;">
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
      placeName: ""
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
    markerDragged(event) {
      // eslint-disable-next-line
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({latLng: event.latLng},
        this.geoCoderResponse
      );
    },
    geeCoderFindPlaceName(lat, lng) {
      // eslint-disable-next-line
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({latLng: {lat, lng}},
        this.geoCoderResponse
      );
    },
    geoCoderResponse(response, status) {
      // eslint-disable-next-line
      if (status === google.maps.GeocoderStatus.OK) {
        const location = response[0];
        this.currentLocation.lat = location.geometry.location.lat();
        this.currentLocation.lng = location.geometry.location.lng();
        this.placeName = location.formatted_address;
        this.$emit("locationSelected", {
          lat: this.currentLocation.lat,
          lng: this.currentLocation.lng,
          placeName: this.placeName,
        })
      }
    },
    googleAutocompleteInit() {
      const mapOptions = {
        // eslint-disable-next-line no-undef
        center: new google.maps.LatLng(this.currentLocation.lat, this.currentLocation.lng),
        zoom: 13,
        // eslint-disable-next-line no-undef
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,
        panControlOptions: {
          // eslint-disable-next-line no-undef
          position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
          // eslint-disable-next-line no-undef
          style: google.maps.ZoomControlStyle.LARGE,
          // eslint-disable-next-line no-undef
          position: google.maps.ControlPosition.TOP_left
        }
      };
      // eslint-disable-next-line no-undef
      const map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // eslint-disable-next-line
      const marker = new google.maps.Marker({
        draggable: true,
        position: this.currentLocation,
        map
      });
      // eslint-disable-next-line
      google.maps.event.addListener(marker, "dragend", this.markerDragged);
      // eslint-disable-next-line
      if (window && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition((position) => {
          this.currentLocation.lat = position.coords.latitude;
          this.currentLocation.lng = position.coords.longitude;
          this.geeCoderFindPlaceName(this.currentLocation.lat, this.currentLocation.lng)
        }, () => {
          this.geeCoderFindPlaceName(this.currentLocation.lat, this.currentLocation.lng)
        });

      }
    }
  }
}
</script>

<style scoped>

</style>
