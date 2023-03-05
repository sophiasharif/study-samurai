import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MathJax, { initMathJax, renderByMathjax } from "mathjax-vue3";

function onMathJaxReady() {
    const el = document.getElementById("elementId");
    renderByMathjax(el);
}
initMathJax({}, onMathJaxReady);

createApp(App).use(MathJax).use(router).mount('#app')
