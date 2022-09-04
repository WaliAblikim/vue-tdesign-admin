<template>
  <error-page title="404 无法找到该页面" description="抱歉您访问的页面不存在">
    <template #image>
      <img src="@/assets/images/error-page.png" />
    </template>
  </error-page>
</template>

<script>
import ErrorPage from "@/components/ErrorPage";

export default {
  name: "NotFound",
  components: { ErrorPage },
};
</script>

<style scoped></style>
