<template>
  <div class="work-detail-container">
    <a-row type="flex" justify="center" v-if="template">
      <a-col :span="8" class="cover-img">
        <a :href="template.coverImg"><img :src="template.coverImg" alt="" id="cover-img" /></a>
      </a-col>
      <a-col :span="8">
        <h2>{{ template.title }}</h2>
        <p>{{ template.desc }}</p>
        <div class="author">
          <a-avatar>V</a-avatar>
          该模版由 <b>{{ template.author }}</b> 创作
        </div>
        <div class="bar-code-area">
          <span>扫一扫，手机预览</span>
          <canvas id="barcode-container"></canvas>
        </div>
        <div class="use-button">
          <router-link :to="`/editor/${template.id}`">
            <a-button type="primary" size="large"> 使用模版 </a-button>
          </router-link>
          <a-button size="large" @click="download"> 下载图片海报 </a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { generateQRCode, downloadImage } from '../../helper'
import { baseH5URL } from '../../main'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const currentId = route.params.id as string
const template = computed(() => store.getters.getTemplateById(parseInt(currentId)))
const download = () => {
  downloadImage(template.value.coverImg)
}
const channelURL = computed(() => `${baseH5URL}/p/${template.value.id}-${template.value.uuid}`)

onMounted(async () => {
  await store.dispatch('fetchTemplate', { urlParams: { id: currentId } })
  await generateQRCode('barcode-container', channelURL.value, 150)
})
</script>

<style lang="less">
.work-detail-container {
  margin-top: 50px;
}
.cover-img {
  margin-right: 30px;
}
.cover-img img {
  width: 100%;
}
.use-button {
  margin: 30px 0;
}
.ant-avatar {
  margin-right: 10px;
}
.bar-code-area {
  margin: 20px 0;
}
#barcode-container {
  display: block;
}
</style>
