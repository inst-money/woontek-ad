<template>
  <div class="item">
    <!-- <div class="logo" :class="logo"></div> -->
    <img :src="logo" class="logo" />
    <div class="title">{{ title }}</div>
    <div class="desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
    logo: String,
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: 241px;
  height: 249px;
  background: #fff;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:nth-child(1) {
    .logo {
      width: 50px;
      height: 50px;
    }
  }
  &:nth-child(2) {
    .logo {
      width: auto;
      height: 50px;
    }
  }
  &:nth-child(3) {
    .logo {
      width: auto;
      height: 50px;
    }
  }
  &:nth-child(4) {
    .logo {
      width: auto;
      height: 50px;
    }
  }

  .logo {
    width: 50px;
    height: 56px;
    // background-color: orange;
  }

  .title {
    color: rgba(153, 110, 0, 1);
    margin-top: 20px;
    font-size: 26px;
    line-height: normal;
    text-align: center;
  }

  .desc {
    padding: 15px;
    font-size: 15px;
    line-height: 1.5;
    text-align: center;
    color: #282626;

  }
}</style>
