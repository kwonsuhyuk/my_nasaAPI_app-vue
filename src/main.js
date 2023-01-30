import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
import store from './store'  // Same as './store/index.js'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(store)
  .use(router)
  .use(loadImage) 
  .mount('#app')
