import Vue from "vue"
import App from "./App.vue"
import "./styles/app.scss"
import { boot } from "./bootstrap/boot"

Vue.config.productionTip = false

boot()

new Vue({
  ...App,
}).$mount()
