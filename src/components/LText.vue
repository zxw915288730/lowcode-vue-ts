<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">
    {{ text }}
  </component>
  <!-- <div>Hello world</div> -->
</template>
<script lang="ts">
import { pick } from 'lodash-es'
import { computed, defineComponent } from 'vue'
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropNames
} from '@/views/editor/defaultProps'
const defaultpProps = transformToComponentProps(textDefaultProps)
export default defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    // eslint-disable-next-line vue/valid-define-props
    ...defaultpProps
  },
  setup(props) {
    const styleProps = computed(() => pick(props, textStylePropNames))
    console.log('styleProps', styleProps)
    const handleClick = () => {}
    return {
      styleProps,
      handleClick
    }
  }
})
</script>
<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
