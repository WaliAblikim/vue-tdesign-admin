<template>
  <div class="login">
    <t-card title="登录页面" shadow :style="{ width: '600px' }"
      ><t-form ref="form" :colon="true" :labelWidth="0">
        <t-form-item name="account">
          <t-input clearable placeholder="请输入账户名">
            <desktop-icon slot="prefix-icon"></desktop-icon>
          </t-input>
        </t-form-item>
        <t-form-item name="password">
          <t-input type="password" clearable placeholder="请输入密码">
            <lock-on-icon slot="prefix-icon"></lock-on-icon>
          </t-input>
        </t-form-item>
        <t-form-item>
          <t-button theme="primary" type="submit" block>登录</t-button>
        </t-form-item>
      </t-form>
    </t-card>
  </div>
</template>

<script>
import { DesktopIcon, LockOnIcon } from "tdesign-icons-vue";
export default {
  name: "Login",
  components: {
    DesktopIcon,
    LockOnIcon,
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
