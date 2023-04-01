<template>
  <div class="editor-container">
    <!-- <a-modal title="发布成功">
    </a-modal> -->
    <a-layout>
      <a-layout-header class="header">
        <div class="page-title">
          <router-link to="/">
            <img alt="慕课乐高" src="@/assets/logo-simple.png" class="logo-img" />
          </router-link>
          <inline-edit :value="page.title" @change="titleChange" />
        </div>
      </a-layout-header>
    </a-layout>
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <div class="sidebar-container">
          组件列表
          <components-list :list="defaultTextTemplates" @onItemClick="addItem" />
          <img id="test-image" :style="{ width: '300px' }" />
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <div class="preview-list" id="canvas-area" :class="{ 'canvas-fix': canvasFix }">
            <div class="body-container" :style="page.props">
              <edit-wrapper
                v-for="component in components"
                @setActive="setActive"
                @update-position="updatePosition"
                :key="component.id"
                :id="component.id"
                :hidden="component.isHidden"
                :props="component.props"
                :active="component.id === (currentElement && currentElement.id)"
              >
                <component :is="component.name" v-bind="component.props"></component>
              </edit-wrapper>
            </div>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout width="300" style="background: #fff" class="settings-panel">
        <a-tabs type="card" v-model:activeKey="activePanel">
          <a-tab-pane key="component" tab="属性设置" class="no-top-radius"> 属性设置 </a-tab-pane>
          <a-tab-pane key="layer" tab="图层设置"> 图层设置 </a-tab-pane>
          <a-tab-pane key="page" tab="页面设置">
            <!-- <props-table :props="page.props" @change="pageChange"></props-table> -->
          </a-tab-pane>
        </a-tabs>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import store from '@/store'
import { computed, ref, defineComponent } from 'vue'
import { ComponentData } from '@/store/editor'
import EditWrapper from './EditWrapper.vue'
import LText from '../../components/LText.vue'
import ComponentsList from '@/components/ComponentsList.vue'
import defaultTextTemplates from './defaultTemplates'
import { pickBy } from 'lodash-es'
export type TabType = 'component' | 'layer' | 'page'

export default defineComponent({
  components: {
    LText,
    EditWrapper,
    ComponentsList
  },
  setup() {
    const canvasFix = ref(false)
    const page: any = computed(() => store.state.editor.page)
    const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)
    const components = computed(() => store.state.editor.components)
    const activePanel = ref<TabType>('component')
    // console.log('components==>', components.value)
    const updatePosition = (data: { left: number; top: number; id: string }) => {
      const { id } = data
      const updateData = pickBy<number>(data, (v: any, k: any) => k !== 'id')
      const keysArr = Object.keys(updateData)
      const valueArr = Object.values(updateData).map((v) => v + 'px')
      store.commit('updateComponent', { key: keysArr, value: valueArr, id })
    }

    const setActive = (id: string) => {
      store.commit('setActive', id)
    }
    const addItem = (component: any) => {
      store.commit('addComponent', component)
    }
    const titleChange = () => {}
    return {
      page,
      canvasFix,
      components,
      currentElement,
      activePanel,
      defaultTextTemplates,
      titleChange,
      setActive,
      updatePosition,
      addItem
    }
  }
})
</script>
<style>
.editor-container .preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #ffffff;
}
.editor-container .preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
.page-title {
  display: flex;
}
.page-title .inline-edit span {
  font-weight: 500;
  margin-left: 10px;
  font-size: 16px;
}
.preview-list.canvas-fix .edit-wrapper > * {
  box-shadow: none !important;
}
.preview-list.canvas-fix {
  position: absolute;
  max-height: none;
}
</style>
