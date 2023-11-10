import { createApp } from 'vue'

import Popup from '@/popup/popup.vue'
import '@/common/global.less'

const app = createApp(Popup)

app.mount('#app')