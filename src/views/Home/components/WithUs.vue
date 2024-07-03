<template>
  <div class="withus">
    <div class="bg">
      <video
        class="video"
        :src="require('@/assets/video/bg2.mp4')"
        autoplay
        loop
        muted
      ></video>
    </div>
    <div class="main">
      <div class="title">与 Wootek一起推动您的品牌发展</div>
    <div class="btn">联系我们</div>
    </div>

  </div>
</template>

<script>
export default {

};

</script>

<style lang="scss" scoped>
.withus{
  width: 100%;
  height: 200px;
  position: relative;
  .bg{
    position: absolute;
    z-index: -1;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    .video{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      opacity: 1;
    }
  }
  .main{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    flex-direction: column;

    .title{
      font-size: 38px;
    }
    .btn{
      margin-top: 10px;
      width: 186px;
      height: 40px;
      display: flex;
      color: #fff;
      background-color: #ffbf23 ;
      justify-content: center;
      align-items: center;
      cursor:pointer;

    }
  }
}
</style>
