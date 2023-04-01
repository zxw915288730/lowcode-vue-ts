<template>
  <div class="app-container">
    <!-- <a-spin v-if="showLoading"></a-spin> -->
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
// import { computed } from 'vue'
import { useStore } from 'vuex'

// const store = useStore()
// const showLoading = computed(() => store.getters.isLoading)
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
