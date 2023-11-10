
import { createApp } from 'vue'
import '@/common/global.less'

import NewTab from '@/newTab/newTab.vue'

const app = createApp(NewTab)

app.mount('#app')