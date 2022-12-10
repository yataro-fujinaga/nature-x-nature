import { createApp } from 'vue'
import App from '@/App.vue'

import { createPinia } from 'pinia'
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
