<template>
  <svg class="svg-icon" :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#409eff'
  }
})

// 图标在 iconfont 中的名字

const iconClassName = computed(() => {
  return `#${props.iconName}`
})

// 给图标添加上类名

const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
