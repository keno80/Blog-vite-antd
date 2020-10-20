import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import components from "./utils/antd";
import VMdEditor from "@kangc/v-md-editor/lib/preview";
import '@kangc/v-md-editor/lib/style/preview.css'
import VuePressTheme from '@kangc/v-md-editor/lib/theme/vuepress'

VMdEditor.use(VuePressTheme)

createApp(App).use(router).use(components).use(VMdEditor).mount('#app')