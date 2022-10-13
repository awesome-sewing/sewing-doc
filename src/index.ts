import './index.css';
import SewingDoc from './SewingDoc.ce.vue';
import { defineCustomElement } from 'vue';

const SewingDocElement = defineCustomElement(SewingDoc);

export { SewingDoc, SewingDocElement };
export default SewingDocElement;
