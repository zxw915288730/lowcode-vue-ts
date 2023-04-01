<template>
  <div class="homepage-container">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">乐高</router-link>
        </div>
        <UserProfile :user="user"></UserProfile>
      </a-layout-header>
      <a-layout-content class="home-layout">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer> © Zhou（Aaron.com）版权所有 | 粤ICP备20000918号-2 </a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
console.log('store', store)
const user = computed(() => store.state.user)
</script>
<style lang="less">
.homepage-container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ant-layout-footer {
    text-align: center;
  }
  .page-title {
    color: #fff;
  }
  .home-layout {
    padding: 0px 24px;
    min-height: 85vh;
    max-width: 1200px;
    margin: 0px auto;
    width: 100%;
  }
}
</style>
