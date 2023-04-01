<template>
  <div class="create-component-list">
    <div v-for="(item, index) in list" :key="index" @click="onItemClick(item)">
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>
<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ComponentData } from '../store/editor'
import { imageDefaultProps, TextComponentProps } from 'lego-bricks'
import LText from './LText.vue'

const props = defineProps({
  list: {
    type: Array<any>,
    required: true
  }
})
const emit = defineEmits(['on-item-click'])
const onItemClick = (props: TextComponentProps) => {
  const componentData: ComponentData = {
    name: 'l-text',
    id: uuidv4(),
    props
  }
  emit('on-item-click', componentData)
}

// export default defineComponent({
//   props: {
//     list: {
//       type: Array<any>,
//       required: true
//     }
//   },
//   components: {
//     LText
//   },
//   emits: ['on-item-click'],
//   name: 'components-list',
//   setup(props, context) {
//     const onItemClick = (props: TextComponentProps) => {
//       const componentData: ComponentData = {
//         name: 'l-text',
//         id: uuidv4(),
//         props
//       }
//       context.emit('on-item-click', componentData)
//     }
//     return {
//       onItemClick
//     }
//   }
// })
//
</script>
