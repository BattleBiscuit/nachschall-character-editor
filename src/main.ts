import { createApp } from 'vue'
import { reactive } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootswatch/dist/darkly/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


const app = createApp(App)
                    .component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
