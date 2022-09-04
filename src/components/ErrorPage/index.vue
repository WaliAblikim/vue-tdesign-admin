<template>
  <div class="main">
    <div class="content">
      <slot name="image">
        <img src="@/assets/images/error-page.png" />
      </slot>
      <div class="info">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
        <t-button @click="$router.replace({ path: '/' })">返回首页</t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    display: flex;
    height: 320px;
    flex-direction: column;
    img {
      height: 90%;
      margin-bottom: 30px;
    }
    .info {
      flex: 1;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .description {
      font-size: 18px;
      color: #525151;
      margin-bottom: 30px;
    }
  }
}
</style>
