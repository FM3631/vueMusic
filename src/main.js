// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//导入mint-ui
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
/* import { Swipe, SwipeItem ,Navbar, TabItem} from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem); */

// 引入mui
import './lib/mui/css/mui.min.css'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import './lib/mui/js/mui.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
