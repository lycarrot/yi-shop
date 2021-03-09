<template>
  <div class="wrap">
    <div class="header" v-if="navbar.show">
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div class="footer" v-if="footer.show">
      <van-tabbar v-model="active" route>
        <van-tabbar-item name="home" replace to="/home" icon="home-o"
          >首页</van-tabbar-item
        >
        <van-tabbar-item name="classify" replace to="/classify" icon="search"
          >分类</van-tabbar-item
        >
        <van-tabbar-item name="cart" replace to="/cart" icon="cart-o"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item name="my" replace to="/my" icon="friends-o"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </div>
    <router-view />
  </div>
</template>
<script>

import { ref } from 'vue';

export default {
  setup() {
    const active = ref('home');
    return { active };
  },
  data() {
    return {
      navbar: {

      },
      footer: {

      }
    }
  },

  methods: {

  },
  watch: {
    '$route': {
      immediate: true,
      handler(to) {
        this.navbar = to.meta.nav || {}
        this.footer = to.meta.tab || {}
        if (to.meta.login && !this.$store.state.isLogin) {
          this.$router.push('/login')
        }
      }

    }
  }
}
</script>
<style lang="less" scoped>
.wrap{
  width: 100vw;
  height: 100vh;
}
</style>