export default function ({$axios, redirect}) {
  $axios.onRequest(() => {
    window.$nuxt.$store.commit('UPDATE_LOADING', true);
  });
  $axios.onResponse(() => {
    setTimeout(function () {
      window.$nuxt.$store.commit('UPDATE_LOADING', false);
    }, 1000);
  });
}
