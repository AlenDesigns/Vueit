import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(Vuelidate);

new Vue({
    el: '#individual-form',
    render: h => h(App)
})