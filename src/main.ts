import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { myPluginAA } from "./plugins"

createApp(App).use(store).use(router)
    .use(myPluginAA)
    .mount('#app')
