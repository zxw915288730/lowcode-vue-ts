<template>
  <div class="welcome-container">
    <div class="welcome-container-inner">
      <a-row type="flex" justify="center">
        <a-col :span="8" class="feature-item">
          <span role="img" aria-label="html5" class="anticon anticon-html5">
            <svg-icon name="h5" className="welcome-icon"></svg-icon>
          </span>
          <h3>专注H5 始终如一</h3>
          <p>三年保持行业领先</p>
        </a-col>
        <a-col :span="8" class="feature-item">
          <span role="img" aria-label="build" class="anticon anticon-build">
            <svg-icon name="build" className="welcome-icon"></svg-icon>
          </span>
          <h3>海量 H5 模版</h3>
          <p>一键生成，一分钟轻松制作</p>
        </a-col>
        <a-col :span="8" class="feature-item">
          <span role="img" aria-label="bulb" class="anticon anticon-bulb">
            <svg-icon name="bulb" className="welcome-icon"></svg-icon>
          </span>
          <h3>极致体验</h3>
          <p>用户的一致选择</p>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script setup></script>
<style lang="less">
.welcome-container {
  background: #f2f2f2;
  .welcome-container-inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  .welcome-icon {
    font-size: 60px;
  }
  .feature-item {
    text-align: center;
    padding: 20px 0;
  }
}
</style>
