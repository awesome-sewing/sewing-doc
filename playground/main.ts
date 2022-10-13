import { createApp } from 'vue';
import App from './App.vue';
import { SewingDocElement } from '../src/index';
console.log('SewingDocElement', SewingDocElement);

customElements.define('sewing-doc', SewingDocElement);
createApp(App).mount('#app');
