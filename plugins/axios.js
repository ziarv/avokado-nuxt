export default function ({$axios, redirect}) {
  $axios.onRequest(() => {
    if (!window) {
      return
    }
    window.$nuxt.$store.commit('UPDATE_LOADING', true);
  });
  $axios.onResponse(() => {
    if (!window) {
      return
    }
    setTimeout(function () {
      window.$nuxt.$store.commit('UPDATE_LOADING', false);
    }, 1000);
  });

  $axios.onError((error) => {
    if (!window) {
      return
    }
    if (error.response && error.response.data && error.response.data.message) {
      window.$nuxt.$toast.warning(error.response.data.message);
    }
    window.$nuxt.$store.commit('UPDATE_LOADING', false);
  });
}
