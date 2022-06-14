import Vue from 'vue'
import App from './App.vue'
import router from '../public/Router/router'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue' // importar componentes
import 'bootstrap/dist/css/bootstrap.css' // incluir los estilos de Bootstrap
import 'bootstrap-vue/dist/bootstrap-vue.css' // incluir los estilos de
import { initializeApp } from "firebase/app"; 

const firebaseConfig = {
  apiKey: "AIzaSyAuv-clNeyoRHWWS-iN8FAV2lDZjnLVmSw",
  authDomain: "viajesdigtmo.firebaseapp.com",
  projectId: "viajesdigtmo",
  storageBucket: "viajesdigtmo.appspot.com",
  messagingSenderId: "789029639741",
  appId: "1:789029639741:web:cca7e4d321c1ec4c43bc54"
};


initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(BootstrapVue) // indicando uso del plugin

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
