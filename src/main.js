import { createApp } from 'vue'
import App from './App.vue'
import { createNotivue } from 'notivue'

const notivue = createNotivue(/* options */)
const app = createApp(App)

app.use(notivue)
app.mount('#app')
