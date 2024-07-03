<template>
  <header class="header" id="head">
    <div class="left-wrap">
      <img class="logo" :src="logo" alt="">
    </div>
    <div class="right-wrap">
      <nav class="nav">
        <a class="nav-item" :class="{ 'active': currentIndex === 1 }" @click="toIndex(1)" href="#head">首页</a>
        <a class="nav-item" :class="{ 'active': currentIndex === 2 }" @click="toIndex(2)"  href="#solution">解决方案</a>
        <a class="nav-item" :class="{ 'active': currentIndex === 3 }" @click="toIndex(3)" href="#intro">广告形式</a>
        <a class="nav-item" :class="{ 'active': currentIndex === 4 }" @click="toIndex(4)" href="#serives">服务范畴</a>
        <a class="nav-item" :class="{ 'active': currentIndex === 5 }" @click="toIndex(5)" href="#whybeselected">数字化投放</a>
        <a class="nav-item" :class="{ 'active': currentIndex === 6 }" @click="toIndex(6)" href="#contact-us">关于我们</a>
      </nav>
      <div class="contact-us">联系我们</div>
      <div class="language">中文</div>
    </div>
  </header>
</template>

<script>
import imgSrc from '@/assets/images/logo.png';

export default {
  data() {
    return {
      logo: imgSrc,
      currentIndex: 1,
    };
  },
  methods: {
    toIndex(index) {
      let i = index;
      i = 1;
      this.currentIndex = i;
    },
  },

};
</script>

<style lang="scss" scoped>
.header {
  // background: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 120px;

  .left-wrap {
    .logo {
      width: 180px;
    }

  }

  .right-wrap {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;

    .nav {
      height: 100%;
      display: flex;
      // flex-grow: 1;
    }

    .nav-item {
      display:block;
      text-decoration: none;
      color: rgb(0, 0, 0);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      transition: color 0.4s ease 0s;
      cursor: pointer;
      flex-grow: 1;

      &:hover {
        color: rgb(110, 110, 110);
        color: rgb(255, 191, 35);
      }

      &.active {
        color: rgb(255, 191, 35);
      }

    }

    .contact-us {
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(255, 191, 35);
      width: 112px;
      height: 40px;
      margin-left: 40px;
      margin-right: 40px;
      visibility: hidden;
    }

    .language {
      visibility: hidden;
    }

  }

}
</style>
