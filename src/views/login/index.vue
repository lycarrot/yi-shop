<template>
  <div class="login-wrap">
    <div class="tab">
      <div class="item" @click="isLogin = true">
        <span :class="isLogin ? 'active' : ''">登录</span>
      </div>
      <div class="item" @click="isLogin = false">
        <span :class="!isLogin ? 'active' : ''">注册</span>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <van-icon name="friends-o" color="#95C5FF" size="28" class="icon" />
        <input class="input" placeholder="请输入手机号码" />
      </div>
      <div class="item">
        <van-icon name="notes-o" color="#95C5FF" size="28" class="icon" />
        <input class="input" placeholder="请输入密码" />
      </div>
      <div class="item" v-if="!isLogin">
        <van-icon name="notes-o" color="#95C5FF" size="28" class="icon" />
        <input class="input" placeholder="请再次输入密码" />
      </div>
      <div class="item">
        <van-icon name="envelop-o" color="#95C5FF" size="28" class="icon" />
        <input class="input" placeholder="请输入验证码" />
      </div>
    </div>
    <div class="submit">
      <van-button type="primary" size="large" round>{{
        isLogin ? "立即登录" : "立即注册"
      }}</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLogin: true
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('6565',to)
    to.path = to.path + '?a=111111'
    to.fullPath = to.fullPath + '?a=111111'
    next()
  },
}
</script>
<style lang="less" scoped>
.login-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .tab {
    width: 100%;
    height: 140px;
    box-sizing: border-box;
    padding-top: 80px;
    margin-bottom: 35px;
    background: #1989fa;
    display: flex;
    font-size: 17px;
    color: #fff;

    .item {
      height: 62px;
      line-height: 62px;
      text-align: center;
      flex-grow: 1;
      flex-basis: 50%;
      .active {
        border-bottom: 3px solid #fff;
      }
    }
  }
  .content {
    .item {
      width: 302px;
      height: 58px;
      border-bottom: 1px solid #eeeeee;
      display: flex;
      align-items: center;
      overflow: hidden;
      .icon {
        margin-right: 8px;
      }
      .input {
        height: 36px;
        max-width: 260px;
        font-size: 16px;
      }
    }
  }
  .submit {
    margin-top: 35px;
    width: 280px;
  }
}
</style>