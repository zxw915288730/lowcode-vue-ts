<template>
  <div class="banner">
    <img
      class="banner-img"
      src="https://oss.imooc-lego.com/editor/img/background.3744875e.png"
      style="background-color: rgb(0, 0, 0)"
    />
    <div class="banner-text">
      <h2 class="text-headline" style="color: rgb(255, 255, 255)">海量精彩设计 一键生成</h2>
      <a-input-search placeholder="搜索一下，快速找模版" enter-button />
      <!-- <span class="ant-input-search ant-input-search-enter-button ant-input-group-wrapper"
        ><span class="ant-input-wrapper ant-input-group"
          ><a-input-search placeholder="搜索一下，快速找模版" type="text" />
          <span
            class="ant-input-group-addon"
            ><a-button type="primary">
              <template #icon><search-outlined /></template>
            </a-button>
          </span>
           </span
      ></span> -->
    </div>
  </div>
</template>
<script setup lang="ts">
// import { SearchOutlined } from '@ant-design/icons-vue'
</script>
<style lang="less">
.banner {
  display: flex;
  position: relative;
  height: 450px;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
  .banner-text {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    .text-headline {
      text-shadow: 0 0 1px rgb(68 92 116 / 2%), 0 2px 8px rgb(57 76 96 / 15%);
      font-size: 2rem;
    }
    .ant-input-search {
      width: 40%;
      // box-shadow: 0 12px 24px 0 rgb(30 29 32 / 80%);
    }
    .ant-input {
      height: 40px;
      font-size: 17px;
      padding: 7px 15px;
      padding-right: 30px;
      border: 2px solid #3e7fff;
      border-radius: 20px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 0;
    }
    .ant-btn {
      box-shadow: none;
      text-shadow: none;
    }
    .ant-input-group-addon {
      border-radius: 20px;
    }
    .ant-input-search-button {
      height: 40px;
      border: 2px solid #3e7fff;
      border-left-width: 0;
      display: flex;
      align-items: center;
      border-radius: 0 20px 20px 0 !important;
      svg {
        font-size: 24px;
      }
    }
  }
}
</style>
