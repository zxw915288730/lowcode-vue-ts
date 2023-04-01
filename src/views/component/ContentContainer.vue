<template>
  <div class="template-container">
    <a-row type="flex" justify="center">
      <div class="hot-title">
        <h2 class="hot-template">热门海报</h2>
        <p>只需替换文字和图片，一键自动生成H5</p>
      </div>
    </a-row>
    <a-row :gutter="16">
      <TemplateList :list="testData"></TemplateList>
    </a-row>
    <a-row type="flex" justify="center">
      <a-button type="primary" size="large" @click="loadMorePage">加载更多</a-button>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import TemplateList from '@/components/TemplateList.vue'
import { useStore } from 'vuex'

const store = useStore()
const testData = store.state.templates.data

const loadMorePage = () => {}
</script>

<style lang="less">
.template-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  .content-title {
    min-height: 70px;
  }
  .hot-title {
    margin: 0 auto;
    padding: 20px 0;
    h2 {
      margin-bottom: 0;
    }
    p {
      text-align: center;
      font-size: 16px;
      color: #666;
    }
  }
  .hot-template {
    font-size: 22px;
    color: #333;
  }
  .hot-template:after,
  .hot-template:before {
    content: '';
    display: inline-block;
    width: 57px;
    height: 1px;
    margin: 0 26px;
    background-color: #d8d8d8;
    vertical-align: middle;
  }
}
</style>
