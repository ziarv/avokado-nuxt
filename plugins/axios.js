export default function ({$axios, redirect}) {
  $axios.onRequest(() => {
    window.$nuxt.$store.commit('UPDATE_LOADING', true);
  });
  $axios.onResponse(() => {
    setTimeout(function () {
      window.$nuxt.$store.commit('UPDATE_LOADING', false);
    }, 1000);
  });

  $axios.onError((error) => {
    if (error.response  && error.response.data && error.response.data.message) {
      window.$nuxt.$toast.warning(error.response.data.message);
    }
    window.$nuxt.$store.commit('UPDATE_LOADING', false);
  });
}
