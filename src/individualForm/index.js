import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import store from './store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuelidate);

/**
 * Root Vue instance initialization
 */
new Vue({
    el: '#individual-form',
    store,
    render: h => h(App)
})