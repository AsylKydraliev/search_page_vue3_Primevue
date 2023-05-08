import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import Tooltip from 'primevue/tooltip';
import "primeflex/primeflex.css";

const app = createApp(App);
app.use(PrimeVue)
    .directive('tooltip', Tooltip)
    .mount('#app')