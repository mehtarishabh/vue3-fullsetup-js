// Styles
import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

// External
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';


// Internal
import App from './App.vue'
import router from './router'

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("@/mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);

enableMocking().then(() => {
    app.mount("#app")
})
